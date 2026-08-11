"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateCarDepreciation } from "@/lib/calc/car-depreciation";
import { formatCurrency, formatPercent } from "@/lib/format";
import {
  CAR_DEPRECIATION_YEAR1_PERCENT,
  CAR_DEPRECIATION_YEAR2_TO_5_PERCENT,
  CAR_DEPRECIATION_AFTER_YEAR5_PERCENT,
} from "@/lib/calc/uk-rates";

export function CarDepreciationCalculator() {
  const [purchasePrice, setPurchasePrice] = React.useState(25000);
  const [projectionYears, setProjectionYears] = React.useState(5);
  const [year1RatePercent, setYear1RatePercent] = React.useState(CAR_DEPRECIATION_YEAR1_PERCENT);
  const [yearsTwoToFiveRatePercent, setYearsTwoToFiveRatePercent] = React.useState(
    CAR_DEPRECIATION_YEAR2_TO_5_PERCENT
  );
  const [afterYearFiveRatePercent, setAfterYearFiveRatePercent] = React.useState(
    CAR_DEPRECIATION_AFTER_YEAR5_PERCENT
  );

  const result = React.useMemo(
    () =>
      calculateCarDepreciation({
        purchasePrice,
        projectionYears,
        year1RatePercent,
        yearsTwoToFiveRatePercent,
        afterYearFiveRatePercent,
      }),
    [purchasePrice, projectionYears, year1RatePercent, yearsTwoToFiveRatePercent, afterYearFiveRatePercent]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="cd-price">Purchase price</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="cd-price"
                  type="number"
                  min={0}
                  step={500}
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="cd-years">Years to project</Label>
              <Input
                id="cd-years"
                type="number"
                min={1}
                max={15}
                value={projectionYears}
                onChange={(e) => setProjectionYears(Number(e.target.value) || 1)}
                className="h-11 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="cd-y1">Year 1 depreciation</Label>
            <div className="relative">
              <Input
                id="cd-y1"
                type="number"
                min={0}
                max={60}
                step={1}
                value={year1RatePercent}
                onChange={(e) => setYear1RatePercent(Number(e.target.value) || 0)}
                className="h-11 pr-7 text-base"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="cd-y2-5">Years 2 to 5</Label>
              <div className="relative">
                <Input
                  id="cd-y2-5"
                  type="number"
                  min={0}
                  max={40}
                  step={1}
                  value={yearsTwoToFiveRatePercent}
                  onChange={(e) => setYearsTwoToFiveRatePercent(Number(e.target.value) || 0)}
                  className="h-11 pr-7 text-base"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="cd-y5plus">Year 6 onwards</Label>
              <div className="relative">
                <Input
                  id="cd-y5plus"
                  type="number"
                  min={0}
                  max={40}
                  step={1}
                  value={afterYearFiveRatePercent}
                  onChange={(e) => setAfterYearFiveRatePercent(Number(e.target.value) || 0)}
                  className="h-11 pr-7 text-base"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
              </div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Typical illustrative rates are pre-filled. Actual depreciation varies a lot by make, model, mileage and condition.
          </p>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${purchasePrice}-${projectionYears}-${year1RatePercent}-${yearsTwoToFiveRatePercent}-${afterYearFiveRatePercent}`}
        >
          <ResultStat
            label={`Estimated value after ${projectionYears} year${projectionYears === 1 ? "" : "s"}`}
            value={formatCurrency(result.finalValue)}
            emphasis
          />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Total value lost" value={formatCurrency(result.totalDepreciation)} />
            <ResultStat label="Total depreciation" value={formatPercent(result.totalDepreciationPercent)} />
          </div>
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0">
            <h3 className="text-sm font-semibold text-foreground">Value by year</h3>
            <div className="mt-3 max-h-64 overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-card text-xs text-muted-foreground">
                  <tr>
                    <th className="py-1.5 text-left font-medium">Year</th>
                    <th className="py-1.5 text-right font-medium">Lost this year</th>
                    <th className="py-1.5 text-right font-medium">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {result.yearlyBreakdown.map((row) => (
                    <tr key={row.year} className="border-t border-border/60">
                      <td className="py-1.5 text-left text-muted-foreground">{row.year}</td>
                      <td className="py-1.5 text-right">{formatCurrency(row.depreciationThisYear)}</td>
                      <td className="py-1.5 text-right">{formatCurrency(row.value)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
