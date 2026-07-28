import {
  ENERGY_ELECTRICITY_UNIT_RATE_PENCE,
  ENERGY_ELECTRICITY_STANDING_CHARGE_PENCE_PER_DAY,
  ENERGY_GAS_UNIT_RATE_PENCE,
  ENERGY_GAS_STANDING_CHARGE_PENCE_PER_DAY,
  ENERGY_OIL_PRICE_PENCE_PER_LITRE,
} from "./uk-rates";

export type PropertyType = "flat" | "terrace" | "semi" | "detached";
export type HeatingType = "gas" | "electric" | "heat-pump" | "oil";

export const PROPERTY_TYPE_LABELS: Record<PropertyType, string> = {
  flat: "Flat",
  terrace: "Terraced house",
  semi: "Semi-detached house",
  detached: "Detached house",
};

export const HEATING_TYPE_LABELS: Record<HeatingType, string> = {
  gas: "Gas boiler",
  electric: "Electric (storage heaters / direct)",
  "heat-pump": "Heat pump",
  oil: "Oil boiler",
};

// Illustrative baseline non-heating electricity use (appliances, lighting,
// cooking) by household size, loosely based on Ofgem's low/medium/high
// Typical Domestic Consumption Values. Approximate only.
const BASE_ELECTRICITY_KWH: Record<number, number> = {
  1: 1800,
  2: 2100,
  3: 2700,
  4: 3300,
  5: 3800,
  6: 4100,
};

// Illustrative annual space and water heating demand (in kWh thermal, before
// any boiler or heat pump efficiency loss) for a 3-person household, by
// property type. Scaled by household size below. Approximate only: real
// heating demand depends heavily on insulation, property age and floor area.
const HEATING_DEMAND_BASE_KWH: Record<PropertyType, number> = {
  flat: 6000,
  terrace: 9000,
  semi: 11500,
  detached: 16000,
};

const HOUSEHOLD_SIZE_FACTOR: Record<number, number> = {
  1: 0.75,
  2: 0.85,
  3: 1.0,
  4: 1.1,
  5: 1.2,
  6: 1.3,
};

const GAS_BOILER_EFFICIENCY = 0.85;
const OIL_BOILER_EFFICIENCY = 0.8;
const HEAT_PUMP_COP = 3.0;
const KWH_PER_LITRE_KEROSENE = 10.35;

export function estimateDefaultElectricityKwh(householdSize: number, heatingType: HeatingType, propertyType: PropertyType): number {
  const size = Math.min(Math.max(householdSize, 1), 6);
  const base = BASE_ELECTRICITY_KWH[size];
  const heatingDemand = HEATING_DEMAND_BASE_KWH[propertyType] * HOUSEHOLD_SIZE_FACTOR[size];

  if (heatingType === "electric") return Math.round(base + heatingDemand);
  if (heatingType === "heat-pump") return Math.round(base + heatingDemand / HEAT_PUMP_COP);
  return Math.round(base);
}

export function estimateDefaultGasKwh(householdSize: number, heatingType: HeatingType, propertyType: PropertyType): number {
  if (heatingType !== "gas") return 0;
  const size = Math.min(Math.max(householdSize, 1), 6);
  const heatingDemand = HEATING_DEMAND_BASE_KWH[propertyType] * HOUSEHOLD_SIZE_FACTOR[size];
  return Math.round(heatingDemand / GAS_BOILER_EFFICIENCY);
}

export function estimateDefaultOilLitres(householdSize: number, heatingType: HeatingType, propertyType: PropertyType): number {
  if (heatingType !== "oil") return 0;
  const size = Math.min(Math.max(householdSize, 1), 6);
  const heatingDemand = HEATING_DEMAND_BASE_KWH[propertyType] * HOUSEHOLD_SIZE_FACTOR[size];
  return Math.round(heatingDemand / OIL_BOILER_EFFICIENCY / KWH_PER_LITRE_KEROSENE);
}

export interface EnergyBillInput {
  heatingType: HeatingType;
  annualElectricityKwh: number;
  annualGasKwh: number;
  annualOilLitres: number;
  electricityUnitRatePence: number;
  electricityStandingChargePencePerDay: number;
  gasUnitRatePence: number;
  gasStandingChargePencePerDay: number;
  oilPricePencePerLitre: number;
}

export interface EnergyBillResult {
  electricityAnnualCost: number;
  gasAnnualCost: number;
  oilAnnualCost: number;
  annualBill: number;
  monthlyBill: number;
  typicalMediumUsageBill: number;
  aboveTypicalUsage: boolean;
}

export function calculateEnergyBill(input: EnergyBillInput): EnergyBillResult {
  const electricityAnnualCost =
    (input.annualElectricityKwh * input.electricityUnitRatePence) / 100 +
    (input.electricityStandingChargePencePerDay / 100) * 365;

  const gasAnnualCost =
    input.heatingType === "gas"
      ? (input.annualGasKwh * input.gasUnitRatePence) / 100 + (input.gasStandingChargePencePerDay / 100) * 365
      : 0;

  const oilAnnualCost =
    input.heatingType === "oil" ? (input.annualOilLitres * input.oilPricePencePerLitre) / 100 : 0;

  const annualBill = electricityAnnualCost + gasAnnualCost + oilAnnualCost;

  // A typical dual-fuel, medium-usage household bill using Ofgem's published
  // Typical Domestic Consumption Values, at the same unit rates entered above.
  // Used purely as a like-for-like comparison point, not an external quote.
  const typicalElectricityCost =
    (2700 * input.electricityUnitRatePence) / 100 + (input.electricityStandingChargePencePerDay / 100) * 365;
  const typicalGasCost =
    (11500 * input.gasUnitRatePence) / 100 + (input.gasStandingChargePencePerDay / 100) * 365;
  const typicalMediumUsageBill = typicalElectricityCost + typicalGasCost;

  return {
    electricityAnnualCost,
    gasAnnualCost,
    oilAnnualCost,
    annualBill,
    monthlyBill: annualBill / 12,
    typicalMediumUsageBill,
    aboveTypicalUsage: annualBill > typicalMediumUsageBill,
  };
}

export const DEFAULT_ENERGY_RATES = {
  electricityUnitRatePence: ENERGY_ELECTRICITY_UNIT_RATE_PENCE,
  electricityStandingChargePencePerDay: ENERGY_ELECTRICITY_STANDING_CHARGE_PENCE_PER_DAY,
  gasUnitRatePence: ENERGY_GAS_UNIT_RATE_PENCE,
  gasStandingChargePencePerDay: ENERGY_GAS_STANDING_CHARGE_PENCE_PER_DAY,
  oilPricePencePerLitre: ENERGY_OIL_PRICE_PENCE_PER_LITRE,
};
