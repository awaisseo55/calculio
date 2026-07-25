import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How is my monthly loan repayment worked out?",
    answer:
      "We use the standard repayment formula lenders use for personal loans, which spreads your loan amount and the interest charged on it evenly across every monthly payment. The split between interest and capital changes each month, but your total payment stays the same for the whole term.",
  },
  {
    question: "Does this calculator include fees?",
    answer:
      "No. It shows the core interest and capital repayment based on the loan amount, rate and term you enter. It does not add arrangement fees or early repayment charges, which vary by lender, so check your loan agreement for the full cost.",
  },
  {
    question: "What is APR and why does it matter?",
    answer:
      "APR stands for Annual Percentage Rate, and it is the standard way UK lenders show the cost of borrowing, including most fees, as a single yearly percentage. Comparing APRs between lenders is usually a fairer comparison than comparing headline interest rates alone.",
  },
  {
    question: "Can I pay off a personal loan early?",
    answer:
      "Most UK personal loans allow early repayment, though some lenders charge up to 58 days of extra interest as an early settlement charge, set by consumer credit rules. Check your loan agreement or contact your lender to confirm your exact settlement figure before paying it off.",
  },
  {
    question: "Is a loan or a credit card cheaper for a big purchase?",
    answer:
      "It depends on the rates on offer, but personal loans usually have lower APRs than credit cards, especially for larger amounts, and force a fixed monthly repayment that clears the balance by a set date. Our credit card payoff calculator can help you compare the two directly.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Whether you are borrowing for a car, home improvements, or to consolidate
        other debts, the loan amount and interest rate only tell you part of the
        story. What actually matters day to day is your monthly repayment, and over
        the full term, how much interest you end up paying on top of what you
        borrowed.
      </p>
      <p>
        This calculator turns a loan offer into clear numbers you can compare
        against your budget, and shows exactly how your first year of payments
        breaks down between interest and paying off the amount you borrowed. It
        works for any fixed rate personal loan, whether you are comparing offers
        from your bank, a building society, or an online lender.
      </p>

      <h2>How to use the loan repayment calculator</h2>
      <p>
        Enter the amount you want to borrow, the annual interest rate you have been
        offered or expect, the term in years, and a start date. The calculator
        instantly shows your monthly repayment, total interest, total amount repaid,
        and your exact payoff date, along with a month by month breakdown for the
        first year.
      </p>

      <h2>How the repayment is calculated</h2>
      <p>
        UK personal loans typically use a standard amortising repayment structure,
        the same style used for mortgages. Every month you pay the same fixed
        amount, but the mix changes over time: early payments are mostly interest,
        since the balance is at its highest, while later payments are mostly
        capital, since less interest builds up on a shrinking balance. By the end of
        the term, the balance reaches exactly zero.
      </p>
      <p>
        This is different from an interest only arrangement, where you would pay
        just the interest each month and still owe the full amount at the end.
        Almost all personal loans in the UK are repayment loans rather than interest
        only, which is why your balance steadily falls to zero rather than staying
        the same throughout the term.
      </p>

      <h2>Worked example</h2>
      <p>
        Say you borrow <strong>£10,000</strong> at an APR of <strong>8%</strong>{" "}
        over <strong>5 years</strong>. Your monthly repayment works out at around{" "}
        <strong>£202.76</strong>. Over the full 5 years, or 60 monthly payments, you
        would repay a total of around <strong>£12,165</strong>, meaning{" "}
        <strong>£2,166</strong> of that is interest on top of your original £10,000.
      </p>
      <p>
        Now compare a shorter term. The same £10,000 loan over 3 years instead of 5
        pushes the monthly repayment up to around £313, but the total interest paid
        drops to roughly £1,281, about £885 less than the 5 year option. Spreading
        a loan over a longer term always reduces your monthly payment, but it always
        increases the total interest you pay, since the lender is charging interest
        for longer.
      </p>
      <p>
        Looking at the first 12 months of the 5 year loan specifically, roughly £739
        of your first year&apos;s payments go towards interest, with the remaining
        £1,694 or so reducing the capital balance. By the final year, that split
        flips almost entirely the other way, with barely any interest left to pay
        and most of each payment clearing the remaining capital. This is exactly the
        kind of detail the first 12 months schedule in the results shows you month
        by month.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        A common mistake is focusing only on the monthly repayment figure without
        checking the total cost of the loan. A longer term can make a big purchase
        feel more affordable month to month, but it often costs considerably more
        overall once all the extra interest is added up. It is worth comparing at
        least two or three term lengths before committing.
      </p>
      <p>
        Another mistake is not shopping around. Lenders price loans differently
        based on your credit history and the amount you want to borrow, and the
        APR you are offered can vary a fair amount between providers for what looks
        like the same loan on paper. Getting a few quotes, using soft search tools
        where available so your credit file is not affected, is usually worth the
        extra few minutes.
      </p>
      <p>
        It is also worth being careful about the difference between the interest
        rate you are quoted and the representative APR advertised by a lender. UK
        rules mean the representative APR only has to be offered to at least 51% of
        successful applicants, so depending on your credit history, the rate you are
        actually offered once you apply can be higher than the headline figure you
        first saw advertised. Always base your final decision on the exact rate in
        your loan offer, not the advertised representative example.
      </p>
      <p>
        Finally, watch out for payment protection insurance or other add ons offered
        alongside the loan. These can increase your monthly cost noticeably, and are
        entirely optional in almost all cases. Work out whether you actually need
        the cover on its own merits, rather than because it was bundled into the
        application process.
      </p>

      <h2>Related calculators</h2>
      <p>
        If you are weighing up a loan against a credit card, our{" "}
        <Link href="/calculators/credit-card-payoff-calculator-uk">
          credit card payoff calculator
        </Link>{" "}
        shows the same kind of breakdown for revolving credit. If the loan is for
        anything property related, our{" "}
        <Link href="/calculators/mortgage-calculator-uk">mortgage calculator</Link>{" "}
        uses the same repayment maths on a larger scale. Before taking on any new
        borrowing, it is worth checking your{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">take-home pay</Link>{" "}
        to make sure the repayment comfortably fits your monthly budget, and our{" "}
        <Link href="/blog/uk-income-tax-2026-27">income tax guide</Link> if you want
        the fuller picture of what you actually have available to spend each month.
      </p>
    </div>
  );
}
