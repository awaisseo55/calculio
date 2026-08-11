import {
  NATIONAL_LIVING_WAGE_HOURLY,
  NATIONAL_MINIMUM_WAGE_18_20_HOURLY,
  NATIONAL_MINIMUM_WAGE_UNDER_18_HOURLY,
  APPRENTICE_RATE_HOURLY,
} from "./uk-rates";

export type MinimumWageAgeBand = "under18" | "18-20" | "21plus" | "apprentice";

export interface MinimumWageInput {
  ageBand: MinimumWageAgeBand;
  hoursPerWeek: number;
  actualHourlyRate: number;
}

export interface MinimumWageResult {
  minimumHourlyRate: number;
  actualHourlyRate: number;
  isBelowMinimum: boolean;
  shortfallPerHour: number;
  minimumWeeklyPay: number;
  minimumAnnualPay: number;
  actualWeeklyPay: number;
  actualAnnualPay: number;
  shortfallPerWeek: number;
  shortfallPerYear: number;
}

const RATE_BY_BAND: Record<MinimumWageAgeBand, number> = {
  under18: NATIONAL_MINIMUM_WAGE_UNDER_18_HOURLY,
  "18-20": NATIONAL_MINIMUM_WAGE_18_20_HOURLY,
  "21plus": NATIONAL_LIVING_WAGE_HOURLY,
  apprentice: APPRENTICE_RATE_HOURLY,
};

export function calculateMinimumWage(input: MinimumWageInput): MinimumWageResult {
  const hoursPerWeek = Math.max(input.hoursPerWeek, 0);
  const actualHourlyRate = Math.max(input.actualHourlyRate, 0);
  const minimumHourlyRate = RATE_BY_BAND[input.ageBand];

  const isBelowMinimum = actualHourlyRate < minimumHourlyRate - 0.001;
  const shortfallPerHour = Math.max(minimumHourlyRate - actualHourlyRate, 0);

  const minimumWeeklyPay = minimumHourlyRate * hoursPerWeek;
  const minimumAnnualPay = minimumWeeklyPay * 52;
  const actualWeeklyPay = actualHourlyRate * hoursPerWeek;
  const actualAnnualPay = actualWeeklyPay * 52;

  return {
    minimumHourlyRate,
    actualHourlyRate,
    isBelowMinimum,
    shortfallPerHour,
    minimumWeeklyPay,
    minimumAnnualPay,
    actualWeeklyPay,
    actualAnnualPay,
    shortfallPerWeek: Math.max(minimumWeeklyPay - actualWeeklyPay, 0),
    shortfallPerYear: Math.max(minimumAnnualPay - actualAnnualPay, 0),
  };
}
