import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How do I convert MPG to litres used?",
    answer:
      "This calculator does it automatically, but the maths is: divide your distance in miles by your car's MPG figure to get the number of UK (imperial) gallons used, then multiply by 4.54609 to convert to litres. One UK gallon is different from a US gallon, so always check which figure your car's manual quotes.",
  },
  {
    question: "What's a realistic MPG figure to use?",
    answer:
      "Official 'combined' MPG figures on a car's spec sheet are measured under laboratory test conditions and are usually higher than what you'll see in everyday driving, especially in town or with a heavy right foot. For a more accurate estimate, check your car's trip computer average over a few tanks, or use a real-world MPG database rather than the manufacturer's headline figure.",
  },
  {
    question: "Does this calculator work for diesel and electric cars?",
    answer:
      "It works for any liquid fuel priced per litre — petrol or diesel — since you enter your own price per litre and MPG figure. For electric vehicles, cost is based on pence per kWh and battery efficiency (miles per kWh) rather than litres, so you'd need a dedicated EV running cost calculator instead.",
  },
  {
    question: "Why does my cost per mile matter?",
    answer:
      "Cost per mile is a useful way to compare vehicles or journeys on a like-for-like basis, regardless of distance. It's also the figure many people use to decide whether to claim mileage allowance for business trips, or to fairly split fuel costs with passengers on a long journey.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h2>How to use the fuel cost calculator</h2>
      <p>
        Enter the distance of your journey (in miles or kilometres), your car&apos;s fuel
        efficiency (in MPG or litres per 100km), and the price you&apos;re paying per
        litre at the pump. The calculator works out the total litres you&apos;ll use,
        the total cost, and your cost per mile and per kilometre — handy for budgeting a
        road trip, comparing cars, or working out a fair fuel contribution to split with
        passengers.
      </p>
      <p>
        Fuel remains one of the biggest variable costs of running a car in the UK, and
        prices can shift noticeably from month to month and forecourt to forecourt.
        Knowing your actual cost per mile makes it much easier to budget for regular
        commutes, compare the running costs of different vehicles, or simply check
        whether a long trip is worth taking by car versus train or plane.
      </p>

      <h2>The maths behind the numbers</h2>
      <p>
        If you enter your efficiency in MPG, the calculator first converts your journey
        distance into UK (imperial) gallons used, by dividing miles by MPG. It then
        converts that into litres by multiplying by 4.54609 — the number of litres in one
        UK gallon (notably different from a US gallon, which is smaller, so always double
        check which one your car&apos;s figures use). Multiplying litres used by your
        price per litre gives the total cost, and dividing that by your distance gives
        cost per mile or per kilometre.
      </p>
      <p>
        If you prefer to work in litres per 100km — common on newer cars and imported
        vehicles — the calculator uses that figure directly: litres used equals distance
        in kilometres divided by 100, multiplied by your L/100km figure.
      </p>

      <h2>Worked example</h2>
      <p>
        Say you&apos;re planning a <strong>200-mile</strong> round trip in a car that
        does <strong>45 MPG</strong>, with fuel priced at <strong>£1.45 per litre</strong>.
        You&apos;d use 200 ÷ 45 = 4.44 UK gallons, which converts to around{" "}
        <strong>20.2 litres</strong>. At £1.45 a litre, that&apos;s a total fuel cost of
        roughly <strong>£29.30</strong> for the trip — about <strong>14.6p per mile</strong>.
      </p>
      <p>
        Now compare a less efficient car doing 32 MPG over the same distance: it would
        use around 28.4 litres, costing roughly £41.20 — over £11 more for exactly the
        same journey, purely down to the difference in fuel efficiency.
      </p>

      <h2>Why real-world MPG often differs from the official figure</h2>
      <p>
        The MPG figure quoted on a car&apos;s spec sheet — usually the WLTP combined
        figure on modern cars — is measured under standardised laboratory test
        conditions designed for fair comparison between models, not to predict your
        exact real-world consumption. Cold starts, town driving, hills, heavy loads, air
        conditioning and driving style can all reduce real-world MPG noticeably below the
        official number. For the most accurate cost estimate, use the average MPG shown
        on your car&apos;s own trip computer over a full tank or two, rather than the
        official spec figure.
      </p>

      <h2>Comparing petrol, diesel and hybrid running costs</h2>
      <p>
        Diesel cars typically return higher MPG than equivalent petrol cars, especially
        on motorway journeys, but diesel is often priced a few pence higher per litre —
        so the actual cost saving depends on both the MPG difference and the current
        price gap at the pump. Hybrids generally do best in stop-start town driving,
        where the electric motor can take over more often, and worst on sustained
        motorway runs where the engine does most of the work. Running this calculator
        with each car&apos;s real MPG and your typical fuel price is the simplest way to
        make a fair comparison for your own driving pattern.
      </p>

      <h2>Related calculators</h2>
      <p>
        Fuel is only part of the cost of owning a car — check our{" "}
        <Link href="/calculators/road-tax-calculator-uk">road tax calculator</Link> to see
        your annual VED bill, and factor both into your total motoring budget alongside
        insurance, servicing and depreciation.
      </p>
    </div>
  );
}
