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
import { calculateMpg } from "@/lib/calc/mpg";
import type { FuelUnit, MpgFuelType } from "@/lib/calc/mpg";
import { formatCurrency, formatNumber } from "@/lib/format";

const fuelTypes: { value: MpgFuelType; label: string }[] = [
  { value: "petrol", label: "Petrol" },
  { value: "diesel", label: "Diesel" },
  { value: "hybrid", label: "Hybrid" },
  { value: "electric", label: "Electric" },
];

export function MpgCalculator() {
  const [distanceMiles, setDistanceMiles] = React.useState(300);
  const [fuelUsed, setFuelUsed] = React.useState(35);
  const [fuelUnit, setFuelUnit] = React.useState<FuelUnit>("litres");
  const [fuelType, setFuelType] = React.useState<MpgFuelType>("petrol");
  const [pricePerLitre, setPricePerLitre] = React.useState(1.45);

  const result = React.useMemo(
    () => calculateMpg({ distanceMiles, fuelUsed, fuelUnit, fuelType, pricePerLitre }),
    [distanceMiles, fuelUsed, fuelUnit, fuelType, pricePerLitre]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="mpg-distance">Distance driven (miles)</Label>
            <Input
              id="mpg-distance"
              type="number"
              min={0}
              value={distanceMiles}
              onChange={(e) => setDistanceMiles(Number(e.target.value) || 0)}
              className="h-11 text-base"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="mpg-fuel-used">Fuel used</Label>
              <Tabs value={fuelUnit} onValueChange={(v) => setFuelUnit(v as FuelUnit)}>
                <TabsList>
                  <TabsTrigger value="litres">Litres</TabsTrigger>
                  <TabsTrigger value="gallons">Gallons</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <Input
              id="mpg-fuel-used"
              type="number"
              min={0}
              step={0.1}
              value={fuelUsed}
              onChange={(e) => setFuelUsed(Number(e.target.value) || 0)}
              className="h-11 text-base"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="mpg-fuel-type">Fuel type</Label>
            <Select value={fuelType} onValueChange={(v) => setFuelType(v as MpgFuelType)}>
              <SelectTrigger id="mpg-fuel-type" className="h-11 w-full text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {fuelTypes.map((f) => (
                  <SelectItem key={f.value} value={f.value}>
                    {f.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="mpg-price">Fuel price per litre</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="mpg-price"
                type="number"
                min={0}
                step={0.01}
                value={pricePerLitre}
                onChange={(e) => setPricePerLitre(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${distanceMiles}-${fuelUsed}-${fuelUnit}-${fuelType}-${pricePerLitre}`}
        >
          <ResultStat label="Your MPG (imperial)" value={formatNumber(result.mpgImperial, 1)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="MPG (US)" value={formatNumber(result.mpgUS, 1)} />
            <ResultStat label="Litres per 100km" value={formatNumber(result.litresPer100km, 1)} />
            <ResultStat label="Total fuel cost" value={formatCurrency(result.totalCost, 2)} />
            <ResultStat label="Cost per mile" value={formatCurrency(result.costPerMile, 2)} />
          </div>
        </ResultCard>
      </div>
    </div>
  );
}
