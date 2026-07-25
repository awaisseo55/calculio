import {
  SDLT_STANDARD_BANDS,
  SDLT_FIRST_TIME_BUYER_BANDS,
  SDLT_FTB_RELIEF_LIMIT,
  SDLT_ADDITIONAL_PROPERTY_SURCHARGE,
  SDLT_NON_RESIDENT_SURCHARGE,
  LBTT_BANDS,
  LBTT_FIRST_TIME_BUYER_NIL_BAND,
  LBTT_ADS_RATE,
  LTT_MAIN_BANDS,
  LTT_HIGHER_BANDS,
} from "./uk-rates";

export type PropertyLocation = "england-ni" | "scotland" | "wales";
export type BuyerType = "first-time" | "next-home" | "additional" | "non-resident";

export interface StampDutyInput {
  propertyPrice: number;
  buyerType: BuyerType;
  location: PropertyLocation;
}

export interface BandBreakdown {
  from: number;
  to: number;
  rate: number;
  taxableAmount: number;
  tax: number;
}

export interface StampDutyResult {
  taxName: string;
  totalTax: number;
  effectiveRate: number;
  breakdown: BandBreakdown[];
}

interface Band {
  upTo: number;
  rate: number;
}

function bandedTax(amount: number, bands: Band[], surcharge = 0): { total: number; breakdown: BandBreakdown[] } {
  let remaining = amount;
  let from = 0;
  let total = 0;
  const breakdown: BandBreakdown[] = [];

  for (const band of bands) {
    if (remaining <= 0) break;
    const bandSize = band.upTo - from;
    const taxableAmount = Math.min(remaining, bandSize);
    const rate = band.rate + surcharge;
    const tax = taxableAmount * rate;

    if (taxableAmount > 0) {
      breakdown.push({ from, to: Math.min(band.upTo, amount), rate, taxableAmount, tax });
      total += tax;
    }

    remaining -= taxableAmount;
    from = band.upTo;
  }

  return { total, breakdown };
}

function calculateSDLT(input: StampDutyInput): StampDutyResult {
  const { propertyPrice, buyerType } = input;

  let bands: Band[] = SDLT_STANDARD_BANDS;
  let surcharge = 0;

  if (buyerType === "first-time" && propertyPrice <= SDLT_FTB_RELIEF_LIMIT) {
    bands = SDLT_FIRST_TIME_BUYER_BANDS;
  }
  if (buyerType === "additional") {
    surcharge = SDLT_ADDITIONAL_PROPERTY_SURCHARGE;
  }
  if (buyerType === "non-resident") {
    surcharge = SDLT_NON_RESIDENT_SURCHARGE;
  }

  const { total, breakdown } = bandedTax(propertyPrice, bands, surcharge);

  return {
    taxName: "Stamp Duty Land Tax (SDLT)",
    totalTax: total,
    effectiveRate: propertyPrice > 0 ? (total / propertyPrice) * 100 : 0,
    breakdown,
  };
}

function calculateLBTT(input: StampDutyInput): StampDutyResult {
  const { propertyPrice, buyerType } = input;

  const bands: Band[] = LBTT_BANDS.map((band) => ({ ...band }));
  if (buyerType === "first-time" && bands[0]) {
    bands[0] = { ...bands[0], upTo: LBTT_FIRST_TIME_BUYER_NIL_BAND };
  }

  const surcharge = buyerType === "additional" || buyerType === "non-resident" ? LBTT_ADS_RATE : 0;

  const { total, breakdown } = bandedTax(propertyPrice, bands, surcharge);

  return {
    taxName: "Land and Buildings Transaction Tax (LBTT)",
    totalTax: total,
    effectiveRate: propertyPrice > 0 ? (total / propertyPrice) * 100 : 0,
    breakdown,
  };
}

function calculateLTT(input: StampDutyInput): StampDutyResult {
  const { propertyPrice, buyerType } = input;

  const useHigherRates = buyerType === "additional" || buyerType === "non-resident";
  const bands: Band[] = useHigherRates ? LTT_HIGHER_BANDS : LTT_MAIN_BANDS;

  const { total, breakdown } = bandedTax(propertyPrice, bands);

  return {
    taxName: "Land Transaction Tax (LTT)",
    totalTax: total,
    effectiveRate: propertyPrice > 0 ? (total / propertyPrice) * 100 : 0,
    breakdown,
  };
}

export function calculateStampDuty(input: StampDutyInput): StampDutyResult {
  switch (input.location) {
    case "scotland":
      return calculateLBTT(input);
    case "wales":
      return calculateLTT(input);
    default:
      return calculateSDLT(input);
  }
}
