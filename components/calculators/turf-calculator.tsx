"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateTurf } from "@/lib/calc/turf";
import { formatCurrency, formatNumber } from "@/lib/format";

export function TurfCalculator() {
  const [lengthM, setLengthM] = React.useState(8);
  const [widthM, setWidthM] = React.useState(5);
  const [wastagePercent, setWastagePercent] = React.useState(10);
  const [rollCoverageM2, setRollCoverageM2] = React.useState(2);
  const [pricePerRoll, setPricePerRoll] = React.useState(6.5);

  const result = React.useMemo(
    () => calculateTurf({ lengthM, widthM, wastagePercent, rollCoverageM2, pricePerRoll }),
    [lengthM, widthM, wastagePercent, rollCoverageM2, pricePerRoll]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="turf-length">Lawn length</Label>
              <div className="relative">
                <Input
                  id="turf-length"
                  type="number"
                  min={0}
                  step={0.1}
                  value={lengthM}
                  onChange={(e) => setLengthM(Number(e.target.value) || 0)}
                  className="h-11 pr-9 text-base"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">m</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="turf-width">Lawn width</Label>
              <div className="relative">
                <Input
                  id="turf-width"
                  type="number"
                  min={0}
                  step={0.1}
                  value={widthM}
                  onChange={(e) => setWidthM(Number(e.target.value) || 0)}
                  className="h-11 pr-9 text-base"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">m</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="turf-wastage">Wastage allowance</Label>
            <div className="relative">
              <Input
                id="turf-wastage"
                type="number"
                min={0}
                max={50}
                step={1}
                value={wastagePercent}
                onChange={(e) => setWastagePercent(Number(e.target.value) || 0)}
                className="h-11 pr-9 text-base"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">%</span>
            </div>
            <p className="text-xs text-muted-foreground">Extra turf for offcuts, curves and edges, 10% is a common allowance</p>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="turf-coverage">Coverage per roll</Label>
            <div className="relative">
              <Input
                id="turf-coverage"
                type="number"
                min={0.1}
                step={0.1}
                value={rollCoverageM2}
                onChange={(e) => setRollCoverageM2(Number(e.target.value) || 0)}
                className="h-11 pr-12 text-base"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">m²</span>
            </div>
            <p className="text-xs text-muted-foreground">Standard UK turf rolls are often 1m x 2m, covering 2m² each</p>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="turf-price">Price per roll</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">£</span>
              <Input
                id="turf-price"
                type="number"
                min={0}
                step={0.1}
                value={pricePerRoll}
                onChange={(e) => setPricePerRoll(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${lengthM}-${widthM}-${wastagePercent}-${rollCoverageM2}-${pricePerRoll}`}>
          <ResultStat label="Rolls needed" value={formatNumber(result.rollsNeeded, 0)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Lawn area" value={`${formatNumber(result.areaM2, 1)} m²`} />
            <ResultStat label="With wastage" value={`${formatNumber(result.areaWithWastageM2, 1)} m²`} />
          </div>
          <div className="mt-6">
            <ResultStat label="Estimated cost" value={formatCurrency(result.totalCost, 2)} />
          </div>
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0 text-sm text-muted-foreground">
            Turf roll sizes vary by supplier, so check the exact coverage per roll before ordering. Irregular or
            curved lawns typically need a higher wastage allowance than a simple rectangle.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
