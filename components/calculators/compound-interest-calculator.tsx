"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateCompoundInterest } from "@/lib/calc/compound-interest";
import type { CompoundingFrequency } from "@/lib/calc/compound-interest";
import { formatCurrency } from "@/lib/format";

export function CompoundInterestCalculator() {
  const [initialDeposit, setInitialDeposit] = React.useState(5000);
  const [monthlyContribution, setMonthlyContribution] = React.useState(200);
  const [annualRate, setAnnualRate] = React.useState(5);
  const [years, setYears] = React.useState(10);
  const [frequency, setFrequency] = React.useState<CompoundingFrequency>("monthly");

  const result = React.useMemo(
    () =>
      calculateCompoundInterest({
        initialDeposit,
        monthlyContribution,
        annualRate,
        years,
        frequency,
      }),
    [initialDeposit, monthlyContribution, annualRate, years, frequency]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="initial-deposit">Initial deposit</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="initial-deposit"
                type="number"
                min={0}
                value={initialDeposit}
                onChange={(e) => setInitialDeposit(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="monthly-contribution">Monthly contribution</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="monthly-contribution"
                type="number"
                min={0}
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="annual-rate">Annual interest rate</Label>
              <div className="relative">
                <Input
                  id="annual-rate"
                  type="number"
                  min={0}
                  step={0.1}
                  value={annualRate}
                  onChange={(e) => setAnnualRate(Number(e.target.value) || 0)}
                  className="h-11 pr-7 text-base"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="years">Years</Label>
              <Input
                id="years"
                type="number"
                min={1}
                max={50}
                value={years}
                onChange={(e) => setYears(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Compounding frequency</Label>
            <Tabs value={frequency} onValueChange={(v) => setFrequency(v as CompoundingFrequency)}>
              <TabsList className="w-full">
                <TabsTrigger value="annually" className="flex-1">Annually</TabsTrigger>
                <TabsTrigger value="monthly" className="flex-1">Monthly</TabsTrigger>
                <TabsTrigger value="daily" className="flex-1">Daily</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${initialDeposit}-${monthlyContribution}-${annualRate}-${years}-${frequency}`}
        >
          <ResultStat label="Final balance" value={formatCurrency(result.finalBalance, 2)} emphasis positive />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Total contributions" value={formatCurrency(result.totalContributions)} />
            <ResultStat label="Total interest earned" value={formatCurrency(result.totalInterest)} />
          </div>
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0">
            <h3 className="text-sm font-semibold text-foreground">Year by year breakdown</h3>
            <div className="mt-3 max-h-64 overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-card text-xs text-muted-foreground">
                  <tr>
                    <th className="py-1.5 text-left font-medium">Year</th>
                    <th className="py-1.5 text-right font-medium">Contributions</th>
                    <th className="py-1.5 text-right font-medium">Interest</th>
                    <th className="py-1.5 text-right font-medium">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {result.yearlyBreakdown.map((row) => (
                    <tr key={row.year} className="border-t border-border/60">
                      <td className="py-1.5 text-left text-muted-foreground">{row.year}</td>
                      <td className="py-1.5 text-right">{formatCurrency(row.contributions)}</td>
                      <td className="py-1.5 text-right">{formatCurrency(row.interest)}</td>
                      <td className="py-1.5 text-right">{formatCurrency(row.endingBalance)}</td>
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
