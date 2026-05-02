"use client";

import Image from "next/image";
import Link from "next/link";
import { Tag } from "./Tag";

interface ProjectCardProps {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  stackTags: string[];
  screenshotSrc: string;
  cta: string;
  locale: string;
}

export function ProjectCard({
  slug,
  title,
  subtitle,
  tagline,
  stackTags,
  screenshotSrc,
  cta,
  locale,
}: ProjectCardProps) {
  return (
    <Link
      href={`/${locale}/projetos/${slug}`}
      className="group block rounded-md border border-line bg-bg-elevated overflow-hidden
                 transition-all duration-300 ease-out
                 hover:border-accent/60 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,180,166,0.12)]
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label={`${title} — ${tagline}`}
    >
      {/* Screenshot */}
      <div className="relative aspect-video overflow-hidden bg-bg-soft">
        <Image
          src={screenshotSrc}
          alt={`Screenshot do dashboard ${title}`}
          fill
          className="object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-bg/40 transition-opacity duration-300 group-hover:opacity-0" />
        {/* Caption que desliza no hover */}
        <div
          className="absolute bottom-3 right-3 font-mono text-xs text-accent
                     translate-x-2 opacity-0 transition-all duration-300
                     group-hover:translate-x-0 group-hover:opacity-100"
          aria-hidden="true"
        >
          {cta}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <h3 className="font-display text-lg font-semibold text-ink leading-snug">
              {title}
            </h3>
            <p className="font-mono text-xs text-accent mt-0.5">{subtitle}</p>
          </div>
        </div>
        <p className="text-ink-soft text-sm leading-relaxed mb-4">{tagline}</p>
        <div className="flex flex-wrap gap-1.5">
          {stackTags.map((tag) => (
            <Tag key={tag} variant="muted">
              {tag}
            </Tag>
          ))}
        </div>
      </div>
    </Link>
  );
}
