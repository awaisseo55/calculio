"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateStatePensionAge } from "@/lib/calc/state-pension-age";
import { formatCurrency, formatDate, formatNumber } from "@/lib/format";

export function StatePensionAgeCalculator() {
  const [dateOfBirth, setDateOfBirth] = React.useState("1985-06-15");

  const result = React.useMemo(
    () => calculateStatePensionAge({ dateOfBirth }),
    [dateOfBirth]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="spa-dob">Date of birth</Label>
            <Input
              id="spa-dob"
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="h-11 text-base"
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Your State Pension age is set by law based on your date of birth,
            and is the same for men and women. This calculator uses the
            published GOV.UK timetable.
          </p>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        {result.valid ? (
          <>
            <ResultCard resultKey={dateOfBirth}>
              <ResultStat
                label="Your State Pension age"
                value={result.statePensionAgeLabel}
                emphasis
              />
              <div className="mt-6 grid grid-cols-2 gap-6">
                {result.statePensionDate && (
                  <ResultStat
                    label={result.hasReached ? "Reached on" : "You reach it on"}
                    value={formatDate(result.statePensionDate)}
                  />
                )}
                {result.yearsUntil !== null && !result.hasReached && (
                  <ResultStat label="Time to go" value={`${formatNumber(result.yearsUntil, 1)} years`} />
                )}
                {result.hasReached && (
                  <ResultStat label="Status" value="Already reached" positive />
                )}
              </div>
            </ResultCard>

            {result.isTransitionWindow && (
              <Card className="border-primary/30 bg-primary/5 p-6">
                <CardContent className="p-0 text-sm text-muted-foreground">
                  Your date of birth falls in the narrow transition window
                  where State Pension age is rising gradually from 66 to 67,
                  between 6 May 2026 and 6 March 2028. The exact date depends
                  on your month of birth, so please use the official{" "}
                  <span className="font-medium text-foreground">
                    GOV.UK State Pension age checker
                  </span>{" "}
                  for your precise date.
                </CardContent>
              </Card>
            )}

            {result.underReview && (
              <Card className="border-primary/30 bg-primary/5 p-6">
                <CardContent className="p-0 text-sm text-muted-foreground">
                  Under current law, your State Pension age is 68, phased in
                  between 2044 and 2046. This date has been subject to
                  periodic government review and could change before you
                  reach it, so treat it as a long-range planning estimate
                  rather than a fixed date.
                </CardContent>
              </Card>
            )}

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-sm font-semibold text-foreground">
                  Illustrative new State Pension
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  With a full 35-year National Insurance record, the new
                  State Pension is currently{" "}
                  <span className="font-mono font-medium text-foreground">
                    {formatCurrency(result.newStatePensionWeekly, 2)}
                  </span>{" "}
                  a week, around{" "}
                  <span className="font-mono font-medium text-foreground">
                    {formatCurrency(result.newStatePensionAnnual)}
                  </span>{" "}
                  a year. Your actual amount depends on your own National
                  Insurance record and could be lower, so check your forecast
                  on GOV.UK for a personal figure.
                </p>
              </CardContent>
            </Card>
          </>
        ) : (
          <Card className="p-6">
            <CardContent className="p-0 text-sm text-muted-foreground">
              Enter your date of birth to see your estimated State Pension
              age.
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
