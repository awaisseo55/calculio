/**
 * Centralised UK rate constants. Figures reflect publicly published HMRC / DVLA /
 * Revenue Scotland / Welsh Revenue Authority rates for the 2025/26 and 2026/27 tax
 * years at time of writing. Always confirm exact current figures on gov.uk before
 * making a financial decision — thresholds are reviewed at every Budget.
 */

export const TAX_YEARS = ["2025/26", "2026/27"] as const;
export type TaxYear = (typeof TAX_YEARS)[number];

// --- Income Tax: England, Wales, Northern Ireland ---------------------------
export const PERSONAL_ALLOWANCE = 12570;
export const PERSONAL_ALLOWANCE_TAPER_START = 100000;
export const PERSONAL_ALLOWANCE_GONE_AT = 125140;

// Band "upTo" values are cumulative TAXABLE income (i.e. after personal allowance
// has already been deducted) — this matches HMRC's published band widths.
export const EWNI_BANDS = [
  { name: "Basic rate", upTo: 37700, rate: 0.2 },
  { name: "Higher rate", upTo: 112570, rate: 0.4 },
  { name: "Additional rate", upTo: Infinity, rate: 0.45 },
];

// Scottish Income Tax bands (last-published Scottish Budget structure), also in
// cumulative taxable-income terms, on top of the same £12,570 personal allowance.
export const SCOTLAND_BANDS = [
  { name: "Starter rate", upTo: 2827, rate: 0.19 },
  { name: "Basic rate", upTo: 14921, rate: 0.2 },
  { name: "Intermediate rate", upTo: 31092, rate: 0.21 },
  { name: "Higher rate", upTo: 62430, rate: 0.42 },
  { name: "Advanced rate", upTo: 112570, rate: 0.45 },
  { name: "Top rate", upTo: Infinity, rate: 0.48 },
];

// --- National Insurance (Class 1, employee) ---------------------------------
export const NI_PRIMARY_THRESHOLD = 12570;
export const NI_UPPER_EARNINGS_LIMIT = 50270;
export const NI_MAIN_RATE = 0.08;
export const NI_UPPER_RATE = 0.02;

// --- Student loan plans (annual repayment threshold, rate) -----------------
export const STUDENT_LOAN_PLANS = {
  none: { label: "No student loan", threshold: Infinity, rate: 0 },
  plan1: { label: "Plan 1", threshold: 26065, rate: 0.09 },
  plan2: { label: "Plan 2", threshold: 28470, rate: 0.09 },
  plan4: { label: "Plan 4 (Scotland)", threshold: 32745, rate: 0.09 },
  plan5: { label: "Plan 5", threshold: 25000, rate: 0.09 },
  postgrad: { label: "Postgraduate Loan", threshold: 21000, rate: 0.06 },
} as const;
export type StudentLoanPlan = keyof typeof STUDENT_LOAN_PLANS;

// --- Stamp Duty Land Tax (England & Northern Ireland) -----------------------
export const SDLT_STANDARD_BANDS = [
  { upTo: 125000, rate: 0 },
  { upTo: 250000, rate: 0.02 },
  { upTo: 925000, rate: 0.05 },
  { upTo: 1500000, rate: 0.1 },
  { upTo: Infinity, rate: 0.12 },
];

export const SDLT_FIRST_TIME_BUYER_BANDS = [
  { upTo: 300000, rate: 0 },
  { upTo: 500000, rate: 0.05 },
];
export const SDLT_FTB_RELIEF_LIMIT = 500000;

export const SDLT_ADDITIONAL_PROPERTY_SURCHARGE = 0.05;
export const SDLT_NON_RESIDENT_SURCHARGE = 0.02;

// --- Land and Buildings Transaction Tax (Scotland) --------------------------
export const LBTT_BANDS = [
  { upTo: 145000, rate: 0 },
  { upTo: 250000, rate: 0.02 },
  { upTo: 325000, rate: 0.05 },
  { upTo: 750000, rate: 0.1 },
  { upTo: Infinity, rate: 0.12 },
];
export const LBTT_FIRST_TIME_BUYER_NIL_BAND = 175000;
export const LBTT_ADS_RATE = 0.08;

// --- Land Transaction Tax (Wales) -------------------------------------------
export const LTT_MAIN_BANDS = [
  { upTo: 225000, rate: 0 },
  { upTo: 400000, rate: 0.06 },
  { upTo: 750000, rate: 0.075 },
  { upTo: 1500000, rate: 0.1 },
  { upTo: Infinity, rate: 0.12 },
];
export const LTT_HIGHER_BANDS = [
  { upTo: 180000, rate: 0.05 },
  { upTo: 250000, rate: 0.08 },
  { upTo: 400000, rate: 0.09 },
  { upTo: 750000, rate: 0.115 },
  { upTo: 1500000, rate: 0.14 },
  { upTo: Infinity, rate: 0.16 },
];

// --- Vehicle Excise Duty (Road Tax) -----------------------------------------
export const VED_STANDARD_RATE = 195;
export const VED_EXPENSIVE_CAR_SUPPLEMENT = 425;
export const VED_EXPENSIVE_CAR_THRESHOLD = 40000;
export const VED_EXPENSIVE_CAR_SUPPLEMENT_YEARS = 5;

// First-year rates for cars first registered on/after 1 April 2017, by CO2 (g/km).
export const VED_FIRST_YEAR_RATES = [
  { co2UpTo: 0, rate: 10 },
  { co2UpTo: 50, rate: 130 },
  { co2UpTo: 75, rate: 270 },
  { co2UpTo: 90, rate: 350 },
  { co2UpTo: 100, rate: 390 },
  { co2UpTo: 110, rate: 440 },
  { co2UpTo: 130, rate: 540 },
  { co2UpTo: 150, rate: 1360 },
  { co2UpTo: 170, rate: 2190 },
  { co2UpTo: 190, rate: 3300 },
  { co2UpTo: 225, rate: 4680 },
  { co2UpTo: 255, rate: 5490 },
  { co2UpTo: Infinity, rate: 5490 },
];

// Simplified annual rates for cars first registered 1 March 2001 – 31 March 2017.
export const VED_PRE_2017_RATES = [
  { co2UpTo: 100, rate: 0 },
  { co2UpTo: 110, rate: 20 },
  { co2UpTo: 120, rate: 35 },
  { co2UpTo: 130, rate: 165 },
  { co2UpTo: 140, rate: 195 },
  { co2UpTo: 150, rate: 215 },
  { co2UpTo: 165, rate: 265 },
  { co2UpTo: 175, rate: 315 },
  { co2UpTo: 185, rate: 345 },
  { co2UpTo: 200, rate: 395 },
  { co2UpTo: 225, rate: 430 },
  { co2UpTo: 255, rate: 735 },
  { co2UpTo: Infinity, rate: 760 },
];
