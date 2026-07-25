"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import {
  calculateCreditCardPayoff,
  comparePaymentLevels,
  type PaymentMode,
} from "@/lib/calc/credit-card-payoff";
import { formatCurrency } from "@/lib/format";

export function CreditCardPayoffCalculator() {
  const [balance, setBalance] = React.useState(3000);
  const [apr, setApr] = React.useState(24.9);
  const [mode, setMode] = React.useState<PaymentMode>("fixed");
  const [monthlyPayment, setMonthlyPayment] = React.useState(150);
  const [minimumPercent, setMinimumPercent] = React.useState(2.5);

  const result = React.useMemo(
    () =>
      calculateCreditCardPayoff({
        balance,
        apr,
        mode,
        monthlyPayment,
        minimumPercent,
      }),
    [balance, apr, mode, monthlyPayment, minimumPercent]
  );

  const comparison = React.useMemo(() => {
    const base = mode === "fixed" ? monthlyPayment : result.firstMonthPayment || 50;
    const levels = [base, base + 50, base + 100].filter((v) => v > 0);
    return comparePaymentLevels(balance, apr, levels);
  }, [balance, apr, mode, monthlyPayment, result.firstMonthPayment]);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="cc-balance">Current balance</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="cc-balance"
                type="number"
                min={0}
                value={balance}
                onChange={(e) => setBalance(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="cc-apr">APR</Label>
            <div className="relative">
              <Input
                id="cc-apr"
                type="number"
                min={0}
                step={0.1}
                value={apr}
                onChange={(e) => setApr(Number(e.target.value) || 0)}
                className="h-11 pr-7 text-base"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Payment style</Label>
            <Tabs value={mode} onValueChange={(v) => setMode(v as PaymentMode)}>
              <TabsList className="w-full">
                <TabsTrigger value="fixed" className="flex-1">Fixed amount</TabsTrigger>
                <TabsTrigger value="minimum" className="flex-1">Minimum payment</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {mode === "fixed" ? (
            <div className="flex flex-col gap-2">
              <Label htmlFor="cc-payment">Monthly payment</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="cc-payment"
                  type="number"
                  min={0}
                  value={monthlyPayment}
                  onChange={(e) => setMonthlyPayment(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <Label htmlFor="cc-minimum">Minimum payment (% of balance)</Label>
              <div className="relative">
                <Input
                  id="cc-minimum"
                  type="number"
                  min={1}
                  step={0.1}
                  value={minimumPercent}
                  onChange={(e) => setMinimumPercent(Number(e.target.value) || 0)}
                  className="h-11 pr-7 text-base"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Most UK cards set a minimum around 1 to 3% of your balance, with a
                floor of around £25. Check your own statement for your exact figure.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${balance}-${apr}-${mode}-${monthlyPayment}-${minimumPercent}`}>
          {result.payoffReached ? (
            <>
              <ResultStat
                label="Time to pay off"
                value={`${Math.floor(result.monthsToPayOff / 12)}y ${result.monthsToPayOff % 12}m`}
                emphasis
              />
              <div className="mt-6 grid grid-cols-2 gap-6">
                <ResultStat label="Total interest paid" value={formatCurrency(result.totalInterest)} />
                <ResultStat label="Total paid" value={formatCurrency(result.totalPaid)} />
              </div>
            </>
          ) : (
            <p className="text-sm text-muted-foreground">
              At this payment level, the balance never clears because the payment
              does not cover the interest charged each month. Try a higher payment.
            </p>
          )}
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0">
            <h3 className="text-sm font-semibold text-foreground">Paying more per month</h3>
            <div className="mt-3 flex flex-col gap-2">
              {comparison.map((row) => (
                <div
                  key={row.monthlyPayment}
                  className="flex items-center justify-between border-t border-border/60 py-2 text-sm first:border-t-0"
                >
                  <span className="text-muted-foreground">
                    {formatCurrency(row.monthlyPayment)} a month
                  </span>
                  <span className="font-medium text-foreground">
                    {row.monthsToPayOff > 0
                      ? `${Math.ceil(row.monthsToPayOff)} months, ${formatCurrency(row.totalInterest)} interest`
                      : "Never pays off"}
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
