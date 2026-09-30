"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateRemortgageComparison } from "@/lib/calc/remortgage-comparison";
import { formatCurrency, formatNumber } from "@/lib/format";

export function RemortgageComparisonCalculator() {
  const [mortgageBalance, setMortgageBalance] = React.useState(220000);
  const [remainingTermYears, setRemainingTermYears] = React.useState(25);
  const [currentRatePercent, setCurrentRatePercent] = React.useState(6.5);
  const [newRatePercent, setNewRatePercent] = React.useState(4.8);
  const [productFee, setProductFee] = React.useState(999);
  const [exitFees, setExitFees] = React.useState(0);
  const [comparisonYears, setComparisonYears] = React.useState(2);

  const result = React.useMemo(
    () => calculateRemortgageComparison({ mortgageBalance, remainingTermYears, currentRatePercent, newRatePercent, productFee, exitFees, comparisonYears }),
    [mortgageBalance, remainingTermYears, currentRatePercent, newRatePercent, productFee, exitFees, comparisonYears]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="grid grid-cols-1 gap-5 p-0 sm:grid-cols-2">
          <MoneyField id="remortgage-balance" label="Mortgage balance" value={mortgageBalance} setter={setMortgageBalance} step={1000} />
          <NumberField id="remortgage-term" label="Remaining term" value={remainingTermYears} setter={setRemainingTermYears} suffix="years" step={1} />
          <NumberField id="remortgage-current-rate" label="Current or SVR rate" value={currentRatePercent} setter={setCurrentRatePercent} suffix="%" step={0.1} />
          <NumberField id="remortgage-new-rate" label="New deal rate" value={newRatePercent} setter={setNewRatePercent} suffix="%" step={0.1} />
          <MoneyField id="remortgage-fee" label="Product fee" value={productFee} setter={setProductFee} step={50} />
          <MoneyField id="remortgage-exit" label="Exit or legal fees" value={exitFees} setter={setExitFees} step={50} />
          <NumberField id="remortgage-years" label="Compare over" value={comparisonYears} setter={setComparisonYears} suffix="years" step={1} />
        </CardContent>
      </Card>
      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${mortgageBalance}-${remainingTermYears}-${currentRatePercent}-${newRatePercent}-${productFee}-${exitFees}-${comparisonYears}`}>
          <ResultStat label="Estimated saving over comparison period" value={formatCurrency(result.totalSavingOverPeriod, 0)} emphasis positive={result.totalSavingOverPeriod > 0} />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Current monthly payment" value={formatCurrency(result.currentMonthlyPayment, 0)} />
            <ResultStat label="New monthly payment" value={formatCurrency(result.newMonthlyPayment, 0)} />
            <ResultStat label="Monthly saving" value={formatCurrency(result.monthlySaving, 0)} positive={result.monthlySaving > 0} />
            <ResultStat label="Break-even point" value={result.breakEvenMonths === null ? "No saving" : `${formatNumber(result.breakEvenMonths, 1)} months`} />
          </div>
        </ResultCard>
      </div>
    </div>
  );
}

function MoneyField({ id, label, value, setter, step }: { id: string; label: string; value: number; setter: React.Dispatch<React.SetStateAction<number>>; step: number }) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
        <Input id={id} type="number" min={0} step={step} value={value} onChange={(e) => setter(Number(e.target.value) || 0)} className="h-11 pl-7 text-base" />
      </div>
    </div>
  );
}

function NumberField({ id, label, value, setter, suffix, step }: { id: string; label: string; value: number; setter: React.Dispatch<React.SetStateAction<number>>; suffix: string; step: number }) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <Input id={id} type="number" min={0} step={step} value={value} onChange={(e) => setter(Number(e.target.value) || 0)} className="h-11 pr-14 text-base" />
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">{suffix}</span>
      </div>
    </div>
  );
}
