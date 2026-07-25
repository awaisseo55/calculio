"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
  calculateWaterBill,
  WATER_REGION_LABELS,
  type MeterStatus,
  type WaterRegion,
} from "@/lib/calc/water-bill";
import { formatCurrency } from "@/lib/format";

const regionOptions = Object.entries(WATER_REGION_LABELS) as [WaterRegion, string][];

export function WaterBillCalculator() {
  const [householdSize, setHouseholdSize] = React.useState(3);
  const [region, setRegion] = React.useState<WaterRegion>("other-average");
  const [meterStatus, setMeterStatus] = React.useState<MeterStatus>("metered");
  const [litresPerPersonPerDay, setLitresPerPersonPerDay] = React.useState(142);

  const result = React.useMemo(
    () =>
      calculateWaterBill({ householdSize, region, meterStatus, litresPerPersonPerDay }),
    [householdSize, region, meterStatus, litresPerPersonPerDay]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="water-household">Household size</Label>
            <Input
              id="water-household"
              type="number"
              min={1}
              max={12}
              value={householdSize}
              onChange={(e) => setHouseholdSize(Number(e.target.value) || 0)}
              className="h-11 text-base"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="water-region">Water company</Label>
            <Select value={region} onValueChange={(v) => setRegion(v as WaterRegion)}>
              <SelectTrigger id="water-region" className="h-11 w-full text-base">
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
          </div>

          <div className="flex flex-col gap-2">
            <Label>Meter status</Label>
            <Tabs value={meterStatus} onValueChange={(v) => setMeterStatus(v as MeterStatus)}>
              <TabsList className="w-full">
                <TabsTrigger value="metered" className="flex-1">Metered</TabsTrigger>
                <TabsTrigger value="unmetered" className="flex-1">Unmetered</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {meterStatus === "metered" && (
            <div className="flex flex-col gap-2">
              <Label htmlFor="water-litres">Estimated litres per person per day</Label>
              <Input
                id="water-litres"
                type="number"
                min={0}
                value={litresPerPersonPerDay}
                onChange={(e) => setLitresPerPersonPerDay(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
              <p className="text-xs text-muted-foreground">
                The UK average is around 142 litres per person per day. Showers,
                baths, dishwashers and gardens all add to this figure.
              </p>
            </div>
          )}

          <RatesDisclaimer>
            Water company rates vary by supplier and change each year. Figures
            here are illustrative averages for guidance only. Check your own
            water company for an exact current rate.
          </RatesDisclaimer>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${householdSize}-${region}-${meterStatus}-${litresPerPersonPerDay}`}
        >
          <ResultStat label="Estimated annual water bill" value={formatCurrency(result.annualBill, 0)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Monthly cost" value={formatCurrency(result.monthlyBill, 2)} />
            <ResultStat label="Cost per person" value={formatCurrency(result.costPerPerson, 0)} />
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            The typical UK household water and sewerage bill is around{" "}
            {formatCurrency(result.ukAverageAnnualBill, 0)} a year, so this
            estimate is {result.annualBill > result.ukAverageAnnualBill ? "above" : "below"} the
            national average.
          </p>
        </ResultCard>
      </div>
    </div>
  );
}
