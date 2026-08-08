import { calculateIncomeTax } from "./income-tax";
import { calculateNationalInsurance } from "./take-home-pay";
import {
  SMP_WEEKLY_RATE,
  SMP_HIGHER_RATE_PERCENT,
  SMP_HIGHER_RATE_WEEKS,
  SMP_TOTAL_PAID_WEEKS,
  MATERNITY_LEAVE_MAX_WEEKS,
} from "./uk-rates";

export type MaternityEmployerPolicy = "statutory-only" | "enhanced" | "other";

export interface MaternityPayInput {
  weeklySalary: number;
  leaveWeeks: number;
  employerPolicy: MaternityEmployerPolicy;
  enhancedFullPayWeeks: number;
  startDate: string;
}

export interface MonthlyMaternityPay {
  label: string;
  amount: number;
}

export interface MaternityPayResult {
  higherRateWeeks: number;
  higherRateTotal: number;
  standardRateWeeks: number;
  standardRateTotal: number;
  enhancedWeeks: number;
  enhancedTotal: number;
  totalPaidWeeks: number;
  unpaidWeeks: number;
  totalMaternityPay: number;
  estimatedIncomeTax: number;
  estimatedNationalInsurance: number;
  netMaternityPay: number;
  monthlyBreakdown: MonthlyMaternityPay[];
  standardWeeklyRate: number;
}

export function calculateMaternityPay(input: MaternityPayInput): MaternityPayResult {
  const weeklySalary = Math.max(input.weeklySalary, 0);
  const leaveWeeks = Math.min(Math.max(Math.round(input.leaveWeeks), 0), MATERNITY_LEAVE_MAX_WEEKS);
  const enhancedFullPayWeeks =
    input.employerPolicy === "enhanced"
      ? Math.min(Math.max(Math.round(input.enhancedFullPayWeeks), 0), SMP_TOTAL_PAID_WEEKS)
      : 0;

  const higherRatePay = weeklySalary * SMP_HIGHER_RATE_PERCENT;
  const standardWeeklyRate = Math.min(SMP_WEEKLY_RATE, higherRatePay);

  let higherRateWeeks = 0;
  let higherRateTotal = 0;
  let standardRateWeeks = 0;
  let standardRateTotal = 0;
  let enhancedWeeks = 0;
  let enhancedTotal = 0;

  const startDate = new Date(input.startDate);
  const monthlyMap = new Map<string, number>();
  const monthOrder: string[] = [];

  for (let week = 1; week <= leaveWeeks; week++) {
    let amount = 0;

    if (week <= SMP_TOTAL_PAID_WEEKS) {
      if (week <= enhancedFullPayWeeks) {
        amount = weeklySalary;
        enhancedWeeks += 1;
        enhancedTotal += amount;
      } else if (week <= SMP_HIGHER_RATE_WEEKS) {
        amount = higherRatePay;
        higherRateWeeks += 1;
        higherRateTotal += amount;
      } else {
        amount = standardWeeklyRate;
        standardRateWeeks += 1;
        standardRateTotal += amount;
      }
    }

    if (!Number.isNaN(startDate.getTime())) {
      const weekDate = new Date(startDate);
      weekDate.setDate(weekDate.getDate() + (week - 1) * 7);
      const label = new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric" }).format(
        weekDate
      );
      if (!monthlyMap.has(label)) {
        monthlyMap.set(label, 0);
        monthOrder.push(label);
      }
      monthlyMap.set(label, (monthlyMap.get(label) ?? 0) + amount);
    }
  }

  const totalPaidWeeks = enhancedWeeks + higherRateWeeks + standardRateWeeks;
  const unpaidWeeks = Math.max(leaveWeeks - totalPaidWeeks, 0);
  const totalMaternityPay = enhancedTotal + higherRateTotal + standardRateTotal;

  const estimatedIncomeTax = calculateIncomeTax({
    grossIncome: totalMaternityPay,
    region: "england-wales-ni",
  }).totalTax;
  const estimatedNationalInsurance = calculateNationalInsurance(totalMaternityPay);
  const netMaternityPay = Math.max(
    totalMaternityPay - estimatedIncomeTax - estimatedNationalInsurance,
    0
  );

  const monthlyBreakdown: MonthlyMaternityPay[] = monthOrder.map((label) => ({
    label,
    amount: monthlyMap.get(label) ?? 0,
  }));

  return {
    higherRateWeeks,
    higherRateTotal,
    standardRateWeeks,
    standardRateTotal,
    enhancedWeeks,
    enhancedTotal,
    totalPaidWeeks,
    unpaidWeeks,
    totalMaternityPay,
    estimatedIncomeTax,
    estimatedNationalInsurance,
    netMaternityPay,
    monthlyBreakdown,
    standardWeeklyRate,
  };
}
