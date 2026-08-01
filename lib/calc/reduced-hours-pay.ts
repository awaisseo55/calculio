import { calculateTakeHomePay } from "./take-home-pay";
import type { StudentLoanPlan } from "./uk-rates";
import type { TaxRegion } from "./income-tax";

export interface ReducedHoursPayInput {
  currentAnnualSalary: number;
  currentHoursPerWeek: number;
  newHoursPerWeek: number;
  taxCode: string;
  pensionPercent: number;
  studentLoanPlan: StudentLoanPlan;
}

export interface ReducedHoursPayResult {
  region: TaxRegion;
  newGrossAnnualSalary: number;
  newGrossMonthlySalary: number;
  hoursReductionPercent: number;
  currentNetMonthly: number;
  newNetMonthly: number;
  netMonthlyDifference: number;
  netAnnualDifference: number;
  currentHourlyRate: number;
  newHourlyRate: number;
  currentPensionContributionAnnual: number;
  newPensionContributionAnnual: number;
  pensionContributionAnnualDifference: number;
}

export function regionFromTaxCode(taxCode: string): TaxRegion {
  return taxCode.trim().toUpperCase().startsWith("S") ? "scotland" : "england-wales-ni";
}

export function calculateReducedHoursPay(input: ReducedHoursPayInput): ReducedHoursPayResult {
  const {
    currentAnnualSalary,
    currentHoursPerWeek,
    newHoursPerWeek,
    taxCode,
    pensionPercent,
    studentLoanPlan,
  } = input;

  const region = regionFromTaxCode(taxCode);
  const hoursRatio = currentHoursPerWeek > 0 ? newHoursPerWeek / currentHoursPerWeek : 0;
  const newGrossAnnualSalary = currentAnnualSalary * hoursRatio;

  const current = calculateTakeHomePay({
    grossAnnualSalary: currentAnnualSalary,
    region,
    studentLoanPlan,
    pensionPercent,
  });
  const updated = calculateTakeHomePay({
    grossAnnualSalary: newGrossAnnualSalary,
    region,
    studentLoanPlan,
    pensionPercent,
  });

  const currentHourlyRate =
    currentHoursPerWeek > 0 ? currentAnnualSalary / (currentHoursPerWeek * 52) : 0;
  const newHourlyRate = currentHoursPerWeek > 0 ? newGrossAnnualSalary / (newHoursPerWeek * 52) : 0;

  return {
    region,
    newGrossAnnualSalary,
    newGrossMonthlySalary: newGrossAnnualSalary / 12,
    hoursReductionPercent:
      currentHoursPerWeek > 0
        ? ((currentHoursPerWeek - newHoursPerWeek) / currentHoursPerWeek) * 100
        : 0,
    currentNetMonthly: current.netMonthly,
    newNetMonthly: updated.netMonthly,
    netMonthlyDifference: updated.netMonthly - current.netMonthly,
    netAnnualDifference: updated.netAnnual - current.netAnnual,
    currentHourlyRate,
    newHourlyRate,
    currentPensionContributionAnnual: current.pensionContribution,
    newPensionContributionAnnual: updated.pensionContribution,
    pensionContributionAnnualDifference: updated.pensionContribution - current.pensionContribution,
  };
}
