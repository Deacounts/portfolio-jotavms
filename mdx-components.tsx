import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1
        className="font-display font-bold text-3xl text-ink mb-6 mt-10"
        style={{ letterSpacing: "-0.02em" }}
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="font-display font-semibold text-2xl text-ink mb-4 mt-8"
        style={{ letterSpacing: "-0.02em" }}
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="font-display font-semibold text-xl text-ink mb-3 mt-6"
        {...props}
      />
    ),
    p: (props) => (
      <p className="text-ink-soft text-base leading-relaxed mb-4" {...props} />
    ),
    a: (props) => (
      <a
        className="text-accent hover:underline focus-visible:ring-1 focus-visible:ring-accent"
        {...props}
      />
    ),
    code: (props) => (
      <code
        className="font-mono text-sm bg-bg-elevated text-accent px-1.5 py-0.5 rounded"
        {...props}
      />
    ),
    pre: (props) => (
      <pre
        className="font-mono text-sm bg-bg-elevated border border-line rounded-md p-4 overflow-x-auto my-6"
        {...props}
      />
    ),
    ul: (props) => (
      <ul className="space-y-2 list-none mb-4" {...props} />
    ),
    li: (props) => (
      <li className="flex items-start gap-2 text-ink-soft text-base leading-relaxed">
        <span className="text-accent mt-1.5 shrink-0 w-1 h-1 rounded-full bg-accent block" />
        <span {...props} />
      </li>
    ),
    blockquote: (props) => (
      <blockquote
        className="border-l-2 border-accent pl-4 my-6 text-ink-soft italic"
        {...props}
      />
    ),
    ...components,
  };
}
