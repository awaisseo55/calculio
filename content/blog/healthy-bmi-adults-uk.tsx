import Link from "next/link";
import { CalloutBox } from "@/components/blog/callout-box";
import { RateTable } from "@/components/blog/rate-table";
import type { FaqItem } from "@/lib/types";
import type { TocItem } from "@/components/blog/table-of-contents";

export const toc: TocItem[] = [
  { id: "what-is-bmi", label: "What is BMI and how is it calculated?" },
  { id: "nhs-categories", label: "NHS BMI categories for UK adults" },
  { id: "healthy-weight-range", label: "Healthy weight range for your height" },
  { id: "ethnic-backgrounds", label: "BMI and ethnic background" },
  { id: "not-whole-story", label: "Why BMI isn't the whole story" },
  { id: "children-teenagers", label: "BMI for children and teenagers" },
  { id: "outside-healthy-range", label: "If your BMI is outside the healthy range" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "try-calculator", label: "Calculate your BMI" },
];

export const faq: FaqItem[] = [
  {
    question: "What is a healthy BMI for an adult?",
    answer:
      "For most adults, the NHS considers a BMI between 18.5 and 24.9 to be a healthy weight. Some ethnic groups have lower thresholds applied, since health risks can appear at a lower BMI for these populations, covered in more detail below.",
  },
  {
    question: "Is BMI accurate for muscular people?",
    answer:
      "Not always. BMI can't tell the difference between weight from muscle and weight from fat, so very muscular people, including many athletes, can register as overweight or obese on BMI despite having low body fat. It's one of BMI's most well-known limitations.",
  },
  {
    question: "What BMI is considered obese?",
    answer:
      "A BMI of 30 or above falls into the obese range, split into three classes by the NHS: Class I from 30 to 34.9, Class II from 35 to 39.9, and Class III from 40 and above.",
  },
  {
    question: "Do BMI ranges differ by ethnicity in the UK?",
    answer:
      "Yes. NHS guidance uses lower BMI thresholds for adults of South Asian, Chinese, other Asian, Middle Eastern, Black African and African-Caribbean backgrounds, with increased health risk from a BMI of 23 and high risk from 27.5, reflecting how conditions like type 2 diabetes can appear at lower BMIs in these groups.",
  },
  {
    question: "What is my ideal weight for my height?",
    answer:
      "There's no single perfect number, but a healthy BMI range for your height gives a reasonable general guide. Use our BMI calculator to see your specific healthy weight range in kilograms or stone.",
  },
  {
    question: "Can I calculate BMI at home?",
    answer:
      "Yes. All you need is your height and weight. The formula is weight in kilograms divided by height in metres squared, or you can use our free BMI calculator for an instant result in metric or imperial units.",
  },
];

export function ArticleContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Your BMI number takes about two seconds to calculate. Understanding what it
        actually means for your health takes a little longer, and it&apos;s worth doing
        properly, since BMI is a useful starting point but not the full picture on its
        own.
      </p>
      <p>
        This guide covers how BMI is worked out, the NHS categories for UK adults,
        healthy weight ranges by height, and where BMI falls short as a single
        measure on its own. It sits in our{" "}
        <Link href="/categories/health">Health category</Link>, alongside our other
        NHS-aligned calculators.
      </p>

      <CalloutBox
        title="Check your BMI now"
        description="Enter your height and weight in metric or imperial units for an instant result."
        href="/calculators/bmi-calculator-uk"
        cta="Open the BMI calculator"
      />

      <h2 id="what-is-bmi">What is BMI and how is it calculated?</h2>
      <p>
        Body Mass Index (BMI) is a simple ratio of your weight to your height,
        designed to give a quick, population-level indicator of whether your weight
        falls within a healthy range. The formula is:
      </p>
      <p>
        <strong>BMI = weight (kg) ÷ height (m)²</strong>
      </p>
      <p>
        Someone who is 175cm tall and weighs 75kg has a BMI of 75 ÷ (1.75 × 1.75),
        which works out to <strong>24.5</strong>, within the healthy range. If you&apos;d
        rather work in feet, inches, stone and pounds, our{" "}
        <Link href="/calculators/bmi-calculator-uk">BMI calculator</Link> converts
        automatically and gives the same result.
      </p>

      <h2 id="nhs-categories">NHS BMI categories for UK adults</h2>
      <RateTable
        caption="NHS BMI categories for adults"
        columns={["BMI", "Category"]}
        rows={[
          ["Below 18.5", "Underweight"],
          ["18.5 to 24.9", "Healthy weight"],
          ["25 to 29.9", "Overweight"],
          ["30 to 34.9", "Obese (Class I)"],
          ["35 to 39.9", "Obese (Class II)"],
          ["40 and above", "Obese (Class III)"],
        ]}
      />
      <p>
        These categories are used across the NHS as a first, quick screening tool,
        typically alongside other measurements rather than in isolation. A GP or
        practice nurse considering your weight will usually look at your BMI alongside
        things like waist measurement, activity levels and overall health, not the
        number by itself.
      </p>
      <p>
        These bands originate from World Health Organization classifications, adopted
        by the NHS as a consistent, simple starting point for assessing weight-related
        health risk across the whole adult population. Their strength is exactly that
        simplicity, and, as covered further down, that&apos;s also where their limits lie.
      </p>

      <h2 id="healthy-weight-range">Healthy weight range for your height</h2>
      <p>
        Rather than calculating your own BMI category by hand, it can be more useful
        to see the actual healthy weight range for your height directly:
      </p>
      <RateTable
        caption="Healthy weight range (BMI 18.5 to 24.9) by height"
        columns={["Height", "Healthy weight range"]}
        rows={[
          ["150cm (4'11\")", "41.6 to 56.0kg (6.6 to 8.8 stone)"],
          ["160cm (5'3\")", "47.4 to 63.7kg (7.5 to 10.0 stone)"],
          ["170cm (5'7\")", "53.5 to 72.0kg (8.4 to 11.3 stone)"],
          ["180cm (5'11\")", "59.9 to 80.7kg (9.4 to 12.7 stone)"],
          ["190cm (6'3\")", "66.8 to 89.9kg (10.5 to 14.2 stone)"],
        ]}
      />
      <p>
        For example, someone 170cm tall has a healthy weight range of roughly 53.5kg
        to 72.0kg. Use the{" "}
        <Link href="/calculators/bmi-calculator-uk">BMI calculator</Link> for your
        exact height rather than rounding to the nearest row above.
      </p>

      <h2 id="ethnic-backgrounds">BMI categories differ by ethnic background</h2>
      <p>
        The 18.5 to 24.9 healthy range works reasonably well as a general guide, but
        it was originally based on data drawn largely from White European populations,
        and NHS guidance recognises that it doesn&apos;t fit everyone equally well. NHS
        guidance uses lower BMI thresholds for adults of South Asian, Chinese, other
        Asian, Middle Eastern, Black African and African-Caribbean backgrounds. For
        these groups, increased health risk is considered to start from a BMI of{" "}
        <strong>23</strong> rather than 25, and high risk from{" "}
        <strong>27.5</strong> rather than 30.
      </p>
      <p>
        This adjustment exists because research shows conditions like type 2 diabetes
        and cardiovascular disease can appear at a lower BMI in these populations than
        the standard thresholds would suggest. If you fall into one of these groups,
        it&apos;s worth discussing the adjusted ranges with your GP rather than relying on
        the standard categories alone.
      </p>

      <h2 id="not-whole-story">Why BMI isn&apos;t the whole story</h2>
      <p>
        BMI can&apos;t distinguish between weight from muscle and weight from fat. A very
        muscular person, such as an athlete or regular weightlifter, can register as
        overweight or even obese on BMI despite having low body fat, simply because
        muscle is denser than fat.
      </p>
      <p>
        Where fat is carried on the body matters for health risk too, which BMI alone
        doesn&apos;t capture. That&apos;s why it&apos;s often used alongside waist circumference:
        general NHS guidance flags increased risk above roughly 94cm for men and 80cm
        for women, and high risk above roughly 102cm for men and 88cm for women.
        Waist-to-hip ratio and body fat percentage are other measures sometimes used
        alongside BMI for a fuller picture.
      </p>

      <h2 id="children-teenagers">BMI for children and teenagers</h2>
      <p>
        Children and teenagers aren&apos;t assessed using the adult categories above.
        Instead, BMI is plotted against age and sex-specific percentile charts, since
        healthy body composition changes considerably during growth. If you have
        concerns about a child&apos;s weight, your GP, health visitor or school nurse is
        the right place to start rather than applying adult BMI ranges.
      </p>
      <p>
        Pregnancy is another time standard BMI categories aren&apos;t applied in the usual
        way, since healthy weight gain is expected and tracked differently by your
        midwife. If you&apos;re expecting, our{" "}
        <Link href="/calculators/pregnancy-due-date-calculator-uk">
          pregnancy due date calculator
        </Link>{" "}
        covers key NHS antenatal milestones instead.
      </p>

      <h2 id="outside-healthy-range">
        What to do if your BMI is outside the healthy range
      </h2>
      <p>
        A BMI outside 18.5 to 24.9 isn&apos;t a diagnosis, and it doesn&apos;t mean anything is
        necessarily wrong. It can be a useful prompt to have a conversation with your
        GP or practice nurse, who can look at the fuller picture alongside your
        general health, activity levels and any existing conditions.
      </p>
      <p>
        If change feels right for you, gradual and sustainable adjustments generally
        work better than drastic ones, and focusing on habits, such as regular
        movement and consistent sleep, tends to be more sustainable than fixating on
        a single number. Your mental health matters just as much as the physical side
        of this, and the NHS offers free weight management support for anyone who
        wants it, at whatever starting point.
      </p>
      <p>
        The same applies if your BMI is below 18.5. Being underweight can carry its
        own health considerations, and a GP conversation is just as worthwhile here as
        it is at the higher end of the range. Whichever direction your number points,
        the most useful next step is usually the same one: a conversation with someone
        who can see your full health picture, not a search for a quick fix.
      </p>

      <h2 id="faq">Frequently asked questions</h2>
    </div>
  );
}
