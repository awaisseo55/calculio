import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How accurate is the time to reach my goal?",
    answer:
      "It is a solid estimate based on the interest rate, contribution and target you enter, assuming you save consistently and the rate stays the same. Real savings rates can change, and missing a month or two will push your date back slightly, so treat the result as a helpful guide rather than a fixed promise.",
  },
  {
    question: "What if my goal never seems reachable?",
    answer:
      "If the calculator shows your goal is over 100 years away, it usually means your monthly contribution is too small relative to your target and rate. Try increasing your monthly amount, extending your timeframe, or breaking a large goal into smaller milestones.",
  },
  {
    question: "Should I use a savings account or a Stocks and Shares ISA?",
    answer:
      "It depends on your timeframe and comfort with risk. Cash savings are steady and protected, which suits shorter term goals. Stocks and Shares ISAs can grow faster over many years but can also fall in value, so they suit goals that are further away. This calculator does not know which type of account you are using, so pick a realistic interest rate for whichever you choose.",
  },
  {
    question: "Does this calculator include tax on my interest?",
    answer:
      "No. It shows the growth of your savings before tax. If your account is not an ISA and your total interest across all accounts goes above your Personal Savings Allowance, you may owe tax on the excess, which would slightly reduce your real world balance.",
  },
  {
    question: "Can I use this for a house deposit?",
    answer:
      "Yes, it is a common use for this calculator. Set your target to your deposit amount and see how long it takes at your current savings rate. Our mortgage deposit guide covers minimum deposit sizes and government schemes that can help you get there faster.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Most savings goals fail not because people cannot save, but because they
        never work out how long it will realistically take, then lose motivation
        when progress feels slow. This calculator flips the usual compound interest
        question around: instead of asking what a set monthly amount will grow into,
        it asks how long you need to keep saving to hit a specific target.
      </p>
      <p>
        Whether you are saving for a house deposit, a wedding, a car, or just an
        emergency fund, having a real date to aim for makes the whole process feel
        far more manageable than an open ended &ldquo;save more&rdquo; plan.
      </p>

      <h2>How to use the savings goal calculator</h2>
      <p>
        Enter your target amount, how much you already have saved, how much you can
        add each month, and the annual interest rate you expect to earn. The
        calculator works out exactly how many months it will take to reach your
        goal, and splits the final total between what you contributed yourself and
        what came from interest.
      </p>
      <p>
        It is worth running the numbers a few different ways before settling on a
        plan. Try a lower monthly contribution to see how much longer it takes, and
        a higher one to see how much sooner you could get there. Seeing the actual
        difference in months, rather than guessing, often makes it much easier to
        decide how much you can realistically commit to each month.
      </p>

      <h2>How the calculation works</h2>
      <p>
        Each month, your monthly contribution is added to your balance, then
        interest is calculated on the new, larger total. This repeats month after
        month until your balance reaches your target. Because interest is
        calculated on a growing balance, the last few months before you hit your
        goal usually contribute more interest than the first few, even though your
        monthly contribution has not changed.
      </p>

      <h2>Worked example</h2>
      <p>
        Say you want to save <strong>£10,000</strong>, you already have{" "}
        <strong>£1,000</strong> set aside, you can add <strong>£200 a month</strong>,
        and you expect an interest rate of <strong>4% a year</strong>.
      </p>
      <p>
        At that pace, the calculator shows you would reach your £10,000 target in
        around <strong>42 months</strong>, just under 3 years and 6 months. Over
        that time you would contribute about <strong>£8,400</strong> of your own
        money, with the rest coming from interest earned along the way. Without any
        interest at all, reaching £9,000 more from a £1,000 start at £200 a month
        would take exactly 45 months, so the interest in this example shaves a few
        months off the wait, on top of adding to your final balance.
      </p>
      <p>
        Try increasing the monthly contribution to £300 in the calculator above.
        You will see the time to reach the same £10,000 goal drops sharply, since a
        bigger monthly contribution has by far the biggest effect on how quickly you
        reach any savings target.
      </p>

      <h2>Cash savings versus a Stocks and Shares ISA</h2>
      <p>
        The interest rate you choose makes a real difference over a longer goal.
        Take a bigger target of <strong>£30,000</strong>, starting from{" "}
        <strong>£5,000</strong> with <strong>£300 a month</strong> going in. At a
        typical cash savings rate of <strong>2%</strong>, the calculator shows you
        reaching your goal in around <strong>76 months</strong>, just over 6 years.
        At a long term Stocks and Shares ISA growth rate of{" "}
        <strong>6%</strong>, the same goal is reached in around{" "}
        <strong>65 months</strong>, about 11 months sooner, while you actually
        contribute over £3,000 less of your own money.
      </p>
      <p>
        This does not mean a Stocks and Shares ISA is automatically the right
        choice. Investment returns are not guaranteed and can fall as well as rise,
        so a 6% figure is an assumption about long term average growth, not a
        promise. For a short term goal, like a holiday next year, cash is usually
        the safer option even though it grows more slowly, simply because you
        cannot afford for the balance to dip right before you need it.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        A frequent mistake is picking an interest rate that is too optimistic. Check
        the actual rate on your specific savings account rather than a headline rate
        you have seen advertised elsewhere, since introductory rates often drop
        after the first year, sometimes quite sharply, once the initial bonus period
        ends. It is also worth being realistic about your monthly contribution. A
        figure that looks fine on paper but is not sustainable once rent, bills and
        everyday spending are accounted for will only lead to missed months and a
        moving target date.
      </p>
      <p>
        Another mistake is treating the target amount itself as fixed when it often
        is not. If you are saving for a house deposit, for example, the amount you
        actually need depends on the property price you end up agreeing, which can
        shift during your search. It is worth revisiting your target every few
        months and adjusting the calculator inputs so your plan stays realistic
        rather than working towards a figure set many months ago.
      </p>
      <p>
        Finally, remember that this calculator assumes steady, uninterrupted saving.
        Life rarely works that way, so treat the result as a target to aim for, and
        revisit the calculator every few months to update it with your real
        progress.
      </p>

      <h2>Related calculators</h2>
      <p>
        For a broader view of how compounding works, try our{" "}
        <Link href="/calculators/compound-interest-calculator-uk">
          compound interest calculator
        </Link>
        . If your goal is a house deposit, our{" "}
        <Link href="/calculators/mortgage-calculator-uk">mortgage calculator</Link>{" "}
        and <Link href="/blog/mortgage-deposit-uk-2026">mortgage deposit guide</Link>{" "}
        cover minimum deposit sizes and schemes that can help. It is also worth
        checking your{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">take-home pay</Link>{" "}
        so your monthly contribution stays realistic alongside everything else you
        need to cover.
      </p>
    </div>
  );
}
