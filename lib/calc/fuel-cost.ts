const LITRES_PER_UK_GALLON = 4.54609;
const KM_PER_MILE = 1.609344;

export type DistanceUnit = "miles" | "km";
export type EfficiencyUnit = "mpg" | "l100km";

export interface FuelCostInput {
  distance: number;
  distanceUnit: DistanceUnit;
  efficiency: number;
  efficiencyUnit: EfficiencyUnit;
  pricePerLitre: number;
}

export interface FuelCostResult {
  distanceMiles: number;
  litresUsed: number;
  totalCost: number;
  costPerMile: number;
  costPerKm: number;
  mpg: number;
  l100km: number;
}

export function calculateFuelCost(input: FuelCostInput): FuelCostResult {
  const { distance, distanceUnit, efficiency, efficiencyUnit, pricePerLitre } = input;

  const distanceMiles = distanceUnit === "km" ? distance / KM_PER_MILE : distance;
  const distanceKm = distanceUnit === "miles" ? distance * KM_PER_MILE : distance;

  // Litres used derived directly from whichever unit was supplied, for accuracy.
  const litresUsed =
    efficiencyUnit === "mpg"
      ? (distanceMiles / efficiency) * LITRES_PER_UK_GALLON
      : (distanceKm / 100) * efficiency;

  const totalCost = litresUsed * pricePerLitre;
  const l100km = efficiencyUnit === "l100km" ? efficiency : (litresUsed / distanceKm) * 100;
  const mpgFinal = efficiencyUnit === "mpg" ? efficiency : (distanceMiles / litresUsed) * LITRES_PER_UK_GALLON;

  return {
    distanceMiles,
    litresUsed,
    totalCost,
    costPerMile: distanceMiles > 0 ? totalCost / distanceMiles : 0,
    costPerKm: distanceKm > 0 ? totalCost / distanceKm : 0,
    mpg: mpgFinal,
    l100km: Number.isFinite(l100km) ? l100km : 0,
  };
}
