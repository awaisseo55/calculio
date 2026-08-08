"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { RatesDisclaimer } from "@/components/calculators/rates-disclaimer";
import { calculateChildBenefit } from "@/lib/calc/child-benefit";
import { formatCurrency, formatPercent } from "@/lib/format";

export function ChildBenefitCalculator() {
  const [numberOfChildren, setNumberOfChildren] = React.useState(2);
  const [hasPartner, setHasPartner] = React.useState(true);
  const [higherEarnerIncome, setHigherEarnerIncome] = React.useState(45000);
  const [partnerIncome, setPartnerIncome] = React.useState(65000);

  const result = React.useMemo(
    () =>
      calculateChildBenefit({
        numberOfChildren,
        higherEarnerIncome,
        partnerIncome,
        hasPartner,
      }),
    [numberOfChildren, higherEarnerIncome, partnerIncome, hasPartner]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="cb-children">Number of children</Label>
            <Input
              id="cb-children"
              type="number"
              min={0}
              max={10}
              step={1}
              value={numberOfChildren}
              onChange={(e) => setNumberOfChildren(Number(e.target.value) || 0)}
              className="h-11 text-base"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Do you have a partner?</Label>
            <Tabs value={hasPartner ? "yes" : "no"} onValueChange={(v) => setHasPartner(v === "yes")}>
              <TabsList className="w-full">
                <TabsTrigger value="no" className="flex-1">No</TabsTrigger>
                <TabsTrigger value="yes" className="flex-1">Yes</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="cb-income">{hasPartner ? "Your annual income" : "Your annual income"}</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="cb-income"
                type="number"
                min={0}
                step={1000}
                value={higherEarnerIncome}
                onChange={(e) => setHigherEarnerIncome(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          {hasPartner && (
            <div className="flex flex-col gap-2">
              <Label htmlFor="cb-partner-income">Partner&apos;s annual income</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="cb-partner-income"
                  type="number"
                  min={0}
                  step={1000}
                  value={partnerIncome}
                  onChange={(e) => setPartnerIncome(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
          )}

          <RatesDisclaimer>
            The High Income Child Benefit Charge is based on whichever
            partner in the household has the higher adjusted net income, not
            your combined income. The charge applies between £60,000 and
            £80,000 of income for the higher earner.
          </RatesDisclaimer>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${numberOfChildren}-${hasPartner}-${higherEarnerIncome}-${partnerIncome}`}
        >
          <ResultStat
            label="Net Child Benefit per year"
            value={formatCurrency(result.netAnnualAmount, 2)}
            emphasis
            positive={!result.hicbcApplies}
          />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Weekly rate, eldest child" value={formatCurrency(result.weeklyAmountEldest, 2)} />
            <ResultStat label="Weekly rate, additional children" value={formatCurrency(result.weeklyAmountAdditional, 2)} />
            <ResultStat label="Gross Child Benefit per year" value={formatCurrency(result.annualAmount, 2)} />
            <ResultStat
              label="High Income Child Benefit Charge"
              value={result.hicbcApplies ? formatCurrency(result.hicbcAmount, 2) : "£0.00"}
            />
          </div>
          {result.hicbcApplies && (
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              The higher earner in your household has an income of{" "}
              {formatCurrency(result.higherIncomeInHousehold, 0)}, which is{" "}
              {formatPercent(result.hicbcPercent, 0)} of the way through the
              £60,000 to £80,000 taper, so {formatPercent(result.hicbcPercent, 0)} of
              your Child Benefit is clawed back through the High Income
              Child Benefit Charge, usually via Self Assessment or an
              adjustment to your tax code.
              {result.hicbcPercent >= 100 &&
                " At this income level the charge cancels out the payment in full, though it can still be worth claiming to protect your National Insurance record."}
            </p>
          )}
        </ResultCard>
      </div>
    </div>
  );
}
