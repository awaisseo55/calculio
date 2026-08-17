export type DogActivityLevel = "weightLoss" | "neuteredNormal" | "intactNormal" | "active" | "puppy";

export interface DogFoodInput {
  weightKg: number;
  activityLevel: DogActivityLevel;
  foodKcalPer100g: number;
}

export interface DogFoodResult {
  restingEnergyKcal: number;
  dailyEnergyKcal: number;
  dailyFoodGrams: number;
}

export const DOG_ACTIVITY_LEVELS: Record<
  DogActivityLevel,
  { label: string; multiplier: number; helpText: string }
> = {
  weightLoss: { label: "Weight loss plan", multiplier: 1.0, helpText: "Under vet guidance for a slimming plan" },
  neuteredNormal: { label: "Neutered, normal activity", multiplier: 1.6, helpText: "Typical adult pet dog" },
  intactNormal: { label: "Not neutered, normal activity", multiplier: 1.8, helpText: "Typical adult pet dog" },
  active: { label: "Very active or working dog", multiplier: 2.5, helpText: "Long daily walks, working or sporting dogs" },
  puppy: { label: "Puppy (under 12 months)", multiplier: 3.0, helpText: "Puppies need more energy for growth; check with your vet" },
};

// Resting Energy Requirement uses the standard veterinary formula
// 70 x (bodyweight in kg) ^ 0.75, then scales it by an activity multiplier
// to estimate daily energy requirement, in line with commonly published
// veterinary nutrition guidance (for example WSAVA nutrition guidelines).
export function calculateDogFood(input: DogFoodInput): DogFoodResult {
  const weightKg = Math.max(input.weightKg, 0.5);
  const foodKcalPer100g = Math.max(input.foodKcalPer100g, 50);
  const multiplier = DOG_ACTIVITY_LEVELS[input.activityLevel].multiplier;

  const restingEnergyKcal = 70 * Math.pow(weightKg, 0.75);
  const dailyEnergyKcal = restingEnergyKcal * multiplier;
  const dailyFoodGrams = (dailyEnergyKcal / foodKcalPer100g) * 100;

  return { restingEnergyKcal, dailyEnergyKcal, dailyFoodGrams };
}
