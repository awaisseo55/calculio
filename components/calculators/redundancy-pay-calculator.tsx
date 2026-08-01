"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { RatesDisclaimer } from "@/components/calculators/rates-disclaimer";
import { calculateRedundancyPay, type EmploymentType } from "@/lib/calc/redundancy-pay";
import { REDUNDANCY_WEEKLY_PAY_CAP } from "@/lib/calc/uk-rates";
import { formatCurrency } from "@/lib/format";

export function RedundancyPayCalculator() {
  const [ageAtRedundancy, setAgeAtRedundancy] = React.useState(45);
  const [completeYearsOfService, setCompleteYearsOfService] = React.useState(10);
  const [weeklyPay, setWeeklyPay] = React.useState(600);
  const [employmentType, setEmploymentType] = React.useState<EmploymentType>("statutory");
  const [enhancedWeeksPerYear, setEnhancedWeeksPerYear] = React.useState(2);

  const result = React.useMemo(
    () =>
      calculateRedundancyPay({
        ageAtRedundancy,
        completeYearsOfService,
        weeklyPay,
        employmentType,
        enhancedWeeksPerYear,
      }),
    [ageAtRedundancy, completeYearsOfService, weeklyPay, employmentType, enhancedWeeksPerYear]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="rp-age">Age at redundancy</Label>
              <Input
                id="rp-age"
                type="number"
                min={16}
                max={80}
                value={ageAtRedundancy}
                onChange={(e) => setAgeAtRedundancy(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="rp-years">Complete years of service</Label>
              <Input
                id="rp-years"
                type="number"
                min={0}
                max={50}
                value={completeYearsOfService}
                onChange={(e) => setCompleteYearsOfService(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
              <p className="text-xs text-muted-foreground">
                Only the most recent 20 years count towards statutory pay.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="rp-weekly-pay">Current weekly pay</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="rp-weekly-pay"
                type="number"
                min={0}
                step={10}
                value={weeklyPay}
                onChange={(e) => setWeeklyPay(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Capped at {formatCurrency(REDUNDANCY_WEEKLY_PAY_CAP, 0)} a week for the
              statutory calculation, even if you earn more.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Package type</Label>
            <Tabs
              value={employmentType}
              onValueChange={(v) => setEmploymentType(v as EmploymentType)}
            >
              <TabsList className="w-full">
                <TabsTrigger value="statutory" className="flex-1">Statutory only</TabsTrigger>
                <TabsTrigger value="enhanced" className="flex-1">Enhanced package</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {employmentType === "enhanced" && (
            <div className="flex flex-col gap-2">
              <Label htmlFor="rp-enhanced-weeks">Enhanced weeks&apos; pay per year of service</Label>
              <Input
                id="rp-enhanced-weeks"
                type="number"
                min={0}
                step={0.5}
                value={enhancedWeeksPerYear}
                onChange={(e) => setEnhancedWeeksPerYear(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
              <p className="text-xs text-muted-foreground">
                Check your redundancy or settlement agreement for this
                figure. Enhanced schemes usually use your actual weekly pay,
                uncapped.
              </p>
            </div>
          )}

          <RatesDisclaimer>
            This is a general estimate using the statutory formula and does
            not constitute legal advice. If you are going through a
            redundancy process, ACAS offers free, impartial guidance on your
            rights.
          </RatesDisclaimer>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${ageAtRedundancy}-${completeYearsOfService}-${weeklyPay}-${employmentType}-${enhancedWeeksPerYear}`}
        >
          <ResultStat label="Total redundancy pay" value={formatCurrency(result.totalRedundancyPay, 2)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Statutory redundancy pay" value={formatCurrency(result.statutoryRedundancyPay, 2)} />
            {employmentType === "enhanced" && (
              <ResultStat label="Enhanced package pay" value={formatCurrency(result.enhancedRedundancyPay, 2)} />
            )}
            <ResultStat label="Capped weekly pay used" value={formatCurrency(result.cappedWeeklyPay, 2)} />
            <ResultStat label="Qualifying years used" value={`${result.qualifyingYearsUsed}`} />
            <ResultStat label="Tax-free amount" value={formatCurrency(result.taxFreeAmount, 2)} positive />
            <ResultStat label="Potentially taxable amount" value={formatCurrency(result.taxableAmount, 2)} />
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            The first £30,000 of redundancy pay is tax-free. Any amount
            above that is added to your income and taxed through PAYE in the
            pay period you receive it.
          </p>
        </ResultCard>
      </div>
    </div>
  );
}
