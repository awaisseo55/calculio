// Current UK government (GOV.UK / building regulations guidance) recommended
// loft insulation depth for mineral wool style insulation.
export const RECOMMENDED_INSULATION_DEPTH_MM = 270;

export interface LoftInsulationInput {
  floorAreaM2: number;
  currentDepthMm: number;
  targetDepthMm: number;
  rollWidthMm: number;
  rollLengthM: number;
  rollThicknessMm: number;
  pricePerRoll: number;
}

// Illustrative annual energy bill saving ranges (£) for topping up loft
// insulation to the recommended 270mm, by starting depth band. These are
// rough, widely cited ballpark figures for a typical UK home and vary a lot
// by home size, heating type, fuel prices and how well the rest of the home
// is insulated. Treat as a general guide only, not a guarantee.
const SAVINGS_BANDS: { maxCurrentDepthMm: number; low: number; high: number }[] = [
  { maxCurrentDepthMm: 0, low: 150, high: 280 },
  { maxCurrentDepthMm: 50, low: 100, high: 200 },
  { maxCurrentDepthMm: 100, low: 25, high: 60 },
  { maxCurrentDepthMm: 150, low: 10, high: 30 },
  { maxCurrentDepthMm: 200, low: 5, high: 15 },
  { maxCurrentDepthMm: Infinity, low: 0, high: 5 },
];

export interface EnergySavingEstimate {
  low: number;
  high: number;
}

export function estimateAnnualEnergySaving(currentDepthMm: number): EnergySavingEstimate {
  const band =
    SAVINGS_BANDS.find((b) => currentDepthMm <= b.maxCurrentDepthMm) ??
    SAVINGS_BANDS[SAVINGS_BANDS.length - 1];
  return { low: band.low, high: band.high };
}

export interface LoftInsulationResult {
  additionalDepthMm: number;
  layersNeeded: number;
  rollAreaM2: number;
  rollsPerLayer: number;
  totalRollsNeeded: number;
  estimatedCost: number;
  alreadyMeetsRecommendation: boolean;
  estimatedAnnualSaving: EnergySavingEstimate;
}

export function calculateLoftInsulation(input: LoftInsulationInput): LoftInsulationResult {
  const additionalDepthMm = Math.max(input.targetDepthMm - input.currentDepthMm, 0);
  const layersNeeded =
    input.rollThicknessMm > 0 ? Math.ceil(additionalDepthMm / input.rollThicknessMm) : 0;

  const rollAreaM2 = (input.rollWidthMm / 1000) * input.rollLengthM;
  const rollsPerLayer = rollAreaM2 > 0 ? Math.ceil(input.floorAreaM2 / rollAreaM2) : 0;
  const totalRollsNeeded = layersNeeded * rollsPerLayer;
  const estimatedCost = totalRollsNeeded * input.pricePerRoll;

  return {
    additionalDepthMm,
    layersNeeded,
    rollAreaM2,
    rollsPerLayer,
    totalRollsNeeded,
    estimatedCost,
    alreadyMeetsRecommendation: input.currentDepthMm >= input.targetDepthMm,
    estimatedAnnualSaving: estimateAnnualEnergySaving(input.currentDepthMm),
  };
}
