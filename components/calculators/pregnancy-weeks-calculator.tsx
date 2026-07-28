"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculatePregnancy, type PregnancyMethod } from "@/lib/calc/pregnancy";
import { formatDate } from "@/lib/format";

type WeeksMode = "lmp" | "conception" | "ivf";

export function PregnancyWeeksCalculator() {
  const [mode, setMode] = React.useState<WeeksMode>("lmp");
  const [ivfDay, setIvfDay] = React.useState<"ivf3" | "ivf5">("ivf5");
  const [date, setDate] = React.useState("2026-05-01");
  const [cycleLength, setCycleLength] = React.useState(28);

  const method: PregnancyMethod = mode === "ivf" ? ivfDay : mode;
  const today = React.useMemo(() => new Date(), []);

  const result = React.useMemo(
    () => calculatePregnancy({ method, date, cycleLength }, today),
    [method, date, cycleLength, today]
  );

  const nextMilestone = result.milestones.find((m) => m.date.getTime() > today.getTime());

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label>Calculate from</Label>
            <Tabs value={mode} onValueChange={(v) => setMode(v as WeeksMode)}>
              <TabsList className="w-full">
                <TabsTrigger value="lmp" className="flex-1">Last period</TabsTrigger>
                <TabsTrigger value="conception" className="flex-1">Conception</TabsTrigger>
                <TabsTrigger value="ivf" className="flex-1">IVF transfer</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {mode === "ivf" && (
            <div className="flex flex-col gap-2">
              <Label>IVF transfer type</Label>
              <Tabs value={ivfDay} onValueChange={(v) => setIvfDay(v as "ivf3" | "ivf5")}>
                <TabsList className="w-full">
                  <TabsTrigger value="ivf5" className="flex-1">Day 5 (blastocyst)</TabsTrigger>
                  <TabsTrigger value="ivf3" className="flex-1">Day 3</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <Label htmlFor="pw-date">
              {mode === "lmp" ? "First day of last period" : mode === "conception" ? "Conception date" : "Transfer date"}
            </Label>
            <Input
              id="pw-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="h-11 text-base"
            />
          </div>

          {mode === "lmp" && (
            <div className="flex flex-col gap-2">
              <Label htmlFor="pw-cycle">Average cycle length (days)</Label>
              <Input
                id="pw-cycle"
                type="number"
                min={20}
                max={45}
                value={cycleLength}
                onChange={(e) => setCycleLength(Number(e.target.value) || 28)}
                className="h-11 text-base"
              />
            </div>
          )}

          <p className="text-xs text-muted-foreground">
            This is an estimate based on typical pregnancy dating. Your
            midwife or sonographer will confirm your exact gestational age at
            your dating scan.
          </p>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${method}-${date}-${cycleLength}-${today.toDateString()}`}>
          <ResultStat
            label="You are currently"
            value={`${result.gestationalWeeks} weeks, ${result.gestationalDays} days`}
            emphasis
            positive
          />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat
              label={result.daysUntilDueDate >= 0 ? "Days to go" : "Days overdue"}
              value={`${Math.abs(result.daysUntilDueDate)}`}
            />
            <ResultStat
              label="Trimester"
              value={`${result.trimester}${result.trimester === 1 ? "st" : result.trimester === 2 ? "nd" : "rd"}`}
            />
            <ResultStat label="Estimated due date" value={formatDate(result.dueDate)} />
            {nextMilestone && (
              <ResultStat label="Next milestone" value={`${nextMilestone.label}`} />
            )}
          </div>
          {nextMilestone && (
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              Your next NHS milestone, {nextMilestone.label.toLowerCase()}, is
              due around {nextMilestone.weekLabel} ({formatDate(nextMilestone.date)}).
              Speak to your midwife if you&apos;re not sure when your appointments
              are booked.
            </p>
          )}
        </ResultCard>
      </div>
    </div>
  );
}
