"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateVat, type VatMode } from "@/lib/calc/vat";
import { formatCurrency } from "@/lib/format";

const RATE_OPTIONS = [
  { value: "20", label: "20% (Standard)" },
  { value: "5", label: "5% (Reduced)" },
  { value: "0", label: "0% (Zero)" },
];

export function VatCalculator() {
  const [amount, setAmount] = React.useState(120);
  const [ratePercent, setRatePercent] = React.useState("20");
  const [mode, setMode] = React.useState<VatMode>("extract");

  const result = React.useMemo(
    () => calculateVat({ amount, ratePercent: Number(ratePercent), mode }),
    [amount, ratePercent, mode]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label>What are you starting with?</Label>
            <Tabs value={mode} onValueChange={(v) => setMode(v as VatMode)}>
              <TabsList className="w-full">
                <TabsTrigger value="extract" className="flex-1">Gross (inc. VAT)</TabsTrigger>
                <TabsTrigger value="add" className="flex-1">Net (excl. VAT)</TabsTrigger>
              </TabsList>
            </Tabs>
            <p className="text-xs text-muted-foreground">
              {mode === "extract"
                ? "Extract the VAT already included in a price."
                : "Add VAT on top of a net price."}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="vat-amount">
              {mode === "extract" ? "Gross amount" : "Net amount"}
            </Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="vat-amount"
                type="number"
                min={0}
                step={0.01}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label>VAT rate</Label>
            <Tabs value={ratePercent} onValueChange={setRatePercent}>
              <TabsList className="w-full">
                {RATE_OPTIONS.map((opt) => (
                  <TabsTrigger key={opt.value} value={opt.value} className="flex-1">
                    {opt.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${amount}-${ratePercent}-${mode}`}>
          <ResultStat label="Gross (inc. VAT)" value={formatCurrency(result.gross, 2)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Net (excl. VAT)" value={formatCurrency(result.net, 2)} />
            <ResultStat label="VAT amount" value={formatCurrency(result.vat, 2)} />
          </div>
        </ResultCard>
      </div>
    </div>
  );
}
