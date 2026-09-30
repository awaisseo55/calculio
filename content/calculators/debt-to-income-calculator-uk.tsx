import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "What is a debt-to-income ratio?",
    answer:
      "A debt-to-income ratio compares your monthly debt payments with your gross monthly income. It is often used as a quick affordability signal, but lenders also look at credit history, expenses and the type of borrowing.",
  },
  {
    question: "Should rent or mortgage be included?",
    answer:
      "This calculator includes rent or mortgage so you can see your full monthly pressure. Some lenders look separately at housing costs and non-housing debts, which is why the calculator shows both.",
  },
  {
    question: "Do I use minimum credit card payments or the full balance?",
    answer:
      "For the monthly ratio, enter the monthly payment you must make, not the full balance. If you want a debt-clearing plan, use a debt payoff calculator as well.",
  },
  {
    question: "What is a good debt-to-income ratio?",
    answer:
      "There is no single UK legal threshold. Lower is generally easier to manage, while a high ratio can make new borrowing harder and leave less room for shocks.",
  },
  {
    question: "Is this the same as a credit score?",
    answer:
      "No. Your debt-to-income ratio is based on income and monthly payments. A credit score is based on credit file data, and does not directly know your full income unless a lender collects it.",
  },
  {
    question: "Is this financial advice?",
    answer:
      "No. It is a general affordability estimate. If debts feel unmanageable, speak to a free debt advice charity or a qualified professional.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Debt-to-income, often shortened to DTI, is a quick way to see how much of your monthly income is already
        spoken for by debt and housing payments. This UK debt-to-income calculator adds up rent or mortgage,
        credit cards, loans, car finance and other payments, then compares them with gross monthly income.
      </p>

      <h2>How to use this debt-to-income calculator</h2>
      <p>
        Enter your gross annual income before tax, then add your regular monthly debt payments. Use minimum credit
        card payments if you are checking your monthly affordability. If you want to see how long a balance may
        take to clear, use our{" "}
        <Link href="/calculators/debt-payoff-calculator-uk">debt payoff calculator</Link>{" "}
        or{" "}
        <Link href="/calculators/credit-card-payoff-calculator-uk">
          credit card payoff calculator
        </Link>
        . If the ratio is linked to housing, compare it with the{" "}
        <Link href="/calculators/rent-affordability-calculator-uk">rent affordability calculator</Link>{" "}
        or{" "}
        <Link href="/calculators/mortgage-affordability-calculator-uk">
          mortgage affordability calculator
        </Link>
        .
      </p>

      <h2>The formula explained in plain English</h2>
      <p>
        Debt-to-income equals monthly debt payments divided by gross monthly income, multiplied by 100. If you earn
        £45,000 a year, your gross monthly income is £3,750. If your rent, cards, loans and car finance total
        £1,470 a month, your DTI is 39.2%. The calculator also shows your housing ratio and non-housing debt ratio
        so you can see what is driving the number.
      </p>

      <h2>Worked example</h2>
      <p>
        A person earning £45,000 has £3,750 gross monthly income. Their rent is £950, credit card payments are
        £120, a personal loan is £180 and car finance is £220. Total monthly payments are £1,470. Divide £1,470 by
        £3,750 and multiply by 100, giving a debt-to-income ratio of 39.2%. That sits in the moderate band used by
        this calculator.
      </p>

      <h2>Common mistakes people make</h2>
      <p>
        One mistake is using take-home pay in a formula designed around gross income. Take-home pay is useful for
        budgeting, but DTI is usually described against gross income. Another mistake is excluding buy-now-pay-later
        or car finance because it feels smaller than a loan. If it is a regular required payment, include it. Our{" "}
        <Link href="/blog/compound-interest-explained-uk">compound interest explained guide</Link>{" "}
        shows why debt costs can grow quickly, and our{" "}
        <Link href="/blog/how-much-mortgage-can-i-afford-uk-2026">
          mortgage affordability guide
        </Link>{" "}
        explains why lenders do not use one ratio alone.
      </p>

      <h2>Related calculators</h2>
      <p>
        Try the{" "}
        <Link href="/calculators/debt-payoff-calculator-uk">debt payoff calculator</Link>{" "}
        to plan repayments, the{" "}
        <Link href="/calculators/credit-card-payoff-calculator-uk">
          credit card payoff calculator
        </Link>{" "}
        for card balances, the{" "}
        <Link href="/calculators/rent-affordability-calculator-uk">rent affordability calculator</Link>{" "}
        for renting, and the{" "}
        <Link href="/calculators/mortgage-affordability-calculator-uk">
          mortgage affordability calculator
        </Link>{" "}
        for buying.
      </p>
    </div>
  );
}
