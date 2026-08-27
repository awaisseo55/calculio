import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "What are UCAS Tariff points?",
    answer:
      "UCAS Tariff points are a numerical way of comparing different post-16 qualifications on a common scale. Universities and colleges sometimes phrase entry requirements in points rather than specific grades, particularly where applicants are taking a mix of different qualifications.",
  },
  {
    question: "How many UCAS points is an A-level worth?",
    answer:
      "It depends on the grade. An A* is worth 56 points, an A is worth 48, a B is worth 40, a C is worth 32, a D is worth 24 and an E is worth 16. These figures have applied since the Tariff was updated for 2017 entry and remain the current values.",
  },
  {
    question: "Does an EPQ count towards my UCAS points?",
    answer:
      "Yes, if you take the Extended Project Qualification, it can add points on top of your A-levels, worth up to 28 points for an A*, roughly half the value of an A-level. Not all universities count the EPQ towards their offer, so it is worth checking the specific course requirements.",
  },
  {
    question: "Do all universities use UCAS Tariff points?",
    answer:
      "No. Many universities and courses set offers as specific grades, for example ABB, rather than a total points figure, especially for more competitive courses. Others do use Tariff points, particularly where they want flexibility across different qualification types. Always check the entry requirements listed on the specific course page.",
  },
  {
    question: "Can I use this calculator for BTECs or other qualifications?",
    answer:
      "This calculator currently covers A-levels and the EPQ, since these are the most common combination for UK sixth form students. BTECs and other qualifications use the same Tariff system but with different tables, so check the official UCAS Tariff tables directly if you are combining other qualification types.",
  },
  {
    question: "Will my predicted grades give me an accurate points total?",
    answer:
      "Using predicted grades gives you a useful estimate for planning purposes, but your final points total depends on the grades you actually achieve. It is sensible to check both your predicted and a slightly lower realistic outcome against a course&apos;s typical offer, to see how much room you have.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        If you are applying to university, you may see course entry requirements listed as a total number of UCAS
        Tariff points rather than specific grades. This calculator adds up your A-level grades, plus an optional
        EPQ, to give you a total points figure you can compare against course requirements.
      </p>

      <h2>How to use the UCAS points calculator</h2>
      <p>
        Select the grade for each A-level subject you are taking or have predicted, up to four subjects. If you
        are also taking the Extended Project Qualification, select your EPQ grade too. The calculator instantly
        totals your points based on the official UCAS Tariff tables.
      </p>

      <h2>How the calculation works</h2>
      <p>
        Each A-level grade is worth a fixed number of Tariff points: 56 for an A*, 48 for an A, 40 for a B, 32
        for a C, 24 for a D and 16 for an E. The EPQ uses the same grade scale but at roughly half the points, up
        to 28 for an A*. The calculator simply adds together the points for every subject and grade you select.
      </p>

      <h2>Worked example</h2>
      <p>
        A student taking <strong>three A-levels at grades A, B and B</strong> would score 48 + 40 + 40 ={" "}
        <strong>128 points</strong>. If that student also achieved an <strong>A grade EPQ</strong>, worth 24
        points, their total would rise to <strong>152 points</strong>. That combination could meet offers phrased
        as anything from around 112 to 152 points, depending on how a particular university counts the EPQ.
      </p>

      <h2>Points versus grade-specific offers</h2>
      <p>
        It is worth remembering that a points total does not always tell the full story. Some universities set a
        minimum points requirement but also expect a specific grade in a key subject, for example requiring a B
        in Maths regardless of your overall total. Always read the full entry requirements on a course&apos;s
        UCAS listing rather than assuming a high points total alone guarantees you meet the offer.
      </p>

      <h2>Common mistakes people make</h2>
      <p>
        A common mistake is assuming every university counts the EPQ towards its offer, when many set their
        requirements around A-levels alone and treat the EPQ as a bonus rather than a requirement. Another
        mistake is comparing a points total against an old or unofficial grade table, since Tariff points can be
        confused with older, now-retired scoring systems. It also helps to double check whether a course quotes
        points from three A-levels specifically, since some calculations include AS-levels or other
        qualifications that this calculator does not cover.
      </p>

      <h2>Related calculators</h2>
      <p>
        If you are heading off to university, our{" "}
        <Link href="/calculators/student-budget-calculator-uk">student budget calculator</Link> can help you plan
        your living costs, and our{" "}
        <Link href="/calculators/student-loan-repayment-calculator-uk">student loan repayment calculator</Link>{" "}
        shows what repayments might look like after you graduate. Once you finish your degree, our{" "}
        <Link href="/calculators/degree-classification-calculator-uk">degree classification calculator</Link> can
        estimate your likely final grade. For more on managing student finances, see our{" "}
        <Link href="/blog/uk-student-loan-repayment-guide-2026">UK student loan repayment guide</Link>.
      </p>
    </div>
  );
}
