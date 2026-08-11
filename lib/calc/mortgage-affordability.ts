import {
  MORTGAGE_AFFORDABILITY_INCOME_MULTIPLE,
  MORTGAGE_AFFORDABILITY_STRESS_TEST_ADDITION_PERCENT,
} from "./uk-rates";

export interface MortgageAffordabilityInput {
  applicant1Income: number;
  applicant2Income: number;
  monthlyCommitments: number;
  deposit: number;
  incomeMultiple: number;
  interestRate: number;
  termYears: number;
}

export interface MortgageAffordabilityResult {
  combinedIncome: number;
  incomeMultipleLoanCap: number;
  estimatedMaxLoan: number;
  estimatedMaxPropertyPrice: number;
  monthlyRepaymentAtRate: number;
  stressTestRate: number;
  monthlyRepaymentAtStressRate: number;
  depositPercent: number;
}

export function calculateMortgageAffordability(
  input: MortgageAffordabilityInput
): MortgageAffordabilityResult {
  const combinedIncome = Math.max(input.applicant1Income, 0) + Math.max(input.applicant2Income, 0);
  const incomeMultiple = input.incomeMultiple > 0 ? input.incomeMultiple : MORTGAGE_AFFORDABILITY_INCOME_MULTIPLE;
  const monthlyCommitments = Math.max(input.monthlyCommitments, 0);
  const deposit = Math.max(input.deposit, 0);

  const incomeMultipleLoanCap = combinedIncome * incomeMultiple;
  // Simplified approximation of how lenders net off existing credit commitments:
  // each £1 of committed monthly debt reduces borrowing capacity by roughly
  // £1 x 12 x the income multiple, since that debt reduces disposable income
  // used in the affordability assessment.
  const commitmentReduction = monthlyCommitments * 12 * incomeMultiple;
  const estimatedMaxLoan = Math.max(incomeMultipleLoanCap - commitmentReduction, 0);
  const estimatedMaxPropertyPrice = estimatedMaxLoan + deposit;

  const months = Math.round(input.termYears * 12);
  const monthlyRate = input.interestRate / 100 / 12;
  const monthlyRepaymentAtRate = amortisedPayment(estimatedMaxLoan, monthlyRate, months);

  const stressTestRate = input.interestRate + MORTGAGE_AFFORDABILITY_STRESS_TEST_ADDITION_PERCENT;
  const stressMonthlyRate = stressTestRate / 100 / 12;
  const monthlyRepaymentAtStressRate = amortisedPayment(estimatedMaxLoan, stressMonthlyRate, months);

  return {
    combinedIncome,
    incomeMultipleLoanCap,
    estimatedMaxLoan,
    estimatedMaxPropertyPrice,
    monthlyRepaymentAtRate,
    stressTestRate,
    monthlyRepaymentAtStressRate,
    depositPercent: estimatedMaxPropertyPrice > 0 ? (deposit / estimatedMaxPropertyPrice) * 100 : 0,
  };
}

function amortisedPayment(loanAmount: number, monthlyRate: number, months: number): number {
  if (months <= 0) return 0;
  if (monthlyRate === 0) return loanAmount / months;
  const factor = Math.pow(1 + monthlyRate, months);
  return (loanAmount * monthlyRate * factor) / (factor - 1);
}
