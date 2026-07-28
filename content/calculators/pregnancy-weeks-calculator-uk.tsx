import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How is my current week of pregnancy worked out?",
    answer:
      "Pregnancy is dated in weeks from the first day of your last menstrual period, not from conception, even though conception typically happens around two weeks later. This calculator uses the same NHS-standard dating method, adjusting automatically if you enter a conception date or IVF transfer date instead.",
  },
  {
    question: "Why does the calculator ask for my average cycle length?",
    answer:
      "A standard 28-day cycle assumes ovulation happens around day 14, but shorter or longer cycles shift that timing. Entering your average cycle length adjusts the estimated dating slightly, so it lines up more closely with when you likely ovulated and conceived, rather than assuming everyone has an identical cycle.",
  },
  {
    question: "How accurate is this compared to my dating scan?",
    answer:
      "This calculator gives a good estimate based on the dates you enter, but your dating scan, usually around weeks 11 to 14, uses ultrasound measurements of your baby to confirm gestational age directly, and is considered more accurate than date-based calculations alone. If the two differ by more than a few days, your sonographer or midwife will usually use the scan date going forward.",
  },
  {
    question: "What are the main NHS pregnancy milestones I should know about?",
    answer:
      "Key points in NHS antenatal care include your booking appointment around week 9, your dating scan around weeks 11 to 14, your anomaly (20-week) scan, the start of the third trimester around week 28, and full term at 37 weeks. Exact timing and additional appointments vary depending on your local NHS trust and your individual pregnancy.",
  },
  {
    question: "What if I am pregnant with twins or through IVF?",
    answer:
      "This calculator supports IVF transfer dating for both day 3 and day 5 (blastocyst) transfers, which adjust the calculation slightly differently from a natural conception date. For twin or multiple pregnancies, or any pregnancy your midwife has flagged as higher risk, always follow the specific dating and monitoring schedule your maternity team gives you rather than a general calculator.",
  },
  {
    question: "I am overdue. What happens next?",
    answer:
      "Going a few days past your estimated due date is common and not usually a cause for concern on its own, since due dates are an estimate rather than a guarantee. Your midwife will typically discuss options with you if you go significantly overdue, which can include monitoring or a discussion about induction, following NHS guidelines for your specific circumstances.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Once you know you are pregnant, one of the first things most people
        want to know is exactly how far along they are, right now, today.
        This calculator answers that directly: enter your last period,
        conception date or IVF transfer date, and it works out your current
        week and day of pregnancy, your trimester, and your next NHS
        milestone, rather than just giving you a single due date.
      </p>

      <h2>How to use the pregnancy weeks calculator</h2>
      <p>
        Choose how you want to calculate from: your last menstrual period,
        your conception date, or an IVF transfer date, since each uses a
        slightly different dating method. If you choose last period, also
        enter your average cycle length, which defaults to 28 days but can be
        adjusted for shorter or longer cycles. The calculator then shows how
        many weeks and days pregnant you are as of today, your current
        trimester, how many days remain until your estimated due date, and
        the next milestone appointment coming up in NHS antenatal care.
      </p>

      <h2>How the calculation works</h2>
      <p>
        Pregnancy is conventionally dated from the first day of your last
        period, even though conception happens roughly two weeks later, which
        is why a full-term pregnancy is described as 40 weeks rather than 38.
        If you enter a conception date or IVF transfer date instead, the
        calculator works backwards to the equivalent last-period date, since
        this keeps the gestational week count consistent with how the NHS and
        maternity services describe pregnancy. Day 3 and day 5 (blastocyst)
        IVF transfers are handled slightly differently, since they represent
        different stages of embryo development at the point of transfer.
      </p>
      <p>
        From that starting point, the calculator counts the number of days
        that have passed to reach today&apos;s date, converts that into whole
        weeks and remaining days, and checks which trimester and milestone
        band that falls into. Your due date itself is calculated as 280 days
        (40 weeks) from the same starting point, which is also how our{" "}
        <Link href="/calculators/pregnancy-due-date-calculator-uk">
          pregnancy due date calculator
        </Link>{" "}
        works out your estimated delivery date.
      </p>

      <h2>Worked example</h2>
      <p>
        Say your last period started on <strong>1 May 2026</strong>, with an
        average <strong>28-day cycle</strong>, and today is{" "}
        <strong>29 July 2026</strong>. That is 89 days since the first day of
        your last period, which works out to{" "}
        <strong>12 weeks and 5 days</strong> pregnant, placing you right at
        the very end of the first trimester, with your dating scan likely
        either just completed or coming up very soon. Your due date would
        fall around <strong>5 February 2027</strong>, roughly 191 days away.
      </p>
      <p>
        Now try changing the calculation method to conception date in the
        calculator above, using a date around <strong>15 May 2026</strong>{" "}
        instead, roughly two weeks after the example last period date. You
        will see the calculator adjusts the equivalent starting point
        automatically, keeping your current week count and due date closely
        aligned with the last-period method, since both describe the same
        underlying pregnancy timeline from two different reference points.
      </p>

      <h2>Understanding your trimester and milestones</h2>
      <p>
        The first trimester runs from week 1 to the end of week 12, the
        second trimester from week 13 to the end of week 26, and the third
        trimester from week 27 until birth. Key NHS milestones along the way
        include your booking appointment, usually before 10 weeks, your
        dating scan around weeks 11 to 14, and your anomaly scan around week
        20, which checks your baby&apos;s development in detail. Full term is
        reached at 37 weeks, meaning birth from this point onwards is
        considered a normal, full-term delivery rather than premature.
      </p>

      <h2>Common mistakes people make with pregnancy dating</h2>
      <p>
        A common mix-up is assuming pregnancy is dated from conception,
        leading to confusion about why a &ldquo;40-week&rdquo; pregnancy
        seems longer than the roughly 38 weeks a baby actually spends
        developing after conception. Another is relying on a single fixed
        28-day cycle assumption when your own cycle is noticeably longer or
        shorter, which can shift your estimated dating by several days
        compared with what your scan later confirms.
      </p>
      <p>
        It is also worth remembering that this kind of calculator gives an
        estimate based on typical timelines, not a medical diagnosis. If
        anything about your pregnancy feels uncertain, whether that is your
        dates, symptoms, or how you are feeling generally, your midwife or
        GP is always the right person to speak to, rather than relying on a
        calculator alone for reassurance.
      </p>

      <h2>Related calculators</h2>
      <p>
        If you are further back and want to estimate your due date from the
        very start, our{" "}
        <Link href="/calculators/pregnancy-due-date-calculator-uk">
          pregnancy due date calculator
        </Link>{" "}
        covers that in full, including a complete list of NHS milestones. Our{" "}
        <Link href="/calculators/bmi-calculator-uk">BMI calculator</Link> and{" "}
        <Link href="/calculators/tdee-calculator-uk">TDEE calculator</Link>{" "}
        can help you understand general healthy weight and energy needs,
        though always follow your midwife&apos;s specific guidance on weight
        and nutrition during pregnancy rather than general calculator
        results.
      </p>
    </div>
  );
}
