"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateCorporationTax } from "@/lib/calc/corporation-tax";
import { formatCurrency, formatPercent } from "@/lib/format";

const bandLabels = {
  "small-profits": "Small profits rate (19%)",
  "marginal-relief": "Marginal relief band",
  "main-rate": "Main rate (25%)",
};

export function CorporationTaxCalculator() {
  const [annualProfit, setAnnualProfit] = React.useState(80000);

  const result = React.useMemo(
    () => calculateCorporationTax({ annualProfit }),
    [annualProfit]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="ct-profit">Annual taxable profit</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="ct-profit"
                type="number"
                min={0}
                step={500}
                value={annualProfit}
                onChange={(e) => setAnnualProfit(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Profit chargeable to Corporation Tax, after allowable business expenses
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={annualProfit}>
          <ResultStat label="Corporation Tax due" value={formatCurrency(result.corporationTax, 2)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Profit after tax" value={formatCurrency(result.profitAfterTax, 2)} positive />
            <ResultStat label="Effective rate" value={formatPercent(result.effectiveRatePercent, 2)} />
            <ResultStat label="Band" value={bandLabels[result.band]} />
            {result.marginalReliefApplied > 0 && (
              <ResultStat label="Marginal relief" value={formatCurrency(result.marginalReliefApplied, 2)} />
            )}
          </div>
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0 text-sm text-muted-foreground">
            Profits up to £50,000 pay the 19% small profits rate. Profits of
            £250,000 or more pay the 25% main rate. Profits in between get
            marginal relief, which smooths the effective rate between the two.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
