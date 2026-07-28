/**
 * Centralised UK rate constants. Figures reflect publicly published HMRC / DVLA /
 * Revenue Scotland / Welsh Revenue Authority rates for the 2025/26 and 2026/27 tax
 * years at time of writing. Always confirm exact current figures on gov.uk before
 * making a financial decision. Thresholds are reviewed at every Budget.
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

// --- Dividend tax ------------------------------------------------------------
export const DIVIDEND_ALLOWANCE = 500;
// Dividend tax rates apply on top of whichever Income Tax band your total income
// (salary plus dividends) falls into, after the tax-free dividend allowance.
export const DIVIDEND_BASIC_RATE = 0.0875;
export const DIVIDEND_HIGHER_RATE = 0.3375;
export const DIVIDEND_ADDITIONAL_RATE = 0.3935;

// --- Capital Gains Tax (CGT) --------------------------------------------------
export const CGT_ANNUAL_EXEMPT_AMOUNT = 3000;
// Since the 30 October 2024 Budget, residential property and other chargeable
// assets (shares, personal possessions over £6,000, second homes) share the same
// two rates, based on whether the gain falls in your basic or higher/additional
// rate band. This calculator applies a simplified two-tier model: the whole gain
// is taxed at one rate depending on the taxpayer toggle, rather than the more
// precise blended calculation HMRC uses when a gain straddles both bands.
export const CGT_BASIC_RATE = 0.18;
export const CGT_HIGHER_RATE = 0.24;

// --- Self-employed National Insurance -----------------------------------------
// Class 2 NI became voluntary from 6 April 2024 for self-employed people with
// profits above the small profits threshold: you're treated as having paid it for
// state pension purposes without being charged. Below the threshold, it remains
// optional, at a flat weekly rate, for anyone who wants to protect their National
// Insurance record.
export const CLASS2_SMALL_PROFITS_THRESHOLD = 6845;
export const CLASS2_VOLUNTARY_WEEKLY_RATE = 3.45;

// Class 4 NI is charged on self-employed profits, using the same lower profits
// limit as the employee primary threshold, with a lower main rate than Class 1.
export const CLASS4_LOWER_PROFITS_LIMIT = 12570;
export const CLASS4_UPPER_PROFITS_LIMIT = 50270;
export const CLASS4_MAIN_RATE = 0.06;
export const CLASS4_UPPER_RATE = 0.02;

// --- ISA allowances (2026/27) ------------------------------------------------
// The overall ISA allowance can be split across account types in any combination,
// except the Lifetime ISA, which has its own lower sub-limit within the total.
export const ISA_ANNUAL_ALLOWANCE = 20000;
export const LISA_ANNUAL_ALLOWANCE = 4000;
export const LISA_GOVERNMENT_BONUS_RATE = 0.25;
export const JUNIOR_ISA_ANNUAL_ALLOWANCE = 9000;

// --- Personal Savings Allowance (used to compare ISA vs taxed savings) ------
export const PERSONAL_SAVINGS_ALLOWANCE_BASIC = 1000;
export const PERSONAL_SAVINGS_ALLOWANCE_HIGHER = 500;
// Additional rate taxpayers (over £125,140) get no Personal Savings Allowance.

// --- State Pension (used as context alongside private pension projections) --
// New State Pension, 2026/27, for people with a full 35-year National Insurance
// record. Paid from State Pension age, currently 66, rising to 67 by 2028.
export const NEW_STATE_PENSION_WEEKLY = 241.05;
export const NEW_STATE_PENSION_ANNUAL = NEW_STATE_PENSION_WEEKLY * 52;

// A commonly cited rule of thumb for sustainable annual drawdown from a pension
// pot, popularised by the "4% rule". It is a guide, not a guarantee: actual safe
// withdrawal rates depend on investment returns, inflation and how long the pot
// needs to last, so this is presented with clear caveats wherever it is used.
export const PENSION_DRAWDOWN_RATE = 0.04;

// --- VAT ----------------------------------------------------------------------
export const VAT_STANDARD_RATE = 20;
export const VAT_REDUCED_RATE = 5;
export const VAT_ZERO_RATE = 0;

// --- Inheritance Tax (IHT), 2026/27 -------------------------------------------
// The nil-rate band has been frozen at this level for many years and is
// reviewed at each Budget. It can be transferred between spouses and civil
// partners, so a surviving partner can potentially use up to double these
// allowances.
export const IHT_NIL_RATE_BAND = 325000;
// The residence nil-rate band applies only when a main residence is left to
// direct descendants (children, grandchildren, and their spouses), and tapers
// away above the threshold below.
export const IHT_RESIDENCE_NIL_RATE_BAND = 175000;
export const IHT_RESIDENCE_NIL_RATE_TAPER_THRESHOLD = 2000000;
export const IHT_STANDARD_RATE = 0.4;
// A reduced 36% rate applies to the whole taxable estate if 10% or more of
// the net estate (after other reliefs) is left to charity.
export const IHT_REDUCED_RATE_WITH_CHARITY = 0.36;
export const IHT_CHARITY_RATE_THRESHOLD_PERCENT = 10;

// --- National Living Wage / National Minimum Wage (from 1 April 2026) -------
// Set annually by the government following Low Pay Commission recommendations.
// Always confirm the current rate on gov.uk, since rates are reviewed every April.
export const NATIONAL_LIVING_WAGE_HOURLY = 12.71; // age 21 and over
export const NATIONAL_MINIMUM_WAGE_18_20_HOURLY = 10.85;
export const NATIONAL_MINIMUM_WAGE_UNDER_18_HOURLY = 8.0;
export const APPRENTICE_RATE_HOURLY = 8.0;

// --- Council Tax (England), 2026/27 ------------------------------------------
// Band multipliers are fixed in law as ninths of the Band D charge and do not
// change. The average Band D figure below is an illustrative, rounded typical
// figure for guidance only: actual bills are set independently by each council
// (plus police, fire and parish precepts) and vary significantly. Check your
// own council's website or your bill for the exact figure.
export const COUNCIL_TAX_BAND_MULTIPLIERS = {
  A: 6 / 9,
  B: 7 / 9,
  C: 8 / 9,
  D: 9 / 9,
  E: 11 / 9,
  F: 13 / 9,
  G: 15 / 9,
  H: 18 / 9,
} as const;
export const COUNCIL_TAX_ENGLAND_AVERAGE_BAND_D = 2280;
export const COUNCIL_TAX_SINGLE_OCCUPANT_DISCOUNT = 0.25;
// Since April 2025, councils in England have been able to charge a premium of
// up to 100% on most second homes. Not every council applies the maximum, so
// this is a common illustrative figure rather than a universal rule.
export const COUNCIL_TAX_SECOND_HOME_PREMIUM = 1.0;
// Illustrative typical split of a council tax bill by service, since this varies
// a lot by council and area. For guidance only.
export const COUNCIL_TAX_SERVICE_BREAKDOWN_PERCENT = {
  councilServices: 63,
  adultSocialCare: 11,
  policeAndCrimeCommissioner: 12,
  fireAndRescue: 3,
  parishAndOther: 11,
} as const;

// --- Domestic energy (Ofgem-style unit rates and typical consumption) -------
// Illustrative default unit rates and standing charges, reflecting the general
// level of the Ofgem energy price cap for a typical dual-fuel direct debit
// customer at time of writing. The cap changes every three months, so these
// are editable starting points, not a live quote. Check ofgem.gov.uk or a
// recent bill for the current cap.
export const ENERGY_ELECTRICITY_UNIT_RATE_PENCE = 25.7;
export const ENERGY_ELECTRICITY_STANDING_CHARGE_PENCE_PER_DAY = 51.0;
export const ENERGY_GAS_UNIT_RATE_PENCE = 6.3;
export const ENERGY_GAS_STANDING_CHARGE_PENCE_PER_DAY = 30.0;
export const ENERGY_OIL_PRICE_PENCE_PER_LITRE = 68.0;
// Ofgem's published Typical Domestic Consumption Values (TDCV), used as the
// industry standard reference for a "medium" gas and electricity user.
export const ENERGY_TDCV_ELECTRICITY_MEDIUM_KWH = 2700;
export const ENERGY_TDCV_GAS_MEDIUM_KWH = 11500;
