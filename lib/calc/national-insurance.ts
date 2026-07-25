import {
  NI_PRIMARY_THRESHOLD,
  NI_UPPER_EARNINGS_LIMIT,
  NI_MAIN_RATE,
  NI_UPPER_RATE,
  CLASS2_SMALL_PROFITS_THRESHOLD,
  CLASS2_VOLUNTARY_WEEKLY_RATE,
  CLASS4_LOWER_PROFITS_LIMIT,
  CLASS4_UPPER_PROFITS_LIMIT,
  CLASS4_MAIN_RATE,
  CLASS4_UPPER_RATE,
} from "./uk-rates";

export interface NationalInsuranceInput {
  annualIncome: number;
  selfEmployed: boolean;
}

export interface NationalInsuranceResult {
  employeeNI: number;
  class4NI: number;
  class2VoluntaryAvailable: boolean;
  class2VoluntaryAmount: number;
  totalNI: number;
  monthlyNI: number;
}

export function calculateNationalInsurance(
  input: NationalInsuranceInput
): NationalInsuranceResult {
  if (!input.selfEmployed) {
    const income = input.annualIncome;
    const mainBand = Math.max(Math.min(income, NI_UPPER_EARNINGS_LIMIT) - NI_PRIMARY_THRESHOLD, 0);
    const upperBand = Math.max(income - NI_UPPER_EARNINGS_LIMIT, 0);
    const employeeNI = mainBand * NI_MAIN_RATE + upperBand * NI_UPPER_RATE;

    return {
      employeeNI,
      class4NI: 0,
      class2VoluntaryAvailable: false,
      class2VoluntaryAmount: 0,
      totalNI: employeeNI,
      monthlyNI: employeeNI / 12,
    };
  }

  const profit = input.annualIncome;
  const mainBand4 = Math.max(Math.min(profit, CLASS4_UPPER_PROFITS_LIMIT) - CLASS4_LOWER_PROFITS_LIMIT, 0);
  const upperBand4 = Math.max(profit - CLASS4_UPPER_PROFITS_LIMIT, 0);
  const class4NI = mainBand4 * CLASS4_MAIN_RATE + upperBand4 * CLASS4_UPPER_RATE;

  return {
    employeeNI: 0,
    class4NI,
    class2VoluntaryAvailable: profit < CLASS2_SMALL_PROFITS_THRESHOLD,
    class2VoluntaryAmount: CLASS2_VOLUNTARY_WEEKLY_RATE * 52,
    totalNI: class4NI,
    monthlyNI: class4NI / 12,
  };
}
