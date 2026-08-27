import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How much should I feed my cat each day?",
    answer:
      "It depends on your cat's weight, activity level and the energy content of their food. This calculator gives a general starting estimate based on your cat's weight and lifestyle, but always check the feeding guide on your specific food's packaging too, since energy content varies a lot between brands and between wet and dry food.",
  },
  {
    question: "Why does neutering affect how much my cat needs to eat?",
    answer:
      "Neutered cats tend to have a slightly lower metabolic rate and are often less active than cats that are not neutered, so they generally need somewhat fewer calories to maintain a healthy weight. That is why this calculator offers separate multipliers for neutered and not neutered cats at normal activity levels.",
  },
  {
    question: "How do I know the energy content of my cat's food?",
    answer:
      "Check the packaging, which should list kcal per 100g for dry food or kcal per pouch or can for wet food. Dry cat food is commonly around 300 to 400 kcal per 100g, while wet food is much lower per gram due to its higher water content, so use your specific product's figure for the most accurate result.",
  },
  {
    question: "Is this calculator suitable for kittens?",
    answer:
      "Kittens have much higher energy needs relative to their size to support growth, which is why there is a separate kitten multiplier here. However, kitten feeding is best guided closely by the specific food's packaging and your vet, since growth rates and nutritional needs change quickly in the first year.",
  },
  {
    question: "My cat is overweight. Can I use this to plan a diet?",
    answer:
      "This calculator is not designed for weight loss planning on its own. If your cat needs to lose weight, speak to your vet first, since they can assess a safe target weight and suggest a gradual, monitored feeding plan rather than working from a general online estimate.",
  },
  {
    question: "Should indoor and outdoor cats be fed differently?",
    answer:
      "Often yes. Outdoor cats that roam and hunt tend to burn more energy than indoor cats with a quieter routine, which is why this calculator includes a separate option for very active or outdoor cats. If your cat's routine changes, for example after moving house or being kept indoors more, it is worth reviewing their portions.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Feeding guides on cat food packaging can be confusing, often giving a wide range that does not account for
        your cat&apos;s exact weight or lifestyle. This calculator uses your cat&apos;s weight, activity level and
        the energy content of their food to give you a general daily portion estimate as a helpful starting point.
      </p>

      <h2>How to use the cat food calculator</h2>
      <p>
        Enter your cat&apos;s weight in kilograms, choose the activity level that best matches their lifestyle, and
        enter the energy content of their food in kcal per 100g, which you will find on the packaging. The
        calculator estimates their daily energy needs and converts that into an approximate daily amount of food in
        grams.
      </p>

      <h2>How the calculation works</h2>
      <p>
        The calculator starts with a resting energy requirement, using the standard veterinary formula of 70
        multiplied by your cat&apos;s bodyweight in kilograms raised to the power of 0.75. This resting figure is
        then multiplied by an activity factor depending on your cat&apos;s lifestyle, ranging from 1.0 for a
        supervised weight loss plan up to 2.5 for a growing kitten. Finally, the daily energy figure is divided by
        your food&apos;s energy content and multiplied by 100 to get a daily amount in grams.
      </p>

      <h2>Worked example</h2>
      <p>
        For a <strong>4kg neutered cat</strong> with normal activity, resting energy requirement works out as
        70 &times; 4<sup>0.75</sup> &asymp; <strong>198 kcal</strong>. Using the neutered, normal activity
        multiplier of 1.2, daily energy needs come to around <strong>238 kcal</strong>. If their food contains{" "}
        <strong>350 kcal per 100g</strong>, that works out as (238 &divide; 350) &times; 100 &asymp;{" "}
        <strong>68g of food per day</strong>, typically split across two or more small meals.
      </p>

      <h2>Wet food, dry food and mixed feeding</h2>
      <p>
        Because wet food contains far more water than dry food, the same weight of wet food provides much less
        energy. If you feed a mix of wet and dry food, it is worth working out roughly how many calories your cat
        gets from each, then splitting the daily energy total accordingly, rather than simply halving the total
        weight of food between the two. Most cats do well grazing on several small meals a day rather than one or
        two large ones, which better matches their natural feeding pattern.
      </p>

      <h2>Common mistakes people make</h2>
      <p>
        A common mistake is following the feeding guide on the packaging without adjusting for your cat&apos;s
        actual weight and activity level, since these guides are often based on an average cat. Another mistake is
        not reviewing portions as your cat ages, gains or loses weight, or moves between an indoor and outdoor
        lifestyle. It is also easy to overlook treats when totting up daily calories, which can make up a
        surprisingly large share of a cat&apos;s intake given how small their overall energy needs are.
      </p>

      <h2>Related calculators</h2>
      <p>
        See how your cat&apos;s age compares to human years with our{" "}
        <Link href="/calculators/cat-age-calculator-uk">cat age calculator</Link>. If you have a dog too, our{" "}
        <Link href="/calculators/dog-food-calculator-uk">dog food calculator</Link> and{" "}
        <Link href="/calculators/dog-age-calculator-uk">dog age calculator</Link> work the same way. When comparing
        multipack deals or different pouch sizes, our{" "}
        <Link href="/calculators/discount-calculator-uk">discount calculator</Link> can help you work out the real
        saving on a per-kilogram basis.
      </p>
    </div>
  );
}
