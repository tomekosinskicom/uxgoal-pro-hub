import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { StageFilter } from "@/components/StageFilter";
import { ToolCard } from "@/components/ToolCard";
import { DesignerPrompts } from "@/components/DesignerPrompts";
import { SiteFooter } from "@/components/SiteFooter";
import { SeoSections } from "@/components/SeoSections";
import { PromoteSection } from "@/components/PromoteSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ChangelogSection } from "@/components/ChangelogSection";
import { CuratedBy } from "@/components/CuratedBy";
import { tools, type Stage } from "@/data/tools";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Best AI Tools for UX Designers in 2026 — UXGoal" },
      { name: "description", content: "The curated directory of AI tools, prompts, and skills every UX and product designer needs in 2026. Free, no signup — updated weekly." },
      { name: "keywords", content: "AI tools for UX designers, AI design tools, UX tools 2026, AI prototyping tools, product design AI, designer AI prompts, UX skill roadmap" },
      { property: "og:title", content: "Best AI Tools for UX Designers in 2026" },
      { property: "og:description", content: "A curated directory of AI tools, prompts, and a skill roadmap for UX and product designers." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://uxgoal.com/" },
      { name: "twitter:title", content: "Best AI Tools for UX Designers in 2026" },
      { name: "twitter:description", content: "Curated AI tools, prompts, and skills for UX designers." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [filter, setFilter] = useState<Stage | "All">("All");
  const [aiOnly, setAiOnly] = useState(false);

  const filtered = tools
    .filter((t) => (filter === "All" ? true : t.stage === filter))
    .filter((t) => (aiOnly ? t.aiNative : true));
  const sorted = [...filtered].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));

  return (
      <div className="min-h-screen pb-24">
        <SiteHeader />
        <HeroSection />

        <RoadmapSection />

        <DesignerPrompts />

        <section id="directory" className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Browse Tools</h2>
              <p className="mt-1 text-sm text-muted-foreground">Tick the "Compare" box on 2–4 tools to see them side-by-side.</p>
            </div>
            <StageFilter
              selected={filter}
              onSelect={setFilter}
              aiOnly={aiOnly}
              onToggleAiOnly={() => setAiOnly((v) => !v)}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>

        <ChangelogSection />

        <TestimonialsSection />

        <SeoSections />

        <PromoteSection />

        <CuratedBy />

        <NewsletterSection />

        <SiteFooter />
      </div>
  );
}
