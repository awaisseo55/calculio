import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How much can I borrow for a mortgage in the UK?",
    answer:
      "Most mainstream lenders will lend up to around 4 to 4.5 times your annual income, or your combined income if you are applying jointly, though some lenders offer higher multiples to certain higher earners or professionals. That headline figure is then reduced by a full affordability check on your outgoings, existing debts and everyday spending, so your actual maximum could be lower than the income-multiple figure alone suggests.",
  },
  {
    question: "Does joint income increase how much I can borrow?",
    answer:
      "Yes. Lenders generally apply the income multiple to your combined household income when you apply with a partner or friend, which is why joint applications often unlock a noticeably higher maximum loan than either applicant could get alone. Both incomes and both applicants' credit histories and existing debts are taken into account.",
  },
  {
    question: "Why do existing debts reduce how much I can borrow?",
    answer:
      "Every pound you already commit to a car loan, personal loan, credit card or buy-now-pay-later payment each month is a pound less available to put towards a mortgage. Lenders factor this into their affordability assessment, so someone with £300 a month in existing commitments will typically be offered a smaller mortgage than someone on the same income with no debts at all.",
  },
  {
    question: "What is a mortgage stress test?",
    answer:
      "Lenders check you could still afford your repayments if interest rates rose after you took out the mortgage, not just at today's rate. This calculator shows your estimated repayment at both your chosen rate and a stressed rate a little higher, so you can see the buffer built into a typical affordability assessment.",
  },
  {
    question: "Is this the exact amount a lender will offer me?",
    answer:
      "No, this is a planning estimate to help you set a realistic budget before you start house hunting or speak to a broker. Every lender applies its own criteria, and a full mortgage application also considers your credit score, employment type, deposit source and detailed spending, so the figure a lender actually offers may be higher or lower than this estimate.",
  },
  {
    question: "Should I speak to a mortgage broker before making an offer?",
    answer:
      "It is a sensible step for most buyers. A whole-of-market mortgage broker or independent financial adviser can compare deals across many lenders, flag anything in your circumstances that might affect affordability, and get you a more precise agreement in principle before you commit to a property purchase.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Before you start viewing properties, it helps to have a realistic idea
        of how much you could actually borrow. This calculator estimates your
        maximum mortgage and property price based on your income, any joint
        applicant&apos;s income, your existing debt commitments and your
        deposit, using the income-multiple approach most UK lenders start
        from.
      </p>

      <h2>How to use the mortgage affordability calculator</h2>
      <p>
        Enter your annual income, and your partner&apos;s or co-applicant&apos;s
        income if you are buying together. Add up any existing monthly debt
        commitments, such as car finance, personal loans, credit card
        payments or buy-now-pay-later instalments, and enter your available
        deposit. The calculator applies a typical income multiple, currently
        set to 4.5x, which you can adjust, along with an interest rate and
        mortgage term, to estimate your maximum loan, maximum property price
        and monthly repayment.
      </p>

      <h2>How the calculation works</h2>
      <p>
        Lenders typically cap standard mortgage borrowing at around 4 to 4.5
        times annual income, though this varies by lender and can be higher
        for some higher earners. This calculator starts from that
        income-multiple cap, then reduces it to reflect your existing monthly
        debt commitments, since every pound committed elsewhere is a pound a
        lender assumes is unavailable for a mortgage payment. Your deposit is
        then added to the resulting maximum loan to give an estimated maximum
        property price.
      </p>
      <p>
        The calculator also applies a stress test, showing what your
        repayment would look like at a rate slightly higher than the one you
        entered. Real lenders do this too, to check you could still afford
        your mortgage if interest rates rose after completion, so the
        stress-tested figure gives you a sense of the safety margin built
        into a typical affordability assessment.
      </p>

      <h2>Worked example</h2>
      <p>
        Take a couple with a combined annual income of <strong>£70,000</strong>{" "}
        (£38,000 and £32,000), £150 a month in existing commitments, and a{" "}
        <strong>£30,000</strong> deposit, using the default 4.5x income
        multiple. Their income-multiple cap is £70,000 &times; 4.5 ={" "}
        <strong>£315,000</strong>. Their £150 monthly commitment reduces this
        by roughly £8,100, giving an estimated maximum loan of{" "}
        <strong>£306,900</strong>, and an estimated maximum property price of{" "}
        <strong>£336,900</strong> once their deposit is added.
      </p>
      <p>
        At a 4.5% interest rate over a 25-year term, that loan works out at
        roughly <strong>£1,706 a month</strong>. Stress-tested at 5.5%, the
        same loan would cost closer to <strong>£1,885 a month</strong>, which
        is the kind of buffer a lender wants to see you could absorb. Try
        adjusting the income, deposit and existing commitments in the
        calculator above to see how your own numbers change the outcome.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        A common mistake is treating the income-multiple figure as a
        guaranteed offer rather than a starting estimate. Lenders run a full
        affordability assessment covering your regular spending, dependants,
        credit history and employment type, so two applicants on the same
        income and with the same deposit can still be offered noticeably
        different amounts.
      </p>
      <p>
        Another mistake is forgetting to account for all existing debt when
        budgeting, particularly car finance and buy-now-pay-later balances,
        which are easy to overlook but are treated seriously by lenders. It
        is also worth remembering that the maximum you can borrow is not
        necessarily the maximum you should borrow: building in some
        headroom for a change in circumstances, or a period of higher
        interest rates, makes for a more comfortable budget than stretching
        to the absolute limit.
      </p>
      <p>
        Finally, remember that buying a home involves costs beyond the
        mortgage itself, including{" "}
        <Link href="/calculators/stamp-duty-calculator-uk">stamp duty</Link>,
        legal fees, survey costs and moving expenses, all of which need to
        come from your own funds alongside the deposit rather than from the
        mortgage.
      </p>

      <h2>Getting ready to buy</h2>
      <p>
        Once you have a realistic budget in mind, our{" "}
        <Link href="/calculators/mortgage-calculator-uk">
          mortgage calculator
        </Link>{" "}
        can work out the exact monthly repayment, total interest and full
        amortisation schedule for a specific property price and deposit.
        It is also worth checking your{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay
        </Link>{" "}
        to see what proportion of your net income a mortgage repayment would
        represent, and using our{" "}
        <Link href="/calculators/savings-goal-calculator-uk">
          savings goal calculator
        </Link>{" "}
        if you are still building up your deposit. Our guide to{" "}
        <Link href="/blog/first-home-cost-uk-2026">
          first home buying costs
        </Link>{" "}
        and our{" "}
        <Link href="/blog/mortgage-deposit-uk-2026">
          mortgage deposit guide
        </Link>{" "}
        cover the wider costs and deposit options first-time buyers should
        plan for beyond the headline mortgage figure.
      </p>

      <h2>Related calculators</h2>
      <p>
        If you are carrying existing debt that could affect your
        affordability, our{" "}
        <Link href="/calculators/credit-card-payoff-calculator-uk">
          credit card payoff calculator
        </Link>{" "}
        can help you plan a route to clearing it before you apply. This
        calculator is a planning tool only: for a precise agreement in
        principle, speak to a mortgage broker or lender directly.
      </p>
    </div>
  );
}
