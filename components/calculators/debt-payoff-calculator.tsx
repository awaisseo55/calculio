"use client";

import * as React from "react";
import { Plus, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateDebtPayoff, type DebtInput } from "@/lib/calc/debt-payoff";
import { formatCurrency } from "@/lib/format";

const defaultDebts: DebtInput[] = [
  { id: "1", name: "Store card", balance: 500, apr: 5, minPayment: 20 },
  { id: "2", name: "Credit card", balance: 3000, apr: 24, minPayment: 90 },
];

let nextId = 3;

export function DebtPayoffCalculator() {
  const [debts, setDebts] = React.useState<DebtInput[]>(defaultDebts);
  const [extraMonthlyPayment, setExtraMonthlyPayment] = React.useState(150);

  const result = React.useMemo(
    () => calculateDebtPayoff(debts, extraMonthlyPayment),
    [debts, extraMonthlyPayment]
  );

  const updateDebt = (id: string, field: keyof DebtInput, value: string | number) => {
    setDebts((prev) => prev.map((d) => (d.id === id ? { ...d, [field]: value } : d)));
  };

  const addDebt = () => {
    if (debts.length >= 8) return;
    setDebts((prev) => [
      ...prev,
      { id: String(nextId++), name: `Debt ${prev.length + 1}`, balance: 1000, apr: 15, minPayment: 30 },
    ]);
  };

  const removeDebt = (id: string) => {
    if (debts.length <= 1) return;
    setDebts((prev) => prev.filter((d) => d.id !== id));
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-5 p-0">
          <div className="flex flex-col gap-4">
            <Label>Your debts</Label>
            {debts.map((debt, i) => (
              <div key={debt.id} className="rounded-xl border border-border p-4">
                <div className="flex items-center justify-between gap-2">
                  <Input
                    value={debt.name}
                    onChange={(e) => updateDebt(debt.id, "name", e.target.value)}
                    className="h-9 border-0 bg-transparent px-0 text-sm font-medium shadow-none focus-visible:ring-0"
                    aria-label={`Debt ${i + 1} name`}
                  />
                  <button
                    type="button"
                    onClick={() => removeDebt(debt.id)}
                    disabled={debts.length <= 1}
                    className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-border text-muted-foreground transition hover:text-foreground disabled:opacity-40"
                    aria-label={`Remove ${debt.name}`}
                  >
                    <X className="size-4" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-muted-foreground">Balance</span>
                    <div className="relative">
                      <span className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">£</span>
                      <Input
                        type="number"
                        min={0}
                        step={50}
                        value={debt.balance}
                        onChange={(e) => updateDebt(debt.id, "balance", Number(e.target.value) || 0)}
                        className="h-10 pl-6 text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-muted-foreground">APR</span>
                    <div className="relative">
                      <Input
                        type="number"
                        min={0}
                        step={0.1}
                        value={debt.apr}
                        onChange={(e) => updateDebt(debt.id, "apr", Number(e.target.value) || 0)}
                        className="h-10 pr-6 text-sm"
                      />
                      <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">%</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-muted-foreground">Min payment</span>
                    <div className="relative">
                      <span className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">£</span>
                      <Input
                        type="number"
                        min={0}
                        step={5}
                        value={debt.minPayment}
                        onChange={(e) => updateDebt(debt.id, "minPayment", Number(e.target.value) || 0)}
                        className="h-10 pl-6 text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addDebt}
              disabled={debts.length >= 8}
              className="flex items-center justify-center gap-1.5 rounded-lg border border-dashed border-border py-2.5 text-sm font-medium text-muted-foreground transition hover:text-foreground disabled:opacity-40"
            >
              <Plus className="size-4" aria-hidden="true" />
              Add debt
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="dp-extra">Extra you can put towards debt each month</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="dp-extra"
                type="number"
                min={0}
                step={10}
                value={extraMonthlyPayment}
                onChange={(e) => setExtraMonthlyPayment(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
            <p className="text-xs text-muted-foreground">On top of all minimum payments combined</p>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${debts.map((d) => `${d.id}-${d.balance}-${d.apr}-${d.minPayment}`).join("|")}-${extraMonthlyPayment}`}
        >
          <ResultStat
            label="Interest saved with avalanche vs snowball"
            value={formatCurrency(Math.max(result.interestSavedWithAvalanche, 0), 2)}
            emphasis
            positive
          />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Total debt today" value={formatCurrency(result.totalStartingBalance)} />
            <ResultStat label="Combined min payments" value={formatCurrency(result.totalMinPayments, 2)} />
          </div>
        </ResultCard>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Card className="p-5">
            <CardContent className="flex flex-col gap-2 p-0">
              <h3 className="text-sm font-semibold text-foreground">Snowball (smallest balance first)</h3>
              {result.snowball.reachedCap ? (
                <p className="text-xs text-muted-foreground">
                  Your payments do not cover the interest, so this debt would not clear. Increase your monthly payment.
                </p>
              ) : (
                <>
                  <p className="text-xs text-muted-foreground">Months to debt-free</p>
                  <p className="font-mono text-xl font-semibold text-foreground">{result.snowball.monthsToPayoff}</p>
                  <p className="mt-1 text-xs text-muted-foreground">Total interest paid</p>
                  <p className="font-mono text-sm font-medium text-foreground">
                    {formatCurrency(result.snowball.totalInterestPaid, 2)}
                  </p>
                </>
              )}
            </CardContent>
          </Card>
          <Card className="p-5">
            <CardContent className="flex flex-col gap-2 p-0">
              <h3 className="text-sm font-semibold text-foreground">Avalanche (highest APR first)</h3>
              {result.avalanche.reachedCap ? (
                <p className="text-xs text-muted-foreground">
                  Your payments do not cover the interest, so this debt would not clear. Increase your monthly payment.
                </p>
              ) : (
                <>
                  <p className="text-xs text-muted-foreground">Months to debt-free</p>
                  <p className="font-mono text-xl font-semibold text-foreground">{result.avalanche.monthsToPayoff}</p>
                  <p className="mt-1 text-xs text-muted-foreground">Total interest paid</p>
                  <p className="font-mono text-sm font-medium text-foreground">
                    {formatCurrency(result.avalanche.totalInterestPaid, 2)}
                  </p>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
