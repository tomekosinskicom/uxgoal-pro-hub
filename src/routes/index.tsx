import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ToolCard } from "@/components/ToolCard";
import { ExpertStacks } from "@/components/ExpertStacks";
import { SiteFooter } from "@/components/SiteFooter";
import { tools, type Category } from "@/data/tools";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UXGoal — Tools to Reach Your UX Goals" },
      { name: "description", content: "A curated directory of the best tools for UX research, prototyping, productivity, and career growth — reviewed by experts." },
      { property: "og:title", content: "UXGoal — Tools to Reach Your UX Goals" },
      { property: "og:description", content: "A curated directory of the best tools for UX research, prototyping, productivity, and career growth." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [filter, setFilter] = useState<Category | "All">("All");

  const filtered = filter === "All" ? tools : tools.filter((t) => t.category === filter);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <HeroSection />

      <section id="directory" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Browse Tools
          </h2>
          <CategoryFilter selected={filter} onSelect={setFilter} />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      <div className="border-t border-border/50" />

      <ExpertStacks />
      <SiteFooter />
    </div>
  );
}
