export type ALevelGrade = "none" | "A*" | "A" | "B" | "C" | "D" | "E";
export type EpqGrade = "none" | "A*" | "A" | "B" | "C" | "D" | "E";

export interface UcasPointsInput {
  aLevelGrades: ALevelGrade[];
  epqGrade: EpqGrade;
}

export interface UcasPointsResult {
  aLevelPoints: number;
  epqPoints: number;
  totalPoints: number;
}

// UCAS Tariff points, introduced for 2017 entry and unchanged since; the
// official tables are published by UCAS.
export const A_LEVEL_TARIFF_POINTS: Record<Exclude<ALevelGrade, "none">, number> = {
  "A*": 56,
  A: 48,
  B: 40,
  C: 32,
  D: 24,
  E: 16,
};

export const EPQ_TARIFF_POINTS: Record<Exclude<EpqGrade, "none">, number> = {
  "A*": 28,
  A: 24,
  B: 20,
  C: 16,
  D: 12,
  E: 8,
};

export function calculateUcasPoints(input: UcasPointsInput): UcasPointsResult {
  const aLevelPoints = input.aLevelGrades.reduce((sum, grade) => {
    if (grade === "none") return sum;
    return sum + A_LEVEL_TARIFF_POINTS[grade];
  }, 0);

  const epqPoints = input.epqGrade === "none" ? 0 : EPQ_TARIFF_POINTS[input.epqGrade];

  return {
    aLevelPoints,
    epqPoints,
    totalPoints: aLevelPoints + epqPoints,
  };
}
