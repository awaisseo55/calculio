import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "What is simple interest?",
    answer:
      "Simple interest is interest calculated only on the original amount you deposit or borrow, called the principal. Unlike compound interest, it does not add previous interest back into the balance to earn further interest, so it grows in a straight, predictable line rather than accelerating over time.",
  },
  {
    question: "What is the simple interest formula?",
    answer:
      "Simple interest is calculated as principal multiplied by the annual interest rate multiplied by the time in years, often written as I = P x r x t. Add the interest to the principal to get the total amount, so total = P + I.",
  },
  {
    question: "When is simple interest actually used?",
    answer:
      "Simple interest is common on some short-term loans, certain bonds and fixed-term arrangements where interest is paid out regularly rather than reinvested. Most everyday UK savings accounts and mortgages actually use compound interest, so it is worth checking which method applies to a specific product before assuming.",
  },
  {
    question: "Is simple interest better or worse than compound interest?",
    answer:
      "For a saver, compound interest is better over time, since your interest itself starts earning interest, leading to faster growth the longer you leave your money invested. For a borrower, simple interest usually works out cheaper than compound interest at the same headline rate, since interest does not build on top of previously accrued interest.",
  },
  {
    question: "Does this calculator work for months or days as well as years?",
    answer:
      "Yes, you can enter your time period in years, months or days, and the calculator converts it into years internally using 12 months or 365 days per year, so you can work out interest on shorter-term deposits or loans just as easily as multi-year ones.",
  },
  {
    question: "Can I use this calculator for a loan rather than savings?",
    answer:
      "Yes, the maths is the same either way: enter the amount borrowed as the principal, the annual interest rate and the term, and the calculator shows the total interest charge and the total amount that would need to be repaid, assuming the loan genuinely uses simple interest rather than compounding.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Simple interest is the most straightforward way interest can be
        calculated: a fixed percentage of the original amount, applied evenly
        over time, with no compounding. This calculator works out the
        interest earned or charged, the total amount at the end of the term,
        and a year-by-year breakdown, for any principal, rate and time
        period.
      </p>

      <h2>How to use the simple interest calculator</h2>
      <p>
        Enter the principal amount, the annual interest rate, and the time
        period, choosing whether to enter that period in years, months or
        days. The calculator instantly shows the total interest earned or
        payable and the total amount at the end of the term, along with a
        year-by-year breakdown so you can see how the interest builds up in
        a straight line rather than compounding.
      </p>

      <h2>How the calculation works</h2>
      <p>
        Simple interest uses the formula I = P &times; r &times; t, where P
        is the principal, r is the annual interest rate as a decimal, and t
        is the time in years. The total amount at the end of the term is
        simply the principal plus this interest. Because the interest is
        always calculated on the original principal rather than a growing
        balance, the interest earned each year stays exactly the same for as
        long as the rate does not change.
      </p>
      <p>
        This is the key difference from compound interest, where interest is
        added back into the balance and then itself earns interest in
        following periods, causing growth to accelerate over time. Simple
        interest grows at a constant, predictable rate instead, which makes
        it easier to forecast but generally means slower growth over long
        periods compared with compounding at the same headline rate.
      </p>

      <h2>Worked example</h2>
      <p>
        Say you have <strong>£5,000</strong> in an account paying{" "}
        <strong>4%</strong> simple interest a year, and you leave it for{" "}
        <strong>3 years</strong>. Using I = P &times; r &times; t, that is
        £5,000 &times; 0.04 &times; 3 = <strong>£600</strong> in interest,
        giving a total amount of <strong>£5,600</strong> at the end of the
        3 years. Notice that the interest earned is exactly £200 in each of
        the 3 years, since simple interest does not compound, unlike a
        compound interest account where the annual amount would grow
        slightly each year as previous interest starts earning interest of
        its own.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        A common mistake is assuming an interest rate quoted by a bank or
        lender is simple interest by default, when in fact most UK savings
        accounts, mortgages and many loans actually compound, usually daily,
        monthly or annually. Always check the specific product terms rather
        than assuming, since the difference becomes significant over longer
        periods or higher rates.
      </p>
      <p>
        Another mistake is mixing up the time period units, for example
        entering &ldquo;3&rdquo; intending 3 months but the calculator (or a
        manual calculation) treating it as 3 years. Double-check which unit
        you have selected, particularly for shorter-term deposits or loans
        where the difference between months and years has a large effect on
        the result.
      </p>
      <p>
        It is also worth remembering that simple interest calculations here
        do not account for tax. Interest earned outside a tax-free wrapper,
        such as an ISA, may be taxable depending on your total savings
        income and personal savings allowance for the year.
      </p>

      <h2>Related calculators</h2>
      <p>
        To see how the same principal grows with interest compounding over
        time instead, try our{" "}
        <Link href="/calculators/compound-interest-calculator-uk">
          compound interest calculator
        </Link>
        . If you are saving towards a specific target, our{" "}
        <Link href="/calculators/savings-goal-calculator-uk">
          savings goal calculator
        </Link>{" "}
        works out how much you would need to set aside each month, and our{" "}
        <Link href="/calculators/isa-calculator-uk">ISA calculator</Link>{" "}
        can help you plan tax-free saving. If you are looking at borrowing
        rather than saving, our{" "}
        <Link href="/calculators/loan-repayment-calculator-uk">
          loan repayment calculator
        </Link>{" "}
        covers standard compounding personal loans. For more on how
        compounding works over the long run, see our guide to{" "}
        <Link href="/blog/compound-interest-explained-uk">
          compound interest explained
        </Link>
        .
      </p>
    </div>
  );
}
