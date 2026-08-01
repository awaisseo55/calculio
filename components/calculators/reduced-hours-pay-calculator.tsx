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
import { calculateReducedHoursPay } from "@/lib/calc/reduced-hours-pay";
import { STUDENT_LOAN_PLANS, type StudentLoanPlan } from "@/lib/calc/uk-rates";
import { formatCurrency, formatPercent } from "@/lib/format";

const studentLoanOptions = Object.entries(STUDENT_LOAN_PLANS).map(([value, plan]) => ({
  value: value as StudentLoanPlan,
  label: plan.label,
}));

export function ReducedHoursPayCalculator() {
  const [currentAnnualSalary, setCurrentAnnualSalary] = React.useState(32000);
  const [currentHoursPerWeek, setCurrentHoursPerWeek] = React.useState(37.5);
  const [newHoursPerWeek, setNewHoursPerWeek] = React.useState(30);
  const [taxCode, setTaxCode] = React.useState("1257L");
  const [pensionPercent, setPensionPercent] = React.useState(5);
  const [studentLoanPlan, setStudentLoanPlan] = React.useState<StudentLoanPlan>("none");

  const result = React.useMemo(
    () =>
      calculateReducedHoursPay({
        currentAnnualSalary,
        currentHoursPerWeek,
        newHoursPerWeek,
        taxCode,
        pensionPercent,
        studentLoanPlan,
      }),
    [currentAnnualSalary, currentHoursPerWeek, newHoursPerWeek, taxCode, pensionPercent, studentLoanPlan]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="rh-salary">Current annual salary (full hours)</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="rh-salary"
                type="number"
                min={0}
                step={500}
                value={currentAnnualSalary}
                onChange={(e) => setCurrentAnnualSalary(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="rh-current-hours">Current hours per week</Label>
              <Input
                id="rh-current-hours"
                type="number"
                min={1}
                max={80}
                step={0.5}
                value={currentHoursPerWeek}
                onChange={(e) => setCurrentHoursPerWeek(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="rh-new-hours">New reduced hours per week</Label>
              <Input
                id="rh-new-hours"
                type="number"
                min={0}
                max={80}
                step={0.5}
                value={newHoursPerWeek}
                onChange={(e) => setNewHoursPerWeek(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="rh-tax-code">Tax code</Label>
              <Input
                id="rh-tax-code"
                type="text"
                value={taxCode}
                onChange={(e) => setTaxCode(e.target.value)}
                className="h-11 text-base uppercase"
              />
              <p className="text-xs text-muted-foreground">
                1257L is the standard code for most people. A code starting
                with S uses Scottish Income Tax bands.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="rh-pension">Pension contribution (%)</Label>
              <Input
                id="rh-pension"
                type="number"
                min={0}
                max={100}
                step={0.5}
                value={pensionPercent}
                onChange={(e) => setPensionPercent(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="rh-student-loan">Student loan plan</Label>
            <Select
              value={studentLoanPlan}
              onValueChange={(v) => setStudentLoanPlan(v as StudentLoanPlan)}
            >
              <SelectTrigger id="rh-student-loan" className="h-11 w-full text-base">
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

          <RatesDisclaimer>
            Your new salary is calculated in proportion to your reduced
            hours, then Income Tax, National Insurance, pension and student
            loan are estimated on that new figure using standard 2026/27
            rates.
          </RatesDisclaimer>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${currentAnnualSalary}-${currentHoursPerWeek}-${newHoursPerWeek}-${taxCode}-${pensionPercent}-${studentLoanPlan}`}
        >
          <ResultStat label="New take-home pay (monthly)" value={formatCurrency(result.newNetMonthly, 2)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="New gross annual salary" value={formatCurrency(result.newGrossAnnualSalary)} />
            <ResultStat
              label="Change in take-home pay (monthly)"
              value={`${result.netMonthlyDifference >= 0 ? "+" : ""}${formatCurrency(result.netMonthlyDifference, 2)}`}
              positive={result.netMonthlyDifference >= 0}
            />
            <ResultStat label="Current hourly rate" value={formatCurrency(result.currentHourlyRate, 2)} />
            <ResultStat label="New hourly rate" value={formatCurrency(result.newHourlyRate, 2)} />
            <ResultStat label="Hours reduced by" value={formatPercent(result.hoursReductionPercent)} />
            <ResultStat
              label="Change in annual pension contribution"
              value={`${result.pensionContributionAnnualDifference >= 0 ? "+" : ""}${formatCurrency(result.pensionContributionAnnualDifference, 2)}`}
            />
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            Your hourly rate should stay roughly the same, since your reduced
            salary is scaled directly with your reduced hours. Your take-home
            pay usually falls by a smaller percentage than your hours,
            because less of your income sits in higher Income Tax and
            National Insurance bands.
          </p>
        </ResultCard>
      </div>
    </div>
  );
}
