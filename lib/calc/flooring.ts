export type RoomShape = "rectangle" | "l-shape" | "custom";
export type FlooringType = "laminate" | "vinyl" | "engineered-wood" | "solid-wood" | "carpet" | "tile";

// Typical, illustrative pack coverage per type (square metres). Editable by the
// user, since actual coverage varies by product and brand.
export const DEFAULT_PACK_SIZE_M2: Record<FlooringType, number> = {
  laminate: 2.22,
  vinyl: 2.5,
  "engineered-wood": 1.86,
  "solid-wood": 1.9,
  carpet: 1,
  tile: 1,
};

export const FLOORING_TYPE_LABELS: Record<FlooringType, string> = {
  laminate: "Laminate",
  vinyl: "Vinyl",
  "engineered-wood": "Engineered wood",
  "solid-wood": "Solid wood",
  carpet: "Carpet",
  tile: "Tile",
};

export interface FlooringInput {
  shape: RoomShape;
  lengthM: number;
  widthM: number;
  length2M: number;
  width2M: number;
  customAreaM2: number;
  wastagePercent: number;
  packSizeM2: number;
  pricePerM2: number;
}

export interface FlooringResult {
  baseAreaM2: number;
  areaWithWastageM2: number;
  packsNeeded: number;
  totalAreaPurchasedM2: number;
  estimatedCost: number;
}

export function calculateFlooringArea(input: FlooringInput): number {
  if (input.shape === "rectangle") {
    return input.lengthM * input.widthM;
  }
  if (input.shape === "l-shape") {
    return input.lengthM * input.widthM + input.length2M * input.width2M;
  }
  return input.customAreaM2;
}

export function calculateFlooring(input: FlooringInput): FlooringResult {
  const baseAreaM2 = calculateFlooringArea(input);
  const areaWithWastageM2 = baseAreaM2 * (1 + input.wastagePercent / 100);
  const packsNeeded =
    input.packSizeM2 > 0 ? Math.ceil(areaWithWastageM2 / input.packSizeM2) : 0;
  const totalAreaPurchasedM2 = packsNeeded * input.packSizeM2;
  const estimatedCost = totalAreaPurchasedM2 * input.pricePerM2;

  return {
    baseAreaM2,
    areaWithWastageM2,
    packsNeeded,
    totalAreaPurchasedM2,
    estimatedCost,
  };
}
