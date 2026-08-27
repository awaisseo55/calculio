import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How accurate is a calories burned calculator?",
    answer:
      "It gives a reasonable estimate, not an exact figure. The calculation uses published MET values for each activity alongside your bodyweight, but real energy burn also depends on fitness level, effort, terrain and individual metabolism, so treat the result as a useful guide rather than a precise measurement.",
  },
  {
    question: "What is a MET value?",
    answer:
      "MET stands for Metabolic Equivalent of Task. It compares the energy cost of an activity to the energy you use at rest, so a MET of 8 means an activity burns roughly eight times as much energy as sitting still. This calculator uses standard published MET values for each activity.",
  },
  {
    question: "Does my weight affect how many calories I burn?",
    answer:
      "Yes, significantly. Heavier bodies use more energy to move, so for the same activity and duration, someone who weighs more will generally burn more calories than someone who weighs less. That is why this calculator asks for your weight alongside the activity and duration.",
  },
  {
    question: "Why do different types of running burn different amounts of calories?",
    answer:
      "Faster running has a higher MET value because it takes more effort and energy per minute than a slower pace. This calculator offers a few running speeds, from an easy jog to a fast pace, so you can pick the one closest to your actual effort for a more accurate estimate.",
  },
  {
    question: "Can I use this to plan weight loss?",
    answer:
      "This calculator can help you understand roughly how activity contributes to your overall energy balance, but weight management depends on many factors, including your total daily calorie intake. Our TDEE calculator gives a fuller picture of your daily energy needs, and it is best to avoid aggressive calorie targets without professional guidance.",
  },
  {
    question: "Why does the same activity show different results on different apps?",
    answer:
      "Different tools sometimes use slightly different MET tables, rounding methods, or adjustments for fitness level, which explains small differences between results. This calculator uses standard published MET values applied consistently, so results should be broadly in line with other reputable calculators.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Whether you are going for a run, hitting the gym or just want to know how much a session of gardening
        adds up to, this calorie burn calculator gives a general estimate of the energy you use during exercise
        based on your bodyweight, the activity and how long you do it for.
      </p>

      <h2>How to use the calories burned calculator</h2>
      <p>
        Choose the activity that best matches what you did, or plan to do, enter your weight in kilograms, and
        enter how long you were active for in minutes. The calculator instantly shows an estimated total calorie
        burn for that session, along with a calories per minute figure so you can compare activities at a glance.
      </p>

      <h2>How the calculation works</h2>
      <p>
        The calculator uses MET (Metabolic Equivalent of Task) values, a standard measure from the widely
        published Compendium of Physical Activities that rates how intense an activity is compared with resting.
        Calories per minute are worked out as MET &times; 3.5 &times; your weight in kilograms, divided by 200,
        then multiplied by your session length in minutes to get a total.
      </p>

      <h2>Worked example</h2>
      <p>
        For someone weighing <strong>75kg</strong> going for a <strong>30 minute run at a moderate 10km/h
        pace</strong> (MET of 9.8), calories per minute work out as (9.8 &times; 3.5 &times; 75) &divide; 200
        &asymp; <strong>12.9 kcal per minute</strong>. Over a 30 minute session, that comes to roughly{" "}
        <strong>386 kcal burned</strong>. The same person doing 30 minutes of yoga (MET of 3.0) would burn
        considerably less, at around 118 kcal, showing how much intensity affects the total.
      </p>

      <h2>Comparing activities fairly</h2>
      <p>
        Because this calculator uses MET values, you can compare very different activities on a like-for-like
        basis. A brisk 45 minute walk might burn a similar number of calories to a shorter, more intense HIIT
        session, which can help you choose an activity that fits your available time as well as your fitness
        goals. It is worth remembering that consistency over time tends to matter more for overall health and
        fitness than any single session&apos;s calorie total.
      </p>

      <h2>Common mistakes people make</h2>
      <p>
        A common mistake is picking an activity intensity that flatters your actual effort, for example choosing
        &ldquo;vigorous cycling&rdquo; for a relaxed ride, which can significantly overestimate the result. Another
        mistake is treating the figure as exact rather than an estimate, and then trying to precisely offset it
        with food, since day-to-day energy needs vary for many reasons beyond a single workout. It also helps to
        remember that this only covers the activity itself, not your total daily energy expenditure from
        everything else you do.
      </p>

      <h2>Related calculators</h2>
      <p>
        For your full daily energy needs including rest and general activity, try our{" "}
        <Link href="/calculators/tdee-calculator-uk">TDEE calculator</Link> or our{" "}
        <Link href="/calculators/bmr-calculator-uk">BMR calculator</Link>. Runners can also check their{" "}
        <Link href="/calculators/running-pace-calculator-uk">running pace</Link> with our dedicated calculator, and
        gym-goers may find our{" "}
        <Link href="/calculators/heart-rate-zone-calculator-uk">heart rate zone calculator</Link> useful for
        planning training intensity. For more on how these energy figures fit together, see our guide on{" "}
        <Link href="/blog/tdee-vs-bmr-calories-explained">TDEE vs BMR explained</Link>.
      </p>
    </div>
  );
}
