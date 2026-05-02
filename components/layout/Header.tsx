"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X } from "lucide-react";
import { LanguageToggle } from "./LanguageToggle";

const NAV_ITEMS = [
  { key: "about", href: "#sobre" },
  { key: "projects", href: "#projetos" },
  { key: "stack", href: "#stack" },
  { key: "experience", href: "#experiencia" },
  { key: "contact", href: "#contato" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Close menu on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg-elevated/90 backdrop-blur-md border-b border-line shadow-[0_1px_0_rgba(0,180,166,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-3 group"
            aria-label="João Vitor Matos — início"
          >
            <span
              className="flex items-center justify-center w-8 h-8 rounded
                         bg-accent-soft border border-accent/30
                         font-display font-bold text-sm text-accent
                         group-hover:bg-accent group-hover:text-bg
                         transition-all duration-200"
            >
              JM
            </span>
            <span className="font-mono text-xs text-ink-mute hidden sm:block tracking-wider">
              João Vitor Matos
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Navegação principal">
            {NAV_ITEMS.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                className="font-mono text-xs uppercase tracking-wider text-ink-mute
                           hover:text-ink transition-colors duration-150
                           focus-visible:text-accent"
              >
                {t(key)}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <LanguageToggle />

            {/* Hamburger (mobile only) */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden p-1.5 text-ink-mute hover:text-ink transition-colors"
              aria-label={menuOpen ? t("close_menu") : t("open_menu")}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-bg/98 backdrop-blur-sm md:hidden
                     flex flex-col items-center justify-center gap-8"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
        >
          <nav className="flex flex-col items-center gap-8" aria-label="Navegação mobile">
            {NAV_ITEMS.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                onClick={closeMenu}
                className="font-display text-3xl font-bold text-ink-soft
                           hover:text-accent transition-colors duration-150"
                style={{ letterSpacing: "-0.02em" }}
              >
                {t(key)}
              </a>
            ))}
          </nav>
          <div className="mt-4">
            <LanguageToggle />
          </div>
        </div>
      )}
    </>
  );
}
