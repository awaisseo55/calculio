import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How old is my cat in human years?",
    answer:
      "A 1-year-old cat is roughly equivalent to a 15-year-old human, and a 2-year-old cat is roughly equivalent to a 24-year-old human, reflecting how quickly cats reach physical and social maturity. After that, each additional cat year adds roughly 4 human years, a much slower rate than the rapid early growth of the first two years.",
  },
  {
    question: "Is the old 'multiply by 7' rule accurate for cats?",
    answer:
      "No, this old rule of thumb does not reflect how cats actually age. Cats mature very quickly in their first two years, reaching a rough human equivalent of their 20s, then age far more gradually after that, closer to 4 human years per cat year rather than a flat 7.",
  },
  {
    question: "Where does this age chart come from?",
    answer:
      "This calculator uses the standard cat ageing chart widely published by veterinary and cat welfare organisations, based on general patterns of feline growth, development and ageing. It is a commonly used reference point in veterinary practice for explaining a cat's approximate life stage to owners.",
  },
  {
    question: "Does breed affect how a cat ages?",
    answer:
      "Yes, to some extent. Some breeds and individual cats age a little faster or slower than the general chart suggests, and indoor cats often live longer on average than outdoor cats due to reduced exposure to accidents, disease and predators. Treat this calculator as a general guide rather than a breed-specific or health-specific assessment.",
  },
  {
    question: "What life stage is my cat in?",
    answer:
      "This calculator gives a general life stage from kitten, through junior and prime adult, to mature, senior and geriatric, based on commonly used veterinary life stage categories for cats. These bands are approximate and can vary between individual cats.",
  },
  {
    question: "Should I use this calculator to make decisions about my cat's health?",
    answer:
      "No, this is a general and fun estimate, not veterinary advice. Regular check-ups with a vet are the best way to understand your cat's actual health and life stage, particularly as cats age and become more prone to age-related conditions.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Cats age very differently from the old &ldquo;multiply by 7&rdquo;
        rule most people know. This calculator uses the standard age chart
        used by vets and cat welfare organisations to convert your
        cat&apos;s age into a human-equivalent age, and shows a general life
        stage alongside it, whether you have a new kitten or a much-loved
        older cat.
      </p>

      <h2>How to use the cat age calculator</h2>
      <p>
        Enter your cat&apos;s age in years, using a decimal for months if
        needed, such as 0.5 for 6 months old. The calculator instantly shows
        the human-equivalent age and a general life stage, from kitten
        through to geriatric. There is no breed selection needed, since the
        standard chart used here applies broadly across cats, with the
        general caveats around individual and breed variation explained
        further down this page.
      </p>

      <h2>How the calculation works</h2>
      <p>
        This calculator follows the standard veterinary reference points: a
        1-year-old cat is treated as roughly 15 human years, and a 2-year-old
        cat as roughly 24 human years, reflecting the very rapid growth and
        development cats go through in their first two years of life. From
        2 years old onwards, each additional cat year adds roughly 4 human
        years, a much steadier and slower rate than the early rapid growth
        phase.
      </p>
      <p>
        For kittens under a year old, the estimate scales in a straight line
        up to the 15-year figure reached at their first birthday, giving a
        reasonable approximation for very young cats even though the
        standard chart is really built around the 1-year and 2-year
        reference points.
      </p>

      <h2>Worked example</h2>
      <p>
        A <strong>3-year-old</strong> cat works out at 24 + (3 &minus; 2)
        &times; 4 = <strong>28 human years</strong>. A{" "}
        <strong>10-year-old</strong> cat works out at 24 + (10 &minus; 2)
        &times; 4 = <strong>56 human years</strong>, and a{" "}
        <strong>15-year-old</strong> cat, a good age for many cats, works
        out at 24 + (15 &minus; 2) &times; 4 ={" "}
        <strong>76 human years</strong>.
      </p>

      <h2>What each life stage generally means</h2>
      <p>
        Kittens grow and develop extremely quickly, needing more frequent
        vet visits, vaccinations and a diet suited to growth. Junior and
        prime adult cats are usually at their physical peak, with settled
        routines for feeding, vaccination boosters and parasite prevention.
        As cats move into their mature and senior years, many vets recommend
        more frequent check-ups and routine blood or urine tests, since
        conditions such as kidney disease, dental problems and joint
        stiffness become noticeably more common, even in cats that seem
        outwardly healthy day to day. Geriatric cats often benefit from diet
        adjustments and closer monitoring for gradual changes in weight,
        appetite or behaviour that owners might otherwise put down to
        &ldquo;just getting older&rdquo;.
      </p>

      <h2>Does indoor or outdoor living affect lifespan?</h2>
      <p>
        Yes, this is one of the more consistent findings in feline welfare
        research. Indoor cats are generally exposed to fewer risks, such as
        road traffic accidents, fights with other animals, and certain
        infectious diseases, and as a result tend to live longer on average
        than cats that roam freely outdoors. This does not mean every indoor
        cat automatically outlives every outdoor cat, since individual
        health, genetics and quality of care all play a large part too, but
        it is a widely recognised general pattern that many vets and welfare
        organisations highlight when discussing a cat&apos;s likely lifespan.
        Some owners choose a supervised outdoor space, such as a secure
        garden run, as a middle ground that gives a cat some outdoor access
        while reducing several of these risks.
      </p>

      <h2>What if I do not know my cat&apos;s exact age?</h2>
      <p>
        This is common for rescue cats taken in without full records. Vets
        can often estimate a cat&apos;s general age range from signs such as
        dental development and wear, coat and eye condition, and overall
        body and muscle tone, though this becomes a wider estimate rather
        than a precise figure once a cat is well into adulthood, when the
        physical signs of ageing slow down and become harder to pin to an
        exact year. If a rescue organisation or vet has given you an
        estimated age range, using the middle of that range in this
        calculator is a reasonable way to get a general human-years figure
        for your cat.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        A common mistake is still using the old multiply-by-7 rule, which
        significantly understates how mature a young cat already is and
        overstates the age of an older cat, since it does not reflect the
        rapid early growth followed by a much slower later ageing rate.
        Another is assuming every cat ages at exactly the chart&apos;s rate;
        individual cats, and to some extent different breeds, can age a
        little faster or slower than the general average.
      </p>
      <p>
        It is also worth remembering this is a general estimate for
        interest, not a substitute for veterinary care. Regular check-ups
        become particularly important as cats reach their senior years, when
        age-related health conditions become more common, and catching
        changes early generally leads to better outcomes than waiting for
        obvious symptoms to appear.
      </p>

      <h2>Related calculators</h2>
      <p>
        If you also have a dog, our{" "}
        <Link href="/calculators/dog-age-calculator-uk">
          dog age calculator
        </Link>{" "}
        uses a formula based on canine ageing research to work out their
        human-equivalent age. Curious about your own age, our{" "}
        <Link href="/calculators/age-calculator">age calculator</Link>{" "}
        works out your exact age from your date of birth, down to the day.
        If pet costs are part of your household budget, our{" "}
        <Link href="/calculators/split-bill-calculator-uk">
          split bill calculator
        </Link>{" "}
        can help divide shared costs, like a vet bill, between household
        members, whether you are splitting costs with a partner, flatmate
        or family member.
      </p>
    </div>
  );
}
