import { SSP_WEEKLY_RATE, SSP_RATE_CAP_PERCENT_OF_AWE, SSP_MAX_WEEKS } from "./uk-rates";

export type EmploymentStatus = "employee" | "self-employed" | "agency";
export type EmployerSchemeType = "statutory-only" | "full-pay-then-ssp" | "half-pay-then-ssp";

export interface SickPayInput {
  employmentStatus: EmploymentStatus;
  weeklySalary: number;
  employerSchemeType: EmployerSchemeType;
  companySchemeWeeks: number;
  sickDays: number;
}

export interface SickPayResult {
  eligibleForSsp: boolean;
  sspWeeklyRate: number;
  totalWeeksSick: number;
  companySchemeWeeksUsed: number;
  sspOnlyWeeksUsed: number;
  weeksBeyondSspEntitlement: number;
  companyPayPortion: number;
  sspPortion: number;
  totalSickPay: number;
}

export function calculateSickPay(input: SickPayInput): SickPayResult {
  const { employmentStatus, weeklySalary, employerSchemeType, companySchemeWeeks, sickDays } =
    input;

  const totalWeeksSick = Math.max(sickDays, 0) / 5;
  const sspWeeklyRate = Math.min(SSP_WEEKLY_RATE, weeklySalary * SSP_RATE_CAP_PERCENT_OF_AWE);

  if (employmentStatus === "self-employed") {
    return {
      eligibleForSsp: false,
      sspWeeklyRate: 0,
      totalWeeksSick,
      companySchemeWeeksUsed: 0,
      sspOnlyWeeksUsed: 0,
      weeksBeyondSspEntitlement: 0,
      companyPayPortion: 0,
      sspPortion: 0,
      totalSickPay: 0,
    };
  }

  if (employerSchemeType === "statutory-only") {
    const sspOnlyWeeksUsed = Math.min(totalWeeksSick, SSP_MAX_WEEKS);
    const sspPortion = sspOnlyWeeksUsed * sspWeeklyRate;
    return {
      eligibleForSsp: true,
      sspWeeklyRate,
      totalWeeksSick,
      companySchemeWeeksUsed: 0,
      sspOnlyWeeksUsed,
      weeksBeyondSspEntitlement: Math.max(totalWeeksSick - SSP_MAX_WEEKS, 0),
      companyPayPortion: 0,
      sspPortion,
      totalSickPay: sspPortion,
    };
  }

  const companySchemeWeeksUsed = Math.min(Math.max(companySchemeWeeks, 0), totalWeeksSick);
  const remainingWeeksAfterScheme = Math.max(totalWeeksSick - companySchemeWeeksUsed, 0);
  const sspWeeksRemainingAllowance = Math.max(SSP_MAX_WEEKS - companySchemeWeeksUsed, 0);
  const sspOnlyWeeksUsed = Math.min(remainingWeeksAfterScheme, sspWeeksRemainingAllowance);

  const weeklyDuringScheme =
    employerSchemeType === "full-pay-then-ssp"
      ? weeklySalary
      : Math.max(weeklySalary * 0.5, sspWeeklyRate);

  const companyPayPortion = companySchemeWeeksUsed * weeklyDuringScheme;
  const sspPortion = sspOnlyWeeksUsed * sspWeeklyRate;

  return {
    eligibleForSsp: true,
    sspWeeklyRate,
    totalWeeksSick,
    companySchemeWeeksUsed,
    sspOnlyWeeksUsed,
    weeksBeyondSspEntitlement: Math.max(
      totalWeeksSick - companySchemeWeeksUsed - sspWeeksRemainingAllowance,
      0
    ),
    companyPayPortion,
    sspPortion,
    totalSickPay: companyPayPortion + sspPortion,
  };
}
