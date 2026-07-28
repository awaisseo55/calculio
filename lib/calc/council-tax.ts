import {
  COUNCIL_TAX_BAND_MULTIPLIERS,
  COUNCIL_TAX_ENGLAND_AVERAGE_BAND_D,
  COUNCIL_TAX_SINGLE_OCCUPANT_DISCOUNT,
  COUNCIL_TAX_SECOND_HOME_PREMIUM,
  COUNCIL_TAX_SERVICE_BREAKDOWN_PERCENT,
} from "./uk-rates";

export type CouncilTaxBand = keyof typeof COUNCIL_TAX_BAND_MULTIPLIERS;

export const COUNCIL_TAX_BAND_VALUE_RANGES: Record<CouncilTaxBand, string> = {
  A: "Up to £40,000",
  B: "£40,001 to £52,000",
  C: "£52,001 to £68,000",
  D: "£68,001 to £88,000",
  E: "£88,001 to £120,000",
  F: "£120,001 to £160,000",
  G: "£160,001 to £320,000",
  H: "More than £320,000",
};

export type UkRegion =
  | "london"
  | "south-east"
  | "south-west"
  | "east-of-england"
  | "east-midlands"
  | "west-midlands"
  | "yorkshire-humber"
  | "north-east"
  | "north-west"
  | "scotland"
  | "wales"
  | "uk-average";

export const REGION_LABELS: Record<UkRegion, string> = {
  london: "London",
  "south-east": "South East",
  "south-west": "South West",
  "east-of-england": "East of England",
  "east-midlands": "East Midlands",
  "west-midlands": "West Midlands",
  "yorkshire-humber": "Yorkshire and the Humber",
  "north-east": "North East",
  "north-west": "North West",
  scotland: "Scotland",
  wales: "Wales",
  "uk-average": "UK average / not sure",
};

// Illustrative regional multipliers relative to the England average Band D
// figure, loosely reflecting the general pattern of published council tax
// levels across the UK. These are approximate only: actual bills depend on
// the specific council and any parish or mayoral precepts.
const REGION_MULTIPLIERS: Record<UkRegion, number> = {
  london: 0.86,
  "south-east": 1.05,
  "south-west": 1.09,
  "east-of-england": 1.04,
  "east-midlands": 1.0,
  "west-midlands": 0.97,
  "yorkshire-humber": 0.95,
  "north-east": 1.02,
  "north-west": 0.98,
  scotland: 0.9,
  wales: 0.96,
  "uk-average": 1.0,
};

export interface CouncilTaxInput {
  region: UkRegion;
  band: CouncilTaxBand;
  singleOccupant: boolean;
  secondHome: boolean;
}

export interface CouncilTaxServiceBreakdown {
  label: string;
  amount: number;
  percent: number;
}

export interface CouncilTaxResult {
  annualBill: number;
  monthlyBill: number;
  baseBandDBill: number;
  nationalAverageBandD: number;
  aboveNationalAverage: boolean;
  differenceFromAverage: number;
  serviceBreakdown: CouncilTaxServiceBreakdown[];
}

export function calculateCouncilTax(input: CouncilTaxInput): CouncilTaxResult {
  const { region, band, singleOccupant, secondHome } = input;

  const regionalBandD = COUNCIL_TAX_ENGLAND_AVERAGE_BAND_D * REGION_MULTIPLIERS[region];
  const baseBandDBill = regionalBandD;
  let annualBill = regionalBandD * COUNCIL_TAX_BAND_MULTIPLIERS[band];

  if (secondHome) {
    annualBill *= 1 + COUNCIL_TAX_SECOND_HOME_PREMIUM;
  } else if (singleOccupant) {
    annualBill *= 1 - COUNCIL_TAX_SINGLE_OCCUPANT_DISCOUNT;
  }

  const serviceBreakdown: CouncilTaxServiceBreakdown[] = [
    { label: "Council services", percent: COUNCIL_TAX_SERVICE_BREAKDOWN_PERCENT.councilServices },
    { label: "Adult social care", percent: COUNCIL_TAX_SERVICE_BREAKDOWN_PERCENT.adultSocialCare },
    { label: "Police and Crime Commissioner", percent: COUNCIL_TAX_SERVICE_BREAKDOWN_PERCENT.policeAndCrimeCommissioner },
    { label: "Fire and rescue", percent: COUNCIL_TAX_SERVICE_BREAKDOWN_PERCENT.fireAndRescue },
    { label: "Parish and other precepts", percent: COUNCIL_TAX_SERVICE_BREAKDOWN_PERCENT.parishAndOther },
  ].map((item) => ({ ...item, amount: (annualBill * item.percent) / 100 }));

  return {
    annualBill,
    monthlyBill: annualBill / 12,
    baseBandDBill,
    nationalAverageBandD: COUNCIL_TAX_ENGLAND_AVERAGE_BAND_D,
    aboveNationalAverage: annualBill > COUNCIL_TAX_ENGLAND_AVERAGE_BAND_D,
    differenceFromAverage: annualBill - COUNCIL_TAX_ENGLAND_AVERAGE_BAND_D,
    serviceBreakdown,
  };
}
