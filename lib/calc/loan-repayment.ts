export interface LoanRepaymentInput {
  loanAmount: number;
  annualRate: number;
  termYears: number;
  startDate: string;
}

export interface LoanRepaymentMonth {
  month: number;
  date: Date;
  payment: number;
  interest: number;
  principal: number;
  balance: number;
}

export interface LoanRepaymentResult {
  monthlyPayment: number;
  totalInterest: number;
  totalRepaid: number;
  payoffDate: Date;
  firstYearSchedule: LoanRepaymentMonth[];
}

export function calculateLoanRepayment(input: LoanRepaymentInput): LoanRepaymentResult {
  const months = Math.round(input.termYears * 12);
  const monthlyRate = input.annualRate / 100 / 12;
  const start = new Date(input.startDate);

  let monthlyPayment: number;
  if (monthlyRate === 0) {
    monthlyPayment = input.loanAmount / months;
  } else {
    const factor = Math.pow(1 + monthlyRate, months);
    monthlyPayment = (input.loanAmount * monthlyRate * factor) / (factor - 1);
  }

  let balance = input.loanAmount;
  const firstYearSchedule: LoanRepaymentMonth[] = [];

  for (let m = 1; m <= months; m++) {
    const interest = balance * monthlyRate;
    const principal = Math.min(monthlyPayment - interest, balance);
    balance = Math.max(balance - principal, 0);

    if (m <= 12) {
      const date = new Date(start.getFullYear(), start.getMonth() + m, start.getDate());
      firstYearSchedule.push({ month: m, date, payment: monthlyPayment, interest, principal, balance });
    }
  }

  const totalRepaid = monthlyPayment * months;
  const payoffDate = new Date(start.getFullYear(), start.getMonth() + months, start.getDate());

  return {
    monthlyPayment,
    totalInterest: totalRepaid - input.loanAmount,
    totalRepaid,
    payoffDate,
    firstYearSchedule,
  };
}
