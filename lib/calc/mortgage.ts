export interface MortgageInput {
  propertyPrice: number;
  deposit: number;
  depositIsPercent: boolean;
  termYears: number;
  interestRate: number; // annual %, e.g. 4.5
}

export interface AmortisationYear {
  year: number;
  startingBalance: number;
  interestPaid: number;
  principalPaid: number;
  endingBalance: number;
}

export interface MortgageResult {
  loanAmount: number;
  depositAmount: number;
  monthlyRepayment: number;
  totalRepaid: number;
  totalInterest: number;
  loanToValue: number;
  amortisation: AmortisationYear[];
}

export function calculateMortgage(input: MortgageInput): MortgageResult {
  const depositAmount = input.depositIsPercent
    ? (input.deposit / 100) * input.propertyPrice
    : input.deposit;

  const loanAmount = Math.max(input.propertyPrice - depositAmount, 0);
  const months = Math.round(input.termYears * 12);
  const monthlyRate = input.interestRate / 100 / 12;

  let monthlyRepayment: number;
  if (monthlyRate === 0) {
    monthlyRepayment = loanAmount / months;
  } else {
    const factor = Math.pow(1 + monthlyRate, months);
    monthlyRepayment = (loanAmount * monthlyRate * factor) / (factor - 1);
  }

  const amortisation: AmortisationYear[] = [];
  let balance = loanAmount;

  for (let year = 1; year <= Math.ceil(input.termYears); year++) {
    const startingBalance = balance;
    let yearInterest = 0;
    let yearPrincipal = 0;

    const monthsThisYear = Math.min(12, months - (year - 1) * 12);
    for (let m = 0; m < monthsThisYear; m++) {
      const interestPortion = balance * monthlyRate;
      const principalPortion = Math.min(monthlyRepayment - interestPortion, balance);
      balance = Math.max(balance - principalPortion, 0);
      yearInterest += interestPortion;
      yearPrincipal += principalPortion;
    }

    amortisation.push({
      year,
      startingBalance,
      interestPaid: yearInterest,
      principalPaid: yearPrincipal,
      endingBalance: balance,
    });
  }

  const totalRepaid = monthlyRepayment * months;
  const totalInterest = totalRepaid - loanAmount;

  return {
    loanAmount,
    depositAmount,
    monthlyRepayment,
    totalRepaid,
    totalInterest,
    loanToValue: input.propertyPrice > 0 ? (loanAmount / input.propertyPrice) * 100 : 0,
    amortisation,
  };
}
