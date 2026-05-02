import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TerminalBlock } from "@/components/ui/TerminalBlock";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("blog");
  return {
    title: t("title"),
    description: t("coming_soon"),
  };
}

export default async function BlogPage() {
  const t = await getTranslations("blog");

  return (
    <section className="pt-28 pb-20 min-h-screen flex flex-col justify-center">
      <div className="max-w-3xl mx-auto px-6 md:px-10 w-full">
        <AnimatedSection>
          <SectionHeader
            label={t("label")}
            title={t("title")}
            align="center"
          />
        </AnimatedSection>

        <AnimatedSection className="text-center mb-12" delay={0.1}>
          <p className="text-ink-soft text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            {t("coming_soon")}
          </p>
        </AnimatedSection>

        <AnimatedSection className="max-w-sm mx-auto" delay={0.2}>
          <TerminalBlock
            lines={[
              {
                prompt: "status",
                value: t("terminal_status"),
              },
            ]}
          />
        </AnimatedSection>
      </div>
    </section>
  );
}
