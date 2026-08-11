"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import {
  calculateSimpleInterest,
  type SimpleInterestTimeUnit,
} from "@/lib/calc/simple-interest";
import { formatCurrency, formatNumber } from "@/lib/format";

export function SimpleInterestCalculator() {
  const [principal, setPrincipal] = React.useState(5000);
  const [ratePercent, setRatePercent] = React.useState(4);
  const [timeValue, setTimeValue] = React.useState(3);
  const [timeUnit, setTimeUnit] = React.useState<SimpleInterestTimeUnit>("years");

  const result = React.useMemo(
    () => calculateSimpleInterest({ principal, ratePercent, timeValue, timeUnit }),
    [principal, ratePercent, timeValue, timeUnit]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="si-principal">Principal amount</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="si-principal"
                type="number"
                min={0}
                step={100}
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="si-rate">Annual interest rate</Label>
            <div className="relative">
              <Input
                id="si-rate"
                type="number"
                min={0}
                step={0.1}
                value={ratePercent}
                onChange={(e) => setRatePercent(Number(e.target.value) || 0)}
                className="h-11 pr-7 text-base"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="si-time">Time period</Label>
              <Tabs value={timeUnit} onValueChange={(v) => setTimeUnit(v as SimpleInterestTimeUnit)}>
                <TabsList>
                  <TabsTrigger value="years">Years</TabsTrigger>
                  <TabsTrigger value="months">Months</TabsTrigger>
                  <TabsTrigger value="days">Days</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <Input
              id="si-time"
              type="number"
              min={0}
              step={1}
              value={timeValue}
              onChange={(e) => setTimeValue(Number(e.target.value) || 0)}
              className="h-11 text-base"
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${principal}-${ratePercent}-${timeValue}-${timeUnit}`}>
          <ResultStat label="Total amount" value={formatCurrency(result.totalAmount, 2)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Interest earned" value={formatCurrency(result.totalInterest, 2)} positive />
            <ResultStat label="Time period" value={`${formatNumber(result.timeInYears, 2)} years`} />
          </div>
        </ResultCard>

        {result.yearlyBreakdown.length > 0 && (
          <Card className="p-6">
            <CardContent className="p-0">
              <h3 className="text-sm font-semibold text-foreground">Year-by-year breakdown</h3>
              <div className="mt-3 max-h-64 overflow-y-auto">
                <table className="w-full text-sm">
                  <thead className="sticky top-0 bg-card text-xs text-muted-foreground">
                    <tr>
                      <th className="py-1.5 text-left font-medium">Year</th>
                      <th className="py-1.5 text-right font-medium">Interest</th>
                      <th className="py-1.5 text-right font-medium">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.yearlyBreakdown.map((row) => (
                      <tr key={row.year} className="border-t border-border/60">
                        <td className="py-1.5 text-left text-muted-foreground">{row.year}</td>
                        <td className="py-1.5 text-right">{formatCurrency(row.interestThisYear)}</td>
                        <td className="py-1.5 text-right">{formatCurrency(row.balance)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
