import {
  UC_STANDARD_ALLOWANCE_SINGLE_UNDER_25,
  UC_STANDARD_ALLOWANCE_SINGLE_25_PLUS,
  UC_STANDARD_ALLOWANCE_COUPLE_UNDER_25,
  UC_STANDARD_ALLOWANCE_COUPLE_25_PLUS,
  UC_CHILD_ELEMENT_MONTHLY,
  UC_CHILD_ELEMENT_MAX_CHILDREN,
  UC_LCWRA_ELEMENT_MONTHLY,
  UC_WORK_ALLOWANCE_HIGHER,
  UC_WORK_ALLOWANCE_LOWER,
  UC_TAPER_RATE,
  UC_SAVINGS_LOWER_LIMIT,
  UC_SAVINGS_UPPER_LIMIT,
  UC_SAVINGS_TARIFF_INCOME_PER_BLOCK,
  UC_SAVINGS_TARIFF_BLOCK_SIZE,
} from "./uk-rates";

export type UcHouseholdType = "single" | "couple";

export interface UniversalCreditInput {
  householdType: UcHouseholdType;
  claimantAge: number;
  numberOfChildren: number;
  monthlyEarnings: number;
  monthlyRent: number;
  savings: number;
  hasLimitedCapabilityForWork: boolean;
  workingHoursPerWeek: number;
}

export interface UniversalCreditResult {
  eligibleOnCapital: boolean;
  standardAllowance: number;
  childElement: number;
  housingElement: number;
  lcwraElement: number;
  maximumUniversalCredit: number;
  workAllowance: number;
  earningsAboveAllowance: number;
  taperReduction: number;
  savingsTariffIncome: number;
  monthlyUniversalCredit: number;
  annualUniversalCredit: number;
  childrenCountedForElement: number;
}

export function calculateUniversalCredit(input: UniversalCreditInput): UniversalCreditResult {
  const numberOfChildren = Math.max(Math.floor(input.numberOfChildren), 0);
  const monthlyEarnings = Math.max(input.monthlyEarnings, 0);
  const monthlyRent = Math.max(input.monthlyRent, 0);
  const savings = Math.max(input.savings, 0);

  if (savings > UC_SAVINGS_UPPER_LIMIT) {
    return {
      eligibleOnCapital: false,
      standardAllowance: 0,
      childElement: 0,
      housingElement: 0,
      lcwraElement: 0,
      maximumUniversalCredit: 0,
      workAllowance: 0,
      earningsAboveAllowance: 0,
      taperReduction: 0,
      savingsTariffIncome: 0,
      monthlyUniversalCredit: 0,
      annualUniversalCredit: 0,
      childrenCountedForElement: 0,
    };
  }

  const under25 = input.claimantAge < 25;
  const standardAllowance =
    input.householdType === "single"
      ? under25
        ? UC_STANDARD_ALLOWANCE_SINGLE_UNDER_25
        : UC_STANDARD_ALLOWANCE_SINGLE_25_PLUS
      : under25
        ? UC_STANDARD_ALLOWANCE_COUPLE_UNDER_25
        : UC_STANDARD_ALLOWANCE_COUPLE_25_PLUS;

  const childrenCountedForElement = Math.min(numberOfChildren, UC_CHILD_ELEMENT_MAX_CHILDREN);
  const childElement = childrenCountedForElement * UC_CHILD_ELEMENT_MONTHLY;
  const housingElement = monthlyRent;
  const lcwraElement = input.hasLimitedCapabilityForWork ? UC_LCWRA_ELEMENT_MONTHLY : 0;

  const maximumUniversalCredit = standardAllowance + childElement + housingElement + lcwraElement;

  const workAllowanceApplies = numberOfChildren > 0 || input.hasLimitedCapabilityForWork;
  const workAllowance = workAllowanceApplies
    ? housingElement > 0
      ? UC_WORK_ALLOWANCE_LOWER
      : UC_WORK_ALLOWANCE_HIGHER
    : 0;

  const earningsAboveAllowance = Math.max(monthlyEarnings - workAllowance, 0);
  const taperReduction = earningsAboveAllowance * UC_TAPER_RATE;

  const savingsTariffIncome =
    savings > UC_SAVINGS_LOWER_LIMIT
      ? Math.ceil((savings - UC_SAVINGS_LOWER_LIMIT) / UC_SAVINGS_TARIFF_BLOCK_SIZE) *
        UC_SAVINGS_TARIFF_INCOME_PER_BLOCK
      : 0;

  const monthlyUniversalCredit = Math.max(
    maximumUniversalCredit - taperReduction - savingsTariffIncome,
    0
  );

  return {
    eligibleOnCapital: true,
    standardAllowance,
    childElement,
    housingElement,
    lcwraElement,
    maximumUniversalCredit,
    workAllowance,
    earningsAboveAllowance,
    taperReduction,
    savingsTariffIncome,
    monthlyUniversalCredit,
    annualUniversalCredit: monthlyUniversalCredit * 12,
    childrenCountedForElement,
  };
}
