const LITRES_PER_UK_GALLON = 4.54609;
const LITRES_PER_US_GALLON = 3.78541;
const KM_PER_MILE = 1.609344;

export type FuelUnit = "litres" | "gallons";
export type MpgFuelType = "petrol" | "diesel" | "hybrid" | "electric";

export interface MpgInput {
  distanceMiles: number;
  fuelUsed: number;
  fuelUnit: FuelUnit;
  fuelType: MpgFuelType;
  pricePerLitre: number;
}

export interface MpgResult {
  litresUsed: number;
  mpgImperial: number;
  mpgUS: number;
  litresPer100km: number;
  costPerMile: number;
  totalCost: number;
}

export function calculateMpg(input: MpgInput): MpgResult {
  const litresUsed =
    input.fuelUnit === "litres" ? input.fuelUsed : input.fuelUsed * LITRES_PER_UK_GALLON;

  const mpgImperial =
    litresUsed > 0 ? (input.distanceMiles / litresUsed) * LITRES_PER_UK_GALLON : 0;
  const mpgUS = litresUsed > 0 ? (input.distanceMiles / litresUsed) * LITRES_PER_US_GALLON : 0;

  const distanceKm = input.distanceMiles * KM_PER_MILE;
  const litresPer100km = distanceKm > 0 ? (litresUsed / distanceKm) * 100 : 0;

  const totalCost = litresUsed * input.pricePerLitre;
  const costPerMile = input.distanceMiles > 0 ? totalCost / input.distanceMiles : 0;

  return { litresUsed, mpgImperial, mpgUS, litresPer100km, costPerMile, totalCost };
}
