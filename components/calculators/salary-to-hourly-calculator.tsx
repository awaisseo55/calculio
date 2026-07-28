"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { RatesDisclaimer } from "@/components/calculators/rates-disclaimer";
import { calculateSalaryToHourly } from "@/lib/calc/salary-to-hourly";
import { formatCurrency, formatNumber } from "@/lib/format";

export function SalaryToHourlyCalculator() {
  const [annualSalary, setAnnualSalary] = React.useState(32000);
  const [hoursPerWeek, setHoursPerWeek] = React.useState(37.5);
  const [weeksPerYear, setWeeksPerYear] = React.useState(52);
  const [holidayDaysPerYear, setHolidayDaysPerYear] = React.useState(28);
  const [sickDaysPerYear, setSickDaysPerYear] = React.useState(4);

  const result = React.useMemo(
    () =>
      calculateSalaryToHourly({
        annualSalary,
        hoursPerWeek,
        weeksPerYear,
        holidayDaysPerYear,
        sickDaysPerYear,
      }),
    [annualSalary, hoursPerWeek, weeksPerYear, holidayDaysPerYear, sickDaysPerYear]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="sh-salary">Annual salary</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="sh-salary"
                type="number"
                min={0}
                step={500}
                value={annualSalary}
                onChange={(e) => setAnnualSalary(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="sh-hours">Hours worked per week</Label>
              <Input
                id="sh-hours"
                type="number"
                min={1}
                max={80}
                step={0.5}
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="sh-weeks">Weeks worked per year</Label>
              <Input
                id="sh-weeks"
                type="number"
                min={1}
                max={52}
                value={weeksPerYear}
                onChange={(e) => setWeeksPerYear(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="sh-holiday">Holiday days per year</Label>
              <Input
                id="sh-holiday"
                type="number"
                min={0}
                max={60}
                value={holidayDaysPerYear}
                onChange={(e) => setHolidayDaysPerYear(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="sh-sick">Estimated sick days per year</Label>
              <Input
                id="sh-sick"
                type="number"
                min={0}
                max={60}
                value={sickDaysPerYear}
                onChange={(e) => setSickDaysPerYear(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
          </div>
          <p className="-mt-4 text-xs text-muted-foreground">
            28 days, including bank holidays, is the default statutory minimum
            holiday entitlement for a full-time UK worker.
          </p>

          <RatesDisclaimer>
            Tax is estimated using England, Wales and Northern Ireland Income
            Tax bands and standard employee National Insurance, with no
            pension contribution or student loan repayment deducted. Your own
            take-home pay may differ.
          </RatesDisclaimer>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${annualSalary}-${hoursPerWeek}-${weeksPerYear}-${holidayDaysPerYear}-${sickDaysPerYear}`}
        >
          <ResultStat label="Gross hourly rate" value={formatCurrency(result.grossHourlyRate, 2)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Net hourly rate" value={formatCurrency(result.netHourlyRate, 2)} />
            <ResultStat
              label="Net rate, working days only"
              value={formatCurrency(result.netHourlyRateWorkingDaysOnly, 2)}
            />
            <ResultStat label="Estimated annual net pay" value={formatCurrency(result.annualNetPay, 0)} />
            <ResultStat
              label="Vs National Living Wage"
              value={`${result.aboveNationalLivingWage ? "+" : ""}${formatCurrency(result.differenceFromNationalLivingWage, 2)}`}
              positive={result.aboveNationalLivingWage}
            />
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            The current National Living Wage for workers aged 21 and over is{" "}
            {formatCurrency(result.nationalLivingWage, 2)} an hour. Based on{" "}
            {formatNumber(result.actualWorkingDaysPerYear, 0)} actual working
            days a year after holiday and sick days, that&apos;s{" "}
            {formatNumber(result.actualWorkingHoursPerYear, 0)} working hours.
          </p>
        </ResultCard>
      </div>
    </div>
  );
}
