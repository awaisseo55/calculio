import { VED_STANDARD_RATE } from "./uk-rates";

const LITRES_PER_GALLON = 4.54609;

export interface ElectricCarRunningCostInput {
  annualMileage: number;
  milesPerKwh: number;
  homeElectricityPencePerKwh: number;
  percentChargedAtHome: number;
  publicChargingPencePerKwh: number;
  annualInsurance: number;
  annualServicing: number;
  annualVed: number;
  petrolMpg: number;
  petrolPricePerLitre: number;
  evVsPetrolPriceDifference: number;
}

export interface ElectricCarRunningCostResult {
  totalKwhPerYear: number;
  homeKwhPerYear: number;
  publicKwhPerYear: number;
  annualElectricityCost: number;
  annualRunningCostTotal: number;
  monthlyRunningCostTotal: number;
  costPerMile: number;
  equivalentPetrolAnnualFuelCost: number;
  annualFuelSavingsVsPetrol: number;
  paybackYears: number | null;
}

export const DEFAULT_EV_VED = VED_STANDARD_RATE;

export function calculateElectricCarRunningCost(
  input: ElectricCarRunningCostInput
): ElectricCarRunningCostResult {
  const {
    annualMileage,
    milesPerKwh,
    homeElectricityPencePerKwh,
    percentChargedAtHome,
    publicChargingPencePerKwh,
    annualInsurance,
    annualServicing,
    annualVed,
    petrolMpg,
    petrolPricePerLitre,
    evVsPetrolPriceDifference,
  } = input;

  const totalKwhPerYear = milesPerKwh > 0 ? annualMileage / milesPerKwh : 0;
  const homeShare = Math.min(Math.max(percentChargedAtHome, 0), 100) / 100;
  const homeKwhPerYear = totalKwhPerYear * homeShare;
  const publicKwhPerYear = totalKwhPerYear * (1 - homeShare);

  const annualElectricityCost =
    (homeKwhPerYear * homeElectricityPencePerKwh + publicKwhPerYear * publicChargingPencePerKwh) /
    100;

  const annualRunningCostTotal =
    annualElectricityCost + annualInsurance + annualServicing + annualVed;

  const litresPerYear = petrolMpg > 0 ? (annualMileage / petrolMpg) * LITRES_PER_GALLON : 0;
  const equivalentPetrolAnnualFuelCost = litresPerYear * petrolPricePerLitre;

  const annualFuelSavingsVsPetrol = equivalentPetrolAnnualFuelCost - annualElectricityCost;

  const paybackYears =
    evVsPetrolPriceDifference > 0 && annualFuelSavingsVsPetrol > 0
      ? evVsPetrolPriceDifference / annualFuelSavingsVsPetrol
      : null;

  return {
    totalKwhPerYear,
    homeKwhPerYear,
    publicKwhPerYear,
    annualElectricityCost,
    annualRunningCostTotal,
    monthlyRunningCostTotal: annualRunningCostTotal / 12,
    costPerMile: annualMileage > 0 ? annualRunningCostTotal / annualMileage : 0,
    equivalentPetrolAnnualFuelCost,
    annualFuelSavingsVsPetrol,
    paybackYears,
  };
}
