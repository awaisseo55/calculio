import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How much concrete do I need for a 3m x 3m patio slab?",
    answer:
      "At a typical 100mm (0.1m) depth, a 3m x 3m slab needs 0.9 cubic metres of concrete, weighing around 2,160kg. Using the widely cited rule of thumb that a 20kg bag yields roughly 0.01 cubic metres, that works out at around 90 bags, though buying ready-mixed and delivered is often more practical at this volume.",
  },
  {
    question: "How much concrete do I need for a fence post hole?",
    answer:
      "A typical fence post hole, around 300mm diameter and 600mm deep, needs roughly 0.04 cubic metres of concrete, which is around 5 bags at 20kg each. Many people use a proprietary quick-set post mix for this size of job rather than mixing traditional concrete by hand, since it sets faster and needs no separate mixing water measurement.",
  },
  {
    question: "What mix ratio should I use for concrete?",
    answer:
      "A general purpose 1:2:4 mix (cement, sand, aggregate) suits most DIY jobs like slabs, paths and non-structural footings. Stronger structural work, such as load-bearing columns, often uses a richer mix like 1:1.5:3. For anything structural or load-bearing, always check current building regulations and get advice from a structural engineer or building control before pouring.",
  },
  {
    question: "Is it cheaper to mix my own concrete or buy ready-mix delivered?",
    answer:
      "For small jobs like post holes or a small patio, mixing your own from bags is usually cheaper and more practical. For larger pours, such as a full driveway or a big slab, ready-mix delivered by lorry is often better value once you account for your time, and gives a more consistent mix throughout, though most ready-mix suppliers have a minimum order volume.",
  },
  {
    question: "Do I need to add reinforcement (rebar or mesh) to my concrete?",
    answer:
      "It depends on the job. Larger slabs, driveways and anything load-bearing typically need steel reinforcement to prevent cracking and add strength, while small non-structural jobs like a shed base or fence post hole often do not. This calculator does not cover reinforcement design, so check UK building regulations or ask a builder or structural engineer for anything beyond a simple garden job.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Getting a concrete order wrong is expensive in both directions:
        order too little and you are left with an unfinished pour and a
        second delivery charge, order too much and you have paid for
        concrete you never used. This calculator works out how much
        concrete you need for a slab, footing, post hole or column, in
        cubic metres, weight, and the number of ready-mix bags.
      </p>

      <h2>How to use the concrete calculator</h2>
      <p>
        Choose what you are pouring: a slab or footing uses length, width
        and depth, while a post hole or column uses diameter and depth or
        height instead, since these are typically round. Enter your
        dimensions in metres or feet, and for post holes or columns, add
        how many you need if you are doing several at once, such as a run
        of fence posts. Enter your bag size, commonly 20kg, and a price per
        bag if you know it, to see an estimated cost alongside the
        quantities.
      </p>

      <h2>How the calculation works</h2>
      <p>
        For a slab or footing, the calculator multiplies length by width by
        depth to get the volume in cubic metres. For a post hole or column,
        it uses the volume of a cylinder, based on the radius (half the
        diameter) and the depth or height. The volume is then multiplied by
        a standard concrete density of around 2,400kg per cubic metre to
        estimate the total weight.
      </p>
      <p>
        For bags, the calculator uses a widely cited builders&apos; merchant
        rule of thumb: a 20kg bag of ready-mixed concrete yields
        approximately 0.01 cubic metres once mixed with water, scaled up or
        down for other bag sizes. This figure is rounded up to a whole
        number of bags, since you cannot buy part of a bag and it is always
        safer to have a small amount spare than to run out mid-pour.
      </p>

      <h2>Worked example</h2>
      <p>
        Take a garden patio slab <strong>3 metres by 3 metres</strong>, at a{" "}
        <strong>100mm (0.1m) depth</strong>.
      </p>
      <p>
        The volume is 3 &times; 3 &times; 0.1 ={" "}
        <strong>0.9 cubic metres</strong>, weighing around{" "}
        <strong>2,160kg</strong>. Using 20kg bags, that works out at{" "}
        <strong>90 bags</strong>. At this volume, most people compare the
        cost and effort of 90 bags against a small ready-mix delivery, since
        many suppliers can deliver volumes from around 1 cubic metre
        upwards.
      </p>
      <p>
        Now try a single fence post hole in the calculator above:{" "}
        <strong>300mm diameter</strong> and <strong>600mm deep</strong>. The
        volume comes to around <strong>0.042 cubic metres</strong>, needing
        roughly <strong>5 bags</strong> at 20kg each, a far more manageable
        DIY job than the patio slab. If you are setting several fence posts
        at once, increase the quantity field to see the total bags needed
        across all of them in one go.
      </p>

      <h2>Recommended mix ratios by job type</h2>
      <p>
        A general purpose <strong>1:2:4</strong> mix (cement, sand,
        aggregate, by volume) suits most everyday DIY jobs: patios, garden
        paths, sheds bases and simple footings. Post holes are often filled
        with a proprietary quick-set post mix instead of a traditional wet
        mix, since it is designed to be poured dry around the post and left
        to absorb ground moisture, setting in around an hour without any
        separate mixing. Structural columns and other load-bearing work
        typically need a stronger mix, such as <strong>1:1.5:3</strong>,
        and should always follow a structural engineer&apos;s specification
        rather than a general DIY guideline.
      </p>

      <h2>Weather and timing considerations</h2>
      <p>
        Concrete cures through a chemical reaction with water, not simply by
        drying out, which is why weather matters more than many first-time
        DIYers expect. Pouring in very hot weather can cause the surface to
        cure too quickly, leading to cracking, while pouring in cold
        weather, particularly close to or below freezing, can stop the
        curing reaction almost entirely and seriously weaken the finished
        concrete. Most UK guidance suggests avoiding pours when temperatures
        are forecast to fall below around 5°C within the first 48 hours.
      </p>
      <p>
        Rain shortly after pouring is another common problem, since it can
        wash cement paste from the surface before it has set, leaving a
        weak, dusty finish. Covering a fresh pour with plastic sheeting is a
        simple, cheap way to protect it from both rain and excessive
        moisture loss in hot weather, and is worth doing as standard
        practice rather than only when rain looks likely.
      </p>

      <h2>Common mistakes DIYers make</h2>
      <p>
        A common mistake is underestimating depth, particularly for
        footings and foundations, where building regulations or a
        structural engineer&apos;s specification may require a specific minimum
        depth that a general DIY guide cannot safely assume for your
        specific ground conditions and building type. Always check the
        actual requirement for your project rather than guessing a
        reasonable-looking figure.
      </p>
      <p>
        It is also easy to forget that concrete needs curing time before it
        can bear weight or load, often several days for basic strength and
        considerably longer, sometimes weeks, for full strength. Loading a
        slab or setting a post too early is a common cause of cracking and
        failure.
      </p>
      <p>
        Finally, ordering exactly the calculated amount with no buffer is
        risky, since ground conditions are rarely perfectly even and slight
        over-digging is common. Many builders add a small contingency,
        often an extra 5% to 10%, to avoid running short partway through a
        pour. For anything structural, load-bearing, or larger than a
        simple garden job, get quotes from qualified tradespeople before
        starting work.
      </p>

      <h2>Related calculators</h2>
      <p>
        If your project also involves flooring or decorating, our{" "}
        <Link href="/calculators/flooring-calculator-uk">
          flooring calculator
        </Link>{" "}
        and{" "}
        <Link href="/calculators/paint-coverage-calculator-uk">
          paint coverage calculator
        </Link>{" "}
        can help with the finishing stages. For a bigger renovation project,
        our{" "}
        <Link href="/calculators/kitchen-renovation-cost-calculator-uk">
          kitchen renovation cost calculator
        </Link>{" "}
        gives a fuller budget picture, and our{" "}
        <Link href="/calculators/mortgage-calculator-uk">
          mortgage calculator
        </Link>{" "}
        can help if home improvements are part of a wider house purchase or
        remortgage plan.
      </p>
    </div>
  );
}
