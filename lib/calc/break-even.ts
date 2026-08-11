export interface BreakEvenInput {
  fixedCosts: number;
  pricePerUnit: number;
  variableCostPerUnit: number;
  targetProfit: number;
}

export interface BreakEvenResult {
  contributionMargin: number;
  contributionMarginRatioPercent: number;
  breakEvenUnits: number | null;
  breakEvenRevenue: number | null;
  unitsForTargetProfit: number | null;
  revenueForTargetProfit: number | null;
}

export function calculateBreakEven(input: BreakEvenInput): BreakEvenResult {
  const fixedCosts = Math.max(input.fixedCosts, 0);
  const pricePerUnit = Math.max(input.pricePerUnit, 0);
  const variableCostPerUnit = Math.max(input.variableCostPerUnit, 0);
  const targetProfit = Math.max(input.targetProfit, 0);

  const contributionMargin = pricePerUnit - variableCostPerUnit;
  const contributionMarginRatioPercent = pricePerUnit > 0 ? (contributionMargin / pricePerUnit) * 100 : 0;

  const canBreakEven = contributionMargin > 0;
  const breakEvenUnits = canBreakEven ? fixedCosts / contributionMargin : null;
  const breakEvenRevenue = breakEvenUnits !== null ? breakEvenUnits * pricePerUnit : null;

  const unitsForTargetProfit = canBreakEven ? (fixedCosts + targetProfit) / contributionMargin : null;
  const revenueForTargetProfit =
    unitsForTargetProfit !== null ? unitsForTargetProfit * pricePerUnit : null;

  return {
    contributionMargin,
    contributionMarginRatioPercent,
    breakEvenUnits,
    breakEvenRevenue,
    unitsForTargetProfit,
    revenueForTargetProfit,
  };
}
