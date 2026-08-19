import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/site/json-ld";
import { getAllAuthors } from "@/lib/authors";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Authors",
  description:
    "Meet the editorial bylines behind Calculio's UK calculators and guides, their focus areas, and how our editorial process works.",
  alternates: { canonical: "/authors" },
};

export default function AuthorsIndexPage() {
  const authors = getAllAuthors();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Authors", item: `${siteConfig.url}/authors` },
    ],
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema} />
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Our authors
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Every calculator and guide on {siteConfig.name} is written and fact-checked
        under one of these editorial bylines. Each page below explains our editorial
        process for that specialism and lists every article published or reviewed under
        it.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {authors.map((author) => (
          <Link
            key={author.slug}
            href={`/authors/${author.slug}`}
            className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
          >
            <span
              className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-base font-semibold text-primary-foreground"
              aria-hidden="true"
            >
              {author.initials}
            </span>
            <div>
              <h2 className="text-base font-semibold text-foreground group-hover:text-primary">
                {author.name}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">{author.role}</p>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                {author.bio}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
