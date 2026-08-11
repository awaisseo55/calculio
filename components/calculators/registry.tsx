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
import { IsaCalculator } from "@/components/calculators/isa-calculator";
import { PensionCalculator } from "@/components/calculators/pension-calculator";
import { VatCalculator } from "@/components/calculators/vat-calculator";
import { CarLoanCalculator } from "@/components/calculators/car-loan-calculator";
import { BmrCalculator } from "@/components/calculators/bmr-calculator";
import { InheritanceTaxCalculator } from "@/components/calculators/inheritance-tax-calculator";
import { DiscountCalculator } from "@/components/calculators/discount-calculator";
import { SalaryIncreaseCalculator } from "@/components/calculators/salary-increase-calculator";
import { FuelEfficiencyComparisonCalculator } from "@/components/calculators/fuel-efficiency-comparison-calculator";
import { WaterBillCalculator } from "@/components/calculators/water-bill-calculator";
import { FlooringCalculator } from "@/components/calculators/flooring-calculator";
import { ConcreteCalculator } from "@/components/calculators/concrete-calculator";
import { KitchenRenovationCostCalculator } from "@/components/calculators/kitchen-renovation-cost-calculator";
import { LoftInsulationCalculator } from "@/components/calculators/loft-insulation-calculator";
import { CouncilTaxCalculator } from "@/components/calculators/council-tax-calculator";
import { EnergyBillCalculator } from "@/components/calculators/energy-bill-calculator";
import { SalaryToHourlyCalculator } from "@/components/calculators/salary-to-hourly-calculator";
import { PregnancyWeeksCalculator } from "@/components/calculators/pregnancy-weeks-calculator";
import { OvulationCalculator } from "@/components/calculators/ovulation-calculator";
import { ReducedHoursPayCalculator } from "@/components/calculators/reduced-hours-pay-calculator";
import { ElectricCarRunningCostCalculator } from "@/components/calculators/electric-car-running-cost-calculator";
import { WinterFuelPaymentCalculator } from "@/components/calculators/winter-fuel-payment-calculator";
import { SickPayCalculator } from "@/components/calculators/sick-pay-calculator";
import { RedundancyPayCalculator } from "@/components/calculators/redundancy-pay-calculator";
import { SplitBillCalculator } from "@/components/calculators/split-bill-calculator";
import { ChildBenefitCalculator } from "@/components/calculators/child-benefit-calculator";
import { UniversalCreditCalculator } from "@/components/calculators/universal-credit-calculator";
import { MaternityPayCalculator } from "@/components/calculators/maternity-pay-calculator";
import { SalaryNegotiationCalculator } from "@/components/calculators/salary-negotiation-calculator";
import { MortgageAffordabilityCalculator } from "@/components/calculators/mortgage-affordability-calculator";
import { RentalYieldCalculator } from "@/components/calculators/rental-yield-calculator";
import { SimpleInterestCalculator } from "@/components/calculators/simple-interest-calculator";
import { StatePensionAgeCalculator } from "@/components/calculators/state-pension-age-calculator";
import { DebtPayoffCalculator } from "@/components/calculators/debt-payoff-calculator";
import { MinimumWageCalculator } from "@/components/calculators/minimum-wage-calculator";
import { OvertimePayCalculator } from "@/components/calculators/overtime-pay-calculator";
import { PaternityPayCalculator } from "@/components/calculators/paternity-pay-calculator";
import { CarDepreciationCalculator } from "@/components/calculators/car-depreciation-calculator";
import { SolarPanelSavingsCalculator } from "@/components/calculators/solar-panel-savings-calculator";
import { CorporationTaxCalculator } from "@/components/calculators/corporation-tax-calculator";
import { DividendVsSalaryCalculator } from "@/components/calculators/dividend-vs-salary-calculator";
import { BreakEvenCalculator } from "@/components/calculators/break-even-calculator";
import { ProfitMarginCalculator } from "@/components/calculators/profit-margin-calculator";
import { DogAgeCalculator } from "@/components/calculators/dog-age-calculator";
import { CatAgeCalculator } from "@/components/calculators/cat-age-calculator";
import { RunningPaceCalculator } from "@/components/calculators/running-pace-calculator";
import { OneRepMaxCalculator } from "@/components/calculators/one-rep-max-calculator";
import { StudentLoanRepaymentCalculator } from "@/components/calculators/student-loan-repayment-calculator";
import { StudentBudgetCalculator } from "@/components/calculators/student-budget-calculator";
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
  "isa-calculator-uk": IsaCalculator,
  "pension-calculator-uk": PensionCalculator,
  "vat-calculator-uk": VatCalculator,
  "car-loan-calculator-uk": CarLoanCalculator,
  "bmr-calculator-uk": BmrCalculator,
  "inheritance-tax-calculator-uk": InheritanceTaxCalculator,
  "discount-calculator-uk": DiscountCalculator,
  "salary-increase-calculator-uk": SalaryIncreaseCalculator,
  "fuel-efficiency-comparison-uk": FuelEfficiencyComparisonCalculator,
  "water-bill-calculator-uk": WaterBillCalculator,
  "flooring-calculator-uk": FlooringCalculator,
  "concrete-calculator-uk": ConcreteCalculator,
  "kitchen-renovation-cost-calculator-uk": KitchenRenovationCostCalculator,
  "loft-insulation-calculator-uk": LoftInsulationCalculator,
  "council-tax-calculator-uk": CouncilTaxCalculator,
  "energy-bill-calculator-uk": EnergyBillCalculator,
  "salary-to-hourly-calculator-uk": SalaryToHourlyCalculator,
  "pregnancy-weeks-calculator-uk": PregnancyWeeksCalculator,
  "ovulation-calculator-uk": OvulationCalculator,
  "reduced-hours-pay-calculator-uk": ReducedHoursPayCalculator,
  "electric-car-running-cost-calculator-uk": ElectricCarRunningCostCalculator,
  "winter-fuel-payment-calculator-uk": WinterFuelPaymentCalculator,
  "sick-pay-calculator-uk": SickPayCalculator,
  "redundancy-pay-calculator-uk": RedundancyPayCalculator,
  "split-bill-calculator-uk": SplitBillCalculator,
  "child-benefit-calculator-uk": ChildBenefitCalculator,
  "universal-credit-calculator-uk": UniversalCreditCalculator,
  "maternity-pay-calculator-uk": MaternityPayCalculator,
  "salary-negotiation-calculator-uk": SalaryNegotiationCalculator,
  "mortgage-affordability-calculator-uk": MortgageAffordabilityCalculator,
  "rental-yield-calculator-uk": RentalYieldCalculator,
  "simple-interest-calculator-uk": SimpleInterestCalculator,
  "state-pension-age-calculator-uk": StatePensionAgeCalculator,
  "debt-payoff-calculator-uk": DebtPayoffCalculator,
  "minimum-wage-calculator-uk": MinimumWageCalculator,
  "overtime-pay-calculator-uk": OvertimePayCalculator,
  "paternity-pay-calculator-uk": PaternityPayCalculator,
  "car-depreciation-calculator-uk": CarDepreciationCalculator,
  "solar-panel-savings-calculator-uk": SolarPanelSavingsCalculator,
  "corporation-tax-calculator-uk": CorporationTaxCalculator,
  "dividend-vs-salary-calculator-uk": DividendVsSalaryCalculator,
  "break-even-calculator-uk": BreakEvenCalculator,
  "profit-margin-calculator-uk": ProfitMarginCalculator,
  "dog-age-calculator-uk": DogAgeCalculator,
  "cat-age-calculator-uk": CatAgeCalculator,
  "running-pace-calculator-uk": RunningPaceCalculator,
  "one-rep-max-calculator-uk": OneRepMaxCalculator,
  "student-loan-repayment-calculator-uk": StudentLoanRepaymentCalculator,
  "student-budget-calculator-uk": StudentBudgetCalculator,
};
