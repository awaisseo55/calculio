import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "What is the difference between BMR and TDEE?",
    answer:
      "BMR, your basal metabolic rate, is roughly how many calories your body uses at complete rest just to function. TDEE, total daily energy expenditure, adds your activity level on top, giving a more realistic picture of how many calories you use in an average day.",
  },
  {
    question: "How accurate is this calculator?",
    answer:
      "It uses the Mifflin-St Jeor equation, one of the most widely used and reasonably accurate formulas for estimating energy needs. It is still an estimate though, and everyone's metabolism varies, so treat the result as a helpful starting point rather than an exact figure.",
  },
  {
    question: "Is it safe to eat at the mild loss calorie figure?",
    answer:
      "A mild deficit like the one shown here is generally considered a gentle, sustainable approach for most healthy adults, but individual circumstances vary. If you have any health conditions, are pregnant, or have concerns about your diet, please speak to your GP or a registered dietitian first.",
  },
  {
    question: "Why does my activity level make such a big difference?",
    answer:
      "Activity level is applied as a multiplier on your BMR, so even a modest change, from sedentary to lightly active for example, can shift your estimated daily calorie needs by several hundred calories. Being honest about your actual activity level gives a more useful result.",
  },
  {
    question: "Should I use this instead of speaking to a professional?",
    answer:
      "No. This calculator gives general information only, not personalised medical or dietary advice. For any specific health or weight goal, especially if you have an existing health condition, speaking to your GP or a registered dietitian is the safest next step.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Total Daily Energy Expenditure, or TDEE, is a general estimate of how many
        calories your body uses in an average day, taking into account both your
        resting metabolism and your activity level. It is a widely used starting
        point for understanding calorie needs, though it is general information
        rather than a personal prescription.
      </p>
      <p>
        Understanding roughly where your maintenance calories sit can be useful
        context, whether you are simply curious about your own energy needs or
        thinking about a gradual, sensible change to your eating habits alongside
        general lifestyle advice from the NHS.
      </p>
      <p>
        This calculator estimates your BMR and TDEE, along with general calorie
        ranges for maintaining, gently reducing, or gently increasing your weight,
        based on commonly used formulas.
      </p>

      <h2>How to use the TDEE calculator</h2>
      <p>
        Enter your gender, age, height and weight, in metric or imperial units,
        along with your activity level. The calculator shows your estimated BMR,
        your TDEE, and general calorie figures for maintenance, a mild deficit, and
        a mild surplus.
      </p>

      <h2>How the calculation works</h2>
      <p>
        This calculator uses the Mifflin-St Jeor equation, one of the most
        commonly used formulas for estimating BMR, which takes your weight,
        height, age and gender into account. Your BMR is then multiplied by an
        activity factor, ranging from 1.2 for a sedentary lifestyle up to 1.9 for
        very physically demanding routines, to estimate your TDEE.
      </p>
      <p>
        Choosing the right activity level matters a lot, so it is worth being
        realistic. Sedentary means little or no structured exercise, closer to a
        desk based routine with minimal walking. Lightly active suits someone
        doing light exercise a few times a week. Moderately active fits regular
        exercise most days. Very active and extra active are for people training
        hard most days, or doing physically demanding work on top of exercise.
        Most people who think of themselves as active actually sit in the light
        to moderate categories rather than the higher ones, so it is worth being
        honest rather than generous when picking a level.
      </p>
      <p>
        The calorie ranges shown for mild loss and mild gain simply adjust your
        TDEE by around 250 calories a day in either direction, reflecting a gentle,
        gradual approach rather than an aggressive target. This calculator
        deliberately avoids suggesting large calorie deficits, since sustainable,
        modest changes tend to work better for most people over time.
      </p>

      <h2>Worked example</h2>
      <p>
        Take a <strong>35 year old man</strong>, <strong>180cm</strong> tall,
        weighing <strong>85kg</strong>, with a <strong>moderately active</strong>{" "}
        lifestyle. His estimated BMR comes to around{" "}
        <strong>1,805 calories</strong> a day. Applying the moderate activity
        multiplier gives an estimated TDEE of around{" "}
        <strong>2,798 calories</strong> a day.
      </p>
      <p>
        For general reference, a mild calorie deficit would sit around{" "}
        <strong>2,548 calories</strong> a day, and a mild surplus around{" "}
        <strong>3,048 calories</strong> a day. These figures are general
        information based on common formulas, not a personal recommendation, and
        should be considered alongside your own health circumstances.
      </p>

      <h2>A note on using this information sensibly</h2>
      <p>
        Calorie needs vary a great deal between individuals, and factors this
        calculator cannot account for, including underlying health conditions,
        medication, and genuine differences in metabolism, all play a role. If you
        are considering any significant change to your diet, or have any health
        concerns at all, the NHS recommends speaking to your GP or a registered
        dietitian, who can give guidance tailored to you rather than a general
        formula.
      </p>
      <p>
        It is worth treating any calorie target as a rough guide to experiment
        with gradually, adjusting based on how you actually feel and how your
        weight responds over several weeks, rather than following a number
        precisely.
      </p>
      <p>
        This calculator will not suggest an aggressive deficit, and deliberately
        will not go below general, widely recognised minimums for healthy adults.
        If you are looking for a rapid change, please pause and speak to a
        healthcare professional rather than pursuing an extreme approach, since
        very low calorie intakes can be harmful and are rarely sustainable in the
        long run.
      </p>

      <h2>Related calculators</h2>
      <p>
        For a simpler, well known measure, try our{" "}
        <Link href="/calculators/bmi-calculator-uk">BMI calculator</Link>. Our{" "}
        <Link href="/calculators/ideal-weight-calculator-uk">
          ideal weight calculator
        </Link>{" "}
        gives a healthy weight range for your height using several formulas, and
        our <Link href="/blog/healthy-bmi-adults-uk">BMI guide</Link> covers NHS
        weight categories and their limitations in more depth. If you are tracking
        other life stage health calculators, our{" "}
        <Link href="/calculators/pregnancy-due-date-calculator-uk">
          pregnancy due date calculator
        </Link>{" "}
        may also be useful.
      </p>
    </div>
  );
}
