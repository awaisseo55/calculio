export type BmiUnits = "metric" | "imperial";

export interface BmiInput {
  units: BmiUnits;
  heightCm?: number;
  weightKg?: number;
  heightFt?: number;
  heightIn?: number;
  weightSt?: number;
  weightLb?: number;
}

export type BmiCategory =
  | "Underweight"
  | "Healthy weight"
  | "Overweight"
  | "Obese (Class I)"
  | "Obese (Class II)"
  | "Obese (Class III)";

export interface BmiResult {
  bmi: number;
  category: BmiCategory;
  heightM: number;
  weightKg: number;
  healthyWeightMinKg: number;
  healthyWeightMaxKg: number;
}

const KG_PER_STONE = 6.35029;
const KG_PER_LB = 0.453592;
const CM_PER_FT = 30.48;
const CM_PER_IN = 2.54;

export function bmiCategory(bmi: number): BmiCategory {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Healthy weight";
  if (bmi < 30) return "Overweight";
  if (bmi < 35) return "Obese (Class I)";
  if (bmi < 40) return "Obese (Class II)";
  return "Obese (Class III)";
}

export function calculateBmi(input: BmiInput): BmiResult {
  let heightCm: number;
  let weightKg: number;

  if (input.units === "metric") {
    heightCm = input.heightCm ?? 0;
    weightKg = input.weightKg ?? 0;
  } else {
    const ft = input.heightFt ?? 0;
    const inch = input.heightIn ?? 0;
    heightCm = ft * CM_PER_FT + inch * CM_PER_IN;
    const st = input.weightSt ?? 0;
    const lb = input.weightLb ?? 0;
    weightKg = st * KG_PER_STONE + lb * KG_PER_LB;
  }

  const heightM = heightCm / 100;
  const bmi = heightM > 0 ? weightKg / (heightM * heightM) : 0;

  return {
    bmi,
    category: bmiCategory(bmi),
    heightM,
    weightKg,
    healthyWeightMinKg: 18.5 * heightM * heightM,
    healthyWeightMaxKg: 24.9 * heightM * heightM,
  };
}

export function kgToStoneLb(kg: number): { stone: number; lb: number } {
  const totalLb = kg / KG_PER_LB;
  const stone = Math.floor(totalLb / 14);
  const lb = totalLb - stone * 14;
  return { stone, lb };
}
