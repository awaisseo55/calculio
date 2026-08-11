import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How much should a student budget for rent?",
    answer:
      "This varies hugely by city and accommodation type, from university halls to shared private housing, so there is no single figure that applies everywhere. Check your specific accommodation costs and enter the actual figure, rather than a generic average, since rent is usually the single biggest expense in a student budget.",
  },
  {
    question: "Does my maintenance loan cover all my living costs?",
    answer:
      "For many students, no, particularly in more expensive cities, which is one reason many students take on part-time work or receive help from family. Running your actual numbers through this calculator is the best way to see whether your maintenance loan alone is enough, or whether you need another source of income.",
  },
  {
    question: "When is my maintenance loan paid?",
    answer:
      "Maintenance loans are usually paid in three instalments across the academic year, roughly at the start of each term, rather than as an even monthly amount. This calculator works in monthly averages for simplicity, but in practice you will need to budget across each term rather than assuming an identical amount lands every month.",
  },
  {
    question: "What if my budget shows a shortfall?",
    answer:
      "A shortfall means your planned income does not cover your planned expenses, so something needs to change, whether that is reducing discretionary spending like socialising, finding part-time work, checking if you are eligible for a bursary or hardship fund, or reviewing whether cheaper accommodation is realistic. Spotting a shortfall on paper before it happens is far easier to manage than discovering it partway through term.",
  },
  {
    question: "Should I budget for course-related costs separately?",
    answer:
      "It is worth listing them separately, since costs like textbooks, equipment, printing, field trips or placement travel can add up and are easy to forget when focusing mainly on rent and food. Some courses have significantly higher material costs than others, so check what is typical for your specific course.",
  },
  {
    question: "Is student finance means-tested on my parents' income?",
    answer:
      "For most undergraduates in England, the maintenance loan amount is partly means-tested on household income, which is why some students also budget for a parental contribution. Check your entitlement letter from Student Finance England, or the equivalent body for your nation, for your specific loan amount.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Starting university often means managing your own money for the
        first time, and it is easy to underestimate how quickly costs add
        up once rent, food, bills and everyday spending are all coming from
        the same limited pot. This calculator compares your monthly income,
        from your maintenance loan, family support, part-time work and any
        other source, against your monthly expenses, to show whether your
        budget balances before you commit to a tenancy or a term.
      </p>

      <h2>How to use the student budget calculator</h2>
      <p>
        Enter your monthly income from your maintenance loan or grant, any
        parental contribution, part-time job earnings and any other income.
        Then enter your monthly expenses across rent, food, bills, transport,
        socialising, course costs and anything else. The calculator adds
        both sides up and shows your monthly surplus or shortfall, plus a
        breakdown of where your money is going, so you can see at a glance
        which categories are taking up the biggest share of your budget.
      </p>

      <h2>How the calculation works</h2>
      <p>
        This calculator simply totals everything you enter under income, and
        separately totals everything you enter under expenses, then
        subtracts one from the other to show your monthly surplus or
        shortfall. It also multiplies this by 12 to give an indicative
        annual figure, useful for seeing how a small monthly gap adds up
        across a full year.
      </p>

      <h2>Worked example</h2>
      <p>
        A student with <strong>£650</strong> a month from their maintenance
        loan, <strong>£100</strong> from family, and{" "}
        <strong>£250</strong> from a part-time job has{" "}
        <strong>£1,000</strong> total monthly income. Against{" "}
        <strong>£550</strong> rent, <strong>£200</strong> food,{" "}
        <strong>£60</strong> bills, <strong>£50</strong> transport,{" "}
        <strong>£120</strong> socialising, <strong>£30</strong> course
        costs and <strong>£40</strong> other spending, total expenses come
        to <strong>£1,050</strong>. That leaves a shortfall of{" "}
        <strong>£50 a month</strong>, or around <strong>£600</strong> across
        the year, a gap worth spotting and addressing early rather than
        discovering through an overdraft partway through term.
      </p>

      <h2>Spreading a termly loan instalment across the weeks</h2>
      <p>
        Since maintenance loans typically arrive in three instalments a
        year rather than monthly, it helps to work out roughly what your
        instalment needs to cover per week or month before you start
        spending it. Dividing a termly instalment by the number of weeks it
        needs to last, rather than treating it as a lump sum to spend
        freely when it arrives, is one of the simplest ways to avoid running
        short before the next instalment lands. Some students find it useful
        to move most of an instalment into a separate savings account
        straight away, transferring out only what is needed for the coming
        week or month, to reduce the temptation to overspend early in the
        term.
      </p>

      <h2>Practical ways to close a shortfall</h2>
      <p>
        If your budget shows a shortfall, a few common options are worth
        considering. Part-time work during term time, within any limits your
        course or visa status may impose, is the most direct way to add
        income. Universities also often run hardship funds or bursaries for
        students facing financial difficulty, which are worth checking even
        if you are not sure you would qualify. On the expenses side,
        reviewing accommodation costs, cooking at home more often instead of
        takeaways or eating out, and using student discounts on transport,
        software and subscriptions can all meaningfully reduce monthly
        outgoings without a dramatic change in lifestyle.
      </p>

      <h2>Building good money habits at university</h2>
      <p>
        University is often the first time managing money independently,
        and the habits formed here can carry forward for years. Keeping a
        rough track of spending, even informally, makes it much easier to
        spot where money is actually going compared with where you assumed
        it was going. Many students find it useful to keep separate pots for
        fixed costs like rent and bills versus discretionary spending like
        socialising, so a big night out does not accidentally eat into money
        already earmarked for rent. It is also worth understanding your
        bank&apos;s overdraft terms clearly, since student accounts often
        offer an interest-free overdraft up to a limit, but charges can
        apply above that limit or once you graduate and the account
        converts to a standard one.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        A common mistake is forgetting that maintenance loans arrive in a
        few large termly instalments rather than evenly every month, which
        can make budgeting month to month feel very different from the
        average figures used here. Spreading a termly instalment out
        carefully, rather than spending heavily right after it lands, avoids
        running short later in the term.
      </p>
      <p>
        Another mistake is underestimating irregular costs, like textbooks,
        equipment, a laptop repair, or a one-off deposit, which do not fit
        neatly into a monthly average but still need to be planned for
        somewhere in the budget. Building a small buffer into your
        &ldquo;other&rdquo; category for costs like this is more realistic
        than assuming every month will be identical.
      </p>

      <h2>Related calculators</h2>
      <p>
        Once you graduate, our{" "}
        <Link href="/calculators/student-loan-repayment-calculator-uk">
          student loan repayment calculator
        </Link>{" "}
        shows how your loan repayments will work based on your future
        salary. If you share a house with other students, our{" "}
        <Link href="/calculators/split-bill-calculator-uk">
          split bill calculator
        </Link>{" "}
        helps divide shared costs like takeaways and bills fairly. If your
        budget shows a surplus, our{" "}
        <Link href="/calculators/savings-goal-calculator-uk">
          savings goal calculator
        </Link>{" "}
        can help you plan what to do with it, and our guide to{" "}
        <Link href="/blog/compound-interest-explained-uk">
          compound interest
        </Link>{" "}
        explains why even small amounts saved early can add up over time,
        a habit worth starting even on a student budget.
      </p>
    </div>
  );
}
