import { useTranslations } from "next-intl";
import { MapPin, FileText } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Experience() {
  const t = useTranslations("experience");

  // items is an array in the JSON — use t.raw to get it
  const items = t.raw("items") as Array<{
    company: string;
    role: string;
    period: string;
    location: string;
    bullets: string[];
  }>;

  return (
    <section id="experiencia" className="py-20 md:py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <AnimatedSection>
          <SectionHeader label={t("label")} title={t("title")} />
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-3 top-2 bottom-10 w-px bg-line"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {items.map((item, i) => (
              <AnimatedSection
                key={item.company}
                className="relative pl-10"
                delay={i * 0.1}
              >
                {/* Dot */}
                <div
                  className="absolute left-0 top-1.5 w-7 h-7 rounded-full
                               border-2 border-accent bg-bg-elevated
                               flex items-center justify-center
                               shadow-[0_0_12px_rgba(0,180,166,0.3)]"
                  aria-hidden="true"
                >
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>

                <div className="bg-bg-elevated border border-line rounded-md p-5 hover:border-accent/30 transition-colors duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="font-display font-semibold text-lg text-ink">
                        {item.company}
                      </h3>
                      <p className="font-mono text-sm text-accent mt-0.5">{item.role}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                      <p className="font-mono text-xs text-ink-mute">{item.period}</p>
                      <p className="flex items-center gap-1 font-mono text-xs text-ink-mute">
                        <MapPin size={10} aria-hidden="true" />
                        {item.location}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-1.5 list-none">
                    {item.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-ink-soft leading-relaxed">
                        <span className="text-accent/60 mt-1 shrink-0 font-mono text-xs">›</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* CTA */}
        <AnimatedSection className="mt-10 pl-10" delay={0.3}>
          <a
            href="/cv/Curriculo_Joao_Vitor_Matos.pdf"
            download
            className="inline-flex items-center gap-2 font-mono text-sm text-accent
                       border border-accent/30 rounded px-5 py-2.5
                       hover:bg-accent-soft hover:border-accent
                       transition-all duration-150"
          >
            <FileText size={14} aria-hidden="true" />
            {t("cta")} →
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
