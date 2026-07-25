"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import {
  calculateLoftInsulation,
  RECOMMENDED_INSULATION_DEPTH_MM,
} from "@/lib/calc/loft-insulation";
import { formatCurrency } from "@/lib/format";

const FT2_TO_M2 = 0.09290304;

export function LoftInsulationCalculator() {
  const [units, setUnits] = React.useState<"m2" | "ft2">("m2");
  const [floorArea, setFloorArea] = React.useState(40);
  const [currentDepthMm, setCurrentDepthMm] = React.useState(100);
  const [targetDepthMm, setTargetDepthMm] = React.useState(RECOMMENDED_INSULATION_DEPTH_MM);
  const [rollWidthMm, setRollWidthMm] = React.useState(1140);
  const [rollLengthM, setRollLengthM] = React.useState(6.75);
  const [rollThicknessMm, setRollThicknessMm] = React.useState(100);
  const [pricePerRoll, setPricePerRoll] = React.useState(0);

  const floorAreaM2 = units === "m2" ? floorArea : floorArea * FT2_TO_M2;

  const result = React.useMemo(
    () =>
      calculateLoftInsulation({
        floorAreaM2,
        currentDepthMm,
        targetDepthMm,
        rollWidthMm,
        rollLengthM,
        rollThicknessMm,
        pricePerRoll,
      }),
    [floorAreaM2, currentDepthMm, targetDepthMm, rollWidthMm, rollLengthM, rollThicknessMm, pricePerRoll]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <Tabs value={units} onValueChange={(v) => setUnits(v as "m2" | "ft2")}>
            <TabsList className="w-full">
              <TabsTrigger value="m2" className="flex-1">Square metres</TabsTrigger>
              <TabsTrigger value="ft2" className="flex-1">Square feet</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex flex-col gap-2">
            <Label htmlFor="loft-area">Loft floor area</Label>
            <Input
              id="loft-area"
              type="number"
              min={0}
              step={0.5}
              value={floorArea}
              onChange={(e) => setFloorArea(Number(e.target.value) || 0)}
              className="h-11 text-base"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="loft-current-depth">Current depth (mm)</Label>
              <Input
                id="loft-current-depth"
                type="number"
                min={0}
                step={10}
                value={currentDepthMm}
                onChange={(e) => setCurrentDepthMm(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="loft-target-depth">Target depth (mm)</Label>
              <Input
                id="loft-target-depth"
                type="number"
                min={0}
                step={10}
                value={targetDepthMm}
                onChange={(e) => setTargetDepthMm(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
          </div>
          <p className="-mt-4 text-xs text-muted-foreground">
            270mm is the current UK recommended depth for mineral wool loft
            insulation.
          </p>

          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col gap-2">
              <Label htmlFor="loft-roll-width">Roll width (mm)</Label>
              <Input
                id="loft-roll-width"
                type="number"
                min={0}
                value={rollWidthMm}
                onChange={(e) => setRollWidthMm(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="loft-roll-length">Roll length (m)</Label>
              <Input
                id="loft-roll-length"
                type="number"
                min={0}
                step={0.1}
                value={rollLengthM}
                onChange={(e) => setRollLengthM(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="loft-roll-thickness">Roll thickness (mm)</Label>
              <Input
                id="loft-roll-thickness"
                type="number"
                min={0}
                step={10}
                value={rollThicknessMm}
                onChange={(e) => setRollThicknessMm(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="loft-price">Price per roll (optional)</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="loft-price"
                type="number"
                min={0}
                step={0.5}
                value={pricePerRoll}
                onChange={(e) => setPricePerRoll(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${units}-${floorArea}-${currentDepthMm}-${targetDepthMm}-${rollWidthMm}-${rollLengthM}-${rollThicknessMm}-${pricePerRoll}`}
        >
          {result.alreadyMeetsRecommendation ? (
            <p className="text-sm text-muted-foreground">
              Your current depth already meets or exceeds your target, so no
              extra insulation is needed based on these figures.
            </p>
          ) : (
            <>
              <ResultStat label="Rolls needed" value={`${result.totalRollsNeeded}`} emphasis />
              <div className="mt-6 grid grid-cols-2 gap-6">
                <ResultStat label="Additional depth needed" value={`${result.additionalDepthMm} mm`} />
                <ResultStat label="Layers needed" value={`${result.layersNeeded}`} />
                {pricePerRoll > 0 && (
                  <ResultStat label="Estimated cost" value={formatCurrency(result.estimatedCost, 2)} />
                )}
              </div>
            </>
          )}
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            Rough estimated annual saving from topping up to your target
            depth: {formatCurrency(result.estimatedAnnualSaving.low, 0)} to{" "}
            {formatCurrency(result.estimatedAnnualSaving.high, 0)}. This is a
            general guide only. Actual savings depend on your home size,
            heating type, fuel prices and existing insulation elsewhere.
          </p>
        </ResultCard>
      </div>
    </div>
  );
}
