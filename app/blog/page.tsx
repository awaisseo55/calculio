import type { Metadata } from "next";
import { Reveal } from "@/components/site/reveal";
import { BlogPostCard } from "@/components/blog/blog-post-card";
import { getAllBlogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: `Guides and articles from ${siteConfig.name} on UK money, tax, motoring and everyday calculations.`,
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal>
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The Calculio blog
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            In-depth guides on UK mortgages, tax, motoring and money — the kind of
            explainers that go a level deeper than a single calculator result.
          </p>
        </div>
      </Reveal>

      {posts.length === 0 ? (
        <p className="mt-12 text-muted-foreground">
          We&apos;re working on our first guides. Check back soon.
        </p>
      ) : (
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={Math.min(i * 0.05, 0.3)}>
              <BlogPostCard post={post} />
            </Reveal>
          ))}
        </div>
      )}

      <p className="mt-14 text-center text-sm text-muted-foreground">
        More guides are on the way — check back soon for new additions.
      </p>
    </div>
  );
}
