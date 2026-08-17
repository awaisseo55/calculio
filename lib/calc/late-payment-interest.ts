export interface LatePaymentInterestInput {
  debtAmount: number;
  baseRatePercent: number;
  daysOverdue: number;
}

export interface LatePaymentInterestResult {
  annualRatePercent: number;
  dailyInterest: number;
  totalInterest: number;
  compensationFee: number;
  totalOwed: number;
}

// Fixed statutory compensation under the Late Payment of Commercial Debts
// (Interest) Act 1998, based on the size of the debt.
function compensationFeeFor(debtAmount: number): number {
  if (debtAmount < 1000) return 40;
  if (debtAmount < 10000) return 70;
  return 100;
}

// Statutory interest under the same Act is the Bank of England base rate
// plus 8%, applied simple (not compound) on a daily basis for the number of
// days the payment is overdue.
export function calculateLatePaymentInterest(
  input: LatePaymentInterestInput
): LatePaymentInterestResult {
  const debtAmount = Math.max(input.debtAmount, 0);
  const baseRatePercent = Math.max(input.baseRatePercent, 0);
  const daysOverdue = Math.max(Math.round(input.daysOverdue), 0);

  const annualRatePercent = baseRatePercent + 8;
  const dailyInterest = (debtAmount * (annualRatePercent / 100)) / 365;
  const totalInterest = dailyInterest * daysOverdue;
  const compensationFee = compensationFeeFor(debtAmount);
  const totalOwed = debtAmount + totalInterest + compensationFee;

  return {
    annualRatePercent,
    dailyInterest,
    totalInterest,
    compensationFee,
    totalOwed,
  };
}
