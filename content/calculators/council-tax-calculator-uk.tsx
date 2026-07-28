import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How is my council tax band decided?",
    answer:
      "Your council tax band is based on what your property was worth on 1 April 1991 in England, or 1 April 2003 in Wales, not what it is worth today. This means two similar-sized homes can be in different bands if one has been extended or improved a lot since that valuation date. You can check your band for free on GOV.UK using your postcode.",
  },
  {
    question: "What is the average council tax bill in the UK?",
    answer:
      "The average Band D council tax bill in England is a commonly quoted reference point, but it varies a lot by council, since each one sets its own rate and adds police, fire and, in some areas, parish precepts on top. Use this calculator's regional estimate as a general guide, then check your own council's website or your bill for the exact figure.",
  },
  {
    question: "Do I get a discount if I live alone?",
    answer:
      "Yes. A single adult living alone as their only or main home gets a 25% single occupant discount automatically once you apply through your council. If everyone in the property is a full-time student, the property can be exempt from council tax altogether, and there are further discounts and exemptions for people who are severely mentally impaired or who have certain disabilities.",
  },
  {
    question: "How much extra do second homes pay?",
    answer:
      "Since April 2025, councils in England have had the power to charge a premium of up to 100% (effectively double the standard bill) on most second homes that are furnished but not anyone's main residence. Not every council charges the full premium, and some exemptions apply, for example for job-related accommodation, so it is worth checking directly with the council where the property is located.",
  },
  {
    question: "What happens if I do not pay my council tax?",
    answer:
      "Missing a payment usually triggers a reminder, and continuing to miss payments can lead to the whole year's bill becoming due immediately, followed by a court summons, additional costs, and in some cases bailiff action or deductions from wages or benefits. If you are struggling, contact your council as early as possible, since most offer payment plans and some award discretionary hardship relief.",
  },
  {
    question: "Can I challenge my council tax band?",
    answer:
      "Yes, if you have good reason to think it is wrong, for example if very similar neighbouring properties are in a lower band. In England and Wales, you can ask the Valuation Office Agency to review your band, though be aware a challenge can result in your band moving up as well as down, so it is worth checking comparable properties carefully first.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Council tax is one of those bills that lands once a year but gets
        paid monthly, and working out exactly what you owe can be
        surprisingly fiddly once discounts, premiums and regional differences
        come into play. This calculator gives you a quick estimate of your
        annual and monthly council tax for 2026/27, based on your property
        band, region, and whether you qualify for a single occupant discount
        or face a second home premium.
      </p>

      <h2>How to use the council tax calculator</h2>
      <p>
        Start by picking your region, since council tax varies significantly
        across the UK depending on local spending needs and each council&apos;s own
        rate. Then select your property&apos;s council tax band, from A to H,
        which you can find on your existing bill or check for free on GOV.UK
        if you are unsure. Toggle the single occupant discount on if you are
        the only adult living in the property, or toggle second home on if
        the property is not your main residence, since the calculator applies
        whichever adjustment is relevant. The result shows your estimated
        annual bill, a monthly figure, and a rough breakdown of where the
        money goes.
      </p>

      <h2>How the calculation works</h2>
      <p>
        Council tax bands are not arbitrary: each band from A to H is a fixed
        fraction of the Band D charge, set out in law. Band D is treated as
        the baseline (nine ninths), Band A is six ninths of that figure, and
        Band H, the most expensive, is double Band D at eighteen ninths. This
        calculator starts from an illustrative regional average Band D
        figure, applies your band&apos;s multiplier, then layers on any
        discount or premium you have selected.
      </p>
      <p>
        A single occupant discount reduces the bill by 25%, since council tax
        assumes two or more adults live in a property by default. A second
        home premium works the other way, since many councils in England now
        add up to 100% on top of the standard charge for furnished homes that
        are not anyone&apos;s main residence. If you are looking at your own
        finances more broadly, our{" "}
        <Link href="/calculators/mortgage-calculator-uk">mortgage calculator</Link>{" "}
        and <Link href="/calculators/stamp-duty-calculator-uk">stamp duty calculator</Link>{" "}
        cover the bigger costs of owning a home, while council tax is one of
        the ongoing running costs on top.
      </p>

      <h2>Worked example</h2>
      <p>
        Take a semi-detached house in the <strong>South West</strong>, in{" "}
        <strong>Band D</strong>, occupied by a couple, so no single occupant
        discount applies. Using this calculator&apos;s regional average for
        the South West, the estimated annual bill comes out at roughly{" "}
        <strong>£2,485</strong>, or around <strong>£207 a month</strong> if
        split over 12 instalments, though most councils default to 10
        monthly payments with February and March free.
      </p>
      <p>
        Now imagine the same property is instead occupied by a single person
        living alone. Applying the 25% single occupant discount brings the
        bill down to around <strong>£1,864</strong> a year, a saving of
        roughly <strong>£621</strong>. If, on the other hand, the property
        was a furnished second home and the local council charged the full
        100% premium, the bill would roughly double to around{" "}
        <strong>£4,970</strong> a year instead. Try adjusting the region,
        band and toggles above to see how your own situation compares.
      </p>

      <h2>Discounts and exemptions worth checking</h2>
      <p>
        Beyond the single occupant discount, a property where everyone living
        there is a full-time student is exempt from council tax completely.
        There is a disability reduction that can move a property down a whole
        band if it has been adapted for a resident with a qualifying
        disability, and a support scheme for people assessed as severely
        mentally impaired. Empty and unfurnished properties sometimes get a
        short council tax exemption too, though many councils have reduced or
        removed this in recent years, and some now add an empty homes
        premium instead for properties left empty long term. It is always
        worth checking your specific council&apos;s current policy, since
        these rules are set locally within the national framework.
      </p>

      <h2>Common mistakes people make with council tax</h2>
      <p>
        A common mistake is forgetting to cancel the single occupant discount
        when someone moves in with you, whether a partner, adult child or
        lodger, since councils can back-charge and add penalties if they find
        out later that a discount was claimed incorrectly. Another is
        assuming your council tax band matches a neighbour&apos;s simply
        because the houses look similar, when in fact small differences in
        the 1991 valuation, like an extension built shortly before that date,
        can put otherwise similar homes in different bands.
      </p>
      <p>
        People also sometimes miss that moving home does not automatically
        transfer any single occupant discount or exemption: you need to tell
        your new council directly, and separately close your account with
        your old one, to avoid a gap in your records or an unexpected bill.
        Finally, ignoring reminder letters rather than contacting the council
        early is one of the most costly mistakes, since the consequences of
        non-payment escalate quickly from a simple missed instalment to the
        full year&apos;s bill becoming due at once.
      </p>

      <h2>Related calculators</h2>
      <p>
        If you are weighing up the full cost of a house move, our{" "}
        <Link href="/calculators/stamp-duty-calculator-uk">stamp duty calculator</Link>{" "}
        and <Link href="/calculators/mortgage-calculator-uk">mortgage calculator</Link>{" "}
        cover the upfront and monthly costs of buying, while our{" "}
        <Link href="/calculators/savings-goal-calculator-uk">savings goal calculator</Link>{" "}
        can help you plan towards a deposit. For a full breakdown of
        everything a first-time buyer needs to budget for, including council
        tax as an ongoing cost, see our guide to{" "}
        <Link href="/blog/first-home-cost-uk-2026">the real cost of buying your first home</Link>.
      </p>
    </div>
  );
}
