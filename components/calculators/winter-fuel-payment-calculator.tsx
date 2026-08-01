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
import {
  calculateWinterFuelPayment,
  type HouseholdSituation,
} from "@/lib/calc/winter-fuel-payment";
import { formatCurrency } from "@/lib/format";

const householdOptions: { value: HouseholdSituation; label: string }[] = [
  { value: "single", label: "Single" },
  { value: "couple-both-eligible", label: "Couple, both over State Pension age" },
  { value: "couple-one-eligible", label: "Couple, only one over State Pension age" },
];

export function WinterFuelPaymentCalculator() {
  const [age, setAge] = React.useState(70);
  const [householdSituation, setHouseholdSituation] =
    React.useState<HouseholdSituation>("single");
  const [anyoneInHouseholdOver80, setAnyoneInHouseholdOver80] = React.useState(false);
  const [receivesPensionCreditOrBenefit, setReceivesPensionCreditOrBenefit] =
    React.useState(false);
  const [livingInCareHome, setLivingInCareHome] = React.useState(false);
  const [annualIncome, setAnnualIncome] = React.useState(20000);

  const result = React.useMemo(
    () =>
      calculateWinterFuelPayment({
        age,
        householdSituation,
        anyoneInHouseholdOver80,
        receivesPensionCreditOrBenefit,
        livingInCareHome,
        annualIncome,
      }),
    [
      age,
      householdSituation,
      anyoneInHouseholdOver80,
      receivesPensionCreditOrBenefit,
      livingInCareHome,
      annualIncome,
    ]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="wfp-age">Your age</Label>
              <Input
                id="wfp-age"
                type="number"
                min={0}
                max={110}
                value={age}
                onChange={(e) => setAge(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="wfp-income">Your annual income</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="wfp-income"
                  type="number"
                  min={0}
                  step={500}
                  value={annualIncome}
                  onChange={(e) => setAnnualIncome(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="wfp-household">Household situation</Label>
            <Select
              value={householdSituation}
              onValueChange={(v) => setHouseholdSituation(v as HouseholdSituation)}
            >
              <SelectTrigger id="wfp-household" className="h-11 w-full text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {householdOptions.map((h) => (
                  <SelectItem key={h.value} value={h.value}>
                    {h.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Anyone in your household aged 80 or over</Label>
            <Tabs
              value={anyoneInHouseholdOver80 ? "yes" : "no"}
              onValueChange={(v) => setAnyoneInHouseholdOver80(v === "yes")}
            >
              <TabsList className="w-full">
                <TabsTrigger value="no" className="flex-1">No</TabsTrigger>
                <TabsTrigger value="yes" className="flex-1">Yes</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Receiving Pension Credit or a similar means-tested benefit</Label>
            <Tabs
              value={receivesPensionCreditOrBenefit ? "yes" : "no"}
              onValueChange={(v) => setReceivesPensionCreditOrBenefit(v === "yes")}
            >
              <TabsList className="w-full">
                <TabsTrigger value="no" className="flex-1">No</TabsTrigger>
                <TabsTrigger value="yes" className="flex-1">Yes</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Living in a care home for the whole winter</Label>
            <Tabs
              value={livingInCareHome ? "yes" : "no"}
              onValueChange={(v) => setLivingInCareHome(v === "yes")}
            >
              <TabsList className="w-full">
                <TabsTrigger value="no" className="flex-1">No</TabsTrigger>
                <TabsTrigger value="yes" className="flex-1">Yes</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <RatesDisclaimer>
            This tool gives a general estimate based on published DWP rules
            and does not check your personal record. Your exact eligibility
            and payment date depend on your individual circumstances, so
            confirm on GOV.UK or with the Winter Fuel Payment helpline if
            you are unsure.
          </RatesDisclaimer>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${age}-${householdSituation}-${anyoneInHouseholdOver80}-${receivesPensionCreditOrBenefit}-${livingInCareHome}-${annualIncome}`}
        >
          <ResultStat
            label={result.eligible ? "You're likely eligible" : "You're likely not eligible"}
            value={formatCurrency(result.netPaymentAmount, 0)}
            emphasis
            positive={result.eligible}
          />
          {result.eligible && (
            <div className="mt-6 grid grid-cols-2 gap-6">
              <ResultStat label="Gross payment (before any clawback)" value={formatCurrency(result.grossPaymentAmount, 0)} />
              <ResultStat label="Usually paid automatically" value={result.paidAutomatically ? "Yes" : "No"} />
            </div>
          )}
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            {result.reason} Winter Fuel Payments are usually paid
            automatically between November and December, without needing to
            claim, if you already receive the State Pension or another
            qualifying benefit.
          </p>
        </ResultCard>
      </div>
    </div>
  );
}
