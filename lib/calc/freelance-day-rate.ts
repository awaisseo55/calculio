export interface FreelanceDayRateInput {
  desiredAnnualIncome: number;
  annualExpenses: number;
  workingWeeksPerYear: number;
  workingDaysPerWeek: number;
  nonBillablePercent: number;
  bufferPercent: number;
  hoursPerDay: number;
}

export interface FreelanceDayRateResult {
  totalWorkingDays: number;
  billableDays: number;
  dayRate: number;
  hourlyRate: number;
  annualRevenueTarget: number;
}

export function calculateFreelanceDayRate(input: FreelanceDayRateInput): FreelanceDayRateResult {
  const desiredAnnualIncome = Math.max(input.desiredAnnualIncome, 0);
  const annualExpenses = Math.max(input.annualExpenses, 0);
  const workingWeeksPerYear = Math.max(input.workingWeeksPerYear, 1);
  const workingDaysPerWeek = Math.max(input.workingDaysPerWeek, 1);
  const nonBillablePercent = Math.min(Math.max(input.nonBillablePercent, 0), 90);
  const bufferPercent = Math.max(input.bufferPercent, 0);
  const hoursPerDay = Math.max(input.hoursPerDay, 1);

  const totalWorkingDays = workingWeeksPerYear * workingDaysPerWeek;
  const billableDays = totalWorkingDays * (1 - nonBillablePercent / 100);

  const baseCost = desiredAnnualIncome + annualExpenses;
  const dayRateBeforeBuffer = billableDays > 0 ? baseCost / billableDays : 0;
  const dayRate = dayRateBeforeBuffer * (1 + bufferPercent / 100);
  const hourlyRate = dayRate / hoursPerDay;
  const annualRevenueTarget = dayRate * billableDays;

  return { totalWorkingDays, billableDays, dayRate, hourlyRate, annualRevenueTarget };
}
