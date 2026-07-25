"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { RatesDisclaimer } from "@/components/calculators/rates-disclaimer";
import { calculateInheritanceTax } from "@/lib/calc/inheritance-tax";
import { formatCurrency, formatPercent } from "@/lib/format";

export function InheritanceTaxCalculator() {
  const [estateValue, setEstateValue] = React.useState(700000);
  const [spouseExemption, setSpouseExemption] = React.useState(0);
  const [residenceValue, setResidenceValue] = React.useState(300000);
  const [leavingResidenceToDescendants, setLeavingResidenceToDescendants] = React.useState(true);
  const [giftsWithin7Years, setGiftsWithin7Years] = React.useState(0);
  const [charityDonation, setCharityDonation] = React.useState(0);

  const result = React.useMemo(
    () =>
      calculateInheritanceTax({
        estateValue,
        spouseExemption,
        residenceValue,
        leavingResidenceToDescendants,
        giftsWithin7Years,
        charityDonation,
      }),
    [estateValue, spouseExemption, residenceValue, leavingResidenceToDescendants, giftsWithin7Years, charityDonation]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="iht-estate">Total estate value</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="iht-estate"
                type="number"
                min={0}
                value={estateValue}
                onChange={(e) => setEstateValue(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="iht-spouse">Left to spouse or civil partner</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="iht-spouse"
                type="number"
                min={0}
                value={spouseExemption}
                onChange={(e) => setSpouseExemption(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Anything left to a spouse or civil partner is exempt from
              Inheritance Tax entirely, so enter that portion here.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="iht-residence">Main residence value</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="iht-residence"
                type="number"
                min={0}
                value={residenceValue}
                onChange={(e) => setResidenceValue(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <label className="flex items-center gap-2.5 text-sm text-foreground">
            <input
              type="checkbox"
              checked={leavingResidenceToDescendants}
              onChange={(e) => setLeavingResidenceToDescendants(e.target.checked)}
              className="size-4 rounded border-input accent-primary"
            />
            The main residence is left to children or grandchildren
          </label>
          <p className="-mt-4 text-xs text-muted-foreground">
            This unlocks the residence nil-rate band. It only applies to
            direct descendants, not to other relatives or friends.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="iht-gifts">Gifts within 7 years</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="iht-gifts"
                  type="number"
                  min={0}
                  value={giftsWithin7Years}
                  onChange={(e) => setGiftsWithin7Years(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="iht-charity">Left to charity</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="iht-charity"
                  type="number"
                  min={0}
                  value={charityDonation}
                  onChange={(e) => setCharityDonation(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
          </div>

          <RatesDisclaimer>
            Inheritance Tax rules are genuinely complex, with many reliefs and
            exceptions this calculator does not cover, such as business
            relief, agricultural relief, and trusts. This is a general
            estimate only. For estate planning, speak to a solicitor or a
            regulated financial adviser.
          </RatesDisclaimer>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${estateValue}-${spouseExemption}-${residenceValue}-${leavingResidenceToDescendants}-${giftsWithin7Years}-${charityDonation}`}
        >
          <ResultStat label="Inheritance Tax due" value={formatCurrency(result.iht, 0)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Nil-rate band" value={formatCurrency(result.nilRateBand)} />
            <ResultStat label="Residence nil-rate band used" value={formatCurrency(result.residenceNilRateBandApplied)} />
            <ResultStat label="Taxable estate" value={formatCurrency(result.taxableEstate)} />
            <ResultStat label="Rate applied" value={formatPercent(result.rateApplied * 100, 0)} />
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            {result.reducedRateUsed
              ? "The reduced 36% rate applies because at least 10% of the estate above the nil-rate bands is left to charity."
              : `Based on these figures, around ${formatCurrency(result.estatePassingToBeneficiaries, 0)} would pass to your beneficiaries after Inheritance Tax.`}
          </p>
        </ResultCard>
      </div>
    </div>
  );
}
