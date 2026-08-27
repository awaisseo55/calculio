export type CalorieActivity =
  | "walkingModerate"
  | "walkingBrisk"
  | "runningEasy"
  | "runningModerate"
  | "runningFast"
  | "cyclingLeisure"
  | "cyclingModerate"
  | "cyclingVigorous"
  | "swimmingModerate"
  | "swimmingVigorous"
  | "weightsModerate"
  | "weightsVigorous"
  | "yoga"
  | "hiit"
  | "football"
  | "dancing"
  | "hiking"
  | "gardening";

export interface CaloriesBurnedInput {
  weightKg: number;
  durationMinutes: number;
  activity: CalorieActivity;
}

export interface CaloriesBurnedResult {
  caloriesBurned: number;
  caloriesPerMinute: number;
}

// MET (Metabolic Equivalent of Task) values from the widely published
// Compendium of Physical Activities (Ainsworth et al.), the standard
// reference used to estimate energy expenditure for named activities.
export const CALORIE_ACTIVITIES: Record<CalorieActivity, { label: string; met: number }> = {
  walkingModerate: { label: "Walking, moderate pace (5km/h)", met: 3.5 },
  walkingBrisk: { label: "Walking, brisk pace (6.5km/h)", met: 5.0 },
  runningEasy: { label: "Running, easy pace (8km/h)", met: 8.3 },
  runningModerate: { label: "Running, moderate pace (10km/h)", met: 9.8 },
  runningFast: { label: "Running, fast pace (13km/h)", met: 11.8 },
  cyclingLeisure: { label: "Cycling, leisurely", met: 4.0 },
  cyclingModerate: { label: "Cycling, moderate effort", met: 8.0 },
  cyclingVigorous: { label: "Cycling, vigorous effort", met: 10.0 },
  swimmingModerate: { label: "Swimming, moderate effort", met: 7.0 },
  swimmingVigorous: { label: "Swimming, vigorous effort", met: 9.8 },
  weightsModerate: { label: "Weight training, moderate effort", met: 3.5 },
  weightsVigorous: { label: "Weight training, vigorous effort", met: 6.0 },
  yoga: { label: "Yoga", met: 3.0 },
  hiit: { label: "HIIT or circuit training", met: 8.0 },
  football: { label: "Football (5-a-side or casual)", met: 7.0 },
  dancing: { label: "Dancing", met: 4.8 },
  hiking: { label: "Hiking", met: 6.0 },
  gardening: { label: "Gardening, general", met: 4.0 },
};

export function calculateCaloriesBurned(input: CaloriesBurnedInput): CaloriesBurnedResult {
  const weightKg = Math.max(input.weightKg, 20);
  const durationMinutes = Math.max(input.durationMinutes, 0);
  const met = CALORIE_ACTIVITIES[input.activity].met;

  const caloriesPerMinute = (met * 3.5 * weightKg) / 200;
  const caloriesBurned = caloriesPerMinute * durationMinutes;

  return { caloriesBurned, caloriesPerMinute };
}
