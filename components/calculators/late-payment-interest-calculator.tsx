"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateLatePaymentInterest } from "@/lib/calc/late-payment-interest";
import { formatCurrency, formatPercent } from "@/lib/format";

export function LatePaymentInterestCalculator() {
  const [debtAmount, setDebtAmount] = React.useState(2500);
  const [baseRatePercent, setBaseRatePercent] = React.useState(4);
  const [daysOverdue, setDaysOverdue] = React.useState(30);

  const result = React.useMemo(
    () => calculateLatePaymentInterest({ debtAmount, baseRatePercent, daysOverdue }),
    [debtAmount, baseRatePercent, daysOverdue]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="lpi-debt">Overdue invoice amount</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="lpi-debt"
                type="number"
                min={0}
                step={50}
                value={debtAmount}
                onChange={(e) => setDebtAmount(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="lpi-baserate">Bank of England base rate</Label>
              <div className="relative">
                <Input
                  id="lpi-baserate"
                  type="number"
                  min={0}
                  step={0.25}
                  value={baseRatePercent}
                  onChange={(e) => setBaseRatePercent(Number(e.target.value) || 0)}
                  className="h-11 pr-8 text-base"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="lpi-days">Days overdue</Label>
              <Input
                id="lpi-days"
                type="number"
                min={0}
                step={1}
                value={daysOverdue}
                onChange={(e) => setDaysOverdue(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Check the current base rate at bankofengland.co.uk; it changes independently of the tax year
          </p>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${debtAmount}-${baseRatePercent}-${daysOverdue}`}>
          <ResultStat label="Total you can claim" value={formatCurrency(result.totalOwed, 2)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Statutory interest" value={formatCurrency(result.totalInterest, 2)} />
            <ResultStat label="Fixed compensation" value={formatCurrency(result.compensationFee)} />
            <ResultStat label="Annual interest rate" value={formatPercent(result.annualRatePercent)} />
            <ResultStat label="Interest per day" value={formatCurrency(result.dailyInterest, 2)} />
          </div>
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0 text-sm text-muted-foreground">
            Based on the Late Payment of Commercial Debts (Interest) Act 1998: statutory interest of base rate plus
            8% a year, plus fixed compensation of £40, £70 or £100 depending on the debt size. This applies to
            business-to-business debts only, not consumer debts.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
