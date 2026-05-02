import { useTranslations } from "next-intl";
import { MapPin, BookOpen, Lightbulb, Target } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const sidebarIcons = {
  location: MapPin,
  studying: BookOpen,
  learning: Lightbulb,
  focus: Target,
} as const;

export function About() {
  const t = useTranslations("about");

  const sidebarItems = [
    { key: "location", icon: sidebarIcons.location },
    { key: "studying", icon: sidebarIcons.studying },
    { key: "learning", icon: sidebarIcons.learning },
    { key: "focus",    icon: sidebarIcons.focus },
  ] as const;

  return (
    <section id="sobre" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <AnimatedSection>
          <SectionHeader label={t("label")} title={t("title")} />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-start">
          {/* Main text */}
          <AnimatedSection className="lg:col-span-2 space-y-5" delay={0.1}>
            <p className="text-ink-soft text-base md:text-lg leading-relaxed">
              {t("paragraph1")}
            </p>
            <p className="text-ink-soft text-base md:text-lg leading-relaxed">
              {t("paragraph2")}
            </p>
            <p className="text-ink font-medium text-base md:text-lg leading-relaxed">
              {t("paragraph3")}
            </p>
          </AnimatedSection>

          {/* Sidebar */}
          <AnimatedSection
            className="space-y-4 bg-bg-elevated border border-line rounded-md p-6"
            delay={0.2}
          >
            {sidebarItems.map(({ key, icon: Icon }) => (
              <div key={key} className="flex items-start gap-3">
                <Icon
                  size={14}
                  className="text-accent mt-1 shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-accent mb-0.5">
                    {t(`${key}_label` as Parameters<typeof t>[0])}
                  </p>
                  <p className="text-ink-soft text-sm leading-snug">
                    {t(`${key}_value` as Parameters<typeof t>[0])}
                  </p>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
