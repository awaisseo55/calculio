export type DistanceUnit = "km" | "miles";

export interface RunningPaceInput {
  distanceValue: number;
  distanceUnit: DistanceUnit;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface RacePrediction {
  label: string;
  distanceKm: number;
  timeSeconds: number;
}

export interface RunningPaceResult {
  distanceKm: number;
  totalTimeSeconds: number;
  paceSecondsPerKm: number;
  paceSecondsPerMile: number;
  speedKmh: number;
  speedMph: number;
  predictions: RacePrediction[];
}

const KM_PER_MILE = 1.60934;

const RACE_DISTANCES_KM: { label: string; distanceKm: number }[] = [
  { label: "5K", distanceKm: 5 },
  { label: "10K", distanceKm: 10 },
  { label: "Half marathon", distanceKm: 21.0975 },
  { label: "Marathon", distanceKm: 42.195 },
];

export function calculateRunningPace(input: RunningPaceInput): RunningPaceResult {
  const distanceValue = Math.max(input.distanceValue, 0);
  const distanceKm = input.distanceUnit === "km" ? distanceValue : distanceValue * KM_PER_MILE;
  const totalTimeSeconds =
    Math.max(input.hours, 0) * 3600 + Math.max(input.minutes, 0) * 60 + Math.max(input.seconds, 0);

  const paceSecondsPerKm = distanceKm > 0 ? totalTimeSeconds / distanceKm : 0;
  const paceSecondsPerMile = paceSecondsPerKm * KM_PER_MILE;
  const speedKmh = totalTimeSeconds > 0 ? distanceKm / (totalTimeSeconds / 3600) : 0;
  const speedMph = speedKmh / KM_PER_MILE;

  // Riegel's race time prediction formula: T2 = T1 x (D2/D1)^1.06, the
  // standard method used by most online race time predictors.
  const predictions: RacePrediction[] =
    distanceKm > 0 && totalTimeSeconds > 0
      ? RACE_DISTANCES_KM.map((race) => ({
          label: race.label,
          distanceKm: race.distanceKm,
          timeSeconds: totalTimeSeconds * Math.pow(race.distanceKm / distanceKm, 1.06),
        }))
      : [];

  return {
    distanceKm,
    totalTimeSeconds,
    paceSecondsPerKm,
    paceSecondsPerMile,
    speedKmh,
    speedMph,
    predictions,
  };
}

export function formatSecondsAsClock(totalSeconds: number): string {
  const seconds = Math.max(Math.round(totalSeconds), 0);
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  const mm = String(m).padStart(2, "0");
  const ss = String(s).padStart(2, "0");
  return h > 0 ? `${h}:${mm}:${ss}` : `${m}:${ss}`;
}
