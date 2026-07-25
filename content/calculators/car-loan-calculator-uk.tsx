import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "What is the difference between HP and PCP?",
    answer:
      "With Hire Purchase (HP), you pay off the full value of the car in monthly instalments, and you own it outright once the final payment is made. With Personal Contract Purchase (PCP), your monthly payments are lower because a chunk of the car's value, the balloon or optional final payment, is left until the end. At that point you either pay the balloon to keep the car, hand it back, or use any equity as a deposit on a new deal.",
  },
  {
    question: "Should I choose HP, PCP, or a personal loan for a car?",
    answer:
      "HP and PCP are secured against the car itself, and PCP typically offers the lowest monthly payment because of the balloon payment structure, but you do not own the car until (and unless) you pay the balloon. A personal loan, by contrast, means you own the car outright from day one, since you are borrowing the money separately and buying the car with cash, though monthly payments are usually higher than an equivalent PCP deal for the same term.",
  },
  {
    question: "What happens if I go over my PCP mileage limit?",
    answer:
      "PCP and some HP agreements set an annual mileage limit as part of the deal. Go over it and you will usually pay an excess mileage charge when the agreement ends, calculated per mile over the limit. If you drive more than average, it is worth negotiating a higher mileage allowance upfront rather than paying penalty charges later.",
  },
  {
    question: "Is a balloon payment a good idea?",
    answer:
      "It depends on your priorities. A balloon payment lowers your monthly cost and keeps your options open at the end of the agreement, which suits people who like to change cars every few years. If your goal is to own the car outright as cheaply as possible over time, a standard loan or HP agreement with no balloon, paying off the full amount, usually costs less in total interest.",
  },
  {
    question: "Does my part-exchange value reduce the amount I need to finance?",
    answer:
      "Yes. Trading in your current car reduces the amount you need to borrow, in the same way a cash deposit does, which lowers both your monthly payment and the total interest you pay over the term. Get an independent valuation of your current car before agreeing a part-exchange figure with a dealer, since trade-in offers can vary noticeably between dealers.",
  },
  {
    question: "Why does a longer loan term lower my monthly payment but cost more overall?",
    answer:
      "Spreading the same amount borrowed over more months reduces each individual payment, but interest is charged for longer, so the total interest paid over the life of the loan is higher. It is worth comparing the total payable figure, not just the monthly payment, when choosing between different terms.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Car finance adverts almost always lead with a monthly payment figure,
        which makes it easy to compare deals on the wrong basis. This
        calculator works out your actual monthly payment for a personal loan,
        Hire Purchase (HP) agreement, or PCP-style deal with a balloon
        payment, plus the total interest and total amount you will pay over
        the whole term.
      </p>

      <h2>How to use the car loan calculator</h2>
      <p>
        Enter the car&apos;s price, any deposit you are putting down, the value of
        a part-exchange car if you have one, your loan term in years, and the
        APR you have been quoted. Leave the balloon payment at £0 for a
        standard loan or HP agreement, where you pay off the full amount and
        own the car at the end. Enter a balloon amount to model a PCP-style
        deal, where a lump sum remains due at the end if you choose to keep
        the car.
      </p>
      <p>
        The calculator shows your monthly payment, the total interest you
        will pay, and a year-by-year summary of how the balance reduces over
        time, so you can see exactly how a balloon payment changes the shape
        of the deal compared with a standard loan.
      </p>

      <h2>How the calculation works</h2>
      <p>
        The amount you actually need to finance is the car&apos;s price, minus
        your deposit, minus any part-exchange value. For a standard loan or
        HP deal with no balloon, the monthly payment uses the same annuity
        formula behind our{" "}
        <Link href="/calculators/loan-repayment-calculator-uk">
          loan repayment calculator
        </Link>
        , spreading the full amount evenly across the term so the balance
        reaches zero at the end.
      </p>
      <p>
        For a PCP-style deal with a balloon payment, the maths changes: the
        monthly payment only needs to cover the amount financed minus the
        present value of the balloon, since the balloon itself is paid
        separately as a lump sum at the end. This is why PCP monthly payments
        are usually noticeably lower than an equivalent HP deal for the same
        car and term, even though you have not paid off the full value of the
        car by the end.
      </p>

      <h2>Worked example</h2>
      <p>
        Take a car priced at <strong>£20,000</strong>, with a{" "}
        <strong>£2,000 deposit</strong> and no part-exchange, financed over{" "}
        <strong>4 years</strong> at <strong>8% APR</strong>.
      </p>
      <p>
        As a standard HP loan with no balloon, the calculator shows a monthly
        payment of around <strong>£439</strong>, with total interest of
        roughly <strong>£3,093</strong> over the four years, and you would
        own the car outright once the final payment is made.
      </p>
      <p>
        Now add a <strong>£6,000 balloon</strong> payment in the calculator
        above, modelling a PCP-style deal on the same car, deposit, term and
        APR. The monthly payment drops to around{" "}
        <strong>£333</strong>, noticeably lower, but a{" "}
        <strong>£6,000</strong> lump sum becomes due at the end if you want
        to keep the car, and total interest over the deal rises slightly to
        around <strong>£3,982</strong>, since you are borrowing a larger
        effective amount for longer.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        The biggest mistake is comparing deals purely on the monthly payment.
        A PCP deal will almost always look cheaper per month than an
        equivalent HP deal or personal loan, but that is because a chunk of
        the car&apos;s value has simply been deferred to the end, not because the
        deal itself is cheaper. Always compare the total amount payable,
        including any balloon payment, to see the full picture.
      </p>
      <p>
        It is also easy to underestimate running costs alongside the finance
        payment itself. A cheaper monthly finance payment does not help if
        fuel, insurance and{" "}
        <Link href="/calculators/road-tax-calculator-uk">road tax</Link> push
        your overall motoring budget beyond what you can comfortably afford.
        Use our{" "}
        <Link href="/calculators/fuel-cost-calculator-uk">
          fuel cost calculator
        </Link>{" "}
        alongside this one to see the fuller monthly cost of running a
        specific car, not just financing it.
      </p>
      <p>
        Finally, watch the APR closely rather than focusing only on the
        deposit or monthly figure a dealer highlights. A slightly lower APR
        can save a meaningful amount of interest over a multi-year term, and
        it is always worth getting a comparison quote from a bank or
        independent lender before signing a dealer finance agreement.
      </p>

      <h2>Related calculators</h2>
      <p>
        If you drive in London, our{" "}
        <Link href="/calculators/congestion-charge-ulez-calculator-uk">
          Congestion Charge and ULEZ calculator
        </Link>{" "}
        and{" "}
        <Link href="/blog/london-driving-charges-2026">
          London driving charges guide
        </Link>{" "}
        cover the daily costs that come on top of your finance payment. Check
        your car&apos;s real-world running costs with our{" "}
        <Link href="/calculators/mpg-calculator-uk">MPG calculator</Link> and{" "}
        <Link href="/calculators/fuel-cost-calculator-uk">
          fuel cost calculator
        </Link>
        , and see how your annual{" "}
        <Link href="/calculators/road-tax-calculator-uk">
          road tax (VED)
        </Link>{" "}
        bill compares by fuel type and CO2 emissions.
      </p>
    </div>
  );
}
