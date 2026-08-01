import Link from "next/link";
import { CalloutBox } from "@/components/blog/callout-box";
import type { FaqItem } from "@/lib/types";
import type { TocItem } from "@/components/blog/table-of-contents";

export const toc: TocItem[] = [
  { id: "price-cap", label: "Understanding the Ofgem price cap" },
  { id: "room-by-room", label: "Room-by-room ways to save" },
  { id: "home-improvements", label: "Home improvements that pay back" },
  { id: "grants-schemes", label: "Government schemes and grants" },
  { id: "switch-supplier", label: "Should you switch supplier" },
  { id: "solar-panels", label: "Solar panels and renewables" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "try-calculator", label: "Calculate your energy bill" },
];

export const faq: FaqItem[] = [
  {
    question: "What is the Ofgem price cap and does it cap my whole bill?",
    answer:
      "The Ofgem price cap limits the unit rate and standing charge that suppliers can charge customers on a standard variable tariff, reviewed every three months. It does not cap your total bill directly, since your final cost still depends on how much gas and electricity you actually use, so two households under the same cap can have very different bills.",
  },
  {
    question: "Is switching energy supplier still worth it in 2026?",
    answer:
      "It depends on how fixed deals compare to the current price cap at the time you check. When fixed tariffs are priced meaningfully below the cap, switching or fixing can save money. When the cap itself is relatively low, staying on a capped variable tariff can be the cheaper option, so it is worth comparing periodically using a comparison site rather than assuming either option is always best.",
  },
  {
    question: "How long does loft or cavity wall insulation take to pay for itself?",
    answer:
      "It varies by property and how under-insulated it currently is, but topping up loft insulation from little or none to the recommended depth tends to have one of the shortest payback periods of any home improvement, given the relatively low material cost and meaningful ongoing saving. Cavity wall insulation typically has a similarly favourable payback period for suitable properties.",
  },
  {
    question: "Am I eligible for the Warm Home Discount?",
    answer:
      "Eligibility is generally based on receiving certain means-tested benefits, most commonly Pension Credit or Universal Credit alongside meeting specific criteria, and is applied directly to your electricity account by your supplier or, in some cases, automatically by the government. Check GOV.UK or your energy supplier for the current eligibility criteria and how to apply, since the scheme's exact rules are reviewed each year.",
  },
  {
    question: "Do solar panels make sense for a typical UK home?",
    answer:
      "It depends heavily on your roof orientation, shading, current electricity usage patterns and the upfront cost you can access, since solar panels generate the most value when you use a good share of the electricity directly rather than exporting most of it back to the grid. Payback periods vary widely, so getting a personalised quote and checking whether planning permission is needed for your specific property is a sensible first step.",
  },
  {
    question: "What is the single most effective way to cut my energy bill?",
    answer:
      "There is no universal answer, since it depends on your current situation, but for most under-insulated older homes, addressing loft and cavity wall insulation first tends to give the best combination of low cost and high impact before considering bigger-ticket options like a heat pump or solar panels. For any home, simply understanding where your usage actually goes, using a calculator or your smart meter data, is a useful starting point before spending on anything.",
  },
];

export function ArticleContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Energy bills remain one of the largest and most stressful household
        costs in the UK, and the gap between the cheapest and most expensive
        ways of heating and powering a similar home can be significant. This
        guide walks through practical, realistic ways to reduce your gas and
        electricity bill in 2026, from free daily habits to bigger home
        improvements, starting with getting a clear estimate of where you
        stand using our{" "}
        <Link href="/calculators/energy-bill-calculator-uk">
          energy bill calculator
        </Link>
        .
      </p>

      <h2 id="price-cap">Understanding the Ofgem price cap</h2>
      <p>
        The energy price cap, set by Ofgem and reviewed every three months,
        limits how much suppliers can charge per unit of gas and electricity,
        and how much they can charge as a daily standing charge, for
        customers on a standard variable tariff. It is often misunderstood as
        a cap on your total bill, but it is actually a cap on the rate, so
        your final bill still depends entirely on how much energy you use.
        Two neighbouring households under an identical price cap can have
        very different bills if one uses considerably more gas and
        electricity than the other.
      </p>
      <p>
        Your bill is made up of two separate charges for each fuel: a
        standing charge, a fixed daily amount you pay regardless of usage,
        which covers the cost of maintaining your connection to the network,
        and a unit rate, charged per kWh actually used. Because the standing
        charge applies every single day of the year, even a property that
        uses very little energy still has a meaningful baseline cost, which
        is worth keeping in mind if you are comparing tariffs or considering
        switching supplier.
      </p>
      <p>
        Ofgem also publishes Typical Domestic Consumption Values, an
        industry-standard reference for low, medium and high usage
        households, used across the industry to illustrate what a
        &ldquo;typical&rdquo; bill looks like under the current cap. A
        medium-use home is generally estimated at around 2,700 kWh of
        electricity and 11,500 kWh of gas a year, though your own home could
        easily sit well above or below that depending on its size,
        insulation, number of occupants and heating system, which is exactly
        why a personalised estimate is more useful than a single national
        average figure.
      </p>
      <p>
        Energy is rarely the only large recurring bill a household is trying
        to manage. If you also want to check where you stand on{" "}
        <Link href="/calculators/council-tax-calculator-uk">
          council tax
        </Link>
        , our{" "}
        <Link href="/blog/uk-council-tax-guide-2026">
          complete UK council tax guide
        </Link>{" "}
        covers bands, discounts and what happens if you fall behind, using
        the same kind of practical, worked-example approach as this guide.
      </p>

      <h2 id="room-by-room">Room-by-room ways to save</h2>
      <p>
        Before changing anything, it helps to know your current baseline.
        Run your household size, property type and heating system through
        our{" "}
        <Link href="/calculators/energy-bill-calculator-uk">
          energy bill calculator
        </Link>{" "}
        to see an estimated annual and monthly cost, then come back and
        recalculate after making changes to see roughly how much difference
        they make.
      </p>
      <h3>Kitchen</h3>
      <p>
        Only boil the water you actually need in the kettle rather than
        filling it by default, since overfilling and reboiling is one of the
        most common sources of small, repeated waste. Batch cooking and
        using a microwave or air fryer for smaller portions instead of a full
        oven, where practical, also cuts electricity use meaningfully over a
        year, since ovens draw a lot of power and take time to heat up for
        even a small dish.
      </p>
      <h3>Bathroom</h3>
      <p>
        Cutting shower time by even a couple of minutes, and swapping a bath
        for a shower where possible, reduces both water heating and water
        bill costs together. A water-efficient shower head can reduce flow
        without a noticeable drop in comfort for many households, and fixing
        a dripping hot tap promptly avoids continuously heating water that
        simply goes down the drain.
      </p>
      <h3>Living room</h3>
      <p>
        Bleeding radiators that are cold at the top but warm at the bottom
        releases trapped air and lets your heating system work efficiently
        again, often making a noticeable difference for very little effort or
        cost. Closing curtains once it gets dark helps retain heat, and
        turning your thermostat down by even a single degree is a widely
        cited way to reduce heating costs without a noticeable comfort
        difference for most people.
      </p>
      <h3>Bedrooms</h3>
      <p>
        Unplugging chargers and electronics that are not in use, rather than
        leaving them drawing standby power overnight, adds up over a full
        year across multiple bedrooms. A slightly lower bedroom temperature
        overnight, supported by good bedding rather than a higher thermostat
        setting, is another common, low-cost adjustment.
      </p>
      <h3>Garden and outdoor</h3>
      <p>
        Solar-powered or timer-controlled outdoor lighting avoids running
        garden lights on mains electricity all evening unnecessarily, and a
        water butt for the garden reduces reliance on a hose if you are on a
        water meter. If you have an electric vehicle, charging overnight on
        a suitable tariff, where your supplier offers one, can be
        considerably cheaper than daytime charging.
      </p>

      <h2 id="home-improvements">Home improvements that pay back</h2>
      <p>
        Loft insulation is usually the single best-value improvement for an
        under-insulated older home, given its relatively low material cost
        and meaningful reduction in heat loss through the roof. Our{" "}
        <Link href="/calculators/loft-insulation-calculator-uk">
          loft insulation calculator
        </Link>{" "}
        estimates how many rolls you need to reach the recommended depth and
        gives a rough sense of the potential saving based on your current
        depth.
      </p>
      <p>
        Cavity wall insulation, suitable for many homes built from the 1920s
        onwards with a gap between an inner and outer wall layer, similarly
        tends to have a favourable payback period for eligible properties.
        Double glazing and boiler upgrades cost considerably more upfront and
        take longer to pay back through energy savings alone, but often bring
        other benefits too, like reduced noise and improved reliability,
        alongside the running cost saving. An old, inefficient boiler
        replaced with a modern condensing boiler can noticeably cut gas use
        for the same amount of heat produced, since older models waste more
        energy as exhaust heat rather than converting it into warmth for the
        home.
      </p>
      <p>
        A heat pump is a bigger decision again: it typically costs
        considerably more to install than a like-for-like gas boiler
        replacement, even after the Boiler Upgrade Scheme grant, but produces
        roughly three units of heat for every unit of electricity it uses,
        making it far more efficient than direct electric heating and,
        depending on relative gas and electricity prices, potentially
        cheaper to run than gas too. It suits well-insulated homes best,
        since it typically runs at a lower flow temperature than a gas
        boiler, so pairing a heat pump installation with loft and wall
        insulation tends to give the best results.
      </p>
      <p>
        Smart thermostats, which let you schedule and zone your heating more
        precisely than a basic dial thermostat, and switching old
        incandescent or halogen bulbs to LED lighting, are both relatively
        low-cost changes with a reasonably quick payback period, particularly
        in rooms or fittings used for several hours a day.
      </p>

      <h2 id="grants-schemes">Government schemes and grants available</h2>
      <p>
        ECO4 (the Energy Company Obligation) is a government scheme requiring
        larger energy suppliers to fund insulation and heating upgrades for
        eligible low income and vulnerable households, often at no direct
        cost to the resident. The Boiler Upgrade Scheme offers a grant
        towards the cost of replacing a fossil fuel boiler with a heat pump,
        aimed at making the larger upfront cost of a heat pump more
        comparable to a like-for-like gas boiler replacement.
      </p>
      <p>
        The Warm Home Discount provides a one-off annual reduction applied
        directly to eligible households&apos; electricity bills, generally
        targeted at people receiving certain means-tested benefits. The Cold
        Weather Payment is a separate, automatic payment triggered when
        average local temperatures fall below a set threshold for a sustained
        period, for people already receiving qualifying benefits, while the
        Winter Fuel Payment supports pensioner households specifically with
        winter heating costs. Eligibility criteria and amounts for all of
        these schemes are reviewed regularly, so check GOV.UK for the current
        rules before assuming you do or do not qualify.
      </p>

      <CalloutBox
        title="Try our energy bill calculator"
        description="Estimate your annual and monthly gas and electricity bill based on your household size, property type, heating system and unit rates."
        href="/calculators/energy-bill-calculator-uk"
        cta="Calculate my energy bill"
      />

      <h2 id="switch-supplier">Should you switch supplier</h2>
      <p>
        Switching supplier involves comparing tariffs, usually through a
        comparison site, and signing up to a new deal that then handles the
        switch automatically without any interruption to your actual gas or
        electricity supply. The genuine question is not whether switching is
        inherently good or bad, but whether a fixed deal on offer at the time
        beats the current price cap level, which changes from one review
        period to the next.
      </p>
      <p>
        Check for exit fees before switching away from a fixed deal early,
        since some tariffs charge a penalty for leaving before the contract
        ends, though this is usually waived if you are switching within the
        final weeks of your term. It is also worth checking whether your
        current supplier will simply match or beat an external quote before
        going through the hassle of switching, since some do this
        automatically when you contact them to end a contract.
      </p>
      <p>
        A fixed tariff gives price certainty for the length of the contract,
        which can be reassuring if prices are expected to rise, but can also
        mean paying more than the cap if prices fall during your fixed term
        and you are tied into the higher rate. A variable tariff tracks the
        price cap directly, offering more flexibility but less certainty.
        Whatever you decide, setting aside the gap between your old and new
        tariff with a{" "}
        <Link href="/calculators/savings-goal-calculator-uk">
          savings goal calculator
        </Link>{" "}
        is a simple way to build a buffer for the months your bill runs
        higher than usual, like the depths of winter.
      </p>

      <h2 id="solar-panels">Solar panels and renewable options</h2>
      <p>
        Before committing to a bigger project like solar panels, it is worth
        checking the more modest, lower-cost options first, since our{" "}
        <Link href="/calculators/loft-insulation-calculator-uk">
          loft insulation calculator
        </Link>{" "}
        and a re-run of your figures through our{" "}
        <Link href="/calculators/energy-bill-calculator-uk">
          energy bill calculator
        </Link>{" "}
        may show that insulation alone closes much of the gap you were
        hoping solar panels would solve.
      </p>
      <p>
        Solar panels generate the most value when a good share of the
        electricity produced is used directly in the home rather than
        exported back to the grid, since export rates are typically lower
        than what you would otherwise pay to import electricity. Payback
        periods vary widely depending on your roof&apos;s orientation, any
        shading from nearby buildings or trees, your usage patterns, and the
        upfront cost, so a personalised quote from an accredited installer is
        far more useful than a generic UK-wide average.
      </p>
      <p>
        Most residential solar panel installations in the UK do not require
        planning permission, since they typically fall under permitted
        development rights, though listed buildings, conservation areas, and
        some flats or maisonettes can have different rules, so it is worth
        checking with your local council before committing if you are unsure
        whether your property is a standard case.
      </p>

      <h2 id="faq">Frequently asked questions</h2>
    </div>
  );
}
