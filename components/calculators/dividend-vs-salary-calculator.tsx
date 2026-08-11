"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateDividendVsSalary } from "@/lib/calc/dividend-vs-salary";
import { formatCurrency } from "@/lib/format";
import { CORPORATION_TAX_SMALL_PROFITS_RATE } from "@/lib/calc/uk-rates";

export function DividendVsSalaryCalculator() {
  const [companyProfit, setCompanyProfit] = React.useState(60000);
  const [otherAnnualIncome, setOtherAnnualIncome] = React.useState(0);
  const [corporationTaxRatePercent, setCorporationTaxRatePercent] = React.useState(
    CORPORATION_TAX_SMALL_PROFITS_RATE * 100
  );

  const result = React.useMemo(
    () =>
      calculateDividendVsSalary({
        companyProfit,
        otherAnnualIncome,
        corporationTaxRatePercent,
      }),
    [companyProfit, otherAnnualIncome, corporationTaxRatePercent]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="dvs-profit">Company profit available for you this year</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="dvs-profit"
                type="number"
                min={0}
                step={500}
                value={companyProfit}
                onChange={(e) => setCompanyProfit(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="dvs-other">Your other annual income</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="dvs-other"
                type="number"
                min={0}
                step={500}
                value={otherAnnualIncome}
                onChange={(e) => setOtherAnnualIncome(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
            <p className="text-xs text-muted-foreground">From another job, pension or other companies</p>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="dvs-corp-rate">Corporation Tax rate already paid on this profit</Label>
            <div className="relative">
              <Input
                id="dvs-corp-rate"
                type="number"
                min={0}
                max={100}
                step={0.5}
                value={corporationTaxRatePercent}
                onChange={(e) => setCorporationTaxRatePercent(Number(e.target.value) || 0)}
                className="h-11 pr-7 text-base"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
            </div>
            <p className="text-xs text-muted-foreground">
              19% if profit is £50,000 or less, 25% if over £250,000, or check our Corporation Tax calculator in between
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${companyProfit}-${otherAnnualIncome}-${corporationTaxRatePercent}`}>
          <ResultStat
            label={result.betterRoute === "dividend" ? "Dividends net you more by" : "Salary nets you more by"}
            value={formatCurrency(result.difference, 2)}
            emphasis
            positive
          />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Net income via salary" value={formatCurrency(result.salaryRoute.netPersonalIncome, 2)} />
            <ResultStat label="Net income via dividend" value={formatCurrency(result.dividendRoute.netPersonalIncome, 2)} />
          </div>
        </ResultCard>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Card className="p-5">
            <CardContent className="flex flex-col gap-1.5 p-0 text-sm">
              <h3 className="text-sm font-semibold text-foreground">Salary route</h3>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Gross salary</span>
                <span className="font-mono">{formatCurrency(result.salaryRoute.grossPay, 2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Employer NI</span>
                <span className="font-mono">{formatCurrency(result.salaryRoute.employerNI, 2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Income Tax + employee NI</span>
                <span className="font-mono">{formatCurrency(result.salaryRoute.personalTax, 2)}</span>
              </div>
            </CardContent>
          </Card>
          <Card className="p-5">
            <CardContent className="flex flex-col gap-1.5 p-0 text-sm">
              <h3 className="text-sm font-semibold text-foreground">Dividend route</h3>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Dividend paid</span>
                <span className="font-mono">{formatCurrency(result.dividendRoute.grossPay, 2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Corp tax + dividend tax</span>
                <span className="font-mono">{formatCurrency(result.dividendRoute.personalTax, 2)}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="p-6">
          <CardContent className="p-0 text-sm text-muted-foreground">
            This compares personal tax outcomes for a single director. It
            does not model Employment Allowance, which some companies with
            other employees can claim to offset employer NI, or the option
            of a small salary topped up with dividends. Speak to an
            accountant for advice tailored to your company.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
