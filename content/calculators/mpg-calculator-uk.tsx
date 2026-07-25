import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "Why is my real MPG lower than the official figure?",
    answer:
      "Official WLTP figures are measured under standardised test conditions designed for fair comparison, not to match your exact driving. Cold starts, town driving, hills, air conditioning and driving style can all reduce real world MPG noticeably below the number on the spec sheet.",
  },
  {
    question: "What is the difference between UK MPG and US MPG?",
    answer:
      "A UK (imperial) gallon is bigger than a US gallon, so the same fuel economy gives a higher MPG figure in UK terms than in US terms. This calculator shows both, since US MPG figures sometimes appear in imported car specifications or online comparisons.",
  },
  {
    question: "How do I measure my fuel used accurately?",
    answer:
      "The most reliable way is to fill your tank completely, reset your trip meter, drive normally until your next full fill up, then note exactly how many litres it took to fill up again. That litres figure, against the miles on your trip meter, gives an accurate real world MPG.",
  },
  {
    question: "Does this work for electric cars?",
    answer:
      "Not directly, since electric cars use pence per mile based on electricity price and miles per kWh rather than fuel in litres. This calculator is designed for petrol, diesel and hybrid vehicles that use liquid fuel.",
  },
  {
    question: "Why does my MPG vary so much between fill ups?",
    answer:
      "Short journeys, cold weather, town traffic and motorway driving all affect fuel economy differently, so it is normal to see some variation. Averaging your MPG over several fill ups gives a more reliable picture than judging it from a single tank.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        The MPG figure on a car&apos;s spec sheet is a useful starting point, but it
        rarely matches what you actually get once you are driving in the real
        world. This calculator works out your actual fuel economy from a real
        journey, using the distance you drove and the fuel you genuinely used.
      </p>
      <p>
        It is a handy way to check whether your car is performing as expected,
        compare two vehicles fairly, or simply understand what a typical journey is
        really costing you. It is especially useful before a longer trip, when
        knowing your real MPG rather than an optimistic official figure gives a
        much more accurate idea of what the fuel is actually going to cost.
      </p>

      <h2>How to use the MPG calculator</h2>
      <p>
        Enter the distance you drove in miles, and how much fuel you used, in
        litres or gallons. Add your fuel type and the price you paid per litre, and
        the calculator works out your MPG in both imperial and US terms, your
        litres per 100km, and an estimated cost per mile for that journey.
      </p>

      <h2>How the calculation works</h2>
      <p>
        If you enter fuel used in litres, the calculator converts your distance and
        fuel figures directly into miles per UK gallon by applying the standard
        conversion of 4.54609 litres to one UK gallon. It also works out miles per
        US gallon, using the smaller US gallon of 3.78541 litres, which is why the
        US figure always comes out higher for the same underlying fuel economy.
        Litres per 100km is calculated by converting your mileage to kilometres and
        scaling your fuel used accordingly.
      </p>
      <p>
        The cost figures work the other way round from a typical fuel cost
        calculator. Instead of estimating fuel use from an assumed MPG figure, this
        tool starts from what you genuinely put in the tank, so the cost per mile
        it shows reflects your actual driving rather than a manufacturer estimate.
        That makes it a useful reality check against the official figures quoted
        when you were shopping for the car.
      </p>

      <h2>Petrol, diesel and hybrid MPG in practice</h2>
      <p>
        Diesel engines generally return higher MPG than equivalent petrol engines,
        particularly on motorway journeys, though diesel is often priced a few
        pence higher per litre at the pump, so the real cost saving depends on
        both figures together, not MPG alone. Hybrids tend to perform best in
        stop start town driving, where the electric motor can take some of the
        load, and closer to a standard petrol car&apos;s figures on sustained motorway
        driving where the engine does most of the work. Running your own numbers
        through this calculator for each car you are considering is the fairest
        way to compare them for your typical journeys.
      </p>

      <h2>Worked example</h2>
      <p>
        Say you drive <strong>300 miles</strong> and use <strong>35 litres</strong>{" "}
        of petrol, at <strong>£1.45 a litre</strong>. That works out at{" "}
        <strong>39.0 MPG</strong> in imperial terms, or <strong>32.4 MPG</strong>{" "}
        in US terms, and <strong>7.2 litres per 100km</strong>. The total fuel cost
        for the journey comes to around <strong>£50.75</strong>, or roughly{" "}
        <strong>17p a mile</strong>.
      </p>
      <p>
        If your car&apos;s official combined figure was advertised at 45 MPG, this real
        world result of 39.0 MPG is a meaningful gap, worth knowing about when
        budgeting for fuel, especially over a year of regular driving.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        A common mistake is calculating MPG from a partial tank rather than a full
        fill to full fill measurement, which can give a misleading result if the
        pump does not stop at exactly the same point each time. It is also easy to
        judge fuel economy from a single short journey, which tends to be less
        efficient than a longer, steadier drive, since the engine spends more of a
        short trip warming up.
      </p>
      <p>
        Another mistake is comparing your MPG directly against a car&apos;s official
        WLTP figure and assuming something is wrong if it is lower. Some gap
        between official and real world figures is completely normal, so it is
        more useful to track your own MPG over time and notice genuine changes,
        rather than comparing against the spec sheet alone.
      </p>

      <h2>Related calculators</h2>
      <p>
        To plan the cost of a specific trip rather than check your real world
        economy, try our{" "}
        <Link href="/calculators/fuel-cost-calculator-uk">
          fuel cost calculator
        </Link>
        . Once you know your MPG, our{" "}
        <Link href="/calculators/road-tax-calculator-uk">road tax calculator</Link>{" "}
        and <Link href="/blog/uk-car-tax-2026-ved-guide">car tax guide</Link> can
        help you understand the rest of your annual motoring costs. If you drive
        into London regularly, our{" "}
        <Link href="/calculators/congestion-charge-ulez-calculator-uk">
          Congestion Charge and ULEZ calculator
        </Link>{" "}
        covers those additional costs too, and our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>{" "}
        can help you see how motoring costs fit into your wider monthly budget.
      </p>
    </div>
  );
}
