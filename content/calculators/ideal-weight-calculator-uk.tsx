import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "Which formula is most accurate?",
    answer:
      "None of them is precisely accurate for every individual, since they are all general formulas based on height alone. They are useful as a broad guide, and the NHS BMI based range is generally considered the most widely referenced starting point in the UK.",
  },
  {
    question: "Why do the formulas give different answers?",
    answer:
      "The Devine and Robinson formulas were developed decades apart, using different data, so they naturally produce slightly different estimates. Seeing them side by side, along with the NHS BMI range, gives a broader picture than relying on a single number.",
  },
  {
    question: "Does body frame size really matter?",
    answer:
      "There is no single official medical formula for frame size, so the adjustment here is a commonly used rough guide rather than a precise clinical measure. It is offered as an optional refinement, not a required input.",
  },
  {
    question: "Is a lower weight always healthier?",
    answer:
      "No. Being significantly underweight carries its own health considerations, just as being significantly overweight does. A healthy weight range is a broad band, not a single target to aim as low as possible within.",
  },
  {
    question: "Do these ranges apply the same way to everyone?",
    answer:
      "Not exactly. NHS guidance notes that some ethnic groups face higher health risks at lower BMI levels, so slightly different thresholds are sometimes used. Muscle mass, bone structure and overall build also mean these are general estimates rather than a personal target.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Ideal weight calculators have been around for decades, using a handful of
        different formulas that all try to answer the same broad question: what is
        a reasonable weight range for someone of a given height. None of them is
        perfectly precise, but seeing a few side by side gives a more balanced
        picture than trusting a single number.
      </p>
      <p>
        The term &ldquo;ideal weight&rdquo; is a bit misleading, since there is no
        single perfect figure for anyone. These formulas are best used as general
        reference points alongside other measures, not as a strict target.
      </p>
      <p>
        This calculator shows estimates from the Devine and Robinson formulas
        alongside the NHS healthy BMI range, so you can see where they agree and
        where they differ.
      </p>

      <h2>How to use the ideal weight calculator</h2>
      <p>
        Enter your gender and height, in metric or imperial units. You can
        optionally choose a body frame size, small, medium or large, as a rough
        refinement. The calculator shows estimates from the Devine and Robinson
        formulas, plus the NHS healthy weight range based on BMI.
      </p>

      <h2>Where these formulas come from</h2>
      <p>
        The Devine formula, published in 1974, was originally created for
        calculating medication dosages and became widely adopted more broadly. The
        Robinson formula, from 1983, is a later refinement using different data.
        Both estimate a baseline weight for five feet in height, then add a fixed
        amount for every inch above that. The NHS BMI range, by contrast, uses the
        well known Body Mass Index formula applied to the boundaries of the
        healthy 18.5 to 24.9 range.
      </p>
      <p>
        Because the Devine and Robinson formulas were originally designed for
        clinical and pharmaceutical purposes rather than general public use, they
        tend to produce a single number rather than a range. This calculator
        pairs them with the NHS BMI range specifically to avoid the impression
        that either formula produces a precise target you should aim for.
      </p>

      <h2>Worked example</h2>
      <p>
        Take a <strong>man who is 180cm tall</strong>, with a{" "}
        <strong>medium body frame</strong>. The Devine formula estimates around{" "}
        <strong>75.0kg</strong>. The Robinson formula estimates around{" "}
        <strong>72.6kg</strong>. The NHS healthy BMI range for the same height
        spans roughly <strong>59.9kg to 80.7kg</strong>, a considerably wider band
        than either single formula suggests on its own.
      </p>
      <p>
        This is a good illustration of why it is more useful to think in terms of
        a healthy range rather than a single ideal number. All three estimates
        above sit comfortably within the NHS range, which is really the main
        takeaway: there is no single correct weight for a given height, only a
        broad range that is generally considered healthy.
      </p>

      <h2>Why these numbers should not be treated as targets</h2>
      <p>
        These formulas were developed decades ago using specific, often narrow,
        study populations, and none of them account for muscle mass, bone
        structure, or the ethnicity adjusted BMI thresholds the NHS uses for some
        groups. A very muscular person may sit above every figure shown here
        despite being perfectly healthy. Treat the results as general context
        rather than a number to aim for exactly, and remember that a healthy
        weight looks different for different people even at the same height.
      </p>
      <p>
        If you have any concerns about your weight, in either direction, your GP
        is best placed to give advice that takes your full health picture into
        account, not just your height.
      </p>

      <h2>Frame size, an optional and imprecise adjustment</h2>
      <p>
        The body frame option in this calculator applies a rough percentage
        adjustment, smaller for a small frame and larger for a large frame,
        loosely reflecting the idea that two people of identical height can have
        genuinely different healthy weights depending on their bone structure.
        There is no single agreed clinical method for measuring frame size, so
        this adjustment is offered as an optional refinement rather than a precise
        calculation. Leaving it on the medium default is entirely reasonable if
        you are unsure.
      </p>

      <h2>Related calculators</h2>
      <p>
        For a single widely used measure, try our{" "}
        <Link href="/calculators/bmi-calculator-uk">BMI calculator</Link>, and our{" "}
        <Link href="/blog/healthy-bmi-adults-uk">BMI guide</Link> covers NHS
        categories and ethnicity adjusted thresholds in more depth. Our{" "}
        <Link href="/calculators/tdee-calculator-uk">TDEE calculator</Link> covers
        general daily calorie needs if you want the fuller picture alongside a
        healthy weight range. Our{" "}
        <Link href="/calculators/age-calculator">age calculator</Link> and{" "}
        <Link href="/calculators/pregnancy-due-date-calculator-uk">
          pregnancy due date calculator
        </Link>{" "}
        cover other everyday and life stage calculations you might find useful.
      </p>
    </div>
  );
}
