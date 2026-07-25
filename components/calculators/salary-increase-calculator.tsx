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
import { calculateSalaryIncrease } from "@/lib/calc/salary-increase";
import type { IncreaseMode } from "@/lib/calc/salary-increase";
import { STUDENT_LOAN_PLANS, type StudentLoanPlan } from "@/lib/calc/uk-rates";
import type { TaxRegion } from "@/lib/calc/income-tax";
import { formatCurrency, formatPercent } from "@/lib/format";

const regions: { value: TaxRegion; label: string }[] = [
  { value: "england-wales-ni", label: "England, Wales or Northern Ireland" },
  { value: "scotland", label: "Scotland" },
];

const studentLoanOptions = Object.entries(STUDENT_LOAN_PLANS).map(([value, plan]) => ({
  value: value as StudentLoanPlan,
  label: plan.label,
}));

export function SalaryIncreaseCalculator() {
  const [currentSalary, setCurrentSalary] = React.useState(35000);
  const [mode, setMode] = React.useState<IncreaseMode>("percent");
  const [increasePercent, setIncreasePercent] = React.useState(5);
  const [increaseAmount, setIncreaseAmount] = React.useState(2000);
  const [region, setRegion] = React.useState<TaxRegion>("england-wales-ni");
  const [studentLoanPlan, setStudentLoanPlan] = React.useState<StudentLoanPlan>("none");
  const [pensionPercent, setPensionPercent] = React.useState(5);

  const result = React.useMemo(
    () =>
      calculateSalaryIncrease({
        currentSalary,
        mode,
        increasePercent,
        increaseAmount,
        region,
        studentLoanPlan,
        pensionPercent,
      }),
    [currentSalary, mode, increasePercent, increaseAmount, region, studentLoanPlan, pensionPercent]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="salary-increase-current">Current annual salary</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="salary-increase-current"
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
            <Label>Increase type</Label>
            <Tabs value={mode} onValueChange={(v) => setMode(v as IncreaseMode)}>
              <TabsList className="w-full">
                <TabsTrigger value="percent" className="flex-1">Percentage</TabsTrigger>
                <TabsTrigger value="amount" className="flex-1">Fixed amount</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {mode === "percent" ? (
            <div className="flex flex-col gap-2">
              <Label htmlFor="salary-increase-percent">Pay rise</Label>
              <div className="relative">
                <Input
                  id="salary-increase-percent"
                  type="number"
                  min={0}
                  step={0.1}
                  value={increasePercent}
                  onChange={(e) => setIncreasePercent(Number(e.target.value) || 0)}
                  className="h-11 pr-7 text-base"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <Label htmlFor="salary-increase-amount">Pay rise</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="salary-increase-amount"
                  type="number"
                  min={0}
                  step={100}
                  value={increaseAmount}
                  onChange={(e) => setIncreaseAmount(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <Label htmlFor="salary-increase-region">Region</Label>
            <Select value={region} onValueChange={(v) => setRegion(v as TaxRegion)}>
              <SelectTrigger id="salary-increase-region" className="h-11 w-full text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {regions.map((r) => (
                  <SelectItem key={r.value} value={r.value}>
                    {r.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="salary-increase-student-loan">Student loan plan</Label>
            <Select
              value={studentLoanPlan}
              onValueChange={(v) => setStudentLoanPlan(v as StudentLoanPlan)}
            >
              <SelectTrigger id="salary-increase-student-loan" className="h-11 w-full text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {studentLoanOptions.map((s) => (
                  <SelectItem key={s.value} value={s.value}>
                    {s.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="salary-increase-pension">Pension contribution (%)</Label>
            <Input
              id="salary-increase-pension"
              type="number"
              min={0}
              max={100}
              step={0.5}
              value={pensionPercent}
              onChange={(e) => setPensionPercent(Number(e.target.value) || 0)}
              className="h-11 text-base"
            />
          </div>

          <RatesDisclaimer />
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${currentSalary}-${mode}-${increasePercent}-${increaseAmount}-${region}-${studentLoanPlan}-${pensionPercent}`}
        >
          <ResultStat label="Extra take-home pay (monthly)" value={formatCurrency(result.netIncreaseMonthly, 2)} emphasis positive />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="New gross salary" value={formatCurrency(result.newGrossSalary)} />
            <ResultStat label="Gross increase" value={formatCurrency(result.grossIncrease)} />
            <ResultStat label="New take-home pay (annual)" value={formatCurrency(result.newNetAnnual)} />
            <ResultStat label="Extra take-home pay (annual)" value={formatCurrency(result.netIncreaseAnnual)} positive />
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            Your take-home pay rises by {formatPercent(result.effectiveTakeHomeIncreasePercent, 1)}, which
            is usually a smaller percentage than your gross pay rise, since more
            of your income is taxed at your marginal rate.
          </p>
        </ResultCard>
      </div>
    </div>
  );
}
