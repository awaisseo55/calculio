"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateMortgageAffordability } from "@/lib/calc/mortgage-affordability";
import { formatCurrency, formatPercent } from "@/lib/format";
import { MORTGAGE_AFFORDABILITY_INCOME_MULTIPLE } from "@/lib/calc/uk-rates";

export function MortgageAffordabilityCalculator() {
  const [applicant1Income, setApplicant1Income] = React.useState(38000);
  const [applicant2Income, setApplicant2Income] = React.useState(32000);
  const [monthlyCommitments, setMonthlyCommitments] = React.useState(150);
  const [deposit, setDeposit] = React.useState(30000);
  const [incomeMultiple, setIncomeMultiple] = React.useState(
    MORTGAGE_AFFORDABILITY_INCOME_MULTIPLE
  );
  const [interestRate, setInterestRate] = React.useState(4.5);
  const [termYears, setTermYears] = React.useState(25);

  const result = React.useMemo(
    () =>
      calculateMortgageAffordability({
        applicant1Income,
        applicant2Income,
        monthlyCommitments,
        deposit,
        incomeMultiple,
        interestRate,
        termYears,
      }),
    [applicant1Income, applicant2Income, monthlyCommitments, deposit, incomeMultiple, interestRate, termYears]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="income-1">Your annual income</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="income-1"
                  type="number"
                  min={0}
                  step={500}
                  value={applicant1Income}
                  onChange={(e) => setApplicant1Income(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="income-2">Joint applicant income</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="income-2"
                  type="number"
                  min={0}
                  step={500}
                  value={applicant2Income}
                  onChange={(e) => setApplicant2Income(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
              <p className="text-xs text-muted-foreground">Leave as 0 if applying alone</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="commitments">Existing monthly debt commitments</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="commitments"
                type="number"
                min={0}
                step={10}
                value={monthlyCommitments}
                onChange={(e) => setMonthlyCommitments(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Car finance, loans, credit card and buy-now-pay-later payments
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="deposit-amount">Deposit</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="deposit-amount"
                type="number"
                min={0}
                step={1000}
                value={deposit}
                onChange={(e) => setDeposit(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="income-multiple">Income multiple</Label>
              <div className="relative">
                <Input
                  id="income-multiple"
                  type="number"
                  min={2}
                  max={6}
                  step={0.1}
                  value={incomeMultiple}
                  onChange={(e) => setIncomeMultiple(Number(e.target.value) || 0)}
                  className="h-11 pr-6 text-base"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">x</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="afford-rate">Interest rate</Label>
              <div className="relative">
                <Input
                  id="afford-rate"
                  type="number"
                  min={0}
                  step={0.1}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value) || 0)}
                  className="h-11 pr-7 text-base"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="afford-term">Term</Label>
              <div className="relative">
                <Input
                  id="afford-term"
                  type="number"
                  min={5}
                  max={40}
                  value={termYears}
                  onChange={(e) => setTermYears(Number(e.target.value) || 0)}
                  className="h-11 pr-14 text-base"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">years</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${applicant1Income}-${applicant2Income}-${monthlyCommitments}-${deposit}-${incomeMultiple}-${interestRate}-${termYears}`}
        >
          <ResultStat
            label="Estimated maximum property price"
            value={formatCurrency(result.estimatedMaxPropertyPrice)}
            emphasis
          />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Estimated maximum loan" value={formatCurrency(result.estimatedMaxLoan)} />
            <ResultStat label="Combined income" value={formatCurrency(result.combinedIncome)} />
            <ResultStat label="Monthly repayment" value={formatCurrency(result.monthlyRepaymentAtRate, 2)} />
            <ResultStat label="Deposit share" value={formatPercent(result.depositPercent)} />
          </div>
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0">
            <h3 className="text-sm font-semibold text-foreground">Stress-tested affordability</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Lenders also check you could cope if rates rose. At a stressed rate of{" "}
              <span className="font-mono font-medium text-foreground">
                {formatPercent(result.stressTestRate, 1)}
              </span>
              , the same loan would cost{" "}
              <span className="font-mono font-medium text-foreground">
                {formatCurrency(result.monthlyRepaymentAtStressRate, 2)}
              </span>{" "}
              a month.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
