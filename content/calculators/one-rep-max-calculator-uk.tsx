import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "What is a one-rep max (1RM)?",
    answer:
      "Your one-rep max is the heaviest weight you can lift for a single, complete repetition of an exercise with good form. It is commonly used as a benchmark for strength and as the basis for setting training weights as a percentage of that maximum.",
  },
  {
    question: "How does this calculator estimate my 1RM without me actually lifting it?",
    answer:
      "It uses the Epley formula, one of the most widely used methods for estimating 1RM from a submaximal set: 1RM = weight lifted x (1 + reps / 30). This avoids the injury risk of testing a true one-rep max directly, especially for lifters who are not experienced with maximal attempts.",
  },
  {
    question: "How accurate is an estimated 1RM compared with a true maximum test?",
    answer:
      "Estimation formulas like Epley's are reasonably accurate for sets of around 1 to 10 reps taken close to failure, but accuracy drops for higher rep sets, since the relationship between reps and strength becomes less predictable. A true, carefully supervised 1RM test remains the most accurate way to know your actual maximum.",
  },
  {
    question: "What is the training percentage table used for?",
    answer:
      "Many strength training programmes prescribe working weights as a percentage of your 1RM, such as 5 sets at 80% for strength work or lighter percentages for technique and volume work. This table converts your estimated 1RM into the actual weight to load for common percentage targets, saving you the maths mid-session.",
  },
  {
    question: "Should beginners test or estimate their one-rep max?",
    answer:
      "Most coaches recommend beginners estimate their 1RM from a comfortable submaximal set, as this calculator does, rather than attempting a true maximal lift before their technique is well established. Estimating avoids unnecessary injury risk while still giving a useful number to plan training around.",
  },
  {
    question: "Does this work for any exercise?",
    answer:
      "It works best for compound barbell lifts like the squat, bench press and deadlift, where the Epley formula was originally developed and is most commonly used. It is less reliable for exercises with a lot of technical variation, machine-based exercises, or bodyweight movements.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Testing a true one-rep max can be risky without experience or
        supervision, but you can get a solid estimate from a lighter set
        taken close to failure. This calculator estimates your one-rep max
        from the weight and reps you lifted, and breaks it down into a
        percentage table for planning your training weights across
        different phases of a programme.
      </p>

      <h2>How to use the one-rep max calculator</h2>
      <p>
        Enter the weight you lifted and the number of reps you completed in
        that set, ideally a set taken close to muscular failure with good
        form. The calculator estimates your one-rep max and shows a
        percentage table, so you can quickly see what weight corresponds to
        50%, 70%, 90% and other common training percentages of your
        estimated maximum.
      </p>

      <h2>How the calculation works</h2>
      <p>
        This calculator uses the Epley formula, one of the most widely used
        1RM estimation methods: one-rep max equals the weight lifted
        multiplied by 1 plus reps divided by 30. This formula reflects the
        general pattern that lifting a lighter weight for more reps roughly
        corresponds to a predictable single maximum lift, though the
        estimate becomes less reliable for very high rep sets, where
        muscular endurance starts to matter more than pure strength.
      </p>

      <h2>Worked example</h2>
      <p>
        Lifting <strong>100kg for 5 reps</strong> gives an estimated one-rep
        max of 100 &times; (1 + 5/30) = <strong>116.7kg</strong>. From that
        figure, common training percentages work out at{" "}
        <strong>58.3kg at 50%</strong>, <strong>81.7kg at 70%</strong>,{" "}
        <strong>93.3kg at 80%</strong>, and <strong>105kg at 90%</strong>,
        giving a ready-made set of target weights for different phases of a
        training programme.
      </p>

      <h2>Other 1RM formulas you might see</h2>
      <p>
        The Epley formula used here is not the only method for estimating a
        one-rep max. The Brzycki formula is another widely used option,
        calculated as weight lifted divided by 1.0278 minus 0.0278 times
        reps. For the same 100kg lift for 5 reps used above, the Brzycki
        formula gives an estimate of around <strong>112.5kg</strong>,
        slightly lower than the Epley estimate of 116.7kg. Neither formula
        is definitively &ldquo;correct&rdquo;, and different formulas tend
        to agree closely at low rep counts but diverge more as reps
        increase, which is part of why estimates from very high rep sets
        should be treated with more caution than those from lower rep sets.
      </p>

      <h2>Staying safe when testing your strength</h2>
      <p>
        Whether estimating or directly testing strength, a few general
        practices reduce injury risk. A thorough warm-up, including lighter
        warm-up sets building up towards your working weight, helps prepare
        muscles and joints for a heavy effort. Using a spotter or safety
        bars for exercises like the barbell bench press or squat adds a
        safety net if a lift does not go to plan. Prioritising good form
        over chasing a bigger number matters too, since a heavier lift with
        breakdown in technique is both less accurate as a strength indicator
        and carries a higher injury risk than a slightly lighter lift
        performed well.
      </p>

      <h2>Using percentages to structure training</h2>
      <p>
        Different training goals are generally associated with different
        percentage ranges of 1RM. Heavier work in the 85% to 100% range,
        performed for low reps, tends to be associated with building maximal
        strength. Moderate loads in the 65% to 85% range, for moderate rep
        counts, are commonly used for building muscle size. Lighter loads
        below around 65%, for higher reps, are often used for muscular
        endurance, technique work, or as part of a warm-up building towards
        a heavier working set. These are general patterns rather than fixed
        rules, and a full programme will typically blend several rep ranges
        across a training cycle rather than sticking to just one.
      </p>
      <p>
        Your estimated 1RM is also a useful way to track progress over
        time. Retesting or re-estimating every few weeks or months and
        comparing the figure lets you see whether a training programme is
        working, independently of the specific weights and reps used in any
        individual session, since the underlying 1RM estimate accounts for
        both.
      </p>

      <h2>Why your strength varies day to day</h2>
      <p>
        Do not be surprised if an estimate from one session looks noticeably
        different from another, even without a formal training block in
        between. Sleep quality, stress levels, nutrition, hydration, how
        recently you last trained that muscle group, and even the time of
        day can all genuinely affect how much weight you can lift on a given
        day. A single estimate is a useful snapshot, but tracking your
        estimated 1RM over several sessions across a few weeks gives a much
        more reliable picture of your actual underlying strength trend than
        any one session in isolation.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        A common mistake is estimating from a set that was not close to
        failure, which understates your true strength, or from a set with
        breakdown in technique, which can overstate it since form
        deteriorating under fatigue does not reflect a genuine strength
        limit. Try to base your estimate on a recent set of good-quality
        reps taken close to, but not necessarily all the way to, failure.
      </p>
      <p>
        Another mistake is treating the estimate as exact rather than a
        useful approximation, particularly for very high rep sets, where
        1RM formulas generally become less reliable. It is also worth
        retesting periodically as you get stronger, since your estimated
        1RM from months ago will not reflect your current strength.
      </p>

      <h2>Related calculators</h2>
      <p>
        If running is also part of your training, our{" "}
        <Link href="/calculators/running-pace-calculator-uk">
          running pace calculator
        </Link>{" "}
        works out your pace and predicts race finish times. To plan
        nutrition around your training, our{" "}
        <Link href="/calculators/tdee-calculator-uk">TDEE calculator</Link>{" "}
        estimates your daily calorie needs, and our{" "}
        <Link href="/calculators/bmr-calculator-uk">BMR calculator</Link>{" "}
        works out your resting metabolic rate as a starting point for that
        calculation. Strength and cardiovascular training work well
        together as part of a balanced overall training routine.
      </p>
    </div>
  );
}
