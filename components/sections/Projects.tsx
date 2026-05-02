import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { financeiro } from "@/content/projects/financeiro";
import { peopleAnalytics } from "@/content/projects/people-analytics";
import { ecommerce } from "@/content/projects/ecommerce";
import { ibovespa } from "@/content/projects/ibovespa";

const projectMeta = [financeiro, peopleAnalytics, ecommerce, ibovespa];

export function Projects() {
  const t = useTranslations("projects");
  const locale = useLocale();

  // Map slug → translation key
  const slugToKey = {
    financeiro: "financeiro",
    "people-analytics": "people_analytics",
    ecommerce: "ecommerce",
    ibovespa: "ibovespa",
  } as const;

  return (
    <section id="projetos" className="py-20 md:py-28 border-t border-line">
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

        <AnimatedSection className="mt-10 text-center" delay={0.3}>
          <Link
            href={`/${locale}/projetos`}
            className="inline-flex items-center gap-2 font-mono text-sm text-accent
                       border border-accent/30 rounded px-5 py-2.5
                       hover:bg-accent-soft hover:border-accent
                       transition-all duration-150"
          >
            {t("view_all")}
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
