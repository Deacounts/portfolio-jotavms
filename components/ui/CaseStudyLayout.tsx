import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import { Tag } from "./Tag";
import { DashboardEmbed } from "./DashboardEmbed";
import { AnimatedSection } from "./AnimatedSection";

interface CaseStudyData {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  stackTags: string[];
  date: string;
  readTime: string;
  question: string;
  approach: string;
  dataSource: string;
  learnings: string[];
  dashboardFile: string;
  prevSlug?: string;
  prevTitle?: string;
  nextSlug?: string;
  nextTitle?: string;
}

export function CaseStudyLayout({
  slug,
  title,
  subtitle,
  tagline,
  stackTags,
  date,
  readTime,
  question,
  approach,
  dataSource,
  learnings,
  dashboardFile,
  prevSlug,
  prevTitle,
  nextSlug,
  nextTitle,
}: CaseStudyData) {
  const locale = useLocale();
  const t = useTranslations("projects");

  const siteBase =
    typeof window !== "undefined"
      ? window.location.origin
      : process.env.NEXT_PUBLIC_SITE_URL ?? "https://jotavms.vercel.app";

  const externalHref = `${siteBase}${dashboardFile}`;

  return (
    <article className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Back link */}
        <AnimatedSection>
          <Link
            href={`/${locale}/projetos`}
            className="inline-flex items-center gap-2 font-mono text-xs text-ink-mute
                       hover:text-accent transition-colors duration-150 mb-10 group"
          >
            <ArrowLeft
              size={12}
              className="transition-transform duration-150 group-hover:-translate-x-1"
              aria-hidden="true"
            />
            {t("title")}
          </Link>
        </AnimatedSection>

        {/* Header */}
        <AnimatedSection delay={0.05}>
          <header className="mb-12">
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
              {subtitle}
            </p>
            <h1
              className="font-display font-bold text-4xl md:text-5xl text-ink leading-tight mb-4"
              style={{ letterSpacing: "-0.02em" }}
            >
              {title}
            </h1>
            <p className="text-ink-soft text-lg leading-relaxed mb-6">{tagline}</p>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-1.5 font-mono text-xs text-ink-mute">
                <Calendar size={12} aria-hidden="true" />
                {t("published")} {date}
              </div>
              <div className="flex items-center gap-1.5 font-mono text-xs text-ink-mute">
                <Clock size={12} aria-hidden="true" />
                {readTime} {t("read_time")}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {stackTags.map((tag) => (
                <Tag key={tag} variant="accent">
                  {tag}
                </Tag>
              ))}
            </div>

            <div className="mt-8 h-px bg-line" />
          </header>
        </AnimatedSection>

        {/* Body */}
        <div className="space-y-12">
          {/* Pergunta inicial */}
          <AnimatedSection delay={0.1}>
            <section aria-labelledby="question-heading">
              <h2
                id="question-heading"
                className="font-mono text-xs uppercase tracking-widest text-accent mb-4"
              >
                // A pergunta
              </h2>
              <p className="text-ink text-lg md:text-xl font-medium leading-relaxed border-l-2 border-accent pl-5">
                {question}
              </p>
            </section>
          </AnimatedSection>

          {/* Abordagem */}
          <AnimatedSection delay={0.12}>
            <section aria-labelledby="approach-heading">
              <h2
                id="approach-heading"
                className="font-mono text-xs uppercase tracking-widest text-accent mb-4"
              >
                // Abordagem
              </h2>
              <p className="text-ink-soft text-base leading-relaxed">{approach}</p>
            </section>
          </AnimatedSection>

          {/* Stack & dados */}
          <AnimatedSection delay={0.14}>
            <section
              aria-labelledby="stack-heading"
              className="bg-bg-elevated border border-line rounded-md p-5"
            >
              <h2
                id="stack-heading"
                className="font-mono text-xs uppercase tracking-widest text-accent mb-3"
              >
                // Stack & dados
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="font-mono text-xs text-ink-mute uppercase tracking-wider mb-2">
                    Ferramentas
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {stackTags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-mono text-xs text-ink-mute uppercase tracking-wider mb-1">
                    Fonte dos dados
                  </p>
                  <p className="text-ink-soft text-sm">{dataSource}</p>
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* Dashboard embed */}
          <AnimatedSection delay={0.16}>
            <section aria-labelledby="dashboard-heading">
              <h2
                id="dashboard-heading"
                className="font-mono text-xs uppercase tracking-widest text-accent mb-4"
              >
                // {t("dashboard_label")}
              </h2>
              <DashboardEmbed
                src={dashboardFile}
                title={title}
                externalHref={externalHref}
              />
            </section>
          </AnimatedSection>

          {/* O que aprendi */}
          <AnimatedSection delay={0.18}>
            <section aria-labelledby="learnings-heading">
              <h2
                id="learnings-heading"
                className="font-mono text-xs uppercase tracking-widest text-accent mb-4"
              >
                // O que aprendi
              </h2>
              <ul className="space-y-3">
                {learnings.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-accent font-mono text-sm shrink-0 mt-0.5">
                      0{i + 1}.
                    </span>
                    <p className="text-ink-soft text-base leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </section>
          </AnimatedSection>
        </div>

        {/* Prev / Next navigation */}
        <AnimatedSection delay={0.2}>
          <nav
            className="mt-16 pt-8 border-t border-line flex items-center justify-between gap-4"
            aria-label="Navegação entre projetos"
          >
            {prevSlug && prevTitle ? (
              <Link
                href={`/${locale}/projetos/${prevSlug}`}
                className="flex items-center gap-2 font-mono text-xs text-ink-mute
                           hover:text-accent transition-colors group"
              >
                <ArrowLeft
                  size={12}
                  className="transition-transform group-hover:-translate-x-1"
                  aria-hidden="true"
                />
                <span>
                  <span className="block text-ink-mute/60 uppercase tracking-wider mb-0.5">
                    {t("prev_project")}
                  </span>
                  {prevTitle}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextSlug && nextTitle ? (
              <Link
                href={`/${locale}/projetos/${nextSlug}`}
                className="flex items-center gap-2 font-mono text-xs text-ink-mute
                           hover:text-accent transition-colors group text-right"
              >
                <span>
                  <span className="block text-ink-mute/60 uppercase tracking-wider mb-0.5">
                    {t("next_project")}
                  </span>
                  {nextTitle}
                </span>
                <ArrowRight
                  size={12}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            ) : (
              <div />
            )}
          </nav>
        </AnimatedSection>
      </div>
    </article>
  );
}
