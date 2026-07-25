export interface MortgageOverpaymentInput {
  balance: number;
  remainingTermYears: number;
  annualRate: number;
  monthlyOverpayment: number;
}

export interface MortgageOverpaymentResult {
  standardMonthlyPayment: number;
  standardTotalInterest: number;
  standardPayoffMonths: number;
  newMonthlyPayment: number;
  newPayoffMonths: number;
  newTotalInterest: number;
  monthsSaved: number;
  yearsSaved: number;
  interestSaved: number;
}

export function calculateMortgageOverpayment(
  input: MortgageOverpaymentInput
): MortgageOverpaymentResult {
  const months = Math.round(input.remainingTermYears * 12);
  const monthlyRate = input.annualRate / 100 / 12;

  let standardMonthlyPayment: number;
  if (monthlyRate === 0) {
    standardMonthlyPayment = input.balance / months;
  } else {
    const factor = Math.pow(1 + monthlyRate, months);
    standardMonthlyPayment = (input.balance * monthlyRate * factor) / (factor - 1);
  }

  const standardTotalRepaid = standardMonthlyPayment * months;
  const standardTotalInterest = standardTotalRepaid - input.balance;

  const newMonthlyPayment = standardMonthlyPayment + input.monthlyOverpayment;
  let balance = input.balance;
  let newMonths = 0;
  let newTotalInterest = 0;

  while (balance > 0 && newMonths < months) {
    const interest = balance * monthlyRate;
    const principal = Math.min(newMonthlyPayment - interest, balance);
    balance = Math.max(balance - principal, 0);
    newTotalInterest += interest;
    newMonths++;
  }

  const monthsSaved = Math.max(months - newMonths, 0);

  return {
    standardMonthlyPayment,
    standardTotalInterest,
    standardPayoffMonths: months,
    newMonthlyPayment,
    newPayoffMonths: newMonths,
    newTotalInterest,
    monthsSaved,
    yearsSaved: monthsSaved / 12,
    interestSaved: standardTotalInterest - newTotalInterest,
  };
}
