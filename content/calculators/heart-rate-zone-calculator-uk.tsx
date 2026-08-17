import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How is maximum heart rate estimated?",
    answer:
      "This calculator uses the widely taught formula of 220 minus your age. It is a population-level estimate rather than a measured figure, so your actual maximum can be somewhat higher or lower depending on your individual fitness and physiology.",
  },
  {
    question: "What is the difference between the percentage method and the Karvonen method?",
    answer:
      "The simple method takes a straight percentage of your estimated maximum heart rate. The Karvonen method also factors in your resting heart rate, working from your heart rate reserve (the gap between resting and maximum), which many coaches consider a closer estimate for people who already track their resting heart rate.",
  },
  {
    question: "Which zone should I train in for fat burning?",
    answer:
      "Zone 2, roughly 60% to 70% of maximum heart rate, is often associated with fat-burning and easy aerobic training, since the body relies more on fat as a fuel source at lower intensities. That said, total energy burned over a session and your overall diet matter just as much as which zone you exercise in.",
  },
  {
    question: "Is it safe to train in Zone 5?",
    answer:
      "Zone 5 represents near-maximal effort and is generally used in short bursts as part of interval training by people who are already reasonably fit. If you are new to exercise, have an existing health condition, or are unsure, speak to your GP before attempting high-intensity training.",
  },
  {
    question: "Why does my heart rate not match these zones when I exercise?",
    answer:
      "Heart rate is affected by many things beyond fitness, including caffeine, heat, hydration, stress, sleep, medication and altitude. These zones are useful general guides rather than exact targets, so use how you feel alongside the numbers rather than chasing a specific figure.",
  },
  {
    question: "How do I find my resting heart rate?",
    answer:
      "Check your pulse first thing in the morning before getting out of bed, ideally for a full 60 seconds, over a few consecutive days to get a stable average. Many fitness trackers and smartwatches also measure this automatically overnight.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Training with heart rate zones helps you match your effort to your goal, whether that is an easy recovery
        session, steady aerobic fitness building, or a hard interval session. This calculator estimates your
        maximum heart rate from your age, then breaks it down into five commonly used training zones so you can see
        roughly what your heart rate should be doing at each intensity.
      </p>

      <h2>How to use the heart rate zone calculator</h2>
      <p>
        Enter your age to get your estimated maximum heart rate and zones straight away. If you know your resting
        heart rate, ideally measured first thing in the morning, tick the box to switch to the Karvonen method,
        which many coaches consider a more personalised estimate since it also accounts for your current fitness
        level through your resting heart rate.
      </p>

      <h2>How the calculation works</h2>
      <p>
        Maximum heart rate is estimated using the standard 220 minus age formula. The simple percentage method then
        multiplies that figure by each zone&apos;s percentage range. The Karvonen method instead calculates your
        heart rate reserve, which is your maximum heart rate minus your resting heart rate, applies the zone
        percentage to that reserve, then adds your resting heart rate back on. This tends to give slightly higher
        target zones for the same percentage than the simple method, particularly for people with a low resting
        heart rate from regular training.
      </p>

      <h2>Worked example</h2>
      <p>
        For a 35 year old, estimated maximum heart rate is 220 &minus; 35 = <strong>185 bpm</strong>. Using the
        simple percentage method, Zone 2 (60% to 70%) works out as roughly{" "}
        <strong>111 to 130 bpm</strong>. If that same person has a resting heart rate of 65 bpm and uses the
        Karvonen method instead, their heart rate reserve is 185 &minus; 65 = 120 bpm, so Zone 2 becomes{" "}
        (120 &times; 0.6) + 65 = <strong>137 bpm</strong> to (120 &times; 0.7) + 65 ={" "}
        <strong>149 bpm</strong>, noticeably higher than the simple method suggests.
      </p>

      <h2>What each zone is generally used for</h2>
      <p>
        Zone 1 covers warm-ups and active recovery days, where the aim is to keep effort easy enough to hold a
        conversation. Zone 2 is widely used for building an aerobic base, often at a pace that still feels
        comfortable but sustained for longer periods. Zone 3 sits in a moderate, steady effort range often used for
        tempo work. Zone 4 pushes towards your anaerobic threshold, the point where effort starts to feel
        noticeably harder and less sustainable, commonly used for interval sessions. Zone 5 represents close to
        maximal effort, typically held only for short bursts as part of structured interval training.
      </p>

      <h2>Common mistakes people make</h2>
      <p>
        A common mistake is spending most training time in Zone 4 or 5, chasing a harder workout every session,
        when a large proportion of easier Zone 1 and Zone 2 training is generally recommended for building a
        sustainable aerobic base without excessive fatigue. Another mistake is treating the 220 minus age formula as
        an exact figure rather than a population estimate, when individual maximum heart rate can vary meaningfully
        from person to person of the same age. It is also easy to forget that factors like heat, dehydration,
        illness, caffeine and poor sleep can all push your heart rate higher than usual for a given effort, which is
        not necessarily a sign you are training harder or less fit.
      </p>

      <h2>Related calculators</h2>
      <p>
        If running is part of your training, our{" "}
        <Link href="/calculators/running-pace-calculator-uk">running pace calculator</Link> works out your pace and
        predicts race finish times. For strength training, our{" "}
        <Link href="/calculators/one-rep-max-calculator-uk">one-rep max calculator</Link> estimates your maximum lift
        and a percentage table for programming your sessions. To plan nutrition alongside your training, our{" "}
        <Link href="/calculators/tdee-calculator-uk">TDEE calculator</Link> estimates your daily calorie needs. For
        general background on healthy training, see our guide to{" "}
        <Link href="/blog/healthy-bmi-adults-uk">healthy BMI for UK adults</Link>.
      </p>
    </div>
  );
}
