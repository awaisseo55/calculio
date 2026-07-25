"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { RatesDisclaimer } from "@/components/calculators/rates-disclaimer";
import { calculateStampDuty, type BuyerType, type PropertyLocation } from "@/lib/calc/stamp-duty";
import { formatCurrency, formatPercent } from "@/lib/format";

const buyerTypes: { value: BuyerType; label: string }[] = [
  { value: "first-time", label: "First-time buyer" },
  { value: "next-home", label: "Home mover (next home)" },
  { value: "additional", label: "Additional property (2nd home/BTL)" },
  { value: "non-resident", label: "Non-UK resident" },
];

const locations: { value: PropertyLocation; label: string }[] = [
  { value: "england-ni", label: "England or Northern Ireland (SDLT)" },
  { value: "scotland", label: "Scotland (LBTT)" },
  { value: "wales", label: "Wales (LTT)" },
];

export function StampDutyCalculator() {
  const [propertyPrice, setPropertyPrice] = React.useState(350000);
  const [buyerType, setBuyerType] = React.useState<BuyerType>("first-time");
  const [location, setLocation] = React.useState<PropertyLocation>("england-ni");

  const result = React.useMemo(
    () => calculateStampDuty({ propertyPrice, buyerType, location }),
    [propertyPrice, buyerType, location]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="property-price">Property price</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="property-price"
                type="number"
                min={0}
                step={1000}
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="location">Property location</Label>
            <Select value={location} onValueChange={(v) => setLocation(v as PropertyLocation)}>
              <SelectTrigger id="location" className="h-11 w-full text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {locations.map((l) => (
                  <SelectItem key={l.value} value={l.value}>
                    {l.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="buyer-type">Buyer type</Label>
            <Select value={buyerType} onValueChange={(v) => setBuyerType(v as BuyerType)}>
              <SelectTrigger id="buyer-type" className="h-11 w-full text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {buyerTypes.map((b) => (
                  <SelectItem key={b.value} value={b.value}>
                    {b.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <RatesDisclaimer />
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${propertyPrice}-${buyerType}-${location}`}>
          <ResultStat label={result.taxName} value={formatCurrency(result.totalTax)} emphasis />
          <div className="mt-6">
            <ResultStat label="Effective rate" value={formatPercent(result.effectiveRate)} />
          </div>
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0">
            <h3 className="text-sm font-semibold text-foreground">Band breakdown</h3>
            <div className="mt-3 flex flex-col gap-2">
              {result.breakdown.length === 0 ? (
                <p className="text-sm text-muted-foreground">No tax due at this price.</p>
              ) : (
                result.breakdown.map((band, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border-t border-border/60 py-2 text-sm first:border-t-0"
                  >
                    <span className="text-muted-foreground">
                      {formatCurrency(band.from)} &ndash; {band.to === band.from ? formatCurrency(band.to) : formatCurrency(band.to)} @ {formatPercent(band.rate * 100, 0)}
                    </span>
                    <span className="font-medium text-foreground">{formatCurrency(band.tax)}</span>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
