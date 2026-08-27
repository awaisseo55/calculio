export type BodyFatSex = "male" | "female";

export interface BodyFatPercentageInput {
  sex: BodyFatSex;
  heightCm: number;
  neckCm: number;
  waistCm: number;
  hipCm: number;
}

export interface BodyFatPercentageResult {
  bodyFatPercent: number;
  category: string;
}

// US Navy circumference method (Hodgdon & Beckett, 1984), metric version, with
// the Siri equation used to convert body density into a body fat percentage.
export function calculateBodyFatPercentage(input: BodyFatPercentageInput): BodyFatPercentageResult {
  const heightCm = Math.max(input.heightCm, 100);
  const neckCm = Math.max(input.neckCm, 20);
  const waistCm = Math.max(input.waistCm, 40);
  const hipCm = Math.max(input.hipCm, 40);

  let bodyDensity: number;
  if (input.sex === "male") {
    const waistMinusNeck = Math.max(waistCm - neckCm, 1);
    bodyDensity =
      1.0324 - 0.19077 * Math.log10(waistMinusNeck) + 0.15456 * Math.log10(heightCm);
  } else {
    const circumferenceSum = Math.max(waistCm + hipCm - neckCm, 1);
    bodyDensity =
      1.29579 - 0.35004 * Math.log10(circumferenceSum) + 0.221 * Math.log10(heightCm);
  }

  const bodyFatPercent = Math.min(Math.max(495 / bodyDensity - 450, 2), 60);

  return { bodyFatPercent, category: getBodyFatCategory(input.sex, bodyFatPercent) };
}

function getBodyFatCategory(sex: BodyFatSex, bodyFatPercent: number): string {
  if (sex === "male") {
    if (bodyFatPercent < 6) return "Essential fat";
    if (bodyFatPercent < 14) return "Athletic";
    if (bodyFatPercent < 18) return "Fit";
    if (bodyFatPercent < 25) return "Average";
    return "Above average";
  }
  if (bodyFatPercent < 14) return "Essential fat";
  if (bodyFatPercent < 21) return "Athletic";
  if (bodyFatPercent < 25) return "Fit";
  if (bodyFatPercent < 32) return "Average";
  return "Above average";
}
