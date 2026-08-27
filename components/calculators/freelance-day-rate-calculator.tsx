"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateFreelanceDayRate } from "@/lib/calc/freelance-day-rate";
import { formatCurrency, formatNumber } from "@/lib/format";

export function FreelanceDayRateCalculator() {
  const [desiredAnnualIncome, setDesiredAnnualIncome] = React.useState(45000);
  const [annualExpenses, setAnnualExpenses] = React.useState(5000);
  const [workingWeeksPerYear, setWorkingWeeksPerYear] = React.useState(46);
  const [workingDaysPerWeek, setWorkingDaysPerWeek] = React.useState(5);
  const [nonBillablePercent, setNonBillablePercent] = React.useState(20);
  const [bufferPercent, setBufferPercent] = React.useState(10);
  const [hoursPerDay, setHoursPerDay] = React.useState(7.5);

  const result = React.useMemo(
    () =>
      calculateFreelanceDayRate({
        desiredAnnualIncome,
        annualExpenses,
        workingWeeksPerYear,
        workingDaysPerWeek,
        nonBillablePercent,
        bufferPercent,
        hoursPerDay,
      }),
    [desiredAnnualIncome, annualExpenses, workingWeeksPerYear, workingDaysPerWeek, nonBillablePercent, bufferPercent, hoursPerDay]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="fdr-income">Desired annual income</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">£</span>
              <Input
                id="fdr-income"
                type="number"
                min={0}
                step={1000}
                value={desiredAnnualIncome}
                onChange={(e) => setDesiredAnnualIncome(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
            <p className="text-xs text-muted-foreground">What you want to earn before tax, roughly equivalent to a salary</p>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="fdr-expenses">Annual business expenses</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">£</span>
              <Input
                id="fdr-expenses"
                type="number"
                min={0}
                step={500}
                value={annualExpenses}
                onChange={(e) => setAnnualExpenses(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
            <p className="text-xs text-muted-foreground">Software, insurance, equipment, accountancy fees and similar costs</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="fdr-weeks">Working weeks a year</Label>
              <Input
                id="fdr-weeks"
                type="number"
                min={1}
                max={52}
                step={1}
                value={workingWeeksPerYear}
                onChange={(e) => setWorkingWeeksPerYear(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="fdr-days">Working days a week</Label>
              <Input
                id="fdr-days"
                type="number"
                min={1}
                max={7}
                step={1}
                value={workingDaysPerWeek}
                onChange={(e) => setWorkingDaysPerWeek(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="fdr-nonbillable">Non-billable time</Label>
            <div className="relative">
              <Input
                id="fdr-nonbillable"
                type="number"
                min={0}
                max={90}
                step={5}
                value={nonBillablePercent}
                onChange={(e) => setNonBillablePercent(Number(e.target.value) || 0)}
                className="h-11 pr-9 text-base"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">%</span>
            </div>
            <p className="text-xs text-muted-foreground">Time spent on admin, marketing and finding work, not billed to clients</p>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="fdr-buffer">Buffer for gaps and downtime</Label>
            <div className="relative">
              <Input
                id="fdr-buffer"
                type="number"
                min={0}
                max={100}
                step={5}
                value={bufferPercent}
                onChange={(e) => setBufferPercent(Number(e.target.value) || 0)}
                className="h-11 pr-9 text-base"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">%</span>
            </div>
            <p className="text-xs text-muted-foreground">A cushion for holidays, sick days and quiet periods between contracts</p>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="fdr-hours">Hours per working day</Label>
            <Input
              id="fdr-hours"
              type="number"
              min={1}
              max={12}
              step={0.5}
              value={hoursPerDay}
              onChange={(e) => setHoursPerDay(Number(e.target.value) || 0)}
              className="h-11 text-base"
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${desiredAnnualIncome}-${annualExpenses}-${workingWeeksPerYear}-${workingDaysPerWeek}-${nonBillablePercent}-${bufferPercent}-${hoursPerDay}`}
        >
          <ResultStat label="Suggested day rate" value={formatCurrency(result.dayRate, 2)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Hourly rate" value={formatCurrency(result.hourlyRate, 2)} />
            <ResultStat label="Billable days a year" value={formatNumber(result.billableDays, 0)} />
          </div>
          <div className="mt-6">
            <ResultStat label="Annual revenue target" value={formatCurrency(result.annualRevenueTarget, 0)} />
          </div>
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0 text-sm text-muted-foreground">
            This is a general estimate, not accountancy advice. It does not account for Income Tax, National
            Insurance or VAT, which you will need to budget for separately. Speak to a qualified accountant for
            advice specific to your circumstances.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
