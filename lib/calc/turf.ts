export interface TurfInput {
  lengthM: number;
  widthM: number;
  wastagePercent: number;
  rollCoverageM2: number;
  pricePerRoll: number;
}

export interface TurfResult {
  areaM2: number;
  areaWithWastageM2: number;
  rollsNeeded: number;
  totalCost: number;
}

export function calculateTurf(input: TurfInput): TurfResult {
  const lengthM = Math.max(input.lengthM, 0);
  const widthM = Math.max(input.widthM, 0);
  const wastagePercent = Math.max(input.wastagePercent, 0);
  const rollCoverageM2 = Math.max(input.rollCoverageM2, 0.1);
  const pricePerRoll = Math.max(input.pricePerRoll, 0);

  const areaM2 = lengthM * widthM;
  const areaWithWastageM2 = areaM2 * (1 + wastagePercent / 100);
  const rollsNeeded = Math.ceil(areaWithWastageM2 / rollCoverageM2);
  const totalCost = rollsNeeded * pricePerRoll;

  return { areaM2, areaWithWastageM2, rollsNeeded, totalCost };
}
