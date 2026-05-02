"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function switchLocale(next: string) {
    if (next === locale) return;

    // Replace the locale prefix in the current path
    const segments = pathname.split("/");
    segments[1] = next;
    const newPath = segments.join("/");

    document.cookie = `NEXT_LOCALE=${next};path=/;max-age=31536000`;

    startTransition(() => {
      router.push(newPath);
    });
  }

  return (
    <div
      className="flex items-center gap-1 font-mono text-xs uppercase tracking-widest"
      role="group"
      aria-label="Selecionar idioma"
    >
      <button
        onClick={() => switchLocale("pt")}
        disabled={isPending}
        aria-pressed={locale === "pt"}
        className={`px-1.5 py-0.5 rounded transition-colors duration-150 ${
          locale === "pt"
            ? "text-accent"
            : "text-ink-mute hover:text-ink-soft"
        }`}
      >
        PT
      </button>
      <span className="text-line select-none">|</span>
      <button
        onClick={() => switchLocale("en")}
        disabled={isPending}
        aria-pressed={locale === "en"}
        className={`px-1.5 py-0.5 rounded transition-colors duration-150 ${
          locale === "en"
            ? "text-accent"
            : "text-ink-mute hover:text-ink-soft"
        }`}
      >
        EN
      </button>
    </div>
  );
}
