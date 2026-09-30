import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "What does this remortgage calculator compare?",
    answer:
      "It compares staying on your current rate or standard variable rate with moving to a new mortgage deal. It estimates monthly payments, fees, savings over your chosen period and the break-even point.",
  },
  {
    question: "Should I include product fees?",
    answer:
      "Yes. A lower rate with a high fee is not always cheaper. Enter the product fee even if you plan to add it to the mortgage, because it still affects the true cost.",
  },
  {
    question: "What are exit fees?",
    answer:
      "Exit fees can include early repayment charges, admin fees, valuation fees, legal fees or broker fees. Check your current mortgage offer and the new deal documents before relying on any estimate.",
  },
  {
    question: "Does this show the best remortgage deal?",
    answer:
      "No. It compares the figures you enter. Mortgage rates change often and lenders assess affordability, loan-to-value and credit history separately.",
  },
  {
    question: "Can I remortgage before my fixed rate ends?",
    answer:
      "Often yes, but you may face an early repayment charge. Some borrowers line up a new deal before the old one ends, then switch when the charge no longer applies.",
  },
  {
    question: "Is this mortgage advice?",
    answer:
      "No. This is an estimate, not mortgage advice. Speak to a qualified mortgage broker or lender for advice on your own circumstances.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        A remortgage can save money, but the lowest rate is not always the cheapest deal once fees are included.
        This UK remortgage comparison calculator compares your current rate with a new deal, including product fees
        and exit costs. It shows the monthly difference, total saving over your chosen period and how long the new
        deal takes to break even.
      </p>

      <h2>How to use this remortgage calculator</h2>
      <p>
        Enter your mortgage balance, remaining term, current rate or standard variable rate, new deal rate,
        product fee, exit fees and the period you want to compare. If you do not know your remaining mortgage
        balance, check your latest lender statement. For a wider home budget, use our{" "}
        <Link href="/calculators/mortgage-calculator-uk">mortgage calculator</Link>
        ,{" "}
        <Link href="/calculators/mortgage-overpayment-calculator-uk">
          mortgage overpayment calculator
        </Link>{" "}
        and{" "}
        <Link href="/calculators/mortgage-affordability-calculator-uk">
          mortgage affordability calculator
        </Link>
        .
      </p>

      <h2>The formula explained in plain English</h2>
      <p>
        The calculator uses the standard repayment mortgage formula for both the current deal and the new deal. It
        spreads the balance across the remaining term, applies the annual interest rate as a monthly rate, then
        estimates the monthly payment. It adds the new product fee to the new borrowing for the comparison and adds
        exit fees to the total cost. The break-even point is total upfront fees divided by the monthly saving.
      </p>

      <h2>Worked example</h2>
      <p>
        Suppose your mortgage balance is £220,000 with 25 years left. Your current rate is 6.5%, and a new deal is
        4.8% with a £999 product fee and no exit fee. The current payment is about £1,486 a month. The new payment,
        with the fee added to the balance, is about £1,267 a month. That is a monthly saving of about £219. Over 2
        years, the saving after the fee is roughly £5,256, and the break-even point is about 4.6 months.
      </p>

      <h2>Common mistakes people make</h2>
      <p>
        The first mistake is comparing rates but ignoring fees. A slightly higher rate can be cheaper if the fee is
        much lower. The second mistake is forgetting early repayment charges. The third is comparing over the full
        mortgage term when the deal only lasts 2 or 5 years. For more context, read our{" "}
        <Link href="/blog/mortgage-deposit-uk-2026">mortgage deposit guide</Link>{" "}
        and{" "}
        <Link href="/blog/how-much-mortgage-can-i-afford-uk-2026">
          mortgage affordability guide
        </Link>
        .
      </p>

      <h2>Related calculators</h2>
      <p>
        Use the{" "}
        <Link href="/calculators/mortgage-calculator-uk">mortgage calculator</Link>{" "}
        for a simple repayment estimate, the{" "}
        <Link href="/calculators/mortgage-overpayment-calculator-uk">
          mortgage overpayment calculator
        </Link>{" "}
        to test paying extra, the{" "}
        <Link href="/calculators/mortgage-affordability-calculator-uk">
          mortgage affordability calculator
        </Link>{" "}
        for borrowing range estimates, and the{" "}
        <Link href="/calculators/stamp-duty-calculator-uk">stamp duty calculator</Link>{" "}
        if you are moving rather than staying put.
      </p>
    </div>
  );
}
