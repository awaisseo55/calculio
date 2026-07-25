"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import {
  calculateFuelCost,
  type DistanceUnit,
  type EfficiencyUnit,
} from "@/lib/calc/fuel-cost";
import { formatCurrency, formatNumber } from "@/lib/format";

export function FuelCostCalculator() {
  const [distance, setDistance] = React.useState(200);
  const [distanceUnit, setDistanceUnit] = React.useState<DistanceUnit>("miles");
  const [efficiency, setEfficiency] = React.useState(45);
  const [efficiencyUnit, setEfficiencyUnit] = React.useState<EfficiencyUnit>("mpg");
  const [pricePerLitre, setPricePerLitre] = React.useState(1.45);

  const result = React.useMemo(
    () =>
      calculateFuelCost({ distance, distanceUnit, efficiency, efficiencyUnit, pricePerLitre }),
    [distance, distanceUnit, efficiency, efficiencyUnit, pricePerLitre]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="distance">Distance</Label>
              <Tabs value={distanceUnit} onValueChange={(v) => setDistanceUnit(v as DistanceUnit)}>
                <TabsList>
                  <TabsTrigger value="miles">Miles</TabsTrigger>
                  <TabsTrigger value="km">Km</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <Input
              id="distance"
              type="number"
              min={0}
              value={distance}
              onChange={(e) => setDistance(Number(e.target.value) || 0)}
              className="h-11 text-base"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="efficiency">Fuel efficiency</Label>
              <Tabs
                value={efficiencyUnit}
                onValueChange={(v) => setEfficiencyUnit(v as EfficiencyUnit)}
              >
                <TabsList>
                  <TabsTrigger value="mpg">MPG</TabsTrigger>
                  <TabsTrigger value="l100km">L/100km</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <Input
              id="efficiency"
              type="number"
              min={0}
              step={0.1}
              value={efficiency}
              onChange={(e) => setEfficiency(Number(e.target.value) || 0)}
              className="h-11 text-base"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="price">Fuel price per litre</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="price"
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
          resultKey={`${distance}-${distanceUnit}-${efficiency}-${efficiencyUnit}-${pricePerLitre}`}
        >
          <ResultStat label="Total fuel cost" value={formatCurrency(result.totalCost, 2)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Cost per mile" value={formatCurrency(result.costPerMile, 2)} />
            <ResultStat label="Cost per km" value={formatCurrency(result.costPerKm, 2)} />
            <ResultStat label="Litres used" value={`${formatNumber(result.litresUsed, 1)} L`} />
            <ResultStat label="Equivalent MPG" value={formatNumber(result.mpg, 1)} />
          </div>
        </ResultCard>
      </div>
    </div>
  );
}
