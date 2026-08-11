"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateRentalYield } from "@/lib/calc/rental-yield";
import { formatCurrency, formatPercent } from "@/lib/format";
import {
  BTL_TYPICAL_MANAGEMENT_FEE_PERCENT,
  BTL_TYPICAL_MAINTENANCE_PERCENT,
  BTL_TYPICAL_VOID_WEEKS_PER_YEAR,
} from "@/lib/calc/uk-rates";

export function RentalYieldCalculator() {
  const [propertyPrice, setPropertyPrice] = React.useState(220000);
  const [monthlyRent, setMonthlyRent] = React.useState(1100);
  const [deposit, setDeposit] = React.useState(55000);
  const [mortgageRate, setMortgageRate] = React.useState(5.5);
  const [managementFeePercent, setManagementFeePercent] = React.useState(
    BTL_TYPICAL_MANAGEMENT_FEE_PERCENT
  );
  const [maintenancePercent, setMaintenancePercent] = React.useState(
    BTL_TYPICAL_MAINTENANCE_PERCENT
  );
  const [voidWeeksPerYear, setVoidWeeksPerYear] = React.useState(
    BTL_TYPICAL_VOID_WEEKS_PER_YEAR
  );
  const [otherAnnualCosts, setOtherAnnualCosts] = React.useState(600);

  const result = React.useMemo(
    () =>
      calculateRentalYield({
        propertyPrice,
        monthlyRent,
        deposit,
        mortgageRate,
        managementFeePercent,
        maintenancePercent,
        voidWeeksPerYear,
        otherAnnualCosts,
      }),
    [
      propertyPrice,
      monthlyRent,
      deposit,
      mortgageRate,
      managementFeePercent,
      maintenancePercent,
      voidWeeksPerYear,
      otherAnnualCosts,
    ]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="ry-price">Property price</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="ry-price"
                  type="number"
                  min={0}
                  step={1000}
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="ry-rent">Monthly rent</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="ry-rent"
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
              <Label htmlFor="ry-deposit">Deposit</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="ry-deposit"
                  type="number"
                  min={0}
                  step={1000}
                  value={deposit}
                  onChange={(e) => setDeposit(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="ry-rate">Mortgage rate (interest-only)</Label>
              <div className="relative">
                <Input
                  id="ry-rate"
                  type="number"
                  min={0}
                  step={0.1}
                  value={mortgageRate}
                  onChange={(e) => setMortgageRate(Number(e.target.value) || 0)}
                  className="h-11 pr-7 text-base"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="ry-mgmt">Management fee</Label>
              <div className="relative">
                <Input
                  id="ry-mgmt"
                  type="number"
                  min={0}
                  step={0.5}
                  value={managementFeePercent}
                  onChange={(e) => setManagementFeePercent(Number(e.target.value) || 0)}
                  className="h-11 pr-7 text-base"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="ry-maint">Maintenance</Label>
              <div className="relative">
                <Input
                  id="ry-maint"
                  type="number"
                  min={0}
                  step={0.5}
                  value={maintenancePercent}
                  onChange={(e) => setMaintenancePercent(Number(e.target.value) || 0)}
                  className="h-11 pr-7 text-base"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="ry-void">Void weeks</Label>
              <Input
                id="ry-void"
                type="number"
                min={0}
                max={52}
                value={voidWeeksPerYear}
                onChange={(e) => setVoidWeeksPerYear(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="ry-other">Other annual costs</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="ry-other"
                type="number"
                min={0}
                step={50}
                value={otherAnnualCosts}
                onChange={(e) => setOtherAnnualCosts(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
            <p className="text-xs text-muted-foreground">Landlord insurance, service charge, ground rent</p>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${propertyPrice}-${monthlyRent}-${deposit}-${mortgageRate}-${managementFeePercent}-${maintenancePercent}-${voidWeeksPerYear}-${otherAnnualCosts}`}
        >
          <ResultStat label="Gross rental yield" value={formatPercent(result.grossYieldPercent)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Net rental yield" value={formatPercent(result.netYieldPercent)} />
            <ResultStat label="Cash-on-cash return" value={formatPercent(result.cashOnCashReturnPercent)} />
            <ResultStat
              label="Monthly cash flow"
              value={formatCurrency(result.monthlyCashflow, 2)}
              positive={result.monthlyCashflow >= 0}
            />
            <ResultStat label="Annual mortgage interest" value={formatCurrency(result.annualMortgageInterest)} />
          </div>
        </ResultCard>

        <Card className="p-6">
          <CardContent className="flex flex-col gap-2 p-0 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Effective annual rent (after voids)</span>
              <span className="font-mono">{formatCurrency(result.effectiveAnnualRent)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Management fee</span>
              <span className="font-mono">{formatCurrency(result.managementFee)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Maintenance reserve</span>
              <span className="font-mono">{formatCurrency(result.maintenanceCost)}</span>
            </div>
            <div className="flex justify-between border-t border-border/60 pt-2">
              <span className="text-muted-foreground">Net annual income (before mortgage)</span>
              <span className="font-mono font-medium text-foreground">{formatCurrency(result.netAnnualIncome)}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
