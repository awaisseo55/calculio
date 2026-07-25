"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { RatesDisclaimer } from "@/components/calculators/rates-disclaimer";
import { calculateRoadTax, type FuelType } from "@/lib/calc/road-tax";
import { formatCurrency } from "@/lib/format";

const fuelTypes: { value: FuelType; label: string }[] = [
  { value: "petrol", label: "Petrol" },
  { value: "diesel", label: "Diesel" },
  { value: "hybrid", label: "Hybrid" },
  { value: "electric", label: "Electric" },
];

export function RoadTaxCalculator() {
  const [fuelType, setFuelType] = React.useState<FuelType>("petrol");
  const [firstRegistrationDate, setFirstRegistrationDate] = React.useState("2021-06-15");
  const [co2Emissions, setCo2Emissions] = React.useState(120);
  const [listPriceOver40k, setListPriceOver40k] = React.useState(false);

  const result = React.useMemo(
    () =>
      calculateRoadTax({ fuelType, firstRegistrationDate, co2Emissions, listPriceOver40k }),
    [fuelType, firstRegistrationDate, co2Emissions, listPriceOver40k]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="fuel-type">Fuel type</Label>
            <Select value={fuelType} onValueChange={(v) => setFuelType(v as FuelType)}>
              <SelectTrigger id="fuel-type" className="h-11 w-full text-base">
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
            <Label htmlFor="reg-date">First registration date</Label>
            <Input
              id="reg-date"
              type="date"
              value={firstRegistrationDate}
              onChange={(e) => setFirstRegistrationDate(e.target.value)}
              className="h-11 text-base"
            />
          </div>

          {fuelType !== "electric" && (
            <div className="flex flex-col gap-2">
              <Label htmlFor="co2">CO2 emissions (g/km)</Label>
              <Input
                id="co2"
                type="number"
                min={0}
                value={co2Emissions}
                onChange={(e) => setCo2Emissions(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
              <p className="text-xs text-muted-foreground">
                Find this on your V5C logbook or the vehicle&apos;s DVLA record.
              </p>
            </div>
          )}

          <label className="flex items-center gap-2.5 text-sm text-foreground">
            <input
              type="checkbox"
              checked={listPriceOver40k}
              onChange={(e) => setListPriceOver40k(e.target.checked)}
              className="size-4 rounded border-input accent-primary"
            />
            List price was over £40,000 when new
          </label>

          <RatesDisclaimer />
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${fuelType}-${firstRegistrationDate}-${co2Emissions}-${listPriceOver40k}`}
        >
          {result.era === "pre-2001" ? (
            <p className="text-sm text-muted-foreground">{result.notice}</p>
          ) : (
            <>
              {result.firstYearRate !== null && (
                <ResultStat label="First-year rate" value={formatCurrency(result.firstYearRate)} emphasis />
              )}
              <div className="mt-6 grid grid-cols-2 gap-6">
                <ResultStat
                  label="Standard annual rate"
                  value={formatCurrency(result.standardAnnualRate ?? 0)}
                />
                {result.expensiveCarSupplement > 0 && (
                  <ResultStat
                    label={`Expensive car supplement (yrs 2-${1 + result.supplementYearsRemaining})`}
                    value={formatCurrency(result.expensiveCarSupplement)}
                  />
                )}
              </div>
              {result.notice && (
                <p className="mt-4 text-xs text-muted-foreground">{result.notice}</p>
              )}
            </>
          )}
        </ResultCard>
      </div>
    </div>
  );
}
