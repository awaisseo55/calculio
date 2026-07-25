export interface SavingsGoalInput {
  targetAmount: number;
  currentSavings: number;
  monthlyContribution: number;
  annualRate: number;
}

export interface SavingsGoalResult {
  monthsToGoal: number;
  years: number;
  months: number;
  totalContributions: number;
  totalInterest: number;
  reachable: boolean;
}

const MAX_MONTHS = 1200;

export function calculateSavingsGoal(input: SavingsGoalInput): SavingsGoalResult {
  const { targetAmount, currentSavings, monthlyContribution, annualRate } = input;
  const monthlyRate = annualRate / 100 / 12;

  if (currentSavings >= targetAmount) {
    return {
      monthsToGoal: 0,
      years: 0,
      months: 0,
      totalContributions: 0,
      totalInterest: 0,
      reachable: true,
    };
  }

  let balance = currentSavings;
  let totalContributions = 0;
  let monthsElapsed = 0;

  while (balance < targetAmount && monthsElapsed < MAX_MONTHS) {
    balance += monthlyContribution;
    totalContributions += monthlyContribution;
    balance += balance * monthlyRate;
    monthsElapsed++;
  }

  const reachable = balance >= targetAmount;
  const totalInterest = Math.max(balance - currentSavings - totalContributions, 0);

  return {
    monthsToGoal: monthsElapsed,
    years: Math.floor(monthsElapsed / 12),
    months: monthsElapsed % 12,
    totalContributions,
    totalInterest,
    reachable,
  };
}
