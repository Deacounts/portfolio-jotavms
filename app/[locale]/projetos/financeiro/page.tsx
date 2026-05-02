import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { CaseStudyLayout } from "@/components/ui/CaseStudyLayout";
import { financeiro } from "@/content/projects/financeiro";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("projects");
  return {
    title: t("items.financeiro.title"),
    description: t("items.financeiro.tagline"),
  };
}

export default async function FinanceiroPage() {
  const t = await getTranslations("projects");

  return (
    <CaseStudyLayout
      slug={financeiro.slug}
      title={t("items.financeiro.title")}
      subtitle={t("items.financeiro.subtitle")}
      tagline={t("items.financeiro.tagline")}
      stackTags={financeiro.stackTags as unknown as string[]}
      date={financeiro.publishedAt}
      readTime={t("items.financeiro.read_time")}
      question={t("items.financeiro.question")}
      approach={t("items.financeiro.approach")}
      dataSource={t("items.financeiro.data_source")}
      learnings={t.raw("items.financeiro.learnings") as string[]}
      dashboardFile={financeiro.dashboardFile}
      nextSlug="people-analytics"
      nextTitle={t("items.people_analytics.title")}
    />
  );
}
