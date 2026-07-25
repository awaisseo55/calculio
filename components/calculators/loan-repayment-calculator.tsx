"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateLoanRepayment } from "@/lib/calc/loan-repayment";
import { formatCurrency, formatDate } from "@/lib/format";

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

export function LoanRepaymentCalculator() {
  const [loanAmount, setLoanAmount] = React.useState(10000);
  const [annualRate, setAnnualRate] = React.useState(8);
  const [termYears, setTermYears] = React.useState(5);
  const [startDate, setStartDate] = React.useState(todayIso());

  const result = React.useMemo(
    () => calculateLoanRepayment({ loanAmount, annualRate, termYears, startDate }),
    [loanAmount, annualRate, termYears, startDate]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="loan-amount">Loan amount</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="loan-amount"
                type="number"
                min={0}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="annual-rate">Interest rate</Label>
              <div className="relative">
                <Input
                  id="annual-rate"
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
            <div className="flex flex-col gap-2">
              <Label htmlFor="term-years">Term (years)</Label>
              <Input
                id="term-years"
                type="number"
                min={1}
                max={30}
                value={termYears}
                onChange={(e) => setTermYears(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="start-date">Start date</Label>
            <Input
              id="start-date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="h-11 text-base"
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${loanAmount}-${annualRate}-${termYears}-${startDate}`}>
          <ResultStat label="Monthly repayment" value={formatCurrency(result.monthlyPayment, 2)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Total interest" value={formatCurrency(result.totalInterest)} />
            <ResultStat label="Total repaid" value={formatCurrency(result.totalRepaid)} />
          </div>
          <div className="mt-6">
            <ResultStat label="Payoff date" value={formatDate(result.payoffDate)} />
          </div>
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0">
            <h3 className="text-sm font-semibold text-foreground">First 12 months</h3>
            <div className="mt-3 max-h-64 overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-card text-xs text-muted-foreground">
                  <tr>
                    <th className="py-1.5 text-left font-medium">Month</th>
                    <th className="py-1.5 text-right font-medium">Interest</th>
                    <th className="py-1.5 text-right font-medium">Principal</th>
                    <th className="py-1.5 text-right font-medium">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {result.firstYearSchedule.map((row) => (
                    <tr key={row.month} className="border-t border-border/60">
                      <td className="py-1.5 text-left text-muted-foreground">{row.month}</td>
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
