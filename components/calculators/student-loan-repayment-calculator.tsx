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
import { calculateStudentLoanRepaymentSummary } from "@/lib/calc/student-loan-repayment";
import { formatCurrency, formatPercent } from "@/lib/format";
import type { StudentLoanPlan } from "@/lib/calc/uk-rates";

const plans: { value: StudentLoanPlan; label: string }[] = [
  { value: "plan1", label: "Plan 1 (pre-2012 England/Wales, or Northern Ireland)" },
  { value: "plan2", label: "Plan 2 (2012 to 2023 England/Wales)" },
  { value: "plan4", label: "Plan 4 (Scotland)" },
  { value: "plan5", label: "Plan 5 (2023 onwards England/Wales)" },
  { value: "postgrad", label: "Postgraduate Loan" },
];

export function StudentLoanRepaymentCalculator() {
  const [annualSalary, setAnnualSalary] = React.useState(32000);
  const [plan, setPlan] = React.useState<StudentLoanPlan>("plan2");

  const result = React.useMemo(
    () => calculateStudentLoanRepaymentSummary({ annualSalary, plan }),
    [annualSalary, plan]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="sl-salary">Annual salary (before tax)</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="sl-salary"
                type="number"
                min={0}
                step={500}
                value={annualSalary}
                onChange={(e) => setAnnualSalary(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="sl-plan">Repayment plan</Label>
            <Select value={plan} onValueChange={(v) => setPlan(v as StudentLoanPlan)}>
              <SelectTrigger id="sl-plan" className="h-11 w-full text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {plans.map((p) => (
                  <SelectItem key={p.value} value={p.value}>
                    {p.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              Not sure which plan? Check your loan account on GOV.UK or your annual statement
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${annualSalary}-${plan}`}>
          <ResultStat label="Monthly repayment" value={formatCurrency(result.monthlyRepayment, 2)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Annual repayment" value={formatCurrency(result.annualRepayment, 2)} />
            <ResultStat label="Repayment threshold" value={formatCurrency(result.threshold)} />
            <ResultStat label="Repayment rate" value={formatPercent(result.ratePercent, 0)} />
            <ResultStat label="Income above threshold" value={formatCurrency(result.incomeAboveThreshold)} />
          </div>
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0">
            <h3 className="text-sm font-semibold text-foreground">Compare all plans at this salary</h3>
            <div className="mt-3 flex flex-col gap-2">
              {result.comparison.map((row) => (
                <div
                  key={row.plan}
                  className="flex items-center justify-between border-t border-border/60 py-2 text-sm first:border-t-0"
                >
                  <span className="text-muted-foreground">{row.label}</span>
                  <span className="font-mono font-medium text-foreground">
                    {formatCurrency(row.annualRepayment / 12, 2)}/mo
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
