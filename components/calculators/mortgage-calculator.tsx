"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateMortgage } from "@/lib/calc/mortgage";
import { formatCurrency, formatPercent } from "@/lib/format";

export function MortgageCalculator() {
  const [propertyPrice, setPropertyPrice] = React.useState(300000);
  const [deposit, setDeposit] = React.useState(15);
  const [depositIsPercent, setDepositIsPercent] = React.useState(true);
  const [termYears, setTermYears] = React.useState(25);
  const [interestRate, setInterestRate] = React.useState(4.5);

  const result = React.useMemo(
    () =>
      calculateMortgage({
        propertyPrice,
        deposit,
        depositIsPercent,
        termYears,
        interestRate,
      }),
    [propertyPrice, deposit, depositIsPercent, termYears, interestRate]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="property-price">Property price</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="property-price"
                type="number"
                min={0}
                step={1000}
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="deposit">Deposit</Label>
              <Tabs
                value={depositIsPercent ? "percent" : "amount"}
                onValueChange={(v) => setDepositIsPercent(v === "percent")}
              >
                <TabsList>
                  <TabsTrigger value="percent">%</TabsTrigger>
                  <TabsTrigger value="amount">£</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                {depositIsPercent ? "%" : "£"}
              </span>
              <Input
                id="deposit"
                type="number"
                min={0}
                step={depositIsPercent ? 1 : 1000}
                value={deposit}
                onChange={(e) => setDeposit(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
            <p className="text-xs text-muted-foreground">
              = {formatCurrency(result.depositAmount)} deposit, {formatPercent(100 - result.loanToValue)} equity
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="term">Term (years)</Label>
              <Input
                id="term"
                type="number"
                min={1}
                max={40}
                value={termYears}
                onChange={(e) => setTermYears(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="rate">Interest rate (%)</Label>
              <Input
                id="rate"
                type="number"
                min={0}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${propertyPrice}-${deposit}-${depositIsPercent}-${termYears}-${interestRate}`}>
          <ResultStat label="Monthly repayment" value={formatCurrency(result.monthlyRepayment, 2)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Loan amount" value={formatCurrency(result.loanAmount)} />
            <ResultStat label="Loan to value" value={formatPercent(result.loanToValue)} />
            <ResultStat label="Total interest" value={formatCurrency(result.totalInterest)} />
            <ResultStat label="Total repaid" value={formatCurrency(result.totalRepaid)} />
          </div>
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0">
            <h3 className="text-sm font-semibold text-foreground">Yearly amortisation summary</h3>
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
                  {result.amortisation.map((row) => (
                    <tr key={row.year} className="border-t border-border/60">
                      <td className="py-1.5 text-left text-muted-foreground">{row.year}</td>
                      <td className="py-1.5 text-right">{formatCurrency(row.interestPaid)}</td>
                      <td className="py-1.5 text-right">{formatCurrency(row.principalPaid)}</td>
                      <td className="py-1.5 text-right">{formatCurrency(row.endingBalance)}</td>
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
