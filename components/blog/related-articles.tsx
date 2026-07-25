import { BlogPostCard } from "@/components/blog/blog-post-card";
import type { BlogPostMeta } from "@/lib/blog";

export function RelatedArticles({ posts }: { posts: BlogPostMeta[] }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">
        Related articles
      </h2>
      {posts.length === 0 ? (
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          More Calculio guides are on the way — check back soon.
        </p>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
