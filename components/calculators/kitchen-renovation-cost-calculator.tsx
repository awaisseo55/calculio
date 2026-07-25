"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import {
  calculateKitchenRenovationCost,
  KITCHEN_SIZE_LABELS,
  KITCHEN_QUALITY_LABELS,
  KITCHEN_WORK_ITEM_LABELS,
  type KitchenSize,
  type KitchenQuality,
  type KitchenWorkItem,
} from "@/lib/calc/kitchen-renovation-cost";
import { formatCurrency } from "@/lib/format";

const sizeOptions = Object.entries(KITCHEN_SIZE_LABELS) as [KitchenSize, string][];
const qualityOptions = Object.entries(KITCHEN_QUALITY_LABELS) as [KitchenQuality, string][];
const workItemOptions = Object.entries(KITCHEN_WORK_ITEM_LABELS) as [KitchenWorkItem, string][];

const DEFAULT_ITEMS: KitchenWorkItem[] = [
  "newUnits",
  "worktops",
  "appliances",
  "flooring",
  "tiling",
  "electrical",
  "plumbing",
  "plastering",
  "painting",
  "removal",
];

export function KitchenRenovationCostCalculator() {
  const [size, setSize] = React.useState<KitchenSize>("medium");
  const [quality, setQuality] = React.useState<KitchenQuality>("mid-range");
  const [workItems, setWorkItems] = React.useState<KitchenWorkItem[]>(DEFAULT_ITEMS);

  function toggleItem(item: KitchenWorkItem) {
    setWorkItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  }

  const result = React.useMemo(
    () => calculateKitchenRenovationCost({ size, quality, workItems }),
    [size, quality, workItems]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="kitchen-size">Kitchen size</Label>
            <Select value={size} onValueChange={(v) => setSize(v as KitchenSize)}>
              <SelectTrigger id="kitchen-size" className="h-11 w-full text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {sizeOptions.map(([value, label]) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="kitchen-quality">Quality level</Label>
            <Select value={quality} onValueChange={(v) => setQuality(v as KitchenQuality)}>
              <SelectTrigger id="kitchen-quality" className="h-11 w-full text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {qualityOptions.map(([value, label]) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Work included</Label>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {workItemOptions.map(([value, label]) => (
                <label
                  key={value}
                  className="flex items-center gap-2.5 rounded-lg border border-border px-3 py-2.5 text-sm text-foreground"
                >
                  <input
                    type="checkbox"
                    checked={workItems.includes(value)}
                    onChange={() => toggleItem(value)}
                    className="size-4 rounded border-input accent-primary"
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${size}-${quality}-${workItems.join(",")}`}>
          <ResultStat
            label="Estimated total cost"
            value={`${formatCurrency(result.totalLow, 0)} to ${formatCurrency(result.totalHigh, 0)}`}
            emphasis
          />
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            Ranges are broad estimates based on typical UK 2026 patterns, not a
            quote from any specific retailer or installer. Always get quotes
            from qualified tradespeople for your actual kitchen.
          </p>
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0">
            <h3 className="text-sm font-semibold text-foreground">Cost breakdown</h3>
            <div className="mt-3 flex flex-col gap-2">
              {result.breakdown.map((row) => (
                <div
                  key={row.item}
                  className="flex items-center justify-between border-t border-border/60 py-2 text-sm first:border-t-0"
                >
                  <span className="text-muted-foreground">
                    {KITCHEN_WORK_ITEM_LABELS[row.item]}
                  </span>
                  <span className="font-mono font-medium text-foreground">
                    {formatCurrency(row.low, 0)} to {formatCurrency(row.high, 0)}
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
