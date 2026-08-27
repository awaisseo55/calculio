export interface UnitPriceInput {
  priceA: number;
  quantityA: number;
  priceB: number;
  quantityB: number;
}

export interface UnitPriceResult {
  unitPriceA: number;
  unitPriceB: number;
  cheaperOption: "A" | "B" | "same";
  savingsPercent: number;
  savingsPerUnit: number;
}

export function calculateUnitPrice(input: UnitPriceInput): UnitPriceResult {
  const priceA = Math.max(input.priceA, 0);
  const quantityA = Math.max(input.quantityA, 0.001);
  const priceB = Math.max(input.priceB, 0);
  const quantityB = Math.max(input.quantityB, 0.001);

  const unitPriceA = priceA / quantityA;
  const unitPriceB = priceB / quantityB;

  let cheaperOption: "A" | "B" | "same" = "same";
  if (unitPriceA < unitPriceB - 0.0001) cheaperOption = "A";
  else if (unitPriceB < unitPriceA - 0.0001) cheaperOption = "B";

  const higher = Math.max(unitPriceA, unitPriceB);
  const lower = Math.min(unitPriceA, unitPriceB);
  const savingsPercent = higher > 0 ? ((higher - lower) / higher) * 100 : 0;
  const savingsPerUnit = higher - lower;

  return { unitPriceA, unitPriceB, cheaperOption, savingsPercent, savingsPerUnit };
}
