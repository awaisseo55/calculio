export interface DebtInput {
  id: string;
  name: string;
  balance: number;
  apr: number;
  minPayment: number;
}

export type DebtPayoffStrategy = "snowball" | "avalanche";

export interface DebtPayoffOrderEntry {
  id: string;
  name: string;
  monthPaidOff: number;
}

export interface DebtPayoffSimulation {
  monthsToPayoff: number;
  totalInterestPaid: number;
  totalPaid: number;
  payoffOrder: DebtPayoffOrderEntry[];
  reachedCap: boolean;
}

const MAX_MONTHS = 600;

function simulate(debts: DebtInput[], extraMonthlyPayment: number, strategy: DebtPayoffStrategy): DebtPayoffSimulation {
  const balances = new Map(debts.map((d) => [d.id, Math.max(d.balance, 0)]));
  const closed = new Set<string>();
  const payoffOrder: DebtPayoffOrderEntry[] = [];

  let month = 0;
  let totalInterestPaid = 0;
  let totalPaid = 0;
  let freedMinimums = 0;
  let reachedCap = false;

  const totalMinPayments = debts.reduce((sum, d) => sum + Math.max(d.minPayment, 0), 0);
  const totalStartingBalance = debts.reduce((sum, d) => sum + Math.max(d.balance, 0), 0);

  // If minimum payments plus extra can't even cover interest, bail out early
  // rather than looping forever.
  const totalMonthlyInterestAtStart = debts.reduce(
    (sum, d) => sum + (Math.max(d.balance, 0) * Math.max(d.apr, 0)) / 100 / 12,
    0
  );
  const canMakeProgress =
    totalStartingBalance === 0 || totalMinPayments + extraMonthlyPayment > totalMonthlyInterestAtStart;

  while (closed.size < debts.length && month < MAX_MONTHS && canMakeProgress) {
    month += 1;

    // Accrue interest on open debts.
    for (const d of debts) {
      if (closed.has(d.id)) continue;
      const bal = balances.get(d.id) ?? 0;
      const interest = (bal * Math.max(d.apr, 0)) / 100 / 12;
      balances.set(d.id, bal + interest);
      totalInterestPaid += interest;
    }

    // Pay contractual minimums.
    for (const d of debts) {
      if (closed.has(d.id)) continue;
      const bal = balances.get(d.id) ?? 0;
      const pay = Math.min(Math.max(d.minPayment, 0), bal);
      balances.set(d.id, bal - pay);
      totalPaid += pay;
    }

    // Mark any debts closed by their minimum payment alone.
    for (const d of debts) {
      if (closed.has(d.id)) continue;
      if ((balances.get(d.id) ?? 0) <= 0.005) {
        closed.add(d.id);
        freedMinimums += Math.max(d.minPayment, 0);
        payoffOrder.push({ id: d.id, name: d.name, monthPaidOff: month });
      }
    }

    // Roll the extra payment plus any freed-up minimums into the target
    // debt(s) for this strategy: smallest balance first for snowball,
    // highest interest rate first for avalanche.
    let pool = extraMonthlyPayment + freedMinimums;
    const openDebts = debts
      .filter((d) => !closed.has(d.id))
      .sort((a, b) => {
        if (strategy === "snowball") {
          return (balances.get(a.id) ?? 0) - (balances.get(b.id) ?? 0);
        }
        return b.apr - a.apr;
      });

    for (const d of openDebts) {
      if (pool <= 0) break;
      const bal = balances.get(d.id) ?? 0;
      const pay = Math.min(pool, bal);
      balances.set(d.id, bal - pay);
      pool -= pay;
      totalPaid += pay;

      if ((balances.get(d.id) ?? 0) <= 0.005 && !closed.has(d.id)) {
        closed.add(d.id);
        freedMinimums += Math.max(d.minPayment, 0);
        payoffOrder.push({ id: d.id, name: d.name, monthPaidOff: month });
      }
    }
  }

  if (month >= MAX_MONTHS && closed.size < debts.length) {
    reachedCap = true;
  }

  return {
    monthsToPayoff: month,
    totalInterestPaid,
    totalPaid,
    payoffOrder,
    reachedCap: reachedCap || !canMakeProgress,
  };
}

export interface DebtPayoffResult {
  snowball: DebtPayoffSimulation;
  avalanche: DebtPayoffSimulation;
  totalStartingBalance: number;
  totalMinPayments: number;
  interestSavedWithAvalanche: number;
  monthsSavedWithAvalanche: number;
}

export function calculateDebtPayoff(debts: DebtInput[], extraMonthlyPayment: number): DebtPayoffResult {
  const validDebts = debts.filter((d) => d.balance > 0);
  const snowball = simulate(validDebts, Math.max(extraMonthlyPayment, 0), "snowball");
  const avalanche = simulate(validDebts, Math.max(extraMonthlyPayment, 0), "avalanche");

  return {
    snowball,
    avalanche,
    totalStartingBalance: validDebts.reduce((sum, d) => sum + d.balance, 0),
    totalMinPayments: validDebts.reduce((sum, d) => sum + Math.max(d.minPayment, 0), 0),
    interestSavedWithAvalanche: snowball.totalInterestPaid - avalanche.totalInterestPaid,
    monthsSavedWithAvalanche: snowball.monthsToPayoff - avalanche.monthsToPayoff,
  };
}
