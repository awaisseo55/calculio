import {
  SPP_WEEKLY_RATE,
  SPP_HIGHER_RATE_PERCENT,
  SPP_MAX_WEEKS,
  SPP_LOWER_EARNINGS_LIMIT_WEEKLY,
} from "./uk-rates";

export type PaternityEmployerPolicy = "statutory-only" | "enhanced";

export interface PaternityPayInput {
  weeklyEarnings: number;
  weeksTaken: number;
  employerPolicy: PaternityEmployerPolicy;
  enhancedWeeklyAmount: number;
}

export interface PaternityPayResult {
  statutoryWeeklyRate: number;
  weeksTaken: number;
  totalStatutoryPay: number;
  payingFullPay: boolean;
  fullPayWeeklyAmount: number;
  totalPay: number;
  isBelowLowerEarningsLimit: boolean;
}

export function calculatePaternityPay(input: PaternityPayInput): PaternityPayResult {
  const weeklyEarnings = Math.max(input.weeklyEarnings, 0);
  const weeksTaken = Math.min(Math.max(Math.round(input.weeksTaken), 0), SPP_MAX_WEEKS);

  const ninetyPercentRate = weeklyEarnings * SPP_HIGHER_RATE_PERCENT;
  const statutoryWeeklyRate = Math.min(SPP_WEEKLY_RATE, ninetyPercentRate);
  const totalStatutoryPay = statutoryWeeklyRate * weeksTaken;

  const payingFullPay = input.employerPolicy === "enhanced";
  const fullPayWeeklyAmount = payingFullPay ? Math.max(input.enhancedWeeklyAmount, 0) : statutoryWeeklyRate;
  const totalPay = payingFullPay ? fullPayWeeklyAmount * weeksTaken : totalStatutoryPay;

  return {
    statutoryWeeklyRate,
    weeksTaken,
    totalStatutoryPay,
    payingFullPay,
    fullPayWeeklyAmount,
    totalPay,
    isBelowLowerEarningsLimit: weeklyEarnings > 0 && weeklyEarnings < SPP_LOWER_EARNINGS_LIMIT_WEEKLY,
  };
}
