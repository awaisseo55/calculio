import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How is my monthly mortgage repayment calculated?",
    answer:
      "We use the standard capital repayment mortgage formula, which spreads your loan and the interest charged on it evenly across every monthly payment for the full term. Each month the split between interest and capital changes — early payments are mostly interest, later ones are mostly capital — but the total monthly amount stays the same for the length of any fixed or standard variable rate you enter.",
  },
  {
    question: "Does this calculator include fees, insurance or overpayments?",
    answer:
      "No. This calculator shows the core capital and interest repayment based on the loan amount, term and interest rate you enter. It doesn't add arrangement fees, valuation fees, buildings insurance or account for overpayments, early repayment charges, or rate changes after an initial fixed period ends. Your actual lender illustration (a Key Facts Illustration or Mortgage Illustration) will include these.",
  },
  {
    question: "What's a typical deposit for a UK mortgage?",
    answer:
      "Most mainstream lenders ask for a minimum deposit of 5–10% of the property price, though the best interest rates are usually reserved for borrowers with a 25–40% deposit (a loan-to-value of 60–75%). A bigger deposit generally means a lower interest rate, because the lender is taking on less risk.",
  },
  {
    question: "What happens if I overpay my mortgage?",
    answer:
      "Overpaying reduces your outstanding balance faster, which cuts the total interest you pay over the life of the loan and can shorten your term. Most UK lenders allow overpayments of up to 10% of the outstanding balance per year without an early repayment charge, though this varies by product — always check your mortgage offer.",
  },
  {
    question: "Should I choose a fixed or variable rate?",
    answer:
      "A fixed rate keeps your monthly repayment the same for an agreed period (commonly 2, 5 or 10 years), which makes budgeting easier and protects you if rates rise. A variable or tracker rate can go up or down with the market, so your repayments may be lower at times but are less predictable. This calculator can help you compare the monthly cost of different rates side by side.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h2>How to use the mortgage calculator</h2>
      <p>
        Enter the price of the property you&apos;re looking to buy, the deposit you have
        available (as either a cash amount or a percentage), the mortgage term in years,
        and the interest rate you&apos;ve been quoted or expect to be offered. The
        calculator instantly works out your loan amount, loan-to-value (LTV), monthly
        repayment, total interest over the term, and a year-by-year breakdown of how much
        of each payment goes towards interest versus paying down the capital you borrowed.
      </p>
      <p>
        This is designed for a standard capital repayment mortgage — the most common type
        in the UK, where you pay off both the interest and a portion of the loan itself
        every month, so the balance reaches zero at the end of the term. If you&apos;re
        comparing an interest-only mortgage, remember that your monthly payment will be
        lower, but none of it reduces the capital you owe — you&apos;ll need a separate
        repayment plan for the full loan amount at the end of the term.
      </p>

      <h2>The mortgage repayment formula</h2>
      <p>
        UK lenders calculate capital repayment mortgages using a standard annuity formula.
        In plain terms, your monthly payment (M) is worked out from the loan amount (P),
        the monthly interest rate (r, your annual rate divided by 12), and the number of
        monthly payments over the term (n):
      </p>
      <p>
        <strong>M = P × [r × (1 + r)ⁿ] ÷ [(1 + r)ⁿ − 1]</strong>
      </p>
      <p>
        This formula guarantees that if you pay exactly M every month for n months at a
        constant rate r, your balance will be reduced to precisely zero at the end of the
        term — with the interest portion shrinking and the capital portion growing every
        month as your outstanding balance falls.
      </p>

      <h2>Worked example</h2>
      <p>
        Say you&apos;re buying a home for <strong>£300,000</strong> with a{" "}
        <strong>15% deposit</strong> (£45,000), leaving a mortgage of{" "}
        <strong>£255,000</strong>. You&apos;re offered a 25-year term at a fixed{" "}
        <strong>4.5% interest rate</strong>.
      </p>
      <p>
        Plugging those numbers into the formula above gives a monthly repayment of
        roughly <strong>£1,417</strong>. Over 25 years (300 monthly payments) you&apos;d
        repay a total of around <strong>£425,000</strong>, of which about{" "}
        <strong>£170,000</strong> is interest and £255,000 is the capital you originally
        borrowed. In year one, the majority of each monthly payment is interest — around
        £950 of the £1,417 — but by year 20, most of each payment is chipping away at the
        capital instead.
      </p>
      <p>
        Try adjusting the deposit or the term in the calculator above: increasing your
        deposit to 25% (£75,000) on the same property drops the loan to £225,000 and cuts
        the monthly repayment to around £1,251, saving roughly £166,000 in interest over
        the life of the loan compared with a smaller deposit and shorter equity buffer.
      </p>

      <h2>What affects your mortgage rate</h2>
      <p>
        UK mortgage lenders price their rates based mainly on your loan-to-value (LTV) —
        the size of your mortgage relative to the property&apos;s value. A lower LTV
        (bigger deposit or more equity) typically unlocks cheaper rates because the
        lender&apos;s risk is lower if property prices fall. Your credit history,
        income, existing debts and the Bank of England base rate all play a part too.
        Fixed-rate deals are priced using swap rates (the cost of borrowing on financial
        markets for that fixed period), while tracker and variable rates move directly
        with the Bank of England base rate.
      </p>

      <h2>Things this calculator doesn&apos;t include</h2>
      <p>
        This tool gives you the core repayment figures so you can compare scenarios
        quickly, but a full mortgage offer will also include arrangement or product fees
        (often £0–£1,999, sometimes added to the loan itself), a valuation fee, legal
        (conveyancing) costs, and potentially an early repayment charge if you switch
        deals before a fixed or discounted period ends. It also assumes your interest
        rate stays constant for the whole term — in reality, most UK mortgages have an
        initial fixed or discounted period (commonly 2–5 years) after which you&apos;ll
        move onto the lender&apos;s standard variable rate unless you remortgage.
      </p>

      <h2>Related calculations to check next</h2>
      <p>
        Buying a home almost always means paying Stamp Duty Land Tax (or LBTT in
        Scotland, LTT in Wales) on top of your deposit and mortgage — use our{" "}
        <Link href="/calculators/stamp-duty-calculator-uk">stamp duty calculator</Link> to work
        out that cost before you make an offer. It&apos;s also worth checking your{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">take-home pay</Link> to make sure
        the monthly repayment comfortably fits your budget alongside your other outgoings.
      </p>
    </div>
  );
}
