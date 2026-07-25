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
import * as compoundInterest from "./compound-interest-calculator-uk";
import * as savingsGoal from "./savings-goal-calculator-uk";
import * as loanRepayment from "./loan-repayment-calculator-uk";
import * as creditCardPayoff from "./credit-card-payoff-calculator-uk";
import * as mortgageOverpayment from "./mortgage-overpayment-calculator-uk";
import * as nationalInsurance from "./national-insurance-calculator-uk";
import * as selfEmployedTax from "./self-employed-tax-calculator-uk";
import * as dividendTax from "./dividend-tax-calculator-uk";
import * as capitalGainsTax from "./capital-gains-tax-calculator-uk";
import * as mpg from "./mpg-calculator-uk";
import * as congestionUlez from "./congestion-charge-ulez-calculator-uk";
import * as tdee from "./tdee-calculator-uk";
import * as idealWeight from "./ideal-weight-calculator-uk";
import * as paintCoverage from "./paint-coverage-calculator-uk";
import * as tip from "./tip-calculator-uk";
import * as isa from "./isa-calculator-uk";
import * as pension from "./pension-calculator-uk";
import * as vat from "./vat-calculator-uk";
import * as carLoan from "./car-loan-calculator-uk";
import * as bmr from "./bmr-calculator-uk";
import * as inheritanceTax from "./inheritance-tax-calculator-uk";
import * as discount from "./discount-calculator-uk";
import * as salaryIncrease from "./salary-increase-calculator-uk";
import * as fuelEfficiencyComparison from "./fuel-efficiency-comparison-uk";
import * as waterBill from "./water-bill-calculator-uk";
import * as flooring from "./flooring-calculator-uk";
import * as concrete from "./concrete-calculator-uk";
import * as kitchenRenovationCost from "./kitchen-renovation-cost-calculator-uk";
import * as loftInsulation from "./loft-insulation-calculator-uk";

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
  "compound-interest-calculator-uk": compoundInterest,
  "savings-goal-calculator-uk": savingsGoal,
  "loan-repayment-calculator-uk": loanRepayment,
  "credit-card-payoff-calculator-uk": creditCardPayoff,
  "mortgage-overpayment-calculator-uk": mortgageOverpayment,
  "national-insurance-calculator-uk": nationalInsurance,
  "self-employed-tax-calculator-uk": selfEmployedTax,
  "dividend-tax-calculator-uk": dividendTax,
  "capital-gains-tax-calculator-uk": capitalGainsTax,
  "mpg-calculator-uk": mpg,
  "congestion-charge-ulez-calculator-uk": congestionUlez,
  "tdee-calculator-uk": tdee,
  "ideal-weight-calculator-uk": idealWeight,
  "paint-coverage-calculator-uk": paintCoverage,
  "tip-calculator-uk": tip,
  "isa-calculator-uk": isa,
  "pension-calculator-uk": pension,
  "vat-calculator-uk": vat,
  "car-loan-calculator-uk": carLoan,
  "bmr-calculator-uk": bmr,
  "inheritance-tax-calculator-uk": inheritanceTax,
  "discount-calculator-uk": discount,
  "salary-increase-calculator-uk": salaryIncrease,
  "fuel-efficiency-comparison-uk": fuelEfficiencyComparison,
  "water-bill-calculator-uk": waterBill,
  "flooring-calculator-uk": flooring,
  "concrete-calculator-uk": concrete,
  "kitchen-renovation-cost-calculator-uk": kitchenRenovationCost,
  "loft-insulation-calculator-uk": loftInsulation,
};
