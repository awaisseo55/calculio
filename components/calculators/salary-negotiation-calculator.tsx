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
  calculateSalaryNegotiation,
  type TargetMode,
} from "@/lib/calc/salary-negotiation";
import type { TaxRegion } from "@/lib/calc/income-tax";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/format";

const regionOptions: { value: TaxRegion; label: string }[] = [
  { value: "england-wales-ni", label: "England, Wales or Northern Ireland" },
  { value: "scotland", label: "Scotland" },
];

export function SalaryNegotiationCalculator() {
  const [currentSalary, setCurrentSalary] = React.useState(40000);
  const [targetMode, setTargetMode] = React.useState<TargetMode>("percent");
  const [targetSalary, setTargetSalary] = React.useState(45000);
  const [targetIncreasePercent, setTargetIncreasePercent] = React.useState(10);
  const [currentBonus, setCurrentBonus] = React.useState(0);
  const [targetBonus, setTargetBonus] = React.useState(0);
  const [currentPensionPercent, setCurrentPensionPercent] = React.useState(5);
  const [targetPensionPercent, setTargetPensionPercent] = React.useState(5);
  const [currentBenefitsValue, setCurrentBenefitsValue] = React.useState(0);
  const [targetBenefitsValue, setTargetBenefitsValue] = React.useState(0);
  const [region, setRegion] = React.useState<TaxRegion>("england-wales-ni");
  const [relocationCosts, setRelocationCosts] = React.useState(0);

  const result = React.useMemo(
    () =>
      calculateSalaryNegotiation({
        currentSalary,
        targetMode,
        targetSalary,
        targetIncreasePercent,
        currentBonus,
        targetBonus,
        currentPensionPercent,
        targetPensionPercent,
        currentBenefitsValue,
        targetBenefitsValue,
        region,
        relocationCosts,
        assumedPensionGrowthPercent: 5,
      }),
    [
      currentSalary,
      targetMode,
      targetSalary,
      targetIncreasePercent,
      currentBonus,
      targetBonus,
      currentPensionPercent,
      targetPensionPercent,
      currentBenefitsValue,
      targetBenefitsValue,
      region,
      relocationCosts,
    ]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="sn-current">Current annual salary</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="sn-current"
                type="number"
                min={0}
                step={500}
                value={currentSalary}
                onChange={(e) => setCurrentSalary(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Target as</Label>
            <Tabs value={targetMode} onValueChange={(v) => setTargetMode(v as TargetMode)}>
              <TabsList className="w-full">
                <TabsTrigger value="percent" className="flex-1">% increase</TabsTrigger>
                <TabsTrigger value="amount" className="flex-1">New salary</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {targetMode === "percent" ? (
            <div className="flex flex-col gap-2">
              <Label htmlFor="sn-percent">Target increase (%)</Label>
              <Input
                id="sn-percent"
                type="number"
                min={0}
                max={200}
                step={0.5}
                value={targetIncreasePercent}
                onChange={(e) => setTargetIncreasePercent(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <Label htmlFor="sn-target">Target annual salary</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="sn-target"
                  type="number"
                  min={0}
                  step={500}
                  value={targetSalary}
                  onChange={(e) => setTargetSalary(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="sn-bonus-current">Current annual bonus</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="sn-bonus-current"
                  type="number"
                  min={0}
                  step={100}
                  value={currentBonus}
                  onChange={(e) => setCurrentBonus(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="sn-bonus-target">Target annual bonus</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="sn-bonus-target"
                  type="number"
                  min={0}
                  step={100}
                  value={targetBonus}
                  onChange={(e) => setTargetBonus(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="sn-pension-current">Current pension contribution (%)</Label>
              <Input
                id="sn-pension-current"
                type="number"
                min={0}
                max={100}
                step={0.5}
                value={currentPensionPercent}
                onChange={(e) => setCurrentPensionPercent(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="sn-pension-target">Target pension contribution (%)</Label>
              <Input
                id="sn-pension-target"
                type="number"
                min={0}
                max={100}
                step={0.5}
                value={targetPensionPercent}
                onChange={(e) => setTargetPensionPercent(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="sn-benefits-current">Other benefits value (current)</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="sn-benefits-current"
                  type="number"
                  min={0}
                  step={100}
                  value={currentBenefitsValue}
                  onChange={(e) => setCurrentBenefitsValue(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="sn-benefits-target">Other benefits value (target)</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="sn-benefits-target"
                  type="number"
                  min={0}
                  step={100}
                  value={targetBenefitsValue}
                  onChange={(e) => setTargetBenefitsValue(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="sn-region">Where you pay tax</Label>
            <Select value={region} onValueChange={(v) => setRegion(v as TaxRegion)}>
              <SelectTrigger id="sn-region" className="h-11 w-full text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {regionOptions.map((o) => (
                  <SelectItem key={o.value} value={o.value}>
                    {o.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="sn-relocation">Relocation or job-switch costs (if any)</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="sn-relocation"
                type="number"
                min={0}
                step={100}
                value={relocationCosts}
                onChange={(e) => setRelocationCosts(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <RatesDisclaimer>
            This calculator assumes the standard 1257L tax code and Personal
            Allowance. If your tax code is different, your actual take-home
            figures may vary slightly. The 5-year pension value assumes a
            5% annual investment growth rate, which is illustrative, not
            guaranteed.
          </RatesDisclaimer>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${currentSalary}-${targetMode}-${targetSalary}-${targetIncreasePercent}-${currentBonus}-${targetBonus}-${currentPensionPercent}-${targetPensionPercent}-${currentBenefitsValue}-${targetBenefitsValue}-${region}-${relocationCosts}`}
        >
          <ResultStat
            label="Extra take-home pay per month"
            value={formatCurrency(result.monthlyNetDifference, 2)}
            emphasis
            positive={result.monthlyNetDifference >= 0}
          />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Current total compensation" value={formatCurrency(result.currentTotalCompensation, 0)} />
            <ResultStat label="Target total compensation" value={formatCurrency(result.targetTotalCompensation, 0)} />
            <ResultStat label="Gross increase" value={`${formatCurrency(result.grossIncreaseAmount, 0)} (${formatPercent(result.grossIncreasePercent, 1)})`} />
            <ResultStat label="Extra take-home pay per year" value={formatCurrency(result.annualNetDifference, 2)} positive={result.annualNetDifference >= 0} />
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            Over 5 years, this increase is worth roughly{" "}
            {formatCurrency(result.fiveYearTakeHomeValue, 0)} in extra
            take-home pay, plus around{" "}
            {formatCurrency(result.fiveYearPensionValue, 0)} in additional
            pension pot value from the higher contributions, for a combined
            5-year value of about {formatCurrency(result.fiveYearTotalValue, 0)}.
            {result.breakEvenMonths !== null && result.breakEvenMonths > 0 &&
              ` If you have relocation or job-switch costs, you would break even after around ${formatNumber(result.breakEvenMonths, 1)} months of extra take-home pay.`}
            {result.breakEvenMonths === null &&
              " Your relocation costs would not be covered by this increase alone, since the extra take-home pay is £0 or negative."}
          </p>
        </ResultCard>
      </div>
    </div>
  );
}
