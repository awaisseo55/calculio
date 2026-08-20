import Link from "next/link";
import { CalloutBox } from "@/components/blog/callout-box";
import { RateTable } from "@/components/blog/rate-table";
import type { FaqItem } from "@/lib/types";
import type { TocItem } from "@/components/blog/table-of-contents";

export const toc: TocItem[] = [
  { id: "who-pays-it", label: "Who actually pays Inheritance Tax" },
  { id: "nil-rate-band", label: "The nil-rate band" },
  { id: "residence-nil-rate-band", label: "The residence nil-rate band" },
  { id: "iht-rates", label: "Inheritance Tax rates" },
  { id: "worked-example", label: "Worked example: a £950,000 estate" },
  { id: "gifts-and-the-7-year-rule", label: "Gifts and the 7-year rule" },
  { id: "reduce-your-bill", label: "Ways to reduce an Inheritance Tax bill" },
  { id: "common-mistakes", label: "Common mistakes" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "try-calculator", label: "Try the calculator" },
];

export const faq: FaqItem[] = [
  {
    question: "What is the Inheritance Tax threshold for 2026/27?",
    answer:
      "The standard nil-rate band is £325,000 per person. On top of that, if you leave your main home to children, grandchildren or their spouses, a residence nil-rate band of £175,000 usually applies too, giving a combined £500,000 threshold before Inheritance Tax is due, or up to £1,000,000 for a married couple or civil partnership using both allowances.",
  },
  {
    question: "Do most people actually pay Inheritance Tax?",
    answer:
      "No. Because of the nil-rate band, the residence nil-rate band, and the exemption for anything left to a spouse or civil partner, only a minority of UK estates end up paying any Inheritance Tax. It tends to affect estates that include a higher-value home, especially in and around London and the South East, combined with other savings and investments.",
  },
  {
    question: "Does everything left to my spouse avoid Inheritance Tax?",
    answer:
      "Yes, in almost all cases. Assets left to a spouse or civil partner are exempt from Inheritance Tax regardless of value, provided they're both UK domiciled. Any unused nil-rate band and residence nil-rate band from the first spouse to die can also usually be transferred to the surviving spouse's estate.",
  },
  {
    question: "How does the 7-year rule work for gifts?",
    answer:
      "Gifts you make more than 7 years before you die are usually completely free of Inheritance Tax. Gifts made within 7 years are called potentially exempt transfers, and if you die within that window, the gift can still be counted as part of your estate, with taper relief reducing the tax due the longer you survived after making it.",
  },
  {
    question: "Are pensions included in my estate for Inheritance Tax?",
    answer:
      "Most defined contribution pensions currently sit outside your estate for Inheritance Tax purposes, which is one reason they're often used as a later-life planning tool alongside ISAs and other savings. Rules in this area are reviewed periodically, so it's worth checking the current position with a financial adviser rather than assuming it will always stay this way.",
  },
  {
    question: "Can I reduce Inheritance Tax by giving to charity?",
    answer:
      "Yes. If you leave 10% or more of your net estate to charity, the rate on the rest of your taxable estate drops from 40% to 36%. Gifts to charity are also completely exempt from Inheritance Tax in their own right, regardless of the size of the gift.",
  },
];

export function ArticleContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Inheritance Tax has a reputation for catching families off guard, usually
        because nobody worked out in advance whether an estate would actually owe
        anything. The truth is most estates pay nothing at all, but for those that do,
        the bill can run into tens of thousands of pounds. Our{" "}
        <Link href="/calculators/inheritance-tax-calculator-uk">
          Inheritance Tax Calculator
        </Link>{" "}
        gives you a quick estimate, and this guide walks through exactly how the
        thresholds, rates and reliefs fit together.
      </p>

      <h2 id="who-pays-it">Who actually pays Inheritance Tax</h2>
      <p>
        Inheritance Tax is charged on the value of your estate, everything you own
        minus what you owe, when you die. It's usually paid from the estate itself
        before anything is distributed to beneficiaries, rather than being a personal
        bill for whoever inherits. Because of the allowances covered below, most
        estates fall entirely under the tax-free threshold and pay nothing. It tends
        to become a real issue for estates that include a family home worth several
        hundred thousand pounds, on top of savings, investments and other assets.
      </p>

      <h2 id="nil-rate-band">The nil-rate band</h2>
      <p>
        Every estate gets a standard tax-free allowance called the nil-rate band,
        which has been frozen at £325,000 for a number of years. Any part of your
        estate up to this figure passes on free of Inheritance Tax. If you're married
        or in a civil partnership and leave everything to your spouse, their estate
        can usually inherit your unused nil-rate band too, potentially giving them
        £650,000 of combined allowance when they later pass assets on to the next
        generation.
      </p>

      <h2 id="residence-nil-rate-band">The residence nil-rate band</h2>
      <p>
        On top of the standard nil-rate band, there's a further £175,000 residence
        nil-rate band that applies when your main home is left to direct descendants,
        meaning children, grandchildren, step-children, or their spouses and civil
        partners. It doesn't apply if the home is left to, say, a niece, nephew, or
        friend, and it starts tapering away by £1 for every £2 an estate is worth
        above £2,000,000, disappearing completely for very large estates. For a
        typical family estate under that threshold, it means a combined £500,000 can
        pass on tax-free, or £1,000,000 for a couple.
      </p>
      <RateTable
        caption="Combined UK Inheritance Tax thresholds, 2026/27"
        columns={["Situation", "Tax-free threshold"]}
        rows={[
          ["Single person, no residence nil-rate band", "£325,000"],
          ["Single person, home left to direct descendants", "£500,000"],
          ["Married couple or civil partnership, both allowances", "£1,000,000"],
        ]}
        highlightLastRow
      />

      <h2 id="iht-rates">Inheritance Tax rates</h2>
      <p>
        Anything in your estate above your available tax-free threshold is taxed at a
        flat 40%. That drops to a reduced 36% on the whole taxable estate if you leave
        10% or more of your net estate to charity, which is one of the more
        significant reliefs available and worth factoring into estate planning if
        charitable giving is already something you'd consider.
      </p>

      <h2 id="worked-example">Worked example: a £950,000 estate</h2>
      <p>
        Say a single, widowed parent leaves an estate worth £950,000 in total,
        including a home worth £400,000, left entirely to their two children. They're
        entitled to the standard £325,000 nil-rate band plus the £175,000 residence
        nil-rate band, since the home goes to direct descendants, giving a combined
        £500,000 tax-free threshold.
      </p>
      <RateTable
        caption="Worked example: £950,000 estate, home left to children"
        columns={["Step", "Amount"]}
        rows={[
          ["Total estate value", "£950,000"],
          ["Nil-rate band", "£325,000"],
          ["Residence nil-rate band", "£175,000"],
          ["Combined tax-free threshold", "£500,000"],
          ["Taxable estate", "£450,000"],
          ["Inheritance Tax owed at 40%", "£180,000"],
        ]}
        highlightLastRow
      />
      <p>
        If this parent had instead been part of a married couple who'd both used
        their full allowances, the combined £1,000,000 threshold would have covered
        the whole estate, and no Inheritance Tax would be due at all. This is exactly
        why checking your own numbers matters more than going on a rule of thumb, our{" "}
        <Link href="/calculators/inheritance-tax-calculator-uk">
          Inheritance Tax Calculator
        </Link>{" "}
        lets you plug in your own estate value and see where you stand.
      </p>

      <CalloutBox
        title="Estimate your Inheritance Tax bill"
        description="Enter your estate value, home value and beneficiaries for an instant estimate, including the nil-rate band and residence nil-rate band."
        href="/calculators/inheritance-tax-calculator-uk"
        cta="Calculate my Inheritance Tax"
      />

      <h2 id="gifts-and-the-7-year-rule">Gifts and the 7-year rule</h2>
      <p>
        Giving money or assets away during your lifetime can reduce the eventual size
        of your estate, but HMRC applies a 7-year rule to stop this being used to
        dodge Inheritance Tax at the last minute. Gifts made more than 7 years before
        death are entirely exempt. Gifts made within 7 years are treated as
        potentially exempt transfers: if you survive the full 7 years, no tax is due
        on them; if you don't, the gift can be pulled back into your estate, with
        taper relief reducing the rate the longer you survived after making it. Worth
        noting too, gifting an asset that's grown in value, such as shares or a
        second property, can also trigger Capital Gains Tax at the point of the gift,
        a separate tax entirely from Inheritance Tax, so it's worth checking our{" "}
        <Link href="/calculators/capital-gains-tax-calculator-uk">
          Capital Gains Tax Calculator
        </Link>{" "}
        before making a significant lifetime gift.
      </p>

      <h2 id="reduce-your-bill">Ways to reduce an Inheritance Tax bill</h2>
      <ul>
        <li>
          <strong>Use the spouse exemption.</strong> Anything left to a spouse or
          civil partner is exempt, and their unused allowances usually carry over to
          their own estate.
        </li>
        <li>
          <strong>Make use of annual gift exemptions.</strong> You can give away
          £3,000 a year, plus smaller regular gifts, entirely free of the 7-year rule,
          which adds up meaningfully over a decade or more.
        </li>
        <li>
          <strong>Consider pensions as part of the wider picture.</strong> Most
          defined contribution pensions currently sit outside your estate for
          Inheritance Tax purposes, which is why many people prioritise drawing down
          other savings first. Our{" "}
          <Link href="/calculators/pension-calculator-uk">Pension Calculator</Link>{" "}
          can help you see how your pension pot and State Pension fit into your wider
          retirement and estate planning.
        </li>
        <li>
          <strong>Leave a share to charity.</strong> Beyond being exempt itself, a
          gift of 10% or more of your net estate to charity brings the rate on the
          rest of the estate down from 40% to 36%.
        </li>
      </ul>
      <p>
        Bear in mind that money held in an ISA does still count as part of your
        taxable estate, unlike a pension, even though it grows free of Income Tax and
        Capital Gains Tax during your lifetime. Check your current ISA position with
        our <Link href="/calculators/isa-calculator-uk">ISA Calculator</Link> if
        that's part of your estate planning.
      </p>

      <h2 id="common-mistakes">Common mistakes</h2>
      <ul>
        <li>
          <strong>Assuming the residence nil-rate band always applies.</strong> It
          only counts if the home goes to direct descendants, not to a sibling,
          friend, or a trust that isn't set up for children or grandchildren.
        </li>
        <li>
          <strong>Not keeping records of gifts.</strong> Executors need a clear record
          of what was given away and when, to work out whether the 7-year rule
          applies, and gaps in this record can slow down or complicate probate.
        </li>
        <li>
          <strong>Forgetting the taper on large estates.</strong> Above £2,000,000,
          the residence nil-rate band starts shrinking, which can catch out estates
          that are just over the line once a home's value is included.
        </li>
        <li>
          <strong>Leaving it too late to plan.</strong> Gifting, trusts, and other
          estate planning tools generally work best when set up well in advance,
          rather than as a last-minute response to a diagnosis or ill health.
        </li>
      </ul>
      <p>
        For more on how pensions fit into your retirement income alongside the State
        Pension, see our{" "}
        <Link href="/blog/uk-state-pension-guide-2026">UK State Pension guide</Link>,
        and for the tax rules on selling property or shares during your lifetime, read
        our guide to{" "}
        <Link href="/blog/capital-gains-tax-uk-2026-27">
          Capital Gains Tax in 2026/27
        </Link>
        .
      </p>

      <h2 id="faq">Frequently asked questions</h2>
    </div>
  );
}
