import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How does the ovulation calculator work out my fertile window?",
    answer:
      "The calculator estimates your ovulation date by counting forward from the first day of your last period, using your average cycle length, then applies a typical 14-day luteal phase (the time between ovulation and your next period). Your fertile window is estimated as the 5 days leading up to ovulation, plus the day of ovulation itself, since sperm can survive for several days while an egg survives for around 24 hours.",
  },
  {
    question: "Why do you count back from my next period instead of forward from my last one?",
    answer:
      "The second half of the menstrual cycle, from ovulation to the next period (the luteal phase), tends to be fairly consistent at around 14 days for most people, while the first half varies more from person to person and cycle to cycle. Counting back from the expected next period, using your average cycle length, tends to give a more reliable estimate than assuming ovulation always happens on day 14.",
  },
  {
    question: "How accurate is an ovulation calculator like this?",
    answer:
      "It gives a reasonable estimate for people with fairly regular cycles, but ovulation timing can shift from month to month due to stress, illness, travel and many other factors. Ovulation predictor kits, which test for a hormone surge directly, and tracking methods like basal body temperature, tend to be more precise if you are actively trying to conceive.",
  },
  {
    question: "Can I use this calculator to avoid pregnancy?",
    answer:
      "No. This calculator is an estimate for planning purposes only and is not a reliable method of contraception, since actual ovulation timing can vary from cycle to cycle. If you are looking for a natural family planning method for contraception, the NHS recommends a fertility awareness method taught properly by a trained instructor, which uses several signs together rather than dates alone.",
  },
  {
    question: "What if my cycles are irregular?",
    answer:
      "If your cycle length varies a lot from month to month, this calculator's estimate becomes less reliable, since it relies on your average cycle length as a fixed input. Irregular cycles are common and often not a cause for concern, but if you are trying to conceive and finding it difficult to predict your cycle, it is worth speaking to your GP, who can check for underlying causes and discuss next steps.",
  },
  {
    question: "When should I see a GP about fertility concerns?",
    answer:
      "NHS guidance generally suggests seeing your GP if you have been trying to conceive for a year without success, or sooner, around 6 months, if you are 36 or over or have a known reproductive health condition. Your GP can arrange initial fertility checks for both partners and refer you on for further investigation or support if needed.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Knowing roughly when you ovulate each month is useful whether you are
        trying to conceive, trying to understand your body better, or simply
        curious about your own cycle. This calculator estimates your
        ovulation date, fertile window, and next expected period from your
        last period date and average cycle length, along with a projection
        for your next three cycles.
      </p>

      <h2>How to use the ovulation calculator</h2>
      <p>
        Enter the first day of your last period and your average cycle
        length, counted from the first day of one period to the first day of
        the next. If you are not sure of your average, 28 days is a common
        starting point, though anywhere from 21 to 40 days is considered a
        normal range. The calculator returns your estimated ovulation date,
        your fertile window, your next expected period, and projected
        ovulation dates for the following three cycles based on the same
        average length.
      </p>

      <h2>How the calculation works</h2>
      <p>
        Rather than assuming ovulation always happens exactly 14 days into
        your cycle, the calculator works backwards from your next expected
        period. It takes your cycle length, subtracts a standard 14-day
        luteal phase, the typically consistent stretch of time between
        ovulation and the next period, and adds that adjusted number of days
        to your last period&apos;s start date. This means a 32-day cycle and
        a 26-day cycle produce noticeably different estimated ovulation days,
        even though both might be entered by someone assuming
        &ldquo;day 14&rdquo; ovulation by default.
      </p>
      <p>
        The fertile window is then set as the 5 days before ovulation through
        to the day of ovulation itself, 6 days in total. This reflects that
        sperm can survive in the body for up to around 5 days in the right
        conditions, while an egg is generally viable for only about 24 hours
        after release, meaning intercourse in the days leading up to
        ovulation can still result in pregnancy even if it happens before the
        egg is actually released.
      </p>

      <h2>Worked example</h2>
      <p>
        Take a last period starting on <strong>1 July 2026</strong>, with an
        average <strong>28-day cycle</strong>. Subtracting the 14-day luteal
        phase from the 28-day cycle gives an ovulation day offset of 14 days,
        so estimated ovulation falls on <strong>15 July 2026</strong>. The
        fertile window runs from <strong>10 July</strong> to{" "}
        <strong>15 July</strong>, and the next period is expected around{" "}
        <strong>29 July 2026</strong>, 28 days after the last one started.
      </p>
      <p>
        Now try changing the cycle length to <strong>32 days</strong> in the
        calculator above, keeping the same last period date. The ovulation
        day offset becomes 18 days instead of 14, shifting the estimated
        ovulation date and fertile window later by 4 days compared with the
        28-day example, which shows why using your own actual average, rather
        than assuming 28 days for everyone, matters for accuracy.
      </p>

      <h2>Understanding your fertile window and cycle</h2>
      <p>
        A typical menstrual cycle has two phases either side of ovulation:
        the follicular phase, from the first day of your period to
        ovulation, which varies quite a lot between people and even between
        cycles for the same person, and the luteal phase, from ovulation to
        the next period, which is usually much more consistent at around 14
        days. This is why cycle length differences between people (or month
        to month for the same person) mostly show up as differences in the
        first phase rather than the second, and why counting back from the
        expected next period tends to be a more reliable estimate than
        counting forward a fixed number of days from the last one.
      </p>

      <h2>Common mistakes people make tracking ovulation</h2>
      <p>
        A common mistake is assuming ovulation always happens on day 14
        regardless of cycle length, which works reasonably well for a
        standard 28-day cycle but becomes increasingly inaccurate for
        shorter or longer cycles. Another is treating a single month&apos;s
        calculation as fixed and permanent, when in reality cycle length and
        ovulation timing can shift from month to month due to stress,
        illness, travel, and many other everyday factors, which is why this
        calculator projects your next 3 cycles rather than just one fixed
        date going forward.
      </p>
      <p>
        It is also worth remembering that this kind of date-based estimate
        is a starting point, not a precise measurement. If you are actively
        trying to conceive, combining this estimate with an ovulation
        predictor kit or tracking other signs your body gives, alongside
        speaking to your GP if you have concerns, will generally give a
        clearer picture than dates alone.
      </p>

      <h2>Related calculators</h2>
      <p>
        If your estimate leads to a positive pregnancy test, our{" "}
        <Link href="/calculators/pregnancy-weeks-calculator-uk">
          pregnancy weeks calculator
        </Link>{" "}
        tracks your current gestational week from that point, and our{" "}
        <Link href="/calculators/pregnancy-due-date-calculator-uk">
          pregnancy due date calculator
        </Link>{" "}
        estimates your full due date and NHS milestones. Our{" "}
        <Link href="/calculators/bmi-calculator-uk">BMI calculator</Link>{" "}
        can also be a useful general health reference point if you are
        planning a pregnancy, alongside guidance from your GP or midwife.
      </p>
    </div>
  );
}
