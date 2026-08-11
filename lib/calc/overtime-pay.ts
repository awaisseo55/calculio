export interface OvertimePayInput {
  baseHourlyRate: number;
  standardHoursPerWeek: number;
  overtimeHours: number;
  overtimeMultiplier: number;
}

export interface OvertimePayResult {
  standardPay: number;
  overtimeHourlyRate: number;
  overtimePay: number;
  totalWeeklyPay: number;
  totalHours: number;
  effectiveHourlyRate: number;
  annualStandardPay: number;
  annualOvertimePay: number;
  annualTotalPay: number;
}

export function calculateOvertimePay(input: OvertimePayInput): OvertimePayResult {
  const baseHourlyRate = Math.max(input.baseHourlyRate, 0);
  const standardHoursPerWeek = Math.max(input.standardHoursPerWeek, 0);
  const overtimeHours = Math.max(input.overtimeHours, 0);
  const overtimeMultiplier = Math.max(input.overtimeMultiplier, 0);

  const standardPay = baseHourlyRate * standardHoursPerWeek;
  const overtimeHourlyRate = baseHourlyRate * overtimeMultiplier;
  const overtimePay = overtimeHourlyRate * overtimeHours;
  const totalWeeklyPay = standardPay + overtimePay;
  const totalHours = standardHoursPerWeek + overtimeHours;
  const effectiveHourlyRate = totalHours > 0 ? totalWeeklyPay / totalHours : 0;

  return {
    standardPay,
    overtimeHourlyRate,
    overtimePay,
    totalWeeklyPay,
    totalHours,
    effectiveHourlyRate,
    annualStandardPay: standardPay * 52,
    annualOvertimePay: overtimePay * 52,
    annualTotalPay: totalWeeklyPay * 52,
  };
}
