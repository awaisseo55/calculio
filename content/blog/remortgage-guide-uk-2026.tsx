import Link from "next/link";
import { CalloutBox } from "@/components/blog/callout-box";
import type { FaqItem } from "@/lib/types";
import type { TocItem } from "@/components/blog/table-of-contents";

export const toc: TocItem[] = [
  { id: "what-remortgaging-means", label: "What remortgaging means" },
  { id: "when-to-start", label: "When to start comparing" },
  { id: "fees-and-rates", label: "Fees, rates and true cost" },
  { id: "worked-example", label: "Worked example" },
  { id: "what-to-check", label: "What to check before switching" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "try-calculator", label: "Try the calculator" },
];

export const faq: FaqItem[] = [
  {
    question: "When should I start looking for a remortgage?",
    answer:
      "Many borrowers start around six months before their current deal ends, because some lenders allow offers to be secured in advance. The right timing depends on your current deal, early repayment charges and how long a new offer remains valid.",
  },
  {
    question: "Is remortgaging always cheaper?",
    answer:
      "No. A new deal can reduce monthly payments, but product fees, legal costs, valuation fees and early repayment charges can change the true saving.",
  },
  {
    question: "What happens if I do not remortgage?",
    answer:
      "Many borrowers move onto their lender's standard variable rate when a fixed or discounted deal ends. That rate can be higher than new fixed deals, but check your own lender's terms.",
  },
  {
    question: "Can I remortgage with bad credit?",
    answer:
      "It may be harder and the available rates may be higher, but options can still exist. A qualified mortgage broker can explain what lenders may consider.",
  },
  {
    question: "Should I add the product fee to the mortgage?",
    answer:
      "Adding the fee can reduce upfront cost, but it means paying interest on that fee over time. Compare both options if the lender allows it.",
  },
  {
    question: "Is this mortgage advice?",
    answer:
      "No. This guide is general information. Speak to a qualified mortgage adviser or lender before making a remortgage decision.",
  },
];

export function ArticleContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Remortgaging is one of those jobs homeowners often leave until the letter
        from the lender arrives. That can be expensive. When a fixed or discounted
        mortgage deal ends, many borrowers move onto a standard variable rate,
        which may be higher than a new deal. This guide explains how remortgaging
        works, when to start, how to compare rates and fees, and how to avoid
        focusing only on the headline rate.
      </p>

      <h2 id="what-remortgaging-means">What remortgaging means</h2>
      <p>
        Remortgaging means replacing your current mortgage deal with a new one,
        either with the same lender or a different lender. If you stay with the
        same lender, it is often called a product transfer. If you move lender,
        the new mortgage pays off the old one.
      </p>
      <p>
        People remortgage to avoid a higher standard variable rate, reduce monthly
        payments, fix a rate for certainty, borrow more, change the mortgage term
        or move to a different type of deal. MoneyHelper notes that remortgaging
        can cut costs, but also warns that borrowing more over a longer term can
        increase the total amount repaid.
      </p>
      <p>
        For a quick estimate, use our{" "}
        <Link href="/calculators/remortgage-comparison-calculator-uk">
          remortgage comparison calculator
        </Link>
        . It compares your current rate with a new deal, including product fees,
        exit costs, monthly saving and break-even point.
      </p>

      <h2 id="when-to-start">When to start comparing</h2>
      <p>
        A common approach is to start looking around six months before your deal
        ends. Some mortgage offers are valid for several months, which can let you
        secure a rate early and still switch when your current deal finishes. This
        can be useful if you are worried about moving onto a higher standard
        variable rate.
      </p>
      <p>
        Check your current mortgage documents before making decisions. The key
        items are your current balance, remaining term, current interest rate,
        deal end date, early repayment charge and exit fee. You can then compare
        the current deal with new options using the{" "}
        <Link href="/calculators/mortgage-calculator-uk">mortgage calculator</Link>{" "}
        and{" "}
        <Link href="/calculators/remortgage-comparison-calculator-uk">
          remortgage comparison calculator
        </Link>
        .
      </p>

      <h2 id="fees-and-rates">Fees, rates and true cost</h2>
      <p>
        The lowest interest rate is not automatically the cheapest mortgage. A
        deal with a £999 or £1,499 product fee may be cheaper for a large mortgage
        but poor value for a smaller mortgage. Some deals also include valuation
        fees, legal fees or cashback. If you leave your current deal early, an
        early repayment charge can wipe out the saving.
      </p>
      <p>
        Compare deals over the period you expect to keep them. For a 2-year fix,
        look at the cost over 2 years. For a 5-year fix, compare over 5 years. If
        you add a product fee to the mortgage, remember that the fee becomes part
        of the balance and can accrue interest.
      </p>

      <h2 id="worked-example">Worked example</h2>
      <p>
        Suppose you owe £220,000 with 25 years left. Your current standard
        variable rate is 6.5%. A new 2-year deal offers 4.8% with a £999 product
        fee and no exit fee. On a repayment basis, the current payment is about
        £1,486 a month. The new payment, with the fee added to the balance, is
        about £1,267 a month. That saves about £219 a month.
      </p>
      <p>
        Over 24 months, the gross monthly saving is about £5,256. The break-even
        point is roughly 4.6 months because the £999 fee is recovered through the
        monthly saving. In this example, the new deal looks cheaper over the 2-year
        comparison period. Change the balance, rate, fee or term and the answer
        can change quickly.
      </p>

      <CalloutBox
        title="Compare your remortgage options"
        description="Enter your balance, current rate, new rate and fees to estimate monthly savings and the break-even point."
        href="/calculators/remortgage-comparison-calculator-uk"
        cta="Compare remortgage deals"
      />

      <h2 id="what-to-check">What to check before switching</h2>
      <p>
        Check affordability as well as rate. A lender can reassess income,
        outgoings, credit file, property value and loan-to-value. If your property
        value has increased or your balance has fallen, you may have moved into a
        lower loan-to-value band, which can improve rates. If income has fallen or
        debts have risen, borrowing options may be more limited.
      </p>
      <p>
        Our{" "}
        <Link href="/calculators/mortgage-affordability-calculator-uk">
          mortgage affordability calculator
        </Link>{" "}
        helps estimate borrowing range, while the{" "}
        <Link href="/calculators/debt-to-income-calculator-uk">
          debt-to-income calculator
        </Link>{" "}
        shows how monthly payments compare with income. If you are deciding
        whether to reduce the balance before switching, try the{" "}
        <Link href="/calculators/mortgage-overpayment-calculator-uk">
          mortgage overpayment calculator
        </Link>
        .
      </p>

      <p>
        For broader context, read our{" "}
        <Link href="/blog/how-much-mortgage-can-i-afford-uk-2026">
          mortgage affordability guide
        </Link>{" "}
        and{" "}
        <Link href="/blog/mortgage-deposit-uk-2026">mortgage deposit guide</Link>
        . They cover income multiples, loan-to-value and the costs around buying
        or refinancing a home.
      </p>
    </div>
  );
}
