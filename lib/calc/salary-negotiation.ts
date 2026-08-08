import { calculateTakeHomePay } from "./take-home-pay";
import type { TaxRegion } from "./income-tax";

export type TargetMode = "amount" | "percent";

export interface SalaryNegotiationInput {
  currentSalary: number;
  targetMode: TargetMode;
  targetSalary: number;
  targetIncreasePercent: number;
  currentBonus: number;
  targetBonus: number;
  currentPensionPercent: number;
  targetPensionPercent: number;
  currentBenefitsValue: number;
  targetBenefitsValue: number;
  region: TaxRegion;
  relocationCosts: number;
  assumedPensionGrowthPercent: number;
}

export interface SalaryNegotiationResult {
  resolvedTargetSalary: number;
  grossIncreaseAmount: number;
  grossIncreasePercent: number;
  currentTotalCompensation: number;
  targetTotalCompensation: number;
  currentNetAnnual: number;
  targetNetAnnual: number;
  annualNetDifference: number;
  monthlyNetDifference: number;
  additionalAnnualPensionContribution: number;
  fiveYearTakeHomeValue: number;
  fiveYearPensionValue: number;
  fiveYearTotalValue: number;
  breakEvenMonths: number | null;
}

const FIVE_YEARS = 5;

export function calculateSalaryNegotiation(
  input: SalaryNegotiationInput
): SalaryNegotiationResult {
  const currentSalary = Math.max(input.currentSalary, 0);
  const resolvedTargetSalary =
    input.targetMode === "amount"
      ? Math.max(input.targetSalary, 0)
      : currentSalary * (1 + input.targetIncreasePercent / 100);

  const grossIncreaseAmount = resolvedTargetSalary - currentSalary;
  const grossIncreasePercent = currentSalary > 0 ? (grossIncreaseAmount / currentSalary) * 100 : 0;

  const currentTotalCompensation = currentSalary + input.currentBonus + input.currentBenefitsValue;
  const targetTotalCompensation =
    resolvedTargetSalary + input.targetBonus + input.targetBenefitsValue;

  const current = calculateTakeHomePay({
    grossAnnualSalary: currentSalary + input.currentBonus,
    region: input.region,
    studentLoanPlan: "none",
    pensionPercent: input.currentPensionPercent,
  });
  const target = calculateTakeHomePay({
    grossAnnualSalary: resolvedTargetSalary + input.targetBonus,
    region: input.region,
    studentLoanPlan: "none",
    pensionPercent: input.targetPensionPercent,
  });

  const currentNetAnnual = current.netAnnual + input.currentBenefitsValue;
  const targetNetAnnual = target.netAnnual + input.targetBenefitsValue;
  const annualNetDifference = targetNetAnnual - currentNetAnnual;
  const monthlyNetDifference = annualNetDifference / 12;

  const additionalAnnualPensionContribution =
    target.pensionContribution - current.pensionContribution;

  const growthRate = input.assumedPensionGrowthPercent / 100;
  const fiveYearPensionValue =
    additionalAnnualPensionContribution <= 0
      ? additionalAnnualPensionContribution * FIVE_YEARS
      : growthRate > 0
        ? additionalAnnualPensionContribution *
          ((Math.pow(1 + growthRate, FIVE_YEARS) - 1) / growthRate)
        : additionalAnnualPensionContribution * FIVE_YEARS;

  const fiveYearTakeHomeValue = annualNetDifference * FIVE_YEARS;
  const fiveYearTotalValue = fiveYearTakeHomeValue + fiveYearPensionValue;

  const breakEvenMonths =
    input.relocationCosts <= 0
      ? 0
      : monthlyNetDifference > 0
        ? input.relocationCosts / monthlyNetDifference
        : null;

  return {
    resolvedTargetSalary,
    grossIncreaseAmount,
    grossIncreasePercent,
    currentTotalCompensation,
    targetTotalCompensation,
    currentNetAnnual,
    targetNetAnnual,
    annualNetDifference,
    monthlyNetDifference,
    additionalAnnualPensionContribution,
    fiveYearTakeHomeValue,
    fiveYearPensionValue,
    fiveYearTotalValue,
    breakEvenMonths,
  };
}
