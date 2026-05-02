import { useTranslations } from "next-intl";
import { Mail, Download } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

interface ContactLink {
  key: string;
  href: string;
  label: string;
  icon: React.ReactNode;
  isDownload?: boolean;
  external?: boolean;
}

export function Contact() {
  const t = useTranslations("contact");

  const links: ContactLink[] = [
    {
      key: "email",
      href: "mailto:jotavms@icloud.com",
      label: t("email"),
      icon: <Mail size={24} aria-hidden="true" />,
    },
    {
      key: "linkedin",
      href: "https://linkedin.com/in/jotavmatos",
      label: t("linkedin"),
      icon: <LinkedinIcon width={24} height={24} />,
      external: true,
    },
    {
      key: "github",
      href: "https://github.com/Deacounts",
      label: t("github"),
      icon: <GithubIcon width={24} height={24} />,
      external: true,
    },
    {
      key: "cv",
      href: "/cv/Curriculo_Joao_Vitor_Matos.pdf",
      label: t("cv"),
      icon: <Download size={24} aria-hidden="true" />,
      isDownload: true,
    },
  ];

  return (
    <section id="contato" className="py-20 md:py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <AnimatedSection>
          <SectionHeader
            label={t("label")}
            title={t("title")}
            subtitle={t("subtitle")}
            align="center"
          />
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {links.map((link, i) => (
            <AnimatedSection key={link.key} delay={i * 0.08}>
              <a
                href={link.href}
                {...(link.isDownload ? { download: true } : {})}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex flex-col items-center gap-3 p-6
                           bg-bg-elevated border border-line rounded-md
                           text-ink-mute
                           hover:text-accent hover:border-accent/50 hover:bg-accent-soft hover:-translate-y-1
                           transition-all duration-200 ease-out
                           focus-visible:ring-2 focus-visible:ring-accent
                           group"
                aria-label={link.label}
              >
                <span className="transition-transform duration-200 group-hover:scale-110">
                  {link.icon}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider">{link.label}</span>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
