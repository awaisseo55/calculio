"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateBreakEven } from "@/lib/calc/break-even";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/format";

export function BreakEvenCalculator() {
  const [fixedCosts, setFixedCosts] = React.useState(3000);
  const [pricePerUnit, setPricePerUnit] = React.useState(25);
  const [variableCostPerUnit, setVariableCostPerUnit] = React.useState(10);
  const [targetProfit, setTargetProfit] = React.useState(1000);

  const result = React.useMemo(
    () => calculateBreakEven({ fixedCosts, pricePerUnit, variableCostPerUnit, targetProfit }),
    [fixedCosts, pricePerUnit, variableCostPerUnit, targetProfit]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="be-fixed">Fixed costs (per period)</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="be-fixed"
                type="number"
                min={0}
                step={50}
                value={fixedCosts}
                onChange={(e) => setFixedCosts(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
            <p className="text-xs text-muted-foreground">Rent, salaries, subscriptions, whatever does not change with sales</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="be-price">Price per unit</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="be-price"
                  type="number"
                  min={0}
                  step={0.5}
                  value={pricePerUnit}
                  onChange={(e) => setPricePerUnit(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="be-varcost">Variable cost per unit</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="be-varcost"
                  type="number"
                  min={0}
                  step={0.5}
                  value={variableCostPerUnit}
                  onChange={(e) => setVariableCostPerUnit(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="be-target">Target profit (optional)</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="be-target"
                type="number"
                min={0}
                step={100}
                value={targetProfit}
                onChange={(e) => setTargetProfit(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${fixedCosts}-${pricePerUnit}-${variableCostPerUnit}-${targetProfit}`}
        >
          {result.breakEvenUnits !== null ? (
            <>
              <ResultStat
                label="Break-even units"
                value={`${formatNumber(result.breakEvenUnits, 1)} units`}
                emphasis
              />
              <div className="mt-6 grid grid-cols-2 gap-6">
                <ResultStat label="Break-even revenue" value={formatCurrency(result.breakEvenRevenue ?? 0)} />
                <ResultStat label="Contribution margin" value={formatCurrency(result.contributionMargin, 2)} />
                <ResultStat label="Contribution margin ratio" value={formatPercent(result.contributionMarginRatioPercent)} />
                {result.unitsForTargetProfit !== null && (
                  <ResultStat
                    label="Units for target profit"
                    value={`${formatNumber(result.unitsForTargetProfit, 1)} units`}
                  />
                )}
              </div>
            </>
          ) : (
            <p className="text-sm text-muted-foreground">
              Your price per unit needs to be higher than your variable cost
              per unit for the business to ever break even.
            </p>
          )}
        </ResultCard>

        {result.revenueForTargetProfit !== null && (
          <Card className="p-6">
            <CardContent className="p-0 text-sm text-muted-foreground">
              To hit your target profit of{" "}
              <span className="font-mono font-medium text-foreground">{formatCurrency(targetProfit)}</span>,
              you would need revenue of around{" "}
              <span className="font-mono font-medium text-foreground">
                {formatCurrency(result.revenueForTargetProfit)}
              </span>{" "}
              for the period.
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
