import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Mail, ShieldCheck, FileText, BookOpen } from "lucide-react";
import { JsonLd } from "@/components/site/json-ld";
import { BlogPostCard } from "@/components/blog/blog-post-card";
import { getAllAuthors, getAuthor } from "@/lib/authors";
import { getArticlesWrittenBy, getArticlesReviewedBy } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllAuthors().map((author) => ({ slug: author.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) return {};

  return {
    title: `${author.name}, ${author.role}`,
    description: `${author.name}'s Calculio editorial profile: role, areas of focus, editorial process, and every calculator guide and article they have written or reviewed.`,
    alternates: { canonical: `/authors/${author.slug}` },
  };
}

export default async function AuthorPage({ params }: Props) {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) notFound();

  const written = getArticlesWrittenBy(slug);
  const reviewed = getArticlesReviewedBy(slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Authors", item: `${siteConfig.url}/authors` },
      {
        "@type": "ListItem",
        position: 3,
        name: author.name,
        item: `${siteConfig.url}/authors/${author.slug}`,
      },
    ],
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    jobTitle: author.role,
    description: author.bio,
    url: `${siteConfig.url}/authors/${author.slug}`,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    knowsAbout: author.expertise,
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={personSchema} />

      <div className="flex items-center gap-4">
        <span
          className="flex size-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-xl font-semibold text-primary-foreground"
          aria-hidden="true"
        >
          {author.initials}
        </span>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {author.name}
          </h1>
          <p className="text-muted-foreground">{author.role}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {author.expertise.map((item) => (
          <span
            key={item}
            className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="prose prose-neutral dark:prose-invert mt-8 max-w-none">
        <p>{author.bio}</p>
        <p>{author.background}</p>

        <h2>How {author.name.split(" ")[0]} works</h2>
        <p>
          Every calculator and guide {author.name.split(" ")[0]} writes or reviews
          follows the same process: research current UK rates, thresholds and rules
          from primary government or NHS sources, build and test the calculation logic
          against known worked examples, then write a plain English explanation before
          publishing. Content is revisited whenever the underlying rates change,
          typically around the Spring and Autumn Budget or the start of a new tax year.
          Full detail on this process is on our <Link href="/about">About page</Link>.
        </p>

        <h2>Conflicts of interest</h2>
        <p>
          {siteConfig.name} is independent and does not accept payment from any bank,
          lender, insurer, tax firm or other financial product provider to influence a
          calculator&apos;s figures or a guide&apos;s content. Revenue comes from
          advertising shown alongside our content, not from any product {author.name}{" "}
          writes about.
        </p>

        <h2>Editorial contact</h2>
        <p className="flex items-center gap-2">
          <Mail className="size-4 shrink-0" aria-hidden="true" />
          Spotted an error or have a correction? Contact the editorial team via our{" "}
          <Link href="/contact">contact page</Link> or at{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </div>

      {written.length > 0 && (
        <div className="mt-14">
          <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-foreground">
            <FileText className="size-5 text-primary" aria-hidden="true" />
            Articles written by {author.name}
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {written.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      )}

      {reviewed.length > 0 && (
        <div className="mt-14">
          <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-foreground">
            <ShieldCheck className="size-5 text-primary" aria-hidden="true" />
            Articles reviewed by {author.name}
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reviewed.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      )}

      {written.length === 0 && reviewed.length === 0 && (
        <p className="mt-14 flex items-center gap-2 text-sm text-muted-foreground">
          <BookOpen className="size-4 shrink-0" aria-hidden="true" />
          Calculator guides are added regularly, check back soon for this byline&apos;s
          published work.
        </p>
      )}
    </div>
  );
}
