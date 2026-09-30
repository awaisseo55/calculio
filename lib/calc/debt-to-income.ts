export interface DebtToIncomeInput {
  grossAnnualIncome: number;
  rentOrMortgage: number;
  creditCardPayments: number;
  loanPayments: number;
  carFinance: number;
  otherDebtPayments: number;
}

export interface DebtToIncomeResult {
  monthlyGrossIncome: number;
  housingRatioPercent: number;
  totalDebtPayments: number;
  dtiPercent: number;
  nonHousingDebtPercent: number;
  band: string;
}

export function calculateDebtToIncome(input: DebtToIncomeInput): DebtToIncomeResult {
  const monthlyGrossIncome = Math.max(input.grossAnnualIncome, 0) / 12;
  const rentOrMortgage = Math.max(input.rentOrMortgage, 0);
  const creditCardPayments = Math.max(input.creditCardPayments, 0);
  const loanPayments = Math.max(input.loanPayments, 0);
  const carFinance = Math.max(input.carFinance, 0);
  const otherDebtPayments = Math.max(input.otherDebtPayments, 0);
  const totalDebtPayments =
    rentOrMortgage + creditCardPayments + loanPayments + carFinance + otherDebtPayments;
  const nonHousingDebt = totalDebtPayments - rentOrMortgage;
  const dtiPercent = monthlyGrossIncome > 0 ? (totalDebtPayments / monthlyGrossIncome) * 100 : 0;

  let band = "Low";
  if (dtiPercent >= 50) band = "Very high";
  else if (dtiPercent >= 43) band = "High";
  else if (dtiPercent >= 36) band = "Moderate";

  return {
    monthlyGrossIncome,
    housingRatioPercent: monthlyGrossIncome > 0 ? (rentOrMortgage / monthlyGrossIncome) * 100 : 0,
    totalDebtPayments,
    dtiPercent,
    nonHousingDebtPercent: monthlyGrossIncome > 0 ? (nonHousingDebt / monthlyGrossIncome) * 100 : 0,
    band,
  };
}
