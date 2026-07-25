import {
  IHT_NIL_RATE_BAND,
  IHT_RESIDENCE_NIL_RATE_BAND,
  IHT_RESIDENCE_NIL_RATE_TAPER_THRESHOLD,
  IHT_STANDARD_RATE,
  IHT_REDUCED_RATE_WITH_CHARITY,
  IHT_CHARITY_RATE_THRESHOLD_PERCENT,
} from "./uk-rates";

export interface InheritanceTaxInput {
  estateValue: number;
  spouseExemption: number;
  residenceValue: number;
  leavingResidenceToDescendants: boolean;
  giftsWithin7Years: number;
  charityDonation: number;
}

export interface InheritanceTaxResult {
  netEstate: number;
  nilRateBand: number;
  residenceNilRateBandApplied: number;
  totalNilRateBand: number;
  taxableEstate: number;
  rateApplied: number;
  reducedRateUsed: boolean;
  iht: number;
  estatePassingToBeneficiaries: number;
}

export function calculateInheritanceTax(input: InheritanceTaxInput): InheritanceTaxResult {
  const netEstate = Math.max(input.estateValue - input.spouseExemption, 0);

  let residenceNilRateBandApplied = input.leavingResidenceToDescendants
    ? Math.min(IHT_RESIDENCE_NIL_RATE_BAND, Math.max(input.residenceValue, 0))
    : 0;

  if (netEstate > IHT_RESIDENCE_NIL_RATE_TAPER_THRESHOLD) {
    const excess = netEstate - IHT_RESIDENCE_NIL_RATE_TAPER_THRESHOLD;
    const reduction = Math.floor(excess / 2);
    residenceNilRateBandApplied = Math.max(residenceNilRateBandApplied - reduction, 0);
  }

  const totalNilRateBand = IHT_NIL_RATE_BAND + residenceNilRateBandApplied;

  const estateAboveNilRateBands = Math.max(netEstate - totalNilRateBand, 0);
  const charityPercentOfEstate =
    estateAboveNilRateBands > 0 ? (input.charityDonation / estateAboveNilRateBands) * 100 : 0;
  const reducedRateUsed = charityPercentOfEstate >= IHT_CHARITY_RATE_THRESHOLD_PERCENT;
  const rateApplied = reducedRateUsed ? IHT_REDUCED_RATE_WITH_CHARITY : IHT_STANDARD_RATE;

  const taxableEstate = Math.max(
    netEstate + input.giftsWithin7Years - totalNilRateBand - input.charityDonation,
    0
  );
  const iht = taxableEstate * rateApplied;

  return {
    netEstate,
    nilRateBand: IHT_NIL_RATE_BAND,
    residenceNilRateBandApplied,
    totalNilRateBand,
    taxableEstate,
    rateApplied,
    reducedRateUsed,
    iht,
    estatePassingToBeneficiaries: input.estateValue - iht,
  };
}
