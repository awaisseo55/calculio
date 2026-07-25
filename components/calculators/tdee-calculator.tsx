"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateTdee, ACTIVITY_LABELS } from "@/lib/calc/tdee";
import type { ActivityLevel, Gender } from "@/lib/calc/tdee";
import { formatNumber } from "@/lib/format";

const CM_PER_FT = 30.48;
const CM_PER_IN = 2.54;
const KG_PER_STONE = 6.35029;
const KG_PER_LB = 0.453592;

const activityOptions = Object.entries(ACTIVITY_LABELS) as [ActivityLevel, string][];

export function TdeeCalculator() {
  const [units, setUnits] = React.useState<"metric" | "imperial">("metric");
  const [gender, setGender] = React.useState<Gender>("male");
  const [age, setAge] = React.useState(35);
  const [heightCm, setHeightCm] = React.useState(180);
  const [weightKg, setWeightKg] = React.useState(85);
  const [heightFt, setHeightFt] = React.useState(5);
  const [heightIn, setHeightIn] = React.useState(11);
  const [weightSt, setWeightSt] = React.useState(13);
  const [weightLb, setWeightLb] = React.useState(5);
  const [activityLevel, setActivityLevel] = React.useState<ActivityLevel>("moderate");

  const resolvedHeightCm =
    units === "metric" ? heightCm : heightFt * CM_PER_FT + heightIn * CM_PER_IN;
  const resolvedWeightKg =
    units === "metric" ? weightKg : weightSt * KG_PER_STONE + weightLb * KG_PER_LB;

  const result = React.useMemo(
    () =>
      calculateTdee({
        gender,
        age,
        heightCm: resolvedHeightCm,
        weightKg: resolvedWeightKg,
        activityLevel,
      }),
    [gender, age, resolvedHeightCm, resolvedWeightKg, activityLevel]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <Tabs value={units} onValueChange={(v) => setUnits(v as "metric" | "imperial")}>
            <TabsList className="w-full">
              <TabsTrigger value="metric" className="flex-1">Metric</TabsTrigger>
              <TabsTrigger value="imperial" className="flex-1">Imperial</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex flex-col gap-2">
            <Label>Gender</Label>
            <Tabs value={gender} onValueChange={(v) => setGender(v as Gender)}>
              <TabsList className="w-full">
                <TabsTrigger value="male" className="flex-1">Male</TabsTrigger>
                <TabsTrigger value="female" className="flex-1">Female</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="tdee-age">Age</Label>
            <Input
              id="tdee-age"
              type="number"
              min={15}
              max={100}
              value={age}
              onChange={(e) => setAge(Number(e.target.value) || 0)}
              className="h-11 text-base"
            />
          </div>

          {units === "metric" ? (
            <>
              <div className="flex flex-col gap-2">
                <Label htmlFor="tdee-height-cm">Height (cm)</Label>
                <Input
                  id="tdee-height-cm"
                  type="number"
                  min={0}
                  value={heightCm}
                  onChange={(e) => setHeightCm(Number(e.target.value) || 0)}
                  className="h-11 text-base"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="tdee-weight-kg">Weight (kg)</Label>
                <Input
                  id="tdee-weight-kg"
                  type="number"
                  min={0}
                  value={weightKg}
                  onChange={(e) => setWeightKg(Number(e.target.value) || 0)}
                  className="h-11 text-base"
                />
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="tdee-height-ft">Height (ft)</Label>
                  <Input
                    id="tdee-height-ft"
                    type="number"
                    min={0}
                    value={heightFt}
                    onChange={(e) => setHeightFt(Number(e.target.value) || 0)}
                    className="h-11 text-base"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="tdee-height-in">Height (in)</Label>
                  <Input
                    id="tdee-height-in"
                    type="number"
                    min={0}
                    max={11}
                    value={heightIn}
                    onChange={(e) => setHeightIn(Number(e.target.value) || 0)}
                    className="h-11 text-base"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="tdee-weight-st">Weight (st)</Label>
                  <Input
                    id="tdee-weight-st"
                    type="number"
                    min={0}
                    value={weightSt}
                    onChange={(e) => setWeightSt(Number(e.target.value) || 0)}
                    className="h-11 text-base"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="tdee-weight-lb">Weight (lb)</Label>
                  <Input
                    id="tdee-weight-lb"
                    type="number"
                    min={0}
                    max={13}
                    value={weightLb}
                    onChange={(e) => setWeightLb(Number(e.target.value) || 0)}
                    className="h-11 text-base"
                  />
                </div>
              </div>
            </>
          )}

          <div className="flex flex-col gap-2">
            <Label htmlFor="tdee-activity">Activity level</Label>
            <Select value={activityLevel} onValueChange={(v) => setActivityLevel(v as ActivityLevel)}>
              <SelectTrigger id="tdee-activity" className="h-11 w-full text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {activityOptions.map(([value, label]) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${units}-${gender}-${age}-${resolvedHeightCm}-${resolvedWeightKg}-${activityLevel}`}
        >
          <ResultStat
            label="Maintenance calories (TDEE)"
            value={`${formatNumber(result.maintenanceCalories, 0)} kcal`}
            emphasis
          />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="BMR" value={`${formatNumber(result.bmr, 0)} kcal`} />
            <ResultStat label="Mild weight loss" value={`${formatNumber(result.mildLossCalories, 0)} kcal`} />
            <ResultStat label="Mild weight gain" value={`${formatNumber(result.mildGainCalories, 0)} kcal`} />
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            These are general estimates, not medical advice. If you have any health
            concerns or specific weight goals, please speak to your GP or a
            registered dietitian.
          </p>
        </ResultCard>
      </div>
    </div>
  );
}
