import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How much should I feed my dog each day?",
    answer:
      "It depends on your dog's weight, activity level and the energy content of their food. This calculator gives a general starting estimate based on your dog's weight and how active they are, but always check the feeding guide on your specific food's packaging too, since energy content varies between brands.",
  },
  {
    question: "What is a resting energy requirement?",
    answer:
      "It is an estimate of how much energy your dog would need if they were completely at rest for the day, based on a standard formula using their bodyweight. This calculator then scales that figure up depending on how active your dog actually is, since an active dog needs more energy than one that rests most of the day.",
  },
  {
    question: "Should I feed my dog differently if they are neutered?",
    answer:
      "Many neutered dogs need somewhat fewer calories than dogs that are not neutered, since neutering is often associated with a lower metabolic rate. That is why this calculator offers separate options for neutered and not neutered dogs at normal activity levels.",
  },
  {
    question: "How do I know the energy content of my dog's food?",
    answer:
      "Check the packaging, which should list kcal per 100g or kcal per kg. Dry dog food is commonly in the range of 300 to 400 kcal per 100g, though this varies by brand and formula, so use your specific food's figure for the most accurate result.",
  },
  {
    question: "Is this suitable for puppies or dogs with health conditions?",
    answer:
      "This gives a general starting point only. Puppies, pregnant or nursing dogs, senior dogs, and dogs with health conditions like diabetes, kidney disease or obesity often need a different approach, and your vet is best placed to advise on feeding for these situations.",
  },
  {
    question: "My dog is overweight. Can I use this to plan a diet?",
    answer:
      "This calculator is not designed for weight loss planning on its own. If your dog needs to lose weight, speak to your vet first, since they can assess your dog's target weight, health and suggest a safe, gradual feeding plan rather than working from a general online estimate.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Working out how much to feed your dog can be confusing, especially with feeding guides on packaging often
        giving wide ranges. This calculator uses your dog&apos;s weight, activity level and the energy content of
        their food to give you a general daily portion estimate as a helpful starting point.
      </p>

      <h2>How to use the dog food calculator</h2>
      <p>
        Enter your dog&apos;s weight in kilograms, choose the activity level that best matches their lifestyle, and
        enter the energy content of their food in kcal per 100g, which you will find on the packaging. The
        calculator estimates their daily energy needs and converts that into an approximate daily amount of food in
        grams.
      </p>

      <h2>How the calculation works</h2>
      <p>
        The calculator starts with a resting energy requirement, using the standard veterinary formula of 70
        multiplied by your dog&apos;s bodyweight in kilograms raised to the power of 0.75. This resting figure is
        then multiplied by an activity factor depending on your dog&apos;s lifestyle, ranging from 1.0 for a
        supervised weight loss plan up to 3.0 for a growing puppy. Finally, the daily energy figure is divided by
        your food&apos;s energy content and multiplied by 100 to get a daily amount in grams.
      </p>

      <h2>Worked example</h2>
      <p>
        For an <strong>18kg neutered dog</strong> with normal activity, resting energy requirement works out as
        70 &times; 18<sup>0.75</sup> &asymp; <strong>612 kcal</strong>. Using the neutered, normal activity
        multiplier of 1.6, daily energy needs come to around <strong>979 kcal</strong>. If their food contains{" "}
        <strong>350 kcal per 100g</strong>, that works out as (979 &divide; 350) &times; 100 &asymp;{" "}
        <strong>280g of food per day</strong>, typically split across two meals.
      </p>

      <h2>Splitting portions across the day</h2>
      <p>
        Most adult dogs do well on two meals a day, so you would generally split the daily total roughly in half for
        a morning and evening feed. Puppies often need more frequent, smaller meals, sometimes three or four times a
        day, to support steady growth without overloading their digestive system in one sitting. If you are
        changing your dog&apos;s food or portion size, doing so gradually over a week or so, mixing old and new food,
        tends to be gentler on their digestion than an abrupt switch.
      </p>

      <h2>Common mistakes people make</h2>
      <p>
        A common mistake is following the feeding guide on the packaging without adjusting for your dog&apos;s
        actual activity level, since these guides are often based on an average, moderately active dog. Another
        mistake is not adjusting portions as your dog ages, gains or loses weight, or their activity level changes,
        since a portion that suited them a year ago may no longer be right. It is also easy to overlook treats and
        table scraps when totting up daily intake, which can add up to a significant proportion of daily calories
        without you realising.
      </p>

      <h2>Related calculators</h2>
      <p>
        Curious how your dog&apos;s age compares to human years? Try our{" "}
        <Link href="/calculators/dog-age-calculator-uk">dog age calculator</Link>. If you have a cat too, our{" "}
        <Link href="/calculators/cat-age-calculator-uk">cat age calculator</Link> works the same way for feline
        ages. When comparing bulk bags or multipack deals on food, our{" "}
        <Link href="/calculators/discount-calculator-uk">discount calculator</Link> can help you work out the real
        saving on a per-kilogram basis.
      </p>
    </div>
  );
}
