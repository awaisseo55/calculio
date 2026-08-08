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
import {
  calculateMaternityPay,
  type MaternityEmployerPolicy,
} from "@/lib/calc/maternity-pay";
import { formatCurrency } from "@/lib/format";

const policyOptions: { value: MaternityEmployerPolicy; label: string }[] = [
  { value: "statutory-only", label: "Statutory Maternity Pay (SMP) only" },
  { value: "enhanced", label: "Enhanced: full pay for a set period, then SMP" },
  { value: "other", label: "Other / not sure" },
];

export function MaternityPayCalculator() {
  const [weeklySalary, setWeeklySalary] = React.useState(600);
  const [leaveWeeks, setLeaveWeeks] = React.useState(39);
  const [employerPolicy, setEmployerPolicy] = React.useState<MaternityEmployerPolicy>("statutory-only");
  const [enhancedFullPayWeeks, setEnhancedFullPayWeeks] = React.useState(8);
  const [startDate, setStartDate] = React.useState("2026-09-01");

  const result = React.useMemo(
    () =>
      calculateMaternityPay({
        weeklySalary,
        leaveWeeks,
        employerPolicy,
        enhancedFullPayWeeks,
        startDate,
      }),
    [weeklySalary, leaveWeeks, employerPolicy, enhancedFullPayWeeks, startDate]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="mp-salary">Current weekly salary</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="mp-salary"
                  type="number"
                  min={0}
                  step={10}
                  value={weeklySalary}
                  onChange={(e) => setWeeklySalary(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="mp-weeks">Weeks of leave (max 52)</Label>
              <Input
                id="mp-weeks"
                type="number"
                min={0}
                max={52}
                step={1}
                value={leaveWeeks}
                onChange={(e) => setLeaveWeeks(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="mp-start">Start date of maternity leave</Label>
            <Input
              id="mp-start"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="h-11 text-base"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="mp-policy">Employer&apos;s maternity policy</Label>
            <Select
              value={employerPolicy}
              onValueChange={(v) => setEmployerPolicy(v as MaternityEmployerPolicy)}
            >
              <SelectTrigger id="mp-policy" className="h-11 w-full text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {policyOptions.map((o) => (
                  <SelectItem key={o.value} value={o.value}>
                    {o.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {employerPolicy === "enhanced" && (
            <div className="flex flex-col gap-2">
              <Label htmlFor="mp-enhanced-weeks">Weeks of full pay from your employer</Label>
              <Input
                id="mp-enhanced-weeks"
                type="number"
                min={0}
                max={39}
                step={1}
                value={enhancedFullPayWeeks}
                onChange={(e) => setEnhancedFullPayWeeks(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
          )}

          <RatesDisclaimer>
            To qualify for SMP you generally need at least 26 weeks
            continuous employment with the same employer by the qualifying
            week, and average weekly earnings of at least £125. Self-employed
            mothers cannot get SMP but may be able to claim Maternity
            Allowance instead, at a similar weekly rate.
          </RatesDisclaimer>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${weeklySalary}-${leaveWeeks}-${employerPolicy}-${enhancedFullPayWeeks}-${startDate}`}
        >
          <ResultStat label="Total maternity pay" value={formatCurrency(result.totalMaternityPay, 2)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            {result.enhancedWeeks > 0 && (
              <ResultStat label={`Full pay (${result.enhancedWeeks} wks)`} value={formatCurrency(result.enhancedTotal, 2)} />
            )}
            <ResultStat label={`90% rate (${result.higherRateWeeks} wks)`} value={formatCurrency(result.higherRateTotal, 2)} />
            <ResultStat label={`Standard SMP rate (${result.standardRateWeeks} wks)`} value={formatCurrency(result.standardRateTotal, 2)} />
            <ResultStat label="Unpaid weeks" value={`${result.unpaidWeeks}`} />
            <ResultStat label="Estimated net (after tax & NI)" value={formatCurrency(result.netMaternityPay, 2)} positive />
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            SMP and any enhanced maternity pay are taxable and count towards
            National Insurance in the normal way, so your actual payslip
            figures depend on your tax code and any other income during the
            year, not just this total. Estimated tax and National Insurance
            here is {formatCurrency(result.estimatedIncomeTax + result.estimatedNationalInsurance, 2)}, based on treating your
            total maternity pay as your only income for the period.
          </p>
        </ResultCard>

        {result.monthlyBreakdown.length > 0 && (
          <Card className="p-6">
            <CardContent className="p-0">
              <h3 className="text-sm font-semibold text-foreground">Monthly breakdown</h3>
              <div className="mt-3 flex flex-col gap-2">
                {result.monthlyBreakdown.map((m) => (
                  <div
                    key={m.label}
                    className="flex items-center justify-between border-t border-border/60 py-2 text-sm first:border-t-0"
                  >
                    <span className="text-muted-foreground">{m.label}</span>
                    <span className="font-mono font-medium text-foreground">{formatCurrency(m.amount, 2)}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
