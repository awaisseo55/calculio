import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How much is the average UK water bill?",
    answer:
      "The typical UK household water and sewerage bill is in the region of £470 to £500 a year, though this varies noticeably by region and water company, since some parts of the country have higher infrastructure costs than others. Your own bill also depends on your household size and whether you are on a meter.",
  },
  {
    question: "Is it cheaper to be on a water meter?",
    answer:
      "It depends on your household. Smaller households and people living alone often save money on a meter, since they are billed for what they actually use rather than a fixed average. Larger households with high water use sometimes pay less unmetered, since unmetered charges are typically based on the property rather than the number of occupants or their usage.",
  },
  {
    question: "Can I switch between metered and unmetered billing?",
    answer:
      "Most households can request a water meter be installed, usually free of charge, and many suppliers offer a trial period where you can switch back to unmetered billing within a set time if the meter turns out to cost more. Contact your water company directly to check your options, since not every property is suitable for a standard meter.",
  },
  {
    question: "Why do water bills vary so much by region?",
    answer:
      "Different water companies serve different parts of the country, each with its own network of pipes, treatment works and reservoirs to maintain. Areas with more challenging geography, lower population density, or older infrastructure that needs more investment tend to have higher average bills, which is why the same household can pay noticeably different amounts depending on which water company serves their area.",
  },
  {
    question: "Does this calculator give an exact figure for my bill?",
    answer:
      "No, this calculator gives an estimate based on typical, illustrative UK rates and regional patterns, not your specific water company's current published tariff. Water company charges change each year and vary by exact location within a region, so check your water company's own website or a recent bill for a precise figure.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Water bills rarely get the same attention as energy bills, but they
        are a genuine part of household running costs, and one that varies
        more by region than many people realise. This calculator estimates
        your annual and monthly water bill based on your household size,
        region, and whether you are on a meter, and compares your result to
        a typical UK household.
      </p>

      <h2>How to use the water bill calculator</h2>
      <p>
        Enter your household size and select your water company, or choose
        the UK average option if you are not sure or want a general
        estimate. Choose whether you are on a water meter or billed
        unmetered, and if metered, enter your estimated daily water use per
        person, or use the UK average figure of around 142 litres a day as
        a starting point. The calculator shows your estimated annual bill,
        monthly cost, and cost per person, alongside a comparison to typical
        UK household spend.
      </p>

      <h2>How the calculation works</h2>
      <p>
        For metered households, the calculator multiplies your household
        size by your daily litres per person and the days in a year, then
        applies a typical price per 1,000 litres, adjusted by a regional
        factor that reflects how your chosen water company&apos;s charges
        generally compare to the national average. For unmetered
        households, the calculator applies a typical average annual bill
        adjusted by the same regional factor, since unmetered charges are
        usually based on a property&apos;s rateable value rather than how
        many people live there or how much water they use.
      </p>
      <p>
        These figures are illustrative averages rather than an exact quote
        from any specific water company, since actual tariffs change
        annually and vary by precise location even within a single
        company&apos;s region. Treat the result as a helpful planning
        estimate, and check your own supplier&apos;s current rates for an
        exact figure.
      </p>

      <h2>Worked example</h2>
      <p>
        Take a household of <strong>4 people</strong>, on a water meter,
        using around <strong>140 litres per person per day</strong>, in an
        area close to the UK average.
      </p>
      <p>
        That works out at roughly <strong>204,400 litres a year</strong>{" "}
        across the household. Applied to a typical price per 1,000 litres,
        this gives an estimated annual bill of around{" "}
        <strong>£777</strong>, or about <strong>£65 a month</strong>,
        working out at around <strong>£194 per person</strong> for the
        year. This is higher than the typical single-average-household
        figure of around £470 to £500, simply because more people are
        using water in the same home, each adding to the total metered
        usage.
      </p>
      <p>
        Try switching to unmetered billing in the calculator above with the
        same household size. Since unmetered bills are not based on the
        number of people in the property, the estimate may come out lower
        or higher than the metered figure depending on how much water your
        household actually uses relative to the fixed unmetered average,
        which is exactly the comparison worth making before requesting a
        meter.
      </p>

      <h2>Ways to reduce your water bill</h2>
      <p>
        If you are on a water meter, a handful of simple habits can make a
        real difference to your annual bill. Fixing a dripping tap promptly
        matters more than it might seem, since a single dripping tap can
        waste a genuinely significant amount of water over a full year.
        Shorter showers instead of baths, running washing machines and
        dishwashers only with a full load, and fitting a water-efficient
        showerhead are all straightforward changes that reduce metered
        usage without much impact on daily life.
      </p>
      <p>
        Garden use is often an overlooked factor too. Watering with a can
        rather than a hose, collecting rainwater in a water butt, and
        watering in the early morning or evening to reduce evaporation can
        all reduce outdoor water use meaningfully over a summer, which is
        one of the periods where metered households often see their usage,
        and therefore their bill, rise the most.
      </p>
      <p>
        Many water companies also offer free water-saving devices, such as
        shower timers, tap inserts, and dual-flush conversion kits, on
        request. These are worth checking for on your supplier&apos;s
        website, since they are typically provided at no cost and can help
        reduce a metered bill without requiring any change in daily habits
        beyond fitting the device itself.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        A common mistake is assuming a water meter always saves money. It
        typically benefits smaller households and lower water users, but
        can cost more for larger families with high water use, particularly
        households with young children, frequent baths, or a garden that
        needs regular watering in summer. Working out your rough daily
        litres per person before switching, using this calculator, is a
        useful way to check before committing.
      </p>
      <p>
        It is also easy to overlook water bills when budgeting for a new
        home, especially compared with more visible costs like council tax
        or energy. Water and sewerage charges are a genuine ongoing cost
        worth factoring into your monthly budget from the start, alongside
        other running costs covered in our{" "}
        <Link href="/blog/first-home-cost-uk-2026">
          first home cost guide
        </Link>
        .
      </p>
      <p>
        Finally, remember that reducing water use, through shorter showers,
        fixing dripping taps, and using appliances efficiently, has a
        genuine effect on a metered bill, since you are billed for what you
        actually use. Unmetered households do not see the same direct
        saving from reduced usage, since their bill is fixed regardless of
        consumption.
      </p>

      <h2>Related calculators</h2>
      <p>
        If you are planning home improvements, our{" "}
        <Link href="/calculators/paint-coverage-calculator-uk">
          paint coverage calculator
        </Link>{" "}
        works out how much paint you need for a room. Check your{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay
        </Link>{" "}
        to see how household bills like this one fit into your overall
        monthly budget, and if you are weighing up a house move, our{" "}
        <Link href="/calculators/mortgage-calculator-uk">
          mortgage calculator
        </Link>{" "}
        and{" "}
        <Link href="/blog/first-home-cost-uk-2026">
          first home cost guide
        </Link>{" "}
        cover the wider costs of buying and running a home.
      </p>
    </div>
  );
}
