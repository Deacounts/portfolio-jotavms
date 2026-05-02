import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CaseStudyLayout } from "@/components/ui/CaseStudyLayout";
import { ibovespa } from "@/content/projects/ibovespa";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("projects");
  return {
    title: t("items.ibovespa.title"),
    description: t("items.ibovespa.tagline"),
  };
}

export default async function IbovespaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("projects");

  return (
    <CaseStudyLayout
      slug={ibovespa.slug}
      title={t("items.ibovespa.title")}
      subtitle={t("items.ibovespa.subtitle")}
      tagline={t("items.ibovespa.tagline")}
      stackTags={ibovespa.stackTags as unknown as string[]}
      date={ibovespa.publishedAt}
      readTime={t("items.ibovespa.read_time")}
      question={t("items.ibovespa.question")}
      approach={t("items.ibovespa.approach")}
      dataSource={t("items.ibovespa.data_source")}
      learnings={t.raw("items.ibovespa.learnings") as string[]}
      dashboardFile={ibovespa.dashboardFile}
      prevSlug="ecommerce"
      prevTitle={t("items.ecommerce.title")}
    />
  );
}
