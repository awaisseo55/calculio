import { PERSONAL_SAVINGS_ALLOWANCE_BASIC } from "./uk-rates";

export type IsaType = "cash" | "stocks-and-shares" | "lisa" | "junior";

export const ISA_TYPE_LABELS: Record<IsaType, string> = {
  cash: "Cash ISA",
  "stocks-and-shares": "Stocks and Shares ISA",
  lisa: "Lifetime ISA",
  junior: "Junior ISA",
};

export interface IsaInput {
  isaType: IsaType;
  initialDeposit: number;
  monthlyContribution: number;
  annualRatePercent: number;
  years: number;
}

export interface IsaResult {
  finalBalance: number;
  totalContributions: number;
  taxFreeGains: number;
  lisaBonus: number;
  taxedSavingsComparison: number;
  taxSaved: number;
}

export function calculateIsa(input: IsaInput): IsaResult {
  const monthlyRate = input.annualRatePercent / 100 / 12;
  const months = Math.round(input.years * 12);

  let balance = input.initialDeposit;
  for (let m = 0; m < months; m++) {
    balance += input.monthlyContribution;
    balance *= 1 + monthlyRate;
  }

  const totalContributions = input.initialDeposit + input.monthlyContribution * months;
  const taxFreeGains = balance - totalContributions;

  const lisaBonus = input.isaType === "lisa" ? totalContributions * 0.25 : 0;

  // Illustrative comparison: the same growth outside an ISA, with interest above
  // the Personal Savings Allowance taxed each year at a simplified flat 20%.
  let taxedBalance = input.initialDeposit;
  for (let y = 0; y < input.years; y++) {
    let yearInterest = 0;
    for (let m = 0; m < 12; m++) {
      taxedBalance += input.monthlyContribution;
      const interestThisMonth = taxedBalance * monthlyRate;
      yearInterest += interestThisMonth;
      taxedBalance += interestThisMonth;
    }
    if (yearInterest > PERSONAL_SAVINGS_ALLOWANCE_BASIC) {
      const taxableInterest = yearInterest - PERSONAL_SAVINGS_ALLOWANCE_BASIC;
      taxedBalance -= taxableInterest * 0.2;
    }
  }

  return {
    finalBalance: balance,
    totalContributions,
    taxFreeGains,
    lisaBonus,
    taxedSavingsComparison: taxedBalance,
    taxSaved: balance - taxedBalance,
  };
}
