import Link from "next/link";
import { CalloutBox } from "@/components/blog/callout-box";
import type { FaqItem } from "@/lib/types";
import type { TocItem } from "@/components/blog/table-of-contents";

export const toc: TocItem[] = [
  { id: "smp-basics", label: "Statutory Maternity Pay basics" },
  { id: "after-week-39", label: "What happens after week 39" },
  { id: "enhanced-pay", label: "Enhanced maternity pay from employers" },
  { id: "maternity-allowance", label: "Maternity Allowance" },
  { id: "tax-and-ni", label: "Tax and National Insurance" },
  { id: "planning-financially", label: "Planning financially for leave" },
  { id: "returning-to-work", label: "Returning to work" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "try-calculator", label: "Calculate your maternity pay" },
];

export const faq: FaqItem[] = [
  {
    question: "What is the current rate of Statutory Maternity Pay?",
    answer:
      "For 2026/27, SMP pays 90% of your average weekly earnings for the first 6 weeks, with no cap. For the remaining 33 weeks, it drops to the lower of £187.18 a week or 90% of your average weekly earnings, giving a maximum of 39 paid weeks in total.",
  },
  {
    question: "How many weeks of maternity leave and pay am I entitled to?",
    answer:
      "You can take up to 52 weeks of maternity leave regardless of how long you have worked for your employer. Statutory Maternity Pay only covers 39 of those weeks, leaving the final 13 weeks unpaid unless your employer's own scheme covers them.",
  },
  {
    question: "Do I qualify for Statutory Maternity Pay if I've recently changed jobs?",
    answer:
      "You generally need at least 26 weeks of continuous employment with the same employer by the qualifying week, the 15th week before your baby is due, plus average earnings of at least £125 a week. If you have recently started a new job and do not meet this, Maternity Allowance may be available instead.",
  },
  {
    question: "Can self-employed women get maternity pay?",
    answer:
      "Self-employed women cannot claim Statutory Maternity Pay, since it is paid through an employer, but many qualify for Maternity Allowance instead, paid directly by the Department for Work and Pensions at a similar weekly rate for up to 39 weeks, based on your Class 2 National Insurance contributions.",
  },
  {
    question: "Is maternity pay taxed like normal salary?",
    answer:
      "Yes, both SMP and any enhanced maternity pay are treated as normal earnings, so Income Tax and National Insurance are deducted through PAYE as usual. Because your income is often lower than normal during maternity leave, some or all of it may fall within your tax-free Personal Allowance, depending on your total income for the year.",
  },
  {
    question: "What is the difference between statutory and enhanced maternity pay?",
    answer:
      "Statutory Maternity Pay is the legal minimum every eligible employee must receive. Enhanced maternity pay is anything extra offered voluntarily by an employer, commonly full salary for a number of weeks before dropping to the statutory rate, and varies significantly between employers, so it is always worth checking your own contract.",
  },
];

export function ArticleContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Hundreds of thousands of women take maternity leave in the UK each
        year, and one of the most common sources of stress during
        pregnancy is simply not knowing how much money will actually come
        in while you are off work. Our{" "}
        <Link href="/calculators/maternity-pay-calculator-uk">
          maternity pay calculator
        </Link>{" "}
        works out your week-by-week and month-by-month figures based on
        your own salary and your employer&apos;s policy, and this guide explains
        exactly how those numbers are calculated, from the statutory
        minimum through to enhanced employer schemes and Maternity
        Allowance for the self-employed.
      </p>

      <h2 id="smp-basics">Statutory Maternity Pay basics</h2>
      <p>
        Statutory Maternity Pay, usually shortened to SMP, is the legal
        minimum most employers must pay to eligible employees during
        maternity leave. For 2026/27, it is structured in two stages. The
        first 6 weeks are paid at 90% of your average weekly earnings, with
        no upper limit, so higher earners genuinely receive 90% of their
        normal pay during this period. The remaining 33 weeks are paid at
        the lower of a flat weekly rate, currently{" "}
        <strong>£187.18</strong>, or 90% of your average weekly earnings,
        whichever is less. In practice, this means most people move onto
        the flat rate once their initial 6 higher-rate weeks are over,
        since 90% of their normal earnings usually works out higher than
        the flat rate once weekly pay exceeds around £208.
      </p>
      <p>
        To qualify for SMP, you generally need at least 26 weeks of
        continuous employment with the same employer, calculated up to the
        end of the qualifying week, which is the 15th week before your
        baby is due. You also need average weekly earnings of at least{" "}
        £125, in line with the Lower Earnings Limit used elsewhere in the
        National Insurance system. Average weekly earnings are usually
        calculated using an 8-week reference period ending around the
        qualifying week, so a recent pay rise or bonus can genuinely
        increase your SMP entitlement if it falls within that window,
        while a recent drop in hours can reduce it. Our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>{" "}
        can help you see what any of these gross figures look like once
        tax and National Insurance are taken into account.
      </p>
      <p>
        To see how this looks in practice, take someone earning{" "}
        <strong>£500 a week</strong>, on a statutory-only maternity policy,
        taking their full 52-week entitlement. The first 6 weeks are paid
        at 90% of £500, which is <strong>£450 a week</strong>, totalling{" "}
        <strong>£2,700</strong>. The next 33 weeks are paid at the standard{" "}
        £187.18 rate, since it is lower than 90% of their earnings, adding
        a further <strong>£6,176.94</strong>. That brings their total
        statutory maternity pay across the full 39 paid weeks to around{" "}
        <strong>£8,876.94</strong>, with the final 13 weeks of their
        52-week leave unpaid. Our{" "}
        <Link href="/calculators/maternity-pay-calculator-uk">
          maternity pay calculator
        </Link>{" "}
        runs this same calculation instantly using your own salary, leave
        length and start date, including a month-by-month breakdown.
      </p>
      <p>
        You need to tell your employer that you are pregnant, your
        expected due date, and when you want your maternity leave to
        start, by the end of the 15th week before your baby is due, the
        same qualifying week used to assess your SMP eligibility. Your
        employer can ask for this in writing, and will usually confirm
        your leave and pay dates back to you within 28 days. You can
        change your planned start date later if you give at least 28
        days&apos; notice of the new date, which gives some flexibility if your
        circumstances change or your baby arrives earlier or later than
        expected. If you go into labour before your chosen start date,
        your maternity leave and pay generally begin automatically from
        the day after the birth.
      </p>

      <CalloutBox
        title="Work out your maternity pay"
        description="Enter your weekly salary, leave length and employer policy for an instant week-by-week maternity pay breakdown."
        href="/calculators/maternity-pay-calculator-uk"
        cta="Calculate my maternity pay"
      />

      <h2 id="after-week-39">What happens after week 39</h2>
      <p>
        Maternity leave and maternity pay are not the same length, and this
        catches a lot of people out. You are entitled to take up to{" "}
        <strong>52 weeks</strong> of maternity leave in total, split into
        26 weeks of Ordinary Maternity Leave and 26 weeks of Additional
        Maternity Leave, regardless of how long you have worked for your
        employer. Statutory Maternity Pay, however, only covers the first{" "}
        <strong>39 weeks</strong>, leaving the final 13 weeks unpaid unless
        your employer&apos;s own scheme extends pay further.
      </p>
      <p>
        During unpaid maternity leave, you continue to accrue statutory
        annual leave in the normal way, which many people choose to take
        immediately before returning to work, effectively pushing their
        actual return date back further while still being paid for those
        extra weeks. Employers can also invite you in for up to 10
        Keeping in Touch days during your leave, paid at your normal daily
        rate on top of any maternity pay, without it affecting your SMP or
        ending your leave, which can help ease the transition back to work
        and keep you connected with what has changed at work.
      </p>
      <p>
        Some people choose to end their maternity leave earlier than 52
        weeks and return to work sooner, which is entirely allowed, subject
        to giving your employer the correct notice period, usually 8 weeks.
        Others extend into Shared Parental Leave, which lets eligible
        parents split the remaining leave and pay between them after the
        first 2 weeks following birth, giving families more flexibility
        over who is at home and when, rather than the whole 52 weeks
        defaulting to one parent.
      </p>

      <h2 id="enhanced-pay">Enhanced maternity pay from employers</h2>
      <p>
        Many employers offer more generous maternity pay than the
        statutory minimum, particularly in the public sector, banking,
        larger technology companies and some parts of retail. A common
        structure is full salary for a set number of weeks, commonly
        somewhere between 6 and 26 weeks depending on the employer, dropping
        to the standard SMP rate for the remaining statutory weeks, then
        becoming unpaid for any leave beyond week 39. Some employers
        instead offer full or half pay throughout a longer stretch, so
        structures vary considerably and there is no single standard
        across UK employers.
      </p>
      <p>
        The best way to find your own entitlement is to check your
        contract of employment or staff handbook directly, since enhanced
        schemes are a matter of company policy rather than law, and can
        also come with conditions attached, such as a requirement to
        return to work for a minimum period afterwards or repay some of
        the enhanced portion if you do not return at all. Our{" "}
        <Link href="/calculators/maternity-pay-calculator-uk">
          maternity pay calculator
        </Link>{" "}
        lets you model an enhanced scheme directly, by entering how many
        weeks of full pay your employer offers before it switches to the
        standard statutory rate.
      </p>
      <p>
        When reading your maternity policy, look specifically at whether
        SMP is included within the enhanced figure or paid on top of it as
        an extra amount, since wording varies between employers and can
        make a real difference to your total. It is also worth checking
        whether the enhanced element counts as pensionable pay, since this
        affects how much your employer contributes to your pension while
        you are on leave, and whether there is a minimum length of service
        required before the enhanced scheme applies, as some employers
        only offer it once you have been employed for a year or more.
      </p>

      <h2 id="maternity-allowance">Maternity Allowance for self-employed and others</h2>
      <p>
        Not everyone qualifies for Statutory Maternity Pay. If you are
        self-employed, have recently changed jobs and do not meet the
        26-week continuous employment rule, or do not meet the minimum
        earnings threshold, Maternity Allowance is usually the alternative
        to look at. It is paid directly by the Department for Work and
        Pensions rather than an employer, at a similar weekly rate to SMP,
        for up to 39 weeks.
      </p>
      <p>
        For self-employed women, eligibility for Maternity Allowance
        depends on your Class 2 National Insurance contributions record
        over the relevant test period, rather than on continuous
        employment with a single employer, which reflects the more varied
        way self-employed income and work patterns tend to look. Our{" "}
        <Link href="/calculators/self-employed-tax-calculator-uk">
          self-employed tax calculator
        </Link>{" "}
        and{" "}
        <Link href="/blog/self-employed-tax-guide-uk-2026">
          self-employed tax guide
        </Link>{" "}
        can help you understand your wider tax position while planning
        around a period of reduced or no trading income during maternity
        leave. It is worth applying for Maternity Allowance as early as
        possible, since, like SMP, there are time limits on how far a claim
        can be backdated.
      </p>
      <p>
        Maternity Allowance is generally simpler to work out than SMP,
        since it is a flat weekly payment rather than a two-stage
        calculation, though the exact amount can still depend on your
        earnings over your best 13 weeks in the test period if you are
        newly self-employed or have irregular income. Our{" "}
        <Link href="/blog/self-employed-tax-guide-uk-2026">
          self-employed tax guide
        </Link>{" "}
        covers Income Tax and National Insurance for the self-employed in
        full, which is useful background if you are trying to work out
        your likely income and Maternity Allowance position for the year
        ahead at the same time.
      </p>

      <h2 id="tax-and-ni">Tax and National Insurance on maternity pay</h2>
      <p>
        Both Statutory Maternity Pay and any enhanced maternity pay from
        your employer count as normal earnings for tax purposes, so Income
        Tax and National Insurance are deducted through PAYE in exactly the
        same way as your normal salary. Because your total income during
        maternity leave is often significantly lower than your normal
        annual salary, particularly if you take unpaid weeks towards the
        end of your leave, a noticeable portion of your maternity pay can
        fall within your tax-free Personal Allowance, reducing your
        effective tax rate for the year compared with a normal working
        year. Our{" "}
        <Link href="/calculators/income-tax-calculator-uk">
          income tax calculator
        </Link>{" "}
        can help you estimate your full-year tax position if your income
        changes significantly partway through the tax year because of
        maternity leave.
      </p>
      <p>
        It is worth noting that tax is calculated across your whole tax
        year, not just during your maternity leave in isolation, so any
        tax already paid earlier in the year through your normal salary,
        plus tax on your maternity pay, are combined when working out your
        overall liability. If you return to work partway through the tax
        year, your payslips will usually adjust automatically through the
        PAYE system to reflect your combined annual income, though it is
        always worth checking your tax code is correct after a period of
        reduced income, using our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>{" "}
        to sense-check your net pay once you are back on your normal
        salary.
      </p>

      <h2 id="planning-financially">Planning financially for maternity leave</h2>
      <p>
        Since maternity pay drops significantly after the first 6 weeks,
        and can stop altogether after week 39, building a financial buffer
        before your leave starts makes a real practical difference. Many
        people start by working out the gap between their normal monthly
        take-home pay and their expected maternity pay for each stage of
        their leave, using a tool like our{" "}
        <Link href="/calculators/maternity-pay-calculator-uk">
          maternity pay calculator
        </Link>{" "}
        to see the shortfall month by month, then saving towards that gap
        in the months before their due date.
      </p>
      <p>
        It is also worth thinking about your wider tax position for the
        year as a whole, not just your maternity pay in isolation. If your
        income drops significantly during part of the tax year and then
        returns to normal, your overall tax bill for the year is usually
        lower than a simple month-by-month estimate would suggest, since
        Income Tax is calculated on your total annual income rather than
        each month separately. Our{" "}
        <Link href="/calculators/income-tax-calculator-uk">
          income tax calculator
        </Link>{" "}
        can help you sense-check your likely annual tax position once you
        have an estimate of your combined salary and maternity pay for the
        year.
      </p>
      <p>
        It is also worth reviewing regular outgoings before your leave
        starts, checking whether any subscriptions or costs can be paused,
        and confirming whether your partner has any entitlement to
        Paternity Leave or Shared Parental Leave, which can sometimes be
        used to extend paid family leave overall by rearranging how the
        combined entitlement is split between you. Our{" "}
        <Link href="/calculators/pregnancy-weeks-calculator-uk">
          pregnancy weeks calculator
        </Link>{" "}
        and{" "}
        <Link href="/calculators/pregnancy-due-date-calculator-uk">
          pregnancy due date calculator
        </Link>{" "}
        can help you map out exactly when your qualifying week and
        planned leave dates fall, which is often the first step in working
        out your SMP eligibility and timing your savings plan.
      </p>

      <h2 id="returning-to-work">Returning to work considerations</h2>
      <p>
        You have a legal right to return to the same job after Ordinary
        Maternity Leave, or a similar job on the same terms if you return
        after Additional Maternity Leave and your original role is no
        longer available for a genuine reason. Many people also use the
        return to work as a natural point to request flexible working,
        such as reduced hours, compressed hours or hybrid working, which
        employers must consider seriously even though not every request
        can be granted.
      </p>
      <p>
        You are also protected from redundancy during maternity leave and
        for a period after you return, which gives you priority over other
        employees for any suitable alternative role if your position is
        genuinely at risk of redundancy while you are away. If you are
        made redundant during or shortly after maternity leave and believe
        the timing is connected to your pregnancy or leave rather than a
        genuine business reason, this can amount to unlawful discrimination,
        and it is worth seeking advice from ACAS or a solicitor promptly,
        since time limits for bringing a claim are short.
      </p>
      <p>
        Childcare costs are often the biggest new expense when returning
        to work, and it is worth researching Tax-Free Childcare and any
        employer-supported childcare schemes well before your return date,
        since some schemes take time to set up. If reduced hours are part
        of your return to work plan, our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>{" "}
        can help you see the effect on your net pay, giving you a clearer
        picture of whether the childcare costs are covered by your income
        after the change. If you are also weighing up a period of sickness
        alongside your return, our{" "}
        <Link href="/blog/uk-sick-pay-guide-2026">
          UK sick pay guide
        </Link>{" "}
        explains how Statutory Sick Pay works separately from maternity
        pay.
      </p>
      <p>
        Whatever stage of your pregnancy or maternity leave you are
        planning around, our{" "}
        <Link href="/calculators/maternity-pay-calculator-uk">
          maternity pay calculator
        </Link>{" "}
        gives you a clear, personalised estimate to plan your finances
        around, rather than relying on rough rules of thumb.
      </p>

      <h2 id="faq">Frequently asked questions</h2>
    </div>
  );
}
