export interface EmergencyFundInput {
  monthlyEssentialExpenses: number;
  monthsOfCover: number;
  currentSavings: number;
  monthlySavingAmount: number;
}

export interface EmergencyFundResult {
  targetFundSize: number;
  shortfall: number;
  monthsToTarget: number;
  isTargetMet: boolean;
}

export function calculateEmergencyFund(input: EmergencyFundInput): EmergencyFundResult {
  const monthlyEssentialExpenses = Math.max(input.monthlyEssentialExpenses, 0);
  const monthsOfCover = Math.max(input.monthsOfCover, 1);
  const currentSavings = Math.max(input.currentSavings, 0);
  const monthlySavingAmount = Math.max(input.monthlySavingAmount, 0);

  const targetFundSize = monthlyEssentialExpenses * monthsOfCover;
  const shortfall = Math.max(targetFundSize - currentSavings, 0);
  const monthsToTarget = monthlySavingAmount > 0 ? shortfall / monthlySavingAmount : Infinity;

  return {
    targetFundSize,
    shortfall,
    monthsToTarget,
    isTargetMet: shortfall <= 0,
  };
}
