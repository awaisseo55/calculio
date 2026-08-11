"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import {
  calculateRunningPace,
  formatSecondsAsClock,
  type DistanceUnit,
} from "@/lib/calc/running-pace";
import { formatNumber } from "@/lib/format";

export function RunningPaceCalculator() {
  const [distanceValue, setDistanceValue] = React.useState(10);
  const [distanceUnit, setDistanceUnit] = React.useState<DistanceUnit>("km");
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(50);
  const [seconds, setSeconds] = React.useState(0);

  const result = React.useMemo(
    () => calculateRunningPace({ distanceValue, distanceUnit, hours, minutes, seconds }),
    [distanceValue, distanceUnit, hours, minutes, seconds]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="rp-distance">Distance</Label>
              <Tabs value={distanceUnit} onValueChange={(v) => setDistanceUnit(v as DistanceUnit)}>
                <TabsList>
                  <TabsTrigger value="km">km</TabsTrigger>
                  <TabsTrigger value="miles">miles</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <Input
              id="rp-distance"
              type="number"
              min={0}
              step={0.1}
              value={distanceValue}
              onChange={(e) => setDistanceValue(Number(e.target.value) || 0)}
              className="h-11 text-base"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Finish time</Label>
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground">Hours</span>
                <Input
                  type="number"
                  min={0}
                  max={24}
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value) || 0)}
                  className="h-11 text-base"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground">Minutes</span>
                <Input
                  type="number"
                  min={0}
                  max={59}
                  value={minutes}
                  onChange={(e) => setMinutes(Number(e.target.value) || 0)}
                  className="h-11 text-base"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground">Seconds</span>
                <Input
                  type="number"
                  min={0}
                  max={59}
                  value={seconds}
                  onChange={(e) => setSeconds(Number(e.target.value) || 0)}
                  className="h-11 text-base"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${distanceValue}-${distanceUnit}-${hours}-${minutes}-${seconds}`}
        >
          <ResultStat
            label="Pace per km"
            value={`${formatSecondsAsClock(result.paceSecondsPerKm)} /km`}
            emphasis
          />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Pace per mile" value={`${formatSecondsAsClock(result.paceSecondsPerMile)} /mile`} />
            <ResultStat label="Speed" value={`${formatNumber(result.speedKmh, 1)} km/h`} />
            <ResultStat label="Speed (mph)" value={`${formatNumber(result.speedMph, 1)} mph`} />
          </div>
        </ResultCard>

        {result.predictions.length > 0 && (
          <Card className="p-6">
            <CardContent className="p-0">
              <h3 className="text-sm font-semibold text-foreground">Predicted finish times</h3>
              <div className="mt-3 flex flex-col gap-2">
                {result.predictions.map((p) => (
                  <div
                    key={p.label}
                    className="flex items-center justify-between border-t border-border/60 py-2 text-sm first:border-t-0"
                  >
                    <span className="text-muted-foreground">{p.label}</span>
                    <span className="font-mono font-medium text-foreground">
                      {formatSecondsAsClock(p.timeSeconds)}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Predictions use Riegel&apos;s formula and assume similar training and conditions for both distances.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
