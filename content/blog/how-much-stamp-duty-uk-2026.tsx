import Link from "next/link";
import { CalloutBox } from "@/components/blog/callout-box";
import { RateTable } from "@/components/blog/rate-table";
import type { FaqItem } from "@/lib/types";
import type { TocItem } from "@/components/blog/table-of-contents";

export const toc: TocItem[] = [
  { id: "what-is-stamp-duty", label: "What is stamp duty?" },
  { id: "2026-sdlt-rates", label: "2026 SDLT rates for standard buyers" },
  { id: "first-time-buyer-relief", label: "First-time buyer relief 2026" },
  { id: "additional-property-surcharge", label: "Additional property surcharge" },
  { id: "non-resident-surcharge", label: "Non-UK resident surcharge" },
  { id: "scotland-wales-rates", label: "Scotland (LBTT) and Wales (LTT)" },
  { id: "when-how-to-pay", label: "When and how to pay" },
  { id: "reduce-stamp-duty", label: "Ways to reduce your bill" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "try-calculator", label: "Try the calculator" },
];

export const faq: FaqItem[] = [
  {
    question: "How much stamp duty do I pay on a £300,000 house?",
    answer:
      "If you're a home mover buying in England or Northern Ireland (not a first-time buyer, and not buying an additional property), a £300,000 purchase is taxed as: 0% on the first £125,000, 2% on the next £125,000 (£2,500), and 5% on the remaining £50,000 (£2,500) — a total SDLT bill of £5,000. First-time buyers would pay nothing at all on the same price, since it's under the £300,000 relief threshold.",
  },
  {
    question: "Do first-time buyers pay stamp duty in 2026?",
    answer:
      "Not on the first £300,000 of a property's price. First-time buyer relief means you pay 0% up to £300,000, then 5% on the portion between £300,001 and £500,000. If the property costs more than £500,000, the relief doesn't apply at all and you pay standard rates on the full price instead — so it's worth checking both scenarios if you're close to that threshold.",
  },
  {
    question: "Is stamp duty due on inherited property?",
    answer:
      "Generally, no — inheriting a property isn't a purchase, so there's no SDLT to pay simply because you've become the owner through a will or intestacy. Where SDLT can apply is a related but different scenario: if you later buy out another beneficiary's share (a transfer of equity) and take on a proportion of any outstanding mortgage debt as part of that deal, SDLT may be due on the value of the debt you've taken on, above the usual thresholds.",
  },
  {
    question: "Can I add stamp duty to my mortgage?",
    answer:
      "Many lenders will let you borrow more to cover your SDLT bill rather than paying it in cash, provided it still fits within their maximum loan-to-value and affordability checks. It's worth doing the maths first, though — spreading a stamp duty bill across a 25 or 30-year mortgage term means paying interest on it the whole way through, which can add up to considerably more than the original amount. Our take-home pay calculator can help you check what you can comfortably afford before deciding.",
  },
  {
    question: "Do I pay stamp duty on a shared ownership property?",
    answer:
      "Yes, but you get a choice in how it's calculated. You can elect to pay SDLT upfront on the full market value of the property (which then covers you for staircasing up to 80% ownership without further SDLT), or pay SDLT only on the share you're initially buying, with further amounts potentially due as you staircase to a larger share later. Which option works out cheaper depends on how quickly you expect to increase your share.",
  },
  {
    question: "What happens if I don't pay stamp duty on time?",
    answer:
      "HMRC charges an initial £100 fixed penalty for a late SDLT return, with further penalties if it remains outstanding for longer, plus daily interest accruing on any unpaid tax from the due date until it's settled. In more serious or prolonged cases, HMRC can also open a wider compliance check into the transaction. Since SDLT is due within 14 days of completion, it's worth confirming with your solicitor early on that it's been filed and paid.",
  },
];

export function ArticleContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        You&apos;ve found the perfect property, agreed a price, and you&apos;re counting
        down to completion — but before anyone hands over any keys, HMRC wants their
        cut. Stamp Duty Land Tax (SDLT) is one of the biggest one-off costs of buying
        property in England and Northern Ireland, and the rates and thresholds have
        shifted more than once in the last few years, which makes it easy to end up
        working from an out-of-date figure.
      </p>
      <p>
        This guide walks through exactly how much stamp duty you&apos;ll pay in 2026,
        whether you&apos;re a first-time buyer, moving to your next home, or adding to a
        buy-to-let portfolio. It&apos;s written for anyone about to buy a home in the
        UK — and if money and property calculations are your thing more generally, this
        sits in our{" "}
        <Link href="/categories/finance">Finance category</Link>, alongside our other UK
        money calculators.
      </p>

      <CalloutBox
        title="Skip straight to your number"
        description="Enter your property price and buyer type to get an exact SDLT figure, band by band."
        href="/calculators/stamp-duty-calculator-uk"
        cta="Open the calculator"
      />

      <h2 id="what-is-stamp-duty">What is stamp duty?</h2>
      <p>
        Stamp Duty Land Tax is a tax charged by HMRC on property and land purchases in
        England and Northern Ireland above a certain price. It&apos;s calculated as a
        percentage of the purchase price, using a banded structure similar to Income
        Tax — the rate increases in slices as the price rises, rather than one flat rate
        applying to the whole amount.
      </p>
      <p>
        Scotland and Wales charge their own, separate property transaction taxes instead
        of SDLT. In Scotland, it&apos;s called Land and Buildings Transaction Tax
        (LBTT), collected by Revenue Scotland. In Wales, it&apos;s Land Transaction Tax
        (LTT), collected by the Welsh Revenue Authority. Both work on a similar sliced-band
        principle to SDLT, but with their own thresholds and rates — covered in full
        further down this guide.
      </p>
      <p>
        SDLT (or LBTT/LTT) is due within <strong>14 days of completion</strong> — the
        day you legally become the owner — and it&apos;s always the{" "}
        <strong>buyer</strong> who pays, never the seller. In practice, your solicitor
        or conveyancer usually handles the calculation and filing for you as part of the
        purchase process, and the amount is typically settled alongside your other
        completion funds. Skip the maths with our{" "}
        <Link href="/calculators/stamp-duty-calculator-uk">
          free UK stamp duty calculator
        </Link>{" "}
        — it covers SDLT, LBTT and LTT in one place.
      </p>

      <h2 id="2026-sdlt-rates">2026 SDLT rates for standard buyers</h2>
      <p>
        If you&apos;re moving home and don&apos;t qualify for first-time buyer relief or
        face an additional-property surcharge, you&apos;ll pay SDLT at the standard 2026
        rates below. These apply to the portion of the price that falls within each
        band — not the full purchase price at a single rate.
      </p>

      <RateTable
        caption="2026 SDLT bands for standard (next-home) buyers in England and Northern Ireland"
        columns={["Portion of property price", "SDLT rate"]}
        rows={[
          ["Up to £125,000", "0%"],
          ["£125,001 to £250,000", "2%"],
          ["£250,001 to £925,000", "5%"],
          ["£925,001 to £1.5 million", "10%"],
          ["Over £1.5 million", "12%"],
        ]}
      />

      <h3>How the &ldquo;slice&rdquo; system actually works</h3>
      <p>
        A common misunderstanding is thinking stamp duty is a flat rate applied to the
        entire purchase price — so a £400,000 house in the 5% band would mean a £20,000
        bill. That&apos;s not how it works. Each band is taxed separately, like filling a
        series of buckets: the first £125,000 sits in the 0% bucket, the next slice sits
        in the 2% bucket, and so on, until you reach the top of the price. You only pay
        the higher rate on the portion of the price that falls into that higher band.
      </p>

      <h3>Worked example: a £400,000 property</h3>
      <p>
        Here&apos;s exactly how a £400,000 purchase breaks down for a standard,
        non-first-time buyer in England or Northern Ireland:
      </p>

      <RateTable
        caption="Worked example: SDLT on a £400,000 property for a standard buyer"
        columns={["Band", "Taxable amount", "Rate", "SDLT due"]}
        rows={[
          ["£0 – £125,000", "£125,000", "0%", "£0"],
          ["£125,001 – £250,000", "£125,000", "2%", "£2,500"],
          ["£250,001 – £400,000", "£150,000", "5%", "£7,500"],
          ["Total", "£400,000", "—", "£10,000"],
        ]}
        highlightLastRow
      />
      <p>
        That&apos;s a total SDLT bill of <strong>£10,000</strong> — an effective rate of
        2.5% of the full purchase price, even though part of it was taxed at 5%. Before
        you commit to an offer at this level, it&apos;s worth checking your{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">take-home pay</Link> too,
        so the mortgage and this extra upfront cost both comfortably fit your budget.
      </p>

      <h2 id="first-time-buyer-relief">First-time buyer stamp duty relief 2026</h2>
      <p>
        If this is your first property purchase, you&apos;re very likely paying less
        than the standard rates above — sometimes nothing at all.
      </p>
      <h3>Do you qualify?</h3>
      <p>
        To claim first-time buyer relief, you (and anyone you&apos;re buying with) must
        never have owned a residential property anywhere in the world before, and you
        must intend to live in the property as your main home. If you&apos;re buying
        jointly and even one buyer has owned property previously, the relief isn&apos;t
        available on that purchase.
      </p>
      <h3>2026 first-time buyer rates</h3>
      <RateTable
        caption="2026 first-time buyer SDLT relief rates"
        columns={["Portion of property price", "SDLT rate"]}
        rows={[
          ["Up to £300,000", "0%"],
          ["£300,001 to £500,000", "5%"],
          ["Over £500,000", "No relief — standard rates apply to the full price"],
        ]}
      />
      <p>
        That last row matters: the relief isn&apos;t tapered away gradually above
        £500,000 — it disappears entirely, and standard rates apply to the whole
        purchase price instead, not just the portion above the threshold.
      </p>
      <h3>Worked example: a first-time buyer at £500,000</h3>
      <p>
        A first-time buyer purchasing at exactly £500,000 pays 0% on the first £300,000
        and 5% on the remaining £200,000, which comes to <strong>£10,000</strong>.
        Compare that with the standard rates a home mover would pay on the same
        property — £15,000, using the banded calculation from the section above — and
        the relief saves a first-time buyer <strong>£5,000</strong> at this price point.
        The saving is even bigger at lower prices: anything up to £300,000 is
        completely SDLT-free for a first-time buyer, while a home mover would still pay
        SDLT on the portion above £125,000.
      </p>
      <p>
        See how much you&apos;ll save with our{" "}
        <Link href="/calculators/stamp-duty-calculator-uk">
          first-time buyer stamp duty calculator
        </Link>{" "}
        — just select &ldquo;first-time buyer&rdquo; as your buyer type and enter your
        property price.
      </p>

      <h2 id="additional-property-surcharge">
        Additional property surcharge (buy-to-let, second homes)
      </h2>
      <p>
        Buying a property that isn&apos;t going to be your only or main residence —
        a buy-to-let, a second home, a holiday home, or a purchase made through a
        limited company — triggers a <strong>5% surcharge</strong> on top of the
        standard SDLT bands in 2026. Crucially, this surcharge applies to the{" "}
        <em>entire</em> purchase price, including the portion that would otherwise fall
        into the 0% band for a standard buyer.
      </p>
      <h3>When the surcharge doesn&apos;t apply</h3>
      <p>
        If you&apos;re selling your existing main home and buying a new one to replace
        it, the surcharge generally doesn&apos;t apply, even though you technically own
        two properties for a short overlap period — provided the sale of your old main
        residence completes on the same day, or you sell it within a set window after
        the new purchase (HMRC allows a refund of the surcharge if your previous main
        home is sold within three years of the new purchase). The surcharge is aimed at
        buyers who are keeping or adding an additional property, not people who are
        simply moving house.
      </p>
      <h3>Worked example: a £300,000 buy-to-let</h3>
      <p>
        A landlord buying a £300,000 buy-to-let pays the standard SDLT on that price —{" "}
        <strong>£5,000</strong>, using the same banded calculation as any other
        buyer — plus the flat 5% surcharge on the full price, which adds{" "}
        <strong>£15,000</strong>. That&apos;s a total SDLT bill of{" "}
        <strong>£20,000</strong>, four times what a first-time buyer would pay on an
        identical property. Once you know your surcharge, it&apos;s worth running the
        numbers through our{" "}
        <Link href="/calculators/mortgage-calculator-uk">mortgage calculator</Link> to
        see what the full purchase — deposit, SDLT and monthly repayments — actually
        costs. A dedicated buy-to-let mortgage calculator, covering rental yield and
        interest-only repayments, is coming soon to Calculio.
      </p>

      <h2 id="non-resident-surcharge">Non-UK resident surcharge</h2>
      <p>
        On top of any other rate that applies, buyers who don&apos;t meet HMRC&apos;s UK
        residence test for a purchase face a further{" "}
        <strong>2% surcharge</strong>. This stacks on top of standard rates, first-time
        buyer rates, or the additional-property surcharge — whichever applies to your
        purchase.
      </p>
      <p>
        Broadly, you&apos;re treated as UK resident for a transaction if you&apos;re
        present in the UK for at least <strong>183 days</strong> during the 12 months
        ending on the day of completion. Spend less time than that in the UK around your
        purchase, and the 2% surcharge applies regardless of your nationality or where
        your money comes from.
      </p>
      <p>
        For example, a non-UK resident buying a standard £300,000 home (not an
        additional property) would pay the usual £5,000 standard SDLT, plus 2% of the
        full price — £6,000 — for a total of <strong>£11,000</strong>. Combine
        non-residence with an additional-property purchase, and the surcharges stack
        further still: standard rates, plus 5%, plus 2%, on the same £300,000 property
        would total roughly <strong>£26,000</strong> once every layer is added together.
      </p>

      <h2 id="scotland-wales-rates">Scotland (LBTT) and Wales (LTT) — different rules</h2>
      <p>
        If your property is in Scotland or Wales, SDLT doesn&apos;t apply at all — you&apos;ll
        pay LBTT or LTT instead, under their own separate rate tables.
      </p>

      <h3>LBTT rates in Scotland (2026)</h3>
      <RateTable
        caption="2026 LBTT bands for standard buyers in Scotland"
        columns={["Portion of property price", "LBTT rate"]}
        rows={[
          ["Up to £145,000", "0%"],
          ["£145,001 to £250,000", "2%"],
          ["£250,001 to £325,000", "5%"],
          ["£325,001 to £750,000", "10%"],
          ["Over £750,000", "12%"],
        ]}
      />
      <p>
        First-time buyers in Scotland get a higher nil-rate band — up to{" "}
        <strong>£175,000</strong> rather than £145,000 — through separate first-time
        buyer relief. Additional properties, including buy-to-lets and second homes,
        face the Additional Dwelling Supplement (ADS), currently a flat{" "}
        <strong>8%</strong> on top of the standard LBTT due, applied to the full
        purchase price.
      </p>

      <h3>LTT rates in Wales (2026)</h3>
      <RateTable
        caption="2026 LTT main residential bands for standard buyers in Wales"
        columns={["Portion of property price", "LTT rate"]}
        rows={[
          ["Up to £225,000", "0%"],
          ["£225,001 to £400,000", "6%"],
          ["£400,001 to £750,000", "7.5%"],
          ["£750,001 to £1.5 million", "10%"],
          ["Over £1.5 million", "12%"],
        ]}
      />
      <p>
        Wales doesn&apos;t offer first-time buyer relief — it was abolished when LTT
        replaced SDLT in 2018, so first-time buyers pay the same main rates as any other
        buyer. Additional properties instead face the Welsh higher residential rates,
        which start at 5% on the lowest band (rather than 0%) and rise to 16% at the top
        of the scale, replacing the main rates entirely rather than adding a flat
        surcharge on top.
      </p>

      <h2 id="when-how-to-pay">When and how to pay stamp duty</h2>
      <p>
        In the vast majority of purchases, your solicitor or conveyancer handles stamp
        duty as part of the conveyancing process — calculating what&apos;s due, filing
        the return, and arranging payment from your completion funds, so you don&apos;t
        need to deal with HMRC directly.
      </p>
      <p>
        The legal deadline is <strong>14 days from the date of completion</strong>. This
        involves filing an SDLT return (form SDLT1) and paying any tax due. Missing the
        deadline triggers an immediate{" "}
        <strong>£100 penalty</strong>, with further penalties and daily interest adding
        up the longer it remains unpaid. For full detail on filing requirements, HMRC
        publishes official{" "}
        <a
          href="https://www.gov.uk/stamp-duty-land-tax"
          target="_blank"
          rel="noopener noreferrer"
        >
          stamp duty guidance on GOV.UK
        </a>
        .
      </p>

      <h2 id="reduce-stamp-duty">Common ways to reduce your stamp duty</h2>
      <p>
        A few legitimate reliefs and classifications can reduce an SDLT bill, though
        most only apply in specific circumstances:
      </p>
      <ul>
        <li>
          <strong>Multiple Dwellings Relief (MDR)</strong> — this relief, which reduced
          SDLT for buyers purchasing more than one dwelling in a single transaction, was{" "}
          <strong>abolished for transactions completing on or after 1 June 2024</strong>.
          It&apos;s no longer available for most new purchases.
        </li>
        <li>
          <strong>Uninhabitable property claims</strong> — a property genuinely unfit
          for habitation at the point of purchase may qualify for lower non-residential
          rates rather than residential ones. HMRC scrutinises these claims closely, and
          several tribunal cases have gone against buyers who overstated a property&apos;s
          condition.
        </li>
        <li>
          <strong>Mixed-use classification</strong> — a property with a genuine
          non-residential element, such as attached land used commercially, may qualify
          for mixed-use rates, which are generally lower and don&apos;t attract the
          additional-property surcharge.
        </li>
        <li>
          <strong>Chattels apportionment</strong> — SDLT is only due on the property
          itself, not on fixtures, fittings or furniture included in the sale. Genuinely
          apportioning part of the agreed price to chattels can reduce the taxable
          amount, but the apportionment must reflect a realistic market value.
        </li>
      </ul>
      <p>
        A word of caution: HMRC has been actively cracking down on aggressive SDLT
        reclaim schemes, particularly around uninhabitability and mixed-use claims sold
        by third-party agents on a no-win-no-fee basis. If a refund claim sounds too
        good to be true, it&apos;s worth getting independent advice from a qualified tax
        adviser before proceeding — you remain liable for the tax (plus penalties and
        interest) if a claim is later rejected, even if someone else submitted it on
        your behalf.
      </p>

      <h2 id="faq">Frequently asked questions</h2>
    </div>
  );
}
