"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowDown, Download } from "lucide-react";
import { TerminalBlock } from "@/components/ui/TerminalBlock";
import { motion, useReducedMotion } from "framer-motion";

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const prefersReduced = useReducedMotion();

  const terminalLines = [
    { prompt: t("terminal.whoami_label"), value: t("terminal.whoami_value") },
    { prompt: t("terminal.stack_label"),  value: t("terminal.stack_value") },
    { prompt: t("terminal.status_label"), value: t("terminal.status_value") },
  ];

  const stagger = (i: number) => ({
    initial: { opacity: 0, y: prefersReduced ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
      delay: prefersReduced ? 0 : i * 0.12,
    },
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-16"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Text */}
          <div className="flex flex-col gap-6">
            <motion.p
              {...stagger(0)}
              className="font-mono text-xs uppercase tracking-widest text-accent"
            >
              {t("tag")}
            </motion.p>

            <motion.h1
              {...stagger(1)}
              className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.05]"
              style={{ letterSpacing: "-0.02em" }}
            >
              {t("headline")}
            </motion.h1>

            <motion.p
              {...stagger(2)}
              className="text-ink-soft text-lg md:text-xl leading-relaxed max-w-lg"
            >
              {t("subheadline")}
            </motion.p>

            <motion.div
              {...stagger(3)}
              className="flex flex-wrap gap-3 pt-2"
            >
              <Link
                href={`/${locale}#projetos`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded
                           bg-accent text-bg font-mono text-sm font-bold uppercase tracking-wide
                           hover:bg-accent/90 active:scale-95
                           transition-all duration-150
                           focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                {t("cta_primary")}
              </Link>

              <a
                href="/cv/Curriculo_Joao_Vitor_Matos.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded
                           border border-accent/50 text-accent font-mono text-sm font-bold uppercase tracking-wide
                           hover:bg-accent-soft hover:border-accent
                           active:scale-95
                           transition-all duration-150
                           focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                <Download size={14} aria-hidden="true" />
                {t("cta_secondary")}
              </a>
            </motion.div>
          </div>

          {/* Right — Terminal */}
          <motion.div {...stagger(4)}>
            <TerminalBlock lines={terminalLines} />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        {...stagger(5)}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-mono text-xs text-ink-mute uppercase tracking-widest opacity-50">
          scroll
        </span>
        <motion.div
          animate={{ y: prefersReduced ? 0 : [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-ink-mute/40"
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
