"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateSavingsGoal } from "@/lib/calc/savings-goal";
import { formatCurrency } from "@/lib/format";

export function SavingsGoalCalculator() {
  const [targetAmount, setTargetAmount] = React.useState(10000);
  const [currentSavings, setCurrentSavings] = React.useState(1000);
  const [monthlyContribution, setMonthlyContribution] = React.useState(200);
  const [annualRate, setAnnualRate] = React.useState(4);

  const result = React.useMemo(
    () =>
      calculateSavingsGoal({ targetAmount, currentSavings, monthlyContribution, annualRate }),
    [targetAmount, currentSavings, monthlyContribution, annualRate]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="target-amount">Target amount</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="target-amount"
                type="number"
                min={0}
                value={targetAmount}
                onChange={(e) => setTargetAmount(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="current-savings">Current savings</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="current-savings"
                type="number"
                min={0}
                value={currentSavings}
                onChange={(e) => setCurrentSavings(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="monthly-contribution">Monthly contribution</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="monthly-contribution"
                type="number"
                min={0}
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="annual-rate">Annual interest rate</Label>
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
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${targetAmount}-${currentSavings}-${monthlyContribution}-${annualRate}`}
        >
          {result.reachable ? (
            <>
              <ResultStat
                label="Time to reach your goal"
                value={`${result.years}y ${result.months}m`}
                emphasis
                positive
              />
              <div className="mt-6 grid grid-cols-2 gap-6">
                <ResultStat label="Total contributions" value={formatCurrency(result.totalContributions)} />
                <ResultStat label="Total interest earned" value={formatCurrency(result.totalInterest)} />
              </div>
            </>
          ) : (
            <p className="text-sm text-muted-foreground">
              At this rate of saving, your goal is more than 100 years away. Try
              increasing your monthly contribution or starting balance.
            </p>
          )}
        </ResultCard>
      </div>
    </div>
  );
}
