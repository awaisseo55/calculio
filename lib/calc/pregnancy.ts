export type PregnancyMethod = "lmp" | "conception" | "ivf3" | "ivf5";

export interface PregnancyInput {
  method: PregnancyMethod;
  date: string; // ISO date
  cycleLength: number; // days, only used for "lmp"
}

export interface Milestone {
  label: string;
  weekLabel: string;
  date: Date;
}

export interface PregnancyResult {
  dueDate: Date;
  conceptionDate: Date;
  gestationalWeeks: number;
  gestationalDays: number;
  trimester: 1 | 2 | 3;
  daysUntilDueDate: number;
  milestones: Milestone[];
}

const DAY_MS = 24 * 60 * 60 * 1000;

function addDays(date: Date, days: number): Date {
  return new Date(date.getTime() + days * DAY_MS);
}

export function calculatePregnancy(input: PregnancyInput, today: Date = new Date()): PregnancyResult {
  const inputDate = new Date(input.date);

  // "effectiveStart" is the equivalent LMP date used as day 0 of gestational dating,
  // adjusted so due date and current gestational age stay consistent with each other.
  let effectiveStart: Date;
  switch (input.method) {
    case "conception":
      effectiveStart = addDays(inputDate, -14);
      break;
    case "ivf3":
      effectiveStart = addDays(inputDate, -17); // day-3 transfer = 17 days post-LMP equivalent
      break;
    case "ivf5":
      effectiveStart = addDays(inputDate, -19); // day-5 blastocyst transfer = 19 days post-LMP equivalent
      break;
    default:
      effectiveStart = addDays(inputDate, input.cycleLength - 28);
      break;
  }

  const dueDate = addDays(effectiveStart, 280);
  const conceptionDate = addDays(effectiveStart, 14);

  const daysPregnant = Math.floor((today.getTime() - effectiveStart.getTime()) / DAY_MS);
  const gestationalWeeks = Math.max(Math.floor(daysPregnant / 7), 0);
  const gestationalDays = Math.max(daysPregnant % 7, 0);

  let trimester: 1 | 2 | 3 = 1;
  if (gestationalWeeks >= 27) trimester = 3;
  else if (gestationalWeeks >= 13) trimester = 2;

  const daysUntilDueDate = Math.ceil((dueDate.getTime() - today.getTime()) / DAY_MS);

  const milestoneWeeks: { label: string; week: number }[] = [
    { label: "Booking appointment", week: 9 },
    { label: "Dating (12-week) scan", week: 12 },
    { label: "Anomaly (20-week) scan", week: 20 },
    { label: "Third trimester begins", week: 28 },
    { label: "Full term", week: 37 },
  ];

  const milestones: Milestone[] = milestoneWeeks.map((m) => ({
    label: m.label,
    weekLabel: `Week ${m.week}`,
    date: addDays(effectiveStart, m.week * 7),
  }));

  return {
    dueDate,
    conceptionDate,
    gestationalWeeks,
    gestationalDays,
    trimester,
    daysUntilDueDate,
    milestones,
  };
}
