export type SimpleInterestTimeUnit = "years" | "months" | "days";

export interface SimpleInterestInput {
  principal: number;
  ratePercent: number;
  timeValue: number;
  timeUnit: SimpleInterestTimeUnit;
}

export interface SimpleInterestYear {
  year: number;
  interestThisYear: number;
  cumulativeInterest: number;
  balance: number;
}

export interface SimpleInterestResult {
  timeInYears: number;
  totalInterest: number;
  totalAmount: number;
  yearlyBreakdown: SimpleInterestYear[];
}

export function calculateSimpleInterest(input: SimpleInterestInput): SimpleInterestResult {
  const principal = Math.max(input.principal, 0);
  const rate = Math.max(input.ratePercent, 0) / 100;
  const timeValue = Math.max(input.timeValue, 0);

  const timeInYears =
    input.timeUnit === "years" ? timeValue : input.timeUnit === "months" ? timeValue / 12 : timeValue / 365;

  const totalInterest = principal * rate * timeInYears;
  const totalAmount = principal + totalInterest;

  const yearlyBreakdown: SimpleInterestYear[] = [];
  const fullYears = Math.floor(timeInYears);
  const annualInterest = principal * rate;

  for (let year = 1; year <= fullYears; year++) {
    const cumulativeInterest = annualInterest * year;
    yearlyBreakdown.push({
      year,
      interestThisYear: annualInterest,
      cumulativeInterest,
      balance: principal + cumulativeInterest,
    });
  }

  const remainder = timeInYears - fullYears;
  if (remainder > 0.001) {
    const partialInterest = annualInterest * remainder;
    yearlyBreakdown.push({
      year: fullYears + 1,
      interestThisYear: partialInterest,
      cumulativeInterest: totalInterest,
      balance: totalAmount,
    });
  }

  return { timeInYears, totalInterest, totalAmount, yearlyBreakdown };
}
