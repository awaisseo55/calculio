import sharp from "sharp";

const W = 1200;
const H = 675;

function svg({ title, subtitle }) {
  return `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="g1" cx="14%" cy="8%" r="55%">
      <stop offset="0%" stop-color="#2563EB" stop-opacity="0.55" />
      <stop offset="100%" stop-color="#0B1220" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="g2" cx="92%" cy="90%" r="50%">
      <stop offset="0%" stop-color="#10B981" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#0B1220" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="mark" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2563EB" />
      <stop offset="100%" stop-color="#1d4ed8" />
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#0B1220" />
  <rect width="${W}" height="${H}" fill="url(#g1)" />
  <rect width="${W}" height="${H}" fill="url(#g2)" />

  <rect x="80" y="72" width="72" height="72" rx="20" fill="url(#mark)" />
  <text x="116" y="122" font-family="Arial, Helvetica, sans-serif" font-size="38" font-weight="700" fill="#ffffff" text-anchor="middle">C</text>
  <text x="168" y="118" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="600" fill="#E2E8F0">Calcul<tspan fill="#60A5FA">io</tspan></text>

  <text x="80" y="330" font-family="Arial, Helvetica, sans-serif" font-size="58" font-weight="700" fill="#ffffff">
    ${title}
  </text>
  <text x="80" y="380" font-family="Arial, Helvetica, sans-serif" font-size="27" fill="#94A3B8">
    ${subtitle}
  </text>
</svg>`;
}

const images = [
  {
    file: "self-employed-tax-guide-2026.jpg",
    title: "Self-Employed Tax Guide",
    subtitle: "Income Tax, NI and expenses for 2026/27",
  },
  {
    file: "compound-interest-explained.jpg",
    title: "Compound Interest Explained",
    subtitle: "The formula that grows your savings",
  },
  {
    file: "ulez-london-driving-guide.jpg",
    title: "Driving in London 2026",
    subtitle: "ULEZ, congestion charge and what you pay",
  },
];

for (const img of images) {
  const buf = Buffer.from(svg(img));
  await sharp(buf)
    .jpeg({ quality: 90 })
    .toFile(`public/blog/${img.file}`);
  console.log(`Generated public/blog/${img.file}`);
}
