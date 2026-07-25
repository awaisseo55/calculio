"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateIdealWeight } from "@/lib/calc/ideal-weight";
import type { BodyFrame, Gender } from "@/lib/calc/ideal-weight";
import { kgToStoneLb } from "@/lib/calc/bmi";
import { formatNumber } from "@/lib/format";

const CM_PER_FT = 30.48;
const CM_PER_IN = 2.54;

function formatKgAndStone(kg: number): string {
  const { stone, lb } = kgToStoneLb(kg);
  return `${formatNumber(kg, 1)} kg (${stone}st ${formatNumber(lb, 1)}lb)`;
}

export function IdealWeightCalculator() {
  const [units, setUnits] = React.useState<"metric" | "imperial">("metric");
  const [gender, setGender] = React.useState<Gender>("female");
  const [heightCm, setHeightCm] = React.useState(165);
  const [heightFt, setHeightFt] = React.useState(5);
  const [heightIn, setHeightIn] = React.useState(5);
  const [bodyFrame, setBodyFrame] = React.useState<BodyFrame>("medium");

  const resolvedHeightCm =
    units === "metric" ? heightCm : heightFt * CM_PER_FT + heightIn * CM_PER_IN;

  const result = React.useMemo(
    () => calculateIdealWeight({ gender, heightCm: resolvedHeightCm, bodyFrame }),
    [gender, resolvedHeightCm, bodyFrame]
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
                <TabsTrigger value="female" className="flex-1">Female</TabsTrigger>
                <TabsTrigger value="male" className="flex-1">Male</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {units === "metric" ? (
            <div className="flex flex-col gap-2">
              <Label htmlFor="iw-height-cm">Height (cm)</Label>
              <Input
                id="iw-height-cm"
                type="number"
                min={0}
                value={heightCm}
                onChange={(e) => setHeightCm(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="iw-height-ft">Height (ft)</Label>
                <Input
                  id="iw-height-ft"
                  type="number"
                  min={0}
                  value={heightFt}
                  onChange={(e) => setHeightFt(Number(e.target.value) || 0)}
                  className="h-11 text-base"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="iw-height-in">Height (in)</Label>
                <Input
                  id="iw-height-in"
                  type="number"
                  min={0}
                  max={11}
                  value={heightIn}
                  onChange={(e) => setHeightIn(Number(e.target.value) || 0)}
                  className="h-11 text-base"
                />
              </div>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <Label htmlFor="iw-frame">Body frame (optional refinement)</Label>
            <Tabs value={bodyFrame} onValueChange={(v) => setBodyFrame(v as BodyFrame)}>
              <TabsList className="w-full">
                <TabsTrigger value="small" className="flex-1">Small</TabsTrigger>
                <TabsTrigger value="medium" className="flex-1">Medium</TabsTrigger>
                <TabsTrigger value="large" className="flex-1">Large</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${units}-${gender}-${resolvedHeightCm}-${bodyFrame}`}>
          <ResultStat label="NHS healthy weight range" value={formatKgAndStone(result.nhsBmiRangeMinKg)} emphasis />
          <p className="mt-1 text-sm text-muted-foreground">
            up to {formatKgAndStone(result.nhsBmiRangeMaxKg)}
          </p>
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Devine formula estimate" value={formatKgAndStone(result.devineKg)} />
            <ResultStat label="Robinson formula estimate" value={formatKgAndStone(result.robinsonKg)} />
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            These are estimates from general formulas, not a target you need to hit.
            A healthy weight varies from person to person. Speak to your GP if you
            have any concerns about your weight.
          </p>
        </ResultCard>
      </div>
    </div>
  );
}
