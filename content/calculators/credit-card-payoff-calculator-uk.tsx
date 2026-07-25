import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "Why does paying the minimum take so long?",
    answer:
      "Minimum payments are usually set as a small percentage of your balance, often 1 to 3%, so as your balance falls, your minimum payment falls too. This means you are always paying a shrinking amount towards a shrinking balance, which can drag repayment out for years and add a lot of interest along the way.",
  },
  {
    question: "What counts as a good APR for a credit card?",
    answer:
      "It varies a lot by card type and your credit history, but anything meaningfully below the typical high street average is worth considering, and a 0% balance transfer card, if you qualify, beats almost any standard purchase APR while the offer lasts.",
  },
  {
    question: "Should I use a 0% balance transfer card?",
    answer:
      "If you can qualify for one and clear the balance before the 0% period ends, it can save a significant amount of interest. Just check the balance transfer fee, usually a percentage of the amount moved, and set a plan to clear the balance before the standard APR kicks back in.",
  },
  {
    question: "What if I can only afford the minimum payment right now?",
    answer:
      "That is still better than missing a payment, which can damage your credit score and add extra charges. But it is worth revisiting your budget regularly to increase your payment as soon as you can, since even a modest increase noticeably speeds up payoff and cuts the total interest.",
  },
  {
    question: "Does this calculator account for new spending on the card?",
    answer:
      "No, it assumes you stop adding new spending and focus on clearing the existing balance. Continuing to spend on the card while trying to pay it off will extend the payoff time shown here, sometimes considerably.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Credit card debt can feel manageable when you only look at the minimum
        payment each month, but that small figure often hides how long it will
        really take to clear the balance, and how much extra you will pay in
        interest along the way. Credit card APRs are typically much higher than
        loans or mortgages, so the cost of taking your time can add up fast.
      </p>
      <p>
        Seeing the real numbers laid out, months rather than a vague sense of
        &ldquo;a while&rdquo;, and pounds of interest rather than an abstract
        percentage, tends to make the decision to pay more each month feel a lot
        more urgent.
      </p>
      <p>
        This calculator shows exactly how long it will take to pay off a balance at
        different payment levels, and how much of what you pay ends up as interest
        rather than clearing what you actually spent.
      </p>

      <h2>How to use the credit card payoff calculator</h2>
      <p>
        Enter your current balance and your card&apos;s APR. Then choose whether you
        want to pay a fixed amount each month, or use a minimum payment based on a
        percentage of your balance. The calculator shows how many months it will
        take to clear the balance, the total interest you will pay, and a
        comparison of what happens if you pay more each month.
      </p>

      <h2>Why minimum payments take so long</h2>
      <p>
        Minimum payments are usually calculated as a small percentage of your
        current balance, often somewhere between 1% and 3%, sometimes with a fixed
        minimum floor of around £25. Because the payment is based on your balance,
        it shrinks as your balance shrinks. This creates a slow moving target: your
        payment gets smaller just as it needs to be clearing debt faster, which is
        exactly why minimum payments alone can take many years to clear even a
        moderate balance.
      </p>
      <p>
        There is also a knock on effect on your credit score worth knowing about.
        Lenders look at your credit utilisation, how much of your available credit
        limit you are using, as one factor in assessing new applications. Carrying a
        high balance relative to your limit for a long time, which is what happens
        when you only pay the minimum, can make it harder to get approved for other
        credit in the meantime, on top of the interest cost itself.
      </p>

      <h2>How APR affects the total cost</h2>
      <p>
        Annual Percentage Rate, or APR, is the standard way UK card providers show
        the yearly cost of borrowing. A card advertised at 24.9% APR does not mean
        you are charged 24.9% once a year. Interest is calculated daily or monthly
        on your outstanding balance and compounds, which is part of why balances
        that are not actively paid down can grow surprisingly quickly. The APR
        figure lets you compare cards on a fair, like for like basis, since it
        already accounts for how often interest is applied.
      </p>

      <h2>Worked example</h2>
      <p>
        Take a balance of <strong>£3,000</strong> at a typical APR of{" "}
        <strong>24.9%</strong>. Paying a fixed <strong>£150 a month</strong>, the
        calculator shows you would clear the balance in around{" "}
        <strong>27 months</strong>, just over 2 years, paying roughly{" "}
        <strong>£916</strong> in interest along the way.
      </p>
      <p>
        Drop the payment to <strong>£100 a month</strong> instead, and the picture
        changes considerably. It now takes around <strong>48 months</strong>, 4
        years, to clear the same balance, and the total interest paid rises to
        roughly <strong>£1,744</strong>, almost double. Paying £50 a month less
        nearly doubles both the time it takes and the interest you pay, which shows
        just how much a relatively small change in monthly payment can affect the
        overall cost.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        The biggest mistake is only ever paying the minimum without a plan to
        increase it. Even a modest increase, an extra £20 or £30 a month, can shave
        months or even years off your payoff time and save a meaningful amount of
        interest, as the comparison table above shows. Another mistake is opening a
        new card to make a balance transfer without a clear plan to pay it off
        within the 0% window, since the rate typically jumps up sharply once the
        introductory period ends, sometimes higher than what you started with.
      </p>
      <p>
        It is also worth avoiding new spending on a card you are actively trying to
        pay off. Every new purchase adds to the balance the calculator is working
        against, effectively cancelling out some of your progress and extending how
        long the debt hangs around. If you have more than one card, it is often
        worth putting extra payments towards whichever has the highest APR first,
        while keeping the minimum going on the others. This approach, sometimes
        called the debt avalanche method, minimises the total interest you pay
        across everything you owe.
      </p>

      <h2>Related calculators</h2>
      <p>
        If you are weighing a credit card against a personal loan for a larger
        purchase, our{" "}
        <Link href="/calculators/loan-repayment-calculator-uk">
          loan repayment calculator
        </Link>{" "}
        uses the same style of breakdown. Once your card is under control, our{" "}
        <Link href="/calculators/compound-interest-calculator-uk">
          compound interest calculator
        </Link>{" "}
        shows how that same monthly payment could grow for you instead of against
        you. It is also worth checking your{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">take-home pay</Link>{" "}
        so you know exactly how much you can commit to clearing your balance each
        month.
      </p>
    </div>
  );
}
