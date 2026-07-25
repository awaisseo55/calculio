"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateBmr } from "@/lib/calc/bmr";
import type { BmrFormula, Gender } from "@/lib/calc/bmr";
import { formatNumber } from "@/lib/format";

const CM_PER_FT = 30.48;
const CM_PER_IN = 2.54;
const KG_PER_STONE = 6.35029;
const KG_PER_LB = 0.453592;

export function BmrCalculator() {
  const [units, setUnits] = React.useState<"metric" | "imperial">("metric");
  const [gender, setGender] = React.useState<Gender>("male");
  const [age, setAge] = React.useState(35);
  const [heightCm, setHeightCm] = React.useState(180);
  const [weightKg, setWeightKg] = React.useState(85);
  const [heightFt, setHeightFt] = React.useState(5);
  const [heightIn, setHeightIn] = React.useState(11);
  const [weightSt, setWeightSt] = React.useState(13);
  const [weightLb, setWeightLb] = React.useState(5);
  const [formula, setFormula] = React.useState<BmrFormula>("mifflin");

  const resolvedHeightCm =
    units === "metric" ? heightCm : heightFt * CM_PER_FT + heightIn * CM_PER_IN;
  const resolvedWeightKg =
    units === "metric" ? weightKg : weightSt * KG_PER_STONE + weightLb * KG_PER_LB;

  const result = React.useMemo(
    () =>
      calculateBmr({
        gender,
        age,
        heightCm: resolvedHeightCm,
        weightKg: resolvedWeightKg,
        formula,
      }),
    [gender, age, resolvedHeightCm, resolvedWeightKg, formula]
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
            <Label htmlFor="bmr-age">Age</Label>
            <Input
              id="bmr-age"
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
                <Label htmlFor="bmr-height-cm">Height (cm)</Label>
                <Input
                  id="bmr-height-cm"
                  type="number"
                  min={0}
                  value={heightCm}
                  onChange={(e) => setHeightCm(Number(e.target.value) || 0)}
                  className="h-11 text-base"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="bmr-weight-kg">Weight (kg)</Label>
                <Input
                  id="bmr-weight-kg"
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
                  <Label htmlFor="bmr-height-ft">Height (ft)</Label>
                  <Input
                    id="bmr-height-ft"
                    type="number"
                    min={0}
                    value={heightFt}
                    onChange={(e) => setHeightFt(Number(e.target.value) || 0)}
                    className="h-11 text-base"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="bmr-height-in">Height (in)</Label>
                  <Input
                    id="bmr-height-in"
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
                  <Label htmlFor="bmr-weight-st">Weight (st)</Label>
                  <Input
                    id="bmr-weight-st"
                    type="number"
                    min={0}
                    value={weightSt}
                    onChange={(e) => setWeightSt(Number(e.target.value) || 0)}
                    className="h-11 text-base"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="bmr-weight-lb">Weight (lb)</Label>
                  <Input
                    id="bmr-weight-lb"
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
            <Label>Formula</Label>
            <Tabs value={formula} onValueChange={(v) => setFormula(v as BmrFormula)}>
              <TabsList className="w-full">
                <TabsTrigger value="mifflin" className="flex-1">Mifflin-St Jeor</TabsTrigger>
                <TabsTrigger value="harris-benedict" className="flex-1">Harris-Benedict</TabsTrigger>
              </TabsList>
            </Tabs>
            <p className="text-xs text-muted-foreground">
              Mifflin-St Jeor is the formula most dietitians consider more
              accurate for most people today. Harris-Benedict is the older,
              widely known alternative.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${units}-${gender}-${age}-${resolvedHeightCm}-${resolvedWeightKg}-${formula}`}
        >
          <ResultStat label="Basal Metabolic Rate" value={`${formatNumber(result.bmr, 0)} kcal/day`} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Mifflin-St Jeor" value={`${formatNumber(result.mifflinBmr, 0)} kcal`} />
            <ResultStat label="Harris-Benedict" value={`${formatNumber(result.harrisBenedictBmr, 0)} kcal`} />
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            This is the energy your body burns at complete rest, before any
            activity is added. These are general estimates, not medical advice.
            If you have any health concerns, please speak to your GP.
          </p>
        </ResultCard>
      </div>
    </div>
  );
}
