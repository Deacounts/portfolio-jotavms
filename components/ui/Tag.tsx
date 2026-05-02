import { type ReactNode } from "react";

type TagVariant = "default" | "accent" | "muted";

interface TagProps {
  children: ReactNode;
  variant?: TagVariant;
  className?: string;
}

const variantClasses: Record<TagVariant, string> = {
  default:
    "border-line text-ink-mute hover:border-accent hover:text-accent",
  accent:
    "border-accent text-accent bg-accent-soft",
  muted:
    "border-line text-ink-mute opacity-70",
};

export function Tag({ children, variant = "default", className = "" }: TagProps) {
  return (
    <span
      className={`
        inline-block border rounded px-2.5 py-1
        font-mono text-xs uppercase tracking-wider
        transition-colors duration-200
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
