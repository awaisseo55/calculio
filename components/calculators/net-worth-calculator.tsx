"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateNetWorth } from "@/lib/calc/net-worth";
import { formatCurrency, formatPercent } from "@/lib/format";

export function NetWorthCalculator() {
  const [cashSavings, setCashSavings] = React.useState(8000);
  const [investments, setInvestments] = React.useState(12000);
  const [pensionValue, setPensionValue] = React.useState(45000);
  const [propertyValue, setPropertyValue] = React.useState(260000);
  const [otherAssets, setOtherAssets] = React.useState(5000);
  const [mortgageBalance, setMortgageBalance] = React.useState(190000);
  const [otherDebts, setOtherDebts] = React.useState(4000);

  const result = React.useMemo(
    () => calculateNetWorth({ cashSavings, investments, pensionValue, propertyValue, otherAssets, mortgageBalance, otherDebts }),
    [cashSavings, investments, pensionValue, propertyValue, otherAssets, mortgageBalance, otherDebts]
  );

  const fields = [
    ["nw-cash", "Cash savings", cashSavings, setCashSavings],
    ["nw-investments", "Investments", investments, setInvestments],
    ["nw-pension", "Pension value", pensionValue, setPensionValue],
    ["nw-property", "Property value", propertyValue, setPropertyValue],
    ["nw-other-assets", "Other assets", otherAssets, setOtherAssets],
    ["nw-mortgage", "Mortgage balance", mortgageBalance, setMortgageBalance],
    ["nw-debts", "Other debts", otherDebts, setOtherDebts],
  ] as const;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="grid grid-cols-1 gap-5 p-0 sm:grid-cols-2">
          {fields.map(([id, label, value, setter]) => (
            <div className="flex flex-col gap-2" key={id}>
              <Label htmlFor={id}>{label}</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input id={id} type="number" min={0} step={500} value={value} onChange={(e) => setter(Number(e.target.value) || 0)} className="h-11 pl-7 text-base" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${cashSavings}-${investments}-${pensionValue}-${propertyValue}-${otherAssets}-${mortgageBalance}-${otherDebts}`}>
          <ResultStat label="Estimated net worth" value={formatCurrency(result.netWorth, 0)} emphasis positive={result.netWorth >= 0} />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Total assets" value={formatCurrency(result.totalAssets, 0)} />
            <ResultStat label="Total debts" value={formatCurrency(result.totalDebts, 0)} />
            <ResultStat label="Home equity" value={formatCurrency(result.homeEquity, 0)} />
            <ResultStat label="Debt to assets" value={formatPercent(result.debtToAssetPercent, 1)} />
          </div>
        </ResultCard>
      </div>
    </div>
  );
}
