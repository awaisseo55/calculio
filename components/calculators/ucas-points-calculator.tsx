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
  calculateUcasPoints,
  A_LEVEL_TARIFF_POINTS,
  EPQ_TARIFF_POINTS,
  type ALevelGrade,
  type EpqGrade,
} from "@/lib/calc/ucas-points";
import { formatNumber } from "@/lib/format";

const A_LEVEL_GRADES: ALevelGrade[] = ["none", "A*", "A", "B", "C", "D", "E"];
const EPQ_GRADES: EpqGrade[] = ["none", "A*", "A", "B", "C", "D", "E"];

export function UcasPointsCalculator() {
  const [aLevelGrades, setALevelGrades] = React.useState<ALevelGrade[]>(["A", "B", "B", "none"]);
  const [epqGrade, setEpqGrade] = React.useState<EpqGrade>("none");

  const result = React.useMemo(
    () => calculateUcasPoints({ aLevelGrades, epqGrade }),
    [aLevelGrades, epqGrade]
  );

  function updateGrade(index: number, grade: ALevelGrade) {
    setALevelGrades((prev) => prev.map((g, i) => (i === index ? grade : g)));
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          {aLevelGrades.map((grade, index) => (
            <div key={index} className="flex flex-col gap-2">
              <Label htmlFor={`ucas-alevel-${index}`}>A-level subject {index + 1} grade</Label>
              <Select value={grade} onValueChange={(v) => updateGrade(index, v as ALevelGrade)}>
                <SelectTrigger id={`ucas-alevel-${index}`} className="h-11 w-full text-base">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {A_LEVEL_GRADES.map((g) => (
                    <SelectItem key={g} value={g}>
                      {g === "none" ? "Not taken" : `${g} (${A_LEVEL_TARIFF_POINTS[g]} points)`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ))}

          <div className="flex flex-col gap-2">
            <Label htmlFor="ucas-epq">EPQ grade (optional)</Label>
            <Select value={epqGrade} onValueChange={(v) => setEpqGrade(v as EpqGrade)}>
              <SelectTrigger id="ucas-epq" className="h-11 w-full text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {EPQ_GRADES.map((g) => (
                  <SelectItem key={g} value={g}>
                    {g === "none" ? "Not taken" : `${g} (${EPQ_TARIFF_POINTS[g]} points)`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">The Extended Project Qualification is worth up to half an A-level in UCAS points</p>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${aLevelGrades.join("-")}-${epqGrade}`}>
          <ResultStat label="Total UCAS Tariff points" value={formatNumber(result.totalPoints, 0)} emphasis positive />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="From A-levels" value={formatNumber(result.aLevelPoints, 0)} />
            <ResultStat label="From EPQ" value={formatNumber(result.epqPoints, 0)} />
          </div>
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0 text-sm text-muted-foreground">
            Universities set their own offers, and some courses use grades rather than Tariff points, so always
            check the specific entry requirements on a course&apos;s UCAS listing rather than relying on total
            points alone.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
