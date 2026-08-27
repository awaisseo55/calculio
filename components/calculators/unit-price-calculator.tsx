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
import { calculateUnitPrice } from "@/lib/calc/unit-price";
import { formatCurrency, formatPercent } from "@/lib/format";

const UNIT_OPTIONS = [
  { value: "g", label: "grams (g)" },
  { value: "kg", label: "kilograms (kg)" },
  { value: "ml", label: "millilitres (ml)" },
  { value: "l", label: "litres (l)" },
  { value: "item", label: "items" },
];

export function UnitPriceCalculator() {
  const [priceA, setPriceA] = React.useState(2.5);
  const [quantityA, setQuantityA] = React.useState(500);
  const [priceB, setPriceB] = React.useState(4.0);
  const [quantityB, setQuantityB] = React.useState(900);
  const [unit, setUnit] = React.useState("g");

  const result = React.useMemo(
    () => calculateUnitPrice({ priceA, quantityA, priceB, quantityB }),
    [priceA, quantityA, priceB, quantityB]
  );

  const unitLabel = UNIT_OPTIONS.find((u) => u.value === unit)?.value ?? unit;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="up-unit">Unit of measurement</Label>
            <Select value={unit} onValueChange={(v) => setUnit(v ?? "g")}>
              <SelectTrigger id="up-unit" className="h-11 w-full text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {UNIT_OPTIONS.map((u) => (
                  <SelectItem key={u.value} value={u.value}>
                    {u.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-xl border border-border/60 p-4">
            <p className="mb-3 text-sm font-medium text-foreground">Product A</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="up-priceA">Price</Label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">£</span>
                  <Input
                    id="up-priceA"
                    type="number"
                    min={0}
                    step={0.01}
                    value={priceA}
                    onChange={(e) => setPriceA(Number(e.target.value) || 0)}
                    className="h-11 pl-7 text-base"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="up-quantityA">Quantity ({unitLabel})</Label>
                <Input
                  id="up-quantityA"
                  type="number"
                  min={0.01}
                  step={1}
                  value={quantityA}
                  onChange={(e) => setQuantityA(Number(e.target.value) || 0)}
                  className="h-11 text-base"
                />
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border/60 p-4">
            <p className="mb-3 text-sm font-medium text-foreground">Product B</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="up-priceB">Price</Label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">£</span>
                  <Input
                    id="up-priceB"
                    type="number"
                    min={0}
                    step={0.01}
                    value={priceB}
                    onChange={(e) => setPriceB(Number(e.target.value) || 0)}
                    className="h-11 pl-7 text-base"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="up-quantityB">Quantity ({unitLabel})</Label>
                <Input
                  id="up-quantityB"
                  type="number"
                  min={0.01}
                  step={1}
                  value={quantityB}
                  onChange={(e) => setQuantityB(Number(e.target.value) || 0)}
                  className="h-11 text-base"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${priceA}-${quantityA}-${priceB}-${quantityB}`}>
          <ResultStat
            label="Cheaper option"
            value={result.cheaperOption === "same" ? "Same price" : `Product ${result.cheaperOption}`}
            emphasis
            positive={result.cheaperOption !== "same"}
          />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label={`Product A per ${unitLabel}`} value={formatCurrency(result.unitPriceA, 3)} />
            <ResultStat label={`Product B per ${unitLabel}`} value={formatCurrency(result.unitPriceB, 3)} />
          </div>
          {result.cheaperOption !== "same" && (
            <div className="mt-6">
              <ResultStat label="You save" value={formatPercent(result.savingsPercent)} />
            </div>
          )}
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0 text-sm text-muted-foreground">
            Compares price per unit only. It does not account for quality, ingredients, or whether you will
            actually use the larger pack before it goes off or out of date.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
