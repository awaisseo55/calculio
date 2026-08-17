export interface TimeDurationInput {
  startTime: string;
  endTime: string;
  unpaidBreakMinutes: number;
  hourlyRate: number;
}

export interface TimeDurationResult {
  totalMinutes: number;
  hours: number;
  minutes: number;
  decimalHours: number;
  pay: number | null;
  crossesMidnight: boolean;
}

function parseTimeToMinutes(time: string): number {
  const [hours, minutes] = time.split(":").map(Number);
  return (hours || 0) * 60 + (minutes || 0);
}

export function calculateTimeDuration(input: TimeDurationInput): TimeDurationResult {
  const startMinutes = parseTimeToMinutes(input.startTime);
  let endMinutes = parseTimeToMinutes(input.endTime);
  const crossesMidnight = endMinutes <= startMinutes;
  if (crossesMidnight) endMinutes += 24 * 60;

  const breakMinutes = Math.max(input.unpaidBreakMinutes, 0);
  const totalMinutes = Math.max(endMinutes - startMinutes - breakMinutes, 0);

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const decimalHours = totalMinutes / 60;
  const pay = input.hourlyRate > 0 ? decimalHours * input.hourlyRate : null;

  return { totalMinutes, hours, minutes, decimalHours, pay, crossesMidnight };
}
