import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "Is an electric car cheaper to run than petrol in the UK?",
    answer:
      "Usually yes, particularly if you can charge mostly at home overnight on a cheaper tariff, since electricity per mile is typically less expensive than petrol per mile even at standard rates. The gap narrows for drivers who rely heavily on public rapid chargers, which can cost close to or even more than petrol per mile in some cases, so your own charging mix matters a lot.",
  },
  {
    question: "Do electric cars pay road tax (VED) now?",
    answer:
      "Yes. Since 1 April 2025, new and existing electric vehicles pay Vehicle Excise Duty on broadly the same basis as petrol and diesel cars, ending the previous exemption. Our road tax calculator has the full band-by-band detail if you want an exact figure for your specific vehicle.",
  },
  {
    question: "How much does it cost to charge an electric car at home?",
    answer:
      "It depends on your electricity tariff and your car's efficiency, but as a rough guide, a car doing 3.5 miles per kWh charging at a typical unit rate costs a few pence per mile, considerably less than the equivalent cost of petrol. Many suppliers offer cheaper overnight tariffs specifically aimed at EV drivers, which can reduce home charging costs further if you can charge while rates are low.",
  },
  {
    question: "Is public charging always more expensive than charging at home?",
    answer:
      "Generally yes, since public chargepoint operators, particularly rapid and ultra-rapid chargers on motorways, charge a premium for speed and convenience compared with a typical domestic electricity tariff. Slower public chargers, such as those at supermarkets or on-street, are often cheaper than rapid chargers but still usually cost more per kWh than a home overnight rate.",
  },
  {
    question: "What is a realistic miles-per-kWh figure to use?",
    answer:
      "Most electric cars manage somewhere between 3 and 4 miles per kWh in mixed real-world driving, with smaller and more efficient models doing better and larger SUVs doing worse. Motorway driving at higher speeds typically uses more energy per mile than town driving, similar to how petrol cars use more fuel at higher speeds, so your own efficiency will depend on the car and how you drive it.",
  },
  {
    question: "How long does it take an electric car to pay back a higher purchase price?",
    answer:
      "It depends entirely on the size of the price difference, your annual mileage, and how much you save per mile on fuel, so there is no single answer. Higher-mileage drivers who charge mostly at home tend to pay back a price premium considerably faster than low-mileage drivers who rely on expensive public charging, which is exactly what the payback estimate in this calculator is designed to show.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Working out whether an electric car actually saves you money depends
        on more than just the price at the pump versus the price per kWh.
        Your mileage, how much you charge at home versus in public, your
        insurance and servicing costs, and the newly introduced road tax on
        electric vehicles all play a part. This calculator brings all of
        that together into a single annual running cost, with a direct
        comparison against an equivalent petrol car.
      </p>

      <h2>How to use the EV running cost calculator</h2>
      <p>
        Enter your annual mileage and your car&apos;s efficiency in miles per
        kWh, which typically falls between 3 and 4 for most electric cars.
        Add your home electricity rate, the share of your charging you
        expect to do at home versus in public, and a public charging rate.
        Then add your estimated annual insurance, servicing and road tax
        (VED), which now applies to electric cars following the April 2025
        rule change. Finally, enter a petrol comparison MPG and price per
        litre, and optionally the price difference between the electric car
        and an equivalent petrol model, to see an estimated payback period.
      </p>

      <h2>How the calculation works</h2>
      <p>
        Total electricity used is your annual mileage divided by your
        car&apos;s miles per kWh figure. That usage is then split between
        home and public charging based on the percentage you enter, each
        costed at its own rate, since public charging is usually
        considerably more expensive per kWh than a typical home tariff. Your
        annual running cost adds this electricity cost to your insurance,
        servicing and VED. For the petrol comparison, the calculator works
        out how many litres an equivalent car would use at your chosen MPG,
        using the standard conversion of 4.54609 litres per gallon, then
        multiplies that by your petrol price per litre.
      </p>
      <p>
        If you enter a price difference between the electric car and a
        comparable petrol model, the calculator divides that figure by your
        annual fuel savings to estimate a simple payback period in years. For
        the full band-by-band detail on what your specific car will actually
        pay in VED, our{" "}
        <Link href="/calculators/road-tax-calculator-uk">
          road tax calculator
        </Link>{" "}
        covers first-year and standard rates for every fuel type.
      </p>

      <h2>Worked example</h2>
      <p>
        Take a driver covering <strong>8,000 miles</strong> a year in an
        electric car doing <strong>3.5 miles per kWh</strong>, charging{" "}
        <strong>80% at home</strong> at 25.7p per kWh and the rest on public
        chargers at 60p per kWh, with £650 insurance, £150 servicing and
        £195 VED a year.
      </p>
      <p>
        Total electricity used comes to 8,000 &divide; 3.5 ={" "}
        <strong>2,286 kWh</strong> a year, split into 1,829 kWh at home and
        457 kWh in public. Electricity cost comes to around{" "}
        <strong>£744 a year</strong>. Adding insurance, servicing and VED
        brings the total annual running cost to around{" "}
        <strong>£1,739</strong>, or about <strong>21.7p a mile</strong>.
      </p>
      <p>
        An equivalent 40mpg petrol car covering the same 8,000 miles a year
        at £1.50 a litre would use around 909 litres of fuel, costing around{" "}
        <strong>£1,364 a year</strong> on fuel alone, roughly{" "}
        <strong>£620 a year more</strong> than the electric car&apos;s
        electricity cost. If the electric car cost £3,000 more to buy, that
        difference would take a little under 5 years to pay back purely
        through fuel savings, before accounting for any difference in
        insurance, servicing or resale value.
      </p>

      <h2>Why your charging mix matters so much</h2>
      <p>
        The single biggest factor in whether an EV genuinely saves you money
        is how much of your charging happens at home on a cheap tariff
        versus how much relies on public rapid chargers. Drivers with a
        driveway or garage who charge overnight, sometimes on a specific EV
        tariff with cheaper off-peak rates, tend to see the biggest savings
        versus petrol. Drivers without home charging access who rely mostly
        on public chargepoints see a much smaller gap, and in some cases
        little to no saving at all, since rapid charging prices can approach
        petrol-equivalent costs per mile.
      </p>

      <h2>Common mistakes when comparing EV and petrol running costs</h2>
      <p>
        A common mistake is comparing only fuel or electricity cost and
        ignoring that electric cars now pay VED too, following the rule
        change from April 2025, so the total cost gap with petrol is smaller
        than it used to be. Our{" "}
        <Link href="/blog/uk-car-tax-2026-ved-guide">
          UK car tax 2026 VED guide
        </Link>{" "}
        covers exactly how the rates compare across fuel types. It is also
        easy to overlook that electric cars are exempt from the London
        Ultra Low Emission Zone charge, which can be a meaningful saving for
        regular London drivers on top of any fuel saving. Our{" "}
        <Link href="/blog/london-driving-charges-2026">
          London driving charges guide
        </Link>{" "}
        explains ULEZ and the Congestion Charge in full.
      </p>

      <h2>Related calculators</h2>
      <p>
        To work out the exact fuel cost of a specific journey or trip, use
        our{" "}
        <Link href="/calculators/fuel-cost-calculator-uk">
          fuel cost calculator
        </Link>
        . If you want to compare two specific petrol or diesel cars by fuel
        economy, our{" "}
        <Link href="/calculators/mpg-calculator-uk">MPG calculator</Link>{" "}
        can help. For the full VED breakdown on any vehicle, see our{" "}
        <Link href="/calculators/road-tax-calculator-uk">
          road tax calculator
        </Link>
        , and if you regularly drive into central London, our{" "}
        <Link href="/calculators/congestion-charge-ulez-calculator-uk">
          Congestion Charge and ULEZ calculator
        </Link>{" "}
        shows what you could save by switching to an electric car.
      </p>
    </div>
  );
}
