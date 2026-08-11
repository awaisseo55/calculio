export interface RentalYieldInput {
  propertyPrice: number;
  monthlyRent: number;
  deposit: number;
  mortgageRate: number;
  managementFeePercent: number;
  maintenancePercent: number;
  voidWeeksPerYear: number;
  otherAnnualCosts: number;
}

export interface RentalYieldResult {
  annualRent: number;
  grossYieldPercent: number;
  effectiveAnnualRent: number;
  managementFee: number;
  maintenanceCost: number;
  totalAnnualCosts: number;
  netAnnualIncome: number;
  netYieldPercent: number;
  loanAmount: number;
  annualMortgageInterest: number;
  netAnnualCashflow: number;
  monthlyCashflow: number;
  cashOnCashReturnPercent: number;
}

export function calculateRentalYield(input: RentalYieldInput): RentalYieldResult {
  const propertyPrice = Math.max(input.propertyPrice, 0);
  const monthlyRent = Math.max(input.monthlyRent, 0);
  const deposit = Math.max(input.deposit, 0);
  const voidWeeksPerYear = Math.min(Math.max(input.voidWeeksPerYear, 0), 52);

  const annualRent = monthlyRent * 12;
  const grossYieldPercent = propertyPrice > 0 ? (annualRent / propertyPrice) * 100 : 0;

  const weeklyRent = (monthlyRent * 12) / 52;
  const effectiveAnnualRent = weeklyRent * (52 - voidWeeksPerYear);

  const managementFee = effectiveAnnualRent * (Math.max(input.managementFeePercent, 0) / 100);
  const maintenanceCost = effectiveAnnualRent * (Math.max(input.maintenancePercent, 0) / 100);
  const otherAnnualCosts = Math.max(input.otherAnnualCosts, 0);
  const totalAnnualCosts = managementFee + maintenanceCost + otherAnnualCosts;

  const netAnnualIncome = effectiveAnnualRent - totalAnnualCosts;
  const netYieldPercent = propertyPrice > 0 ? (netAnnualIncome / propertyPrice) * 100 : 0;

  const loanAmount = Math.max(propertyPrice - deposit, 0);
  const annualMortgageInterest = loanAmount * (Math.max(input.mortgageRate, 0) / 100);
  const netAnnualCashflow = netAnnualIncome - annualMortgageInterest;
  const monthlyCashflow = netAnnualCashflow / 12;
  const cashOnCashReturnPercent = deposit > 0 ? (netAnnualCashflow / deposit) * 100 : 0;

  return {
    annualRent,
    grossYieldPercent,
    effectiveAnnualRent,
    managementFee,
    maintenanceCost,
    totalAnnualCosts,
    netAnnualIncome,
    netYieldPercent,
    loanAmount,
    annualMortgageInterest,
    netAnnualCashflow,
    monthlyCashflow,
    cashOnCashReturnPercent,
  };
}
