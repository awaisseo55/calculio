export interface RentAffordabilityInput {
  grossAnnualIncome: number;
  monthlyTakeHomePay: number;
  monthlyBills: number;
  monthlyDebtPayments: number;
  targetRent: number;
}

export interface RentAffordabilityResult {
  thirtyPercentGrossRent: number;
  agentMultiplierRent: number;
  budgetBasedRent: number;
  suggestedMaxRent: number;
  rentShareOfGrossPercent: number;
  rentShareOfNetPercent: number;
  cashLeftAfterRent: number;
  passesThirtyTimesRule: boolean;
}

export function calculateRentAffordability(input: RentAffordabilityInput): RentAffordabilityResult {
  const grossAnnualIncome = Math.max(input.grossAnnualIncome, 0);
  const monthlyTakeHomePay = Math.max(input.monthlyTakeHomePay, 0);
  const monthlyBills = Math.max(input.monthlyBills, 0);
  const monthlyDebtPayments = Math.max(input.monthlyDebtPayments, 0);
  const targetRent = Math.max(input.targetRent, 0);

  const thirtyPercentGrossRent = (grossAnnualIncome / 12) * 0.3;
  const agentMultiplierRent = grossAnnualIncome / 30;
  const budgetBasedRent = Math.max(monthlyTakeHomePay - monthlyBills - monthlyDebtPayments, 0) * 0.6;
  const suggestedMaxRent = Math.max(
    Math.min(thirtyPercentGrossRent, agentMultiplierRent, budgetBasedRent),
    0
  );

  return {
    thirtyPercentGrossRent,
    agentMultiplierRent,
    budgetBasedRent,
    suggestedMaxRent,
    rentShareOfGrossPercent: grossAnnualIncome > 0 ? (targetRent * 12 / grossAnnualIncome) * 100 : 0,
    rentShareOfNetPercent: monthlyTakeHomePay > 0 ? (targetRent / monthlyTakeHomePay) * 100 : 0,
    cashLeftAfterRent: monthlyTakeHomePay - targetRent - monthlyBills - monthlyDebtPayments,
    passesThirtyTimesRule: grossAnnualIncome >= targetRent * 30,
  };
}
