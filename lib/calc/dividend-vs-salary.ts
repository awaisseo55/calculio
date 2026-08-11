import { calculateIncomeTax } from "./income-tax";
import { calculateNationalInsurance } from "./take-home-pay";
import { calculateDividendTax } from "./dividend-tax";
import {
  EMPLOYER_NI_RATE,
  EMPLOYER_NI_SECONDARY_THRESHOLD,
} from "./uk-rates";

export interface DividendVsSalaryInput {
  companyProfit: number;
  otherAnnualIncome: number;
  corporationTaxRatePercent: number;
}

export interface DividendVsSalaryRouteResult {
  companyProfit: number;
  employerNI: number;
  grossPay: number;
  personalTax: number;
  netPersonalIncome: number;
}

export interface DividendVsSalaryResult {
  salaryRoute: DividendVsSalaryRouteResult;
  dividendRoute: DividendVsSalaryRouteResult;
  betterRoute: "salary" | "dividend";
  difference: number;
}

function solveSalaryFromCompanyCost(companyProfit: number): { grossSalary: number; employerNI: number } {
  if (companyProfit <= EMPLOYER_NI_SECONDARY_THRESHOLD) {
    return { grossSalary: companyProfit, employerNI: 0 };
  }
  // grossSalary + (grossSalary - threshold) * rate = companyProfit
  const grossSalary =
    (companyProfit + EMPLOYER_NI_SECONDARY_THRESHOLD * EMPLOYER_NI_RATE) / (1 + EMPLOYER_NI_RATE);
  const employerNI = companyProfit - grossSalary;
  return { grossSalary, employerNI };
}

export function calculateDividendVsSalary(input: DividendVsSalaryInput): DividendVsSalaryResult {
  const companyProfit = Math.max(input.companyProfit, 0);
  const otherAnnualIncome = Math.max(input.otherAnnualIncome, 0);
  const corporationTaxRate = Math.min(Math.max(input.corporationTaxRatePercent, 0), 100) / 100;

  // Salary route: the whole company profit is used to fund a director's salary,
  // net of employer National Insurance, which is a deductible cost the company
  // must also cover from the same pot.
  const { grossSalary, employerNI } = solveSalaryFromCompanyCost(companyProfit);
  const incomeTaxWithSalary = calculateIncomeTax({
    grossIncome: otherAnnualIncome + grossSalary,
    region: "england-wales-ni",
  }).totalTax;
  const incomeTaxWithoutSalary = calculateIncomeTax({
    grossIncome: otherAnnualIncome,
    region: "england-wales-ni",
  }).totalTax;
  const salaryIncomeTax = incomeTaxWithSalary - incomeTaxWithoutSalary;
  const employeeNI =
    calculateNationalInsurance(otherAnnualIncome + grossSalary) - calculateNationalInsurance(otherAnnualIncome);
  const salaryPersonalTax = salaryIncomeTax + employeeNI;
  const netFromSalary = grossSalary - salaryPersonalTax;

  // Dividend route: the company pays Corporation Tax on the full profit first,
  // and the remainder is distributed as a dividend.
  const corporationTax = companyProfit * corporationTaxRate;
  const dividend = companyProfit - corporationTax;
  const dividendTaxResult = calculateDividendTax({
    salary: otherAnnualIncome,
    dividendIncome: dividend,
  });
  const netFromDividend = dividend - dividendTaxResult.totalDividendTax;

  const salaryRoute: DividendVsSalaryRouteResult = {
    companyProfit,
    employerNI,
    grossPay: grossSalary,
    personalTax: salaryPersonalTax,
    netPersonalIncome: netFromSalary,
  };

  const dividendRoute: DividendVsSalaryRouteResult = {
    companyProfit,
    employerNI: 0,
    grossPay: dividend,
    personalTax: corporationTax + dividendTaxResult.totalDividendTax,
    netPersonalIncome: netFromDividend,
  };

  const difference = netFromDividend - netFromSalary;

  return {
    salaryRoute,
    dividendRoute,
    betterRoute: difference >= 0 ? "dividend" : "salary",
    difference: Math.abs(difference),
  };
}
