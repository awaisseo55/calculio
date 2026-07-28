import { calculateTakeHomePay } from "./take-home-pay";
import { NATIONAL_LIVING_WAGE_HOURLY } from "./uk-rates";

export interface SalaryToHourlyInput {
  annualSalary: number;
  hoursPerWeek: number;
  weeksPerYear: number;
  holidayDaysPerYear: number;
  sickDaysPerYear: number;
}

export interface SalaryToHourlyResult {
  grossHourlyRate: number;
  netHourlyRate: number;
  netHourlyRateWorkingDaysOnly: number;
  annualNetPay: number;
  totalAnnualHours: number;
  actualWorkingDaysPerYear: number;
  actualWorkingHoursPerYear: number;
  nationalLivingWage: number;
  aboveNationalLivingWage: boolean;
  differenceFromNationalLivingWage: number;
}

export function calculateSalaryToHourly(input: SalaryToHourlyInput): SalaryToHourlyResult {
  const { annualSalary, hoursPerWeek, weeksPerYear, holidayDaysPerYear, sickDaysPerYear } = input;

  const hoursPerDay = hoursPerWeek / 5;
  const totalWorkingDaysBeforeLeave = weeksPerYear * 5;
  const actualWorkingDaysPerYear = Math.max(totalWorkingDaysBeforeLeave - holidayDaysPerYear - sickDaysPerYear, 0);
  const actualWorkingHoursPerYear = actualWorkingDaysPerYear * hoursPerDay;

  const totalAnnualHours = weeksPerYear * hoursPerWeek;
  const grossHourlyRate = totalAnnualHours > 0 ? annualSalary / totalAnnualHours : 0;

  const { netAnnual } = calculateTakeHomePay({
    grossAnnualSalary: annualSalary,
    region: "england-wales-ni",
    studentLoanPlan: "none",
    pensionPercent: 0,
  });

  const netHourlyRate = totalAnnualHours > 0 ? netAnnual / totalAnnualHours : 0;
  const netHourlyRateWorkingDaysOnly =
    actualWorkingHoursPerYear > 0 ? netAnnual / actualWorkingHoursPerYear : 0;

  return {
    grossHourlyRate,
    netHourlyRate,
    netHourlyRateWorkingDaysOnly,
    annualNetPay: netAnnual,
    totalAnnualHours,
    actualWorkingDaysPerYear,
    actualWorkingHoursPerYear,
    nationalLivingWage: NATIONAL_LIVING_WAGE_HOURLY,
    aboveNationalLivingWage: grossHourlyRate >= NATIONAL_LIVING_WAGE_HOURLY,
    differenceFromNationalLivingWage: grossHourlyRate - NATIONAL_LIVING_WAGE_HOURLY,
  };
}
