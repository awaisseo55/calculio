"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateBmi, type BmiUnits } from "@/lib/calc/bmi";
import { formatNumber } from "@/lib/format";

const categoryColor: Record<string, string> = {
  Underweight: "text-amber-500",
  "Healthy weight": "text-success",
  Overweight: "text-amber-500",
  "Obese (Class I)": "text-destructive",
  "Obese (Class II)": "text-destructive",
  "Obese (Class III)": "text-destructive",
};

export function BmiCalculator() {
  const [units, setUnits] = React.useState<BmiUnits>("metric");
  const [heightCm, setHeightCm] = React.useState(170);
  const [weightKg, setWeightKg] = React.useState(70);
  const [heightFt, setHeightFt] = React.useState(5);
  const [heightIn, setHeightIn] = React.useState(7);
  const [weightSt, setWeightSt] = React.useState(11);
  const [weightLb, setWeightLb] = React.useState(0);

  const result = React.useMemo(
    () =>
      calculateBmi({
        units,
        heightCm,
        weightKg,
        heightFt,
        heightIn,
        weightSt,
        weightLb,
      }),
    [units, heightCm, weightKg, heightFt, heightIn, weightSt, weightLb]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <Tabs value={units} onValueChange={(v) => setUnits(v as BmiUnits)}>
            <TabsList className="w-full">
              <TabsTrigger value="metric" className="flex-1">Metric</TabsTrigger>
              <TabsTrigger value="imperial" className="flex-1">Imperial</TabsTrigger>
            </TabsList>
          </Tabs>

          {units === "metric" ? (
            <>
              <div className="flex flex-col gap-2">
                <Label htmlFor="height-cm">Height (cm)</Label>
                <Input
                  id="height-cm"
                  type="number"
                  min={0}
                  value={heightCm}
                  onChange={(e) => setHeightCm(Number(e.target.value) || 0)}
                  className="h-11 text-base"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="weight-kg">Weight (kg)</Label>
                <Input
                  id="weight-kg"
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
                  <Label htmlFor="height-ft">Height (ft)</Label>
                  <Input
                    id="height-ft"
                    type="number"
                    min={0}
                    value={heightFt}
                    onChange={(e) => setHeightFt(Number(e.target.value) || 0)}
                    className="h-11 text-base"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="height-in">Height (in)</Label>
                  <Input
                    id="height-in"
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
                  <Label htmlFor="weight-st">Weight (st)</Label>
                  <Input
                    id="weight-st"
                    type="number"
                    min={0}
                    value={weightSt}
                    onChange={(e) => setWeightSt(Number(e.target.value) || 0)}
                    className="h-11 text-base"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="weight-lb">Weight (lb)</Label>
                  <Input
                    id="weight-lb"
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
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${units}-${heightCm}-${weightKg}-${heightFt}-${heightIn}-${weightSt}-${weightLb}`}
        >
          <ResultStat label="Your BMI" value={formatNumber(result.bmi, 1)} emphasis />
          <div className="mt-4">
            <span className={`text-base font-semibold ${categoryColor[result.category] ?? "text-foreground"}`}>
              {result.category}
            </span>
          </div>
          <div className="mt-6">
            <ResultStat
              label="Healthy weight range for your height"
              value={`${formatNumber(result.healthyWeightMinKg, 1)}–${formatNumber(result.healthyWeightMaxKg, 1)} kg`}
            />
          </div>
        </ResultCard>
      </div>
    </div>
  );
}
