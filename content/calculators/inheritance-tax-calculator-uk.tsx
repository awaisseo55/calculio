import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "What is the Inheritance Tax nil-rate band?",
    answer:
      "The nil-rate band is £325,000. This is the amount of an estate that can pass tax-free before the standard 40% Inheritance Tax rate applies to anything above it. It can be transferred between spouses and civil partners, so a surviving partner can potentially use up to double the allowance.",
  },
  {
    question: "What is the residence nil-rate band?",
    answer:
      "The residence nil-rate band is an extra £175,000 allowance that applies when a main residence is left to direct descendants, meaning children, grandchildren, or their spouses. It sits on top of the standard £325,000 nil-rate band, but only if the residence condition is met, and it tapers away for estates worth more than £2 million.",
  },
  {
    question: "Do I pay Inheritance Tax on money left to my spouse?",
    answer:
      "No. Anything left to a spouse or civil partner is completely exempt from Inheritance Tax, regardless of the amount, as long as both people are UK domiciled (special rules apply if one partner is not UK domiciled). This exemption is one of the most valuable in the whole system.",
  },
  {
    question: "How does leaving money to charity reduce Inheritance Tax?",
    answer:
      "If you leave at least 10% of your net estate (after other reliefs and the nil-rate bands) to a registered charity, the Inheritance Tax rate on the rest of the taxable estate drops from 40% to 36%. Smaller charity gifts are still deducted from the taxable estate but do not trigger the reduced rate.",
  },
  {
    question: "Do gifts made before death count towards Inheritance Tax?",
    answer:
      "Gifts made within 7 years of death are generally brought back into the estate for Inheritance Tax purposes, though tax on gifts within this window can taper down the longer before death they were made (known as taper relief). Gifts made more than 7 years before death are usually outside the estate entirely, though the rules have exceptions worth checking with a professional.",
  },
  {
    question: "Is this calculator accurate for complicated estates?",
    answer:
      "This calculator covers the core nil-rate band, residence nil-rate band, spouse exemption, gifts and charity relief. It does not cover business relief, agricultural relief, trusts, or more complex estate structures, all of which can significantly change the result. For anything beyond a simple estate, speak to a solicitor or a regulated financial adviser.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Inheritance Tax catches many families by surprise, partly because
        property values have risen faster than the tax-free allowances,
        and partly because the rules around the residence nil-rate band and
        charity gifts are not widely understood. This calculator estimates
        the Inheritance Tax due on an estate, using the nil-rate band, the
        residence nil-rate band, and the reduced rate for charitable
        giving.
      </p>

      <h2>How to use the Inheritance Tax calculator</h2>
      <p>
        Enter the total value of the estate, any amount left to a spouse or
        civil partner (which is fully exempt), the value of the main
        residence, and whether it is being left to children or
        grandchildren. Add any gifts made within 7 years of death and any
        amount left to charity. The calculator works out the nil-rate bands
        that apply, the taxable estate, and the Inheritance Tax due, at
        either the standard 40% rate or the reduced 36% rate if enough is
        left to charity.
      </p>

      <h2>How the calculation works</h2>
      <p>
        Every estate gets a nil-rate band of <strong>£325,000</strong>,
        tax-free before the standard rate applies. If the main residence is
        left to direct descendants, a further residence nil-rate band of up
        to <strong>£175,000</strong> can apply, giving a combined allowance
        of up to £500,000 for many families. This residence nil-rate band
        tapers away for estates worth more than £2 million, reducing by £1
        for every £2 the estate exceeds that threshold, and disappears
        entirely for very large estates.
      </p>
      <p>
        Anything left to a spouse or civil partner is deducted before these
        nil-rate bands are even applied, since it is fully exempt. Gifts
        made within 7 years of death are added back into the estate for tax
        purposes. Once the taxable estate is worked out, it is taxed at 40%,
        or at a reduced 36% if 10% or more of the estate above the nil-rate
        bands is left to charity.
      </p>

      <h2>Worked example</h2>
      <p>
        Take an estate worth <strong>£800,000</strong>, with a{" "}
        <strong>£400,000</strong> main residence left to the deceased&apos;s
        children, and no spouse exemption or charity gifts.
      </p>
      <p>
        The residence nil-rate band applies in full at £175,000, since the
        residence is worth more than that and is left to direct
        descendants. Combined with the standard £325,000 nil-rate band,
        that gives a total tax-free allowance of £500,000. The remaining{" "}
        <strong>£300,000</strong> is taxable at 40%, giving Inheritance Tax
        of <strong>£120,000</strong>, leaving £680,000 to pass to the
        beneficiaries.
      </p>
      <p>
        Now try the same figures in the calculator above but leave the
        residence to someone other than a direct descendant, such as a
        sibling or friend. The residence nil-rate band no longer applies,
        the tax-free allowance drops to £325,000, and the Inheritance Tax
        bill rises substantially, showing just how valuable this relief is
        when it applies.
      </p>

      <h2>Ways people commonly plan around Inheritance Tax</h2>
      <p>
        A number of well-established, legitimate approaches can reduce a
        future Inheritance Tax bill, though all of them work best when
        planned well in advance rather than as a last-minute fix. Making use
        of annual gift allowances, currently £3,000 a year free of
        Inheritance Tax consideration, lets money move to the next
        generation gradually without it counting as a 7-year gift. Regular
        gifts made out of surplus income, rather than capital, can also fall
        outside the estate immediately if they meet HMRC&apos;s specific
        conditions.
      </p>
      <p>
        Life insurance written in trust is another common tool: the payout
        sits outside the estate and can be used by beneficiaries to cover an
        Inheritance Tax bill without needing to sell property or other
        assets quickly under pressure. Pensions also sit outside most
        people&apos;s estates for Inheritance Tax purposes in many
        circumstances, which is one reason financial advisers often suggest
        drawing retirement income from other savings first and leaving
        pension pots untouched for longer where that fits the wider plan.
      </p>
      <p>
        None of these approaches suit every family, and getting them wrong,
        for example by not surviving 7 years after a large gift, can leave
        an estate no better off than doing nothing at all. This is exactly
        the kind of decision worth discussing with a solicitor or financial
        adviser rather than acting on a general guide alone.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        A frequent mistake is assuming the residence nil-rate band applies
        automatically to any property in an estate. It only applies when
        the main residence is left specifically to direct descendants,
        children, grandchildren, or their spouses, not to other relatives,
        friends, or a trust in most circumstances. Leaving a home to a
        sibling or a favourite nephew, however well intentioned, does not
        unlock this allowance.
      </p>
      <p>
        It is also easy to overlook how gifts within 7 years of death affect
        the calculation. Large gifts made shortly before death are often
        brought back into the estate for tax purposes, which can push a
        seemingly modest estate over the nil-rate band unexpectedly. Keeping
        a record of significant gifts, including the date they were made,
        makes it much easier for executors to work out the correct position
        later.
      </p>
      <p>
        Finally, do not assume this calculator, or any general guide,
        replaces proper estate planning. Business relief, agricultural
        relief, trusts, and gifts with reservation of benefit can all change
        an estate&apos;s Inheritance Tax position significantly, and these are
        genuinely complex areas where a solicitor or financial adviser adds
        real value.
      </p>

      <h2>Related calculators</h2>
      <p>
        If you are planning ahead for other taxes on assets, our{" "}
        <Link href="/calculators/capital-gains-tax-calculator-uk">
          Capital Gains Tax calculator
        </Link>{" "}
        covers tax on selling property or shares, our{" "}
        <Link href="/calculators/income-tax-calculator-uk">
          Income Tax calculator
        </Link>{" "}
        breaks down tax by band, and our{" "}
        <Link href="/calculators/dividend-tax-calculator-uk">
          dividend tax calculator
        </Link>{" "}
        covers tax on dividend income. If you are thinking about the cost of
        passing on property to the next generation, our{" "}
        <Link href="/blog/first-home-cost-uk-2026">
          first home cost guide
        </Link>{" "}
        covers the other side of property costs, for those buying rather
        than inheriting.
      </p>
    </div>
  );
}
