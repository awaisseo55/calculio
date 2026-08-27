"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateMarriageAllowance } from "@/lib/calc/marriage-allowance";
import { formatCurrency } from "@/lib/format";

export function MarriageAllowanceCalculator() {
  const [lowerEarnerIncome, setLowerEarnerIncome] = React.useState(9000);
  const [higherEarnerIncome, setHigherEarnerIncome] = React.useState(30000);

  const result = React.useMemo(
    () => calculateMarriageAllowance({ lowerEarnerIncome, higherEarnerIncome }),
    [lowerEarnerIncome, higherEarnerIncome]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="mar-lower">Lower earner&apos;s annual income</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">£</span>
              <Input
                id="mar-lower"
                type="number"
                min={0}
                step={500}
                value={lowerEarnerIncome}
                onChange={(e) => setLowerEarnerIncome(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
            <p className="text-xs text-muted-foreground">The partner earning less, before tax</p>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="mar-higher">Higher earner&apos;s annual income</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">£</span>
              <Input
                id="mar-higher"
                type="number"
                min={0}
                step={500}
                value={higherEarnerIncome}
                onChange={(e) => setHigherEarnerIncome(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
            <p className="text-xs text-muted-foreground">The partner earning more, before tax</p>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${lowerEarnerIncome}-${higherEarnerIncome}`}>
          <ResultStat
            label="Net household saving"
            value={result.isEligible ? formatCurrency(result.netHouseholdSaving, 2) : "Not eligible"}
            emphasis
            positive={result.isEligible}
          />
          {result.isEligible && (
            <div className="mt-6 grid grid-cols-2 gap-6">
              <ResultStat label="Higher earner saves" value={formatCurrency(result.higherEarnerSaving, 2)} />
              <ResultStat label="Lower earner's extra tax" value={formatCurrency(result.lowerEarnerExtraTax, 2)} />
            </div>
          )}
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0 text-sm text-muted-foreground">
            To be eligible, the lower earner must have income below the Personal Allowance, and the higher
            earner must pay tax at the basic rate only. You apply for Marriage Allowance directly with HMRC, not
            through this calculator.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
