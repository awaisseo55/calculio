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
  calculateSickPay,
  type EmploymentStatus,
  type EmployerSchemeType,
} from "@/lib/calc/sick-pay";
import { formatCurrency, formatNumber } from "@/lib/format";

const employmentStatusOptions: { value: EmploymentStatus; label: string }[] = [
  { value: "employee", label: "Employee" },
  { value: "agency", label: "Agency worker" },
  { value: "self-employed", label: "Self-employed" },
];

const schemeOptions: { value: EmployerSchemeType; label: string }[] = [
  { value: "statutory-only", label: "Statutory Sick Pay only" },
  { value: "full-pay-then-ssp", label: "Full pay for a set period, then SSP" },
  { value: "half-pay-then-ssp", label: "Half pay for a set period, then SSP" },
];

export function SickPayCalculator() {
  const [employmentStatus, setEmploymentStatus] = React.useState<EmploymentStatus>("employee");
  const [weeklySalary, setWeeklySalary] = React.useState(500);
  const [employerSchemeType, setEmployerSchemeType] =
    React.useState<EmployerSchemeType>("full-pay-then-ssp");
  const [companySchemeWeeks, setCompanySchemeWeeks] = React.useState(4);
  const [sickDays, setSickDays] = React.useState(10);

  const result = React.useMemo(
    () =>
      calculateSickPay({
        employmentStatus,
        weeklySalary,
        employerSchemeType,
        companySchemeWeeks,
        sickDays,
      }),
    [employmentStatus, weeklySalary, employerSchemeType, companySchemeWeeks, sickDays]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="sp-status">Employment status</Label>
            <Select
              value={employmentStatus}
              onValueChange={(v) => setEmploymentStatus(v as EmploymentStatus)}
            >
              <SelectTrigger id="sp-status" className="h-11 w-full text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {employmentStatusOptions.map((o) => (
                  <SelectItem key={o.value} value={o.value}>
                    {o.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="sp-salary">Weekly salary</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="sp-salary"
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
              <Label htmlFor="sp-days">Sick days (working days)</Label>
              <Input
                id="sp-days"
                type="number"
                min={0}
                step={1}
                value={sickDays}
                onChange={(e) => setSickDays(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
          </div>

          {employmentStatus !== "self-employed" && (
            <>
              <div className="flex flex-col gap-2">
                <Label htmlFor="sp-scheme">Employer sick pay policy</Label>
                <Select
                  value={employerSchemeType}
                  onValueChange={(v) => setEmployerSchemeType(v as EmployerSchemeType)}
                >
                  <SelectTrigger id="sp-scheme" className="h-11 w-full text-base">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {schemeOptions.map((o) => (
                      <SelectItem key={o.value} value={o.value}>
                        {o.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {employerSchemeType !== "statutory-only" && (
                <div className="flex flex-col gap-2">
                  <Label htmlFor="sp-scheme-weeks">Company pay period (weeks)</Label>
                  <Input
                    id="sp-scheme-weeks"
                    type="number"
                    min={0}
                    step={1}
                    value={companySchemeWeeks}
                    onChange={(e) => setCompanySchemeWeeks(Number(e.target.value) || 0)}
                    className="h-11 text-base"
                  />
                </div>
              )}
            </>
          )}

          <RatesDisclaimer>
            From 6 April 2026, Statutory Sick Pay is payable from day one of
            sickness, at the lower of the flat weekly rate or 80% of average
            weekly earnings, for up to 28 weeks. Self-employed people are not
            entitled to SSP.
          </RatesDisclaimer>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${employmentStatus}-${weeklySalary}-${employerSchemeType}-${companySchemeWeeks}-${sickDays}`}
        >
          <ResultStat label="Total sick pay" value={formatCurrency(result.totalSickPay, 2)} emphasis />
          {employmentStatus === "self-employed" ? (
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              Self-employed people are not entitled to Statutory Sick Pay.
              You may be able to claim Employment and Support Allowance, or
              rely on savings or income protection insurance, while you are
              unable to work.
            </p>
          ) : (
            <>
              <div className="mt-6 grid grid-cols-2 gap-6">
                <ResultStat label="Company sick pay portion" value={formatCurrency(result.companyPayPortion, 2)} />
                <ResultStat label="SSP portion" value={formatCurrency(result.sspPortion, 2)} />
                <ResultStat label="SSP weekly rate" value={formatCurrency(result.sspWeeklyRate, 2)} />
                <ResultStat label="Total weeks off sick" value={formatNumber(result.totalWeeksSick, 1)} />
              </div>
              <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                SSP is paid for a maximum of 28 weeks in total. Both SSP and
                any company sick pay are treated as normal earnings, so
                Income Tax and National Insurance are still deducted as
                usual.
                {result.weeksBeyondSspEntitlement > 0 &&
                  ` Based on your figures, you have around ${formatNumber(result.weeksBeyondSspEntitlement, 1)} weeks of sickness beyond your SSP entitlement, which would not be covered unless your employer chooses to pay more.`}
              </p>
            </>
          )}
        </ResultCard>
      </div>
    </div>
  );
}
