export interface OfficialSource {
  label: string;
  url: string;
}

/**
 * Canonical, individually-verified links to primary UK government/NHS/regulator
 * pages. Keep this as the single place a URL lives so a rate-page move only
 * needs updating once. Every URL here has been checked to actually resolve;
 * never add one without verifying it first.
 */
export const officialSources = {
  incomeTax: { label: "Income Tax rates and Personal Allowances (GOV.UK)", url: "https://www.gov.uk/income-tax-rates" },
  scottishIncomeTax: { label: "Income Tax in Scotland (GOV.UK)", url: "https://www.gov.uk/scottish-income-tax" },
  nationalInsurance: { label: "National Insurance rates and categories (GOV.UK)", url: "https://www.gov.uk/national-insurance-rates-letters" },
  nationalInsuranceHowMuch: { label: "National Insurance: how much you pay (GOV.UK)", url: "https://www.gov.uk/national-insurance/how-much-you-pay" },
  selfAssessment: { label: "Self Assessment tax returns (GOV.UK)", url: "https://www.gov.uk/self-assessment-tax-returns" },
  capitalGainsTax: { label: "Capital Gains Tax: rates and allowances (GOV.UK)", url: "https://www.gov.uk/capital-gains-tax/allowances" },
  inheritanceTax: { label: "How Inheritance Tax works: thresholds, rules and allowances (GOV.UK)", url: "https://www.gov.uk/inheritance-tax" },
  vat: { label: "How VAT works (GOV.UK)", url: "https://www.gov.uk/how-vat-works" },
  vatRates: { label: "VAT rates on different goods and services (GOV.UK)", url: "https://www.gov.uk/guidance/rates-of-vat-on-different-goods-and-services" },
  corporationTax: { label: "Corporation Tax rates, expenses and reliefs (GOV.UK)", url: "https://www.gov.uk/corporation-tax-rates" },
  dividendTax: { label: "Tax on dividends (GOV.UK)", url: "https://www.gov.uk/tax-on-dividends" },
  stampDuty: { label: "Stamp Duty Land Tax: overview (GOV.UK)", url: "https://www.gov.uk/stamp-duty-land-tax" },
  stampDutyResidential: { label: "Stamp Duty Land Tax: residential property rates (GOV.UK)", url: "https://www.gov.uk/stamp-duty-land-tax/residential-property-rates" },
  councilTax: { label: "Check your Council Tax band (GOV.UK)", url: "https://www.gov.uk/council-tax-bands" },
  vehicleTax: { label: "Vehicle tax rate tables (GOV.UK)", url: "https://www.gov.uk/vehicle-tax-rate-tables" },
  vehicleTaxEV: { label: "Vehicle tax for electric, zero and low emission vehicles (GOV.UK)", url: "https://www.gov.uk/guidance/vehicle-tax-for-electric-and-low-emissions-vehicles" },
  congestionCharge: { label: "Congestion Charge (Transport for London)", url: "https://tfl.gov.uk/modes/driving/congestion-charge" },
  ulez: { label: "Ultra Low Emission Zone (Transport for London)", url: "https://tfl.gov.uk/modes/driving/ultra-low-emission-zone" },
  nhsBmiAdults: { label: "BMI healthy weight calculator (NHS)", url: "https://www.nhs.uk/health-assessment-tools/calculate-your-body-mass-index/calculate-bmi-for-adults" },
  nhsHealthyWeight: { label: "BMI calculator: check your BMI (NHS)", url: "https://www.nhs.uk/live-well/healthy-weight/bmi-calculator/" },
  nhsPhysicalActivity: { label: "Physical activity guidelines for adults (NHS)", url: "https://www.nhs.uk/live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/" },
  nhsPregnancyDueDate: { label: "Your due date and early pregnancy (NHS)", url: "https://www.nhs.uk/pregnancy/finding-out/your-due-date/" },
  statePensionHowMuch: { label: "State Pension: how much you get (GOV.UK)", url: "https://www.gov.uk/state-pension/how-much-you-get" },
  newStatePension: { label: "The new State Pension: eligibility (GOV.UK)", url: "https://www.gov.uk/new-state-pension" },
  statePensionAge: { label: "Check your State Pension age (GOV.UK)", url: "https://www.gov.uk/state-pension-age" },
  winterFuelPayment: { label: "Winter Fuel Payment (GOV.UK)", url: "https://www.gov.uk/winter-fuel-payment" },
  childBenefit: { label: "Child Benefit: how it works (GOV.UK)", url: "https://www.gov.uk/child-benefit" },
  childBenefitTaxCharge: { label: "High Income Child Benefit Charge (GOV.UK)", url: "https://www.gov.uk/child-benefit-tax-charge" },
  statutorySickPay: { label: "Statutory Sick Pay (SSP) (GOV.UK)", url: "https://www.gov.uk/statutory-sick-pay" },
  maternityPayLeave: { label: "Maternity pay and leave (GOV.UK)", url: "https://www.gov.uk/maternity-pay-leave" },
  paternityPayLeave: { label: "Paternity pay and leave (GOV.UK)", url: "https://www.gov.uk/paternity-pay-leave" },
  redundancyPay: { label: "Calculate your statutory redundancy pay (GOV.UK)", url: "https://www.gov.uk/calculate-your-redundancy-pay" },
  redundancyRights: { label: "Redundancy: your rights (GOV.UK)", url: "https://www.gov.uk/redundancy-your-rights" },
  minimumWage: { label: "National Minimum Wage and National Living Wage rates (GOV.UK)", url: "https://www.gov.uk/national-minimum-wage-rates" },
  studentLoanRepayment: { label: "Repaying your student loan (GOV.UK)", url: "https://www.gov.uk/repaying-your-student-loan" },
  universalCredit: { label: "Universal Credit (GOV.UK)", url: "https://www.gov.uk/universal-credit" },
  mortgageAffordability: { label: "How much can I borrow? Mortgage calculator (MoneyHelper)", url: "https://www.moneyhelper.org.uk/en/homes/buying-a-home/mortgage-affordability-calculator" },
  firstTimeBuyer: { label: "First-time home buyer guide (MoneyHelper)", url: "https://www.moneyhelper.org.uk/en/homes/buying-a-home/first-time-buyer-money-tips" },
  isaAllowance: { label: "Individual Savings Accounts (ISAs) (GOV.UK)", url: "https://www.gov.uk/individual-savings-accounts" },
  workplacePensions: { label: "Workplace pensions (GOV.UK)", url: "https://www.gov.uk/workplace-pensions" },
  latePaymentInterest: { label: "Interest calculator guidance (Small Business Commissioner)", url: "https://www.smallbusinesscommissioner.gov.uk/help-and-guidance/interest-calculator/interest-calculator-guidance/" },
  energyPriceCap: { label: "Energy price cap unit rates and standing charges (Ofgem)", url: "https://www.ofgem.gov.uk/information-consumers/energy-advice-households/energy-price-cap-unit-rates-and-standing-charges" },
} as const satisfies Record<string, OfficialSource>;

export type OfficialSourceKey = keyof typeof officialSources;
