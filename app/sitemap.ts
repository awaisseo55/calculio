import type { MetadataRoute } from "next";
import { calculators } from "@/lib/calculators";
import { categories } from "@/lib/categories";
import { blogPosts } from "@/lib/blog";
import { getAllAuthors } from "@/lib/authors";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/calculators`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${siteConfig.url}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${siteConfig.url}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteConfig.url}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteConfig.url}/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteConfig.url}/cookie-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteConfig.url}/blog`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${siteConfig.url}/authors`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
  ];

  const authorRoutes: MetadataRoute.Sitemap = getAllAuthors().map((author) => ({
    url: `${siteConfig.url}/authors/${author.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.3,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${siteConfig.url}/categories/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const calculatorRoutes: MetadataRoute.Sitemap = calculators.map((c) => ({
    url: `${siteConfig.url}/calculators/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: c.featured ? 0.9 : 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedDate),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...categoryRoutes, ...calculatorRoutes, ...blogRoutes, ...authorRoutes];
}
