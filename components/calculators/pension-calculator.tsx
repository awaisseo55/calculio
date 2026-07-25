"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { RatesDisclaimer } from "@/components/calculators/rates-disclaimer";
import { calculatePension } from "@/lib/calc/pension";
import { formatCurrency } from "@/lib/format";

export function PensionCalculator() {
  const [currentAge, setCurrentAge] = React.useState(30);
  const [retirementAge, setRetirementAge] = React.useState(67);
  const [currentPot, setCurrentPot] = React.useState(15000);
  const [personalMonthlyContribution, setPersonalMonthlyContribution] = React.useState(300);
  const [employerMonthlyContribution, setEmployerMonthlyContribution] = React.useState(200);
  const [annualRatePercent, setAnnualRatePercent] = React.useState(5);
  const [targetAnnualIncome, setTargetAnnualIncome] = React.useState(25000);

  const result = React.useMemo(
    () =>
      calculatePension({
        currentAge,
        retirementAge,
        currentPot,
        personalMonthlyContribution,
        employerMonthlyContribution,
        annualRatePercent,
        targetAnnualIncome,
      }),
    [
      currentAge,
      retirementAge,
      currentPot,
      personalMonthlyContribution,
      employerMonthlyContribution,
      annualRatePercent,
      targetAnnualIncome,
    ]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="pension-current-age">Current age</Label>
              <Input
                id="pension-current-age"
                type="number"
                min={16}
                max={74}
                value={currentAge}
                onChange={(e) => setCurrentAge(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="pension-retirement-age">Retirement age</Label>
              <Input
                id="pension-retirement-age"
                type="number"
                min={55}
                max={75}
                value={retirementAge}
                onChange={(e) => setRetirementAge(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="pension-pot">Current pension pot</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="pension-pot"
                type="number"
                min={0}
                value={currentPot}
                onChange={(e) => setCurrentPot(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="pension-personal">Your monthly contribution</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="pension-personal"
                  type="number"
                  min={0}
                  value={personalMonthlyContribution}
                  onChange={(e) => setPersonalMonthlyContribution(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="pension-employer">Employer monthly contribution</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="pension-employer"
                  type="number"
                  min={0}
                  value={employerMonthlyContribution}
                  onChange={(e) => setEmployerMonthlyContribution(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="pension-rate">Expected annual return</Label>
              <div className="relative">
                <Input
                  id="pension-rate"
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
            <div className="flex flex-col gap-2">
              <Label htmlFor="pension-target">Target annual income</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="pension-target"
                  type="number"
                  min={0}
                  value={targetAnnualIncome}
                  onChange={(e) => setTargetAnnualIncome(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
          </div>

          <RatesDisclaimer>
            This is a general projection, not financial advice. Investment
            returns are never guaranteed and can fall as well as rise. For
            advice tailored to your situation, speak to a regulated financial
            adviser (FCA registered).
          </RatesDisclaimer>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${currentAge}-${retirementAge}-${currentPot}-${personalMonthlyContribution}-${employerMonthlyContribution}-${annualRatePercent}-${targetAnnualIncome}`}
        >
          <ResultStat label="Projected pension pot" value={formatCurrency(result.projectedPot, 0)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Total contributions" value={formatCurrency(result.totalContributions)} />
            <ResultStat label="Investment growth" value={formatCurrency(result.projectedGrowth)} positive />
            <ResultStat label="Est. annual income (4% rule)" value={formatCurrency(result.projectedAnnualIncome)} />
            <ResultStat label="Est. monthly income" value={formatCurrency(result.projectedMonthlyIncome)} />
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            {result.onTrack
              ? `Based on these figures, your projected income is on track to meet your ${formatCurrency(result.targetAnnualIncome)} target, before the State Pension.`
              : `Based on these figures, there is a gap of around ${formatCurrency(Math.abs(result.incomeGap))} a year against your target, before the State Pension.`}
          </p>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            The new State Pension is worth up to {formatCurrency(result.statePensionAnnual)} a
            year on top of this, for people with a full National Insurance record,
            giving a combined estimate of around{" "}
            {formatCurrency(result.combinedAnnualIncome)} a year.
          </p>
        </ResultCard>
      </div>
    </div>
  );
}
