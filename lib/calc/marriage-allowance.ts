import { PERSONAL_ALLOWANCE, MARRIAGE_ALLOWANCE_TRANSFERABLE, EWNI_BANDS } from "./uk-rates";

export interface MarriageAllowanceInput {
  lowerEarnerIncome: number;
  higherEarnerIncome: number;
}

export interface MarriageAllowanceResult {
  isEligible: boolean;
  higherEarnerSaving: number;
  lowerEarnerExtraTax: number;
  netHouseholdSaving: number;
}

const BASIC_RATE = EWNI_BANDS[0].rate;
const BASIC_RATE_UPPER_LIMIT = PERSONAL_ALLOWANCE + EWNI_BANDS[0].upTo;

export function calculateMarriageAllowance(input: MarriageAllowanceInput): MarriageAllowanceResult {
  const lowerEarnerIncome = Math.max(input.lowerEarnerIncome, 0);
  const higherEarnerIncome = Math.max(input.higherEarnerIncome, 0);

  const isEligible =
    lowerEarnerIncome < PERSONAL_ALLOWANCE &&
    higherEarnerIncome > PERSONAL_ALLOWANCE &&
    higherEarnerIncome <= BASIC_RATE_UPPER_LIMIT;

  if (!isEligible) {
    return { isEligible: false, higherEarnerSaving: 0, lowerEarnerExtraTax: 0, netHouseholdSaving: 0 };
  }

  const reducedAllowance = PERSONAL_ALLOWANCE - MARRIAGE_ALLOWANCE_TRANSFERABLE;
  const lowerEarnerExtraTax = Math.max(lowerEarnerIncome - reducedAllowance, 0) * BASIC_RATE;
  const higherEarnerSaving = MARRIAGE_ALLOWANCE_TRANSFERABLE * BASIC_RATE;
  const netHouseholdSaving = higherEarnerSaving - lowerEarnerExtraTax;

  return { isEligible, higherEarnerSaving, lowerEarnerExtraTax, netHouseholdSaving };
}
