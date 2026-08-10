import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const svgPath = path.join(publicDir, "favicon.svg");
const svgBuffer = readFileSync(svgPath);

async function pngBuffer(size, background = { r: 0, g: 0, b: 0, alpha: 0 }) {
  return sharp(svgBuffer, { density: 384 })
    .resize(size, size, { fit: "contain", background })
    .png()
    .toBuffer();
}

// Build a valid ICO container embedding PNG-compressed images (supported since Vista).
function buildIco(images) {
  const count = images.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const dirSize = dirEntrySize * count;
  let offset = headerSize + dirSize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(count, 4); // image count

  const dirEntries = [];
  const imageBuffers = [];

  for (const { size, buffer } of images) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width (0 = 256)
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height (0 = 256)
    entry.writeUInt8(0, 2); // color palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(buffer.length, 8); // image data size
    entry.writeUInt32LE(offset, 12); // image data offset
    offset += buffer.length;
    dirEntries.push(entry);
    imageBuffers.push(buffer);
  }

  return Buffer.concat([header, ...dirEntries, ...imageBuffers]);
}

async function main() {
  const sizes = [16, 32, 48];
  const images = [];
  for (const size of sizes) {
    const buffer = await pngBuffer(size);
    images.push({ size, buffer });
  }
  const ico = buildIco(images);
  writeFileSync(path.join(publicDir, "favicon.ico"), ico);
  console.log("Wrote favicon.ico");

  const appleTouch = await pngBuffer(180, { r: 255, g: 255, b: 255, alpha: 1 });
  writeFileSync(path.join(publicDir, "apple-touch-icon.png"), appleTouch);
  console.log("Wrote apple-touch-icon.png");

  const icon192 = await pngBuffer(192);
  writeFileSync(path.join(publicDir, "icon-192.png"), icon192);
  console.log("Wrote icon-192.png");

  const icon512 = await pngBuffer(512);
  writeFileSync(path.join(publicDir, "icon-512.png"), icon512);
  console.log("Wrote icon-512.png");
}

main();
