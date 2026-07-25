import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { CalculatorCard } from "@/components/site/calculator-card";
import { Reveal } from "@/components/site/reveal";
import { JsonLd } from "@/components/site/json-ld";
import { BlogPostCard } from "@/components/blog/blog-post-card";
import { getIcon } from "@/lib/icon-map";
import { categories, getCategory } from "@/lib/categories";
import { getCalculatorsByCategory } from "@/lib/calculators";
import { getBlogPostsByCategory } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};

  const title = `${category.name} Calculators`;
  const description = category.description;

  return {
    title,
    description,
    alternates: { canonical: `/categories/${category.slug}` },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [
        {
          url: `/og?title=${encodeURIComponent(title)}&subtitle=${encodeURIComponent(siteConfig.url.replace("https://", ""))}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const items = getCalculatorsByCategory(category.slug);
  const guides = getBlogPostsByCategory(category.slug);
  const Icon = getIcon(category.icon);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Categories", item: `${siteConfig.url}/calculators` },
      { "@type": "ListItem", position: 3, name: category.name, item: `${siteConfig.url}/categories/${category.slug}` },
    ],
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema} />
      <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="size-3.5" aria-hidden="true" />
        <Link href="/calculators" className="hover:text-foreground">Calculators</Link>
        <ChevronRight className="size-3.5" aria-hidden="true" />
        <span className="text-foreground">{category.name}</span>
      </nav>

      <Reveal>
        <div className="flex max-w-2xl flex-col gap-4">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Icon className="size-6" aria-hidden="true" />
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {category.name} calculators
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {category.description}
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.length > 0 ? (
          items.map((calc, i) => (
            <Reveal key={calc.slug} delay={i * 0.05}>
              <CalculatorCard calculator={calc} />
            </Reveal>
          ))
        ) : (
          <p className="text-muted-foreground">
            We&apos;re building more {category.name.toLowerCase()} calculators, check
            back soon.
          </p>
        )}
      </div>

      {guides.length > 0 && (
        <div className="mt-16 border-t border-border/60 pt-14">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            {category.name} guides
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.05}>
                <BlogPostCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
