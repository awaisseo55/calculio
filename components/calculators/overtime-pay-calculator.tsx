"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateOvertimePay } from "@/lib/calc/overtime-pay";
import { formatCurrency } from "@/lib/format";
import { cn } from "@/lib/utils";

const presetMultipliers = [
  { label: "Time and a quarter", value: 1.25 },
  { label: "Time and a half", value: 1.5 },
  { label: "Double time", value: 2 },
];

export function OvertimePayCalculator() {
  const [baseHourlyRate, setBaseHourlyRate] = React.useState(14.5);
  const [standardHoursPerWeek, setStandardHoursPerWeek] = React.useState(37.5);
  const [overtimeHours, setOvertimeHours] = React.useState(6);
  const [overtimeMultiplier, setOvertimeMultiplier] = React.useState(1.5);

  const result = React.useMemo(
    () =>
      calculateOvertimePay({
        baseHourlyRate,
        standardHoursPerWeek,
        overtimeHours,
        overtimeMultiplier,
      }),
    [baseHourlyRate, standardHoursPerWeek, overtimeHours, overtimeMultiplier]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="ot-rate">Base hourly rate</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="ot-rate"
                  type="number"
                  min={0}
                  step={0.01}
                  value={baseHourlyRate}
                  onChange={(e) => setBaseHourlyRate(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="ot-standard-hours">Standard hours/week</Label>
              <Input
                id="ot-standard-hours"
                type="number"
                min={0}
                max={80}
                step={0.5}
                value={standardHoursPerWeek}
                onChange={(e) => setStandardHoursPerWeek(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="ot-hours">Overtime hours this week</Label>
            <Input
              id="ot-hours"
              type="number"
              min={0}
              max={80}
              step={0.5}
              value={overtimeHours}
              onChange={(e) => setOvertimeHours(Number(e.target.value) || 0)}
              className="h-11 text-base"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="ot-multiplier">Overtime rate</Label>
            <div className="flex flex-wrap gap-2">
              {presetMultipliers.map((preset) => (
                <button
                  key={preset.value}
                  type="button"
                  onClick={() => setOvertimeMultiplier(preset.value)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition",
                    overtimeMultiplier === preset.value
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:text-foreground"
                  )}
                >
                  {preset.label}
                </button>
              ))}
            </div>
            <div className="relative mt-1">
              <Input
                id="ot-multiplier"
                type="number"
                min={1}
                step={0.05}
                value={overtimeMultiplier}
                onChange={(e) => setOvertimeMultiplier(Number(e.target.value) || 0)}
                className="h-11 pr-7 text-base"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">x</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${baseHourlyRate}-${standardHoursPerWeek}-${overtimeHours}-${overtimeMultiplier}`}
        >
          <ResultStat label="Total pay this week" value={formatCurrency(result.totalWeeklyPay, 2)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Standard pay" value={formatCurrency(result.standardPay, 2)} />
            <ResultStat label="Overtime pay" value={formatCurrency(result.overtimePay, 2)} positive />
            <ResultStat label="Overtime hourly rate" value={formatCurrency(result.overtimeHourlyRate, 2)} />
            <ResultStat label="Effective hourly rate" value={formatCurrency(result.effectiveHourlyRate, 2)} />
          </div>
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0">
            <h3 className="text-sm font-semibold text-foreground">If this overtime continued all year</h3>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Annual standard pay</span>
                <span className="font-mono">{formatCurrency(result.annualStandardPay)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Annual overtime pay</span>
                <span className="font-mono">{formatCurrency(result.annualOvertimePay)}</span>
              </div>
              <div className="flex justify-between border-t border-border/60 pt-2">
                <span className="text-muted-foreground">Annual total pay</span>
                <span className="font-mono font-medium text-foreground">{formatCurrency(result.annualTotalPay)}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
