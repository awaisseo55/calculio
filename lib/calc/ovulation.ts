export interface OvulationInput {
  lastPeriodDate: string; // ISO date, first day of last period
  cycleLength: number; // days, typically 21-40
}

export interface CycleProjection {
  cycleNumber: number;
  periodStartDate: Date;
  ovulationDate: Date;
  fertileWindowStart: Date;
  fertileWindowEnd: Date;
  nextPeriodDate: Date;
}

export interface OvulationResult {
  ovulationDate: Date;
  fertileWindowStart: Date;
  fertileWindowEnd: Date;
  nextPeriodDate: Date;
  upcomingCycles: CycleProjection[];
}

const DAY_MS = 24 * 60 * 60 * 1000;

// The luteal phase (from ovulation to the next period) is fairly consistent
// in length, unlike the first half of the cycle, so ovulation is estimated by
// counting back from the next expected period rather than forwards from day one.
const LUTEAL_PHASE_LENGTH_DAYS = 14;

function addDays(date: Date, days: number): Date {
  return new Date(date.getTime() + days * DAY_MS);
}

export function calculateOvulation(input: OvulationInput): OvulationResult {
  const lastPeriodDate = new Date(input.lastPeriodDate);
  const cycleLength = input.cycleLength;
  const ovulationDayOffset = cycleLength - LUTEAL_PHASE_LENGTH_DAYS;

  const ovulationDate = addDays(lastPeriodDate, ovulationDayOffset);
  const fertileWindowStart = addDays(ovulationDate, -5);
  const fertileWindowEnd = ovulationDate;
  const nextPeriodDate = addDays(lastPeriodDate, cycleLength);

  const upcomingCycles: CycleProjection[] = [1, 2, 3].map((cycleNumber) => {
    const periodStartDate = addDays(lastPeriodDate, cycleLength * cycleNumber);
    const cycleOvulationDate = addDays(periodStartDate, ovulationDayOffset);
    return {
      cycleNumber,
      periodStartDate,
      ovulationDate: cycleOvulationDate,
      fertileWindowStart: addDays(cycleOvulationDate, -5),
      fertileWindowEnd: cycleOvulationDate,
      nextPeriodDate: addDays(periodStartDate, cycleLength),
    };
  });

  return { ovulationDate, fertileWindowStart, fertileWindowEnd, nextPeriodDate, upcomingCycles };
}
