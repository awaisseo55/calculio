export type DegreeWeightingScheme = "20-80" | "25-75" | "33-67" | "40-60" | "50-50";

export interface DegreeClassificationInput {
  year2Mark: number;
  year3Mark: number;
  scheme: DegreeWeightingScheme;
}

export interface DegreeClassificationResult {
  weightedAverage: number;
  classification: string;
  isBorderline: boolean;
  nextClassification: string | null;
  pointsToNext: number | null;
}

export const DEGREE_WEIGHTING_SCHEMES: Record<
  DegreeWeightingScheme,
  { year2: number; year3: number; label: string }
> = {
  "20-80": { year2: 0.2, year3: 0.8, label: "20% Year 2, 80% Year 3" },
  "25-75": { year2: 0.25, year3: 0.75, label: "25% Year 2, 75% Year 3" },
  "33-67": { year2: 0.33, year3: 0.67, label: "33% Year 2, 67% Year 3" },
  "40-60": { year2: 0.4, year3: 0.6, label: "40% Year 2, 60% Year 3" },
  "50-50": { year2: 0.5, year3: 0.5, label: "50% Year 2, 50% Year 3" },
};

const CLASSIFICATION_BANDS = [
  { min: 70, name: "First Class Honours (1st)" },
  { min: 60, name: "Upper Second Class Honours (2:1)" },
  { min: 50, name: "Lower Second Class Honours (2:2)" },
  { min: 40, name: "Third Class Honours (3rd)" },
  { min: 0, name: "Below the standard honours pass mark" },
];

const BORDERLINE_MARGIN = 2;

function clampMark(value: number): number {
  return Math.min(100, Math.max(0, value));
}

// Most UK universities calculate final classification as a weighted average
// of Year 2 and Year 3 module marks, then map that average onto the standard
// honours bands (70/60/50/40). The exact weighting varies by institution,
// which is why this calculator lets you choose the scheme.
export function calculateDegreeClassification(
  input: DegreeClassificationInput
): DegreeClassificationResult {
  const year2Mark = clampMark(input.year2Mark);
  const year3Mark = clampMark(input.year3Mark);
  const weights = DEGREE_WEIGHTING_SCHEMES[input.scheme];

  const weightedAverage = year2Mark * weights.year2 + year3Mark * weights.year3;

  const bandIndex = CLASSIFICATION_BANDS.findIndex((band) => weightedAverage >= band.min);
  const band = CLASSIFICATION_BANDS[bandIndex];
  const betterBand = bandIndex > 0 ? CLASSIFICATION_BANDS[bandIndex - 1] : null;

  const pointsToNext = betterBand ? betterBand.min - weightedAverage : null;
  const isBorderline = pointsToNext !== null && pointsToNext <= BORDERLINE_MARGIN;

  return {
    weightedAverage,
    classification: band.name,
    isBorderline,
    nextClassification: betterBand ? betterBand.name : null,
    pointsToNext,
  };
}
