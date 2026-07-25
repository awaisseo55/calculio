import {
  PERSONAL_ALLOWANCE,
  PERSONAL_ALLOWANCE_TAPER_START,
  PERSONAL_ALLOWANCE_GONE_AT,
  EWNI_BANDS,
  SCOTLAND_BANDS,
} from "./uk-rates";

export type TaxRegion = "england-wales-ni" | "scotland";

export interface IncomeTaxInput {
  grossIncome: number;
  region: TaxRegion;
}

export interface TaxBandResult {
  name: string;
  rate: number;
  taxableAmount: number;
  tax: number;
}

export interface IncomeTaxResult {
  grossIncome: number;
  personalAllowance: number;
  taxableIncome: number;
  bands: TaxBandResult[];
  totalTax: number;
  effectiveRate: number;
  incomeAfterTax: number;
}

export function calculatePersonalAllowance(grossIncome: number): number {
  if (grossIncome <= PERSONAL_ALLOWANCE_TAPER_START) return PERSONAL_ALLOWANCE;
  if (grossIncome >= PERSONAL_ALLOWANCE_GONE_AT) return 0;
  const reduction = Math.floor((grossIncome - PERSONAL_ALLOWANCE_TAPER_START) / 2);
  return Math.max(PERSONAL_ALLOWANCE - reduction, 0);
}

export function calculateIncomeTax(input: IncomeTaxInput): IncomeTaxResult {
  const { grossIncome, region } = input;
  const personalAllowance = calculatePersonalAllowance(grossIncome);
  const taxableIncome = Math.max(grossIncome - personalAllowance, 0);

  const bandTable = region === "scotland" ? SCOTLAND_BANDS : EWNI_BANDS;

  let remaining = taxableIncome;
  let from = 0;
  let totalTax = 0;
  const bands: TaxBandResult[] = [];

  for (const band of bandTable) {
    if (remaining <= 0) break;
    const bandSize = band.upTo - from;
    const taxableAmount = Math.min(remaining, bandSize);
    const tax = taxableAmount * band.rate;

    if (taxableAmount > 0) {
      bands.push({ name: band.name, rate: band.rate, taxableAmount, tax });
      totalTax += tax;
    }

    remaining -= taxableAmount;
    from = band.upTo;
  }

  return {
    grossIncome,
    personalAllowance,
    taxableIncome,
    bands,
    totalTax,
    effectiveRate: grossIncome > 0 ? (totalTax / grossIncome) * 100 : 0,
    incomeAfterTax: grossIncome - totalTax,
  };
}
