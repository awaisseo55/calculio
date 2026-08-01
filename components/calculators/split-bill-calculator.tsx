"use client";

import * as React from "react";
import { Plus, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateSplitBill, type SplitBillMode } from "@/lib/calc/split-bill";
import { formatCurrency } from "@/lib/format";
import { cn } from "@/lib/utils";

const presetTips = [0, 10, 12.5, 15, 20];

export function SplitBillCalculator() {
  const [mode, setMode] = React.useState<SplitBillMode>("even");
  const [totalBill, setTotalBill] = React.useState(96);
  const [tipPercent, setTipPercent] = React.useState(12.5);
  const [numberOfPeople, setNumberOfPeople] = React.useState(4);
  const [personAmounts, setPersonAmounts] = React.useState<number[]>([28, 22, 19, 27]);

  const result = React.useMemo(
    () =>
      calculateSplitBill({
        mode,
        totalBill,
        tipPercent,
        numberOfPeople,
        personAmounts,
      }),
    [mode, totalBill, tipPercent, numberOfPeople, personAmounts]
  );

  const updatePersonAmount = (index: number, value: number) => {
    setPersonAmounts((prev) => prev.map((v, i) => (i === index ? value : v)));
  };

  const addPerson = () => {
    if (personAmounts.length >= 12) return;
    setPersonAmounts((prev) => [...prev, 0]);
  };

  const removePerson = (index: number) => {
    if (personAmounts.length <= 2) return;
    setPersonAmounts((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label>How do you want to split it</Label>
            <Tabs value={mode} onValueChange={(v) => setMode(v as SplitBillMode)}>
              <TabsList className="w-full">
                <TabsTrigger value="even" className="flex-1">Split evenly</TabsTrigger>
                <TabsTrigger value="unequal" className="flex-1">By what each person ordered</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="sb-tip">Tip percentage</Label>
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
                id="sb-tip"
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

          {mode === "even" ? (
            <>
              <div className="flex flex-col gap-2">
                <Label htmlFor="sb-total">Total bill amount</Label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                  <Input
                    id="sb-total"
                    type="number"
                    min={0}
                    step={0.01}
                    value={totalBill}
                    onChange={(e) => setTotalBill(Number(e.target.value) || 0)}
                    className="h-11 pl-7 text-base"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="sb-people">Number of people</Label>
                <Input
                  id="sb-people"
                  type="number"
                  min={1}
                  max={20}
                  value={numberOfPeople}
                  onChange={(e) => setNumberOfPeople(Number(e.target.value) || 1)}
                  className="h-11 text-base"
                />
              </div>
            </>
          ) : (
            <div className="flex flex-col gap-3">
              <Label>What each person ordered</Label>
              {personAmounts.map((amount, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-20 shrink-0 text-sm text-muted-foreground">
                    Person {i + 1}
                  </span>
                  <div className="relative flex-1">
                    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                    <Input
                      type="number"
                      min={0}
                      step={0.01}
                      value={amount}
                      onChange={(e) => updatePersonAmount(i, Number(e.target.value) || 0)}
                      className="h-11 pl-7 text-base"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removePerson(i)}
                    disabled={personAmounts.length <= 2}
                    className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border text-muted-foreground transition hover:text-foreground disabled:opacity-40"
                    aria-label={`Remove person ${i + 1}`}
                  >
                    <X className="size-4" aria-hidden="true" />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addPerson}
                disabled={personAmounts.length >= 12}
                className="flex items-center justify-center gap-1.5 rounded-lg border border-dashed border-border py-2.5 text-sm font-medium text-muted-foreground transition hover:text-foreground disabled:opacity-40"
              >
                <Plus className="size-4" aria-hidden="true" />
                Add person
              </button>
              <p className="text-xs text-muted-foreground">
                Tip is split in proportion to what each person ordered,
                rather than evenly.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${mode}-${totalBill}-${tipPercent}-${numberOfPeople}-${personAmounts.join(",")}`}
        >
          <ResultStat label="Total with tip" value={formatCurrency(result.grandTotal, 2)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Bill subtotal" value={formatCurrency(result.billSubtotal, 2)} />
            <ResultStat label="Total tip" value={formatCurrency(result.tipAmount, 2)} />
          </div>
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0">
            <h3 className="text-sm font-semibold text-foreground">
              Per-person breakdown
            </h3>
            <div className="mt-3 flex flex-col gap-2">
              {result.breakdown.map((person) => (
                <div
                  key={person.label}
                  className="flex items-center justify-between border-t border-border/60 py-2 text-sm first:border-t-0"
                >
                  <span className="text-muted-foreground">{person.label}</span>
                  <span className="font-mono font-medium text-foreground">
                    {formatCurrency(person.total, 2)}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
