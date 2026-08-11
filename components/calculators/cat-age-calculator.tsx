"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateCatAge } from "@/lib/calc/cat-age";
import { formatNumber } from "@/lib/format";

export function CatAgeCalculator() {
  const [catAgeYears, setCatAgeYears] = React.useState(3);

  const result = React.useMemo(() => calculateCatAge({ catAgeYears }), [catAgeYears]);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="cat-age">Your cat&apos;s age</Label>
            <div className="relative">
              <Input
                id="cat-age"
                type="number"
                min={0}
                max={25}
                step={0.5}
                value={catAgeYears}
                onChange={(e) => setCatAgeYears(Number(e.target.value) || 0)}
                className="h-11 pr-14 text-base"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">years</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={catAgeYears}>
          <ResultStat
            label="Roughly equivalent to a human age of"
            value={`${formatNumber(result.humanAgeYears, 1)} years`}
            emphasis
          />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Life stage" value={result.lifeStage} />
            <ResultStat label="Cat age" value={`${formatNumber(result.catAgeYears, 1)} years`} />
          </div>
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0 text-sm text-muted-foreground">
            This uses the standard cat ageing chart used by vets and cat
            welfare charities, where a cat reaches roughly 15 human years by
            their first birthday and 24 by their second, then ages more
            slowly after that. For any health concerns, speak to your vet
            rather than relying on this estimate.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
