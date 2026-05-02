import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  const year = new Date().getFullYear();
  const lastUpdate = new Date().toLocaleDateString("pt-BR", {
    month: "short",
    year: "numeric",
  });

  return (
    <footer className="relative border-t border-line bg-bg-elevated">
      {/* Cyan top line accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-40" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="font-mono text-xs text-ink-mute order-3 md:order-1">
            {t("copyright").replace("2026", String(year))}
          </p>

          {/* Quick links */}
          <nav
            className="flex items-center gap-6 order-1 md:order-2"
            aria-label="Links rápidos"
          >
            {(["about", "projects", "contact"] as const).map((key) => (
              <a
                key={key}
                href={`#${key === "about" ? "sobre" : key === "projects" ? "projetos" : "contato"}`}
                className="font-mono text-xs uppercase tracking-wider text-ink-mute
                           hover:text-accent transition-colors duration-150"
              >
                {t(`links.${key}`)}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-4 order-2 md:order-3">
            <a
              href="https://linkedin.com/in/jotavmatos"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de João Vitor"
              className="text-ink-mute hover:text-accent transition-colors duration-150"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://github.com/Deacounts"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de João Vitor"
              className="text-ink-mute hover:text-accent transition-colors duration-150"
            >
              <GithubIcon />
            </a>
            <a
              href="mailto:jotavms@icloud.com"
              aria-label="Email de João Vitor"
              className="text-ink-mute hover:text-accent transition-colors duration-150"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Last update mono caption */}
        <p className="font-mono text-xs text-ink-mute/40 text-center mt-6">
          {`// ${t("last_update")} ${lastUpdate}`}
        </p>
      </div>
    </footer>
  );
}
