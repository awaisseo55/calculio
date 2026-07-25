export type CompoundingFrequency = "annually" | "monthly" | "daily";

export interface CompoundInterestInput {
  initialDeposit: number;
  monthlyContribution: number;
  annualRate: number;
  years: number;
  frequency: CompoundingFrequency;
}

export interface CompoundInterestYear {
  year: number;
  startingBalance: number;
  contributions: number;
  interest: number;
  endingBalance: number;
}

export interface CompoundInterestResult {
  finalBalance: number;
  totalContributions: number;
  totalInterest: number;
  yearlyBreakdown: CompoundInterestYear[];
}

const PERIODS_PER_YEAR: Record<CompoundingFrequency, number> = {
  annually: 1,
  monthly: 12,
  daily: 365,
};

export function calculateCompoundInterest(
  input: CompoundInterestInput
): CompoundInterestResult {
  const periodsPerYear = PERIODS_PER_YEAR[input.frequency];
  const ratePerPeriod = input.annualRate / 100 / periodsPerYear;
  // Convert the chosen compounding frequency into an equivalent monthly rate, so
  // contributions and compounding can be simulated on a consistent monthly cycle
  // regardless of whether the account compounds annually, monthly or daily.
  const monthlyEquivalentRate = Math.pow(1 + ratePerPeriod, periodsPerYear / 12) - 1;

  let balance = input.initialDeposit;
  let totalContributions = input.initialDeposit;
  const yearlyBreakdown: CompoundInterestYear[] = [];

  for (let year = 1; year <= input.years; year++) {
    const startingBalance = balance;
    let yearContributions = 0;
    let yearInterest = 0;

    for (let month = 1; month <= 12; month++) {
      balance += input.monthlyContribution;
      yearContributions += input.monthlyContribution;
      totalContributions += input.monthlyContribution;

      const interestThisMonth = balance * monthlyEquivalentRate;
      balance += interestThisMonth;
      yearInterest += interestThisMonth;
    }

    yearlyBreakdown.push({
      year,
      startingBalance,
      contributions: yearContributions,
      interest: yearInterest,
      endingBalance: balance,
    });
  }

  return {
    finalBalance: balance,
    totalContributions,
    totalInterest: balance - totalContributions,
    yearlyBreakdown,
  };
}
