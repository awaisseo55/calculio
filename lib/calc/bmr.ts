export type Gender = "male" | "female";
export type BmrFormula = "mifflin" | "harris-benedict";

export interface BmrInput {
  gender: Gender;
  age: number;
  heightCm: number;
  weightKg: number;
  formula: BmrFormula;
}

export interface BmrResult {
  bmr: number;
  formula: BmrFormula;
  mifflinBmr: number;
  harrisBenedictBmr: number;
}

function mifflinStJeor(gender: Gender, weightKg: number, heightCm: number, age: number): number {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  return gender === "male" ? base + 5 : base - 161;
}

// Revised Harris-Benedict equation (Roza & Shizgal, 1984).
function harrisBenedict(gender: Gender, weightKg: number, heightCm: number, age: number): number {
  return gender === "male"
    ? 88.362 + 13.397 * weightKg + 4.799 * heightCm - 5.677 * age
    : 447.593 + 9.247 * weightKg + 3.098 * heightCm - 4.33 * age;
}

export function calculateBmr(input: BmrInput): BmrResult {
  const mifflinBmr = mifflinStJeor(input.gender, input.weightKg, input.heightCm, input.age);
  const harrisBenedictBmr = harrisBenedict(input.gender, input.weightKg, input.heightCm, input.age);

  return {
    bmr: input.formula === "mifflin" ? mifflinBmr : harrisBenedictBmr,
    formula: input.formula,
    mifflinBmr,
    harrisBenedictBmr,
  };
}
