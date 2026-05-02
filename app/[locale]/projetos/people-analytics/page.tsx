import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { CaseStudyLayout } from "@/components/ui/CaseStudyLayout";
import { peopleAnalytics } from "@/content/projects/people-analytics";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("projects");
  return {
    title: t("items.people_analytics.title"),
    description: t("items.people_analytics.tagline"),
  };
}

export default async function PeopleAnalyticsPage() {
  const t = await getTranslations("projects");

  return (
    <CaseStudyLayout
      slug={peopleAnalytics.slug}
      title={t("items.people_analytics.title")}
      subtitle={t("items.people_analytics.subtitle")}
      tagline={t("items.people_analytics.tagline")}
      stackTags={peopleAnalytics.stackTags as unknown as string[]}
      date={peopleAnalytics.publishedAt}
      readTime={t("items.people_analytics.read_time")}
      question={t("items.people_analytics.question")}
      approach={t("items.people_analytics.approach")}
      dataSource={t("items.people_analytics.data_source")}
      learnings={t.raw("items.people_analytics.learnings") as string[]}
      dashboardFile={peopleAnalytics.dashboardFile}
      prevSlug="financeiro"
      prevTitle={t("items.financeiro.title")}
      nextSlug="ecommerce"
      nextTitle={t("items.ecommerce.title")}
    />
  );
}
