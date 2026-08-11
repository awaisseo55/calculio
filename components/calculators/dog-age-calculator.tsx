"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateDogAge } from "@/lib/calc/dog-age";
import { formatNumber } from "@/lib/format";

export function DogAgeCalculator() {
  const [dogAgeYears, setDogAgeYears] = React.useState(4);

  const result = React.useMemo(() => calculateDogAge({ dogAgeYears }), [dogAgeYears]);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="dog-age">Your dog&apos;s age</Label>
            <div className="relative">
              <Input
                id="dog-age"
                type="number"
                min={0}
                max={25}
                step={0.5}
                value={dogAgeYears}
                onChange={(e) => setDogAgeYears(Number(e.target.value) || 0)}
                className="h-11 pr-14 text-base"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">years</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={dogAgeYears}>
          <ResultStat
            label="Roughly equivalent to a human age of"
            value={`${formatNumber(result.humanAgeYears, 1)} years`}
            emphasis
          />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Life stage" value={result.lifeStage} />
            <ResultStat label="Dog age" value={`${formatNumber(result.dogAgeYears, 1)} years`} />
          </div>
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0 text-sm text-muted-foreground">
            This uses a formula based on a 2020 canine ageing study, which
            found dogs age very rapidly in their first year, then more
            slowly. It does not adjust for breed size; smaller breeds tend
            to age more slowly and live longer in their later years than
            giant breeds. For any health concerns, speak to your vet rather
            than relying on this estimate.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
