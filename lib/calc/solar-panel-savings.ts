export interface SolarPanelSavingsInput {
  systemSizeKwp: number;
  generationPerKwpAnnual: number;
  selfConsumptionPercent: number;
  electricityUnitRatePence: number;
  exportRatePence: number;
  systemCost: number;
}

export interface SolarPanelSavingsResult {
  annualGenerationKwh: number;
  selfConsumedKwh: number;
  exportedKwh: number;
  annualBillSavings: number;
  annualExportIncome: number;
  totalAnnualBenefit: number;
  paybackYears: number | null;
  twentyFiveYearBenefit: number;
}

export function calculateSolarPanelSavings(input: SolarPanelSavingsInput): SolarPanelSavingsResult {
  const systemSizeKwp = Math.max(input.systemSizeKwp, 0);
  const generationPerKwpAnnual = Math.max(input.generationPerKwpAnnual, 0);
  const selfConsumptionPercent = Math.min(Math.max(input.selfConsumptionPercent, 0), 100);
  const electricityUnitRatePence = Math.max(input.electricityUnitRatePence, 0);
  const exportRatePence = Math.max(input.exportRatePence, 0);
  const systemCost = Math.max(input.systemCost, 0);

  const annualGenerationKwh = systemSizeKwp * generationPerKwpAnnual;
  const selfConsumedKwh = annualGenerationKwh * (selfConsumptionPercent / 100);
  const exportedKwh = annualGenerationKwh - selfConsumedKwh;

  const annualBillSavings = (selfConsumedKwh * electricityUnitRatePence) / 100;
  const annualExportIncome = (exportedKwh * exportRatePence) / 100;
  const totalAnnualBenefit = annualBillSavings + annualExportIncome;

  const paybackYears = totalAnnualBenefit > 0 ? systemCost / totalAnnualBenefit : null;

  return {
    annualGenerationKwh,
    selfConsumedKwh,
    exportedKwh,
    annualBillSavings,
    annualExportIncome,
    totalAnnualBenefit,
    paybackYears,
    twentyFiveYearBenefit: totalAnnualBenefit * 25,
  };
}
