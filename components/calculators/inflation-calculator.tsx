"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateInflation } from "@/lib/calc/inflation";
import { formatCurrency, formatPercent } from "@/lib/format";

export function InflationCalculator() {
  const [amount, setAmount] = React.useState(1000);
  const [annualInflationRatePercent, setAnnualInflationRatePercent] = React.useState(3);
  const [years, setYears] = React.useState(5);

  const result = React.useMemo(
    () => calculateInflation({ amount, annualInflationRatePercent, years }),
    [amount, annualInflationRatePercent, years]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="inflation-amount">Amount today</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input id="inflation-amount" type="number" min={0} step={100} value={amount} onChange={(e) => setAmount(Number(e.target.value) || 0)} className="h-11 pl-7 text-base" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="inflation-rate">Annual inflation</Label>
              <div className="relative">
                <Input id="inflation-rate" type="number" step={0.1} value={annualInflationRatePercent} onChange={(e) => setAnnualInflationRatePercent(Number(e.target.value) || 0)} className="h-11 pr-8 text-base" />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="inflation-years">Years</Label>
              <Input id="inflation-years" type="number" min={0} step={1} value={years} onChange={(e) => setYears(Number(e.target.value) || 0)} className="h-11 text-base" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Enter your own inflation assumption. For historic figures, check the latest ONS inflation data.
          </p>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${amount}-${annualInflationRatePercent}-${years}`}>
          <ResultStat label="Estimated future cost" value={formatCurrency(result.futureCost, 2)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Extra cost" value={formatCurrency(result.extraCost, 2)} />
            <ResultStat label="Total inflation" value={formatPercent(result.totalInflationPercent, 1)} />
            <ResultStat label="Today's buying power after inflation" value={formatCurrency(result.purchasingPower, 2)} />
          </div>
        </ResultCard>
      </div>
    </div>
  );
}
