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
import { calculateIsa, ISA_TYPE_LABELS, type IsaType } from "@/lib/calc/isa";
import { ISA_ANNUAL_ALLOWANCE, LISA_ANNUAL_ALLOWANCE } from "@/lib/calc/uk-rates";
import { formatCurrency } from "@/lib/format";

const isaOptions = Object.entries(ISA_TYPE_LABELS) as [IsaType, string][];

export function IsaCalculator() {
  const [isaType, setIsaType] = React.useState<IsaType>("stocks-and-shares");
  const [initialDeposit, setInitialDeposit] = React.useState(1000);
  const [monthlyContribution, setMonthlyContribution] = React.useState(200);
  const [annualRatePercent, setAnnualRatePercent] = React.useState(5);
  const [years, setYears] = React.useState(10);

  const allowance = isaType === "lisa" ? LISA_ANNUAL_ALLOWANCE : ISA_ANNUAL_ALLOWANCE;
  const annualContribution = monthlyContribution * 12;
  const overAllowance = annualContribution > allowance;

  const result = React.useMemo(
    () =>
      calculateIsa({ isaType, initialDeposit, monthlyContribution, annualRatePercent, years }),
    [isaType, initialDeposit, monthlyContribution, annualRatePercent, years]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="isa-type">ISA type</Label>
            <Select value={isaType} onValueChange={(v) => setIsaType(v as IsaType)}>
              <SelectTrigger id="isa-type" className="h-11 w-full text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {isaOptions.map(([value, label]) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="isa-initial">Initial deposit</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="isa-initial"
                type="number"
                min={0}
                value={initialDeposit}
                onChange={(e) => setInitialDeposit(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="isa-monthly">Monthly contribution</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="isa-monthly"
                type="number"
                min={0}
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
            {overAllowance && (
              <p className="text-xs text-amber-500">
                That is more than the {formatCurrency(allowance)} annual{" "}
                {isaType === "lisa" ? "Lifetime ISA" : "ISA"} allowance. The
                calculator still shows the growth, but check your contributions
                against the allowance for the tax year.
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="isa-rate">Expected annual return</Label>
              <div className="relative">
                <Input
                  id="isa-rate"
                  type="number"
                  min={0}
                  step={0.1}
                  value={annualRatePercent}
                  onChange={(e) => setAnnualRatePercent(Number(e.target.value) || 0)}
                  className="h-11 pr-7 text-base"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="isa-years">Years</Label>
              <Input
                id="isa-years"
                type="number"
                min={1}
                max={50}
                value={years}
                onChange={(e) => setYears(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
          </div>

          {isaType === "stocks-and-shares" && (
            <p className="text-xs leading-relaxed text-muted-foreground">
              A Stocks and Shares ISA invests in the market, so its value can fall
              as well as rise. The return you enter is an assumption for planning
              purposes, not a guarantee.
            </p>
          )}

          <RatesDisclaimer>
            ISA allowances shown are for the 2026/27 tax year and are for guidance
            only. Always confirm the current allowance and product rules on
            gov.uk before making a decision.
          </RatesDisclaimer>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${isaType}-${initialDeposit}-${monthlyContribution}-${annualRatePercent}-${years}`}
        >
          <ResultStat label="Projected final balance" value={formatCurrency(result.finalBalance, 2)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Total contributions" value={formatCurrency(result.totalContributions)} />
            <ResultStat label="Tax-free gains" value={formatCurrency(result.taxFreeGains)} positive />
            {isaType === "lisa" && (
              <ResultStat label="Government bonus (25%)" value={formatCurrency(result.lisaBonus)} positive />
            )}
            <ResultStat
              label="vs taxed savings account"
              value={formatCurrency(result.taxedSavingsComparison, 2)}
            />
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            The taxed savings comparison assumes the same growth outside an ISA,
            with interest above the Personal Savings Allowance taxed at a
            simplified 20%. Your own tax position may differ.
          </p>
        </ResultCard>
      </div>
    </div>
  );
}
