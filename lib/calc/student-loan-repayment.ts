import { calculateStudentLoanRepayment } from "./take-home-pay";
import { STUDENT_LOAN_PLANS, type StudentLoanPlan } from "./uk-rates";

export interface StudentLoanRepaymentInput {
  annualSalary: number;
  plan: StudentLoanPlan;
}

export interface PlanComparisonRow {
  plan: StudentLoanPlan;
  label: string;
  threshold: number;
  ratePercent: number;
  annualRepayment: number;
}

export interface StudentLoanRepaymentResult {
  annualRepayment: number;
  monthlyRepayment: number;
  weeklyRepayment: number;
  threshold: number;
  ratePercent: number;
  incomeAboveThreshold: number;
  comparison: PlanComparisonRow[];
}

export function calculateStudentLoanRepaymentSummary(
  input: StudentLoanRepaymentInput
): StudentLoanRepaymentResult {
  const annualSalary = Math.max(input.annualSalary, 0);
  const { threshold, rate } = STUDENT_LOAN_PLANS[input.plan];

  const annualRepayment = calculateStudentLoanRepayment(annualSalary, input.plan);

  const comparison: PlanComparisonRow[] = (Object.keys(STUDENT_LOAN_PLANS) as StudentLoanPlan[])
    .filter((plan) => plan !== "none")
    .map((plan) => ({
      plan,
      label: STUDENT_LOAN_PLANS[plan].label,
      threshold: STUDENT_LOAN_PLANS[plan].threshold,
      ratePercent: STUDENT_LOAN_PLANS[plan].rate * 100,
      annualRepayment: calculateStudentLoanRepayment(annualSalary, plan),
    }));

  return {
    annualRepayment,
    monthlyRepayment: annualRepayment / 12,
    weeklyRepayment: annualRepayment / 52,
    threshold,
    ratePercent: rate * 100,
    incomeAboveThreshold: Math.max(annualSalary - threshold, 0),
    comparison,
  };
}
