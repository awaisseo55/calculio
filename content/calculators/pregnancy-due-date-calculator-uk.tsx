import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How accurate is an estimated due date?",
    answer:
      "An estimated due date is exactly that — an estimate. Only around 1 in 20 babies are born on their actual due date. Most healthy pregnancies deliver anywhere from 37 to 42 weeks, which is considered full term. Your sonographer will usually confirm or adjust your due date at your 12-week dating scan, based on the baby's measurements, which is generally more accurate than a date based on your last period alone.",
  },
  {
    question: "Why does cycle length affect my due date?",
    answer:
      "The standard due date calculation (Naegele's rule) assumes a 28-day cycle with ovulation around day 14. If your cycles are longer or shorter than 28 days, ovulation — and therefore conception — likely happened later or earlier than that assumption, so the calculator adjusts your due date accordingly.",
  },
  {
    question: "How is the due date worked out from an IVF transfer date?",
    answer:
      "IVF due dates are calculated from the known embryo age at transfer rather than an estimated ovulation date, which is one reason IVF due dates are often considered more precise than LMP-based estimates. A day-5 (blastocyst) transfer is treated as 19 days after the equivalent last menstrual period; a day-3 transfer as 17 days after, reflecting the embryo's actual developmental age at the time of transfer.",
  },
  {
    question: "What happens at the 12-week and 20-week scans?",
    answer:
      "The dating (12-week) scan, usually offered between 11 and 14 weeks, confirms how many weeks pregnant you are, checks your baby's development, and can screen for certain conditions. The anomaly (20-week) scan, offered between 18 and 21 weeks, checks your baby's physical development in detail. Both are offered as standard on the NHS.",
  },
  {
    question: "What if I don't know my last period date exactly?",
    answer:
      "If you're unsure of your last period date, a conception date (if known) or an early dating scan will usually give a more reliable estimate. Your midwife or GP can also help estimate your dates at your booking appointment, typically around 8 to 10 weeks.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h2>How to use the pregnancy due date calculator</h2>
      <p>
        Choose whichever date you know most confidently — the first day of your last
        menstrual period, an estimated conception date, or an IVF embryo transfer date —
        and enter it. If you&apos;re using your last period date, also enter your average
        cycle length, since this affects when ovulation (and therefore conception)
        likely happened. The calculator then estimates your due date, shows your current
        week and day of pregnancy, tells you which trimester you&apos;re in, and lists
        key NHS antenatal milestones with estimated dates.
      </p>
      <p>
        This tool is designed to give you a helpful estimate to plan around — for
        confirming exact dates and monitoring your pregnancy, always follow the guidance
        of your midwife, GP or hospital, who will use ultrasound measurements alongside
        your dates.
      </p>

      <h2>How the due date is calculated</h2>
      <p>
        The standard method used across the NHS and by most pregnancy calculators is
        known as Naegele&apos;s rule: your due date is estimated as{" "}
        <strong>280 days (40 weeks) after the first day of your last menstrual period</strong>,
        assuming a typical 28-day cycle with ovulation on day 14. If your cycle is
        longer or shorter than 28 days, the calculator adjusts the due date by the
        difference — a 32-day cycle, for example, pushes the estimated due date back by
        four days, since ovulation likely happened later.
      </p>
      <p>
        If you know your conception date directly, the calculator adds 266 days (38
        weeks) — the average length of pregnancy measured from conception rather than
        last period. For IVF pregnancies, the due date is calculated from the known age
        of the embryo at transfer: 261 days after a day-5 blastocyst transfer, or 263
        days after a day-3 transfer, since the embryo&apos;s exact age is known precisely
        rather than estimated.
      </p>

      <h2>Worked example</h2>
      <p>
        If the first day of your last period was <strong>1 May</strong> and you have a
        typical <strong>28-day cycle</strong>, your estimated due date would fall around{" "}
        <strong>5 February</strong> the following year — 280 days later. By early
        August, roughly 13 weeks on from 1 May, you&apos;d be entering your second
        trimester, with your dating scan likely to have already taken place around
        weeks 11–14.
      </p>
      <p>
        If your cycles typically run longer, say 32 days, the calculator would shift
        your due date about 4 days later than the standard calculation, to around 9
        February, reflecting the likelihood that ovulation happened a few days later
        than the 28-day-cycle assumption.
      </p>

      <h2>Trimesters and key NHS milestones</h2>
      <p>
        Pregnancy is typically divided into three trimesters: the first trimester runs
        from conception to around week 12, the second from week 13 to around week 27,
        and the third from week 28 until birth. Along the way, the NHS offers a set of
        standard antenatal appointments and scans: a booking appointment around weeks
        8–10 to confirm your pregnancy and discuss your care, a dating (12-week) scan
        between weeks 11–14, and an anomaly (20-week) scan between weeks 18–21. This
        calculator estimates the timing of each based on your dates, so you know roughly
        when to expect your midwife or hospital to be in touch.
      </p>

      <h2>Why your due date might change</h2>
      <p>
        It&apos;s common and completely normal for a due date to be adjusted slightly
        after your 12-week dating scan, once your baby&apos;s measurements are compared
        against standard growth charts — this is generally considered more accurate than
        a date based on your last period alone, particularly if your cycles are
        irregular. If your due date changes after a scan, your care team will use the
        updated date going forward.
      </p>

      <h2>Related calculators</h2>
      <p>
        Tracking your own health alongside your pregnancy? Our{" "}
        <Link href="/calculators/bmi-calculator-uk">BMI calculator</Link> and{" "}
        <Link href="/calculators/age-calculator">age calculator</Link> are quick, free tools
        for other everyday health and date calculations.
      </p>
    </div>
  );
}
