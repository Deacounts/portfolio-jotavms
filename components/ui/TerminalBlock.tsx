import { type ReactNode } from "react";

interface TerminalLine {
  prompt: string;
  value: string | ReactNode;
}

interface TerminalBlockProps {
  title?: string;
  lines: TerminalLine[];
  className?: string;
}

export function TerminalBlock({ title = "~/jotavms", lines, className = "" }: TerminalBlockProps) {
  return (
    <div
      className={`rounded-md border border-accent/40 bg-bg-elevated overflow-hidden font-mono text-sm ${className}`}
    >
      {/* Window bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-bg-soft">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" aria-hidden="true" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" aria-hidden="true" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" aria-hidden="true" />
        <span className="ml-3 text-ink-mute text-xs truncate">{title}</span>
      </div>

      {/* Lines */}
      <div className="p-5 space-y-2">
        {lines.map((line, i) => (
          <div key={i}>
            <div className="flex items-start gap-2">
              <span className="text-accent select-none shrink-0">$</span>
              <span className="text-ink-soft">{line.prompt}</span>
            </div>
            <div className="flex items-start gap-2 mt-0.5">
              <span className="text-accent/60 select-none shrink-0">&gt;</span>
              <span className="text-ink">{line.value}</span>
            </div>
          </div>
        ))}

        {/* Blinking cursor */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-accent select-none">$</span>
          <span
            className="cursor-blink inline-block w-2 h-4 bg-accent align-middle"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
