export type EmissionsStandard = "euro3-or-below" | "euro4" | "euro5" | "euro6";
export type EntryZone = "congestion-charge" | "ulez" | "both";
export type CongestionFuelType = "petrol" | "diesel" | "hybrid" | "electric";

export interface CongestionUlezInput {
  fuelType: CongestionFuelType;
  emissionsStandard: EmissionsStandard;
  entryDaysPerWeek: number;
  zone: EntryZone;
}

// Illustrative Transport for London daily charges. TfL reviews these regularly,
// including recent changes to the Congestion Charge's cleaner vehicle discount,
// so always confirm the current rate at tfl.gov.uk before budgeting around it.
const CONGESTION_CHARGE_DAILY = 15;
const ULEZ_DAILY = 12.5;

function isUlezCompliant(fuelType: CongestionFuelType, standard: EmissionsStandard): boolean {
  if (fuelType === "electric") return true;
  if (fuelType === "petrol" || fuelType === "hybrid") {
    return standard === "euro4" || standard === "euro5" || standard === "euro6";
  }
  return standard === "euro6";
}

export interface CongestionUlezResult {
  ulezCompliant: boolean;
  congestionChargeDaily: number;
  ulezDailyCharge: number;
  dailyCost: number;
  weeklyCost: number;
  monthlyCost: number;
  annualCost: number;
}

export function calculateCongestionUlez(input: CongestionUlezInput): CongestionUlezResult {
  const ulezCompliant = isUlezCompliant(input.fuelType, input.emissionsStandard);

  const congestionChargeDaily =
    input.zone === "congestion-charge" || input.zone === "both" ? CONGESTION_CHARGE_DAILY : 0;
  const ulezDailyCharge =
    (input.zone === "ulez" || input.zone === "both") && !ulezCompliant ? ULEZ_DAILY : 0;

  const dailyCost = congestionChargeDaily + ulezDailyCharge;
  const weeklyCost = dailyCost * input.entryDaysPerWeek;
  const monthlyCost = weeklyCost * (52 / 12);
  const annualCost = weeklyCost * 52;

  return {
    ulezCompliant,
    congestionChargeDaily,
    ulezDailyCharge,
    dailyCost,
    weeklyCost,
    monthlyCost,
    annualCost,
  };
}
