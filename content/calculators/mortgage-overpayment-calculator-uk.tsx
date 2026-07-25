import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How much can I overpay my mortgage without a penalty?",
    answer:
      "Most UK lenders allow you to overpay up to 10% of your outstanding balance each calendar year without triggering an early repayment charge. This limit varies by lender and product, so check your mortgage offer or ask your lender directly before overpaying a large amount.",
  },
  {
    question: "Does overpaying reduce my monthly payment or shorten my term?",
    answer:
      "It depends on your lender and what you ask for. Many lenders keep your monthly payment the same by default and simply shorten your term, which is usually the better option for saving interest. Some let you choose to reduce your monthly payment instead while keeping the original term.",
  },
  {
    question: "Is overpaying my mortgage better than saving the money?",
    answer:
      "It depends on your mortgage rate compared with what you could earn in a savings account. If your mortgage rate is higher than your savings rate after tax, overpaying usually saves you more overall. If your savings rate is higher, or you value having accessible cash, saving might make more sense.",
  },
  {
    question: "What if I need the money back later?",
    answer:
      "Once you overpay, that money is usually locked into your property and is not easy to access again without remortgaging or selling. Some mortgages offer a linked offset feature that keeps the flexibility, but standard overpayments do not, so keep an emergency fund separate from any overpayment plan.",
  },
  {
    question: "Should I overpay or contribute to a pension instead?",
    answer:
      "Pension contributions usually come with tax relief and, often, employer matching, which can make them more valuable pound for pound than a mortgage overpayment, especially if your mortgage rate is relatively low. This is a personal decision that depends on your full financial picture, so consider speaking to a financial adviser if you are unsure.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        A mortgage is usually the biggest debt most people will ever have, and even
        small, regular overpayments can shave years off the term and save a
        substantial amount of interest. The tricky part is knowing exactly how much
        difference a given overpayment actually makes, since the effect is not
        always obvious from the numbers on your mortgage statement.
      </p>
      <p>
        This calculator compares your standard mortgage against the same mortgage
        with a monthly overpayment added, showing exactly how much time and
        interest you could save.
      </p>

      <h2>How to use the mortgage overpayment calculator</h2>
      <p>
        Enter your current mortgage balance, how many years remain on your term,
        your interest rate, and how much extra you plan to pay each month on top of
        your normal payment. The calculator shows your new payoff timeline, the
        interest saved, and your new monthly payment including the overpayment.
      </p>

      <h2>Why overpaying has such a big effect</h2>
      <p>
        Every pound you overpay comes straight off your capital balance, and
        because mortgage interest is calculated on that balance, a lower balance
        means less interest charged every single month for the rest of the loan.
        Overpaying early in a mortgage tends to have the biggest effect, since
        there is more time left for the reduced balance to keep saving you interest
        month after month.
      </p>
      <p>
        This is the same reason why a repayment mortgage is weighted heavily
        towards interest in the early years and towards capital later on. Any
        overpayment you make early effectively skips ahead through that curve,
        reducing the balance that all future interest is calculated on for the
        entire remaining term, not just for the month you made the extra payment.
      </p>

      <h2>Worked example</h2>
      <p>
        Take a mortgage with <strong>£200,000</strong> remaining,{" "}
        <strong>20 years</strong> left on the term, at an interest rate of{" "}
        <strong>4.5%</strong>. Without any overpayment, the standard monthly payment
        is around <strong>£1,265</strong>, and the total interest paid over the
        remaining term comes to roughly <strong>£103,672</strong>.
      </p>
      <p>
        Now add a <strong>£200 a month</strong> overpayment on top, taking the total
        monthly payment to around £1,465. The mortgage is now paid off in around{" "}
        <strong>16 years</strong> instead of 20, saving <strong>4 years</strong> off
        the term. Total interest paid drops to roughly{" "}
        <strong>£80,735</strong>, a saving of around{" "}
        <strong>£22,936</strong>, more than the total amount overpaid across those
        16 years.
      </p>
      <p>
        Doubling the overpayment to <strong>£400 a month</strong> on the same
        mortgage has an even bigger effect. The term drops to around{" "}
        <strong>13 years and 4 months</strong>, saving <strong>6 years and 8
        months</strong> compared with the standard term. Total interest falls to
        roughly <strong>£66,284</strong>, a saving of around{" "}
        <strong>£37,388</strong> against the standard £103,672. Doubling the
        overpayment more than doubled the time saved and the interest saved,
        because the reduced balance compounds its effect over an even longer
        stretch of the remaining term.
      </p>

      <h2>Reducing your term versus reducing your payment</h2>
      <p>
        When you overpay, most lenders default to keeping your monthly payment the
        same and shortening the term, exactly as shown in the examples above. Some
        lenders will instead let you keep the original term and reduce your monthly
        payment going forward. Shortening the term usually saves more interest
        overall, since the loan is repaid faster and interest is charged for less
        time in total. Reducing your monthly payment instead can still be useful if
        your priority is more breathing room in your monthly budget rather than
        paying off the mortgage sooner.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        The most common mistake is overpaying beyond your lender&apos;s annual allowance,
        typically 10% of the outstanding balance, and triggering an early repayment
        charge that can wipe out some or all of the interest you were trying to
        save. Always check your specific mortgage terms before committing to a
        regular overpayment plan, since allowances vary between lenders and even
        between different products from the same lender.
      </p>
      <p>
        Another mistake is overpaying while carrying higher interest debt elsewhere,
        such as a credit card. Since credit card APRs are almost always far higher
        than mortgage rates, clearing that debt first usually saves you more money
        than directing the same amount towards your mortgage. It is also worth
        keeping a reasonable emergency fund untouched, since overpaid mortgage money
        is not easy to access again if you need it unexpectedly.
      </p>
      <p>
        It is also easy to forget that your mortgage rate itself may not stay fixed
        for the whole remaining term. If you are on a fixed rate deal that ends
        before your mortgage is fully repaid, the figures here will need
        revisiting once you remortgage onto a new rate, since a higher or lower
        rate at that point changes how much interest an overpayment actually saves
        you from then on.
      </p>

      <h2>Related calculators</h2>
      <p>
        If you are still deciding on your original mortgage, our{" "}
        <Link href="/calculators/mortgage-calculator-uk">mortgage calculator</Link>{" "}
        covers monthly repayments and a full amortisation schedule. Before
        completing on a property, check our{" "}
        <Link href="/blog/how-much-stamp-duty-uk-2026">stamp duty guide</Link> and{" "}
        <Link href="/calculators/stamp-duty-calculator-uk">
          stamp duty calculator
        </Link>{" "}
        for the upfront costs involved. It is also worth checking your{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">take-home pay</Link>{" "}
        to make sure any overpayment plan is genuinely affordable alongside your
        other outgoings, not just on paper.
      </p>
    </div>
  );
}
