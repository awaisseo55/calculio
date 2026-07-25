"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateDiscount, type DiscountMode } from "@/lib/calc/discount";
import { formatCurrency, formatPercent } from "@/lib/format";

export function DiscountCalculator() {
  const [originalPrice, setOriginalPrice] = React.useState(80);
  const [mode, setMode] = React.useState<DiscountMode>("percent");
  const [discountPercent, setDiscountPercent] = React.useState(20);
  const [discountAmount, setDiscountAmount] = React.useState(10);

  const result = React.useMemo(
    () => calculateDiscount({ originalPrice, mode, discountPercent, discountAmount }),
    [originalPrice, mode, discountPercent, discountAmount]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="discount-price">Original price</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="discount-price"
                type="number"
                min={0}
                step={0.01}
                value={originalPrice}
                onChange={(e) => setOriginalPrice(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Discount type</Label>
            <Tabs value={mode} onValueChange={(v) => setMode(v as DiscountMode)}>
              <TabsList className="w-full">
                <TabsTrigger value="percent" className="flex-1">Percentage off</TabsTrigger>
                <TabsTrigger value="amount" className="flex-1">Amount off</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {mode === "percent" ? (
            <div className="flex flex-col gap-2">
              <Label htmlFor="discount-percent">Discount</Label>
              <div className="relative">
                <Input
                  id="discount-percent"
                  type="number"
                  min={0}
                  max={100}
                  step={0.1}
                  value={discountPercent}
                  onChange={(e) => setDiscountPercent(Number(e.target.value) || 0)}
                  className="h-11 pr-7 text-base"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <Label htmlFor="discount-amount">Amount off</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="discount-amount"
                  type="number"
                  min={0}
                  step={0.01}
                  value={discountAmount}
                  onChange={(e) => setDiscountAmount(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${originalPrice}-${mode}-${discountPercent}-${discountAmount}`}>
          <ResultStat label="Final price" value={formatCurrency(result.finalPrice, 2)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Amount saved" value={formatCurrency(result.amountSaved, 2)} positive />
            <ResultStat label="Effective discount" value={formatPercent(result.effectiveDiscountPercent, 1)} />
          </div>
        </ResultCard>
      </div>
    </div>
  );
}
