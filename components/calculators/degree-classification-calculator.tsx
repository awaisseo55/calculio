"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
  calculateDegreeClassification,
  DEGREE_WEIGHTING_SCHEMES,
  type DegreeWeightingScheme,
} from "@/lib/calc/degree-classification";
import { formatNumber } from "@/lib/format";

const schemeOptions = Object.entries(DEGREE_WEIGHTING_SCHEMES) as [
  DegreeWeightingScheme,
  (typeof DEGREE_WEIGHTING_SCHEMES)[DegreeWeightingScheme],
][];

export function DegreeClassificationCalculator() {
  const [year2Mark, setYear2Mark] = React.useState(62);
  const [year3Mark, setYear3Mark] = React.useState(68);
  const [scheme, setScheme] = React.useState<DegreeWeightingScheme>("33-67");

  const result = React.useMemo(
    () => calculateDegreeClassification({ year2Mark, year3Mark, scheme }),
    [year2Mark, year3Mark, scheme]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="dc-year2">Year 2 average mark</Label>
              <div className="relative">
                <Input
                  id="dc-year2"
                  type="number"
                  min={0}
                  max={100}
                  step={1}
                  value={year2Mark}
                  onChange={(e) => setYear2Mark(Number(e.target.value) || 0)}
                  className="h-11 pr-9 text-base"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="dc-year3">Year 3 average mark</Label>
              <div className="relative">
                <Input
                  id="dc-year3"
                  type="number"
                  min={0}
                  max={100}
                  step={1}
                  value={year3Mark}
                  onChange={(e) => setYear3Mark(Number(e.target.value) || 0)}
                  className="h-11 pr-9 text-base"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="dc-scheme">Weighting scheme</Label>
            <Select value={scheme} onValueChange={(v) => setScheme(v as DegreeWeightingScheme)}>
              <SelectTrigger id="dc-scheme" className="h-11 w-full text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {schemeOptions.map(([value, meta]) => (
                  <SelectItem key={value} value={value}>
                    {meta.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              Check your own university&apos;s regulations for its exact scheme; this is the most common pattern
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${year2Mark}-${year3Mark}-${scheme}`}>
          <ResultStat label="Estimated classification" value={result.classification} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Weighted average" value={`${formatNumber(result.weightedAverage, 1)}%`} />
            {result.nextClassification && result.pointsToNext !== null && (
              <ResultStat
                label={`Points to ${result.nextClassification}`}
                value={`${formatNumber(result.pointsToNext, 1)}%`}
              />
            )}
          </div>
        </ResultCard>

        {result.isBorderline && (
          <Card className="p-6">
            <CardContent className="p-0 text-sm text-muted-foreground">
              You are within 2 percentage points of {result.nextClassification}. Many universities have a
              discretionary borderline policy that can round up close cases, often based on your best marks in the
              final year. Check your course handbook or ask your department for the exact rule.
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
