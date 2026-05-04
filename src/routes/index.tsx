import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ToolCard } from "@/components/ToolCard";
import { ExpertStacks } from "@/components/ExpertStacks";
import { SiteFooter } from "@/components/SiteFooter";
import { FindMyStackQuiz } from "@/components/FindMyStackQuiz";
import { SeoSections } from "@/components/SeoSections";
import { PromoteSection } from "@/components/PromoteSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { tools, type Category } from "@/data/tools";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UXGoal — Find the Right UX Tools for Your Next Goal" },
      { name: "description", content: "Curated UX tools, expert stacks, and recommendations for designers, researchers, freelancers, and career switchers. Find the right tools for your goal." },
      { property: "og:title", content: "UXGoal — Find the Right UX Tools for Your Next Goal" },
      { property: "og:description", content: "Curated UX tools, expert stacks, and recommendations for designers, researchers, freelancers, and career switchers." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [filter, setFilter] = useState<Category | "All">("All");

  const filtered = filter === "All" ? tools : tools.filter((t) => t.category === filter);
  const sorted = [...filtered].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));

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
          {sorted.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      <FindMyStackQuiz />

      <SeoSections />

      <ExpertStacks />

      <PromoteSection />

      <NewsletterSection />

      <SiteFooter />
    </div>
  );
}
