"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateDebtToIncome } from "@/lib/calc/debt-to-income";
import { formatCurrency, formatPercent } from "@/lib/format";

export function DebtToIncomeCalculator() {
  const [grossAnnualIncome, setGrossAnnualIncome] = React.useState(45000);
  const [rentOrMortgage, setRentOrMortgage] = React.useState(950);
  const [creditCardPayments, setCreditCardPayments] = React.useState(120);
  const [loanPayments, setLoanPayments] = React.useState(180);
  const [carFinance, setCarFinance] = React.useState(220);
  const [otherDebtPayments, setOtherDebtPayments] = React.useState(0);

  const result = React.useMemo(
    () => calculateDebtToIncome({ grossAnnualIncome, rentOrMortgage, creditCardPayments, loanPayments, carFinance, otherDebtPayments }),
    [grossAnnualIncome, rentOrMortgage, creditCardPayments, loanPayments, carFinance, otherDebtPayments]
  );

  const fields = [
    ["dti-income", "Gross annual income", grossAnnualIncome, setGrossAnnualIncome, 500],
    ["dti-housing", "Rent or mortgage", rentOrMortgage, setRentOrMortgage, 25],
    ["dti-cards", "Credit card minimums", creditCardPayments, setCreditCardPayments, 10],
    ["dti-loans", "Loan payments", loanPayments, setLoanPayments, 10],
    ["dti-car", "Car finance", carFinance, setCarFinance, 10],
    ["dti-other", "Other debt payments", otherDebtPayments, setOtherDebtPayments, 10],
  ] as const;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="grid grid-cols-1 gap-5 p-0 sm:grid-cols-2">
          {fields.map(([id, label, value, setter, step]) => (
            <div className="flex flex-col gap-2" key={id}>
              <Label htmlFor={id}>{label}</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input id={id} type="number" min={0} step={step} value={value} onChange={(e) => setter(Number(e.target.value) || 0)} className="h-11 pl-7 text-base" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${grossAnnualIncome}-${rentOrMortgage}-${creditCardPayments}-${loanPayments}-${carFinance}-${otherDebtPayments}`}>
          <ResultStat label="Debt-to-income ratio" value={formatPercent(result.dtiPercent, 1)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Band" value={result.band} />
            <ResultStat label="Monthly gross income" value={formatCurrency(result.monthlyGrossIncome, 0)} />
            <ResultStat label="Debt payments" value={formatCurrency(result.totalDebtPayments, 0)} />
            <ResultStat label="Housing ratio" value={formatPercent(result.housingRatioPercent, 1)} />
          </div>
        </ResultCard>
      </div>
    </div>
  );
}
