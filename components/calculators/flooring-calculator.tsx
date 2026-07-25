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
import {
  calculateFlooring,
  DEFAULT_PACK_SIZE_M2,
  FLOORING_TYPE_LABELS,
  type FlooringType,
  type RoomShape,
} from "@/lib/calc/flooring";
import { formatCurrency, formatNumber } from "@/lib/format";

const FT_TO_M = 0.3048;

const flooringOptions = Object.entries(FLOORING_TYPE_LABELS) as [FlooringType, string][];

export function FlooringCalculator() {
  const [units, setUnits] = React.useState<"metres" | "feet">("metres");
  const [shape, setShape] = React.useState<RoomShape>("rectangle");
  const [length, setLength] = React.useState(4);
  const [width, setWidth] = React.useState(3.5);
  const [length2, setLength2] = React.useState(2);
  const [width2, setWidth2] = React.useState(1.5);
  const [customArea, setCustomArea] = React.useState(14);
  const [flooringType, setFlooringType] = React.useState<FlooringType>("laminate");
  const [packSize, setPackSize] = React.useState(DEFAULT_PACK_SIZE_M2.laminate);
  const [wastagePercent, setWastagePercent] = React.useState(10);
  const [pricePerM2, setPricePerM2] = React.useState(0);

  const lengthM = units === "metres" ? length : length * FT_TO_M;
  const widthM = units === "metres" ? width : width * FT_TO_M;
  const length2M = units === "metres" ? length2 : length2 * FT_TO_M;
  const width2M = units === "metres" ? width2 : width2 * FT_TO_M;
  const customAreaM2 = units === "metres" ? customArea : customArea * FT_TO_M * FT_TO_M;

  const result = React.useMemo(
    () =>
      calculateFlooring({
        shape,
        lengthM,
        widthM,
        length2M,
        width2M,
        customAreaM2,
        wastagePercent,
        packSizeM2: packSize,
        pricePerM2,
      }),
    [shape, lengthM, widthM, length2M, width2M, customAreaM2, wastagePercent, packSize, pricePerM2]
  );

  function handleFlooringTypeChange(value: FlooringType) {
    setFlooringType(value);
    setPackSize(DEFAULT_PACK_SIZE_M2[value]);
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label>Room shape</Label>
            <Tabs value={shape} onValueChange={(v) => setShape(v as RoomShape)}>
              <TabsList className="w-full">
                <TabsTrigger value="rectangle" className="flex-1">Rectangle</TabsTrigger>
                <TabsTrigger value="l-shape" className="flex-1">L-shape</TabsTrigger>
                <TabsTrigger value="custom" className="flex-1">Custom m²</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {shape !== "custom" && (
            <Tabs value={units} onValueChange={(v) => setUnits(v as "metres" | "feet")}>
              <TabsList className="w-full">
                <TabsTrigger value="metres" className="flex-1">Metres</TabsTrigger>
                <TabsTrigger value="feet" className="flex-1">Feet</TabsTrigger>
              </TabsList>
            </Tabs>
          )}

          {shape === "custom" ? (
            <div className="flex flex-col gap-2">
              <Label htmlFor="flooring-custom-area">Total floor area (m²)</Label>
              <Input
                id="flooring-custom-area"
                type="number"
                min={0}
                step={0.1}
                value={customArea}
                onChange={(e) => setCustomArea(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="flooring-length">
                    {shape === "l-shape" ? "Section A length" : "Length"}
                  </Label>
                  <Input
                    id="flooring-length"
                    type="number"
                    min={0}
                    step={0.1}
                    value={length}
                    onChange={(e) => setLength(Number(e.target.value) || 0)}
                    className="h-11 text-base"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="flooring-width">
                    {shape === "l-shape" ? "Section A width" : "Width"}
                  </Label>
                  <Input
                    id="flooring-width"
                    type="number"
                    min={0}
                    step={0.1}
                    value={width}
                    onChange={(e) => setWidth(Number(e.target.value) || 0)}
                    className="h-11 text-base"
                  />
                </div>
              </div>

              {shape === "l-shape" && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="flooring-length2">Section B length</Label>
                    <Input
                      id="flooring-length2"
                      type="number"
                      min={0}
                      step={0.1}
                      value={length2}
                      onChange={(e) => setLength2(Number(e.target.value) || 0)}
                      className="h-11 text-base"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="flooring-width2">Section B width</Label>
                    <Input
                      id="flooring-width2"
                      type="number"
                      min={0}
                      step={0.1}
                      value={width2}
                      onChange={(e) => setWidth2(Number(e.target.value) || 0)}
                      className="h-11 text-base"
                    />
                  </div>
                </div>
              )}
            </>
          )}

          <div className="flex flex-col gap-2">
            <Label htmlFor="flooring-type">Flooring type</Label>
            <Select value={flooringType} onValueChange={(v) => handleFlooringTypeChange(v as FlooringType)}>
              <SelectTrigger id="flooring-type" className="h-11 w-full text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {flooringOptions.map(([value, label]) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="flooring-pack-size">Pack size (m²)</Label>
              <Input
                id="flooring-pack-size"
                type="number"
                min={0.1}
                step={0.01}
                value={packSize}
                onChange={(e) => setPackSize(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="flooring-wastage">Wastage</Label>
              <div className="relative">
                <Input
                  id="flooring-wastage"
                  type="number"
                  min={0}
                  max={50}
                  value={wastagePercent}
                  onChange={(e) => setWastagePercent(Number(e.target.value) || 0)}
                  className="h-11 pr-7 text-base"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
              </div>
            </div>
          </div>
          <p className="-mt-4 text-xs text-muted-foreground">
            10% is a typical default. Use 15% or more for diagonal layouts or
            rooms with lots of alcoves and cuts.
          </p>

          <div className="flex flex-col gap-2">
            <Label htmlFor="flooring-price">Price per m² (optional)</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="flooring-price"
                type="number"
                min={0}
                step={0.5}
                value={pricePerM2}
                onChange={(e) => setPricePerM2(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${shape}-${length}-${width}-${length2}-${width2}-${customArea}-${flooringType}-${packSize}-${wastagePercent}-${pricePerM2}-${units}`}
        >
          <ResultStat label="Packs to buy" value={`${result.packsNeeded}`} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Floor area" value={`${formatNumber(result.baseAreaM2, 2)} m²`} />
            <ResultStat label="Area with wastage" value={`${formatNumber(result.areaWithWastageM2, 2)} m²`} />
            <ResultStat label="Total area purchased" value={`${formatNumber(result.totalAreaPurchasedM2, 2)} m²`} />
            {pricePerM2 > 0 && (
              <ResultStat label="Estimated cost" value={formatCurrency(result.estimatedCost, 2)} />
            )}
          </div>
        </ResultCard>
      </div>
    </div>
  );
}
