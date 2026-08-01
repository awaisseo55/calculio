import Link from "next/link";
import { CalloutBox } from "@/components/blog/callout-box";
import { RateTable } from "@/components/blog/rate-table";
import type { FaqItem } from "@/lib/types";
import type { TocItem } from "@/components/blog/table-of-contents";

export const toc: TocItem[] = [
  { id: "full-state-pension-2026", label: "How much is the State Pension in 2026?" },
  { id: "qualifying-years", label: "How to qualify: 35 qualifying years" },
  { id: "state-pension-age", label: "State Pension age changes" },
  { id: "check-your-forecast", label: "How to check your forecast" },
  { id: "deferring", label: "Deferring your State Pension" },
  { id: "married-couples", label: "Married couples and inherited pension" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "try-calculator", label: "Plan your retirement income" },
];

export const faq: FaqItem[] = [
  {
    question: "How much is the full new State Pension in 2026?",
    answer:
      "The full new State Pension is worth £241.05 a week in 2026/27, which works out at around £12,534.60 a year. You only get the full amount if you have 35 qualifying years of National Insurance contributions or credits. Fewer years usually means a proportionally smaller amount.",
  },
  {
    question: "How many National Insurance years do I need for a full State Pension?",
    answer:
      "You generally need 35 qualifying years to get the full new State Pension. You need at least 10 qualifying years to get any State Pension at all. A qualifying year is one where you paid, or were credited with, enough National Insurance contributions, whether through work, certain benefits, or National Insurance credits for things like caring responsibilities.",
  },
  {
    question: "What is the State Pension age in 2026?",
    answer:
      "State Pension age is currently 66 for both men and women. It's already scheduled to rise to 67 between 2026 and 2028, and a further rise to 68 has been proposed for the late 2030s or later, though the exact timing has shifted before. Always check your own State Pension age using the official GOV.UK checker, since it depends on your date of birth.",
  },
  {
    question: "Can I still work while claiming my State Pension?",
    answer:
      "Yes. There's no restriction on working while receiving your State Pension, and your State Pension itself isn't reduced because you're still earning. You may still pay Income Tax on your combined income if it goes above your Personal Allowance, but you stop paying National Insurance on earnings once you reach State Pension age.",
  },
  {
    question: "Is it worth deferring my State Pension?",
    answer:
      "It can be, if you don't need the income immediately and are in good health. Deferring increases your eventual weekly payment, currently by around 1% for every 9 weeks you defer, which works out at just under 5.8% for a full year deferred. Whether it's worth it depends on your other income, your health, and how long you expect to live to benefit from the higher rate.",
  },
  {
    question: "What happens to my State Pension if my spouse dies?",
    answer:
      "Rules around inheriting State Pension are complex and depend on both partners' National Insurance records and when they reached State Pension age. Under the new State Pension system, there's no automatic right to inherit your spouse's full pension the way there was under the old basic State Pension, though you may inherit certain protected payments or additional amounts in specific circumstances. Contact the Pension Service directly for a decision based on your own circumstances.",
  },
];

export function ArticleContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        The State Pension is the foundation most people build their
        retirement income on, yet a surprising number of people reach their
        fifties without knowing roughly how much they&apos;ll actually get, or
        what they need to do to get the full amount. This guide covers
        exactly how much the State Pension is worth in 2026, how the 35
        qualifying years rule works, State Pension age, and what deferring
        and inheritance rules mean in practice. It sits in our{" "}
        <Link href="/categories/finance">Finance category</Link>, alongside
        our other retirement and savings calculators.
      </p>

      <CalloutBox
        title="Project your total retirement income"
        description="See your projected pension pot, private pension income, and how it combines with your State Pension."
        href="/calculators/pension-calculator-uk"
        cta="Open the pension calculator"
      />

      <h2 id="full-state-pension-2026">How much is the State Pension in 2026?</h2>
      <p>
        The full new State Pension is worth <strong>£241.05 a week</strong>{" "}
        in the 2026/27 tax year, which adds up to around{" "}
        <strong>£12,534.60 a year</strong>. This is the amount paid to
        people who reached State Pension age on or after 6 April 2016 and
        have a full 35-year National Insurance record. If you reached State
        Pension age before that date, you&apos;re likely on the older basic State
        Pension system instead, which works differently and is generally
        worth less on its own, though it can include additional State
        Pension on top depending on your work history.
      </p>
      <p>
        It&apos;s worth being clear that the State Pension alone rarely covers a
        comfortable retirement on its own. Most people also rely on a
        workplace or personal pension to top up their income. Our{" "}
        <Link href="/calculators/pension-calculator-uk">
          pension calculator
        </Link>{" "}
        projects your private pension pot and combines it with the State
        Pension figure to give a fuller picture of your likely retirement
        income.
      </p>

      <h2 id="qualifying-years">How to qualify: 35 qualifying years</h2>
      <p>
        To get the full new State Pension, you generally need{" "}
        <strong>35 qualifying years</strong> of National Insurance
        contributions or credits. You need at least{" "}
        <strong>10 qualifying years</strong> to receive any State Pension at
        all, and between 10 and 35 years, you get a proportional amount.
      </p>
      <RateTable
        caption="Qualifying years and State Pension amount (illustrative)"
        columns={["Qualifying years", "Approximate outcome"]}
        rows={[
          ["Below 10 years", "No State Pension"],
          ["10 to 34 years", "Proportional amount, roughly 1/35th of the full rate per qualifying year"],
          ["35 years or more", "Full new State Pension (£241.05 a week)"],
        ]}
      />
      <p>
        A qualifying year isn&apos;t only earned through paid employment. You can
        also build qualifying years through National Insurance credits,
        which are given automatically or on application in situations such
        as claiming certain benefits, receiving Child Benefit for a child
        under 12, or being a carer. If you&apos;re self-employed, your qualifying
        years usually come from paying Class 2 National Insurance, or being
        treated as having paid it, which our{" "}
        <Link href="/blog/self-employed-tax-guide-uk-2026">
          self-employed tax guide
        </Link>{" "}
        covers in more detail.
      </p>
      <p>
        If you have gaps in your National Insurance record, from time spent
        abroad, unemployment without claiming credits, or lower earnings in
        some years, you can sometimes pay voluntary National Insurance
        contributions to fill them, which can be a cost-effective way to
        boost your eventual State Pension if you&apos;re short of 35 years.
      </p>

      <h2 id="state-pension-age">State Pension age changes</h2>
      <p>
        State Pension age is currently <strong>66</strong> for everyone. It&apos;s
        already scheduled to increase to <strong>67</strong> between 2026 and
        2028, and a further rise to 68 has been proposed for some point in
        the late 2030s or beyond, though exact dates have shifted in the past
        and shouldn&apos;t be treated as fixed too far in advance.
      </p>
      <p>
        Your own State Pension age depends on your date of birth, so it&apos;s
        worth checking the official GOV.UK State Pension age checker for your
        exact date rather than assuming it matches a friend or relative born
        in a different year. This is particularly important if you&apos;re
        planning your retirement date around when your State Pension starts,
        since starting to draw a private pension years before your State
        Pension kicks in requires your pot to stretch further.
      </p>

      <h2 id="check-your-forecast">How to check your State Pension forecast</h2>
      <p>
        The most reliable way to see exactly what you&apos;re on track to receive
        is the official State Pension forecast tool on GOV.UK, accessed
        through your personal tax account. It shows your current qualifying
        years, your forecast amount based on your record so far, and what
        you&apos;re projected to get if you continue contributing until State
        Pension age.
      </p>
      <p>
        It&apos;s worth checking this every few years, particularly if you&apos;ve had
        career breaks, worked abroad, or been self-employed, since these are
        the situations most likely to create gaps in your National Insurance
        record without you realising. Catching a gap early gives you more
        options, including paying voluntary contributions, to fill it before
        it affects your final State Pension amount.
      </p>

      <h2 id="deferring">Deferring your State Pension</h2>
      <p>
        You don&apos;t have to start claiming your State Pension the moment you
        reach State Pension age. Deferring means your eventual weekly amount
        increases, currently at a rate of around{" "}
        <strong>1% for every 9 weeks</strong> you defer, which works out at
        just under <strong>5.8% for a full year</strong> deferred.
      </p>
      <p>
        Whether deferring makes sense depends on your circumstances. If
        you&apos;re still working and don&apos;t need the extra income, or you have
        other savings to draw on first, deferring can boost your longer-term
        income. If your health means you&apos;re less likely to benefit from many
        years of a higher rate, claiming as soon as you&apos;re eligible is
        often the more sensible choice. There&apos;s no single right answer, and
        it&apos;s worth thinking about alongside your wider retirement plan
        rather than deciding on the higher percentage alone.
      </p>

      <h2 id="married-couples">Married couples and inherited State Pension</h2>
      <p>
        Inheritance rules changed significantly with the move to the new
        State Pension system in April 2016. Under the old basic State
        Pension, a surviving spouse could often inherit a share of their
        late partner&apos;s pension. Under the new system, this automatic right
        largely no longer applies, though there are specific circumstances
        where a surviving spouse or civil partner can inherit certain
        protected payments or additional State Pension amounts built up
        before the changeover.
      </p>
      <p>
        Because these rules depend heavily on both partners&apos; individual
        National Insurance records and the exact dates involved, it&apos;s not
        something a general guide can calculate accurately for your specific
        situation. If this applies to you, contacting the Pension Service
        directly is the most reliable way to get a clear answer, rather than
        relying on a rule of thumb that may not match your circumstances.
      </p>
      <p>
        In the meantime, it&apos;s worth checking your own qualifying years and
        projected pension using our{" "}
        <Link href="/calculators/national-insurance-calculator-uk">
          National Insurance calculator
        </Link>{" "}
        and{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>
        , and building your private pension savings, such as through an ISA
        or workplace pension, so your retirement doesn&apos;t rely on the State
        Pension alone. Our guide to{" "}
        <Link href="/blog/compound-interest-explained-uk">
          compound interest
        </Link>{" "}
        explains why starting private saving early makes such a difference
        over a working lifetime. Once you reach State Pension age, it is
        also worth checking our{" "}
        <Link href="/calculators/winter-fuel-payment-calculator-uk">
          Winter Fuel Payment calculator
        </Link>{" "}
        for a separate, tax-free payment towards your winter heating costs.
      </p>

      <h2 id="faq">Frequently asked questions</h2>
    </div>
  );
}
