"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ExternalLink, Monitor } from "lucide-react";

interface DashboardEmbedProps {
  src: string;
  title: string;
  externalHref: string;
}

export function DashboardEmbed({ src, title, externalHref }: DashboardEmbedProps) {
  const t = useTranslations("projects");
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="rounded-md overflow-hidden border border-accent/40">
      {/* Browser-tab header */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-bg-soft border-b border-line">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" aria-hidden="true" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" aria-hidden="true" />
        <div className="flex-1 mx-3 bg-bg-elevated rounded px-3 py-1 flex items-center gap-2">
          <Monitor size={10} className="text-ink-mute" aria-hidden="true" />
          <span className="font-mono text-xs text-ink-mute truncate">{title}</span>
        </div>
        <a
          href={externalHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink-mute hover:text-accent transition-colors"
          aria-label={t("common_open_new_tab" as never) ?? "Abrir em nova aba"}
        >
          <ExternalLink size={12} />
        </a>
      </div>

      {/* Iframe container */}
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        {/* Skeleton */}
        {!loaded && (
          <div
            className="absolute inset-0 bg-bg-soft flex flex-col items-center justify-center gap-3"
            aria-label="Carregando dashboard..."
            role="status"
          >
            <div className="w-8 h-8 border-2 border-line border-t-accent rounded-full animate-spin" />
            <p className="font-mono text-xs text-ink-mute">
              {t("common_loading" as never) ?? "Carregando..."}
            </p>
          </div>
        )}

        <iframe
          src={src}
          title={title}
          loading="lazy"
          className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setLoaded(true)}
          sandbox="allow-scripts allow-same-origin"
        />
      </div>

      {/* Fallback link */}
      <div className="px-4 py-2 bg-bg-soft border-t border-line text-center">
        <p className="font-mono text-xs text-ink-mute">
          {t("dashboard_fallback")}{" "}
          <a
            href={externalHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            {t("dashboard_fallback_link")}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
