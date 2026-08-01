import {
  WINTER_FUEL_PAYMENT_STANDARD,
  WINTER_FUEL_PAYMENT_OVER_80,
  WINTER_FUEL_PAYMENT_INCOME_THRESHOLD,
  STATE_PENSION_AGE,
} from "./uk-rates";

export type HouseholdSituation = "single" | "couple-both-eligible" | "couple-one-eligible";

export interface WinterFuelPaymentInput {
  age: number;
  householdSituation: HouseholdSituation;
  anyoneInHouseholdOver80: boolean;
  receivesPensionCreditOrBenefit: boolean;
  livingInCareHome: boolean;
  annualIncome: number;
}

export interface WinterFuelPaymentResult {
  eligible: boolean;
  reason: string;
  grossPaymentAmount: number;
  netPaymentAmount: number;
  incomeAboveThreshold: boolean;
  paidAutomatically: boolean;
}

export function calculateWinterFuelPayment(
  input: WinterFuelPaymentInput
): WinterFuelPaymentResult {
  const {
    age,
    householdSituation,
    anyoneInHouseholdOver80,
    receivesPensionCreditOrBenefit,
    livingInCareHome,
    annualIncome,
  } = input;

  if (age < STATE_PENSION_AGE) {
    return {
      eligible: false,
      reason: `You (or the household member the claim is based on) need to have reached State Pension age, currently ${STATE_PENSION_AGE}, by the qualifying date in September to get a Winter Fuel Payment this winter.`,
      grossPaymentAmount: 0,
      netPaymentAmount: 0,
      incomeAboveThreshold: false,
      paidAutomatically: false,
    };
  }

  if (livingInCareHome && receivesPensionCreditOrBenefit) {
    return {
      eligible: false,
      reason:
        "People in a care home for the whole of the qualifying period who also receive Pension Credit or a similar means-tested benefit are generally not eligible for a Winter Fuel Payment, since other support applies instead.",
      grossPaymentAmount: 0,
      netPaymentAmount: 0,
      incomeAboveThreshold: false,
      paidAutomatically: false,
    };
  }

  const grossPaymentAmount = anyoneInHouseholdOver80
    ? WINTER_FUEL_PAYMENT_OVER_80
    : WINTER_FUEL_PAYMENT_STANDARD;

  const incomeAboveThreshold = annualIncome > WINTER_FUEL_PAYMENT_INCOME_THRESHOLD;
  const netPaymentAmount = incomeAboveThreshold ? 0 : grossPaymentAmount;

  const householdNote =
    householdSituation === "single"
      ? "as a single person"
      : "for your household, paid once regardless of how many of you qualify";

  const reason = incomeAboveThreshold
    ? `Based on your age, you are eligible ${householdNote}, but since your income is above £${WINTER_FUEL_PAYMENT_INCOME_THRESHOLD.toLocaleString("en-GB")}, HMRC recovers the full payment through your tax return or tax code, unless you choose to opt out of receiving it in the first place.`
    : `Based on your age, you are eligible ${householdNote}.`;

  return {
    eligible: true,
    reason,
    grossPaymentAmount,
    netPaymentAmount,
    incomeAboveThreshold,
    paidAutomatically: true,
  };
}
