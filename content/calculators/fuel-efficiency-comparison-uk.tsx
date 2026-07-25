import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "Is a diesel car always cheaper to run than petrol?",
    answer:
      "Not necessarily. Diesel cars often achieve higher MPG figures, but diesel fuel is usually priced higher per litre than petrol, and diesel cars can cost more to buy and service. Whether diesel works out cheaper overall depends on your annual mileage: higher mileage drivers are more likely to see diesel's efficiency advantage outweigh its cost disadvantages.",
  },
  {
    question: "How accurate are manufacturer MPG figures?",
    answer:
      "Official MPG figures, whether from WLTP testing or older standards, are measured under controlled laboratory conditions and are usually higher than what most drivers achieve in everyday real-world driving. It's best to use your own real-world MPG if you know it, or a realistic estimate based on similar cars, rather than the headline manufacturer figure alone.",
  },
  {
    question: "Does this calculator include running costs other than fuel?",
    answer:
      "No, this calculator focuses purely on fuel cost based on mileage, MPG and fuel price. It does not include insurance, servicing, road tax, depreciation or finance costs, all of which can meaningfully change which vehicle is cheaper overall. Check our road tax calculator separately for the VED side of running costs.",
  },
  {
    question: "How does annual mileage affect which car is cheaper?",
    answer:
      "The more miles you drive, the more the fuel efficiency difference between two cars matters, since a small MPG gap multiplies across every mile driven. A car with worse MPG but a lower purchase price might still make sense for someone driving very few miles a year, since fuel cost plays a smaller role in their overall running costs.",
  },
  {
    question: "Should I compare a hybrid against a petrol or diesel car this way?",
    answer:
      "You can, using the hybrid's official or real-world MPG figure alongside petrol pricing, though hybrid efficiency can vary more than petrol or diesel depending on how much urban, stop-start driving you do, since hybrids often perform particularly well in that kind of driving compared with motorway mileage.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Choosing between two cars often comes down to a gut feeling about
        which one seems more economical, without actually running the
        numbers. This calculator compares two vehicles side by side on
        annual fuel cost, based on your own mileage, each car&apos;s MPG, and
        current fuel prices, so you can see the real pound-for-pound
        difference rather than guessing from a badge or engine size.
      </p>

      <h2>How to use the fuel efficiency comparison calculator</h2>
      <p>
        Enter your expected annual mileage, MPG, fuel type and price per
        litre for Vehicle A, then do the same for Vehicle B. You can use the
        same annual mileage for both if you are comparing two cars for the
        same use case, or different figures if the cars would genuinely be
        driven differently. The calculator shows each vehicle&apos;s annual
        fuel cost, cost per mile, and the total difference between them,
        both per year and projected over 5 years.
      </p>

      <h2>How the calculation works</h2>
      <p>
        Fuel used is calculated from your annual mileage divided by MPG,
        converted from UK gallons into litres, then multiplied by your fuel
        price per litre. This mirrors the calculation behind our{" "}
        <Link href="/calculators/fuel-cost-calculator-uk">
          fuel cost calculator
        </Link>
        , applied twice so you can see two vehicles next to each other
        directly. Because petrol and diesel are priced differently per
        litre, and MPG figures often differ meaningfully between fuel
        types, comparing raw MPG numbers alone can be misleading. This
        calculator converts everything into a pounds-and-pence annual cost,
        which is the number that actually affects your budget.
      </p>

      <h2>Worked example</h2>
      <p>
        Take <strong>Vehicle A</strong>, a petrol car doing{" "}
        <strong>45 MPG</strong> at <strong>£1.45 a litre</strong>, against{" "}
        <strong>Vehicle B</strong>, a diesel car doing{" "}
        <strong>60 MPG</strong> at <strong>£1.52 a litre</strong>, both
        driven <strong>10,000 miles a year</strong>.
      </p>
      <p>
        Vehicle A uses more fuel overall due to its lower MPG, but pays a
        lower price per litre. Vehicle B uses noticeably less fuel thanks to
        its higher MPG, despite diesel costing more per litre. Once both are
        converted into an annual cost, the calculator shows exactly which
        vehicle comes out cheaper and by how much, and projects that
        difference over 5 years, since a gap that looks small annually can
        add up to a meaningful sum over a typical ownership period.
      </p>
      <p>
        Try adjusting the annual mileage upward in the calculator above.
        You will see the annual and 5-year cost difference between the two
        vehicles grow larger, since higher mileage magnifies any efficiency
        gap between two cars. This is exactly why high-mileage drivers tend
        to weigh MPG more heavily when choosing a car than low-mileage
        drivers do.
      </p>

      <h2>What affects real-world fuel efficiency</h2>
      <p>
        MPG figures are heavily influenced by driving style and conditions,
        not just the car itself. Motorway driving at a steady speed
        typically achieves closer to a car&apos;s official figures than
        stop-start urban driving, which can reduce real-world MPG
        noticeably, particularly for larger or heavier vehicles. Carrying
        extra weight, using air conditioning heavily, and short journeys
        that never let the engine reach optimal temperature can all reduce
        the MPG you actually achieve compared with the headline figure.
      </p>
      <p>
        Hybrid vehicles are a particular case worth understanding. They
        often perform best in exactly the conditions that hurt petrol and
        diesel cars most: slow, stop-start urban driving, where the electric
        motor can do more of the work and regenerative braking recovers
        energy that would otherwise be wasted. On a long motorway journey,
        a hybrid&apos;s advantage over an efficient diesel often narrows
        considerably, so the type of driving you mostly do matters as much
        as the vehicle type when comparing efficiency.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        A common mistake is comparing manufacturer MPG figures directly
        without adjusting for real-world driving. Official test figures are
        measured under controlled conditions and tend to be optimistic
        compared with typical UK driving, particularly for shorter journeys
        and urban driving with lots of stopping and starting. Where
        possible, use a realistic real-world MPG figure, either from your
        own experience or from independent real-world test data, rather
        than the headline manufacturer number.
      </p>
      <p>
        It is also easy to focus purely on fuel cost and forget the other
        running costs that can outweigh a small MPG advantage. A car with
        slightly worse fuel economy but noticeably lower insurance,
        servicing or road tax costs can still work out cheaper overall. Fuel
        is usually the single biggest running cost for higher-mileage
        drivers, but it is rarely the only one worth comparing.
      </p>
      <p>
        Finally, remember that fuel prices themselves change regularly.
        Running this comparison with today&apos;s prices gives a snapshot, but
        it is worth revisiting if fuel prices move significantly, or before
        a major purchase decision, rather than relying on a comparison done
        many months earlier.
      </p>

      <p>
        Tyre pressure, regular servicing, and even removing a roof box or
        unused roof bars can also make a small but genuine difference to
        real-world MPG. None of these factors show up in a manufacturer
        specification sheet, but they are worth keeping in mind once you
        have chosen a car, since they can help you get closer to its
        official efficiency figures in everyday driving.
      </p>

      <h2>Related calculators</h2>
      <p>
        For a single vehicle&apos;s running cost on a specific journey, our{" "}
        <Link href="/calculators/fuel-cost-calculator-uk">
          fuel cost calculator
        </Link>{" "}
        and{" "}
        <Link href="/calculators/mpg-calculator-uk">MPG calculator</Link>{" "}
        can help. Check your annual{" "}
        <Link href="/calculators/road-tax-calculator-uk">
          road tax (VED)
        </Link>{" "}
        cost by fuel type and CO2 emissions to add to the comparison, and if
        you drive in London, our{" "}
        <Link href="/blog/london-driving-charges-2026">
          London driving charges guide
        </Link>{" "}
        covers the ULEZ and Congestion Charge costs that can also differ
        significantly between vehicles.
      </p>
    </div>
  );
}
