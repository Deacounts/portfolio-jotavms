import { type MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jotavms.vercel.app";
const locales = ["pt", "en"];
const projectSlugs = ["financeiro", "people-analytics", "ecommerce", "ibovespa"];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    // Home
    routes.push({
      url: `${siteUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    });

    // Projects list
    routes.push({
      url: `${siteUrl}/${locale}/projetos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    });

    // Individual projects
    for (const slug of projectSlugs) {
      routes.push({
        url: `${siteUrl}/${locale}/projetos/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }

    // Blog
    routes.push({
      url: `${siteUrl}/${locale}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    });
  }

  return routes;
}
