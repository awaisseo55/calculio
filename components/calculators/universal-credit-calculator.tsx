"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { RatesDisclaimer } from "@/components/calculators/rates-disclaimer";
import { calculateUniversalCredit, type UcHouseholdType } from "@/lib/calc/universal-credit";
import { formatCurrency } from "@/lib/format";

const householdOptions: { value: UcHouseholdType; label: string }[] = [
  { value: "single", label: "Single (no partner)" },
  { value: "couple", label: "Couple" },
];

const councilTaxBands = ["A", "B", "C", "D", "E", "F", "G", "H"] as const;

export function UniversalCreditCalculator() {
  const [householdType, setHouseholdType] = React.useState<UcHouseholdType>("single");
  const [claimantAge, setClaimantAge] = React.useState(30);
  const [numberOfChildren, setNumberOfChildren] = React.useState(1);
  const [monthlyEarnings, setMonthlyEarnings] = React.useState(800);
  const [monthlyRent, setMonthlyRent] = React.useState(650);
  const [councilTaxBand, setCouncilTaxBand] = React.useState<(typeof councilTaxBands)[number]>("B");
  const [savings, setSavings] = React.useState(2000);
  const [hasLimitedCapabilityForWork, setHasLimitedCapabilityForWork] = React.useState(false);
  const [workingHoursPerWeek, setWorkingHoursPerWeek] = React.useState(20);

  const result = React.useMemo(
    () =>
      calculateUniversalCredit({
        householdType,
        claimantAge,
        numberOfChildren,
        monthlyEarnings,
        monthlyRent,
        savings,
        hasLimitedCapabilityForWork,
        workingHoursPerWeek,
      }),
    [
      householdType,
      claimantAge,
      numberOfChildren,
      monthlyEarnings,
      monthlyRent,
      savings,
      hasLimitedCapabilityForWork,
      workingHoursPerWeek,
    ]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="uc-household">Household type</Label>
            <Select
              value={householdType}
              onValueChange={(v) => setHouseholdType(v as UcHouseholdType)}
            >
              <SelectTrigger id="uc-household" className="h-11 w-full text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {householdOptions.map((o) => (
                  <SelectItem key={o.value} value={o.value}>
                    {o.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="uc-age">Your age</Label>
              <Input
                id="uc-age"
                type="number"
                min={16}
                max={99}
                value={claimantAge}
                onChange={(e) => setClaimantAge(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="uc-children">Number of children</Label>
              <Input
                id="uc-children"
                type="number"
                min={0}
                max={10}
                value={numberOfChildren}
                onChange={(e) => setNumberOfChildren(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="uc-earnings">Monthly earnings (take-home)</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="uc-earnings"
                  type="number"
                  min={0}
                  step={50}
                  value={monthlyEarnings}
                  onChange={(e) => setMonthlyEarnings(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="uc-rent">Monthly rent</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="uc-rent"
                  type="number"
                  min={0}
                  step={25}
                  value={monthlyRent}
                  onChange={(e) => setMonthlyRent(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="uc-savings">Savings and capital</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="uc-savings"
                  type="number"
                  min={0}
                  step={100}
                  value={savings}
                  onChange={(e) => setSavings(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="uc-band">Council tax band</Label>
              <Select
                value={councilTaxBand}
                onValueChange={(v) => setCouncilTaxBand(v as (typeof councilTaxBands)[number])}
              >
                <SelectTrigger id="uc-band" className="h-11 w-full text-base">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {councilTaxBands.map((b) => (
                    <SelectItem key={b} value={b}>
                      Band {b}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="uc-hours">Working hours per week</Label>
            <Input
              id="uc-hours"
              type="number"
              min={0}
              max={80}
              value={workingHoursPerWeek}
              onChange={(e) => setWorkingHoursPerWeek(Number(e.target.value) || 0)}
              className="h-11 text-base"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Limited capability for work (health condition or disability)</Label>
            <Tabs
              value={hasLimitedCapabilityForWork ? "yes" : "no"}
              onValueChange={(v) => setHasLimitedCapabilityForWork(v === "yes")}
            >
              <TabsList className="w-full">
                <TabsTrigger value="no" className="flex-1">No</TabsTrigger>
                <TabsTrigger value="yes" className="flex-1">Yes</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <RatesDisclaimer>
            Universal Credit assessment is genuinely complex and can include
            transitional protection, the benefit cap, and other elements not
            covered here. This is a simplified estimate for guidance only.
            Council tax is not part of Universal Credit; you may be able to
            claim Council Tax Reduction separately from your local council.
            Use the official{" "}
            <a
              href="https://www.gov.uk/benefits-calculators"
              className="underline hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              GOV.UK benefits calculators
            </a>{" "}
            or a benefits adviser for an exact figure.
          </RatesDisclaimer>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${householdType}-${claimantAge}-${numberOfChildren}-${monthlyEarnings}-${monthlyRent}-${savings}-${hasLimitedCapabilityForWork}-${workingHoursPerWeek}`}
        >
          {result.eligibleOnCapital ? (
            <>
              <ResultStat
                label="Estimated Universal Credit per month"
                value={formatCurrency(result.monthlyUniversalCredit, 2)}
                emphasis
                positive
              />
              <div className="mt-6 grid grid-cols-2 gap-6">
                <ResultStat label="Standard allowance" value={formatCurrency(result.standardAllowance, 2)} />
                <ResultStat label="Child element" value={formatCurrency(result.childElement, 2)} />
                <ResultStat label="Housing element" value={formatCurrency(result.housingElement, 2)} />
                <ResultStat label="Reduction from earnings (taper)" value={formatCurrency(result.taperReduction, 2)} />
              </div>
              <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                Your maximum award before deductions is{" "}
                {formatCurrency(result.maximumUniversalCredit, 2)} a month. Because
                you have a work allowance of {formatCurrency(result.workAllowance, 0)}, Universal
                Credit is reduced by 55p for every £1 you earn above that
                amount, which comes to{" "}
                {formatCurrency(result.taperReduction, 2)} here.
                {result.savingsTariffIncome > 0 &&
                  ` Savings between £6,000 and £16,000 also reduce your award, by ${formatCurrency(result.savingsTariffIncome, 2)} a month in this case.`}
              </p>
            </>
          ) : (
            <>
              <ResultStat label="Not likely to be eligible" value="£0.00" emphasis />
              <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                Universal Credit is not usually payable if you (and your
                partner, if you have one) have savings and capital over
                £16,000, regardless of your income or household costs.
              </p>
            </>
          )}
        </ResultCard>
      </div>
    </div>
  );
}
