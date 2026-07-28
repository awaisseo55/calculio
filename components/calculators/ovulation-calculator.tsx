"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateOvulation } from "@/lib/calc/ovulation";
import { formatDate } from "@/lib/format";

export function OvulationCalculator() {
  const [lastPeriodDate, setLastPeriodDate] = React.useState("2026-07-01");
  const [cycleLength, setCycleLength] = React.useState(28);

  const result = React.useMemo(
    () => calculateOvulation({ lastPeriodDate, cycleLength }),
    [lastPeriodDate, cycleLength]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="ov-lmp">First day of last period</Label>
            <Input
              id="ov-lmp"
              type="date"
              value={lastPeriodDate}
              onChange={(e) => setLastPeriodDate(e.target.value)}
              className="h-11 text-base"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="ov-cycle">Average cycle length (days)</Label>
            <Input
              id="ov-cycle"
              type="number"
              min={21}
              max={40}
              value={cycleLength}
              onChange={(e) => setCycleLength(Number(e.target.value) || 28)}
              className="h-11 text-base"
            />
            <p className="text-xs text-muted-foreground">
              Count from the first day of one period to the first day of the
              next. 28 days is average, but anywhere from 21 to 40 days is
              common and normal.
            </p>
          </div>

          <p className="rounded-xl border border-border bg-muted/40 p-4 text-xs leading-relaxed text-muted-foreground">
            This is an estimate only, based on average cycle timing, and is
            not a reliable method of contraception. For NHS guidance on
            fertility and trying to conceive, or if you have irregular
            cycles, speak to your GP or a pharmacist.
          </p>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${lastPeriodDate}-${cycleLength}`}>
          <ResultStat label="Estimated ovulation date" value={formatDate(result.ovulationDate)} emphasis positive />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat
              label="Fertile window"
              value={`${formatDate(result.fertileWindowStart)} to ${formatDate(result.fertileWindowEnd)}`}
            />
            <ResultStat label="Next expected period" value={formatDate(result.nextPeriodDate)} />
          </div>
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0">
            <h3 className="text-sm font-semibold text-foreground">Next 3 projected cycles</h3>
            <div className="mt-3 flex flex-col gap-2">
              {result.upcomingCycles.map((cycle) => (
                <div
                  key={cycle.cycleNumber}
                  className="flex items-center justify-between border-t border-border/60 py-2 text-sm first:border-t-0"
                >
                  <span className="text-muted-foreground">
                    Cycle {cycle.cycleNumber}: ovulation
                  </span>
                  <span className="font-mono font-medium text-foreground">
                    {formatDate(cycle.ovulationDate)}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
