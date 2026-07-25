import type { ComponentType } from "react";
import type { FaqItem } from "@/lib/types";

import * as mortgage from "./mortgage-calculator-uk";
import * as stampDuty from "./stamp-duty-calculator-uk";
import * as takeHomePay from "./take-home-pay-calculator-uk";
import * as incomeTax from "./income-tax-calculator-uk";
import * as roadTax from "./road-tax-calculator-uk";
import * as fuelCost from "./fuel-cost-calculator-uk";
import * as bmi from "./bmi-calculator-uk";
import * as pregnancy from "./pregnancy-due-date-calculator-uk";
import * as age from "./age-calculator";
import * as percentage from "./percentage-calculator";

interface CalculatorContent {
  SeoContent: ComponentType;
  faq: FaqItem[];
}

export const calculatorContent: Record<string, CalculatorContent> = {
  "mortgage-calculator-uk": mortgage,
  "stamp-duty-calculator-uk": stampDuty,
  "take-home-pay-calculator-uk": takeHomePay,
  "income-tax-calculator-uk": incomeTax,
  "road-tax-calculator-uk": roadTax,
  "fuel-cost-calculator-uk": fuelCost,
  "bmi-calculator-uk": bmi,
  "pregnancy-due-date-calculator-uk": pregnancy,
  "age-calculator": age,
  "percentage-calculator": percentage,
};
