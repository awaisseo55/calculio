"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateProfitMargin, type ProfitMarginMode } from "@/lib/calc/profit-margin";
import { formatCurrency, formatPercent } from "@/lib/format";

export function ProfitMarginCalculator() {
  const [mode, setMode] = React.useState<ProfitMarginMode>("from-prices");
  const [costPrice, setCostPrice] = React.useState(40);
  const [sellingPrice, setSellingPrice] = React.useState(65);
  const [targetMarginPercent, setTargetMarginPercent] = React.useState(30);

  const result = React.useMemo(
    () => calculateProfitMargin({ mode, costPrice, sellingPrice, targetMarginPercent }),
    [mode, costPrice, sellingPrice, targetMarginPercent]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label>What do you want to work out</Label>
            <Tabs value={mode} onValueChange={(v) => setMode(v as ProfitMarginMode)}>
              <TabsList className="w-full">
                <TabsTrigger value="from-prices" className="flex-1">Margin from prices</TabsTrigger>
                <TabsTrigger value="target-margin" className="flex-1">Price for a target margin</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="pm-cost">Cost price</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="pm-cost"
                type="number"
                min={0}
                step={0.5}
                value={costPrice}
                onChange={(e) => setCostPrice(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          {mode === "from-prices" ? (
            <div className="flex flex-col gap-2">
              <Label htmlFor="pm-sell">Selling price</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="pm-sell"
                  type="number"
                  min={0}
                  step={0.5}
                  value={sellingPrice}
                  onChange={(e) => setSellingPrice(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <Label htmlFor="pm-target">Target profit margin</Label>
              <div className="relative">
                <Input
                  id="pm-target"
                  type="number"
                  min={0}
                  max={99}
                  step={1}
                  value={targetMarginPercent}
                  onChange={(e) => setTargetMarginPercent(Number(e.target.value) || 0)}
                  className="h-11 pr-7 text-base"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${mode}-${costPrice}-${sellingPrice}-${targetMarginPercent}`}>
          <ResultStat
            label={mode === "from-prices" ? "Profit margin" : "Required selling price"}
            value={mode === "from-prices" ? formatPercent(result.marginPercent) : formatCurrency(result.sellingPrice, 2)}
            emphasis
          />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Profit per unit" value={formatCurrency(result.profit, 2)} positive />
            <ResultStat label="Markup" value={formatPercent(result.markupPercent)} />
            {mode === "target-margin" && (
              <ResultStat label="Profit margin" value={formatPercent(result.marginPercent)} />
            )}
          </div>
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0 text-sm text-muted-foreground">
            Margin and markup are not the same thing. Margin is profit as a
            percentage of your selling price, while markup is profit as a
            percentage of your cost price, so the two figures are always
            different unless profit is zero.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
