"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateTip } from "@/lib/calc/tip";
import { formatCurrency } from "@/lib/format";
import { cn } from "@/lib/utils";

const presetTips = [10, 12.5, 15, 20];

export function TipCalculator() {
  const [billAmount, setBillAmount] = React.useState(84.5);
  const [tipPercent, setTipPercent] = React.useState(12.5);
  const [splitBetween, setSplitBetween] = React.useState(4);

  const result = React.useMemo(
    () => calculateTip({ billAmount, tipPercent, splitBetween }),
    [billAmount, tipPercent, splitBetween]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="tip-bill">Bill amount</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="tip-bill"
                type="number"
                min={0}
                step={0.01}
                value={billAmount}
                onChange={(e) => setBillAmount(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="tip-percent">Tip percentage</Label>
            <div className="flex flex-wrap gap-2">
              {presetTips.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setTipPercent(preset)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition",
                    tipPercent === preset
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:text-foreground"
                  )}
                >
                  {preset}%
                </button>
              ))}
            </div>
            <div className="relative mt-1">
              <Input
                id="tip-percent"
                type="number"
                min={0}
                step={0.5}
                value={tipPercent}
                onChange={(e) => setTipPercent(Number(e.target.value) || 0)}
                className="h-11 pr-7 text-base"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="tip-split">Split between (people)</Label>
            <Input
              id="tip-split"
              type="number"
              min={1}
              value={splitBetween}
              onChange={(e) => setSplitBetween(Number(e.target.value) || 1)}
              className="h-11 text-base"
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${billAmount}-${tipPercent}-${splitBetween}`}>
          <ResultStat label="Total bill" value={formatCurrency(result.totalBill, 2)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Tip amount" value={formatCurrency(result.tipAmount, 2)} />
            <ResultStat label="Per person" value={formatCurrency(result.perPersonTotal, 2)} />
          </div>
        </ResultCard>
      </div>
    </div>
  );
}
