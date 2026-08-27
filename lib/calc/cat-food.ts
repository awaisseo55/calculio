export type CatActivityLevel = "weightLoss" | "neuteredNormal" | "intactNormal" | "active" | "kitten";

export interface CatFoodInput {
  weightKg: number;
  activityLevel: CatActivityLevel;
  foodKcalPer100g: number;
}

export interface CatFoodResult {
  restingEnergyKcal: number;
  dailyEnergyKcal: number;
  dailyFoodGrams: number;
}

export const CAT_ACTIVITY_LEVELS: Record<
  CatActivityLevel,
  { label: string; multiplier: number; helpText: string }
> = {
  weightLoss: { label: "Weight loss plan", multiplier: 1.0, helpText: "Under vet guidance for a slimming plan" },
  neuteredNormal: { label: "Neutered, normal activity", multiplier: 1.2, helpText: "Typical adult pet cat, most common" },
  intactNormal: { label: "Not neutered, normal activity", multiplier: 1.4, helpText: "Typical adult pet cat" },
  active: { label: "Very active or outdoor cat", multiplier: 1.6, helpText: "Roams outdoors or is highly playful" },
  kitten: { label: "Kitten (under 12 months)", multiplier: 2.5, helpText: "Kittens need more energy for growth; check with your vet" },
};

// Resting Energy Requirement uses the standard veterinary formula
// 70 x (bodyweight in kg) ^ 0.75, then scales it by an activity multiplier
// to estimate daily energy requirement, in line with commonly published
// feline nutrition guidance (for example WSAVA nutrition guidelines).
export function calculateCatFood(input: CatFoodInput): CatFoodResult {
  const weightKg = Math.max(input.weightKg, 0.5);
  const foodKcalPer100g = Math.max(input.foodKcalPer100g, 50);
  const multiplier = CAT_ACTIVITY_LEVELS[input.activityLevel].multiplier;

  const restingEnergyKcal = 70 * Math.pow(weightKg, 0.75);
  const dailyEnergyKcal = restingEnergyKcal * multiplier;
  const dailyFoodGrams = (dailyEnergyKcal / foodKcalPer100g) * 100;

  return { restingEnergyKcal, dailyEnergyKcal, dailyFoodGrams };
}
