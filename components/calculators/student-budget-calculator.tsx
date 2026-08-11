"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateStudentBudget } from "@/lib/calc/student-budget";
import { formatCurrency } from "@/lib/format";

function MoneyField({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id} className="text-xs text-muted-foreground">{label}</Label>
      <div className="relative">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
        <Input
          id={id}
          type="number"
          min={0}
          step={10}
          value={value}
          onChange={(e) => onChange(Number(e.target.value) || 0)}
          className="h-10 pl-7 text-sm"
        />
      </div>
    </div>
  );
}

export function StudentBudgetCalculator() {
  const [maintenanceLoan, setMaintenanceLoan] = React.useState(650);
  const [parentalContribution, setParentalContribution] = React.useState(100);
  const [partTimeJobIncome, setPartTimeJobIncome] = React.useState(250);
  const [otherIncome, setOtherIncome] = React.useState(0);
  const [rent, setRent] = React.useState(550);
  const [food, setFood] = React.useState(200);
  const [bills, setBills] = React.useState(60);
  const [transport, setTransport] = React.useState(50);
  const [socialising, setSocialising] = React.useState(120);
  const [courseCosts, setCourseCosts] = React.useState(30);
  const [otherExpenses, setOtherExpenses] = React.useState(40);

  const result = React.useMemo(
    () =>
      calculateStudentBudget({
        maintenanceLoan,
        parentalContribution,
        partTimeJobIncome,
        otherIncome,
        rent,
        food,
        bills,
        transport,
        socialising,
        courseCosts,
        otherExpenses,
      }),
    [
      maintenanceLoan,
      parentalContribution,
      partTimeJobIncome,
      otherIncome,
      rent,
      food,
      bills,
      transport,
      socialising,
      courseCosts,
      otherExpenses,
    ]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-3">
            <Label>Monthly income</Label>
            <div className="grid grid-cols-2 gap-3">
              <MoneyField id="sb-loan" label="Maintenance loan/grant" value={maintenanceLoan} onChange={setMaintenanceLoan} />
              <MoneyField id="sb-parent" label="Parental contribution" value={parentalContribution} onChange={setParentalContribution} />
              <MoneyField id="sb-job" label="Part-time job" value={partTimeJobIncome} onChange={setPartTimeJobIncome} />
              <MoneyField id="sb-other-income" label="Other income" value={otherIncome} onChange={setOtherIncome} />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Label>Monthly expenses</Label>
            <div className="grid grid-cols-2 gap-3">
              <MoneyField id="sb-rent" label="Rent" value={rent} onChange={setRent} />
              <MoneyField id="sb-food" label="Food" value={food} onChange={setFood} />
              <MoneyField id="sb-bills" label="Bills" value={bills} onChange={setBills} />
              <MoneyField id="sb-transport" label="Transport" value={transport} onChange={setTransport} />
              <MoneyField id="sb-social" label="Socialising" value={socialising} onChange={setSocialising} />
              <MoneyField id="sb-course" label="Course costs" value={courseCosts} onChange={setCourseCosts} />
              <MoneyField id="sb-other-expense" label="Other" value={otherExpenses} onChange={setOtherExpenses} />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${maintenanceLoan}-${parentalContribution}-${partTimeJobIncome}-${otherIncome}-${rent}-${food}-${bills}-${transport}-${socialising}-${courseCosts}-${otherExpenses}`}
        >
          <ResultStat
            label={result.monthlySurplus >= 0 ? "Monthly surplus" : "Monthly shortfall"}
            value={formatCurrency(Math.abs(result.monthlySurplus), 2)}
            emphasis
            positive={result.monthlySurplus >= 0}
          />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Total monthly income" value={formatCurrency(result.totalMonthlyIncome, 2)} />
            <ResultStat label="Total monthly expenses" value={formatCurrency(result.totalMonthlyExpenses, 2)} />
          </div>
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0">
            <h3 className="text-sm font-semibold text-foreground">Expense breakdown</h3>
            <div className="mt-3 flex flex-col gap-2">
              {result.expenseBreakdown.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between border-t border-border/60 py-2 text-sm first:border-t-0"
                >
                  <span className="text-muted-foreground">{row.label}</span>
                  <span className="font-mono font-medium text-foreground">{formatCurrency(row.amount, 2)}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
