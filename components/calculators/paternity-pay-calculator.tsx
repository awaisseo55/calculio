"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import {
  calculatePaternityPay,
  type PaternityEmployerPolicy,
} from "@/lib/calc/paternity-pay";
import { formatCurrency } from "@/lib/format";

export function PaternityPayCalculator() {
  const [weeklyEarnings, setWeeklyEarnings] = React.useState(650);
  const [weeksTaken, setWeeksTaken] = React.useState(2);
  const [employerPolicy, setEmployerPolicy] = React.useState<PaternityEmployerPolicy>("statutory-only");
  const [enhancedWeeklyAmount, setEnhancedWeeklyAmount] = React.useState(650);

  const result = React.useMemo(
    () =>
      calculatePaternityPay({
        weeklyEarnings,
        weeksTaken,
        employerPolicy,
        enhancedWeeklyAmount,
      }),
    [weeklyEarnings, weeksTaken, employerPolicy, enhancedWeeklyAmount]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="pp-earnings">Your average weekly earnings</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="pp-earnings"
                type="number"
                min={0}
                step={10}
                value={weeklyEarnings}
                onChange={(e) => setWeeklyEarnings(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Average gross weekly pay over the 8 weeks before the qualifying week
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Weeks of paternity leave</Label>
            <Tabs value={String(weeksTaken)} onValueChange={(v) => setWeeksTaken(Number(v))}>
              <TabsList className="w-full">
                <TabsTrigger value="1" className="flex-1">1 week</TabsTrigger>
                <TabsTrigger value="2" className="flex-1">2 weeks</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Employer policy</Label>
            <Tabs
              value={employerPolicy}
              onValueChange={(v) => setEmployerPolicy(v as PaternityEmployerPolicy)}
            >
              <TabsList className="w-full">
                <TabsTrigger value="statutory-only" className="flex-1">Statutory only</TabsTrigger>
                <TabsTrigger value="enhanced" className="flex-1">Enhanced pay</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {employerPolicy === "enhanced" && (
            <div className="flex flex-col gap-2">
              <Label htmlFor="pp-enhanced">Enhanced weekly pay from employer</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="pp-enhanced"
                  type="number"
                  min={0}
                  step={10}
                  value={enhancedWeeklyAmount}
                  onChange={(e) => setEnhancedWeeklyAmount(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${weeklyEarnings}-${weeksTaken}-${employerPolicy}-${enhancedWeeklyAmount}`}
        >
          <ResultStat label="Total pay for your leave" value={formatCurrency(result.totalPay, 2)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Statutory weekly rate" value={formatCurrency(result.statutoryWeeklyRate, 2)} />
            <ResultStat label="Weeks taken" value={`${result.weeksTaken}`} />
            <ResultStat label="Statutory total (before any top-up)" value={formatCurrency(result.totalStatutoryPay, 2)} />
            {result.payingFullPay && (
              <ResultStat label="Employer weekly rate" value={formatCurrency(result.fullPayWeeklyAmount, 2)} />
            )}
          </div>
        </ResultCard>

        {result.isBelowLowerEarningsLimit && (
          <Card className="border-primary/30 bg-primary/5 p-6">
            <CardContent className="p-0 text-sm text-muted-foreground">
              Your average weekly earnings look below the Lower Earnings
              Limit, so you may not qualify for Statutory Paternity Pay.
              Check your eligibility on GOV.UK, since other support may be
              available instead.
            </CardContent>
          </Card>
        )}

        <Card className="p-6">
          <CardContent className="p-0 text-sm text-muted-foreground">
            Paternity pay is taxed and National Insurance is deducted the
            same as your normal wages, alongside any other pay you receive
            in the same period, so the amounts shown here are gross figures
            before deductions.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
