import { MortgageCalculator } from "@/components/calculators/mortgage-calculator";
import { StampDutyCalculator } from "@/components/calculators/stamp-duty-calculator";
import { TakeHomePayCalculator } from "@/components/calculators/take-home-pay-calculator";
import { IncomeTaxCalculator } from "@/components/calculators/income-tax-calculator";
import { RoadTaxCalculator } from "@/components/calculators/road-tax-calculator";
import { FuelCostCalculator } from "@/components/calculators/fuel-cost-calculator";
import { BmiCalculator } from "@/components/calculators/bmi-calculator";
import { PregnancyCalculator } from "@/components/calculators/pregnancy-calculator";
import { AgeCalculator } from "@/components/calculators/age-calculator";
import { PercentageCalculator } from "@/components/calculators/percentage-calculator";
import type { ComponentType } from "react";

export const calculatorComponents: Record<string, ComponentType> = {
  "mortgage-calculator-uk": MortgageCalculator,
  "stamp-duty-calculator-uk": StampDutyCalculator,
  "take-home-pay-calculator-uk": TakeHomePayCalculator,
  "income-tax-calculator-uk": IncomeTaxCalculator,
  "road-tax-calculator-uk": RoadTaxCalculator,
  "fuel-cost-calculator-uk": FuelCostCalculator,
  "bmi-calculator-uk": BmiCalculator,
  "pregnancy-due-date-calculator-uk": PregnancyCalculator,
  "age-calculator": AgeCalculator,
  "percentage-calculator": PercentageCalculator,
};
