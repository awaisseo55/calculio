"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { RatesDisclaimer } from "@/components/calculators/rates-disclaimer";
import { calculateDividendTax } from "@/lib/calc/dividend-tax";
import { formatCurrency, formatPercent } from "@/lib/format";

export function DividendTaxCalculator() {
  const [salary, setSalary] = React.useState(30000);
  const [dividendIncome, setDividendIncome] = React.useState(20000);

  const result = React.useMemo(
    () => calculateDividendTax({ salary, dividendIncome }),
    [salary, dividendIncome]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="dt-salary">Annual salary</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="dt-salary"
                type="number"
                min={0}
                value={salary}
                onChange={(e) => setSalary(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="dt-dividends">Dividend income</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="dt-dividends"
                type="number"
                min={0}
                value={dividendIncome}
                onChange={(e) => setDividendIncome(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <RatesDisclaimer />
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${salary}-${dividendIncome}`}>
          <ResultStat label="Total dividend tax" value={formatCurrency(result.totalDividendTax, 2)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Personal allowance" value={formatCurrency(result.personalAllowance)} />
            <ResultStat label="Dividend allowance used" value={formatCurrency(result.dividendAllowanceUsed)} />
            <ResultStat label="Taxable dividends" value={formatCurrency(result.taxableDividends)} />
          </div>
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0">
            <h3 className="text-sm font-semibold text-foreground">Tax by band</h3>
            <div className="mt-3 flex flex-col gap-2">
              {result.bands.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  No dividend tax due. Your dividends fall within your personal and
                  dividend allowances.
                </p>
              ) : (
                result.bands.map((band) => (
                  <div
                    key={band.name}
                    className="flex items-center justify-between border-t border-border/60 py-2 text-sm first:border-t-0"
                  >
                    <span className="text-muted-foreground">
                      {band.name} ({formatPercent(band.rate * 100, 2)} on {formatCurrency(band.amount)})
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
