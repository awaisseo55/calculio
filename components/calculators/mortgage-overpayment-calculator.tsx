"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateMortgageOverpayment } from "@/lib/calc/mortgage-overpayment";
import { formatCurrency } from "@/lib/format";

export function MortgageOverpaymentCalculator() {
  const [balance, setBalance] = React.useState(200000);
  const [remainingTermYears, setRemainingTermYears] = React.useState(20);
  const [annualRate, setAnnualRate] = React.useState(4.5);
  const [monthlyOverpayment, setMonthlyOverpayment] = React.useState(200);

  const result = React.useMemo(
    () =>
      calculateMortgageOverpayment({
        balance,
        remainingTermYears,
        annualRate,
        monthlyOverpayment,
      }),
    [balance, remainingTermYears, annualRate, monthlyOverpayment]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="mo-balance">Current mortgage balance</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="mo-balance"
                type="number"
                min={0}
                value={balance}
                onChange={(e) => setBalance(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="mo-term">Remaining term (years)</Label>
              <Input
                id="mo-term"
                type="number"
                min={1}
                max={40}
                value={remainingTermYears}
                onChange={(e) => setRemainingTermYears(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="mo-rate">Interest rate</Label>
              <div className="relative">
                <Input
                  id="mo-rate"
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
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="mo-overpayment">Monthly overpayment</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="mo-overpayment"
                type="number"
                min={0}
                value={monthlyOverpayment}
                onChange={(e) => setMonthlyOverpayment(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Most UK lenders let you overpay up to 10% of your outstanding balance
              each year without an early repayment charge. Check your mortgage offer
              for your own limit.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${balance}-${remainingTermYears}-${annualRate}-${monthlyOverpayment}`}
        >
          <ResultStat label="Interest saved" value={formatCurrency(result.interestSaved)} emphasis positive />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat
              label="Time saved"
              value={`${Math.floor(result.monthsSaved / 12)}y ${result.monthsSaved % 12}m`}
            />
            <ResultStat label="New monthly payment" value={formatCurrency(result.newMonthlyPayment, 2)} />
            <ResultStat label="Standard total interest" value={formatCurrency(result.standardTotalInterest)} />
            <ResultStat label="New total interest" value={formatCurrency(result.newTotalInterest)} />
          </div>
        </ResultCard>
      </div>
    </div>
  );
}
