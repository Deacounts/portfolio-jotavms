import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const CATEGORY_KEYS = ["data", "process", "ai", "frontend", "soft"] as const;

export function TechStack() {
  const t = useTranslations("stack");

  return (
    <section id="stack" className="py-20 md:py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <AnimatedSection>
          <SectionHeader
            label={t("label")}
            title={t("title")}
            subtitle={t("subtitle")}
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORY_KEYS.map((cat, i) => {
            // Items são arrays no JSON
            const rawItems = t.raw(`categories.${cat}.items`) as string[];

            return (
              <AnimatedSection
                key={cat}
                className="bg-bg-elevated border border-line rounded-md p-5 hover:border-accent/30 transition-colors duration-200"
                delay={i * 0.07}
              >
                <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
                  {t(`categories.${cat}.label`)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {rawItems.map((item: string) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
