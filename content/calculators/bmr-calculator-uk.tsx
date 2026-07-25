import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "What is BMR and why does it matter?",
    answer:
      "BMR (Basal Metabolic Rate) is an estimate of how many calories your body burns just to keep you alive at complete rest: breathing, circulating blood, maintaining body temperature and running basic cell processes, without any physical activity at all. It is useful as a baseline for understanding your overall daily calorie needs, particularly when combined with your activity level.",
  },
  {
    question: "What is the difference between BMR and TDEE?",
    answer:
      "BMR is your calorie burn at complete rest, with no activity at all. TDEE (Total Daily Energy Expenditure) takes your BMR and multiplies it by an activity factor to estimate your total calories burned across a normal day, including exercise, walking, and general movement. Our TDEE calculator builds on this BMR figure to give you that fuller daily picture.",
  },
  {
    question: "Which formula is more accurate, Mifflin-St Jeor or Harris-Benedict?",
    answer:
      "Most dietitians and nutrition professionals now consider the Mifflin-St Jeor equation, published in 1990, to be more accurate for most people than the older Harris-Benedict equation, which dates back to 1919 and was revised in 1984. Mifflin-St Jeor tends to estimate slightly lower, and research suggests it more closely matches measured energy expenditure in modern populations, though both are estimates rather than exact measurements.",
  },
  {
    question: "Why do the two formulas give different results for the same person?",
    answer:
      "Both formulas use the same core measurements, weight, height, age and gender, but weight them differently based on the population data each was built from. Harris-Benedict tends to run slightly higher than Mifflin-St Jeor for most people, sometimes by a meaningful margin, which is one reason it has gradually fallen out of favour with dietitians.",
  },
  {
    question: "Should I eat exactly my BMR in calories?",
    answer:
      "No. Your BMR represents only the energy needed at complete rest, before any daily activity is included. Eating at your BMR alone would put you in a significant calorie deficit for almost anyone with a normal daily routine. Use our TDEE calculator, which factors in your activity level, to get a more realistic figure for daily calorie needs.",
  },
  {
    question: "Is this calculator accurate for everyone?",
    answer:
      "Both formulas are population averages and will not be precisely accurate for every individual, particularly people with a lot of muscle mass, a very high or low body fat percentage, certain medical conditions, or hormonal factors that affect metabolism. Treat the result as a helpful estimate and starting point, not a medical measurement, and speak to your GP or a registered dietitian if you have specific health or weight concerns.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Your body burns calories every second of the day, even while you are
        completely still, just to keep essential systems running: your heart
        beating, your lungs breathing, your organs functioning and your body
        temperature regulated. This baseline calorie burn is called your
        Basal Metabolic Rate, or BMR, and it forms the foundation for
        understanding your wider daily energy needs.
      </p>

      <h2>How to use the BMR calculator</h2>
      <p>
        Enter your gender, age, height and weight, in metric or imperial
        units, and choose which formula you would like to use: Mifflin-St
        Jeor or Harris-Benedict. The calculator shows your BMR in calories
        per day using your chosen formula, alongside the result from the
        other formula for comparison, so you can see how much the two
        methods differ for your own measurements.
      </p>
      <p>
        BMR on its own is a useful reference point, but most people find it
        more practical alongside their Total Daily Energy Expenditure (TDEE),
        which adds an activity multiplier on top of BMR to estimate calories
        burned across a whole day, including exercise and general movement.
        Our{" "}
        <Link href="/calculators/tdee-calculator-uk">TDEE calculator</Link>{" "}
        uses the same underlying BMR calculation and takes that extra step.
      </p>

      <h2>The BMR formulas explained</h2>
      <p>
        The <strong>Mifflin-St Jeor equation</strong>, published in 1990, is
        the formula most widely recommended by dietitians today:
      </p>
      <ul>
        <li>Men: (10 &times; weight in kg) + (6.25 &times; height in cm) &minus; (5 &times; age) + 5</li>
        <li>Women: (10 &times; weight in kg) + (6.25 &times; height in cm) &minus; (5 &times; age) &minus; 161</li>
      </ul>
      <p>
        The <strong>Harris-Benedict equation</strong>, in its revised 1984
        form, is the older and still widely known alternative:
      </p>
      <ul>
        <li>Men: 88.362 + (13.397 &times; weight in kg) + (4.799 &times; height in cm) &minus; (5.677 &times; age)</li>
        <li>Women: 447.593 + (9.247 &times; weight in kg) + (3.098 &times; height in cm) &minus; (4.330 &times; age)</li>
      </ul>
      <p>
        Both formulas rely on the same four measurements, but weight each one
        slightly differently. Harris-Benedict was built on a smaller,
        century-old dataset and tends to estimate somewhat higher than
        Mifflin-St Jeor for most people, which is part of why the newer
        formula has become the more commonly recommended option.
      </p>

      <h2>Worked example</h2>
      <p>
        Take a woman aged <strong>30</strong>, <strong>165cm</strong> tall,
        weighing <strong>65kg</strong>.
      </p>
      <p>
        Using Mifflin-St Jeor: (10 &times; 65) + (6.25 &times; 165) &minus; (5
        &times; 30) &minus; 161 = <strong>1,370 kcal a day</strong>.
      </p>
      <p>
        Using Harris-Benedict: 447.593 + (9.247 &times; 65) + (3.098 &times;
        165) &minus; (4.330 &times; 30) = around{" "}
        <strong>1,430 kcal a day</strong>.
      </p>
      <p>
        The two formulas differ by about 60 calories a day for this example,
        a gap that is fairly typical, though it can be larger for people at
        higher weights or older ages. Neither figure is your total daily
        calorie need. Both are only the energy your body would burn at
        complete rest, with no activity added at all.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        The most common mistake is treating BMR as if it were a daily calorie
        target to eat. It is not: it is the minimum your body would burn
        lying still all day, and almost everyone burns meaningfully more than
        this once normal daily activity is included. Use our{" "}
        <Link href="/calculators/tdee-calculator-uk">TDEE calculator</Link>{" "}
        for a more realistic daily figure that accounts for your actual
        activity level.
      </p>
      <p>
        It is also worth remembering that both formulas are population
        averages, built from studying groups of people rather than measuring
        you individually. Your true metabolic rate can be somewhat higher or
        lower than either formula suggests, particularly if you carry more
        muscle than average, since muscle burns more calories at rest than
        fat tissue, which neither formula measures directly.
      </p>
      <p>
        Finally, avoid making large, sudden changes to your diet based purely
        on a BMR estimate. These figures are a helpful starting point for a
        conversation about your goals, not a precise medical measurement. If
        you have specific weight or health goals, it is worth speaking to
        your GP or a registered dietitian, who can take a fuller picture of
        your health into account.
      </p>

      <h2>Related calculators</h2>
      <p>
        For your full daily calorie needs including activity, try our{" "}
        <Link href="/calculators/tdee-calculator-uk">TDEE calculator</Link>,
        which builds on this same BMR calculation. Our{" "}
        <Link href="/calculators/bmi-calculator-uk">BMI calculator</Link> and{" "}
        <Link href="/calculators/ideal-weight-calculator-uk">
          ideal weight calculator
        </Link>{" "}
        offer other ways to think about a healthy weight range for your
        height. Our{" "}
        <Link href="/blog/healthy-bmi-adults-uk">
          healthy BMI guide
        </Link>{" "}
        covers NHS weight categories in more depth if you want further
        context.
      </p>
    </div>
  );
}
