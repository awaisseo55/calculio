import Link from "next/link";
import { CalloutBox } from "@/components/blog/callout-box";
import type { FaqItem } from "@/lib/types";
import type { TocItem } from "@/components/blog/table-of-contents";

export const toc: TocItem[] = [
  { id: "which-plan", label: "Which plan am I on" },
  { id: "thresholds-rates", label: "Thresholds and repayment rates" },
  { id: "worked-example", label: "A worked example" },
  { id: "interest", label: "How interest works" },
  { id: "written-off", label: "When your loan is written off" },
  { id: "overpaying", label: "Should you overpay" },
  { id: "mortgage", label: "Does it affect a mortgage application" },
  { id: "common-mistakes", label: "Common mistakes to avoid" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "try-calculator", label: "Calculate your repayment" },
];

export const faq: FaqItem[] = [
  {
    question: "How much will I repay on my student loan each month?",
    answer:
      "You repay 9% of whatever you earn above your plan's threshold, or 6% for a standalone Postgraduate Loan, taken automatically through PAYE. On a £35,000 salary under Plan 2, for example, that works out at roughly £48.98 a month. Below your threshold, you repay nothing at all that month.",
  },
  {
    question: "Which student loan plan am I on?",
    answer:
      "It depends mainly on where you studied and when your course started. English and Welsh undergraduates who started before September 2012 are usually Plan 1, those from 2012 to 2023 are usually Plan 2, and those from September 2023 onwards are usually Plan 5. Scottish students are typically Plan 4. A separate Postgraduate Loan applies on top if you took out one for a master's or doctoral course.",
  },
  {
    question: "Do I pay interest on my student loan?",
    answer:
      "Yes, interest accrues on your outstanding balance from the day you first borrow, right through your working life until the loan is repaid or written off. The rate is linked to RPI inflation and, for some plans, your income, and it is set and updated by the Student Loans Company, so check gov.uk or your online account for the current rate rather than relying on a figure that may be out of date.",
  },
  {
    question: "What happens if I haven't repaid it all when it's written off?",
    answer:
      "Nothing happens to you personally. Any remaining balance, however large, is simply cancelled and disappears from your record once your plan's write-off period ends, generally somewhere between 25 and 40 years after you first became due to repay, depending on your plan. It does not appear on your credit file and does not need to be repaid by your estate or family.",
  },
  {
    question: "Should I make voluntary overpayments to clear my student loan faster?",
    answer:
      "For many graduates on Plan 2 or Plan 5, no, because a large share of the original balance is realistically never going to be repaid before it is written off, so extra payments can simply be money you never see again. It can make more sense for Plan 1 borrowers close to clearing their balance anyway, or for higher earners who are confident they will repay the loan in full regardless. Run your own numbers before deciding.",
  },
  {
    question: "Does having a student loan affect a mortgage application?",
    answer:
      "Lenders do not treat a student loan as debt in the way they treat a credit card or car loan, and it has no impact on your credit score. However, your monthly student loan deduction reduces your take-home pay, and most lenders factor this into their affordability assessment, which can slightly reduce how much they are willing to lend you.",
  },
];

export function ArticleContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Most UK graduates have no real idea how much of their salary
        disappears into student loan repayments each month, or when, if
        ever, the loan will actually be repaid in full. That is partly
        because a student loan behaves less like a normal debt and more
        like an extra rate of income tax, it is based entirely on how much
        you earn, not on a fixed schedule designed to clear the balance.
        Our{" "}
        <Link href="/calculators/student-loan-repayment-calculator-uk">
          student loan repayment calculator
        </Link>{" "}
        works out your exact monthly and annual figure across every plan in
        seconds, and this guide explains the rules behind those numbers.
      </p>

      <h2 id="which-plan">Which plan am I on</h2>
      <p>
        Your repayment plan depends mainly on where you studied and when
        your course started, not on how much you borrowed or what you
        studied. <strong>Plan 1</strong> generally applies to English and
        Welsh undergraduates who started their course before September
        2012, and to most Northern Irish undergraduates regardless of start
        date. <strong>Plan 2</strong> covers English and Welsh
        undergraduates who started between September 2012 and August 2023.{" "}
        <strong>Plan 5</strong> is the newest, covering English
        undergraduates who started from September 2023 onwards, replacing
        Plan 2 for new starters. <strong>Plan 4</strong> applies to Scottish
        students, regardless of when they started. If you took out a
        separate loan for a master&apos;s or doctoral course, that is repaid
        under the <strong>Postgraduate Loan</strong> rules, on top of
        whichever undergraduate plan also applies to you.
      </p>
      <p>
        If you are not sure which plan applies to you, the most reliable
        way to check is your online account with the Student Loans
        Company, since it confirms your exact plan type and current
        balance rather than leaving you to work it out from general rules
        of thumb. This matters because each plan has a different threshold
        and, in Plan 2&apos;s case, a different interest structure, so
        getting it wrong can throw off any repayment planning you do.
      </p>

      <h2 id="thresholds-rates">Thresholds and repayment rates</h2>
      <p>
        Every plan works the same basic way: you repay a fixed percentage
        of your income above an annual threshold, and nothing at all below
        it. The threshold and rate just differ by plan.
      </p>
      <div className="not-prose my-6 overflow-x-auto rounded-xl border border-border">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/40 text-left">
              <th className="px-4 py-3 font-semibold text-foreground">Plan</th>
              <th className="px-4 py-3 font-semibold text-foreground">Annual threshold</th>
              <th className="px-4 py-3 font-semibold text-foreground">Repayment rate</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3">Plan 1</td>
              <td className="px-4 py-3 font-mono">£26,065</td>
              <td className="px-4 py-3 font-mono">9%</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Plan 2</td>
              <td className="px-4 py-3 font-mono">£28,470</td>
              <td className="px-4 py-3 font-mono">9%</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Plan 4 (Scotland)</td>
              <td className="px-4 py-3 font-mono">£32,745</td>
              <td className="px-4 py-3 font-mono">9%</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Plan 5</td>
              <td className="px-4 py-3 font-mono">£25,000</td>
              <td className="px-4 py-3 font-mono">9%</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Postgraduate Loan</td>
              <td className="px-4 py-3 font-mono">£21,000</td>
              <td className="px-4 py-3 font-mono">6%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        If you have both an undergraduate loan and a Postgraduate Loan,
        you repay both at the same time, deducted separately against each
        threshold. Thresholds are usually reviewed each tax year, so always
        check GOV.UK if you are reading this some time after publication,
        rather than assuming these figures are still current. Our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>{" "}
        includes student loan deductions alongside Income Tax and National
        Insurance, so you can see your full net pay in one place.
      </p>

      <h2 id="worked-example">A worked example</h2>
      <p>
        Say a graduate earns <strong>£35,000</strong> a year. Here is what
        they would repay annually and monthly under each plan, assuming
        they only had that one loan.
      </p>
      <div className="not-prose my-6 overflow-x-auto rounded-xl border border-border">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/40 text-left">
              <th className="px-4 py-3 font-semibold text-foreground">Plan</th>
              <th className="px-4 py-3 font-semibold text-foreground">Income above threshold</th>
              <th className="px-4 py-3 font-semibold text-foreground">Annual repayment</th>
              <th className="px-4 py-3 font-semibold text-foreground">Monthly repayment</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3">Plan 1</td>
              <td className="px-4 py-3 font-mono">£8,935</td>
              <td className="px-4 py-3 font-mono">£804.15</td>
              <td className="px-4 py-3 font-mono">£67.01</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Plan 2</td>
              <td className="px-4 py-3 font-mono">£6,530</td>
              <td className="px-4 py-3 font-mono">£587.70</td>
              <td className="px-4 py-3 font-mono">£48.98</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Plan 4</td>
              <td className="px-4 py-3 font-mono">£2,255</td>
              <td className="px-4 py-3 font-mono">£202.95</td>
              <td className="px-4 py-3 font-mono">£16.91</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Plan 5</td>
              <td className="px-4 py-3 font-mono">£10,000</td>
              <td className="px-4 py-3 font-mono">£900.00</td>
              <td className="px-4 py-3 font-mono">£75.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Notice how the same £35,000 salary produces a noticeably different
        monthly deduction depending on the plan, purely because of the
        different thresholds. This is a common source of confusion for
        graduates comparing notes with friends who studied at a different
        time or in a different nation, since two people on identical
        salaries can have genuinely different take-home pay because of
        their plan alone. Try our{" "}
        <Link href="/calculators/student-loan-repayment-calculator-uk">
          student loan repayment calculator
        </Link>{" "}
        with your own salary and plan for an exact figure, including a
        side-by-side comparison across all plans.
      </p>

      <CalloutBox
        title="Work out your student loan repayment"
        description="Enter your salary and plan for an instant monthly and annual repayment figure, compared across every plan."
        href="/calculators/student-loan-repayment-calculator-uk"
        cta="Calculate my repayment"
      />

      <h2 id="interest">How interest works</h2>
      <p>
        Interest starts accruing on your student loan from the day you
        first borrow, including while you are still studying, and it
        continues for as long as any balance remains outstanding. The
        exact rate depends on your plan and, for some plans, your income
        while you are repaying, and it is linked to the Retail Prices
        Index measure of inflation rather than being a fixed percentage
        set once and left alone. Because it moves with RPI and, on some
        plans, your earnings, the current rate can change more than once
        a year, so check your online account with the Student Loans
        Company or GOV.UK for the figure that applies to you right now
        rather than relying on a number that may already be out of date.
      </p>
      <p>
        The practical effect is that your outstanding balance can keep
        growing even while you are making repayments every month, if the
        interest added is larger than the amount you are repaying. This is
        completely normal and by design for many graduates, particularly
        early in their career on a lower salary, and it does not mean
        something has gone wrong. It is one reason the loan is written off
        after a set number of years regardless of the remaining balance,
        covered next.
      </p>

      <h2 id="written-off">When your loan is written off</h2>
      <p>
        Every student loan plan has a fixed write-off period, generally
        counted from the April you first became due to start repaying, not
        from when you took the loan out. Plan 1 loans are typically written
        off after 25 years, Plan 2 and Plan 4 after 30 years, and Plan 5
        after 40 years, while a standalone Postgraduate Loan is usually
        written off in line with whichever undergraduate plan it sits
        alongside. These periods are set by government policy and can
        change, so treat them as a general guide and confirm your own
        write-off date through your Student Loans Company account.
      </p>
      <p>
        Whatever remains outstanding at that point, even if it is the full
        original amount plus years of accumulated interest, is simply
        cancelled. Nothing is owed by you, your estate, or anyone else
        after that date, and a student loan is also written off
        automatically if the borrower dies or becomes permanently unable
        to work due to disability. For a huge number of graduates on Plan
        2 or Plan 5, particularly those who never earn a very high salary,
        the loan is written off with a substantial balance still
        outstanding, which is worth bearing in mind before assuming you
        need to clear it entirely.
      </p>

      <h2 id="overpaying">Should you overpay your student loan</h2>
      <p>
        This depends heavily on your plan, your income trajectory, and
        what else you would do with the money instead. If projections
        suggest you are likely to be written off with a large balance
        remaining, for example a Plan 2 graduate on a modest salary for
        most of their career, voluntary overpayments are effectively
        money you would otherwise never have had to repay at all. In that
        situation, many financial advisers would suggest directing spare
        cash towards a pension or a stocks and shares ISA instead, where it
        can benefit from long-term growth. Our{" "}
        <Link href="/blog/compound-interest-explained-uk">
          compound interest guide
        </Link>{" "}
        explains why starting early with savings or investments can matter
        more than the rate you earn.
      </p>
      <p>
        On the other hand, if you are a high earner, especially on Plan 1
        where the write-off period is shorter, or you expect a large
        windfall like an inheritance, overpaying can make sense, since you
        are likely to clear the balance in full eventually regardless, and
        paying it off sooner reduces the total interest charged over time.
        There is no single right answer here, it depends entirely on your
        own numbers, so it is worth modelling your likely lifetime earnings
        before committing to voluntary extra payments that cannot usually
        be refunded once made.
      </p>

      <h2 id="mortgage">Does a student loan affect a mortgage application</h2>
      <p>
        A student loan is not treated as a debt in the way a credit card,
        personal loan or car finance agreement is, and it does not appear
        on your credit file or affect your credit score. Mortgage lenders
        will not decline you simply for having one. However, your monthly
        student loan repayment does reduce your net take-home pay, and
        most mortgage lenders include this deduction when working out how
        much you can realistically afford to borrow, alongside your other
        regular outgoings. Our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>{" "}
        shows your net income after student loan deductions, which gives
        a more realistic starting point than your gross salary when
        thinking about affordability.
      </p>
      <p>
        If you are planning ahead for a mortgage application, our{" "}
        <Link href="/blog/uk-income-tax-2026-27">
          UK Income Tax 2026/27 guide
        </Link>{" "}
        explains how your wider pay is taxed, and our{" "}
        <Link href="/calculators/student-budget-calculator-uk">
          student budget calculator
        </Link>{" "}
        can help younger graduates still finding their feet see exactly
        where their money goes each month.
      </p>

      <h2 id="common-mistakes">Common mistakes to avoid</h2>
      <p>
        One frequent mistake is treating a student loan like a normal debt
        to be cleared as fast as possible, without first checking whether
        it is realistically going to be written off before you would ever
        repay it in full. For many graduates, overpaying simply hands over
        money that would otherwise have been cancelled at no cost to them.
      </p>
      <p>
        Another common error is not checking your plan type after moving
        between the UK nations, for example a Scottish graduate who later
        works in England, or assuming your plan changed when you changed
        job, when in fact your plan is fixed by where and when you started
        your course, not where you currently live or work.
      </p>
      <p>
        Finally, some graduates panic about the size of their outstanding
        balance shown online, without realising that the balance itself
        rarely matters for day-to-day budgeting, what matters is your
        monthly repayment amount, based on your income, and whether you
        are likely to clear the balance before it is written off. Our{" "}
        <Link href="/calculators/student-loan-repayment-calculator-uk">
          student loan repayment calculator
        </Link>{" "}
        focuses on exactly that monthly figure, so you can budget with a
        realistic number rather than being alarmed by the total balance
        alone.
      </p>

      <h2 id="faq">Frequently asked questions</h2>
    </div>
  );
}
