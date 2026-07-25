import { calculatePersonalAllowance } from "./income-tax";
import {
  EWNI_BANDS,
  DIVIDEND_ALLOWANCE,
  DIVIDEND_BASIC_RATE,
  DIVIDEND_HIGHER_RATE,
  DIVIDEND_ADDITIONAL_RATE,
} from "./uk-rates";

export interface DividendTaxInput {
  salary: number;
  dividendIncome: number;
}

export interface DividendTaxBandResult {
  name: string;
  rate: number;
  amount: number;
  tax: number;
}

export interface DividendTaxResult {
  personalAllowance: number;
  dividendAllowanceUsed: number;
  taxableDividends: number;
  bands: DividendTaxBandResult[];
  totalDividendTax: number;
}

export function calculateDividendTax(input: DividendTaxInput): DividendTaxResult {
  const personalAllowance = calculatePersonalAllowance(input.salary + input.dividendIncome);

  const allowanceUsedBySalary = Math.min(input.salary, personalAllowance);
  const remainingAllowance = personalAllowance - allowanceUsedBySalary;

  const dividendsAfterPA = Math.max(input.dividendIncome - remainingAllowance, 0);
  const dividendAllowanceUsed = Math.min(dividendsAfterPA, DIVIDEND_ALLOWANCE);
  const taxableDividends = Math.max(dividendsAfterPA - DIVIDEND_ALLOWANCE, 0);

  // Taxable non-dividend income, plus the tax-free dividend allowance (which still
  // occupies band space even though it is taxed at 0%), sets the starting point
  // for where the remaining taxable dividends sit in the band structure.
  const startingPoint = Math.max(input.salary - allowanceUsedBySalary, 0) + dividendAllowanceUsed;

  const basicUpTo = EWNI_BANDS[0].upTo;
  const higherUpTo = EWNI_BANDS[1].upTo;

  const bandDefs = [
    { name: "Basic rate dividends", upTo: basicUpTo, rate: DIVIDEND_BASIC_RATE },
    { name: "Higher rate dividends", upTo: higherUpTo, rate: DIVIDEND_HIGHER_RATE },
    { name: "Additional rate dividends", upTo: Infinity, rate: DIVIDEND_ADDITIONAL_RATE },
  ];

  let remaining = taxableDividends;
  let from = startingPoint;
  const bands: DividendTaxBandResult[] = [];
  let totalDividendTax = 0;

  for (const band of bandDefs) {
    if (remaining <= 0) break;
    if (from >= band.upTo) continue;
    const spaceInBand = band.upTo - from;
    const amountHere = Math.min(remaining, spaceInBand);
    if (amountHere > 0) {
      const tax = amountHere * band.rate;
      bands.push({ name: band.name, rate: band.rate, amount: amountHere, tax });
      totalDividendTax += tax;
      remaining -= amountHere;
      from += amountHere;
    }
  }

  return {
    personalAllowance,
    dividendAllowanceUsed,
    taxableDividends,
    bands,
    totalDividendTax,
  };
}
