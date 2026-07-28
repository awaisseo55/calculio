"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { RatesDisclaimer } from "@/components/calculators/rates-disclaimer";
import {
  calculateCouncilTax,
  COUNCIL_TAX_BAND_VALUE_RANGES,
  REGION_LABELS,
  type CouncilTaxBand,
  type UkRegion,
} from "@/lib/calc/council-tax";
import { formatCurrency } from "@/lib/format";

const regionOptions = Object.entries(REGION_LABELS) as [UkRegion, string][];
const bandOptions = Object.keys(COUNCIL_TAX_BAND_VALUE_RANGES) as CouncilTaxBand[];

export function CouncilTaxCalculator() {
  const [region, setRegion] = React.useState<UkRegion>("uk-average");
  const [band, setBand] = React.useState<CouncilTaxBand>("D");
  const [singleOccupant, setSingleOccupant] = React.useState(false);
  const [secondHome, setSecondHome] = React.useState(false);

  const result = React.useMemo(
    () => calculateCouncilTax({ region, band, singleOccupant, secondHome }),
    [region, band, singleOccupant, secondHome]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="ct-region">Region</Label>
            <Select value={region} onValueChange={(v) => setRegion(v as UkRegion)}>
              <SelectTrigger id="ct-region" className="h-11 w-full text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {regionOptions.map(([value, label]) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              Council tax is set by your own council, so this gives a regional
              estimate rather than an exact figure for a named council.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="ct-band">Council tax band</Label>
            <Select value={band} onValueChange={(v) => setBand(v as CouncilTaxBand)}>
              <SelectTrigger id="ct-band" className="h-11 w-full text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {bandOptions.map((b) => (
                  <SelectItem key={b} value={b}>
                    {`Band ${b} (${COUNCIL_TAX_BAND_VALUE_RANGES[b]})`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              Bands are based on your property&apos;s value on 1 April 1991 in
              England (1 April 2003 in Wales), not its current value. Check
              your band on GOV.UK if you&apos;re not sure.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Single occupant discount</Label>
            <Tabs
              value={singleOccupant ? "yes" : "no"}
              onValueChange={(v) => setSingleOccupant(v === "yes")}
            >
              <TabsList className="w-full">
                <TabsTrigger value="no" className="flex-1">No</TabsTrigger>
                <TabsTrigger value="yes" className="flex-1">Yes, I live alone</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Second home</Label>
            <Tabs value={secondHome ? "yes" : "no"} onValueChange={(v) => setSecondHome(v === "yes")}>
              <TabsList className="w-full">
                <TabsTrigger value="no" className="flex-1">No, main home</TabsTrigger>
                <TabsTrigger value="yes" className="flex-1">Yes, second home</TabsTrigger>
              </TabsList>
            </Tabs>
            <p className="text-xs text-muted-foreground">
              Many councils in England now charge a premium of up to 100% on
              second homes, so this overrides the single occupant discount.
            </p>
          </div>

          <RatesDisclaimer>
            Figures use an illustrative national and regional average Band D
            council tax, since exact rates are set by each individual council.
            Always check your own council&apos;s website or your bill for the
            precise amount.
          </RatesDisclaimer>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${region}-${band}-${singleOccupant}-${secondHome}`}>
          <ResultStat label="Estimated annual council tax" value={formatCurrency(result.annualBill, 2)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Monthly cost (over 12)" value={formatCurrency(result.monthlyBill, 2)} />
            <ResultStat
              label="Vs national average"
              value={`${result.aboveNationalAverage ? "+" : ""}${formatCurrency(result.differenceFromAverage, 0)}`}
              positive={!result.aboveNationalAverage}
            />
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            The average Band D council tax bill in England is around{" "}
            {formatCurrency(result.nationalAverageBandD, 0)} a year. Most
            councils bill over 10 monthly instalments by default, so ask your
            council if you&apos;d prefer to spread payments over 12 months instead.
          </p>
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0">
            <h3 className="text-sm font-semibold text-foreground">
              Illustrative breakdown by service
            </h3>
            <div className="mt-3 flex flex-col gap-2">
              {result.serviceBreakdown.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between border-t border-border/60 py-2 text-sm first:border-t-0"
                >
                  <span className="text-muted-foreground">
                    {item.label} ({item.percent}%)
                  </span>
                  <span className="font-mono font-medium text-foreground">
                    {formatCurrency(item.amount, 2)}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
