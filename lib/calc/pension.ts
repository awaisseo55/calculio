import { NEW_STATE_PENSION_ANNUAL, PENSION_DRAWDOWN_RATE } from "./uk-rates";

export interface PensionInput {
  currentAge: number;
  retirementAge: number;
  currentPot: number;
  personalMonthlyContribution: number;
  employerMonthlyContribution: number;
  annualRatePercent: number;
  targetAnnualIncome: number;
}

export interface PensionResult {
  yearsToRetirement: number;
  projectedPot: number;
  totalContributions: number;
  projectedGrowth: number;
  projectedAnnualIncome: number;
  projectedMonthlyIncome: number;
  targetAnnualIncome: number;
  incomeGap: number;
  onTrack: boolean;
  statePensionAnnual: number;
  combinedAnnualIncome: number;
}

export function calculatePension(input: PensionInput): PensionResult {
  const yearsToRetirement = Math.max(input.retirementAge - input.currentAge, 0);
  const monthlyRate = input.annualRatePercent / 100 / 12;
  const months = Math.round(yearsToRetirement * 12);
  const totalMonthlyContribution =
    input.personalMonthlyContribution + input.employerMonthlyContribution;

  let pot = input.currentPot;
  for (let m = 0; m < months; m++) {
    pot += totalMonthlyContribution;
    pot *= 1 + monthlyRate;
  }

  const totalContributions = input.currentPot + totalMonthlyContribution * months;
  const projectedGrowth = pot - totalContributions;

  const projectedAnnualIncome = pot * PENSION_DRAWDOWN_RATE;
  const projectedMonthlyIncome = projectedAnnualIncome / 12;
  const incomeGap = input.targetAnnualIncome - projectedAnnualIncome;

  return {
    yearsToRetirement,
    projectedPot: pot,
    totalContributions,
    projectedGrowth,
    projectedAnnualIncome,
    projectedMonthlyIncome,
    targetAnnualIncome: input.targetAnnualIncome,
    incomeGap,
    onTrack: incomeGap <= 0,
    statePensionAnnual: NEW_STATE_PENSION_ANNUAL,
    combinedAnnualIncome: projectedAnnualIncome + NEW_STATE_PENSION_ANNUAL,
  };
}
