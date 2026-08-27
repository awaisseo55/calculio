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
import { calculateCaloriesBurned, CALORIE_ACTIVITIES, type CalorieActivity } from "@/lib/calc/calories-burned";
import { formatNumber } from "@/lib/format";

const activityOptions = Object.entries(CALORIE_ACTIVITIES) as [
  CalorieActivity,
  (typeof CALORIE_ACTIVITIES)[CalorieActivity],
][];

export function CaloriesBurnedCalculator() {
  const [weightKg, setWeightKg] = React.useState(75);
  const [durationMinutes, setDurationMinutes] = React.useState(30);
  const [activity, setActivity] = React.useState<CalorieActivity>("runningModerate");

  const result = React.useMemo(
    () => calculateCaloriesBurned({ weightKg, durationMinutes, activity }),
    [weightKg, durationMinutes, activity]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="cb-activity">Activity</Label>
            <Select value={activity} onValueChange={(v) => setActivity(v as CalorieActivity)}>
              <SelectTrigger id="cb-activity" className="h-11 w-full text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {activityOptions.map(([value, meta]) => (
                  <SelectItem key={value} value={value}>
                    {meta.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="cb-weight">Your weight</Label>
            <div className="relative">
              <Input
                id="cb-weight"
                type="number"
                min={20}
                step={1}
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value) || 0)}
                className="h-11 pr-9 text-base"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">kg</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="cb-duration">Duration</Label>
            <div className="relative">
              <Input
                id="cb-duration"
                type="number"
                min={1}
                step={1}
                value={durationMinutes}
                onChange={(e) => setDurationMinutes(Number(e.target.value) || 0)}
                className="h-11 pr-16 text-base"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">minutes</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${weightKg}-${durationMinutes}-${activity}`}>
          <ResultStat label="Estimated calories burned" value={`${formatNumber(result.caloriesBurned, 0)} kcal`} emphasis positive />
          <div className="mt-6">
            <ResultStat label="Calories per minute" value={`${formatNumber(result.caloriesPerMinute, 1)} kcal`} />
          </div>
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0 text-sm text-muted-foreground">
            This is a general estimate based on published activity intensity values and your bodyweight. Fitness
            level, terrain, effort and individual metabolism all affect real energy burn, so treat this as a
            training guide rather than an exact figure.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
