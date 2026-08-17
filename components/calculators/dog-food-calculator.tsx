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
import { calculateDogFood, DOG_ACTIVITY_LEVELS, type DogActivityLevel } from "@/lib/calc/dog-food";
import { formatNumber } from "@/lib/format";

const activityOptions = Object.entries(DOG_ACTIVITY_LEVELS) as [
  DogActivityLevel,
  (typeof DOG_ACTIVITY_LEVELS)[DogActivityLevel],
][];

export function DogFoodCalculator() {
  const [weightKg, setWeightKg] = React.useState(18);
  const [activityLevel, setActivityLevel] = React.useState<DogActivityLevel>("neuteredNormal");
  const [foodKcalPer100g, setFoodKcalPer100g] = React.useState(350);

  const result = React.useMemo(
    () => calculateDogFood({ weightKg, activityLevel, foodKcalPer100g }),
    [weightKg, activityLevel, foodKcalPer100g]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="df-weight">Your dog&apos;s weight</Label>
            <div className="relative">
              <Input
                id="df-weight"
                type="number"
                min={0.5}
                step={0.5}
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value) || 0)}
                className="h-11 pr-9 text-base"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">kg</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="df-activity">Activity level</Label>
            <Select value={activityLevel} onValueChange={(v) => setActivityLevel(v as DogActivityLevel)}>
              <SelectTrigger id="df-activity" className="h-11 w-full text-base">
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
            <p className="text-xs text-muted-foreground">{DOG_ACTIVITY_LEVELS[activityLevel].helpText}</p>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="df-kcal">Food energy content</Label>
            <div className="relative">
              <Input
                id="df-kcal"
                type="number"
                min={50}
                step={10}
                value={foodKcalPer100g}
                onChange={(e) => setFoodKcalPer100g(Number(e.target.value) || 0)}
                className="h-11 pr-24 text-base"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">kcal / 100g</span>
            </div>
            <p className="text-xs text-muted-foreground">Check your food packaging; dry dog food is often 300 to 400 kcal per 100g</p>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${weightKg}-${activityLevel}-${foodKcalPer100g}`}>
          <ResultStat label="Estimated daily food" value={`${formatNumber(result.dailyFoodGrams, 0)}g`} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Daily energy needs" value={`${formatNumber(result.dailyEnergyKcal, 0)} kcal`} />
            <ResultStat label="Resting energy" value={`${formatNumber(result.restingEnergyKcal, 0)} kcal`} />
          </div>
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0 text-sm text-muted-foreground">
            This is a general starting point, not a prescribed diet. Puppies, pregnant or nursing dogs, and dogs
            with health conditions have different needs. Always check with your vet, especially for weight loss
            plans or if you are unsure how much to feed.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
