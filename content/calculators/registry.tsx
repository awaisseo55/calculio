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
import * as councilTax from "./council-tax-calculator-uk";
import * as energyBill from "./energy-bill-calculator-uk";
import * as salaryToHourly from "./salary-to-hourly-calculator-uk";
import * as pregnancyWeeks from "./pregnancy-weeks-calculator-uk";
import * as ovulation from "./ovulation-calculator-uk";
import * as reducedHoursPay from "./reduced-hours-pay-calculator-uk";
import * as electricCarRunningCost from "./electric-car-running-cost-calculator-uk";
import * as winterFuelPayment from "./winter-fuel-payment-calculator-uk";
import * as sickPay from "./sick-pay-calculator-uk";
import * as redundancyPay from "./redundancy-pay-calculator-uk";
import * as splitBill from "./split-bill-calculator-uk";
import * as childBenefit from "./child-benefit-calculator-uk";
import * as universalCredit from "./universal-credit-calculator-uk";
import * as maternityPay from "./maternity-pay-calculator-uk";
import * as salaryNegotiation from "./salary-negotiation-calculator-uk";
import * as mortgageAffordability from "./mortgage-affordability-calculator-uk";
import * as rentalYield from "./rental-yield-calculator-uk";
import * as simpleInterest from "./simple-interest-calculator-uk";
import * as statePensionAge from "./state-pension-age-calculator-uk";
import * as debtPayoff from "./debt-payoff-calculator-uk";
import * as minimumWage from "./minimum-wage-calculator-uk";
import * as overtimePay from "./overtime-pay-calculator-uk";
import * as paternityPay from "./paternity-pay-calculator-uk";
import * as carDepreciation from "./car-depreciation-calculator-uk";
import * as solarPanelSavings from "./solar-panel-savings-calculator-uk";
import * as corporationTax from "./corporation-tax-calculator-uk";
import * as dividendVsSalary from "./dividend-vs-salary-calculator-uk";
import * as breakEven from "./break-even-calculator-uk";
import * as profitMargin from "./profit-margin-calculator-uk";
import * as dogAge from "./dog-age-calculator-uk";
import * as catAge from "./cat-age-calculator-uk";
import * as runningPace from "./running-pace-calculator-uk";
import * as oneRepMax from "./one-rep-max-calculator-uk";
import * as studentLoanRepayment from "./student-loan-repayment-calculator-uk";
import * as studentBudget from "./student-budget-calculator-uk";

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
  "council-tax-calculator-uk": councilTax,
  "energy-bill-calculator-uk": energyBill,
  "salary-to-hourly-calculator-uk": salaryToHourly,
  "pregnancy-weeks-calculator-uk": pregnancyWeeks,
  "ovulation-calculator-uk": ovulation,
  "reduced-hours-pay-calculator-uk": reducedHoursPay,
  "electric-car-running-cost-calculator-uk": electricCarRunningCost,
  "winter-fuel-payment-calculator-uk": winterFuelPayment,
  "sick-pay-calculator-uk": sickPay,
  "redundancy-pay-calculator-uk": redundancyPay,
  "split-bill-calculator-uk": splitBill,
  "child-benefit-calculator-uk": childBenefit,
  "universal-credit-calculator-uk": universalCredit,
  "maternity-pay-calculator-uk": maternityPay,
  "salary-negotiation-calculator-uk": salaryNegotiation,
  "mortgage-affordability-calculator-uk": mortgageAffordability,
  "rental-yield-calculator-uk": rentalYield,
  "simple-interest-calculator-uk": simpleInterest,
  "state-pension-age-calculator-uk": statePensionAge,
  "debt-payoff-calculator-uk": debtPayoff,
  "minimum-wage-calculator-uk": minimumWage,
  "overtime-pay-calculator-uk": overtimePay,
  "paternity-pay-calculator-uk": paternityPay,
  "car-depreciation-calculator-uk": carDepreciation,
  "solar-panel-savings-calculator-uk": solarPanelSavings,
  "corporation-tax-calculator-uk": corporationTax,
  "dividend-vs-salary-calculator-uk": dividendVsSalary,
  "break-even-calculator-uk": breakEven,
  "profit-margin-calculator-uk": profitMargin,
  "dog-age-calculator-uk": dogAge,
  "cat-age-calculator-uk": catAge,
  "running-pace-calculator-uk": runningPace,
  "one-rep-max-calculator-uk": oneRepMax,
  "student-loan-repayment-calculator-uk": studentLoanRepayment,
  "student-budget-calculator-uk": studentBudget,
};
