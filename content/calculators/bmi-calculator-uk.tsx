import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "What is a healthy BMI range?",
    answer:
      "The NHS classes a BMI between 18.5 and 24.9 as a healthy weight for most adults. Below 18.5 is considered underweight, 25 to 29.9 is overweight, and 30 or above falls into one of three obesity classes. These bands apply to most adults aged 18–65, though the NHS notes they're less reliable for very muscular people, pregnant women, and some ethnic groups.",
  },
  {
    question: "Is BMI accurate for everyone?",
    answer:
      "No single measure is perfect. BMI doesn't distinguish between muscle and fat, so very muscular people (such as athletes and bodybuilders) can show a 'high' BMI despite having low body fat. The NHS also notes that people of South Asian, Chinese, Black African and African-Caribbean origin can have a higher risk of health conditions like type 2 diabetes at a lower BMI than the standard thresholds suggest, so lower cut-off points are sometimes used for these groups.",
  },
  {
    question: "Should children use the same BMI categories?",
    answer:
      "No. Children and teenagers are measured using BMI centile charts specific to their age and sex, because healthy body composition changes a lot during growth. This calculator is intended for adults; the NHS website has separate tools and guidance for children's healthy weight.",
  },
  {
    question: "What should I do if my BMI is outside the healthy range?",
    answer:
      "A BMI outside the 18.5–24.9 range isn't a diagnosis on its own, but it can be a useful prompt to speak to a GP or practice nurse, particularly alongside other factors like waist measurement, diet and activity levels. The NHS offers free weight management support and advice for anyone who wants it, regardless of their starting BMI.",
  },
  {
    question: "How is BMI calculated?",
    answer:
      "BMI is your weight in kilograms divided by your height in metres, squared (kg ÷ m²). It's a simple ratio designed to give a quick, population-level indicator of whether someone's weight is in a healthy range for their height — not a precise measure of body fat.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h2>How to use the BMI calculator</h2>
      <p>
        Choose metric or imperial units, then enter your height and weight. The
        calculator instantly works out your Body Mass Index (BMI), tells you which NHS
        weight category you fall into, and shows the healthy weight range for someone of
        your height. It takes a few seconds and doesn&apos;t store or send your details
        anywhere.
      </p>
      <p>
        BMI is one of the most widely used screening tools in UK healthcare — it&apos;s
        the measure GPs, practice nurses and the NHS itself use as a quick, first-pass
        indicator of whether someone&apos;s weight might be putting their health at risk,
        before considering other factors in more detail.
      </p>

      <h2>The BMI formula</h2>
      <p>
        BMI is calculated as your weight in kilograms divided by the square of your
        height in metres:
      </p>
      <p>
        <strong>BMI = weight (kg) ÷ height (m)²</strong>
      </p>
      <p>
        If you enter your details in imperial units — feet, inches, stone and pounds —
        the calculator converts them to metric behind the scenes before applying the
        same formula, so you get an identical result either way.
      </p>

      <h2>NHS BMI categories</h2>
      <p>
        The NHS uses the following standard categories for adults:
      </p>
      <ul>
        <li><strong>Below 18.5</strong> — Underweight</li>
        <li><strong>18.5 to 24.9</strong> — Healthy weight</li>
        <li><strong>25 to 29.9</strong> — Overweight</li>
        <li><strong>30 to 34.9</strong> — Obese (Class I)</li>
        <li><strong>35 to 39.9</strong> — Obese (Class II)</li>
        <li><strong>40 and above</strong> — Obese (Class III)</li>
      </ul>

      <h2>Worked example</h2>
      <p>
        Take someone who is <strong>1.70m tall</strong> and weighs{" "}
        <strong>70kg</strong>. Their BMI is 70 ÷ (1.70 × 1.70) = 70 ÷ 2.89, which comes
        to approximately <strong>24.2</strong> — within the healthy weight range. For
        their height, a healthy weight would fall roughly between{" "}
        <strong>53.5kg and 72.0kg</strong> (18.5 to 24.9 multiplied by 2.89).
      </p>
      <p>
        In imperial terms, that&apos;s the same as someone around{" "}
        <strong>5&apos;7&quot;</strong> weighing <strong>11 stone</strong> — the
        calculator converts feet, inches, stone and pounds into the metric figures
        needed for the formula automatically.
      </p>

      <h2>Why BMI has limitations</h2>
      <p>
        BMI is a useful population-level screening tool precisely because it&apos;s
        simple — but that simplicity is also its biggest limitation. It can&apos;t tell
        the difference between weight from muscle and weight from fat, so very athletic
        or muscular people can register a &ldquo;high&rdquo; BMI despite having a low
        body fat percentage. It also doesn&apos;t account for where fat is carried on the
        body, which matters for health risk — this is why the NHS often recommends
        pairing a BMI check with a waist measurement, particularly for people in the
        overweight category.
      </p>
      <p>
        The NHS also highlights that some ethnic groups — including people of South
        Asian, Chinese, Black African and African-Caribbean heritage — can face a higher
        risk of conditions like type 2 diabetes and heart disease at a lower BMI than the
        standard thresholds suggest, so healthcare professionals sometimes apply
        adjusted, lower cut-off points for these groups.
      </p>

      <h2>What to do with your result</h2>
      <p>
        A BMI result on its own isn&apos;t a diagnosis — it&apos;s a starting point. If
        your BMI falls outside the healthy range, or you have any concerns about your
        weight, the best next step is a conversation with your GP or practice nurse, who
        can look at the fuller picture alongside factors like waist circumference,
        activity levels, family history and any existing health conditions.
      </p>

      <h2>Related calculators</h2>
      <p>
        If you&apos;re tracking a pregnancy alongside general health planning, our{" "}
        <Link href="/calculators/pregnancy-due-date-calculator-uk">
          pregnancy due date calculator
        </Link>{" "}
        can help you keep track of key NHS milestones and appointments. For a
        broader picture alongside BMI, our{" "}
        <Link href="/calculators/tdee-calculator-uk">TDEE calculator</Link> covers
        general daily calorie needs, and our{" "}
        <Link href="/calculators/ideal-weight-calculator-uk">
          ideal weight calculator
        </Link>{" "}
        shows a healthy weight range using a few different formulas.
      </p>
    </div>
  );
}
