import { calculateTakeHomePay } from "./take-home-pay";
import type { TaxRegion } from "./income-tax";
import type { StudentLoanPlan } from "./uk-rates";

export type IncreaseMode = "percent" | "amount";

export interface SalaryIncreaseInput {
  currentSalary: number;
  mode: IncreaseMode;
  increasePercent: number;
  increaseAmount: number;
  region: TaxRegion;
  studentLoanPlan: StudentLoanPlan;
  pensionPercent: number;
}

export interface SalaryIncreaseResult {
  currentGrossSalary: number;
  newGrossSalary: number;
  grossIncrease: number;
  currentNetAnnual: number;
  newNetAnnual: number;
  netIncreaseAnnual: number;
  netIncreaseMonthly: number;
  effectiveTakeHomeIncreasePercent: number;
}

export function calculateSalaryIncrease(input: SalaryIncreaseInput): SalaryIncreaseResult {
  const grossIncrease =
    input.mode === "percent"
      ? input.currentSalary * (input.increasePercent / 100)
      : input.increaseAmount;

  const newGrossSalary = input.currentSalary + grossIncrease;

  const current = calculateTakeHomePay({
    grossAnnualSalary: input.currentSalary,
    region: input.region,
    studentLoanPlan: input.studentLoanPlan,
    pensionPercent: input.pensionPercent,
  });
  const updated = calculateTakeHomePay({
    grossAnnualSalary: newGrossSalary,
    region: input.region,
    studentLoanPlan: input.studentLoanPlan,
    pensionPercent: input.pensionPercent,
  });

  const netIncreaseAnnual = updated.netAnnual - current.netAnnual;

  return {
    currentGrossSalary: input.currentSalary,
    newGrossSalary,
    grossIncrease,
    currentNetAnnual: current.netAnnual,
    newNetAnnual: updated.netAnnual,
    netIncreaseAnnual,
    netIncreaseMonthly: netIncreaseAnnual / 12,
    effectiveTakeHomeIncreasePercent:
      current.netAnnual > 0 ? (netIncreaseAnnual / current.netAnnual) * 100 : 0,
  };
}
