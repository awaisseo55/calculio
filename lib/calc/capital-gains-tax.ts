import { CGT_ANNUAL_EXEMPT_AMOUNT, CGT_BASIC_RATE, CGT_HIGHER_RATE } from "./uk-rates";

export type AssetType = "property" | "other";

export interface CapitalGainsTaxInput {
  salePrice: number;
  purchasePrice: number;
  allowableCosts: number;
  assetType: AssetType;
  higherRateTaxpayer: boolean;
}

export interface CapitalGainsTaxResult {
  gain: number;
  annualExemptAmountUsed: number;
  taxableGain: number;
  rate: number;
  cgtOwed: number;
  effectiveRate: number;
}

export function calculateCapitalGainsTax(
  input: CapitalGainsTaxInput
): CapitalGainsTaxResult {
  const gain = Math.max(input.salePrice - input.purchasePrice - input.allowableCosts, 0);
  const annualExemptAmountUsed = Math.min(gain, CGT_ANNUAL_EXEMPT_AMOUNT);
  const taxableGain = Math.max(gain - CGT_ANNUAL_EXEMPT_AMOUNT, 0);
  const rate = input.higherRateTaxpayer ? CGT_HIGHER_RATE : CGT_BASIC_RATE;
  const cgtOwed = taxableGain * rate;

  return {
    gain,
    annualExemptAmountUsed,
    taxableGain,
    rate,
    cgtOwed,
    effectiveRate: gain > 0 ? (cgtOwed / gain) * 100 : 0,
  };
}
