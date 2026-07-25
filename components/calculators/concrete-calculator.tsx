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
import { RatesDisclaimer } from "@/components/calculators/rates-disclaimer";
import {
  calculateConcrete,
  CONCRETE_TYPE_LABELS,
  type ConcreteCalculationType,
} from "@/lib/calc/concrete";
import { formatCurrency, formatNumber } from "@/lib/format";

const FT_TO_M = 0.3048;

const typeOptions = Object.entries(CONCRETE_TYPE_LABELS) as [ConcreteCalculationType, string][];
const usesRectangle = (t: ConcreteCalculationType) => t === "slab" || t === "footing";

export function ConcreteCalculator() {
  const [units, setUnits] = React.useState<"metres" | "feet">("metres");
  const [calculationType, setCalculationType] = React.useState<ConcreteCalculationType>("slab");
  const [length, setLength] = React.useState(3);
  const [width, setWidth] = React.useState(3);
  const [depth, setDepth] = React.useState(0.1);
  const [diameter, setDiameter] = React.useState(0.3);
  const [height, setHeight] = React.useState(0.6);
  const [quantity, setQuantity] = React.useState(1);
  const [bagSizeKg, setBagSizeKg] = React.useState(20);
  const [pricePerBag, setPricePerBag] = React.useState(0);

  const lengthM = units === "metres" ? length : length * FT_TO_M;
  const widthM = units === "metres" ? width : width * FT_TO_M;
  const depthM = units === "metres" ? depth : depth * FT_TO_M;
  const diameterM = units === "metres" ? diameter : diameter * FT_TO_M;
  const heightM = units === "metres" ? height : height * FT_TO_M;

  const result = React.useMemo(
    () =>
      calculateConcrete({
        calculationType,
        lengthM,
        widthM,
        depthM,
        diameterM,
        heightM,
        quantity,
        bagSizeKg,
        pricePerBag,
      }),
    [calculationType, lengthM, widthM, depthM, diameterM, heightM, quantity, bagSizeKg, pricePerBag]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="concrete-type">What are you pouring?</Label>
            <Select
              value={calculationType}
              onValueChange={(v) => setCalculationType(v as ConcreteCalculationType)}
            >
              <SelectTrigger id="concrete-type" className="h-11 w-full text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {typeOptions.map(([value, label]) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Tabs value={units} onValueChange={(v) => setUnits(v as "metres" | "feet")}>
            <TabsList className="w-full">
              <TabsTrigger value="metres" className="flex-1">Metres</TabsTrigger>
              <TabsTrigger value="feet" className="flex-1">Feet</TabsTrigger>
            </TabsList>
          </Tabs>

          {usesRectangle(calculationType) ? (
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col gap-2">
                <Label htmlFor="concrete-length">Length</Label>
                <Input
                  id="concrete-length"
                  type="number"
                  min={0}
                  step={0.1}
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value) || 0)}
                  className="h-11 text-base"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="concrete-width">Width</Label>
                <Input
                  id="concrete-width"
                  type="number"
                  min={0}
                  step={0.1}
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value) || 0)}
                  className="h-11 text-base"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="concrete-depth">Depth</Label>
                <Input
                  id="concrete-depth"
                  type="number"
                  min={0}
                  step={0.01}
                  value={depth}
                  onChange={(e) => setDepth(Number(e.target.value) || 0)}
                  className="h-11 text-base"
                />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="concrete-diameter">Diameter</Label>
                <Input
                  id="concrete-diameter"
                  type="number"
                  min={0}
                  step={0.01}
                  value={diameter}
                  onChange={(e) => setDiameter(Number(e.target.value) || 0)}
                  className="h-11 text-base"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="concrete-height">
                  {calculationType === "post-hole" ? "Depth" : "Height"}
                </Label>
                <Input
                  id="concrete-height"
                  type="number"
                  min={0}
                  step={0.01}
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value) || 0)}
                  className="h-11 text-base"
                />
              </div>
            </div>
          )}

          {(calculationType === "post-hole" || calculationType === "column") && (
            <div className="flex flex-col gap-2">
              <Label htmlFor="concrete-quantity">
                Number of {calculationType === "post-hole" ? "holes" : "columns"}
              </Label>
              <Input
                id="concrete-quantity"
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value) || 1)}
                className="h-11 text-base"
              />
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="concrete-bag-size">Bag size (kg)</Label>
              <Input
                id="concrete-bag-size"
                type="number"
                min={1}
                value={bagSizeKg}
                onChange={(e) => setBagSizeKg(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="concrete-price">Price per bag (optional)</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="concrete-price"
                  type="number"
                  min={0}
                  step={0.1}
                  value={pricePerBag}
                  onChange={(e) => setPricePerBag(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
          </div>

          <RatesDisclaimer>
            Mix ratios shown are general DIY guidance. For anything
            load-bearing or structural, check current UK building
            regulations and consult a structural engineer or building
            control before pouring.
          </RatesDisclaimer>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${calculationType}-${length}-${width}-${depth}-${diameter}-${height}-${quantity}-${bagSizeKg}-${pricePerBag}-${units}`}
        >
          <ResultStat label="Ready-mix bags needed" value={`${result.bagsNeeded}`} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Total volume" value={`${formatNumber(result.totalVolumeM3, 3)} m³`} />
            <ResultStat label="Total weight" value={`${formatNumber(result.totalWeightKg, 0)} kg`} />
            <ResultStat label="Recommended mix" value={result.mixRatio} />
            {pricePerBag > 0 && (
              <ResultStat label="Estimated cost" value={formatCurrency(result.estimatedCost, 2)} />
            )}
          </div>
        </ResultCard>
      </div>
    </div>
  );
}
