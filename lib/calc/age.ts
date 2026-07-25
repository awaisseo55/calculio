export interface AgeInput {
  dateOfBirth: string; // ISO date
  asOfDate?: string; // ISO date, defaults to today
}

export interface AgeResult {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalWeeks: number;
  totalHours: number;
  dayOfWeekBorn: string;
  nextBirthday: Date;
  daysUntilNextBirthday: number;
}

const DAY_MS = 24 * 60 * 60 * 1000;
const DAYS_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export function calculateAge(input: AgeInput): AgeResult {
  const dob = new Date(input.dateOfBirth);
  const asOf = input.asOfDate ? new Date(input.asOfDate) : new Date();

  let years = asOf.getFullYear() - dob.getFullYear();
  let months = asOf.getMonth() - dob.getMonth();
  let days = asOf.getDate() - dob.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(asOf.getFullYear(), asOf.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const totalDays = Math.floor((asOf.getTime() - dob.getTime()) / DAY_MS);

  let nextBirthday = new Date(asOf.getFullYear(), dob.getMonth(), dob.getDate());
  if (nextBirthday.getTime() < asOf.getTime()) {
    nextBirthday = new Date(asOf.getFullYear() + 1, dob.getMonth(), dob.getDate());
  }
  const daysUntilNextBirthday = Math.ceil((nextBirthday.getTime() - asOf.getTime()) / DAY_MS);

  return {
    years,
    months,
    days,
    totalDays,
    totalWeeks: Math.floor(totalDays / 7),
    totalHours: totalDays * 24,
    dayOfWeekBorn: DAYS_OF_WEEK[dob.getDay()],
    nextBirthday,
    daysUntilNextBirthday,
  };
}
