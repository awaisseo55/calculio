"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateMinimumWage, type MinimumWageAgeBand } from "@/lib/calc/minimum-wage";
import { formatCurrency } from "@/lib/format";

const ageBands: { value: MinimumWageAgeBand; label: string }[] = [
  { value: "21plus", label: "21 and over (National Living Wage)" },
  { value: "18-20", label: "18 to 20" },
  { value: "under18", label: "Under 18" },
  { value: "apprentice", label: "Apprentice" },
];

export function MinimumWageCalculator() {
  const [ageBand, setAgeBand] = React.useState<MinimumWageAgeBand>("21plus");
  const [hoursPerWeek, setHoursPerWeek] = React.useState(37.5);
  const [actualHourlyRate, setActualHourlyRate] = React.useState(12.71);

  const result = React.useMemo(
    () => calculateMinimumWage({ ageBand, hoursPerWeek, actualHourlyRate }),
    [ageBand, hoursPerWeek, actualHourlyRate]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="mw-age">Age group</Label>
            <Select value={ageBand} onValueChange={(v) => setAgeBand(v as MinimumWageAgeBand)}>
              <SelectTrigger id="mw-age" className="h-11 w-full text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {ageBands.map((b) => (
                  <SelectItem key={b.value} value={b.value}>
                    {b.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="mw-hours">Hours worked per week</Label>
            <Input
              id="mw-hours"
              type="number"
              min={0}
              max={80}
              step={0.5}
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(Number(e.target.value) || 0)}
              className="h-11 text-base"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="mw-rate">Your actual hourly rate</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="mw-rate"
                type="number"
                min={0}
                step={0.01}
                value={actualHourlyRate}
                onChange={(e) => setActualHourlyRate(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
            <p className="text-xs text-muted-foreground">
              If you are salaried, divide your weekly pay by your weekly hours to get this
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${ageBand}-${hoursPerWeek}-${actualHourlyRate}`}>
          <ResultStat
            label={result.isBelowMinimum ? "You are being paid below the minimum" : "You are being paid at or above the minimum"}
            value={result.isBelowMinimum ? `${formatCurrency(result.shortfallPerHour, 2)} short per hour` : "All good"}
            emphasis
            positive={!result.isBelowMinimum}
          />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Legal minimum hourly rate" value={formatCurrency(result.minimumHourlyRate, 2)} />
            <ResultStat label="Your hourly rate" value={formatCurrency(result.actualHourlyRate, 2)} />
            <ResultStat label="Minimum weekly pay" value={formatCurrency(result.minimumWeeklyPay, 2)} />
            <ResultStat label="Minimum annual pay" value={formatCurrency(result.minimumAnnualPay)} />
          </div>
        </ResultCard>

        {result.isBelowMinimum && (
          <Card className="border-primary/30 bg-primary/5 p-6">
            <CardContent className="p-0 text-sm text-muted-foreground">
              Based on these figures, you could be underpaid by around{" "}
              <span className="font-mono font-medium text-foreground">
                {formatCurrency(result.shortfallPerWeek, 2)}
              </span>{" "}
              a week, or{" "}
              <span className="font-mono font-medium text-foreground">
                {formatCurrency(result.shortfallPerYear)}
              </span>{" "}
              a year. If this looks right, ACAS and HMRC both offer free,
              confidential advice on how to raise it with your employer.
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
