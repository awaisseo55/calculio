import {
  CORPORATION_TAX_SMALL_PROFITS_RATE,
  CORPORATION_TAX_MAIN_RATE,
  CORPORATION_TAX_LOWER_LIMIT,
  CORPORATION_TAX_UPPER_LIMIT,
  CORPORATION_TAX_MARGINAL_RELIEF_FRACTION,
} from "./uk-rates";

export interface CorporationTaxInput {
  annualProfit: number;
}

export interface CorporationTaxResult {
  corporationTax: number;
  profitAfterTax: number;
  effectiveRatePercent: number;
  marginalReliefApplied: number;
  band: "small-profits" | "marginal-relief" | "main-rate";
}

export function calculateCorporationTax(input: CorporationTaxInput): CorporationTaxResult {
  const profit = Math.max(input.annualProfit, 0);

  let corporationTax: number;
  let marginalReliefApplied = 0;
  let band: CorporationTaxResult["band"];

  if (profit <= CORPORATION_TAX_LOWER_LIMIT) {
    corporationTax = profit * CORPORATION_TAX_SMALL_PROFITS_RATE;
    band = "small-profits";
  } else if (profit >= CORPORATION_TAX_UPPER_LIMIT) {
    corporationTax = profit * CORPORATION_TAX_MAIN_RATE;
    band = "main-rate";
  } else {
    const taxAtMainRate = profit * CORPORATION_TAX_MAIN_RATE;
    marginalReliefApplied =
      (CORPORATION_TAX_UPPER_LIMIT - profit) * CORPORATION_TAX_MARGINAL_RELIEF_FRACTION;
    corporationTax = taxAtMainRate - marginalReliefApplied;
    band = "marginal-relief";
  }

  const profitAfterTax = profit - corporationTax;

  return {
    corporationTax,
    profitAfterTax,
    effectiveRatePercent: profit > 0 ? (corporationTax / profit) * 100 : 0,
    marginalReliefApplied,
    band,
  };
}
