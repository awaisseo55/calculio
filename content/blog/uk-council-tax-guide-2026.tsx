import Link from "next/link";
import { CalloutBox } from "@/components/blog/callout-box";
import { RateTable } from "@/components/blog/rate-table";
import type { FaqItem } from "@/lib/types";
import type { TocItem } from "@/components/blog/table-of-contents";

export const toc: TocItem[] = [
  { id: "what-is-council-tax", label: "What is council tax and who pays it" },
  { id: "bands-explained", label: "Council tax bands A to H explained" },
  { id: "how-calculated", label: "How council tax is calculated" },
  { id: "discounts-exemptions", label: "Discounts and exemptions" },
  { id: "non-payment", label: "What happens if you do not pay" },
  { id: "challenge-band", label: "How to challenge your band" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "try-calculator", label: "Calculate your council tax" },
];

export const faq: FaqItem[] = [
  {
    question: "What is the average council tax bill in the UK for 2026/27?",
    answer:
      "It varies significantly by council and region, since each local authority sets its own rate on top of police, fire and, in some areas, parish precepts. Band D is used as the standard reference point for comparing councils, but your own bill depends on your specific band and where you live, so it is worth checking your own council's published rates or using an estimate calculator for guidance.",
  },
  {
    question: "How do I find out my council tax band?",
    answer:
      "You can check your council tax band for free using your postcode on GOV.UK if you are in England or Wales, or through the Scottish Assessors Association website if you are in Scotland. Your existing council tax bill will also show your current band clearly.",
  },
  {
    question: "Can two identical houses be in different council tax bands?",
    answer:
      "Yes, this can happen. Bands are based on a property's estimated value on 1 April 1991 in England, or 1 April 2003 in Wales, not its current value. If one house was extended, improved, or in different condition than a similar neighbouring property at that valuation date, they can end up in different bands even if they look identical today.",
  },
  {
    question: "Do students pay council tax?",
    answer:
      "A property where every resident is a full-time student is exempt from council tax entirely. If a household has a mix of students and non-students, the non-student residents are usually liable, though a household of exactly one non-student and the rest students may qualify for the 25% single occupant discount instead.",
  },
  {
    question: "What is the second home council tax premium?",
    answer:
      "Since April 2025, councils in England have had the power to charge a premium of up to 100% on most furnished second homes that are not anyone's main residence, effectively doubling the standard bill. Not every council applies the maximum premium, and certain exemptions exist, so it is worth checking directly with the relevant council.",
  },
  {
    question: "Can my council tax band go up if I challenge it?",
    answer:
      "Yes. When you ask the Valuation Office Agency to review your band, they reassess it based on the evidence, which can result in your band moving up as well as down. It is sensible to research comparable properties carefully before challenging, rather than assuming a review can only reduce your bill.",
  },
];

export function ArticleContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Council tax is one of the biggest fixed costs of running a UK
        household, and yet most people only think about it once a year when
        the bill lands. Bands, discounts, premiums and precepts all combine
        to produce your final figure, and the rules differ depending on
        whether you live alone, own a second home, or qualify for one of
        several lesser-known exemptions. This guide walks through exactly how
        council tax works for 2026/27, and you can get your own estimate any
        time using our{" "}
        <Link href="/calculators/council-tax-calculator-uk">
          council tax calculator
        </Link>
        .
      </p>

      <h2 id="what-is-council-tax">What is council tax and who pays it</h2>
      <p>
        Council tax is an annual charge, usually collected in monthly
        instalments, that funds local services in your area. It is set and
        collected by your local council, which is why bills differ so much
        from one area to another, even between neighbouring towns. The money
        raised typically funds a wide range of local services: waste
        collection, road maintenance, libraries, and social services, plus a
        portion passed to your local police and fire services through
        separate precepts added on top of the council&apos;s own charge.
      </p>
      <p>
        In most cases, the person liable to pay is the resident who owns the
        property or holds the tenancy, with a clear hierarchy used when more
        than one person could be liable, generally starting with a resident
        freeholder, then a resident leaseholder, then a resident tenant.
        Where a property is empty, the owner is usually liable instead. If
        you are weighing up whether owning or renting makes more sense for
        your situation, our{" "}
        <Link href="/calculators/mortgage-calculator-uk">
          mortgage calculator
        </Link>{" "}
        can help you compare the monthly cost of buying against what you pay
        now, with council tax as one of several ongoing costs to factor in
        alongside it.
      </p>
      <p>
        Council tax applies to most residential properties across England,
        Scotland and Wales. Northern Ireland uses a different system,
        domestic rates, based on rental values rather than the banded system
        described in this guide, so if you are moving there, expect a
        differently structured bill entirely.
      </p>
      <p>
        If you are budgeting for a house move, council tax is just one line
        in a much longer list of costs. Our{" "}
        <Link href="/blog/how-much-stamp-duty-uk-2026">stamp duty guide</Link>{" "}
        covers the upfront tax due on completion, and our guide to{" "}
        <Link href="/blog/first-home-cost-uk-2026">
          the real cost of buying your first home
        </Link>{" "}
        pulls every cost, deposit, fees, and ongoing bills like council tax,
        together into one worked example.
      </p>

      <h2 id="bands-explained">Council tax bands A to H explained</h2>
      <p>
        Every residential property in England, Scotland and Wales is placed
        into one of eight council tax bands, from A to H, based on an
        estimated property value at a fixed historical valuation date, not
        today&apos;s market value. In England, that date is 1 April 1991. In
        Wales, properties were revalued and rebanded based on 1 April 2003
        values. In Scotland, the same 1991 valuation date as England is used.
        This is why a home that has doubled in value since the 1990s usually
        stays in the same council tax band, since the banding freezes the
        relative value comparison at that point in time rather than tracking
        current prices.
      </p>
      <RateTable
        caption="England council tax bands and 1991 value ranges"
        columns={["Band", "1991 value range", "Example property type"]}
        rows={[
          ["A", "Up to £40,000", "Small terraced house or flat"],
          ["B", "£40,001 to £52,000", "Terraced house"],
          ["C", "£52,001 to £68,000", "Terraced or small semi-detached"],
          ["D", "£68,001 to £88,000", "Semi-detached house (standard reference band)"],
          ["E", "£88,001 to £120,000", "Larger semi-detached or small detached"],
          ["F", "£120,001 to £160,000", "Detached house"],
          ["G", "£160,001 to £320,000", "Large detached house"],
          ["H", "More than £320,000", "Very large or high-value property"],
        ]}
      />
      <p>
        Band D is used as the standard reference point for comparing council
        tax levels between areas, since every other band is a fixed fraction
        of the Band D charge. Bands A to C pay progressively less than Band
        D, while Bands E to H pay progressively more, all the way up to
        Band H, which pays exactly double the Band D rate. You can check your
        own property&apos;s band for free on GOV.UK, or estimate your bill
        directly with our{" "}
        <Link href="/calculators/council-tax-calculator-uk">
          council tax calculator
        </Link>
        , which lets you select your band and region for an instant
        estimate.
      </p>
      <p>
        Wales is a partial exception to the eight-band structure. Following
        its 2003 revaluation, Wales added a ninth band, Band I, for the very
        highest value properties, and uses its own set of value ranges rather
        than the England figures shown above. Scotland kept the same eight
        bands and the same 1991 valuation date as England, but sets its own
        Band D charge and local precepts independently through its own
        councils. If you are comparing a move between nations, do not assume
        a property&apos;s English band automatically tells you what it would be
        banded at in Wales or Scotland.
      </p>

      <h2 id="how-calculated">How council tax is calculated</h2>
      <p>
        Each council sets its own Band D charge every year, based on its
        budget requirements, government funding, and any additional
        precepts. Every other band&apos;s charge is then worked out as a fixed
        proportion of that Band D figure: Band A pays six ninths, Band E
        pays eleven ninths, Band H pays eighteen ninths (double), and so on
        through the full A to H scale. This means a council raising its Band
        D rate by 5% raises every other band&apos;s bill by roughly the same
        percentage, since the underlying ratios between bands are fixed by
        law and do not change.
      </p>
      <p>
        On top of the council&apos;s own charge, most bills include separate
        precepts: a police and crime commissioner precept, a fire and rescue
        precept, and in some areas, a parish or town council precept or a
        mayoral precept. Each of these is set independently and added to
        your total bill, which is why two councils with identical Band D
        rates for their own services can still produce different total bills
        once precepts are included.
      </p>
      <p>
        As a worked example, take a Band D property in an area with a
        council Band D rate of <strong>£1,950</strong>, plus a police precept
        of <strong>£260</strong>, a fire precept of <strong>£85</strong>, and
        no parish precept. The total bill comes to{" "}
        <strong>£2,295</strong> a year, or around{" "}
        <strong>£191</strong> a month if split over 12 instalments, though
        most councils default to 10 monthly payments with February and March
        free unless you ask to spread it over 12. Try entering your own band
        and region into our{" "}
        <Link href="/calculators/council-tax-calculator-uk">
          council tax calculator
        </Link>{" "}
        for a personalised estimate, including a breakdown by service.
      </p>
      <p>
        Councils also face a limit on how much they can raise Band D council
        tax each year without holding a local referendum first. Most councils
        are restricted to a set percentage increase, with an additional
        allowance often permitted for authorities responsible for adult
        social care, and a small number of councils are given a different,
        specifically approved threshold each year by central government. Any
        increase above the relevant threshold has to be put to local voters,
        which is why council tax rises, while frequent, rarely jump
        dramatically in a single year for most households.
      </p>

      <CalloutBox
        title="Try our council tax calculator"
        description="Get an instant estimate of your annual and monthly council tax bill by band and region, including single occupant discount and second home premium."
        href="/calculators/council-tax-calculator-uk"
        cta="Calculate my council tax"
      />

      <h2 id="discounts-exemptions">Discounts and exemptions</h2>
      <p>
        Council tax assumes at least two adults live in a property, so a
        single adult living alone qualifies for a 25% single occupant
        discount, which needs to be applied for through your council rather
        than being given automatically. Full-time students are treated
        generously: a property occupied entirely by full-time students is
        exempt from council tax altogether, and a household with just one
        non-student resident may still qualify for the 25% single occupant
        discount, since students are effectively disregarded for this
        calculation.
      </p>
      <p>
        People who are severely mentally impaired, along with the person
        they live with in some circumstances, can also qualify for a
        discount or exemption, and a disability reduction scheme exists that
        can move a property&apos;s effective band down by one full band if it has
        been adapted to meet the needs of a disabled resident, for example
        with a wheelchair-accessible room or an extra bathroom needed for
        their condition.
      </p>
      <p>
        Empty properties are treated differently by different councils.
        Some offer a short discount for a property that is genuinely
        unoccupied and unfurnished, though this has become less generous over
        recent years, and many councils now apply an empty homes premium
        instead once a property has been empty for an extended period,
        specifically to discourage properties being left vacant long term.
        Second homes, meanwhile, can now attract a premium of up to 100% in
        England since April 2025, which is worth checking carefully if you
        are weighing up the true cost of owning a second property. Our guide
        to{" "}
        <Link href="/blog/first-home-cost-uk-2026">
          the real cost of buying your first home
        </Link>{" "}
        covers council tax as one of several ongoing costs new buyers often
        underestimate.
      </p>
      <p>
        A lesser-known discount applies to annexes: a self-contained annexe
        used by the resident&apos;s family, or one left empty because it is
        unsuitable to let out separately, can qualify for a 50% reduction on
        top of any other discount that applies. Rules like this vary in
        detail between councils, so if your property has an annexe, granny
        flat, or similar separate living space, it is always worth checking
        directly with your council rather than assuming the standard rate
        applies automatically.
      </p>

      <h2 id="non-payment">What happens if you do not pay</h2>
      <p>
        Missing a single council tax instalment usually triggers a reminder
        letter from your council, giving you a short period to catch up.
        Continuing to miss payments after a reminder typically means losing
        the right to pay in instalments altogether, with the full remaining
        year&apos;s bill becoming due immediately. If it still goes unpaid, the
        council can apply to the magistrates&apos; court for a liability order,
        adding court costs to what you owe, and ultimately pursue enforcement
        through bailiffs (enforcement agents), deductions directly from
        wages or certain benefits, or in the most serious and rare cases, a
        committal hearing.
      </p>
      <p>
        Council tax is worth budgeting for alongside your mortgage, rather
        than treating it as an afterthought once you have moved in. Our{" "}
        <Link href="/calculators/mortgage-calculator-uk">
          mortgage calculator
        </Link>{" "}
        can help you check that your monthly repayment plus council tax and
        other bills still leaves a comfortable margin before you commit to a
        property.
      </p>
      <p>
        The single most useful thing to do if you are struggling to pay is
        to contact your council as early as possible, ideally before missing
        a payment altogether. Most councils offer revised payment plans, and
        many have a discretionary hardship fund or can point you towards
        wider support, including Council Tax Reduction schemes for people on
        a low income, which can significantly reduce what you owe rather
        than simply delaying it.
      </p>

      <h2 id="challenge-band">How to challenge your band</h2>
      <p>
        If you have good reason to believe your council tax band is wrong,
        for example because directly comparable neighbouring properties are
        in a noticeably lower band, or your property was banded incorrectly
        when first assessed, you can ask the Valuation Office Agency (or the
        Scottish Assessors Association in Scotland) to review it. Before
        submitting a challenge, it is worth checking the bands of at least
        several similar properties nearby, ideally ones built around the same
        time with similar layouts, since a challenge based on a single
        comparison is much weaker evidence than a clear, consistent pattern.
      </p>
      <p>
        It is important to understand that a formal challenge can result in
        your band moving up as well as down, since the Valuation Office
        Agency reassesses the property properly rather than simply granting
        whatever change you request. Challenges also have time limits in
        some circumstances, particularly if you have recently moved into the
        property, so check the current process on GOV.UK before applying if
        you think your band may be incorrect.
      </p>

      <h2 id="faq">Frequently asked questions</h2>
    </div>
  );
}
