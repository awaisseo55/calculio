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
import { calculatePregnancy, type PregnancyMethod } from "@/lib/calc/pregnancy";
import { formatDate } from "@/lib/format";

const methods: { value: PregnancyMethod; label: string }[] = [
  { value: "lmp", label: "Last menstrual period (LMP)" },
  { value: "conception", label: "Conception date" },
  { value: "ivf5", label: "IVF transfer (day 5 blastocyst)" },
  { value: "ivf3", label: "IVF transfer (day 3)" },
];

export function PregnancyCalculator() {
  const [method, setMethod] = React.useState<PregnancyMethod>("lmp");
  const [date, setDate] = React.useState("2026-05-01");
  const [cycleLength, setCycleLength] = React.useState(28);

  const result = React.useMemo(
    () => calculatePregnancy({ method, date, cycleLength }),
    [method, date, cycleLength]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="method">Calculate from</Label>
            <Select value={method} onValueChange={(v) => setMethod(v as PregnancyMethod)}>
              <SelectTrigger id="method" className="h-11 w-full text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {methods.map((m) => (
                  <SelectItem key={m.value} value={m.value}>
                    {m.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="date">
              {method === "lmp" ? "First day of last period" : "Date"}
            </Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="h-11 text-base"
            />
          </div>

          {method === "lmp" && (
            <div className="flex flex-col gap-2">
              <Label htmlFor="cycle">Average cycle length (days)</Label>
              <Input
                id="cycle"
                type="number"
                min={20}
                max={45}
                value={cycleLength}
                onChange={(e) => setCycleLength(Number(e.target.value) || 28)}
                className="h-11 text-base"
              />
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${method}-${date}-${cycleLength}`}>
          <ResultStat label="Estimated due date" value={formatDate(result.dueDate)} emphasis positive />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat
              label="Current gestation"
              value={`${result.gestationalWeeks}w ${result.gestationalDays}d`}
            />
            <ResultStat label="Trimester" value={`${result.trimester}${result.trimester === 1 ? "st" : result.trimester === 2 ? "nd" : "rd"}`} />
            <ResultStat label="Estimated conception" value={formatDate(result.conceptionDate)} />
            <ResultStat
              label={result.daysUntilDueDate >= 0 ? "Days to go" : "Days overdue"}
              value={`${Math.abs(result.daysUntilDueDate)}`}
            />
          </div>
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0">
            <h3 className="text-sm font-semibold text-foreground">Key NHS milestones</h3>
            <div className="mt-3 flex flex-col gap-2">
              {result.milestones.map((m) => (
                <div
                  key={m.label}
                  className="flex items-center justify-between border-t border-border/60 py-2 text-sm first:border-t-0"
                >
                  <span className="text-muted-foreground">
                    {m.label} ({m.weekLabel})
                  </span>
                  <span className="font-medium text-foreground">{formatDate(m.date)}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
