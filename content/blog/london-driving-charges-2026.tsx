import Link from "next/link";
import { CalloutBox } from "@/components/blog/callout-box";
import { RateTable } from "@/components/blog/rate-table";
import type { FaqItem } from "@/lib/types";
import type { TocItem } from "@/components/blog/table-of-contents";

export const toc: TocItem[] = [
  { id: "what-is-ulez", label: "What is the ULEZ?" },
  { id: "what-is-congestion-charge", label: "What is the Congestion Charge?" },
  { id: "combined-cost", label: "The combined daily cost" },
  { id: "whos-exempt", label: "Which vehicles are exempt?" },
  { id: "monthly-cost", label: "What it costs over a working month" },
  { id: "how-to-pay", label: "How to pay and avoid a penalty" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "try-calculator", label: "Work out your own driving costs" },
];

export const faq: FaqItem[] = [
  {
    question: "How much is the ULEZ charge in London?",
    answer:
      "The ULEZ daily charge is £12.50 for non-compliant cars, vans and motorbikes driving within the zone. It applies every day of the year, including weekends and bank holidays, with no exceptions for time of day.",
  },
  {
    question: "How much is the Congestion Charge?",
    answer:
      "The Congestion Charge is £15 a day for driving within the central London zone, charged on top of the ULEZ if your vehicle also isn't ULEZ compliant and you're driving in both zones at once.",
  },
  {
    question: "Do I pay both the Congestion Charge and ULEZ on the same trip?",
    answer:
      "Yes, if you drive a non-compliant vehicle into central London during charging hours, you pay both charges on the same day: £15 for the Congestion Charge and £12.50 for the ULEZ, a combined £27.50 for that single day.",
  },
  {
    question: "How do I know if my car is ULEZ compliant?",
    answer:
      "Compliance depends on your vehicle's emissions standard. Most petrol cars registered from 2006 onwards and most diesel cars registered from September 2015 onwards meet the required standard. TfL provides a vehicle checker where you can enter your registration to confirm compliance for your specific car.",
  },
  {
    question: "Are electric cars exempt from these charges?",
    answer:
      "Electric vehicles are automatically ULEZ compliant, so they never pay the ULEZ charge. The Congestion Charge is separate: fully electric vehicles have historically benefited from a discount or exemption, though this has been subject to change, so it's worth checking the current rules on the official TfL website before relying on it.",
  },
  {
    question: "What happens if I forget to pay?",
    answer:
      "You can pay the Congestion Charge and ULEZ up to the midnight after you drove into the zone. Miss that window and TfL can issue a penalty charge notice, which costs considerably more than the daily charge itself, so it's worth paying promptly or setting up auto pay if you drive into London regularly.",
  },
];

export function ArticleContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Driving into central London can mean paying two separate daily
        charges, and it catches a lot of drivers out, especially visitors and
        anyone driving an older car. This guide explains what the ULEZ and
        Congestion Charge actually are, how much they cost combined, which
        vehicles are exempt, and what it adds up to if you commute in
        regularly. It sits in our{" "}
        <Link href="/categories/motoring">Motoring category</Link>, alongside
        our other DVLA and running cost calculators.
      </p>

      <CalloutBox
        title="Work out your exact London driving costs"
        description="Enter your vehicle details and how often you drive in for an instant daily, weekly and annual cost breakdown."
        href="/calculators/congestion-charge-ulez-calculator-uk"
        cta="Open the calculator"
      />

      <h2 id="what-is-ulez">What is the ULEZ?</h2>
      <p>
        The Ultra Low Emission Zone (ULEZ) charges older, more polluting
        vehicles for driving within its boundary, currently covering all of
        Greater London. It operates 24 hours a day, every day of the year,
        including weekends and bank holidays, and applies based on your
        vehicle&apos;s emissions standard rather than its age alone: some older
        cars are compliant, and some newer diesels are not, so it&apos;s always
        worth checking your specific vehicle rather than assuming.
      </p>
      <p>
        The scheme was introduced to cut air pollution from road traffic,
        targeting nitrogen oxides and particulate matter linked to
        respiratory health problems. It has expanded gradually since it
        launched, moving from a small central zone to covering all of Greater
        London, which means many drivers who were never affected before have
        found themselves liable for the charge as the boundary grew.
      </p>

      <h2 id="what-is-congestion-charge">What is the Congestion Charge?</h2>
      <p>
        The Congestion Charge is a separate charge for driving within a
        smaller central London zone, aimed at reducing traffic rather than
        emissions specifically. It applies on weekdays and, unlike the ULEZ,
        only during set charging hours rather than around the clock, though
        it&apos;s worth confirming the current operating hours on the official
        TfL website before you travel, since these have changed over time.
      </p>
      <p>
        Because the Congestion Charge zone and the ULEZ zone overlap in
        central London but cover different areas overall, it&apos;s entirely
        possible to owe one charge without the other, depending on exactly
        where you drive. A trip that stays within outer London but inside the
        ULEZ boundary, for example, would trigger the ULEZ charge alone if
        your vehicle isn&apos;t compliant, with no Congestion Charge due at all.
      </p>

      <h2 id="combined-cost">The combined daily cost</h2>
      <RateTable
        caption="London driving charges for a non-compliant vehicle"
        columns={["Charge", "Daily cost"]}
        rows={[
          ["Congestion Charge", "£15.00"],
          ["ULEZ", "£12.50"],
          ["Combined (both zones, non-compliant)", "£27.50"],
        ]}
        highlightLastRow
      />
      <p>
        If your car isn&apos;t ULEZ compliant and you drive into central London
        during charging hours, you can end up paying both charges on the same
        day, a combined <strong>£27.50</strong>, just to make the trip. A
        ULEZ-compliant vehicle still pays the Congestion Charge if it enters
        that zone, but avoids the £12.50 ULEZ charge entirely.
      </p>
      <p>
        One payment covers a full calendar day for each charge, no matter how
        many times you enter and leave the zone within that period. This
        means a single day trip involving multiple journeys in and out of
        central London still only costs £27.50 in total for a non-compliant
        vehicle, rather than being charged again for each separate entry.
      </p>

      <h2 id="whos-exempt">Which vehicles are exempt?</h2>
      <p>
        Electric vehicles are automatically ULEZ compliant and never pay that
        charge. Most petrol cars registered from 2006 onwards and most diesel
        cars registered from September 2015 onwards also meet the ULEZ
        standard. Certain vehicle types, including some disabled tax class
        vehicles, may qualify for a Congestion Charge exemption or discount.
        Rules and discounts change from time to time, so check your specific
        registration on the official TfL vehicle checker rather than
        assuming based on your car&apos;s age alone.
      </p>
      <p>
        Visitors driving into London from outside the city are not
        automatically exempt either, and the charges apply equally to
        vehicles registered anywhere in the UK or abroad. If you are hiring a
        car for a trip into London, it is worth checking the exact
        registration with TfL before you travel, since hire cars vary widely
        in age and emissions standard, and the hire company will not
        necessarily flag whether a particular vehicle is ULEZ compliant when
        you collect it.
      </p>

      <h2 id="monthly-cost">What it costs over a working month</h2>
      <p>
        For a driver commuting into both zones five days a week in a
        non-compliant vehicle, the £27.50 daily combined charge adds up
        quickly. Over a typical 22 working day month, that comes to around{" "}
        <strong>£605</strong>. Across a full working year of roughly 260
        working days, it adds up to around{" "}
        <strong>£7,150</strong>, before fuel, parking or anything else is
        added on top.
      </p>
      <p>
        This is exactly why so many regular commuters into central London
        eventually switch to a compliant or electric vehicle, use public
        transport instead, or park outside the zones and walk or cycle the
        final stretch. Our{" "}
        <Link href="/calculators/congestion-charge-ulez-calculator-uk">
          Congestion Charge and ULEZ calculator
        </Link>{" "}
        lets you enter your own vehicle type and driving pattern to see your
        exact daily, weekly and annual figure.
      </p>

      <h2 id="how-to-pay">How to pay and avoid a penalty</h2>
      <p>
        You can pay the Congestion Charge and ULEZ online, by phone, or
        through the official TfL app, up until midnight on the day after you
        drove into the zone. Missing that window means TfL can issue a
        penalty charge notice, which costs considerably more than simply
        paying the daily charge on time. If you drive into London regularly,
        setting up auto pay removes the risk of forgetting altogether, since
        the charge is applied automatically whenever your registered vehicle
        is detected in the zone.
      </p>
      <p>
        Cameras across both zones read number plates automatically, so there
        is no barrier or ticket to collect on entry. This also means the
        charge applies whether or not you notice a sign, which is part of
        why so many first-time or occasional visitors end up with an
        unexpected penalty simply for not realising they had crossed into a
        charging zone at all.
      </p>
      <p>
        If you only drive into London occasionally, it is worth planning
        ahead rather than paying on the day out of habit. Checking your route
        and your vehicle&apos;s compliance status the night before a trip takes a
        few minutes and can save a genuinely large amount of money compared
        with an unplanned journey in a non-compliant car.
      </p>
      <p>
        Before any trip into central London, it&apos;s worth a quick check of
        your vehicle&apos;s compliance status and the current charges on the
        official TfL website, since rates and zone boundaries are reviewed
        periodically. Our{" "}
        <Link href="/blog/uk-car-tax-2026-ved-guide">UK car tax guide</Link>{" "}
        covers how emissions also affect your annual VED bill, if you&apos;re
        weighing up switching to a lower-emission car. Since electric cars
        are exempt from ULEZ, our{" "}
        <Link href="/calculators/electric-car-running-cost-calculator-uk">
          electric car running cost calculator
        </Link>{" "}
        can help you see the combined saving for a regular London commute.
      </p>

      <h2 id="faq">Frequently asked questions</h2>
    </div>
  );
}
