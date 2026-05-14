import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ToolCard } from "@/components/ToolCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { tools } from "@/data/tools";

export const Route = createFileRoute("/best/ai-prototyping-tools-for-ux-designers")({
  head: () => ({
    meta: [
      { title: "Best AI Prototyping Tools for UX Designers — UXGoal" },
      {
        name: "description",
        content:
          "An opinionated shortlist of AI prototyping tools for UX and product designers who want to move from idea to working prototype faster.",
      },
      { property: "og:title", content: "Best AI Prototyping Tools for UX Designers — UXGoal" },
      {
        property: "og:description",
        content:
          "Tools and workflows for prompt-to-UI, designer-led prototypes, and AI-assisted product experiments.",
      },
    ],
  }),
  component: BestAiPrototypingPage,
});

const toolIds = ["v0", "figma-make", "cursor", "lovable", "bolt", "framer-ai", "uizard", "galileo"];
const picks = toolIds.map((id) => tools.find((tool) => tool.id === id)).filter(Boolean);

const principles = [
  "Start with a clear product job, not a vague prompt.",
  "Prefer tools that create something you can test, edit, or ship.",
  "Keep human judgement visible: constraints, tradeoffs, accessibility, and edge cases.",
  "Turn the workflow into a case-study artefact, not just a faster mockup.",
];

function BestAiPrototypingPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="hero-glow pb-12 pt-24 md:pt-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Badge className="mb-4 gap-1 border border-accent/30 bg-accent/10 text-accent hover:bg-accent/10">
            <Sparkles className="h-3 w-3" />
            AI prototyping workflow
          </Badge>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Best AI prototyping tools for UX designers
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A practical shortlist for designers who want to move from product idea to testable interface, clickable prototype, or working app without waiting on a full engineering cycle.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <Link to="/ai-readiness">
                Check your AI readiness
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/" hash="prompts">Browse prompts</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Shortlist</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">Tools worth testing first</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            These tools map well to real UX jobs: generate UI options, build coded prototypes, explore product ideas, or ship portfolio-quality demos.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {picks.map((tool) => tool && <ToolCard key={tool.id} tool={tool} />)}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="rounded-2xl border border-border/60 bg-card p-6 md:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">How to choose</h2>
          <div className="mt-5 grid gap-3">
            {principles.map((item) => (
              <div key={item} className="flex gap-3 rounded-xl border border-border/50 bg-surface p-3 text-sm text-surface-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
