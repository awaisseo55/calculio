"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateOneRepMax } from "@/lib/calc/one-rep-max";
import { formatNumber } from "@/lib/format";

type WeightUnit = "kg" | "lb";

export function OneRepMaxCalculator() {
  const [weightLifted, setWeightLifted] = React.useState(100);
  const [reps, setReps] = React.useState(5);
  const [unit, setUnit] = React.useState<WeightUnit>("kg");

  const result = React.useMemo(
    () => calculateOneRepMax({ weightLifted, reps }),
    [weightLifted, reps]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="orm-weight">Weight lifted</Label>
              <Tabs value={unit} onValueChange={(v) => setUnit(v as WeightUnit)}>
                <TabsList>
                  <TabsTrigger value="kg">kg</TabsTrigger>
                  <TabsTrigger value="lb">lb</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <Input
              id="orm-weight"
              type="number"
              min={0}
              step={2.5}
              value={weightLifted}
              onChange={(e) => setWeightLifted(Number(e.target.value) || 0)}
              className="h-11 text-base"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="orm-reps">Reps completed</Label>
            <Input
              id="orm-reps"
              type="number"
              min={1}
              max={20}
              value={reps}
              onChange={(e) => setReps(Number(e.target.value) || 1)}
              className="h-11 text-base"
            />
            <p className="text-xs text-muted-foreground">
              Most accurate for sets of 1 to 10 reps taken close to failure
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${weightLifted}-${reps}-${unit}`}>
          <ResultStat
            label="Estimated one-rep max"
            value={`${formatNumber(result.oneRepMax, 1)} ${unit}`}
            emphasis
          />
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0">
            <h3 className="text-sm font-semibold text-foreground">Training percentage table</h3>
            <div className="mt-3 max-h-64 overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-card text-xs text-muted-foreground">
                  <tr>
                    <th className="py-1.5 text-left font-medium">% of 1RM</th>
                    <th className="py-1.5 text-right font-medium">Weight</th>
                  </tr>
                </thead>
                <tbody>
                  {result.percentages.map((row) => (
                    <tr key={row.percent} className="border-t border-border/60">
                      <td className="py-1.5 text-left text-muted-foreground">{row.percent}%</td>
                      <td className="py-1.5 text-right font-mono">
                        {formatNumber(row.weight, 1)} {unit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
