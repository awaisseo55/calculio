import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How accurate is a tape measure body fat calculator?",
    answer:
      "The Navy method used here is a well-established estimation method, generally within a few percentage points of more precise techniques like DEXA scanning for most people. It is a useful, free way to track general trends over time, but it is not a substitute for a clinical body composition measurement.",
  },
  {
    question: "Why does the calculation ask for different measurements for men and women?",
    answer:
      "The US Navy method uses separate formulas for men and women because body fat tends to be distributed differently between the sexes. Men's calculations use neck and waist measurements, while women's calculations also include a hip measurement, reflecting where body fat is typically carried.",
  },
  {
    question: "Where exactly should I measure my waist and neck?",
    answer:
      "Measure your neck just below the larynx, or Adam's apple, keeping the tape horizontal. For your waist, men should measure at the navel, while women should measure at the narrowest point of their waist. Keep the tape snug but not tight, and measure standing upright.",
  },
  {
    question: "Is a lower body fat percentage always better?",
    answer:
      "Not necessarily. The body needs a certain amount of essential fat to function properly, and very low body fat can be unhealthy. A moderate, sustainable body fat percentage within the typical ranges for your sex is generally a healthier goal than pursuing the lowest possible number.",
  },
  {
    question: "How does this compare to BMI?",
    answer:
      "BMI only uses your height and weight, so it cannot tell the difference between muscle and fat. Body fat percentage gives a more direct sense of body composition, which is why athletes and very muscular people can have a healthy body fat percentage despite a BMI that suggests they are overweight.",
  },
  {
    question: "How often should I retest my body fat percentage?",
    answer:
      "Because measurement technique introduces some variation, retesting every four to eight weeks, using the same method and measuring points, tends to give a clearer picture of any real trend than checking too frequently. Try to measure at a similar time of day and in similar conditions each time.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Body fat percentage gives a more detailed picture of your body composition than weight or BMI alone,
        since it distinguishes between fat and lean mass. This calculator uses the widely used US Navy tape
        measurement method to give you a general estimate from a few simple measurements.
      </p>

      <h2>How to use the body fat percentage calculator</h2>
      <p>
        Select your sex, then enter your height along with your neck and waist measurements in centimetres.
        Women should also enter a hip measurement, since the formula accounts for it differently between sexes.
        The calculator instantly returns an estimated body fat percentage along with a general category.
      </p>

      <h2>How the calculation works</h2>
      <p>
        This calculator uses the US Navy circumference method, developed by Hodgdon and Beckett, which estimates
        body density from your height and circumference measurements using logarithmic formulas. That body
        density figure is then converted into a body fat percentage using the Siri equation, a standard
        conversion used across many body composition methods.
      </p>

      <h2>Worked example</h2>
      <p>
        For a man who is <strong>178cm tall</strong> with a <strong>38cm neck</strong> and{" "}
        <strong>85cm waist</strong>, the formula estimates a body density of around 1.061, which converts to an
        estimated body fat of approximately <strong>16.4%</strong>, falling into the &ldquo;fit&rdquo; general
        category. Small changes in waist measurement have a noticeable effect on the result, which is why
        consistent, careful measuring matters.
      </p>

      <h2>Getting an accurate measurement</h2>
      <p>
        Use a flexible, non-stretch tape measure and keep it snug against your skin without pulling it tight.
        Measure at the same time of day, ideally before eating and after using the bathroom, since bloating and
        hydration can shift your waist measurement slightly. Taking two or three measurements and using the
        average can help reduce small measuring errors that would otherwise throw off the result.
      </p>

      <h2>Common mistakes people make</h2>
      <p>
        A common mistake is measuring the waist too high or too low, or pulling the tape too tight, both of which
        skew the result. Another mistake is comparing results between different methods, such as this tape
        measurement approach and a set of body composition scales, since different methods can give noticeably
        different numbers for the same person. It also helps to focus on the trend over several weeks rather than
        reacting to any single reading, since day-to-day fluctuations are normal.
      </p>

      <h2>Related calculators</h2>
      <p>
        For a simpler weight-based measure, try our{" "}
        <Link href="/calculators/bmi-calculator-uk">BMI calculator</Link>. Our{" "}
        <Link href="/calculators/ideal-weight-calculator-uk">ideal weight calculator</Link> and{" "}
        <Link href="/calculators/tdee-calculator-uk">TDEE calculator</Link> can help you understand your broader
        health and energy picture. For more on how BMI compares to other health measures, see our guide to{" "}
        <Link href="/blog/healthy-bmi-adults-uk">healthy BMI for UK adults</Link>.
      </p>
    </div>
  );
}
