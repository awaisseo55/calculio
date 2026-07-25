"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateCarLoan } from "@/lib/calc/car-loan";
import { formatCurrency } from "@/lib/format";

export function CarLoanCalculator() {
  const [carPrice, setCarPrice] = React.useState(20000);
  const [deposit, setDeposit] = React.useState(2000);
  const [partExchangeValue, setPartExchangeValue] = React.useState(0);
  const [termYears, setTermYears] = React.useState(4);
  const [annualRatePercent, setAnnualRatePercent] = React.useState(8);
  const [balloonPayment, setBalloonPayment] = React.useState(0);

  const result = React.useMemo(
    () =>
      calculateCarLoan({
        carPrice,
        deposit,
        partExchangeValue,
        termYears,
        annualRatePercent,
        balloonPayment,
      }),
    [carPrice, deposit, partExchangeValue, termYears, annualRatePercent, balloonPayment]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="car-price">Car price</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="car-price"
                type="number"
                min={0}
                value={carPrice}
                onChange={(e) => setCarPrice(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="car-deposit">Deposit</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="car-deposit"
                  type="number"
                  min={0}
                  value={deposit}
                  onChange={(e) => setDeposit(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="car-part-exchange">Part-exchange value</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="car-part-exchange"
                  type="number"
                  min={0}
                  value={partExchangeValue}
                  onChange={(e) => setPartExchangeValue(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="car-term">Term (years)</Label>
              <Input
                id="car-term"
                type="number"
                min={1}
                max={7}
                value={termYears}
                onChange={(e) => setTermYears(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="car-apr">APR</Label>
              <div className="relative">
                <Input
                  id="car-apr"
                  type="number"
                  min={0}
                  step={0.1}
                  value={annualRatePercent}
                  onChange={(e) => setAnnualRatePercent(Number(e.target.value) || 0)}
                  className="h-11 pr-7 text-base"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="car-balloon">Balloon (final optional purchase) payment</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="car-balloon"
                type="number"
                min={0}
                value={balloonPayment}
                onChange={(e) => setBalloonPayment(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Leave this at £0 for a standard loan or Hire Purchase (HP) deal.
              Enter a balloon amount to model a PCP-style deal, where a lump sum
              is due at the end if you want to keep the car.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${carPrice}-${deposit}-${partExchangeValue}-${termYears}-${annualRatePercent}-${balloonPayment}`}
        >
          <ResultStat label="Monthly payment" value={formatCurrency(result.monthlyPayment, 2)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Amount financed" value={formatCurrency(result.amountFinanced)} />
            <ResultStat label="Total interest" value={formatCurrency(result.totalInterest)} />
            <ResultStat label="Total payable" value={formatCurrency(result.totalPayable)} />
            {balloonPayment > 0 && (
              <ResultStat label="Final balloon payment" value={formatCurrency(result.balloonPayment)} />
            )}
          </div>
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0">
            <h3 className="text-sm font-semibold text-foreground">Yearly summary</h3>
            <div className="mt-3 max-h-64 overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-card text-xs text-muted-foreground">
                  <tr>
                    <th className="py-1.5 text-left font-medium">Year</th>
                    <th className="py-1.5 text-right font-medium">Interest</th>
                    <th className="py-1.5 text-right font-medium">Principal</th>
                    <th className="py-1.5 text-right font-medium">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {result.yearlySummary.map((row) => (
                    <tr key={row.year} className="border-t border-border/60">
                      <td className="py-1.5 text-left text-muted-foreground">{row.year}</td>
                      <td className="py-1.5 text-right">{formatCurrency(row.interest)}</td>
                      <td className="py-1.5 text-right">{formatCurrency(row.principal)}</td>
                      <td className="py-1.5 text-right">{formatCurrency(row.balance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
