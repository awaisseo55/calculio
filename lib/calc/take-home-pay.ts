import { calculateIncomeTax, type TaxRegion } from "./income-tax";
import {
  NI_PRIMARY_THRESHOLD,
  NI_UPPER_EARNINGS_LIMIT,
  NI_MAIN_RATE,
  NI_UPPER_RATE,
  STUDENT_LOAN_PLANS,
  type StudentLoanPlan,
} from "./uk-rates";

export interface TakeHomePayInput {
  grossAnnualSalary: number;
  region: TaxRegion;
  studentLoanPlan: StudentLoanPlan;
  pensionPercent: number;
}

export interface TakeHomePayResult {
  grossAnnual: number;
  grossMonthly: number;
  pensionContribution: number;
  taxableSalary: number;
  incomeTax: number;
  nationalInsurance: number;
  studentLoanRepayment: number;
  netAnnual: number;
  netMonthly: number;
  netWeekly: number;
  personalAllowance: number;
  effectiveTaxRate: number;
}

export function calculateNationalInsurance(annualSalary: number): number {
  if (annualSalary <= NI_PRIMARY_THRESHOLD) return 0;

  const mainBand = Math.min(annualSalary, NI_UPPER_EARNINGS_LIMIT) - NI_PRIMARY_THRESHOLD;
  const upperBand = Math.max(annualSalary - NI_UPPER_EARNINGS_LIMIT, 0);

  return mainBand * NI_MAIN_RATE + upperBand * NI_UPPER_RATE;
}

export function calculateStudentLoanRepayment(
  annualSalary: number,
  plan: StudentLoanPlan
): number {
  const { threshold, rate } = STUDENT_LOAN_PLANS[plan];
  if (annualSalary <= threshold) return 0;
  return (annualSalary - threshold) * rate;
}

export function calculateTakeHomePay(input: TakeHomePayInput): TakeHomePayResult {
  const { grossAnnualSalary, region, studentLoanPlan, pensionPercent } = input;

  const pensionContribution = grossAnnualSalary * (pensionPercent / 100);
  const taxableSalary = Math.max(grossAnnualSalary - pensionContribution, 0);

  const incomeTaxResult = calculateIncomeTax({ grossIncome: taxableSalary, region });
  const nationalInsurance = calculateNationalInsurance(taxableSalary);
  const studentLoanRepayment = calculateStudentLoanRepayment(taxableSalary, studentLoanPlan);

  const netAnnual =
    grossAnnualSalary -
    pensionContribution -
    incomeTaxResult.totalTax -
    nationalInsurance -
    studentLoanRepayment;

  return {
    grossAnnual: grossAnnualSalary,
    grossMonthly: grossAnnualSalary / 12,
    pensionContribution,
    taxableSalary,
    incomeTax: incomeTaxResult.totalTax,
    nationalInsurance,
    studentLoanRepayment,
    netAnnual,
    netMonthly: netAnnual / 12,
    netWeekly: netAnnual / 52,
    personalAllowance: incomeTaxResult.personalAllowance,
    effectiveTaxRate:
      grossAnnualSalary > 0
        ? ((grossAnnualSalary - netAnnual) / grossAnnualSalary) * 100
        : 0,
  };
}
