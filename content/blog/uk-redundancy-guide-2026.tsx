import Link from "next/link";
import { CalloutBox } from "@/components/blog/callout-box";
import type { FaqItem } from "@/lib/types";
import type { TocItem } from "@/components/blog/table-of-contents";

export const toc: TocItem[] = [
  { id: "what-is-redundancy", label: "What is redundancy, legally" },
  { id: "statutory-pay", label: "Statutory redundancy pay explained" },
  { id: "notice-periods", label: "Notice periods and notice pay" },
  { id: "tax", label: "Tax on redundancy pay" },
  { id: "enhanced-packages", label: "Enhanced redundancy packages" },
  { id: "your-rights", label: "Your rights during the process" },
  { id: "financial-planning", label: "Financial planning after redundancy" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "try-calculator", label: "Calculate your redundancy pay" },
];

export const faq: FaqItem[] = [
  {
    question: "How many years of service do I need for statutory redundancy pay?",
    answer:
      "You generally need at least 2 complete years of continuous service with your employer to qualify for statutory redundancy pay. Continuous service is usually broken by a genuine gap in employment, though certain absences, such as maternity leave or sick leave, do not usually break continuity.",
  },
  {
    question: "How much redundancy pay will I get in 2026?",
    answer:
      "Statutory redundancy pay is based on your age, capped years of service and capped weekly pay, using half a week's pay for years under 22, one week's pay for years 22 to 40, and one and a half week's pay for years 41 and over. Our redundancy pay calculator works through the exact figures for your circumstances.",
  },
  {
    question: "How much notice am I entitled to during redundancy?",
    answer:
      "The statutory minimum is one week's notice for each complete year of service, up to a maximum of 12 weeks, though your contract may specify a longer notice period, in which case the longer period applies. Your employer can choose to pay you in lieu of notice instead of you working it, depending on your contract.",
  },
  {
    question: "Is redundancy pay tax-free?",
    answer:
      "The first £30,000 of redundancy pay, combining statutory and any enhanced or ex-gratia element, is tax-free. Anything above £30,000 is added to your income and taxed at your marginal rate through PAYE, usually in the pay period you receive it.",
  },
  {
    question: "Can my employer make me redundant without consultation?",
    answer:
      "No, employers are legally required to consult employees before confirming redundancies, with the length and formality of consultation depending on how many roles are affected. Skipping proper consultation can make a redundancy legally unfair, so if you feel this has not happened, ACAS is a good starting point for free, impartial guidance.",
  },
  {
    question: "Should I sign a settlement agreement without advice?",
    answer:
      "It is strongly advisable not to, since a settlement agreement is a legally binding document that usually requires you to waive certain employment rights, most commonly the right to bring an unfair dismissal claim, in exchange for an agreed payment. Independent legal advice, often arranged and paid for by the employer as part of the process, is a standard and sensible step before signing anything.",
  },
];

export function ArticleContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Redundancy affects a significant number of UK workers every year,
        and the process brings together several different entitlements at
        once: statutory redundancy pay, notice pay, and sometimes an
        enhanced package on top. Getting a clear estimate of what you are
        owed early on makes it much easier to plan your next steps. Our{" "}
        <Link href="/calculators/redundancy-pay-calculator-uk">
          redundancy pay calculator
        </Link>{" "}
        works through the statutory formula in seconds, and this guide
        covers everything else around it.
      </p>

      <h2 id="what-is-redundancy">What is redundancy, legally</h2>
      <p>
        Redundancy is a specific, legally defined form of dismissal that
        happens when a job genuinely stops being needed, whether because a
        business is closing, a particular workplace is closing, or the need
        for employees to carry out a particular kind of work has reduced or
        ended. It is not simply a way for an employer to remove an
        individual they want to let go while calling it redundancy, and
        doing so can amount to unfair dismissal if the underlying reason is
        not a genuine reduction in need for the role.
      </p>
      <p>
        ACAS, the UK&apos;s independent workplace relations body, provides
        free guidance for both employees and employers on what counts as a
        fair redundancy process, including how selection should work when
        several people are at risk and only some roles are being cut. If
        you believe your redundancy is not genuine, or that the selection
        process was unfair, ACAS early conciliation is usually the first
        formal step before any employment tribunal claim.
      </p>

      <h2 id="statutory-pay">Statutory redundancy pay explained</h2>
      <p>
        Statutory redundancy pay is calculated using your age, your years of
        continuous service, capped at 20 years, and your weekly pay, capped
        at a maximum figure reviewed every April. The multiplier applied to
        each year of service depends on how old you were during that
        specific year of employment, not your age now:
      </p>
      <div className="not-prose my-6 overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[420px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/40 text-left">
              <th className="px-4 py-3 font-semibold text-foreground">Age during that year of service</th>
              <th className="px-4 py-3 font-semibold text-foreground">Weeks&apos; pay per year</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border/60">
              <td className="px-4 py-3 text-muted-foreground">Under 22</td>
              <td className="px-4 py-3 font-mono text-foreground">0.5</td>
            </tr>
            <tr className="border-b border-border/60">
              <td className="px-4 py-3 text-muted-foreground">22 to 40</td>
              <td className="px-4 py-3 font-mono text-foreground">1.0</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-muted-foreground">41 and over</td>
              <td className="px-4 py-3 font-mono text-foreground">1.5</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Take someone made redundant at age 45 with 10 complete years of
        service and a weekly pay of £600, below the statutory cap. The 5
        most recent years, worked at ages 45 down to 41, fall in the 1.5
        band, contributing 7.5 weeks&apos; pay. The next 5 years, worked at
        ages 40 down to 36, fall in the 1.0 band, contributing 5 weeks&apos;
        pay. That is 12.5 weeks&apos; pay in total, so 12.5 &times; £600 ={" "}
        <strong>£7,500</strong> in statutory redundancy pay. Our{" "}
        <Link href="/calculators/redundancy-pay-calculator-uk">
          redundancy pay calculator
        </Link>{" "}
        runs this same calculation for your own age, service and pay
        automatically.
      </p>

      <h2 id="notice-periods">Notice periods and notice pay</h2>
      <p>
        Separately from redundancy pay, you are also entitled to notice, or
        pay in lieu of it. The statutory minimum is one week&apos;s notice
        for each complete year of service, up to a maximum of 12 weeks for
        12 or more years of service. If your contract specifies a longer
        notice period than the statutory minimum, the longer contractual
        period applies instead.
      </p>
      <p>
        Some employers ask you to work your notice as normal, others place
        you on garden leave, where you remain employed and paid but are not
        required to attend work, and others pay you in lieu of notice,
        ending your employment immediately with a lump sum covering the
        notice period instead. Which approach applies depends on your
        contract and your employer&apos;s process, and it is worth checking
        which one applies to you early on, since it affects when your
        final pay date and any related benefits actually end. Our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>{" "}
        can show you what your notice pay looks like after tax, whether you
        work it or receive it as a lump sum.
      </p>

      <CalloutBox
        title="Work out your redundancy pay"
        description="Enter your age, years of service and weekly pay for an instant statutory redundancy pay estimate, plus an enhanced package comparison."
        href="/calculators/redundancy-pay-calculator-uk"
        cta="Calculate my redundancy pay"
      />

      <h2 id="tax">Tax on redundancy pay</h2>
      <p>
        The first £30,000 of redundancy pay is tax-free, covering statutory
        redundancy pay and any enhanced or ex-gratia payment combined,
        though not payments for unused holiday or in lieu of notice, which
        are usually taxed as normal income. Anything above £30,000 is added
        to your income for that tax year and taxed at your marginal rate
        through PAYE, typically in the pay period you actually receive it,
        which can sometimes push you temporarily into a higher tax band for
        that single pay period even if your annual income is otherwise
        lower.
      </p>
      <p>
        Timing can matter here: if a large redundancy payment straddles the
        end of one tax year and the start of another, or lands in a year
        where your income is otherwise unusually low, the overall tax
        impact can differ. Our{" "}
        <Link href="/blog/uk-income-tax-2026-27">
          UK Income Tax 2026/27 guide
        </Link>{" "}
        explains how the bands work if you want to understand how a large
        one-off payment interacts with your normal income, and our{" "}
        <Link href="/calculators/income-tax-calculator-uk">
          Income Tax calculator
        </Link>{" "}
        can show the tax due on any specific income figure, including the
        taxable slice of a redundancy payment above £30,000.
      </p>

      <h2 id="enhanced-packages">Enhanced redundancy packages</h2>
      <p>
        Some employers offer an enhanced or contractual redundancy package
        on top of, or instead of, the statutory minimum, often using your
        actual uncapped weekly pay and a more generous number of
        weeks&apos; pay per year of service than the statutory formula
        allows. Enhanced packages are common in larger organisations,
        particularly where a settlement agreement is being offered in
        exchange for you agreeing not to bring certain employment claims.
      </p>
      <p>
        There is no fixed industry standard for what counts as generous,
        since it depends heavily on the employer, the sector, and the
        specific circumstances of the redundancy round. If you are offered
        an enhanced package, it is worth checking how it compares to the
        statutory minimum using our{" "}
        <Link href="/calculators/redundancy-pay-calculator-uk">
          redundancy pay calculator
        </Link>
        , and whether there is any room to discuss the terms before
        agreeing, particularly if a settlement agreement is involved.
      </p>

      <h2 id="your-rights">Your rights during the redundancy process</h2>
      <p>
        Employers must consult employees before confirming redundancies,
        with the required length and formality of consultation depending on
        how many roles are affected across the organisation. You also have
        the right to be considered for suitable alternative employment
        within the organisation where one exists, and a right to a trial
        period in an alternative role without automatically losing your
        redundancy entitlement if it turns out not to be suitable.
      </p>
      <p>
        If you believe your selection for redundancy was unfair, for
        example based on a protected characteristic or unrelated to the
        genuine business reason given, you may have grounds for an unfair
        dismissal or discrimination claim, and ACAS early conciliation is
        usually a required first step before any employment tribunal claim.
        Settlement agreements, if offered, should always be reviewed with
        independent legal advice before signing, since they are legally
        binding.
      </p>

      <h2 id="financial-planning">Financial planning after redundancy</h2>
      <p>
        Once you know roughly what you are owed, it is worth setting aside
        time to plan your finances for the gap until your next role, or for
        a longer transition if you are considering a career change. Our{" "}
        <Link href="/calculators/savings-goal-calculator-uk">
          savings goal calculator
        </Link>{" "}
        can help you work out how a lump sum redundancy payment stretches
        against your monthly outgoings if your income drops for a period,
        and our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>{" "}
        is worth revisiting once you have a new salary, or a different
        salary, to plan around.
      </p>
      <p>
        If you do not find work quickly, you may be entitled to
        new-style Jobseeker&apos;s Allowance or Universal Credit, depending
        on your National Insurance record and household circumstances, so
        it is worth checking your entitlement on GOV.UK rather than
        assuming you do not qualify. If you are over 55, you may also have
        access to your private pension, though drawing it early is a
        significant decision worth thinking through carefully rather than
        as an automatic first option. If self-employment or freelancing is
        on your mind as a next step, our{" "}
        <Link href="/blog/self-employed-tax-guide-uk-2026">
          self-employed tax guide
        </Link>{" "}
        is a useful starting point.
      </p>

      <h2 id="faq">Frequently asked questions</h2>
    </div>
  );
}
