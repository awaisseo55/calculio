"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { RatesDisclaimer } from "@/components/calculators/rates-disclaimer";
import { calculateNationalInsurance } from "@/lib/calc/national-insurance";
import { formatCurrency } from "@/lib/format";

export function NationalInsuranceCalculator() {
  const [annualIncome, setAnnualIncome] = React.useState(35000);
  const [employmentType, setEmploymentType] = React.useState<"employed" | "self-employed">(
    "employed"
  );

  const result = React.useMemo(
    () =>
      calculateNationalInsurance({
        annualIncome,
        selfEmployed: employmentType === "self-employed",
      }),
    [annualIncome, employmentType]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label>Employment type</Label>
            <Tabs
              value={employmentType}
              onValueChange={(v) => setEmploymentType(v as "employed" | "self-employed")}
            >
              <TabsList className="w-full">
                <TabsTrigger value="employed" className="flex-1">Employed</TabsTrigger>
                <TabsTrigger value="self-employed" className="flex-1">Self-employed</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="ni-income">
              {employmentType === "employed" ? "Annual salary" : "Annual profit"}
            </Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="ni-income"
                type="number"
                min={0}
                value={annualIncome}
                onChange={(e) => setAnnualIncome(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <RatesDisclaimer />
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${annualIncome}-${employmentType}`}>
          <ResultStat label="National Insurance due" value={formatCurrency(result.totalNI, 2)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Monthly NI" value={formatCurrency(result.monthlyNI, 2)} />
            {employmentType === "employed" ? (
              <ResultStat label="Class 1 (employee)" value={formatCurrency(result.employeeNI, 2)} />
            ) : (
              <ResultStat label="Class 4 NI" value={formatCurrency(result.class4NI, 2)} />
            )}
          </div>
          {employmentType === "self-employed" && (
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              {result.class2VoluntaryAvailable
                ? `Your profit is below the small profits threshold, so Class 2 National Insurance is not mandatory. You could pay ${formatCurrency(result.class2VoluntaryAmount)} a year voluntarily to protect your State Pension record.`
                : "Your profit is above the small profits threshold. Since 6 April 2024, Class 2 National Insurance is no longer charged, and you're treated as having paid it for State Pension purposes."}
            </p>
          )}
        </ResultCard>
      </div>
    </div>
  );
}
