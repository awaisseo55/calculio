import Link from "next/link";
import { CalloutBox } from "@/components/blog/callout-box";
import type { FaqItem } from "@/lib/types";
import type { TocItem } from "@/components/blog/table-of-contents";

export const toc: TocItem[] = [
  { id: "what-is-it", label: "What is the Winter Fuel Payment" },
  { id: "who-qualifies", label: "Who qualifies in 2026/27" },
  { id: "how-much", label: "How much you can get" },
  { id: "how-to-apply", label: "How to apply" },
  { id: "related-benefits", label: "Related benefits explained" },
  { id: "energy-support", label: "Energy bill support beyond Winter Fuel" },
  { id: "financial-planning", label: "Planning for retirement energy costs" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "try-calculator", label: "Check your eligibility" },
];

export const faq: FaqItem[] = [
  {
    question: "Who is eligible for the Winter Fuel Payment in 2026/27?",
    answer:
      "You generally need to have reached State Pension age, currently 66, by the qualifying date in September, and have been living in the UK for at least part of the qualifying week. Since 2025/26, eligibility widened to all pensioner households, with a separate income-based rule that recovers the payment from higher earners rather than excluding them from the outset.",
  },
  {
    question: "How much is the Winter Fuel Payment worth this year?",
    answer:
      "The standard amount is typically £200 per household, rising to £300 if you or your partner are 80 or over. It is paid once per household rather than once per eligible person, so a couple who both qualify still receive a single combined payment.",
  },
  {
    question: "Will I have to pay the Winter Fuel Payment back?",
    answer:
      "If your taxable income is above the income threshold, HMRC recovers the full payment through your Self Assessment tax return or by adjusting your tax code. You can also opt out of receiving it in advance if you know your income will be above the threshold, avoiding the payment being paid and then reclaimed.",
  },
  {
    question: "Do I need to apply for the Winter Fuel Payment?",
    answer:
      "Most eligible people receive it automatically, since DWP already holds the necessary information through the State Pension or other benefits. A smaller number of people, for example those who have deferred their State Pension and do not claim any other benefit, may need to make a claim, so check GOV.UK if you have not received a payment by January despite expecting one.",
  },
  {
    question: "What is the difference between the Winter Fuel Payment and the Cold Weather Payment?",
    answer:
      "The Winter Fuel Payment is a single annual payment based on age, paid automatically each winter regardless of the weather. The Cold Weather Payment is a smaller, separate payment triggered automatically only during a sustained cold spell in your area, and only for people already receiving certain means-tested benefits, so the two can apply independently of each other.",
  },
  {
    question: "Can Winter Fuel Payment and Pension Credit both apply to me?",
    answer:
      "Yes, they are separate but connected. Receiving Pension Credit does not change your Winter Fuel Payment amount directly under the current rules, since eligibility is now based on age rather than benefit receipt, but Pension Credit itself is worth checking separately, since it can unlock other support, including help with rent, Council Tax and NHS costs.",
  },
];

export function ArticleContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Winter Fuel Payment rules have changed twice in quick succession,
        first tightening to Pension Credit recipients only, then widening
        again to all pensioner households with an income-based clawback
        instead. If you are unsure where that leaves you for 2026/27, our{" "}
        <Link href="/calculators/winter-fuel-payment-calculator-uk">
          Winter Fuel Payment calculator
        </Link>{" "}
        gives you a quick estimate, and this guide explains the rules
        behind it in full.
      </p>

      <h2 id="what-is-it">What is the Winter Fuel Payment</h2>
      <p>
        The Winter Fuel Payment is an annual, tax-free payment from the
        Department for Work and Pensions, intended to help pensioner
        households with the cost of heating through the winter months. It
        has existed in some form for many years, but the eligibility rules
        have shifted considerably in the mid-2020s, from being available to
        essentially all pensioners, to being restricted to Pension Credit
        recipients only for winter 2024/25, and then widened again from
        2025/26 to cover all pensioner households, with a new income-based
        rule affecting higher earners instead.
      </p>
      <p>
        Because the rules have changed so recently, it is worth
        double-checking your own position each year rather than assuming
        last year&apos;s outcome still applies, particularly if your income
        or household situation has changed.
      </p>

      <h2 id="who-qualifies">Who qualifies in 2026/27</h2>
      <p>
        The core requirement is age: you need to have reached State Pension
        age, currently 66, by the qualifying date, usually in mid-to-late
        September, with the exact date set and confirmed by DWP each year.
        You also generally need to have been living in the UK for at least
        part of the qualifying week, with some exceptions and restrictions
        for people living elsewhere in the EEA or Switzerland with a
        genuine link to the UK.
      </p>
      <p>
        Since 2025/26, eligibility is no longer limited to people receiving
        Pension Credit or another means-tested benefit, unlike the more
        restrictive rules that applied for winter 2024/25 only. Instead,
        all pensioner households are eligible in principle, with the
        payment then recovered from anyone whose taxable income sits above
        the income threshold, through their tax return or tax code, rather
        than excluding them from receiving it at all.
      </p>
      <p>
        People living in a care home for the whole of the qualifying period
        who also receive Pension Credit or a similar means-tested benefit
        are generally not eligible, since different support arrangements
        apply in that situation instead. If your circumstances are unusual,
        for example you have recently moved to the UK, deferred your State
        Pension, or split your time between countries, checking directly
        with DWP or on GOV.UK is worthwhile, since the general rules above
        do not cover every edge case.
      </p>

      <h2 id="how-much">How much you can get</h2>
      <p>
        Payments are typically £200 per household for most eligible
        pensioner households, rising to £300 if you or your partner are 80
        or over. This is paid once per household, not once per eligible
        person, so a couple who both qualify still receive one combined
        payment rather than a doubled amount. If your household income is
        above the income threshold, the same amount is still paid initially
        but then recovered in full through the tax system, unless you have
        chosen to opt out in advance. Our{" "}
        <Link href="/calculators/winter-fuel-payment-calculator-uk">
          Winter Fuel Payment calculator
        </Link>{" "}
        applies these rules to your own age, household and income to give
        you a specific estimate rather than a general range.
      </p>

      <CalloutBox
        title="Check your Winter Fuel Payment eligibility"
        description="Answer a few quick questions about your age, household and income to see whether you're likely to qualify, and for how much."
        href="/calculators/winter-fuel-payment-calculator-uk"
        cta="Check my eligibility"
      />

      <h2 id="how-to-apply">How to apply</h2>
      <p>
        Most people do not need to apply at all. If you already receive the
        State Pension or another qualifying DWP benefit, the Winter Fuel
        Payment is normally paid automatically, usually arriving between
        November and December. If you have not received a payment by
        January despite expecting to, it is worth contacting the Winter
        Fuel Payment helpline or checking your online account for an
        update, since payments can occasionally be delayed rather than
        missing altogether.
      </p>
      <p>
        A smaller group of people, for example those who have deferred
        claiming their State Pension and are not receiving any other
        benefit that would trigger an automatic payment, may need to make a
        claim directly. If you believe you are eligible but have not
        received an automatic payment or heard anything by the end of
        January, checking GOV.UK for the current claim process is the right
        next step, and revisiting our{" "}
        <Link href="/calculators/winter-fuel-payment-calculator-uk">
          Winter Fuel Payment calculator
        </Link>{" "}
        can help confirm whether you should expect a payment in the first
        place.
      </p>

      <h2 id="related-benefits">Related benefits explained</h2>
      <h3>Cold Weather Payment</h3>
      <p>
        A separate £25 payment triggered automatically for each 7-day
        period of unusually cold weather in your local area, but only for
        people already receiving certain means-tested benefits, such as
        Pension Credit or income-related Employment and Support Allowance.
        Unlike the Winter Fuel Payment, it depends entirely on the weather
        and your benefit status, not simply your age.
      </p>
      <h3>Warm Home Discount</h3>
      <p>
        A one-off discount, commonly around £150, applied directly to an
        eligible household&apos;s electricity bill by their supplier,
        generally aimed at people receiving certain means-tested benefits
        or on a low income with high energy costs. It is a discount on your
        bill rather than a cash payment, and eligibility criteria are
        reviewed each year.
      </p>
      <h3>Pension Credit</h3>
      <p>
        A means-tested benefit that tops up the income of the lowest-income
        pensioners, and one of the most under-claimed benefits in the UK,
        since many eligible pensioners do not realise they qualify. Beyond
        the direct top-up, receiving Pension Credit can unlock further
        support, including help with rent, Council Tax and NHS costs, so
        it is worth checking eligibility even if the amount itself sounds
        modest.
      </p>
      <h3>Attendance Allowance</h3>
      <p>
        A separate benefit for people over State Pension age who need help
        with personal care due to a disability or long-term health
        condition, not means-tested and not affected by savings or other
        income. It is worth checking independently of Winter Fuel Payment
        eligibility, since many pensioners who could claim it do not.
      </p>

      <h2 id="energy-support">Energy bill support beyond Winter Fuel</h2>
      <p>
        Winter Fuel Payment is just one part of managing a winter energy
        bill. Home energy efficiency improvements, such as loft insulation,
        often have a favourable payback period for older, under-insulated
        homes, and our{" "}
        <Link href="/calculators/loft-insulation-calculator-uk">
          loft insulation calculator
        </Link>{" "}
        can give you a rough sense of the cost and potential saving. The
        ECO4 scheme also funds insulation and heating upgrades for eligible
        low-income and vulnerable households, often at no direct cost, so
        it is worth checking your eligibility with your energy supplier or
        a local scheme provider.
      </p>
      <p>
        For a clearer sense of your overall bill, our{" "}
        <Link href="/calculators/energy-bill-calculator-uk">
          energy bill calculator
        </Link>{" "}
        estimates your annual and monthly gas and electricity cost based on
        your household size, property type and heating system, and our{" "}
        <Link href="/blog/reduce-uk-energy-bills-2026">
          guide to reducing your UK energy bills
        </Link>{" "}
        covers practical, room-by-room ways to cut usage on top of any
        support you receive. Running your figures through the{" "}
        <Link href="/calculators/energy-bill-calculator-uk">
          energy bill calculator
        </Link>{" "}
        before and after making a change is a simple way to see roughly how
        much difference it makes, and the{" "}
        <Link href="/blog/reduce-uk-energy-bills-2026">
          energy bills guide
        </Link>{" "}
        has a full room-by-room breakdown to work through.
      </p>

      <h2 id="financial-planning">Planning for retirement energy costs</h2>
      <p>
        Energy costs are one of the more unpredictable parts of a
        retirement budget, since they depend on weather, wholesale prices
        and your own home&apos;s efficiency, all of which can shift from one
        winter to the next. Fixing your tariff during a period of
        relatively low prices, where a genuinely competitive fixed deal is
        available, can add useful certainty to a retirement budget, even
        though it means giving up some flexibility if prices later fall.
      </p>
      <p>
        More broadly, understanding your total retirement income, including
        your State Pension, any private pension, and support like the
        Winter Fuel Payment, makes it much easier to budget confidently for
        bills that vary seasonally. Our{" "}
        <Link href="/calculators/pension-calculator-uk">
          pension calculator
        </Link>{" "}
        and our{" "}
        <Link href="/blog/uk-state-pension-guide-2026">
          UK State Pension guide
        </Link>{" "}
        are useful starting points for building that fuller picture, and
        our{" "}
        <Link href="/calculators/pension-calculator-uk">
          pension calculator
        </Link>{" "}
        can also help you see how a private pension combines with your
        State Pension income across retirement, alongside the{" "}
        <Link href="/blog/uk-state-pension-guide-2026">
          State Pension guide&apos;s
        </Link>{" "}
        detail on qualifying years and deferring.
      </p>

      <h2 id="faq">Frequently asked questions</h2>
    </div>
  );
}
