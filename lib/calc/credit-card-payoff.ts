export type PaymentMode = "fixed" | "minimum";

export interface CreditCardPayoffInput {
  balance: number;
  apr: number;
  mode: PaymentMode;
  monthlyPayment?: number;
  minimumPercent?: number;
}

export interface CreditCardPayoffMonth {
  month: number;
  payment: number;
  interest: number;
  principal: number;
  balance: number;
}

export interface CreditCardPayoffResult {
  monthsToPayOff: number;
  totalInterest: number;
  totalPaid: number;
  schedule: CreditCardPayoffMonth[];
  payoffReached: boolean;
  firstMonthPayment: number;
}

const MAX_MONTHS = 600;
const MINIMUM_PAYMENT_FLOOR = 25;

export function calculateCreditCardPayoff(
  input: CreditCardPayoffInput
): CreditCardPayoffResult {
  const monthlyRate = input.apr / 100 / 12;
  let balance = input.balance;
  const schedule: CreditCardPayoffMonth[] = [];
  let totalInterest = 0;
  let totalPaid = 0;
  let month = 0;
  let firstMonthPayment = 0;

  while (balance > 0 && month < MAX_MONTHS) {
    const interest = balance * monthlyRate;

    let payment: number;
    if (input.mode === "fixed") {
      payment = input.monthlyPayment ?? 0;
    } else {
      const minimumPercent = input.minimumPercent ?? 2.5;
      payment = Math.max(balance * (minimumPercent / 100), MINIMUM_PAYMENT_FLOOR);
    }
    payment = Math.min(payment, balance + interest);

    const principal = payment - interest;
    if (principal <= 0) {
      // The payment does not cover the interest charged, so the balance would
      // never reduce. Stop the simulation rather than looping forever.
      break;
    }

    month++;
    if (month === 1) firstMonthPayment = payment;
    balance = Math.max(balance - principal, 0);
    totalInterest += interest;
    totalPaid += payment;

    if (month <= 60) {
      schedule.push({ month, payment, interest, principal, balance });
    }
  }

  return {
    monthsToPayOff: month,
    totalInterest,
    totalPaid,
    schedule,
    payoffReached: balance <= 0,
    firstMonthPayment,
  };
}

export interface PaymentComparisonRow {
  monthlyPayment: number;
  monthsToPayOff: number;
  totalInterest: number;
}

export function comparePaymentLevels(
  balance: number,
  apr: number,
  paymentLevels: number[]
): PaymentComparisonRow[] {
  return paymentLevels.map((monthlyPayment) => {
    const result = calculateCreditCardPayoff({
      balance,
      apr,
      mode: "fixed",
      monthlyPayment,
    });
    return {
      monthlyPayment,
      monthsToPayOff: result.monthsToPayOff,
      totalInterest: result.totalInterest,
    };
  });
}
