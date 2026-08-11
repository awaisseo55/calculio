import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How do I work out my running pace?",
    answer:
      "Divide your total time by your total distance. If you ran 10km in 50 minutes, your pace is 50 minutes divided by 10, which is 5 minutes per kilometre. This calculator does the conversion for you, including converting between pace per kilometre and pace per mile.",
  },
  {
    question: "How accurate are the predicted finish times for other distances?",
    answer:
      "They use Riegel's formula, a widely used method for predicting race times at other distances based on a known performance, and assume broadly similar training, fitness and conditions across both distances. Predictions tend to be more reliable the closer the two distances are; predicting a marathon time from a 5km time, for example, is much less reliable than predicting it from a half marathon time, since endurance and pacing become bigger factors over longer distances.",
  },
  {
    question: "What is Riegel's formula?",
    answer:
      "Riegel's formula predicts a race time at a new distance as T2 = T1 x (D2/D1) to the power of 1.06, where T1 and D1 are your known time and distance, and D2 is the new distance. The 1.06 exponent reflects that pace naturally slows a little over longer distances, rather than staying perfectly constant.",
  },
  {
    question: "Why does my pace per mile look slower than my pace per kilometre?",
    answer:
      "A mile is longer than a kilometre, about 1.6 times the distance, so it naturally takes longer to cover, even at the exact same running speed. Pace per mile and pace per kilometre are just two different ways of expressing the same underlying speed, not two different speeds.",
  },
  {
    question: "Should I train at my predicted race pace?",
    answer:
      "Predicted times are a useful goal-setting guide, but most training plans deliberately include a mix of paces, easy runs, tempo runs and faster intervals, rather than running every session at goal race pace. It is generally a good idea to follow a structured training plan rather than training at race pace every time out.",
  },
  {
    question: "Does this calculator account for hills, weather or terrain?",
    answer:
      "No, it works purely from the distance and time you enter. Hilly routes, hot weather, wind and uneven terrain can all slow you down compared with a flat course in ideal conditions, so a time from a challenging route may understate your pace on an easier one, and vice versa.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Whether you are checking your pace from a recent run or setting a
        goal for an upcoming race, this calculator works out your running
        pace per kilometre and per mile, your speed, and predicts your
        likely finish time at common race distances based on your current
        form, using the same formula many online race calculators rely on.
      </p>

      <h2>How to use the running pace calculator</h2>
      <p>
        Enter the distance you ran, in kilometres or miles, and your finish
        time in hours, minutes and seconds. The calculator instantly shows
        your pace per kilometre and per mile, your average speed, and
        predicted finish times for 5K, 10K, half marathon and marathon
        distances based on that same effort level.
      </p>

      <h2>How the calculation works</h2>
      <p>
        Pace per kilometre is simply your total time divided by your total
        distance in kilometres, and pace per mile converts this using the
        standard 1.60934 kilometres to a mile conversion. Speed is the
        reverse calculation, distance divided by time, expressed in
        kilometres per hour and miles per hour.
      </p>
      <p>
        Race predictions use Riegel&apos;s formula, T2 = T1 &times; (D2/D1)
        <sup>1.06</sup>, a widely used method for estimating a finish time at
        a different distance from a known time and distance. The formula
        assumes a small, realistic slowdown in pace as distance increases,
        rather than assuming you could hold exactly the same pace for a much
        longer distance.
      </p>

      <h2>Worked example</h2>
      <p>
        A runner completing <strong>10km in 50:00</strong> is running at a
        pace of exactly <strong>5:00 per km</strong>, or around{" "}
        <strong>8:03 per mile</strong>, at a speed of{" "}
        <strong>12 km/h</strong> (about 7.5 mph). Using Riegel&apos;s
        formula, that same runner&apos;s predicted times are roughly{" "}
        <strong>23:59</strong> for a 5K, <strong>1:50:19</strong> for a half
        marathon, and <strong>3:50:01</strong> for a full marathon, assuming
        similar training and conditions across all distances.
      </p>

      <p>
        For a longer example, a runner completing a{" "}
        <strong>half marathon in 1:45:00</strong> is running at almost
        exactly <strong>4:59 per km</strong>. Using the same formula, that
        performance predicts a 10K time of around <strong>47:35</strong>,
        and a marathon time of around <strong>3:38:55</strong>, a prediction
        that tends to be more reliable than one based on a much shorter race,
        since half marathon and marathon distances share more in common in
        terms of pacing and endurance demands.
      </p>

      <h2>Common training paces explained</h2>
      <p>
        Most structured running plans work with several different training
        paces, not just race pace. Easy or recovery pace is noticeably
        slower than race pace and makes up the bulk of weekly mileage for
        most runners, building endurance with lower injury risk. Tempo pace
        sits comfortably faster than easy pace but a little slower than race
        pace, used for sustained efforts that build the ability to hold a
        strong pace for longer. Interval pace is faster than race pace,
        run for shorter bursts with recovery in between, aimed at improving
        speed and running economy. Your predicted race pace from this
        calculator is a useful reference point for working out roughly where
        each of these training paces should sit relative to your current
        fitness.
      </p>

      <h2>Pacing strategy: even splits versus negative splits</h2>
      <p>
        How you distribute your pace across a race matters almost as much as
        your overall time. Starting too fast is one of the most common
        mistakes in distance running, since the extra effort required to
        hold an unsustainable early pace often causes a much larger slowdown
        later in the race than the time gained at the start. Many
        experienced runners and coaches favour even splits, running at a
        consistent pace throughout, or negative splits, running the second
        half slightly faster than the first, both of which tend to produce
        a more comfortable and often faster overall race than starting too
        aggressively and fading.
      </p>

      <h2>Improving your pace over time</h2>
      <p>
        Pace generally improves gradually, through a mix of consistent
        training, an appropriate balance of easy and harder sessions, and
        allowing enough recovery between efforts for the body to adapt.
        Increasing weekly mileage too quickly is a common cause of injury,
        which then interrupts training far more than a slightly slower,
        steadier build-up would have. Many runners also find that some
        general strength training, particularly for the legs and core,
        alongside running-specific sessions, helps improve running economy
        and resilience over time, on top of running itself.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        A common mistake is treating a predicted marathon time from a short,
        fast 5km effort as reliable, when in reality, endurance, fuelling and
        pacing become much bigger factors over a marathon distance than they
        are over 5km. Predictions from a longer recent race, such as a 10K
        or half marathon, tend to be noticeably more reliable for estimating
        a marathon time.
      </p>
      <p>
        Another mistake is ignoring the conditions a time was set in. A pace
        run on a hilly, hot or windy course will not directly translate to
        the same pace on a flat course in ideal conditions, so use route and
        weather context alongside the raw numbers when setting a race goal.
      </p>

      <h2>Related calculators</h2>
      <p>
        If strength training is also part of your routine, our{" "}
        <Link href="/calculators/one-rep-max-calculator-uk">
          one rep max calculator
        </Link>{" "}
        estimates your 1RM from a recent lift. To plan your nutrition around
        your training, our{" "}
        <Link href="/calculators/tdee-calculator-uk">TDEE calculator</Link>{" "}
        estimates your daily calorie needs, and our{" "}
        <Link href="/calculators/ideal-weight-calculator-uk">
          ideal weight calculator
        </Link>{" "}
        gives a general healthy weight range to consider alongside training
        goals, not as a target to chase aggressively. None of these figures
        should be treated as a strict target, since fitness and healthy
        weight both depend on far more than any single number.
      </p>
    </div>
  );
}
