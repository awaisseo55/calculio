import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/site/json-ld";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/calculators/faq-accordion";
import { RelatedCalculators } from "@/components/calculators/related-calculators";
import { AuthorByline } from "@/components/blog/author-byline";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { RelatedArticles } from "@/components/blog/related-articles";
import { blogContent } from "@/content/blog/registry";
import {
  blogPosts,
  getBlogPost,
  getOtherBlogPosts,
  getPostReadingTime,
} from "@/lib/blog";
import { getCalculator } from "@/lib/calculators";
import { getAuthor } from "@/lib/authors";
import { siteConfig } from "@/lib/site";

const CTA_CONTENT: Record<
  string,
  { title: string; description: string; buttonLabel: string; href: string }
> = {
  "how-much-stamp-duty-uk-2026": {
    title: "Try our stamp duty calculator",
    description:
      "Get your exact 2026 SDLT bill in 10 seconds, including first-time buyer relief, additional property surcharge, and non-resident calculations.",
    buttonLabel: "Calculate my stamp duty",
    href: "/calculators/stamp-duty-calculator-uk",
  },
  "uk-income-tax-2026-27": {
    title: "Calculate your exact take-home pay",
    description:
      "See your net monthly and annual pay after Income Tax, National Insurance, pension and student loan deductions.",
    buttonLabel: "Calculate my take-home pay",
    href: "/calculators/take-home-pay-calculator-uk",
  },
  "mortgage-deposit-uk-2026": {
    title: "Calculate your mortgage repayments",
    description:
      "Enter your property price, deposit and rate for an instant monthly repayment and total interest figure.",
    buttonLabel: "Calculate my repayments",
    href: "/calculators/mortgage-calculator-uk",
  },
  "uk-car-tax-2026-ved-guide": {
    title: "Calculate your exact car tax",
    description:
      "Enter your fuel type, registration date and CO2 emissions for an instant VED breakdown.",
    buttonLabel: "Calculate my car tax",
    href: "/calculators/road-tax-calculator-uk",
  },
  "healthy-bmi-adults-uk": {
    title: "Calculate your BMI now",
    description:
      "Enter your height and weight in metric or imperial units for an instant, NHS-aligned result.",
    buttonLabel: "Calculate my BMI",
    href: "/calculators/bmi-calculator-uk",
  },
  "self-employed-tax-guide-uk-2026": {
    title: "Work out your self-employed tax bill",
    description:
      "Enter your profit and expenses for an instant Income Tax and Class 4 National Insurance breakdown.",
    buttonLabel: "Calculate my tax bill",
    href: "/calculators/self-employed-tax-calculator-uk",
  },
  "compound-interest-explained-uk": {
    title: "See your own savings grow",
    description:
      "Enter your starting balance, monthly contribution and interest rate for an instant compound growth projection.",
    buttonLabel: "Calculate my savings growth",
    href: "/calculators/compound-interest-calculator-uk",
  },
  "london-driving-charges-2026": {
    title: "Work out your London driving costs",
    description:
      "Enter your vehicle and how often you drive in for an instant Congestion Charge and ULEZ cost breakdown.",
    buttonLabel: "Calculate my driving costs",
    href: "/calculators/congestion-charge-ulez-calculator-uk",
  },
  "uk-state-pension-guide-2026": {
    title: "Project your total retirement income",
    description:
      "See your projected pension pot, private pension income, and how it combines with your State Pension.",
    buttonLabel: "Calculate my pension",
    href: "/calculators/pension-calculator-uk",
  },
  "first-home-cost-uk-2026": {
    title: "Calculate your mortgage repayments",
    description:
      "Enter your property price, deposit and rate for an instant monthly repayment and total interest figure.",
    buttonLabel: "Calculate my repayments",
    href: "/calculators/mortgage-calculator-uk",
  },
  "freelancer-hourly-rate-uk-2026": {
    title: "Work out your self-employed tax bill",
    description:
      "Enter your profit and expenses for an instant Income Tax and Class 4 National Insurance breakdown.",
    buttonLabel: "Calculate my tax bill",
    href: "/calculators/self-employed-tax-calculator-uk",
  },
  "uk-council-tax-guide-2026": {
    title: "Calculate your council tax",
    description:
      "Get an instant estimate of your annual and monthly council tax bill by band and region, including single occupant discount and second home premium.",
    buttonLabel: "Calculate my council tax",
    href: "/calculators/council-tax-calculator-uk",
  },
  "reduce-uk-energy-bills-2026": {
    title: "Calculate your energy bill",
    description:
      "Estimate your annual and monthly gas and electricity bill based on your household size, property type, heating system and unit rates.",
    buttonLabel: "Calculate my energy bill",
    href: "/calculators/energy-bill-calculator-uk",
  },
  "electric-vs-petrol-cost-comparison-uk-2026": {
    title: "Work out your EV running cost",
    description:
      "Estimate your annual electric car running cost from your mileage and charging habits, and compare it directly against an equivalent petrol car.",
    buttonLabel: "Calculate my EV running cost",
    href: "/calculators/electric-car-running-cost-calculator-uk",
  },
  "uk-redundancy-guide-2026": {
    title: "Calculate your redundancy pay",
    description:
      "Work out your statutory redundancy pay based on your age, years of service and weekly pay, plus an enhanced package comparison.",
    buttonLabel: "Calculate my redundancy pay",
    href: "/calculators/redundancy-pay-calculator-uk",
  },
  "uk-sick-pay-guide-2026": {
    title: "Calculate your sick pay",
    description:
      "Estimate your Statutory Sick Pay and any company sick pay entitlement, with a full breakdown of what you're owed.",
    buttonLabel: "Calculate my sick pay",
    href: "/calculators/sick-pay-calculator-uk",
  },
  "winter-fuel-payment-guide-2026": {
    title: "Check your Winter Fuel Payment eligibility",
    description:
      "Find out whether you're likely to be eligible for the Winter Fuel Payment this winter and estimate how much you could get.",
    buttonLabel: "Check my eligibility",
    href: "/calculators/winter-fuel-payment-calculator-uk",
  },
  "uk-child-benefit-guide-2026": {
    title: "Calculate your Child Benefit",
    description:
      "Work out your weekly and annual Child Benefit, plus any High Income Child Benefit Charge based on your household income.",
    buttonLabel: "Calculate my Child Benefit",
    href: "/calculators/child-benefit-calculator-uk",
  },
  "uk-maternity-pay-guide-2026": {
    title: "Calculate your maternity pay",
    description:
      "Enter your salary, leave length and employer policy for an instant week-by-week and month-by-month maternity pay breakdown.",
    buttonLabel: "Calculate my maternity pay",
    href: "/calculators/maternity-pay-calculator-uk",
  },
  "uk-student-loan-repayment-guide-2026": {
    title: "Calculate your student loan repayment",
    description:
      "Enter your salary and plan for an instant monthly and annual repayment figure, compared across every plan.",
    buttonLabel: "Calculate my repayment",
    href: "/calculators/student-loan-repayment-calculator-uk",
  },
};

const DISCLAIMER =
  "This article is for informational purposes only and does not constitute tax, medical, or financial advice. Rates and guidelines can change. Verify with the relevant authority or a qualified professional before making decisions.";

interface Props {
  params: Promise<{ slug: string }>;
}

const RELATED_CALCULATOR_SLUGS: Record<string, string[]> = {
  "how-much-stamp-duty-uk-2026": [
    "stamp-duty-calculator-uk",
    "mortgage-calculator-uk",
    "take-home-pay-calculator-uk",
    "income-tax-calculator-uk",
  ],
  "uk-income-tax-2026-27": [
    "take-home-pay-calculator-uk",
    "income-tax-calculator-uk",
    "mortgage-calculator-uk",
    "stamp-duty-calculator-uk",
  ],
  "mortgage-deposit-uk-2026": [
    "mortgage-calculator-uk",
    "stamp-duty-calculator-uk",
    "take-home-pay-calculator-uk",
    "income-tax-calculator-uk",
  ],
  "uk-car-tax-2026-ved-guide": [
    "road-tax-calculator-uk",
    "fuel-cost-calculator-uk",
    "mortgage-calculator-uk",
    "take-home-pay-calculator-uk",
  ],
  "healthy-bmi-adults-uk": [
    "bmi-calculator-uk",
    "pregnancy-due-date-calculator-uk",
    "age-calculator",
    "percentage-calculator",
  ],
  "self-employed-tax-guide-uk-2026": [
    "self-employed-tax-calculator-uk",
    "national-insurance-calculator-uk",
    "income-tax-calculator-uk",
    "vat-calculator-uk",
  ],
  "compound-interest-explained-uk": [
    "compound-interest-calculator-uk",
    "isa-calculator-uk",
    "savings-goal-calculator-uk",
    "credit-card-payoff-calculator-uk",
  ],
  "london-driving-charges-2026": [
    "congestion-charge-ulez-calculator-uk",
    "car-loan-calculator-uk",
    "road-tax-calculator-uk",
    "fuel-cost-calculator-uk",
  ],
  "uk-state-pension-guide-2026": [
    "pension-calculator-uk",
    "national-insurance-calculator-uk",
    "take-home-pay-calculator-uk",
    "isa-calculator-uk",
  ],
  "first-home-cost-uk-2026": [
    "mortgage-calculator-uk",
    "stamp-duty-calculator-uk",
    "mortgage-overpayment-calculator-uk",
    "isa-calculator-uk",
  ],
  "freelancer-hourly-rate-uk-2026": [
    "self-employed-tax-calculator-uk",
    "national-insurance-calculator-uk",
    "take-home-pay-calculator-uk",
    "vat-calculator-uk",
  ],
  "uk-council-tax-guide-2026": [
    "council-tax-calculator-uk",
    "mortgage-calculator-uk",
    "stamp-duty-calculator-uk",
    "savings-goal-calculator-uk",
  ],
  "reduce-uk-energy-bills-2026": [
    "energy-bill-calculator-uk",
    "loft-insulation-calculator-uk",
    "water-bill-calculator-uk",
    "savings-goal-calculator-uk",
  ],
  "electric-vs-petrol-cost-comparison-uk-2026": [
    "electric-car-running-cost-calculator-uk",
    "fuel-cost-calculator-uk",
    "road-tax-calculator-uk",
    "congestion-charge-ulez-calculator-uk",
  ],
  "uk-redundancy-guide-2026": [
    "redundancy-pay-calculator-uk",
    "take-home-pay-calculator-uk",
    "income-tax-calculator-uk",
    "savings-goal-calculator-uk",
  ],
  "uk-sick-pay-guide-2026": [
    "sick-pay-calculator-uk",
    "take-home-pay-calculator-uk",
    "self-employed-tax-calculator-uk",
    "national-insurance-calculator-uk",
  ],
  "winter-fuel-payment-guide-2026": [
    "winter-fuel-payment-calculator-uk",
    "pension-calculator-uk",
    "energy-bill-calculator-uk",
    "council-tax-calculator-uk",
  ],
  "uk-child-benefit-guide-2026": [
    "child-benefit-calculator-uk",
    "income-tax-calculator-uk",
    "take-home-pay-calculator-uk",
    "pension-calculator-uk",
  ],
  "uk-maternity-pay-guide-2026": [
    "maternity-pay-calculator-uk",
    "take-home-pay-calculator-uk",
    "income-tax-calculator-uk",
    "self-employed-tax-calculator-uk",
  ],
  "uk-student-loan-repayment-guide-2026": [
    "student-loan-repayment-calculator-uk",
    "student-budget-calculator-uk",
    "take-home-pay-calculator-uk",
    "income-tax-calculator-uk",
  ],
};

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const author = getAuthor(post.authorSlug);

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.tags,
    alternates: { canonical: `/blog/${post.slug}` },
    authors: author ? [{ name: author.name }] : undefined,
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${siteConfig.url}/blog/${post.slug}`,
      publishedTime: post.publishDate,
      modifiedTime: post.updatedDate,
      authors: author ? [author.name] : undefined,
      tags: post.tags,
      images: [
        {
          url: post.featuredImage,
          width: 1018,
          height: 568,
          alt: post.featuredImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.featuredImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const content = blogContent[slug];
  if (!content) notFound();

  const { ArticleContent, faq, toc } = content;
  const readingTime = getPostReadingTime(post);
  const otherPosts = getOtherBlogPosts(slug);
  const relatedCalculators = (RELATED_CALCULATOR_SLUGS[slug] ?? [])
    .map((s) => getCalculator(s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const author = getAuthor(post.authorSlug);
  const reviewer = getAuthor(post.reviewerSlug);
  if (!author || !reviewer) notFound();

  const cta = CTA_CONTENT[slug];

  const articleUrl = `${siteConfig.url}/blog/${post.slug}`;
  const imageUrl = `${siteConfig.url}${post.featuredImage}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: [imageUrl],
    datePublished: post.publishDate,
    dateModified: post.updatedDate,
    author: { "@type": "Person", name: author.name, jobTitle: author.role },
    reviewedBy: { "@type": "Person", name: reviewer.name, jobTitle: reviewer.role },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/og` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: articleUrl },
    ],
  };

  return (
    <article className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <nav
        aria-label="Breadcrumb"
        className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground"
      >
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="size-3.5" aria-hidden="true" />
        <Link href="/blog" className="hover:text-foreground">
          Blog
        </Link>
        <ChevronRight className="size-3.5" aria-hidden="true" />
        <span className="line-clamp-1 text-foreground">{post.title}</span>
      </nav>

      <Reveal>
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href={post.categoryHref}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              {post.category}
            </Link>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl md:text-5xl">
            {post.title}
          </h1>

          <div className="mt-6">
            <AuthorByline
              author={author}
              reviewer={reviewer}
              publishDate={post.publishDate}
              updatedDate={post.updatedDate}
              readingTime={readingTime}
            />
          </div>
        </div>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-[240px_1fr]">
        <TableOfContents items={toc} />

        <div className="max-w-3xl">
          <ArticleContent />

          <div className="mt-6">
            <FaqAccordion items={faq} />
          </div>

          {cta && (
            <section
              id="try-calculator"
              className="not-prose my-14 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-success/10 p-8 text-center card-glow sm:p-10"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                {cta.title}
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {cta.description}
              </p>
              <div className="mt-6">
                <Button
                  size="lg"
                  className="rounded-full px-8"
                  render={<Link href={cta.href} />}
                >
                  {cta.buttonLabel}
                </Button>
              </div>
            </section>
          )}

          <p className="mt-10 rounded-xl border border-border bg-muted/40 p-4 text-xs leading-relaxed text-muted-foreground">
            {DISCLAIMER}
          </p>
        </div>
      </div>

      <div className="mt-16 border-t border-border/60 pt-14">
        <RelatedCalculators calculators={relatedCalculators} />
      </div>

      <div className="mt-16 border-t border-border/60 pt-14">
        <RelatedArticles posts={otherPosts} />
      </div>
    </article>
  );
}
