"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateAge } from "@/lib/calc/age";
import { formatDate, formatNumber } from "@/lib/format";

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

export function AgeCalculator() {
  const [dateOfBirth, setDateOfBirth] = React.useState("1990-06-15");
  const [asOfDate, setAsOfDate] = React.useState(todayIso());

  const result = React.useMemo(
    () => calculateAge({ dateOfBirth, asOfDate }),
    [dateOfBirth, asOfDate]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="dob">Date of birth</Label>
            <Input
              id="dob"
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="h-11 text-base"
            />
            <p className="text-xs text-muted-foreground">
              Born on a {result.dayOfWeekBorn}.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="as-of">Calculate age as of</Label>
            <Input
              id="as-of"
              type="date"
              value={asOfDate}
              onChange={(e) => setAsOfDate(e.target.value)}
              className="h-11 text-base"
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${dateOfBirth}-${asOfDate}`}>
          <ResultStat
            label="Your age"
            value={`${result.years}y ${result.months}m ${result.days}d`}
            emphasis
          />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Total days" value={formatNumber(result.totalDays)} />
            <ResultStat label="Total weeks" value={formatNumber(result.totalWeeks)} />
            <ResultStat label="Total hours" value={formatNumber(result.totalHours)} />
            <ResultStat label="Next birthday" value={formatDate(result.nextBirthday)} />
          </div>
          <div className="mt-6">
            <ResultStat
              label="Days until next birthday"
              value={formatNumber(result.daysUntilNextBirthday)}
              positive
            />
          </div>
        </ResultCard>
      </div>
    </div>
  );
}
