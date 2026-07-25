// Illustrative typical UK water rates. Water company charges vary and change
// annually, so these figures are approximate, illustrative averages, not exact
// current tariffs. Always check your own supplier's current rates for a precise
// figure.
const UK_AVERAGE_ANNUAL_BILL = 473;
const UK_AVERAGE_LITRES_PER_PERSON_PER_DAY = 142;
const UK_AVERAGE_HOUSEHOLD_SIZE = 2.4;
const PRICE_PER_1000_LITRES =
  UK_AVERAGE_ANNUAL_BILL / ((UK_AVERAGE_LITRES_PER_PERSON_PER_DAY * UK_AVERAGE_HOUSEHOLD_SIZE * 365) / 1000);

export type WaterRegion =
  | "thames-water"
  | "severn-trent"
  | "united-utilities"
  | "anglian-water"
  | "yorkshire-water"
  | "southern-water"
  | "wessex-water"
  | "south-west-water"
  | "other-average";

export const WATER_REGION_LABELS: Record<WaterRegion, string> = {
  "thames-water": "Thames Water",
  "severn-trent": "Severn Trent",
  "united-utilities": "United Utilities",
  "anglian-water": "Anglian Water",
  "yorkshire-water": "Yorkshire Water",
  "southern-water": "Southern Water",
  "wessex-water": "Wessex Water",
  "south-west-water": "South West Water",
  "other-average": "Other / UK average",
};

// Illustrative multipliers relative to the UK average bill, based on the
// general pattern of published regional averages. Approximate only.
const WATER_REGION_MULTIPLIERS: Record<WaterRegion, number> = {
  "thames-water": 0.95,
  "severn-trent": 0.88,
  "united-utilities": 1.02,
  "anglian-water": 1.18,
  "yorkshire-water": 0.93,
  "southern-water": 1.15,
  "wessex-water": 1.22,
  "south-west-water": 1.28,
  "other-average": 1.0,
};

export type MeterStatus = "metered" | "unmetered";

export interface WaterBillInput {
  householdSize: number;
  region: WaterRegion;
  meterStatus: MeterStatus;
  litresPerPersonPerDay: number;
}

export interface WaterBillResult {
  annualBill: number;
  monthlyBill: number;
  costPerPerson: number;
  ukAverageAnnualBill: number;
  regionMultiplier: number;
}

export function calculateWaterBill(input: WaterBillInput): WaterBillResult {
  const regionMultiplier = WATER_REGION_MULTIPLIERS[input.region];

  let annualBill: number;
  if (input.meterStatus === "unmetered") {
    annualBill = UK_AVERAGE_ANNUAL_BILL * regionMultiplier;
  } else {
    const annualLitres = input.householdSize * input.litresPerPersonPerDay * 365;
    annualBill = (annualLitres / 1000) * PRICE_PER_1000_LITRES * regionMultiplier;
  }

  return {
    annualBill,
    monthlyBill: annualBill / 12,
    costPerPerson: input.householdSize > 0 ? annualBill / input.householdSize : annualBill,
    ukAverageAnnualBill: UK_AVERAGE_ANNUAL_BILL,
    regionMultiplier,
  };
}
