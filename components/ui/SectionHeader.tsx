import { type ReactNode } from "react";

interface SectionHeaderProps {
  label: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? "text-center" : ""}`}>
      <p
        className={`font-mono text-xs uppercase tracking-widest text-accent mb-3 ${isCenter ? "justify-center flex" : ""}`}
      >
        {label}
      </p>
      <h2
        className={`font-display text-3xl md:text-4xl font-bold text-ink leading-tight mb-4 ${isCenter ? "" : ""}`}
        style={{ letterSpacing: "-0.02em" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-ink-soft text-base md:text-lg leading-relaxed max-w-2xl ${isCenter ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-5 h-px bg-line relative ${isCenter ? "mx-auto max-w-xs" : "max-w-xs"}`}
      >
        <span className="absolute left-0 top-0 h-px w-12 bg-accent block" />
      </div>
    </div>
  );
}
