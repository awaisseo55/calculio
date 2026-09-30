export interface RemortgageComparisonInput {
  mortgageBalance: number;
  remainingTermYears: number;
  currentRatePercent: number;
  newRatePercent: number;
  productFee: number;
  exitFees: number;
  comparisonYears: number;
}

export interface RemortgageComparisonResult {
  currentMonthlyPayment: number;
  newMonthlyPayment: number;
  monthlySaving: number;
  currentCostOverPeriod: number;
  newCostOverPeriod: number;
  totalSavingOverPeriod: number;
  breakEvenMonths: number | null;
}

function monthlyPayment(balance: number, annualRatePercent: number, termYears: number): number {
  const months = Math.max(Math.round(termYears * 12), 1);
  const rate = Math.max(annualRatePercent, 0) / 100 / 12;
  if (rate === 0) return balance / months;
  return (balance * rate) / (1 - Math.pow(1 + rate, -months));
}

export function calculateRemortgageComparison(
  input: RemortgageComparisonInput
): RemortgageComparisonResult {
  const mortgageBalance = Math.max(input.mortgageBalance, 0);
  const remainingTermYears = Math.max(input.remainingTermYears, 1);
  const productFee = Math.max(input.productFee, 0);
  const exitFees = Math.max(input.exitFees, 0);
  const comparisonMonths = Math.max(Math.round(input.comparisonYears * 12), 1);

  const currentMonthlyPayment = monthlyPayment(
    mortgageBalance,
    input.currentRatePercent,
    remainingTermYears
  );
  const newMonthlyPayment = monthlyPayment(
    mortgageBalance + productFee,
    input.newRatePercent,
    remainingTermYears
  );
  const monthlySaving = currentMonthlyPayment - newMonthlyPayment;
  const currentCostOverPeriod = currentMonthlyPayment * comparisonMonths;
  const newCostOverPeriod = newMonthlyPayment * comparisonMonths + exitFees;
  const totalSavingOverPeriod = currentCostOverPeriod - newCostOverPeriod;

  return {
    currentMonthlyPayment,
    newMonthlyPayment,
    monthlySaving,
    currentCostOverPeriod,
    newCostOverPeriod,
    totalSavingOverPeriod,
    breakEvenMonths: monthlySaving > 0 ? (productFee + exitFees) / monthlySaving : null,
  };
}
