import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { CaseStudyLayout } from "@/components/ui/CaseStudyLayout";
import { ecommerce } from "@/content/projects/ecommerce";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("projects");
  return {
    title: t("items.ecommerce.title"),
    description: t("items.ecommerce.tagline"),
  };
}

export default async function EcommercePage() {
  const t = await getTranslations("projects");

  return (
    <CaseStudyLayout
      slug={ecommerce.slug}
      title={t("items.ecommerce.title")}
      subtitle={t("items.ecommerce.subtitle")}
      tagline={t("items.ecommerce.tagline")}
      stackTags={ecommerce.stackTags as unknown as string[]}
      date={ecommerce.publishedAt}
      readTime={t("items.ecommerce.read_time")}
      question={t("items.ecommerce.question")}
      approach={t("items.ecommerce.approach")}
      dataSource={t("items.ecommerce.data_source")}
      learnings={t.raw("items.ecommerce.learnings") as string[]}
      dashboardFile={ecommerce.dashboardFile}
      prevSlug="people-analytics"
      prevTitle={t("items.people_analytics.title")}
      nextSlug="ibovespa"
      nextTitle={t("items.ibovespa.title")}
    />
  );
}
