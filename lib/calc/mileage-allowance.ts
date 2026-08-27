import {
  MILEAGE_RATE_CAR_VAN_STANDARD,
  MILEAGE_RATE_CAR_VAN_ADDITIONAL,
  MILEAGE_RATE_MOTORCYCLE,
  MILEAGE_RATE_BICYCLE,
  MILEAGE_HIGHER_RATE_THRESHOLD_MILES,
  EWNI_BANDS,
} from "./uk-rates";

export type MileageVehicleType = "carVan" | "motorcycle" | "bicycle";

export interface MileageAllowanceInput {
  vehicleType: MileageVehicleType;
  businessMiles: number;
  employerRatePerMile: number;
}

export interface MileageAllowanceResult {
  approvedAmount: number;
  amountPaidByEmployer: number;
  shortfall: number;
  estimatedTaxReliefAtBasicRate: number;
}

export function calculateMileageAllowance(input: MileageAllowanceInput): MileageAllowanceResult {
  const businessMiles = Math.max(input.businessMiles, 0);
  const employerRatePerMile = Math.max(input.employerRatePerMile, 0);

  let approvedAmount: number;
  if (input.vehicleType === "carVan") {
    const milesAtStandardRate = Math.min(businessMiles, MILEAGE_HIGHER_RATE_THRESHOLD_MILES);
    const milesAtAdditionalRate = Math.max(businessMiles - MILEAGE_HIGHER_RATE_THRESHOLD_MILES, 0);
    approvedAmount =
      milesAtStandardRate * MILEAGE_RATE_CAR_VAN_STANDARD +
      milesAtAdditionalRate * MILEAGE_RATE_CAR_VAN_ADDITIONAL;
  } else if (input.vehicleType === "motorcycle") {
    approvedAmount = businessMiles * MILEAGE_RATE_MOTORCYCLE;
  } else {
    approvedAmount = businessMiles * MILEAGE_RATE_BICYCLE;
  }

  const amountPaidByEmployer = businessMiles * employerRatePerMile;
  const shortfall = Math.max(approvedAmount - amountPaidByEmployer, 0);
  const basicRate = EWNI_BANDS[0].rate;
  const estimatedTaxReliefAtBasicRate = shortfall * basicRate;

  return { approvedAmount, amountPaidByEmployer, shortfall, estimatedTaxReliefAtBasicRate };
}
