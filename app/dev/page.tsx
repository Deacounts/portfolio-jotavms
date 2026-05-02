import { DotGrid } from "@/components/ui/DotGrid";
import { Tag } from "@/components/ui/Tag";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TerminalBlock } from "@/components/ui/TerminalBlock";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ProjectCard } from "@/components/ui/ProjectCard";

export default function DevPage() {
  return (
    <div className="relative min-h-screen bg-bg text-ink p-8 space-y-16">
      <DotGrid />

      <div className="relative z-10 max-w-4xl mx-auto space-y-16">
        <h1 className="font-display text-2xl font-bold text-accent">
          // Design System Preview
        </h1>

        {/* Tags */}
        <section>
          <h2 className="font-mono text-xs uppercase tracking-wider text-ink-mute mb-4">Tags</h2>
          <div className="flex flex-wrap gap-3">
            <Tag>Default</Tag>
            <Tag variant="accent">Accent</Tag>
            <Tag variant="muted">Muted</Tag>
            <Tag>HTML</Tag>
            <Tag>Chart.js</Tag>
            <Tag>Power BI</Tag>
          </div>
        </section>

        {/* SectionHeader */}
        <section>
          <h2 className="font-mono text-xs uppercase tracking-wider text-ink-mute mb-6">
            Section Header
          </h2>
          <SectionHeader
            label="// PROVA DE TRABALHO"
            title="Projetos"
            subtitle="Quatro projetos construídos com dados reais. Cada um começou com uma pergunta."
          />
        </section>

        {/* TerminalBlock */}
        <section>
          <h2 className="font-mono text-xs uppercase tracking-wider text-ink-mute mb-6">
            Terminal Block
          </h2>
          <TerminalBlock
            lines={[
              { prompt: "whoami", value: "João Vitor Matos · Campinas, BR" },
              { prompt: "stack", value: "Excel · Power BI · Chart.js · IA" },
              { prompt: "status", value: "aprendendo, construindo, publicando" },
            ]}
          />
        </section>

        {/* AnimatedSection */}
        <AnimatedSection>
          <div className="border border-line rounded p-6 bg-bg-elevated">
            <p className="font-mono text-xs text-accent mb-2">// AnimatedSection (fade in on scroll)</p>
            <p className="text-ink-soft">Este bloco entra com fade + slide quando entra no viewport.</p>
          </div>
        </AnimatedSection>

        {/* ProjectCard */}
        <section>
          <h2 className="font-mono text-xs uppercase tracking-wider text-ink-mute mb-6">
            Project Card
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              slug="financeiro"
              title="Análise Financeira"
              subtitle="DRE Pessoal"
              tagline="Demonstrativo de resultados, mas pessoal"
              stackTags={["HTML", "CSS", "Chart.js"]}
              screenshotSrc="/images/projects/financeiro.png"
              cta="Abrir case →"
              locale="pt"
            />
            <ProjectCard
              slug="ibovespa"
              title="Mercado Brasileiro"
              subtitle="B3 · Ibovespa 2024"
              tagline="Como o índice se comportou em 2024"
              stackTags={["HTML", "CSS", "Chart.js"]}
              screenshotSrc="/images/projects/ibovespa.png"
              cta="Abrir case →"
              locale="pt"
            />
          </div>
        </section>

        {/* Typography scale */}
        <section>
          <h2 className="font-mono text-xs uppercase tracking-wider text-ink-mute mb-6">
            Typography
          </h2>
          <div className="space-y-4 border border-line rounded p-6 bg-bg-elevated">
            <p
              className="font-display text-7xl font-bold text-ink"
              style={{ letterSpacing: "-0.02em" }}
            >
              H1 Hero
            </p>
            <p
              className="font-display text-4xl font-bold text-ink"
              style={{ letterSpacing: "-0.02em" }}
            >
              H2 Seção
            </p>
            <p className="font-display text-2xl font-semibold text-ink">H3 Título</p>
            <p className="font-body text-base text-ink-soft leading-relaxed">
              Body text — Inter 400. Analista de dados em construção, transformando perguntas em
              visualizações que ajudam a decidir.
            </p>
            <p className="font-mono text-sm text-accent uppercase tracking-widest">
              // Mono label
            </p>
          </div>
        </section>

        {/* Color palette */}
        <section>
          <h2 className="font-mono text-xs uppercase tracking-wider text-ink-mute mb-6">
            Palette
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {[
              { name: "bg", value: "#0a0e14" },
              { name: "bg-elevated", value: "#0f1419" },
              { name: "bg-soft", value: "#131820" },
              { name: "ink", value: "#e6e9ef" },
              { name: "ink-soft", value: "#b3bccc" },
              { name: "ink-mute", value: "#8b95a7" },
              { name: "line", value: "#1f2632" },
              { name: "accent", value: "#00b4a6" },
              { name: "accent-soft", value: "#1a2e2c" },
              { name: "warn", value: "#f59e0b" },
              { name: "error", value: "#ef4444" },
            ].map((color) => (
              <div key={color.name} className="space-y-2">
                <div
                  className="h-12 rounded border border-line"
                  style={{ backgroundColor: color.value }}
                />
                <p className="font-mono text-xs text-ink-mute">{color.name}</p>
                <p className="font-mono text-xs text-ink-mute opacity-60">{color.value}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
