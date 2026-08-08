import {
  CHILD_BENEFIT_ELDEST_WEEKLY,
  CHILD_BENEFIT_ADDITIONAL_CHILD_WEEKLY,
  HICBC_THRESHOLD_LOW,
  HICBC_THRESHOLD_HIGH,
} from "./uk-rates";

export interface ChildBenefitInput {
  numberOfChildren: number;
  higherEarnerIncome: number;
  partnerIncome: number;
  hasPartner: boolean;
}

export interface ChildBenefitResult {
  weeklyAmountEldest: number;
  weeklyAmountAdditional: number;
  totalWeeklyAmount: number;
  annualAmount: number;
  higherIncomeInHousehold: number;
  hicbcApplies: boolean;
  hicbcPercent: number;
  hicbcAmount: number;
  netAnnualAmount: number;
  netWeeklyEquivalent: number;
  inTaperZone: boolean;
}

export function calculateChildBenefit(input: ChildBenefitInput): ChildBenefitResult {
  const numberOfChildren = Math.max(Math.floor(input.numberOfChildren), 0);
  const additionalChildren = Math.max(numberOfChildren - 1, 0);

  const weeklyAmountEldest = numberOfChildren > 0 ? CHILD_BENEFIT_ELDEST_WEEKLY : 0;
  const weeklyAmountAdditional = additionalChildren * CHILD_BENEFIT_ADDITIONAL_CHILD_WEEKLY;
  const totalWeeklyAmount = weeklyAmountEldest + weeklyAmountAdditional;
  const annualAmount = totalWeeklyAmount * 52;

  const higherIncomeInHousehold = input.hasPartner
    ? Math.max(input.higherEarnerIncome, input.partnerIncome)
    : input.higherEarnerIncome;

  const hicbcApplies = higherIncomeInHousehold > HICBC_THRESHOLD_LOW;
  const hicbcPercent = hicbcApplies
    ? Math.min(100, Math.floor((higherIncomeInHousehold - HICBC_THRESHOLD_LOW) / 200))
    : 0;
  const hicbcAmount = annualAmount * (hicbcPercent / 100);
  const netAnnualAmount = Math.max(annualAmount - hicbcAmount, 0);

  return {
    weeklyAmountEldest,
    weeklyAmountAdditional,
    totalWeeklyAmount,
    annualAmount,
    higherIncomeInHousehold,
    hicbcApplies,
    hicbcPercent,
    hicbcAmount,
    netAnnualAmount,
    netWeeklyEquivalent: netAnnualAmount / 52,
    inTaperZone: higherIncomeInHousehold > HICBC_THRESHOLD_LOW && higherIncomeInHousehold < HICBC_THRESHOLD_HIGH,
  };
}
