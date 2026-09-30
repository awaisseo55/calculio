export interface InflationInput {
  amount: number;
  annualInflationRatePercent: number;
  years: number;
}

export interface InflationResult {
  futureCost: number;
  extraCost: number;
  purchasingPower: number;
  totalInflationPercent: number;
}

export function calculateInflation(input: InflationInput): InflationResult {
  const amount = Math.max(input.amount, 0);
  const rate = Math.max(input.annualInflationRatePercent, -99) / 100;
  const years = Math.max(input.years, 0);
  const multiplier = Math.pow(1 + rate, years);
  const futureCost = amount * multiplier;
  const purchasingPower = multiplier > 0 ? amount / multiplier : 0;

  return {
    futureCost,
    extraCost: futureCost - amount,
    purchasingPower,
    totalInflationPercent: (multiplier - 1) * 100,
  };
}
