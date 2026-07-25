import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "Do electric vehicles pay road tax now?",
    answer:
      "Yes. Since 1 April 2025, electric vehicles are no longer exempt from Vehicle Excise Duty. New EVs registered from that date pay the lowest first-year rate, then move to the standard annual rate — and, if their list price is over £40,000, the expensive car supplement too, just like petrol and diesel cars.",
  },
  {
    question: "What's the 'expensive car supplement'?",
    answer:
      "It's an extra charge for cars with a list price (the manufacturer's published price when new, including options, before any discounts) over £40,000. It's paid on top of the standard rate for five years, starting from the second time the car is taxed, regardless of fuel type.",
  },
  {
    question: "Why is the first-year rate different from the standard rate?",
    answer:
      "The first-year rate, sometimes called the 'showroom tax', is charged only when a car is first registered, and is banded by CO2 emissions to encourage lower-emission choices — the higher a car's emissions, the steeper the first-year charge. From the second year onwards, almost all post-2017 cars move to the same flat standard rate, regardless of their emissions.",
  },
  {
    question: "Where do I find my car's CO2 emissions figure?",
    answer:
      "It's shown on your V5C vehicle registration certificate (logbook), on the original sales invoice, or you can look up your registration number on the government's free vehicle tax rate checker on gov.uk.",
  },
  {
    question: "How do I actually pay my road tax?",
    answer:
      "You tax your vehicle directly with the DVLA, either online, by phone, or at a Post Office that deals with vehicle tax. You'll need a reminder letter (V11), your V5C logbook reference, or the green 'new keeper' slip if you've just bought the car. You can pay annually, in six-monthly instalments, or monthly by Direct Debit, though instalment plans carry a small surcharge.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h2>How to use the road tax (VED) calculator</h2>
      <p>
        Select your vehicle&apos;s fuel type, enter its first registration date, and — for
        petrol, diesel and hybrid cars — its CO2 emissions figure in grams per kilometre.
        If the car&apos;s list price was over £40,000 when new, tick that box too. The
        calculator shows your first-year rate (if the car was registered on or after 1
        April 2017), the standard annual rate that applies from the second year onwards,
        and any expensive car supplement due.
      </p>
      <p>
        Vehicle Excise Duty, commonly called road tax or car tax, is collected by the
        DVLA and is a legal requirement to keep any vehicle on a public road in the UK,
        even if it also needs to be insured and have a valid MOT. Rates depend heavily on
        when a car was first registered, because the rules have changed several times
        since 2001.
      </p>

      <h2>How VED rates are structured</h2>
      <p>
        Cars registered on or after <strong>1 April 2017</strong> follow the current
        system: a CO2-banded first-year rate, followed by a flat standard rate (currently{" "}
        <strong>£195 a year</strong>) from the second year onwards, regardless of
        emissions — plus an expensive car supplement of <strong>£425 a year</strong> for
        five years if the list price was over £40,000. Cars registered between{" "}
        <strong>1 March 2001 and 31 March 2017</strong> use an older system of 13 CO2
        emissions bands that determine a single annual rate for the life of the car, with
        no separate first-year charge. Cars registered before <strong>March 2001</strong>{" "}
        are taxed based on engine size rather than emissions, since CO2 figures
        weren&apos;t routinely recorded before then.
      </p>

      <h2>Worked example</h2>
      <p>
        A new petrol car registered today with CO2 emissions of{" "}
        <strong>120 g/km</strong> and a list price under £40,000 would pay a first-year
        rate of around <strong>£540</strong>, based on its emissions band. From the
        second year onwards, it drops to the standard rate of <strong>£195 a year</strong>,
        regardless of its emissions, for as long as you own it.
      </p>
      <p>
        Now imagine the same car, but with a list price of £45,000 — over the £40,000
        threshold. The first-year rate stays the same, but from year two through year
        six, you&apos;d pay the £195 standard rate <em>plus</em> the £425 expensive car
        supplement — a combined <strong>£620 a year</strong> — before dropping back to
        just the £195 standard rate from year seven onwards.
      </p>

      <h2>Why CO2 emissions matter so much for new cars</h2>
      <p>
        The first-year rate system exists to nudge buyers towards lower-emission
        vehicles at the point of purchase, when the price difference is most visible.
        A zero-emission car pays the lowest first-year band, while a high-emission
        performance or luxury car can face a first-year charge running into thousands of
        pounds. Because the standard rate from year two is flat regardless of emissions,
        this incentive effect is concentrated entirely in that first year.
      </p>

      <h2>The end of the electric vehicle exemption</h2>
      <p>
        Electric vehicles were fully exempt from VED until March 2025. From 1 April 2025,
        that exemption ended: new EVs registered from that date pay the lowest first-year
        rate and then the standard annual rate from year two, exactly like a low-emission
        petrol or hybrid car — and are subject to the expensive car supplement on the
        same basis if their list price is over £40,000. Many electric cars, especially
        higher-end models, do cross that £40,000 threshold, so it&apos;s worth checking
        carefully if you&apos;re comparing running costs.
      </p>

      <h2>Common questions when budgeting for car tax</h2>
      <p>
        A frequent surprise is the expensive car supplement catching out buyers of
        premium hatchbacks and family SUVs that cross £40,000 once options and
        extras are added to the list price — it&apos;s based on the price when new, not what
        you paid second-hand. It&apos;s also worth noting that road tax doesn&apos;t transfer with
        the car when you buy it used — the tax is cancelled automatically and the new
        keeper must set up their own from the date of registration.
      </p>

      <h2>Related calculators</h2>
      <p>
        Once you&apos;ve worked out your annual VED, use our{" "}
        <Link href="/calculators/fuel-cost-calculator-uk">fuel cost calculator</Link> and{" "}
        <Link href="/calculators/mpg-calculator-uk">MPG calculator</Link> to
        estimate running costs for regular journeys, and factor both into your overall
        motoring budget alongside insurance and maintenance. If you drive into
        London regularly, our{" "}
        <Link href="/calculators/congestion-charge-ulez-calculator-uk">
          Congestion Charge and ULEZ calculator
        </Link>{" "}
        covers those additional daily costs too.
      </p>
    </div>
  );
}
