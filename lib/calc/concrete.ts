export type ConcreteCalculationType = "slab" | "footing" | "post-hole" | "column";

export const CONCRETE_TYPE_LABELS: Record<ConcreteCalculationType, string> = {
  slab: "Slab (patio, base, shed)",
  footing: "Footing / foundation strip",
  "post-hole": "Post hole",
  column: "Column",
};

// General, illustrative mix ratios (cement : sand : aggregate) commonly used
// for each job type. Always check project-specific structural requirements,
// and consult a structural engineer or building control for load-bearing work.
export const CONCRETE_MIX_RATIOS: Record<ConcreteCalculationType, string> = {
  slab: "1 : 2 : 4 (general purpose)",
  footing: "1 : 2 : 4 (structural footing)",
  "post-hole": "1 : 2 : 4, or a proprietary quick-set post mix",
  column: "1 : 1.5 : 3 (stronger structural mix)",
};

const CONCRETE_DENSITY_KG_PER_M3 = 2400;
// Widely used builders' merchant rule of thumb: a 20kg bag of ready-mixed
// concrete yields roughly 0.01 cubic metres once mixed. Scaled for other bag
// sizes below.
const REFERENCE_BAG_KG = 20;
const REFERENCE_BAG_YIELD_M3 = 0.01;

export interface ConcreteInput {
  calculationType: ConcreteCalculationType;
  // Slab / footing
  lengthM: number;
  widthM: number;
  depthM: number;
  // Post hole / column
  diameterM: number;
  heightM: number;
  quantity: number;
  bagSizeKg: number;
  pricePerBag: number;
}

export interface ConcreteResult {
  volumePerUnitM3: number;
  totalVolumeM3: number;
  totalWeightKg: number;
  bagsNeeded: number;
  mixRatio: string;
  estimatedCost: number;
}

export function calculateConcreteVolume(input: ConcreteInput): number {
  if (input.calculationType === "slab" || input.calculationType === "footing") {
    return input.lengthM * input.widthM * input.depthM;
  }
  const radius = input.diameterM / 2;
  return Math.PI * radius * radius * input.heightM;
}

export function calculateConcrete(input: ConcreteInput): ConcreteResult {
  const volumePerUnitM3 = calculateConcreteVolume(input);
  const quantity = Math.max(input.quantity, 1);
  const totalVolumeM3 = volumePerUnitM3 * quantity;
  const totalWeightKg = totalVolumeM3 * CONCRETE_DENSITY_KG_PER_M3;

  const yieldPerBagM3 =
    input.bagSizeKg > 0
      ? (input.bagSizeKg / REFERENCE_BAG_KG) * REFERENCE_BAG_YIELD_M3
      : REFERENCE_BAG_YIELD_M3;
  const bagsNeeded = yieldPerBagM3 > 0 ? Math.ceil(totalVolumeM3 / yieldPerBagM3) : 0;
  const estimatedCost = bagsNeeded * input.pricePerBag;

  return {
    volumePerUnitM3,
    totalVolumeM3,
    totalWeightKg,
    bagsNeeded,
    mixRatio: CONCRETE_MIX_RATIOS[input.calculationType],
    estimatedCost,
  };
}
