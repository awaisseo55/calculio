export type Gender = "male" | "female";
export type ActivityLevel = "sedentary" | "light" | "moderate" | "very" | "extra";

export interface TdeeInput {
  gender: Gender;
  age: number;
  heightCm: number;
  weightKg: number;
  activityLevel: ActivityLevel;
}

export const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  very: 1.725,
  extra: 1.9,
};

export const ACTIVITY_LABELS: Record<ActivityLevel, string> = {
  sedentary: "Sedentary (little or no exercise)",
  light: "Lightly active (light exercise 1 to 3 days a week)",
  moderate: "Moderately active (moderate exercise 3 to 5 days a week)",
  very: "Very active (hard exercise 6 to 7 days a week)",
  extra: "Extra active (very hard exercise or a physical job)",
};

export interface TdeeResult {
  bmr: number;
  tdee: number;
  maintenanceCalories: number;
  mildLossCalories: number;
  mildGainCalories: number;
}

export function calculateTdee(input: TdeeInput): TdeeResult {
  const base = 10 * input.weightKg + 6.25 * input.heightCm - 5 * input.age;
  const bmr = input.gender === "male" ? base + 5 : base - 161;
  const tdee = bmr * ACTIVITY_MULTIPLIERS[input.activityLevel];

  return {
    bmr,
    tdee,
    maintenanceCalories: tdee,
    mildLossCalories: Math.max(tdee - 250, 0),
    mildGainCalories: tdee + 250,
  };
}
