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
import { calculatePaintCoverage } from "@/lib/calc/paint-coverage";
import type { TinSize } from "@/lib/calc/paint-coverage";
import { formatNumber } from "@/lib/format";

const FT_TO_M = 0.3048;

const tinSizes: { value: string; label: string }[] = [
  { value: "1", label: "1 litre tins" },
  { value: "2.5", label: "2.5 litre tins" },
  { value: "5", label: "5 litre tins" },
  { value: "10", label: "10 litre tins" },
];

export function PaintCoverageCalculator() {
  const [units, setUnits] = React.useState<"metres" | "feet">("metres");
  const [length, setLength] = React.useState(4);
  const [width, setWidth] = React.useState(3.5);
  const [height, setHeight] = React.useState(2.4);
  const [coats, setCoats] = React.useState(2);
  const [doors, setDoors] = React.useState(1);
  const [windows, setWindows] = React.useState(1);
  const [coverageRate, setCoverageRate] = React.useState(12);
  const [tinSize, setTinSize] = React.useState("2.5");

  const lengthM = units === "metres" ? length : length * FT_TO_M;
  const widthM = units === "metres" ? width : width * FT_TO_M;
  const heightM = units === "metres" ? height : height * FT_TO_M;

  const result = React.useMemo(
    () =>
      calculatePaintCoverage({
        lengthM,
        widthM,
        heightM,
        coats,
        doors,
        windows,
        coverageRatePerLitre: coverageRate,
        tinSize: Number(tinSize) as TinSize,
      }),
    [lengthM, widthM, heightM, coats, doors, windows, coverageRate, tinSize]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <Tabs value={units} onValueChange={(v) => setUnits(v as "metres" | "feet")}>
            <TabsList className="w-full">
              <TabsTrigger value="metres" className="flex-1">Metres</TabsTrigger>
              <TabsTrigger value="feet" className="flex-1">Feet</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col gap-2">
              <Label htmlFor="paint-length">Length</Label>
              <Input
                id="paint-length"
                type="number"
                min={0}
                step={0.1}
                value={length}
                onChange={(e) => setLength(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="paint-width">Width</Label>
              <Input
                id="paint-width"
                type="number"
                min={0}
                step={0.1}
                value={width}
                onChange={(e) => setWidth(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="paint-height">Height</Label>
              <Input
                id="paint-height"
                type="number"
                min={0}
                step={0.1}
                value={height}
                onChange={(e) => setHeight(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col gap-2">
              <Label htmlFor="paint-coats">Coats</Label>
              <Input
                id="paint-coats"
                type="number"
                min={1}
                max={5}
                value={coats}
                onChange={(e) => setCoats(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="paint-doors">Doors</Label>
              <Input
                id="paint-doors"
                type="number"
                min={0}
                value={doors}
                onChange={(e) => setDoors(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="paint-windows">Windows</Label>
              <Input
                id="paint-windows"
                type="number"
                min={0}
                value={windows}
                onChange={(e) => setWindows(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="paint-rate">Paint coverage rate (m² per litre)</Label>
            <Input
              id="paint-rate"
              type="number"
              min={1}
              value={coverageRate}
              onChange={(e) => setCoverageRate(Number(e.target.value) || 0)}
              className="h-11 text-base"
            />
            <p className="text-xs text-muted-foreground">
              Check the tin for your paint&apos;s own coverage rate. 12m² per litre is
              a common default for emulsion on previously painted walls.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="paint-tin">Tin size</Label>
            <Select value={tinSize} onValueChange={(v) => v && setTinSize(v)}>
              <SelectTrigger id="paint-tin" className="h-11 w-full text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {tinSizes.map((t) => (
                  <SelectItem key={t.value} value={t.value}>
                    {t.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${lengthM}-${widthM}-${heightM}-${coats}-${doors}-${windows}-${coverageRate}-${tinSize}`}
        >
          <ResultStat label="Tins to buy" value={`${result.tinsNeeded}`} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Litres needed" value={`${formatNumber(result.litresNeeded, 1)} L`} />
            <ResultStat label="Net wall area" value={`${formatNumber(result.netWallArea, 1)} m²`} />
            <ResultStat label="Gross wall area" value={`${formatNumber(result.grossWallArea, 1)} m²`} />
          </div>
        </ResultCard>
      </div>
    </div>
  );
}
