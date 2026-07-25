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
import { CompoundInterestCalculator } from "@/components/calculators/compound-interest-calculator";
import { SavingsGoalCalculator } from "@/components/calculators/savings-goal-calculator";
import { LoanRepaymentCalculator } from "@/components/calculators/loan-repayment-calculator";
import { CreditCardPayoffCalculator } from "@/components/calculators/credit-card-payoff-calculator";
import { MortgageOverpaymentCalculator } from "@/components/calculators/mortgage-overpayment-calculator";
import { NationalInsuranceCalculator } from "@/components/calculators/national-insurance-calculator";
import { SelfEmployedTaxCalculator } from "@/components/calculators/self-employed-tax-calculator";
import { DividendTaxCalculator } from "@/components/calculators/dividend-tax-calculator";
import { CapitalGainsTaxCalculator } from "@/components/calculators/capital-gains-tax-calculator";
import { MpgCalculator } from "@/components/calculators/mpg-calculator";
import { CongestionUlezCalculator } from "@/components/calculators/congestion-ulez-calculator";
import { TdeeCalculator } from "@/components/calculators/tdee-calculator";
import { IdealWeightCalculator } from "@/components/calculators/ideal-weight-calculator";
import { PaintCoverageCalculator } from "@/components/calculators/paint-coverage-calculator";
import { TipCalculator } from "@/components/calculators/tip-calculator";
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
  "compound-interest-calculator-uk": CompoundInterestCalculator,
  "savings-goal-calculator-uk": SavingsGoalCalculator,
  "loan-repayment-calculator-uk": LoanRepaymentCalculator,
  "credit-card-payoff-calculator-uk": CreditCardPayoffCalculator,
  "mortgage-overpayment-calculator-uk": MortgageOverpaymentCalculator,
  "national-insurance-calculator-uk": NationalInsuranceCalculator,
  "self-employed-tax-calculator-uk": SelfEmployedTaxCalculator,
  "dividend-tax-calculator-uk": DividendTaxCalculator,
  "capital-gains-tax-calculator-uk": CapitalGainsTaxCalculator,
  "mpg-calculator-uk": MpgCalculator,
  "congestion-charge-ulez-calculator-uk": CongestionUlezCalculator,
  "tdee-calculator-uk": TdeeCalculator,
  "ideal-weight-calculator-uk": IdealWeightCalculator,
  "paint-coverage-calculator-uk": PaintCoverageCalculator,
  "tip-calculator-uk": TipCalculator,
};
