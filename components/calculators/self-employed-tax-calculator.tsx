"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { RatesDisclaimer } from "@/components/calculators/rates-disclaimer";
import { calculateSelfEmployedTax } from "@/lib/calc/self-employed-tax";
import { formatCurrency, formatPercent } from "@/lib/format";

export function SelfEmployedTaxCalculator() {
  const [annualProfit, setAnnualProfit] = React.useState(40000);
  const [allowableExpenses, setAllowableExpenses] = React.useState(5000);
  const [class4Liable, setClass4Liable] = React.useState(true);

  const result = React.useMemo(
    () => calculateSelfEmployedTax({ annualProfit, allowableExpenses, class4Liable }),
    [annualProfit, allowableExpenses, class4Liable]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="se-profit">Annual profit (before expenses)</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="se-profit"
                type="number"
                min={0}
                value={annualProfit}
                onChange={(e) => setAnnualProfit(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="se-expenses">Allowable business expenses</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="se-expenses"
                type="number"
                min={0}
                value={allowableExpenses}
                onChange={(e) => setAllowableExpenses(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <label className="flex items-center gap-2.5 text-sm text-foreground">
            <input
              type="checkbox"
              checked={class4Liable}
              onChange={(e) => setClass4Liable(e.target.checked)}
              className="size-4 rounded border-input accent-primary"
            />
            I&apos;m liable for Class 4 National Insurance
          </label>
          <p className="-mt-4 text-xs text-muted-foreground">
            Most self-employed people between 16 and State Pension age pay Class 4
            NI. Untick this if an exemption applies to you.
          </p>

          <RatesDisclaimer />
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${annualProfit}-${allowableExpenses}-${class4Liable}`}
        >
          <ResultStat label="Total tax bill" value={formatCurrency(result.totalTaxBill, 2)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Income Tax" value={formatCurrency(result.incomeTax)} />
            <ResultStat label="Class 4 National Insurance" value={formatCurrency(result.class4NI)} />
            <ResultStat label="Effective rate" value={formatPercent(result.effectiveRate)} />
            <ResultStat label="Take-home profit" value={formatCurrency(result.takeHomeProfit)} />
          </div>
          {result.class2VoluntaryAvailable && (
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              Your net profit is below the small profits threshold, so Class 2
              National Insurance is not mandatory. You could pay{" "}
              {formatCurrency(result.class2VoluntaryAmount)} a year voluntarily to
              protect your State Pension record.
            </p>
          )}
        </ResultCard>
      </div>
    </div>
  );
}
