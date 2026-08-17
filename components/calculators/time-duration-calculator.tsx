"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateTimeDuration } from "@/lib/calc/time-duration";
import { formatCurrency, formatNumber } from "@/lib/format";

export function TimeDurationCalculator() {
  const [startTime, setStartTime] = React.useState("09:00");
  const [endTime, setEndTime] = React.useState("17:30");
  const [unpaidBreakMinutes, setUnpaidBreakMinutes] = React.useState(30);
  const [hourlyRate, setHourlyRate] = React.useState(0);

  const result = React.useMemo(
    () => calculateTimeDuration({ startTime, endTime, unpaidBreakMinutes, hourlyRate }),
    [startTime, endTime, unpaidBreakMinutes, hourlyRate]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="td-start">Start time</Label>
              <Input
                id="td-start"
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="h-11 text-base"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="td-end">End time</Label>
              <Input
                id="td-end"
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="h-11 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="td-break">Unpaid break</Label>
            <div className="relative">
              <Input
                id="td-break"
                type="number"
                min={0}
                step={5}
                value={unpaidBreakMinutes}
                onChange={(e) => setUnpaidBreakMinutes(Number(e.target.value) || 0)}
                className="h-11 pr-16 text-base"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">minutes</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="td-rate">Hourly rate (optional)</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="td-rate"
                type="number"
                min={0}
                step={0.5}
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${startTime}-${endTime}-${unpaidBreakMinutes}-${hourlyRate}`}>
          <ResultStat
            label="Total time"
            value={`${result.hours}h ${result.minutes}m`}
            emphasis
          />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Decimal hours" value={`${formatNumber(result.decimalHours, 2)} hrs`} />
            {result.pay !== null && <ResultStat label="Pay for this shift" value={formatCurrency(result.pay, 2)} />}
          </div>
        </ResultCard>

        {result.crossesMidnight && (
          <Card className="p-6">
            <CardContent className="p-0 text-sm text-muted-foreground">
              Your end time is earlier than your start time, so this has been calculated as an overnight shift
              crossing midnight.
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
