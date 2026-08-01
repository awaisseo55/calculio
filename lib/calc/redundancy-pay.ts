import {
  REDUNDANCY_WEEKLY_PAY_CAP,
  REDUNDANCY_MAX_YEARS_SERVICE,
  REDUNDANCY_TAX_FREE_LIMIT,
  REDUNDANCY_AGE_BAND_MULTIPLIERS,
} from "./uk-rates";

export type EmploymentType = "statutory" | "enhanced";

export interface RedundancyPayInput {
  ageAtRedundancy: number;
  completeYearsOfService: number;
  weeklyPay: number;
  employmentType: EmploymentType;
  enhancedWeeksPerYear: number;
}

export interface RedundancyPayResult {
  cappedWeeklyPay: number;
  qualifyingYearsUsed: number;
  statutoryRedundancyPay: number;
  enhancedRedundancyPay: number;
  totalRedundancyPay: number;
  taxFreeAmount: number;
  taxableAmount: number;
}

function ageBandMultiplier(age: number): number {
  if (age < 22) return REDUNDANCY_AGE_BAND_MULTIPLIERS.under22;
  if (age <= 40) return REDUNDANCY_AGE_BAND_MULTIPLIERS.age22to40;
  return REDUNDANCY_AGE_BAND_MULTIPLIERS.over41;
}

export function calculateRedundancyPay(input: RedundancyPayInput): RedundancyPayResult {
  const { ageAtRedundancy, completeYearsOfService, weeklyPay, employmentType, enhancedWeeksPerYear } =
    input;

  const cappedWeeklyPay = Math.min(Math.max(weeklyPay, 0), REDUNDANCY_WEEKLY_PAY_CAP);
  const qualifyingYearsUsed = Math.min(
    Math.max(Math.floor(completeYearsOfService), 0),
    REDUNDANCY_MAX_YEARS_SERVICE
  );

  let totalMultiplier = 0;
  for (let i = 0; i < qualifyingYearsUsed; i++) {
    const ageDuringThatYear = ageAtRedundancy - i;
    totalMultiplier += ageBandMultiplier(ageDuringThatYear);
  }

  const statutoryRedundancyPay = totalMultiplier * cappedWeeklyPay;

  const enhancedRedundancyPay =
    employmentType === "enhanced"
      ? Math.max(completeYearsOfService, 0) * Math.max(enhancedWeeksPerYear, 0) * Math.max(weeklyPay, 0)
      : 0;

  const totalRedundancyPay =
    employmentType === "enhanced"
      ? Math.max(statutoryRedundancyPay, enhancedRedundancyPay)
      : statutoryRedundancyPay;

  const taxFreeAmount = Math.min(totalRedundancyPay, REDUNDANCY_TAX_FREE_LIMIT);
  const taxableAmount = Math.max(totalRedundancyPay - REDUNDANCY_TAX_FREE_LIMIT, 0);

  return {
    cappedWeeklyPay,
    qualifyingYearsUsed,
    statutoryRedundancyPay,
    enhancedRedundancyPay,
    totalRedundancyPay,
    taxFreeAmount,
    taxableAmount,
  };
}
