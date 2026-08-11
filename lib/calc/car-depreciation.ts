export interface CarDepreciationInput {
  purchasePrice: number;
  projectionYears: number;
  year1RatePercent: number;
  yearsTwoToFiveRatePercent: number;
  afterYearFiveRatePercent: number;
}

export interface CarDepreciationYear {
  year: number;
  value: number;
  depreciationThisYear: number;
  cumulativeDepreciation: number;
}

export interface CarDepreciationResult {
  finalValue: number;
  totalDepreciation: number;
  totalDepreciationPercent: number;
  yearlyBreakdown: CarDepreciationYear[];
}

export function calculateCarDepreciation(input: CarDepreciationInput): CarDepreciationResult {
  const purchasePrice = Math.max(input.purchasePrice, 0);
  const projectionYears = Math.min(Math.max(Math.round(input.projectionYears), 1), 15);

  const yearlyBreakdown: CarDepreciationYear[] = [];
  let value = purchasePrice;

  for (let year = 1; year <= projectionYears; year++) {
    const rate =
      year === 1
        ? Math.max(input.year1RatePercent, 0)
        : year <= 5
          ? Math.max(input.yearsTwoToFiveRatePercent, 0)
          : Math.max(input.afterYearFiveRatePercent, 0);

    const startValue = value;
    value = value * (1 - rate / 100);
    yearlyBreakdown.push({
      year,
      value,
      depreciationThisYear: startValue - value,
      cumulativeDepreciation: purchasePrice - value,
    });
  }

  const totalDepreciation = purchasePrice - value;

  return {
    finalValue: value,
    totalDepreciation,
    totalDepreciationPercent: purchasePrice > 0 ? (totalDepreciation / purchasePrice) * 100 : 0,
    yearlyBreakdown,
  };
}
