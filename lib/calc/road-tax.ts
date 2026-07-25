import {
  VED_STANDARD_RATE,
  VED_EXPENSIVE_CAR_SUPPLEMENT,
  VED_EXPENSIVE_CAR_SUPPLEMENT_YEARS,
  VED_FIRST_YEAR_RATES,
  VED_PRE_2017_RATES,
} from "./uk-rates";

export type FuelType = "petrol" | "diesel" | "hybrid" | "electric";

export interface RoadTaxInput {
  fuelType: FuelType;
  firstRegistrationDate: string; // ISO date
  co2Emissions: number;
  listPriceOver40k: boolean;
}

export interface RoadTaxResult {
  era: "post-2017" | "2001-2017" | "pre-2001";
  firstYearRate: number | null;
  standardAnnualRate: number | null;
  expensiveCarSupplement: number;
  totalFirstYear: number | null;
  totalStandardYear: number | null;
  supplementYearsRemaining: number;
  notice: string | null;
}

function bandRate(co2: number, table: { co2UpTo: number; rate: number }[]): number {
  const band = table.find((b) => co2 <= b.co2UpTo);
  return band ? band.rate : table[table.length - 1].rate;
}

export function calculateRoadTax(input: RoadTaxInput): RoadTaxResult {
  const { fuelType, firstRegistrationDate, co2Emissions, listPriceOver40k } = input;
  const regDate = new Date(firstRegistrationDate);
  const cutoff2017 = new Date("2017-04-01");
  const cutoff2001 = new Date("2001-03-01");

  const supplement = listPriceOver40k ? VED_EXPENSIVE_CAR_SUPPLEMENT : 0;

  if (regDate >= cutoff2017) {
    const effectiveCo2 = fuelType === "electric" ? 0 : co2Emissions;
    const firstYearRate = bandRate(effectiveCo2, VED_FIRST_YEAR_RATES);
    const standardAnnualRate = VED_STANDARD_RATE;

    return {
      era: "post-2017",
      firstYearRate,
      standardAnnualRate,
      expensiveCarSupplement: supplement,
      totalFirstYear: firstYearRate,
      totalStandardYear: standardAnnualRate + supplement,
      supplementYearsRemaining: listPriceOver40k ? VED_EXPENSIVE_CAR_SUPPLEMENT_YEARS : 0,
      notice:
        fuelType === "electric"
          ? "From 1 April 2025, electric vehicles pay VED on the same basis as petrol and diesel cars."
          : null,
    };
  }

  if (regDate >= cutoff2001) {
    const rate = bandRate(co2Emissions, VED_PRE_2017_RATES);
    return {
      era: "2001-2017",
      firstYearRate: null,
      standardAnnualRate: rate,
      expensiveCarSupplement: 0,
      totalFirstYear: null,
      totalStandardYear: rate,
      supplementYearsRemaining: 0,
      notice: null,
    };
  }

  return {
    era: "pre-2001",
    firstYearRate: null,
    standardAnnualRate: null,
    expensiveCarSupplement: 0,
    totalFirstYear: null,
    totalStandardYear: null,
    supplementYearsRemaining: 0,
    notice:
      "Vehicles registered before March 2001 are taxed by engine size, not CO2 emissions — check the exact rate with the DVLA.",
  };
}
