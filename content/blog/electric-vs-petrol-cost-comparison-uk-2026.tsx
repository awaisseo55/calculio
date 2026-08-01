import Link from "next/link";
import { CalloutBox } from "@/components/blog/callout-box";
import type { FaqItem } from "@/lib/types";
import type { TocItem } from "@/components/blog/table-of-contents";

export const toc: TocItem[] = [
  { id: "upfront-cost", label: "The upfront cost gap" },
  { id: "running-costs", label: "Running costs compared" },
  { id: "charging", label: "Charging practicalities" },
  { id: "depreciation", label: "Depreciation and resale" },
  { id: "when-worth-it", label: "When EVs save money, and when they don't" },
  { id: "non-financial", label: "Non-financial reasons to consider an EV" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "try-calculator", label: "Compare your own costs" },
];

export const faq: FaqItem[] = [
  {
    question: "Is an electric car actually cheaper than petrol in the UK?",
    answer:
      "For most drivers who can charge mostly at home, yes, an electric car is usually cheaper to run per mile than an equivalent petrol car, even after accounting for the road tax that now applies to EVs. The gap narrows considerably for drivers who rely mainly on public rapid chargers, and the higher upfront purchase price still needs to be recovered through those running cost savings over time.",
  },
  {
    question: "How much more do electric cars cost to buy than petrol equivalents?",
    answer:
      "It varies by model, but electric cars still generally carry a higher list price than a directly equivalent petrol version, though the gap has narrowed considerably as more affordable EVs have reached the market and battery costs have fallen. Salary sacrifice schemes and leasing can significantly change the effective upfront cost for many drivers, so it is worth comparing like-for-like deals rather than just headline list prices.",
  },
  {
    question: "Do electric cars really cost more to insure?",
    answer:
      "Electric cars have historically sat in slightly higher insurance groups than equivalent petrol models, partly reflecting higher repair and battery replacement costs, though this gap has been narrowing as EVs become more common and insurers gather more claims data. Always get a real quote for your specific model rather than assuming a fixed premium either way.",
  },
  {
    question: "What is the break-even mileage for an electric car versus petrol?",
    answer:
      "There is no single figure, since it depends on the price difference between the two cars, your annual mileage, and how much of your charging happens at home versus in public. High-mileage drivers with home charging access tend to reach break-even considerably faster than low-mileage drivers who rely on public chargepoints, sometimes within a couple of years rather than a decade.",
  },
  {
    question: "Do electric cars hold their value as well as petrol cars?",
    answer:
      "Depreciation patterns for electric cars have been more volatile than for petrol cars in recent years, partly due to rapidly improving battery technology and changing government incentives affecting used values. It is sensible to check current used EV values for your specific model rather than assuming depreciation will match either petrol cars or older EV trends.",
  },
  {
    question: "Is it worth switching to electric just for the London ULEZ exemption?",
    answer:
      "If you drive into the Ultra Low Emission Zone regularly with an older, non-compliant petrol or diesel car, the daily charge can add up to a meaningful annual cost, which an electric car avoids entirely. For infrequent London drivers, the ULEZ saving alone is unlikely to be the deciding factor, but it is a genuine additional saving worth factoring in alongside fuel costs if it applies to you.",
  },
];

export function ArticleContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Petrol at the pump costs roughly 7 to 8 pence a mile in an efficient
        car, while a typical electric car charging mostly at home can cost
        under 4 pence a mile, a gap that looks decisive on paper. But
        insurance, servicing, road tax and, above all, how you actually
        charge the car all change the real picture. Our{" "}
        <Link href="/calculators/electric-car-running-cost-calculator-uk">
          electric car running cost calculator
        </Link>{" "}
        lets you plug in your own numbers, but this guide walks through
        every part of the comparison first.
      </p>

      <h2 id="upfront-cost">The upfront cost gap</h2>
      <p>
        Electric cars generally still carry a higher list price than a
        directly comparable petrol model, though the gap has narrowed
        considerably as battery costs have fallen and more affordable EVs
        have reached the UK market. The government&apos;s previous
        plug-in car grant for private buyers closed some years ago, so most
        of today&apos;s upfront savings come from elsewhere rather than a
        direct purchase subsidy.
      </p>
      <p>
        Salary sacrifice schemes, offered through some employers, let you
        lease an electric car through pre-tax salary, which can meaningfully
        reduce the effective monthly cost compared with buying outright or
        financing privately, since it lowers your Income Tax and National
        Insurance liability at the same time. Leasing more generally, for
        both EVs and petrol cars, spreads the cost differently to buying, so
        comparing like-for-like finance deals, rather than just headline
        list prices, gives a fairer sense of the real upfront gap for your
        situation.
      </p>

      <h2 id="running-costs">Running costs compared</h2>
      <p>
        Take a driver covering 8,000 miles a year. An electric car doing
        3.5 miles per kWh, charging 80% at home at 25.7p per kWh and the
        rest on public chargers at 60p per kWh, spends around £744 a year on
        electricity. Add £650 insurance, £150 servicing and £195 road tax,
        and the annual running cost comes to roughly £1,739, about 21.7p a
        mile.
      </p>
      <p>
        A comparable 40mpg petrol car covering the same 8,000 miles at £1.50
        a litre uses around 909 litres of fuel a year, costing roughly
        £1,364 in fuel alone, a figure you can check against your own car
        and mileage with our{" "}
        <Link href="/calculators/fuel-cost-calculator-uk">
          fuel cost calculator
        </Link>
        . Add similar insurance, a somewhat higher servicing estimate of
        £250 to reflect the extra moving parts in a combustion engine, and
        the same £195 road tax, and the petrol car&apos;s annual running
        cost comes to around £2,459, about 30.7p a mile. On these
        illustrative figures, that is a saving of around{" "}
        <strong>£720 a year</strong> for the electric car, before accounting
        for the higher purchase price.
      </p>
      <p>
        Since 1 April 2025, electric cars pay Vehicle Excise Duty on broadly
        the same basis as petrol and diesel cars, ending the previous
        exemption, so this is no longer a free line item for EV owners. Our{" "}
        <Link href="/calculators/road-tax-calculator-uk">
          road tax calculator
        </Link>{" "}
        and our{" "}
        <Link href="/blog/uk-car-tax-2026-ved-guide">
          UK car tax 2026 VED guide
        </Link>{" "}
        have the full detail on how the rates now compare across fuel types.
      </p>

      <h2 id="charging">Charging practicalities</h2>
      <p>
        The single biggest factor in your real running cost is how much of
        your charging happens at home overnight versus on public
        chargepoints. Drivers with a driveway or garage who charge on a
        cheaper off-peak EV tariff see the lowest cost per mile by some
        distance, since domestic electricity, even at standard rates, is
        considerably cheaper per kWh than public charging.
      </p>
      <p>
        Public charging speeds vary widely, from slower on-street and
        supermarket chargers to rapid and ultra-rapid motorway chargers that
        can add significant range in well under an hour, at a
        correspondingly higher price per kWh. Drivers without home charging
        access, relying mainly on public infrastructure, will see a
        noticeably smaller cost advantage over petrol, and in some cases
        little to none, particularly if they lean heavily on the fastest,
        most expensive public chargers.
      </p>

      <h2 id="depreciation">Depreciation and resale</h2>
      <p>
        Used electric car values have been more volatile in recent years
        than used petrol values, partly because rapidly improving battery
        technology and range have made older EV models feel outdated
        faster, and partly because changing incentives and price cuts on new
        EVs have pulled used values down at times. This does not
        automatically make EVs a worse buy, but it does mean depreciation is
        harder to predict confidently than for a well-established petrol
        model, so checking current used values for your specific model of
        interest is more useful than relying on general assumptions either
        way.
      </p>

      <CalloutBox
        title="See your own EV running cost"
        description="Enter your mileage, efficiency and charging mix for an instant annual cost estimate, compared directly against an equivalent petrol car."
        href="/calculators/electric-car-running-cost-calculator-uk"
        cta="Calculate my EV running cost"
      />

      <h2 id="when-worth-it">When EVs save money, and when they do not</h2>
      <p>
        High-mileage drivers with reliable home charging access tend to see
        the clearest financial case for switching, since they rack up
        savings on every mile driven at the cheaper home charging rate,
        helping any upfront price premium pay back faster. Company car
        drivers and anyone able to access a salary sacrifice scheme often
        see an even stronger case, thanks to the tax treatment involved.
      </p>
      <p>
        Low-mileage drivers, or anyone without off-street parking who must
        rely mainly on public charging, see a much smaller gap, and the
        maths can tip the other way entirely if a higher purchase price is
        combined with mostly expensive rapid charging and higher-than-average
        fuel costs on the petrol side, which our{" "}
        <Link href="/calculators/fuel-cost-calculator-uk">
          fuel cost calculator
        </Link>{" "}
        can help you estimate. Our{" "}
        <Link href="/calculators/electric-car-running-cost-calculator-uk">
          electric car running cost calculator
        </Link>{" "}
        includes a payback estimate, so you can see roughly how many years
        it would take to recover a specific price difference based on your
        own mileage and charging mix, rather than relying on a generic
        rule of thumb.
      </p>

      <h2 id="non-financial">Non-financial reasons to consider an EV</h2>
      <p>
        Cost is not the only factor. Electric cars are exempt from the
        London Ultra Low Emission Zone daily charge, a genuine saving for
        regular London drivers with an older, non-compliant car, on top of
        any fuel saving, as covered in our{" "}
        <Link href="/blog/london-driving-charges-2026">
          London driving charges guide
        </Link>
        . For anyone commuting into central London specifically, that
        exemption alone can be worth a few thousand pounds a year compared
        with an older non-compliant petrol or diesel car, which our{" "}
        <Link href="/blog/london-driving-charges-2026">
          guide to ULEZ and the Congestion Charge
        </Link>{" "}
        breaks down in full.
      </p>
      <p>
        Many drivers also simply prefer the driving experience, quieter,
        with instant torque and no gear changes, alongside the
        environmental benefit of zero tailpipe emissions. None of this
        shows up directly in a running cost spreadsheet, but it is often a
        genuine part of the decision for people weighing up a switch.
      </p>

      <h2 id="faq">Frequently asked questions</h2>
    </div>
  );
}
