export interface CarLoanInput {
  carPrice: number;
  deposit: number;
  partExchangeValue: number;
  termYears: number;
  annualRatePercent: number;
  balloonPayment: number;
}

export interface CarLoanYear {
  year: number;
  interest: number;
  principal: number;
  balance: number;
}

export interface CarLoanResult {
  amountFinanced: number;
  monthlyPayment: number;
  totalPayable: number;
  totalInterest: number;
  balloonPayment: number;
  yearlySummary: CarLoanYear[];
}

export function calculateCarLoan(input: CarLoanInput): CarLoanResult {
  const amountFinanced = Math.max(
    input.carPrice - input.deposit - input.partExchangeValue,
    0
  );
  const months = Math.round(input.termYears * 12);
  const monthlyRate = input.annualRatePercent / 100 / 12;
  const balloon = Math.max(input.balloonPayment, 0);

  let monthlyPayment: number;
  if (monthlyRate === 0) {
    monthlyPayment = (amountFinanced - balloon) / months;
  } else {
    const factor = Math.pow(1 + monthlyRate, months);
    const presentValueOfBalloon = balloon / factor;
    const amortisingAmount = amountFinanced - presentValueOfBalloon;
    monthlyPayment = (amortisingAmount * monthlyRate * factor) / (factor - 1);
  }
  monthlyPayment = Math.max(monthlyPayment, 0);

  let balance = amountFinanced;
  const yearlySummary: CarLoanYear[] = [];
  let yearInterest = 0;
  let yearPrincipal = 0;

  for (let m = 1; m <= months; m++) {
    const interest = balance * monthlyRate;
    let principal = monthlyPayment - interest;
    if (m === months) {
      // Final month: pay down to exactly the balloon amount (rounding safety).
      principal = balance - balloon;
    }
    balance = Math.max(balance - principal, balloon);
    yearInterest += interest;
    yearPrincipal += principal;

    if (m % 12 === 0 || m === months) {
      yearlySummary.push({
        year: Math.ceil(m / 12),
        interest: yearInterest,
        principal: yearPrincipal,
        balance,
      });
      yearInterest = 0;
      yearPrincipal = 0;
    }
  }

  const totalPayable = monthlyPayment * months + balloon;
  const totalInterest = totalPayable - amountFinanced;

  return {
    amountFinanced,
    monthlyPayment,
    totalPayable,
    totalInterest,
    balloonPayment: balloon,
    yearlySummary,
  };
}
