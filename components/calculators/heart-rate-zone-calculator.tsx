"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateHeartRateZones } from "@/lib/calc/heart-rate-zone";

export function HeartRateZoneCalculator() {
  const [age, setAge] = React.useState(35);
  const [restingHeartRate, setRestingHeartRate] = React.useState(65);
  const [useResting, setUseResting] = React.useState(false);

  const result = React.useMemo(
    () =>
      calculateHeartRateZones({
        age,
        restingHeartRate: useResting ? restingHeartRate : undefined,
      }),
    [age, restingHeartRate, useResting]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="hrz-age">Your age</Label>
            <div className="relative">
              <Input
                id="hrz-age"
                type="number"
                min={1}
                max={100}
                step={1}
                value={age}
                onChange={(e) => setAge(Number(e.target.value) || 0)}
                className="h-11 pr-14 text-base"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">years</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 rounded-xl border border-border/60 p-4">
            <label className="flex items-center gap-2 text-sm font-medium text-foreground">
              <input
                type="checkbox"
                checked={useResting}
                onChange={(e) => setUseResting(e.target.checked)}
                className="size-4 accent-primary"
              />
              Use my resting heart rate for a more precise result
            </label>
            {useResting && (
              <div className="flex flex-col gap-2">
                <Label htmlFor="hrz-resting">Resting heart rate</Label>
                <div className="relative">
                  <Input
                    id="hrz-resting"
                    type="number"
                    min={30}
                    max={120}
                    step={1}
                    value={restingHeartRate}
                    onChange={(e) => setRestingHeartRate(Number(e.target.value) || 0)}
                    className="h-11 pr-14 text-base"
                  />
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">bpm</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Measure first thing in the morning, before getting up, for the most accurate reading
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${age}-${restingHeartRate}-${useResting}`}>
          <ResultStat label="Estimated maximum heart rate" value={`${result.maxHeartRate} bpm`} emphasis />
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0">
            <h3 className="text-sm font-semibold text-foreground">Your training zones</h3>
            <div className="mt-3 flex flex-col divide-y divide-border/60">
              {result.zones.map((zone) => (
                <div key={zone.name} className="flex items-center justify-between gap-3 py-2.5">
                  <div>
                    <p className="text-sm font-medium text-foreground">{zone.name}</p>
                    <p className="text-xs text-muted-foreground">{zone.description}</p>
                  </div>
                  <span className="font-mono text-sm font-semibold tabular-nums text-foreground">
                    {zone.bpmLow}-{zone.bpmHigh} bpm
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
