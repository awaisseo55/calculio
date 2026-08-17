import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How is a UK degree classification actually calculated?",
    answer:
      "Most UK universities take a weighted average of your module marks across your later years of study, most commonly Year 2 and Year 3, then map that average onto four standard bands: First, Upper Second (2:1), Lower Second (2:2) and Third. Year 1 usually has to be passed but often does not count towards the final average.",
  },
  {
    question: "Why do different universities give different results for the same marks?",
    answer:
      "The exact weighting between years varies by institution. Some use 20% Year 2 and 80% Year 3, others use 25:75, 33:67 or an equal 50:50 split. This calculator lets you try different schemes, but your own university's course handbook has the definitive rule for your course.",
  },
  {
    question: "What counts as a borderline classification?",
    answer:
      "A borderline case is usually when your weighted average sits close to a boundary, for example 68% or 69% when the next band up starts at 70%. Many universities have a discretionary policy for these cases, often looking at whether the majority of your final year marks reach the higher band.",
  },
  {
    question: "Does a 2:1 or a First matter more to employers?",
    answer:
      "Some graduate schemes still use a 2:1 as a minimum filter, though this is becoming less common as more employers move to skills-based assessment. A First can strengthen an application, but relevant experience, work placements and how you present your degree usually matter just as much.",
  },
  {
    question: "Can I improve my classification after my final exams?",
    answer:
      "Once marks are confirmed and ratified by your exam board, they are generally final, aside from formal appeals processes for procedural issues, not simply disagreeing with a mark. If you are still studying, focus on the modules with the most weighting in your final year, since these usually have the biggest impact on your overall average.",
  },
  {
    question: "Does this calculator give my official degree classification?",
    answer:
      "No. This gives an estimate based on the weighting scheme you select, so you can see roughly where you stand. Your university's official calculation may include other factors, such as dissertation weighting or specific module rules, so always check your course handbook or student portal for your confirmed result.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Working out your likely degree classification part way through university can help you understand where
        you stand and what you need in your remaining assessments. This calculator takes your Year 2 and Year 3
        average marks, applies a weighting scheme, and estimates whether you are on track for a First, an Upper
        Second (2:1), a Lower Second (2:2) or a Third.
      </p>

      <h2>How to use the degree classification calculator</h2>
      <p>
        Enter your average mark for Year 2 and your average (or predicted) mark for Year 3, then choose the
        weighting scheme that matches your university. If you are not sure which scheme your course uses, the
        33% Year 2, 67% Year 3 split is the most widely used pattern in England, but check your course handbook to
        confirm, since some universities weight Year 3 even more heavily, or split marks evenly.
      </p>

      <h2>How the calculation works</h2>
      <p>
        The calculator multiplies your Year 2 mark by its weighting, multiplies your Year 3 mark by its weighting,
        and adds the two together to get a single weighted average. That average is then compared against the four
        standard honours bands used across UK universities: 70% and above for a First, 60% to 69% for an Upper
        Second (2:1), 50% to 59% for a Lower Second (2:2), and 40% to 49% for a Third.
      </p>

      <h2>Worked example</h2>
      <p>
        Say you finished Year 2 with an average of <strong>67%</strong> and Year 3 with an average of{" "}
        <strong>70%</strong>, using the common <strong>33% Year 2, 67% Year 3</strong> weighting. The weighted
        average works out as (67 &times; 0.33) + (70 &times; 0.67) = 22.11 + 46.9 ={" "}
        <strong>69.0%</strong>. That falls in the Upper Second (2:1) band, but only around{" "}
        <strong>1.0 percentage point</strong> short of a First, which would count as a genuine borderline case worth
        checking against your university&apos;s discretionary rules.
      </p>

      <h2>Why the weighting scheme matters so much</h2>
      <p>
        The same two marks can land in different classification bands depending purely on the weighting scheme. A
        student whose Year 3 marks are noticeably stronger than their Year 2 marks benefits from a scheme that
        weights Year 3 more heavily, such as 20:80, since more weight sits on their better year. The reverse is true
        for a student who performed more strongly in Year 2. This is exactly why checking your own university&apos;s
        published scheme, rather than assuming a single standard formula applies everywhere, matters before you rely
        on any estimate for planning purposes.
      </p>

      <h2>What happens with borderline marks</h2>
      <p>
        Universities generally do not apply their classification bands with no flexibility at all. Many have a
        borderline or discretionary zone, commonly within one or two percentage points of a boundary, where an exam
        board can consider factors like the proportion of credits at the higher classification, mitigating
        circumstances, or a strong upward trend across your degree. This is not guaranteed and varies significantly
        between institutions, so if your estimated average lands close to a boundary, it is worth reading your
        course handbook&apos;s borderline policy rather than assuming either outcome.
      </p>

      <h2>Common mistakes people make</h2>
      <p>
        A frequent mistake is assuming every university uses the same 33:67 weighting, when in reality this varies
        significantly and some courses also include Year 1 or apply different rules to a dissertation or final year
        project. Another common error is treating a predicted or partial average as if it were a confirmed final
        mark, when it may not include resits, coursework still to be marked, or modules yet to be completed. It is
        also easy to overlook that some universities calculate classification using credit-weighted averages across
        individual modules, rather than a single year average, which can shift the result slightly from what this
        general calculator estimates.
      </p>

      <h2>Related calculators</h2>
      <p>
        If you are managing student finances alongside your studies, our{" "}
        <Link href="/calculators/student-budget-calculator-uk">student budget calculator</Link> helps you compare
        your loan and other income against rent, food and living costs. Once you graduate, our{" "}
        <Link href="/calculators/student-loan-repayment-calculator-uk">student loan repayment calculator</Link>{" "}
        shows how your loan plan affects what comes out of your salary, and our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">take-home pay calculator</Link> gives a fuller picture
        of your net income once you start working. For more detail on how repayments actually work, see our guide
        to{" "}
        <Link href="/blog/uk-student-loan-repayment-guide-2026">UK student loan repayment in 2026</Link>.
      </p>
    </div>
  );
}
