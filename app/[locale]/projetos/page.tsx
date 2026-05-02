import type { Metadata } from "next";
import { getTranslations, getLocale, setRequestLocale } from "next-intl/server";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { financeiro } from "@/content/projects/financeiro";
import { peopleAnalytics } from "@/content/projects/people-analytics";
import { ecommerce } from "@/content/projects/ecommerce";
import { ibovespa } from "@/content/projects/ibovespa";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("projects");
  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

const slugToKey = {
  financeiro: "financeiro",
  "people-analytics": "people_analytics",
  ecommerce: "ecommerce",
  ibovespa: "ibovespa",
} as const;

const projectMeta = [financeiro, peopleAnalytics, ecommerce, ibovespa];

export default async function ProjetosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  setRequestLocale(localeParam);
  const t = await getTranslations("projects");
  const locale = await getLocale();

  return (
    <section className="pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <AnimatedSection>
          <SectionHeader
            label={t("label")}
            title={t("title")}
            subtitle={t("subtitle")}
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectMeta.map((project, i) => {
            const key = slugToKey[project.slug as keyof typeof slugToKey];
            return (
              <AnimatedSection key={project.slug} delay={i * 0.08}>
                <ProjectCard
                  slug={project.slug}
                  title={t(`items.${key}.title`)}
                  subtitle={t(`items.${key}.subtitle`)}
                  tagline={t(`items.${key}.tagline`)}
                  stackTags={project.stackTags as unknown as string[]}
                  screenshotSrc={project.screenshotFile}
                  cta={t("cta")}
                  locale={locale}
                />
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
