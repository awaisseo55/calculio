export interface OneRepMaxInput {
  weightLifted: number;
  reps: number;
}

export interface OneRepMaxPercentage {
  percent: number;
  weight: number;
}

export interface OneRepMaxResult {
  oneRepMax: number;
  percentages: OneRepMaxPercentage[];
}

const TRAINING_PERCENTAGES = [50, 60, 70, 75, 80, 85, 90, 95, 100];

// Epley formula, one of the most widely used estimators for one-rep max
// from a submaximal set of reps: 1RM = weight x (1 + reps / 30).
export function calculateOneRepMax(input: OneRepMaxInput): OneRepMaxResult {
  const weightLifted = Math.max(input.weightLifted, 0);
  const reps = Math.max(Math.round(input.reps), 1);

  const oneRepMax = reps === 1 ? weightLifted : weightLifted * (1 + reps / 30);

  const percentages: OneRepMaxPercentage[] = TRAINING_PERCENTAGES.map((percent) => ({
    percent,
    weight: oneRepMax * (percent / 100),
  }));

  return { oneRepMax, percentages };
}
