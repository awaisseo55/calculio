"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateRentAffordability } from "@/lib/calc/rent-affordability";
import { formatCurrency, formatPercent } from "@/lib/format";

export function RentAffordabilityCalculator() {
  const [grossAnnualIncome, setGrossAnnualIncome] = React.useState(42000);
  const [monthlyTakeHomePay, setMonthlyTakeHomePay] = React.useState(2800);
  const [monthlyBills, setMonthlyBills] = React.useState(650);
  const [monthlyDebtPayments, setMonthlyDebtPayments] = React.useState(150);
  const [targetRent, setTargetRent] = React.useState(1200);

  const result = React.useMemo(
    () => calculateRentAffordability({ grossAnnualIncome, monthlyTakeHomePay, monthlyBills, monthlyDebtPayments, targetRent }),
    [grossAnnualIncome, monthlyTakeHomePay, monthlyBills, monthlyDebtPayments, targetRent]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="grid grid-cols-1 gap-5 p-0 sm:grid-cols-2">
          {[
            ["rent-income", "Gross annual income", grossAnnualIncome, setGrossAnnualIncome, 500],
            ["rent-net", "Monthly take-home pay", monthlyTakeHomePay, setMonthlyTakeHomePay, 50],
            ["rent-bills", "Monthly bills excluding rent", monthlyBills, setMonthlyBills, 25],
            ["rent-debt", "Monthly debt payments", monthlyDebtPayments, setMonthlyDebtPayments, 25],
            ["rent-target", "Rent you want to check", targetRent, setTargetRent, 25],
          ].map(([id, label, value, setter, step]) => (
            <div className="flex flex-col gap-2" key={id as string}>
              <Label htmlFor={id as string}>{label as string}</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input id={id as string} type="number" min={0} step={step as number} value={value as number} onChange={(e) => (setter as React.Dispatch<React.SetStateAction<number>>)(Number(e.target.value) || 0)} className="h-11 pl-7 text-base" />
              </div>
            </div>
          ))}
          <p className="text-xs text-muted-foreground sm:col-span-2">
            This is a budgeting estimate. Letting agents and landlords can use their own affordability checks.
          </p>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${grossAnnualIncome}-${monthlyTakeHomePay}-${monthlyBills}-${monthlyDebtPayments}-${targetRent}`}>
          <ResultStat label="Suggested maximum rent" value={formatCurrency(result.suggestedMaxRent, 0)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="30% gross income rule" value={formatCurrency(result.thirtyPercentGrossRent, 0)} />
            <ResultStat label="30x income rule" value={formatCurrency(result.agentMultiplierRent, 0)} />
            <ResultStat label="Target rent as net pay" value={formatPercent(result.rentShareOfNetPercent, 1)} />
            <ResultStat label="Cash left after rent" value={formatCurrency(result.cashLeftAfterRent, 0)} positive={result.cashLeftAfterRent >= 0} />
          </div>
        </ResultCard>
      </div>
    </div>
  );
}
