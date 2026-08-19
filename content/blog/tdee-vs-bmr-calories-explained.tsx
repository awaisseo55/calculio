import Link from "next/link";
import { CalloutBox } from "@/components/blog/callout-box";
import { RateTable } from "@/components/blog/rate-table";
import type { FaqItem } from "@/lib/types";
import type { TocItem } from "@/components/blog/table-of-contents";

export const toc: TocItem[] = [
  { id: "what-is-bmr", label: "What is BMR?" },
  { id: "what-is-tdee", label: "What is TDEE?" },
  { id: "the-formula", label: "The Mifflin-St Jeor formula" },
  { id: "activity-multipliers", label: "Activity level multipliers" },
  { id: "worked-example", label: "Worked example" },
  { id: "why-it-matters", label: "Why the difference matters" },
  { id: "limitations", label: "Limitations to keep in mind" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "try-calculator", label: "Try the calculators" },
];

export const faq: FaqItem[] = [
  {
    question: "What's the difference between BMR and TDEE?",
    answer:
      "BMR (Basal Metabolic Rate) is the energy your body uses just to stay alive at complete rest, breathing, circulating blood, maintaining body temperature. TDEE (Total Daily Energy Expenditure) is your full daily calorie burn, BMR plus everything else you do that day: walking, working, exercising, even fidgeting. TDEE is always higher than BMR, usually by anywhere from 20% to 90% depending on how active you are.",
  },
  {
    question: "Which formula is most accurate, Mifflin-St Jeor or Harris-Benedict?",
    answer:
      "Mifflin-St Jeor, developed in 1990, is generally considered more accurate for most modern adults than the older Harris-Benedict equation from 1919, and it's the formula most dietitians and NHS-aligned resources now favour. That said, both are population-average estimates, not a measurement of your individual metabolism, so treat either as a solid starting point rather than an exact figure.",
  },
  {
    question: "How many calories should I eat to lose weight?",
    answer:
      "A commonly used starting point is a moderate deficit of around 500 calories a day below your TDEE, which tends to produce roughly 0.5kg (about 1lb) of weight loss a week, though individual results vary. Very large deficits are harder to sustain and can affect energy levels and muscle mass, so a gradual, realistic deficit is generally easier to stick with. If you have any underlying health conditions, it's worth checking with your GP before making a significant change to your diet.",
  },
  {
    question: "Does muscle mass affect BMR?",
    answer:
      "Yes, muscle tissue burns more calories at rest than fat tissue does, so two people of the same weight, height, age and sex can have meaningfully different BMRs depending on their body composition. The Mifflin-St Jeor formula doesn't account for this directly, since it only uses weight, height, age and sex, so it will tend to underestimate BMR for someone who is very muscular and overestimate it for someone with a higher body fat percentage.",
  },
  {
    question: "Is TDEE the same as my \"maintenance calories\"?",
    answer:
      "Yes, TDEE and maintenance calories mean the same thing: the number of calories you'd need to eat to keep your weight roughly stable. Eating consistently above your TDEE tends to lead to weight gain over time, and eating consistently below it tends to lead to weight loss, though water retention and other short-term factors mean your weight can fluctuate day to day regardless.",
  },
  {
    question: "Should I recalculate my TDEE as I lose or gain weight?",
    answer:
      "Yes, it's worth recalculating every few weeks if your weight has changed noticeably, since both BMR and TDEE are based partly on your current weight. As you lose weight, your TDEE generally decreases too, which is one reason weight loss often slows down over time even without any change in habits.",
  },
];

export function ArticleContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        If you've ever looked into calorie tracking, you've probably run into two
        acronyms almost immediately: BMR and TDEE. They sound similar and get used
        somewhat interchangeably online, but they measure two genuinely different
        things, and mixing them up is one of the easiest ways to end up eating far too
        little or far too much. Here's what each one actually means, the formula behind
        them, and a worked example to show how they fit together.
      </p>

      <h2 id="what-is-bmr">What is BMR?</h2>
      <p>
        BMR, or Basal Metabolic Rate, is the number of calories your body burns just to
        keep you alive if you did absolutely nothing all day: no walking, no talking, no
        digesting food, just lying still and breathing. It covers things like keeping
        your heart beating, your organs functioning and your body temperature stable.
        For most adults, BMR accounts for the majority of total daily calorie burn,
        often somewhere between 50% and 75%, even though it only reflects being
        completely at rest.
      </p>

      <h2 id="what-is-tdee">What is TDEE?</h2>
      <p>
        TDEE, or Total Daily Energy Expenditure, is your BMR plus everything else your
        body burns in a normal day: walking around, working, exercising, digesting food,
        and even small movements like fidgeting. TDEE is the number that actually
        matters if you're trying to maintain, lose or gain weight, since it reflects
        your real day-to-day calorie needs rather than just your resting baseline.
      </p>

      <h2 id="the-formula">The Mifflin-St Jeor formula</h2>
      <p>
        The most widely used formula for estimating BMR today is Mifflin-St Jeor,
        published in 1990 and generally considered more accurate for the modern adult
        population than the older Harris-Benedict equation from 1919. It uses your
        weight, height, age and sex:
      </p>
      <RateTable
        caption="Mifflin-St Jeor BMR formula"
        columns={["", "Formula"]}
        rows={[
          ["Men", "10 × weight (kg) + 6.25 × height (cm) − 5 × age (years) + 5"],
          ["Women", "10 × weight (kg) + 6.25 × height (cm) − 5 × age (years) − 161"],
        ]}
      />
      <p>
        The formula gives an estimate in calories per day. From there, TDEE is
        calculated by multiplying your BMR by an activity multiplier that reflects how
        much you move day to day.
      </p>

      <h2 id="activity-multipliers">Activity level multipliers</h2>
      <p>
        The standard activity multipliers used alongside Mifflin-St Jeor are based on
        how much structured exercise and general movement you do in a typical week, in
        line with the pattern the NHS uses when describing physical activity levels for
        adults.
      </p>
      <RateTable
        caption="TDEE activity multipliers"
        columns={["Activity level", "Description", "Multiplier"]}
        rows={[
          ["Sedentary", "Little or no exercise, desk job", "× 1.2"],
          ["Lightly active", "Light exercise 1-3 days a week", "× 1.375"],
          ["Moderately active", "Moderate exercise 3-5 days a week", "× 1.55"],
          ["Very active", "Hard exercise 6-7 days a week", "× 1.725"],
          ["Extra active", "Very hard exercise or physical job", "× 1.9"],
        ]}
      />

      <h2 id="worked-example">Worked example</h2>
      <p>
        Take a 35-year-old woman who weighs 70kg and is 165cm tall, and does moderate
        exercise three to five days a week.
      </p>
      <p>
        <strong>BMR</strong> = (10 × 70) + (6.25 × 165) − (5 × 35) − 161 = 700 + 1,031.25
        − 175 − 161 = <strong>1,395 calories a day</strong>, just to maintain basic
        bodily functions at rest.
      </p>
      <p>
        <strong>TDEE</strong> = 1,395 × 1.55 (moderately active multiplier) ={" "}
        <strong>2,163 calories a day</strong>, her estimated maintenance calories once
        her activity level is factored in.
      </p>
      <p>
        That's a difference of 768 calories a day between BMR and TDEE, purely down to
        movement and activity, which shows why using BMR alone as a target for eating or
        weight management would significantly underestimate what most people actually
        need.
      </p>

      <CalloutBox
        title="Calculate your own BMR and TDEE"
        description="Enter your weight, height, age and activity level for an instant, personalised BMR and TDEE estimate."
        href="/calculators/tdee-calculator-uk"
        cta="Calculate my TDEE"
      />

      <h2 id="why-it-matters">Why the difference matters</h2>
      <p>
        Confusing BMR and TDEE is one of the most common calorie-counting mistakes.
        Someone who eats to their BMR figure, rather than their higher TDEE figure, is
        creating a much bigger calorie deficit than they realise, which can leave them
        undereating, low on energy and more likely to lose muscle along with fat. On the
        other end, someone who overestimates their activity level and inflates their
        TDEE multiplier can end up eating more than they think and stall their progress
        without understanding why. Getting an accurate starting estimate for both
        numbers, then adjusting based on how your actual weight changes over a few
        weeks, is a far more reliable approach than guessing.
      </p>

      <h2 id="limitations">Limitations to keep in mind</h2>
      <ul>
        <li>
          <strong>These are estimates, not measurements.</strong> Mifflin-St Jeor is a
          population-average formula; your individual metabolism could reasonably sit
          10-15% either side of the number it gives you.
        </li>
        <li>
          <strong>Body composition isn't factored in.</strong> Muscle burns more
          calories at rest than fat does, so the formula can underestimate BMR for very
          muscular people and overestimate it for people with a higher body fat
          percentage.
        </li>
        <li>
          <strong>Activity level is self-reported.</strong> It's easy to overestimate
          how active you really are; tracking your actual weight change over two to
          three weeks against your intake is the most reliable way to calibrate your
          real TDEE.
        </li>
        <li>
          <strong>This isn't medical advice.</strong> If you have a health condition
          affecting your metabolism, or any concerns about your weight or eating, speak
          to your GP rather than relying on a calorie formula alone.
        </li>
      </ul>
      <p>
        Once you know your TDEE, you might also want to check a healthy weight range
        with our <Link href="/calculators/bmi-calculator-uk">BMI Calculator</Link>, work
        out a target weight with the{" "}
        <Link href="/calculators/ideal-weight-calculator-uk">
          Ideal Weight Calculator
        </Link>
        , or see your BMR on its own with the{" "}
        <Link href="/calculators/bmr-calculator-uk">BMR Calculator</Link>. For more on
        healthy weight ranges generally, see our{" "}
        <Link href="/blog/healthy-bmi-adults-uk">UK BMI guide</Link>.
      </p>

      <h2 id="faq">Frequently asked questions</h2>
    </div>
  );
}
