import { calculateIncomeTax } from "./income-tax";
import {
  CLASS4_LOWER_PROFITS_LIMIT,
  CLASS4_UPPER_PROFITS_LIMIT,
  CLASS4_MAIN_RATE,
  CLASS4_UPPER_RATE,
  CLASS2_SMALL_PROFITS_THRESHOLD,
  CLASS2_VOLUNTARY_WEEKLY_RATE,
} from "./uk-rates";

export interface SelfEmployedTaxInput {
  annualProfit: number;
  allowableExpenses: number;
  class4Liable: boolean;
}

export interface SelfEmployedTaxResult {
  netProfit: number;
  taxableProfit: number;
  incomeTax: number;
  class4NI: number;
  class2VoluntaryAvailable: boolean;
  class2VoluntaryAmount: number;
  totalTaxBill: number;
  effectiveRate: number;
  takeHomeProfit: number;
}

export function calculateSelfEmployedTax(
  input: SelfEmployedTaxInput
): SelfEmployedTaxResult {
  const netProfit = Math.max(input.annualProfit - input.allowableExpenses, 0);
  const incomeTaxResult = calculateIncomeTax({
    grossIncome: netProfit,
    region: "england-wales-ni",
  });

  let class4NI = 0;
  if (input.class4Liable) {
    const mainBand = Math.max(
      Math.min(netProfit, CLASS4_UPPER_PROFITS_LIMIT) - CLASS4_LOWER_PROFITS_LIMIT,
      0
    );
    const upperBand = Math.max(netProfit - CLASS4_UPPER_PROFITS_LIMIT, 0);
    class4NI = mainBand * CLASS4_MAIN_RATE + upperBand * CLASS4_UPPER_RATE;
  }

  const totalTaxBill = incomeTaxResult.totalTax + class4NI;

  return {
    netProfit,
    taxableProfit: incomeTaxResult.taxableIncome,
    incomeTax: incomeTaxResult.totalTax,
    class4NI,
    class2VoluntaryAvailable: netProfit < CLASS2_SMALL_PROFITS_THRESHOLD,
    class2VoluntaryAmount: CLASS2_VOLUNTARY_WEEKLY_RATE * 52,
    totalTaxBill,
    effectiveRate: input.annualProfit > 0 ? (totalTaxBill / input.annualProfit) * 100 : 0,
    takeHomeProfit: input.annualProfit - totalTaxBill,
  };
}
