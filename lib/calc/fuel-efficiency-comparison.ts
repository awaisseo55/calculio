const LITRES_PER_UK_GALLON = 4.54609;

export type VehicleFuelType = "petrol" | "diesel" | "hybrid";

export interface VehicleInput {
  annualMileage: number;
  mpg: number;
  fuelType: VehicleFuelType;
  pricePerLitre: number;
}

export interface VehicleResult {
  annualFuelCost: number;
  costPerMile: number;
  litresPerYear: number;
}

export interface FuelEfficiencyComparisonResult {
  vehicleA: VehicleResult;
  vehicleB: VehicleResult;
  annualDifference: number;
  fiveYearDifference: number;
  cheaperVehicle: "A" | "B" | "equal";
}

function calculateVehicle(input: VehicleInput): VehicleResult {
  const litresPerYear =
    input.mpg > 0 ? (input.annualMileage / input.mpg) * LITRES_PER_UK_GALLON : 0;
  const annualFuelCost = litresPerYear * input.pricePerLitre;
  const costPerMile = input.annualMileage > 0 ? annualFuelCost / input.annualMileage : 0;

  return { annualFuelCost, costPerMile, litresPerYear };
}

export function calculateFuelEfficiencyComparison(
  vehicleAInput: VehicleInput,
  vehicleBInput: VehicleInput
): FuelEfficiencyComparisonResult {
  const vehicleA = calculateVehicle(vehicleAInput);
  const vehicleB = calculateVehicle(vehicleBInput);

  const annualDifference = Math.abs(vehicleA.annualFuelCost - vehicleB.annualFuelCost);
  const fiveYearDifference = annualDifference * 5;

  let cheaperVehicle: "A" | "B" | "equal" = "equal";
  if (vehicleA.annualFuelCost < vehicleB.annualFuelCost) cheaperVehicle = "A";
  else if (vehicleB.annualFuelCost < vehicleA.annualFuelCost) cheaperVehicle = "B";

  return { vehicleA, vehicleB, annualDifference, fiveYearDifference, cheaperVehicle };
}
