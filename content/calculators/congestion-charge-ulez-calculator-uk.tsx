import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "What is the difference between the Congestion Charge and ULEZ?",
    answer:
      "The Congestion Charge applies to anyone driving into central London during charging hours, regardless of their vehicle's emissions. ULEZ, the Ultra Low Emission Zone, charges vehicles that do not meet certain emissions standards, across a much wider area of London, and the two zones overlap in the centre.",
  },
  {
    question: "Are electric cars exempt from these charges?",
    answer:
      "Electric cars are exempt from ULEZ, since they produce no tailpipe emissions. The Congestion Charge is a separate scheme, and its rules around discounts for cleaner vehicles have changed over time, so it is worth checking the current position on the TfL website for electric vehicles.",
  },
  {
    question: "How do I know if my car meets the ULEZ standard?",
    answer:
      "Petrol cars generally need to meet Euro 4, which covers most cars registered from 2006 onwards. Diesel cars need to meet the stricter Euro 6, which generally covers cars registered from September 2015 onwards. Check your V5C logbook or the TfL vehicle checker if you are not sure.",
  },
  {
    question: "What happens if I do not pay the charge?",
    answer:
      "Driving in the zone without paying, or without a valid exemption, can lead to a penalty charge notice. Charges usually need to be paid by midnight the day after you travelled, so it is worth setting up automatic payment if you drive into the zone regularly.",
  },
  {
    question: "Do these charges apply on weekends and bank holidays?",
    answer:
      "ULEZ operates every day of the year, including weekends and bank holidays. Congestion Charge hours vary, so it is worth checking the current operating days and times on the TfL website, since these have changed more than once in recent years.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Driving into London can come with more than one daily charge stacked on
        top of each other, and the rules around which vehicles pay what are not
        always obvious. This calculator works out your likely daily, weekly and
        annual cost based on your vehicle and how often you drive in.
      </p>
      <p>
        Whether you commute into the city regularly or are just planning an
        occasional trip, knowing the real cost in advance avoids an unwelcome
        surprise.
      </p>

      <h2>How to use the calculator</h2>
      <p>
        Choose which zone or zones you drive into, your fuel type, and your
        vehicle&apos;s Euro emissions standard if it is not electric. Enter how many
        days a week you typically drive in, and the calculator shows your daily
        charge, plus weekly, monthly and annual estimates.
      </p>

      <h2>How the charges work</h2>
      <p>
        The Congestion Charge applies to most vehicles driving within central
        London during charging hours, regardless of how clean the vehicle is.
        ULEZ works differently, charging vehicles that do not meet minimum
        emissions standards, across a much larger area than the Congestion Charge
        zone. Petrol vehicles generally need to meet Euro 4 standards to avoid the
        ULEZ charge, roughly covering cars first registered from 2006 onwards.
        Diesel vehicles need the stricter Euro 6 standard, generally covering cars
        registered from September 2015 onwards. Fully electric vehicles are exempt
        from ULEZ entirely.
      </p>
      <p>
        Both zones only charge on specific days and hours, not around the clock,
        and both schemes have changed their rules and boundaries more than once
        since they were introduced. Because of this, the figures in this
        calculator should be treated as a helpful estimate for planning purposes,
        with the final word always belonging to the current information published
        directly by Transport for London.
      </p>

      <h2>Why this matters more since 2025</h2>
      <p>
        Vehicle rules around London, and around vehicle taxation more broadly,
        have shifted quite a bit recently. Electric vehicles, once treated
        favourably across almost every motoring charge, have started losing some
        of those advantages as adoption has grown, similar to the end of the
        Vehicle Excise Duty exemption for electric cars from April 2025. It is
        worth checking the current rules for your specific vehicle rather than
        relying on older assumptions about what electric or hybrid ownership
        exempts you from.
      </p>

      <h2>Worked example</h2>
      <p>
        Take a <strong>diesel car meeting Euro 5</strong>, one standard below the
        Euro 6 needed for ULEZ compliance, driven into both the Congestion Charge
        zone and ULEZ <strong>5 days a week</strong>.
      </p>
      <p>
        Since the car does not meet Euro 6, it is not ULEZ compliant, so both
        charges apply on every entry. That comes to around{" "}
        <strong>£27.50 a day</strong>, <strong>£137.50 a week</strong>, and around{" "}
        <strong>£7,150 a year</strong> for someone driving in on a regular working
        pattern. Swap that same driver into a Euro 6 diesel or any petrol car
        meeting Euro 4, and the ULEZ charge disappears entirely, leaving only the
        Congestion Charge portion of the bill.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        A common mistake is assuming an older but well maintained car will be fine
        because it still runs well. ULEZ compliance depends entirely on the
        emissions standard the vehicle was built to meet, not how well it has been
        looked after, so a car in excellent condition can still be non-compliant
        if it predates the relevant Euro standard. Another mistake is forgetting
        that these are two genuinely separate charges that can both apply on the
        same journey, not alternatives to each other, which is why the combined
        daily cost can catch drivers out.
      </p>
      <p>
        It is also worth double checking current rates and rules before relying
        heavily on any estimate, including this one. Transport for London reviews
        charges, zone boundaries and exemptions periodically, so figures that were
        accurate a year or two ago may no longer be current.
      </p>

      <h2>Related calculators</h2>
      <p>
        Once you know your daily charges, our{" "}
        <Link href="/calculators/road-tax-calculator-uk">road tax calculator</Link>{" "}
        and <Link href="/blog/uk-car-tax-2026-ved-guide">car tax guide</Link> cover
        the rest of your annual vehicle costs, and our{" "}
        <Link href="/calculators/mpg-calculator-uk">MPG calculator</Link> and{" "}
        <Link href="/calculators/fuel-cost-calculator-uk">
          fuel cost calculator
        </Link>{" "}
        can help you work out fuel spending on top. It is also worth checking your{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay
        </Link>{" "}
        to see how these charges fit into your wider monthly budget, since a
        regular commute into central London can add up to a significant cost over
        a year. If driving in is proving expensive, it may be worth comparing the
        cost against public transport for the same journey.
      </p>
    </div>
  );
}
