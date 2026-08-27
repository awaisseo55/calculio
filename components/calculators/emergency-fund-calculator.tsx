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
import { calculateEmergencyFund } from "@/lib/calc/emergency-fund";
import { formatCurrency, formatNumber } from "@/lib/format";

export function EmergencyFundCalculator() {
  const [monthlyEssentialExpenses, setMonthlyEssentialExpenses] = React.useState(1500);
  const [monthsOfCover, setMonthsOfCover] = React.useState(3);
  const [currentSavings, setCurrentSavings] = React.useState(1000);
  const [monthlySavingAmount, setMonthlySavingAmount] = React.useState(150);

  const result = React.useMemo(
    () => calculateEmergencyFund({ monthlyEssentialExpenses, monthsOfCover, currentSavings, monthlySavingAmount }),
    [monthlyEssentialExpenses, monthsOfCover, currentSavings, monthlySavingAmount]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="ef-expenses">Monthly essential expenses</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">£</span>
              <Input
                id="ef-expenses"
                type="number"
                min={0}
                step={50}
                value={monthlyEssentialExpenses}
                onChange={(e) => setMonthlyEssentialExpenses(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
            <p className="text-xs text-muted-foreground">Rent or mortgage, bills, food and other must-pay costs</p>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="ef-months">Months of cover to aim for</Label>
            <Select value={String(monthsOfCover)} onValueChange={(v) => setMonthsOfCover(Number(v))}>
              <SelectTrigger id="ef-months" className="h-11 w-full text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6].map((m) => (
                  <SelectItem key={m} value={String(m)}>
                    {m} {m === 1 ? "month" : "months"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">MoneyHelper suggests three to six months as a general starting point</p>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="ef-current">Current savings set aside</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">£</span>
              <Input
                id="ef-current"
                type="number"
                min={0}
                step={50}
                value={currentSavings}
                onChange={(e) => setCurrentSavings(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="ef-monthly-saving">How much you can save each month</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">£</span>
              <Input
                id="ef-monthly-saving"
                type="number"
                min={0}
                step={10}
                value={monthlySavingAmount}
                onChange={(e) => setMonthlySavingAmount(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${monthlyEssentialExpenses}-${monthsOfCover}-${currentSavings}-${monthlySavingAmount}`}
        >
          <ResultStat label="Target emergency fund" value={formatCurrency(result.targetFundSize, 0)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Still needed" value={formatCurrency(result.shortfall, 0)} />
            <ResultStat
              label="Time to reach target"
              value={
                result.isTargetMet
                  ? "Target met"
                  : Number.isFinite(result.monthsToTarget)
                    ? `${formatNumber(Math.ceil(result.monthsToTarget), 0)} months`
                    : "Add a monthly saving"
              }
            />
          </div>
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0 text-sm text-muted-foreground">
            This is a general guide, not financial advice. Keep an emergency fund in an easy access savings
            account so you can reach it quickly if you need to.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
