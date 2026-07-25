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
import { calculateIncomeTax, type TaxRegion } from "@/lib/calc/income-tax";
import { formatCurrency, formatPercent } from "@/lib/format";

const regions: { value: TaxRegion; label: string }[] = [
  { value: "england-wales-ni", label: "England, Wales or Northern Ireland" },
  { value: "scotland", label: "Scotland" },
];

export function IncomeTaxCalculator() {
  const [grossIncome, setGrossIncome] = React.useState(45000);
  const [region, setRegion] = React.useState<TaxRegion>("england-wales-ni");

  const result = React.useMemo(
    () => calculateIncomeTax({ grossIncome, region }),
    [grossIncome, region]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="income">Annual income</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="income"
                type="number"
                min={0}
                step={500}
                value={grossIncome}
                onChange={(e) => setGrossIncome(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="region">Region</Label>
            <Select value={region} onValueChange={(v) => setRegion(v as TaxRegion)}>
              <SelectTrigger id="region" className="h-11 w-full text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {regions.map((r) => (
                  <SelectItem key={r.value} value={r.value}>
                    {r.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <RatesDisclaimer />
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${grossIncome}-${region}`}>
          <ResultStat label="Total Income Tax" value={formatCurrency(result.totalTax)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Personal allowance" value={formatCurrency(result.personalAllowance)} />
            <ResultStat label="Taxable income" value={formatCurrency(result.taxableIncome)} />
            <ResultStat label="Effective rate" value={formatPercent(result.effectiveRate)} />
            <ResultStat label="Income after tax" value={formatCurrency(result.incomeAfterTax)} />
          </div>
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0">
            <h3 className="text-sm font-semibold text-foreground">Tax by band</h3>
            <div className="mt-3 flex flex-col gap-2">
              {result.bands.length === 0 ? (
                <p className="text-sm text-muted-foreground">No tax due — income is within your personal allowance.</p>
              ) : (
                result.bands.map((band) => (
                  <div
                    key={band.name}
                    className="flex items-center justify-between border-t border-border/60 py-2 text-sm first:border-t-0"
                  >
                    <span className="text-muted-foreground">
                      {band.name} ({formatPercent(band.rate * 100, 0)} on {formatCurrency(band.taxableAmount)})
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
