import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "Is 1 dog year really equal to 7 human years?",
    answer:
      "No, this old rule of thumb is a big oversimplification. Dogs actually age very rapidly in their first couple of years, reaching a rough human equivalent of their early 30s by their first birthday, then ageing more slowly after that. The multiply-by-7 rule was never based on solid science and does not reflect how dogs actually age.",
  },
  {
    question: "What formula does this calculator use?",
    answer:
      "This calculator uses a formula based on a 2020 study that compared chemical changes in dog and human DNA over time (an 'epigenetic clock'), which found dog ageing follows roughly a logarithmic pattern: human age equals 16 multiplied by the natural log of the dog's age in years, plus 31. It is one of several methods vets and researchers use, and is more evidence-based than the old multiply-by-7 rule.",
  },
  {
    question: "Does breed size affect how fast a dog ages?",
    answer:
      "Yes, quite significantly in later life. Smaller breeds tend to live longer and age more slowly in their senior years compared with giant breeds, which often show signs of ageing earlier and have shorter typical lifespans. This calculator uses a general formula that does not adjust for breed size, so treat the result as a broad estimate rather than a breed-specific figure.",
  },
  {
    question: "What life stage is my dog in?",
    answer:
      "This calculator gives a general life stage alongside the human-year estimate, from puppy, through young adult and adult, to senior and geriatric. Exact life stage boundaries vary by breed and size, with smaller breeds generally reaching senior status later than larger breeds, so use this as a rough guide rather than a precise veterinary assessment.",
  },
  {
    question: "Why does the estimate change so much in the first year?",
    answer:
      "Puppies develop extremely quickly, reaching sexual maturity and much of their adult size within their first year, which is reflected in a steep early rise in the human-year estimate. Growth and ageing then slow down considerably, which is why the gap between dog years and human years narrows in later life rather than continuing to grow at a constant rate.",
  },
  {
    question: "Should I use this to make health decisions for my dog?",
    answer:
      "No, this is a fun and general estimate, not veterinary advice. If you have any concerns about your dog's health, behaviour or ageing, speak to your vet, who can assess your individual dog rather than relying on a general formula.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Working out your dog&apos;s age in human years is a fun way to think
        about their life stage, but the old &ldquo;multiply by 7&rdquo; rule
        most people grew up with is not very accurate. This calculator uses
        a more evidence-based formula from canine ageing research to give a
        better estimate of your dog&apos;s human-equivalent age, and a
        general sense of the life stage they have reached along the way.
      </p>

      <h2>How to use the dog age calculator</h2>
      <p>
        Enter your dog&apos;s age in years, using decimals for months if
        needed, such as 1.5 for a year and a half old. The calculator
        instantly shows the estimated human-equivalent age and a general
        life stage, from puppy through to geriatric. There is nothing to
        select for breed or size, since the formula used is a general one
        that applies the same way across all dogs, with the size-related
        caveats explained further down this page.
      </p>

      <h2>How the calculation works</h2>
      <p>
        This calculator is based on a 2020 study that compared patterns of
        chemical changes in dog and human DNA over time, finding that dogs
        age on a roughly logarithmic curve rather than a straight
        multiplication. The formula used is human age equals 16 times the
        natural logarithm of the dog&apos;s age in years, plus 31, for dogs
        aged 1 year or older. Under 1 year old, the estimate scales in a
        straight line up to that same age-1 figure, since the logarithmic
        formula does not work for very young puppies.
      </p>
      <p>
        This produces the well-known pattern where dogs appear to age very
        quickly at first, reaching a rough human equivalent of their early
        30s within their first year, then ageing more gradually after that,
        rather than continuing to add human-equivalent years at a constant
        rate.
      </p>

      <h2>Worked example</h2>
      <p>
        A <strong>4-year-old</strong> dog works out at roughly{" "}
        <strong>53 human years</strong> using this formula. By comparison,
        an <strong>8-year-old</strong> dog works out at around{" "}
        <strong>64 human years</strong>, only about 11 years more despite
        being twice the age in dog years, illustrating how much the rate of
        ageing slows down after the rapid first year or two. A{" "}
        <strong>12-year-old</strong> dog, a good age for many medium-sized
        breeds, works out at around <strong>71 human years</strong>, showing
        the curve continuing to flatten as dogs move further into their
        senior years.
      </p>

      <h2>What each general life stage means</h2>
      <p>
        A puppy is still growing and developing, and typically needs more
        frequent vet check-ups, vaccinations and a diet formulated for
        growth. Young adult and adult dogs are usually at their physical
        peak, with established routines for feeding, exercise and
        preventative care such as vaccinations and parasite control. As dogs
        move into their senior and geriatric years, vets generally recommend
        more frequent check-ups, since age-related conditions such as joint
        problems, dental disease and organ function changes become more
        common, even in dogs that otherwise seem healthy day to day.
      </p>

      <h2>Why life expectancy varies so much by size</h2>
      <p>
        One of the more counterintuitive facts about dog ageing is that
        smaller breeds generally live longer than larger ones, the opposite
        pattern to what is typically seen across different species in
        nature. Small breeds often live well into their teens, while giant
        breeds frequently have noticeably shorter typical lifespans and can
        show signs of ageing, such as reduced mobility, at a younger actual
        age. Researchers do not fully agree on why this happens, though
        faster growth rates and a higher relative cancer risk in larger
        breeds are commonly discussed factors. This is part of why a single
        human-years formula, including the one used here, can only ever be a
        general approximation rather than a precise figure for every dog.
      </p>

      <h2>What if I do not know my dog&apos;s exact age?</h2>
      <p>
        This is a common situation for rescue dogs adopted without full
        records. Vets can often give a reasonable age estimate by examining
        a dog&apos;s teeth, since wear and staining patterns change fairly
        predictably up to a few years old, along with general signs like
        coat condition, muscle tone and joint mobility for older dogs. This
        is naturally more of an estimate than a precise figure, particularly
        once a dog is well into adulthood, when physical signs of ageing
        become harder to pin down to an exact year. If you have an
        estimated age range from a vet or rescue organisation, using the
        middle of that range in this calculator is a reasonable way to get
        a general human-years figure.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        The most common mistake is still relying on the old multiply-by-7
        rule, which has no solid scientific basis and significantly
        misrepresents how dogs age, particularly in their first couple of
        years and again in old age. Another is assuming the same formula
        applies equally to every breed and size, when in reality, smaller
        breeds generally age more slowly and live longer in their senior
        years than giant breeds.
      </p>
      <p>
        It is also worth remembering that any human-years formula is a
        general estimate for interest, not a veterinary assessment. A dog&apos;s
        actual health and life stage depend on genetics, breed, weight,
        lifestyle and individual health conditions, which only a vet
        examining your specific dog can properly assess.
      </p>

      <h2>Related calculators</h2>
      <p>
        If you also have a cat, our{" "}
        <Link href="/calculators/cat-age-calculator-uk">
          cat age calculator
        </Link>{" "}
        uses the standard age chart vets use for cats. Curious about your
        own age in different terms, our{" "}
        <Link href="/calculators/age-calculator">age calculator</Link>{" "}
        works out your exact age from your date of birth. If you and your
        dog are keen runners, our{" "}
        <Link href="/calculators/running-pace-calculator-uk">
          running pace calculator
        </Link>{" "}
        can help you plan your next run together, whatever life stage you
        are both currently at.
      </p>
    </div>
  );
}
