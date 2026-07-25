"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { RatesDisclaimer } from "@/components/calculators/rates-disclaimer";
import { calculateTakeHomePay } from "@/lib/calc/take-home-pay";
import { STUDENT_LOAN_PLANS, type StudentLoanPlan } from "@/lib/calc/uk-rates";
import type { TaxRegion } from "@/lib/calc/income-tax";
import { formatCurrency } from "@/lib/format";

const regions: { value: TaxRegion; label: string }[] = [
  { value: "england-wales-ni", label: "England, Wales or Northern Ireland" },
  { value: "scotland", label: "Scotland" },
];

const studentLoanOptions = Object.entries(STUDENT_LOAN_PLANS).map(([value, plan]) => ({
  value: value as StudentLoanPlan,
  label: plan.label,
}));

export function TakeHomePayCalculator() {
  const [grossAnnualSalary, setGrossAnnualSalary] = React.useState(38000);
  const [region, setRegion] = React.useState<TaxRegion>("england-wales-ni");
  const [studentLoanPlan, setStudentLoanPlan] = React.useState<StudentLoanPlan>("none");
  const [pensionPercent, setPensionPercent] = React.useState(5);

  const result = React.useMemo(
    () =>
      calculateTakeHomePay({ grossAnnualSalary, region, studentLoanPlan, pensionPercent }),
    [grossAnnualSalary, region, studentLoanPlan, pensionPercent]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="salary">Gross annual salary</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="salary"
                type="number"
                min={0}
                step={500}
                value={grossAnnualSalary}
                onChange={(e) => setGrossAnnualSalary(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="region">Region</Label>
            <Select value={region} onValueChange={(v) => setRegion(v as TaxRegion)}>
              <SelectTrigger id="region" className="h-11 w-full text-base">
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
            <Label htmlFor="student-loan">Student loan plan</Label>
            <Select
              value={studentLoanPlan}
              onValueChange={(v) => setStudentLoanPlan(v as StudentLoanPlan)}
            >
              <SelectTrigger id="student-loan" className="h-11 w-full text-base">
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
            <Label htmlFor="pension">Pension contribution (%)</Label>
            <Input
              id="pension"
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
          resultKey={`${grossAnnualSalary}-${region}-${studentLoanPlan}-${pensionPercent}`}
        >
          <ResultStat label="Take-home pay (monthly)" value={formatCurrency(result.netMonthly, 2)} emphasis positive />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Take-home pay (annual)" value={formatCurrency(result.netAnnual)} />
            <ResultStat label="Take-home pay (weekly)" value={formatCurrency(result.netWeekly)} />
            <ResultStat label="Income Tax" value={formatCurrency(result.incomeTax)} />
            <ResultStat label="National Insurance" value={formatCurrency(result.nationalInsurance)} />
            <ResultStat label="Pension contribution" value={formatCurrency(result.pensionContribution)} />
            <ResultStat label="Student loan" value={formatCurrency(result.studentLoanRepayment)} />
          </div>
        </ResultCard>
      </div>
    </div>
  );
}
