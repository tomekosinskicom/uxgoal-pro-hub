import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ToolCard } from "@/components/ToolCard";
import { tools } from "@/data/tools";

export const Route = createFileRoute("/best/ai-tools-for-ux-designers")({
  head: () => ({
    meta: [
      { title: "Best AI Tools for UX Designers — UXGoal" },
      {
        name: "description",
        content:
          "A practical, opinionated guide to the best AI tools for UX and product designers — research, UI generation, prototyping, synthesis, and shipping.",
      },
      { property: "og:title", content: "Best AI Tools for UX Designers — UXGoal" },
      {
        property: "og:description",
        content:
          "A curated AI-era toolkit for UX/product designers who want to research faster, prototype better, and ship more credible work.",
      },
    ],
  }),
  component: BestAiToolsPage,
});

const categories = [
  {
    title: "Best for prompt-to-UI prototyping",
    toolIds: ["v0", "figma-make", "galileo"],
    verdict: "Use these when you need to move from vague idea to testable interface quickly.",
  },
  {
    title: "Best for research, synthesis, and thinking",
    toolIds: ["chatgpt", "dovetail", "perplexity"],
    verdict: "Use these to turn messy inputs into themes, hypotheses, and better product questions.",
  },
  {
    title: "Best for designers who want to ship",
    toolIds: ["cursor", "framer-ai", "relume"],
    verdict: "Use these when a static mockup is not enough and you need a working prototype or landing page.",
  },
];

const playbook = [
  "Start with the job-to-be-done, not the tool category.",
  "Use AI for first drafts, synthesis, and exploration — keep judgement and taste human-led.",
  "Prefer tools that produce artefacts you can edit, test, or ship.",
  "Build one repeatable workflow before adding another subscription.",
];

function byId(id: string) {
  return tools.find((tool) => tool.id === id);
}

function BestAiToolsPage() {
  const featured = ["cursor", "v0", "figma-make", "chatgpt", "relume", "framer-ai"]
    .map(byId)
    .filter(Boolean);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="hero-glow pb-12 pt-24 md:pt-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Badge className="mb-4 gap-1 border border-accent/30 bg-accent/10 text-accent hover:bg-accent/10">
            <Sparkles className="h-3 w-3" />
            AI-era UX toolkit
          </Badge>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Best AI tools for UX designers
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            An opinionated shortlist for product designers who want to research faster, generate better options, prototype with AI, and build skills that still matter when tools get smarter.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <Link to="/ai-readiness">
                Check your AI readiness
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/" hash="directory">Browse all tools</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Quick picks</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">The shortlist</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            These are the tools worth testing first if you're a UX/product designer trying to build a practical AI workflow rather than collect shiny apps.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((tool) => tool && <ToolCard key={tool.id} tool={tool} />)}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-2xl border border-border/60 bg-card p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">UXGoal verdict</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">Don't become a tool collector.</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The winning designer is not the one with the longest AI stack. It's the one who can use AI to make clearer decisions, test more options, and communicate product tradeoffs faster.
              </p>
            </div>
            <div className="grid gap-3">
              {playbook.map((item) => (
                <div key={item} className="flex gap-3 rounded-xl border border-border/50 bg-surface p-3 text-sm text-surface-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">By workflow</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">Choose by the UX job you need done</h2>
        </div>
        <div className="space-y-8">
          {categories.map((category) => {
            const categoryTools = category.toolIds.map(byId).filter(Boolean);
            return (
              <div key={category.title} className="rounded-2xl border border-border/60 bg-card p-5 md:p-6">
                <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{category.verdict}</p>
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryTools.map((tool) => tool && <ToolCard key={tool.id} tool={tool} />)}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">FAQ</h2>
        <div className="mt-6 divide-y divide-border/60 rounded-2xl border border-border/60 bg-card">
          {[
            ["Should junior UX designers use AI tools?", "Yes — but not as a replacement for fundamentals. Use AI to produce more drafts, ask better questions, and learn faster. Still practise research, interaction design, product thinking, and critique."],
            ["What is the best first AI tool for UX?", "Start with one general thinking tool such as ChatGPT plus one output tool such as Figma Make, v0, or Cursor depending on whether you design, prototype, or code."],
            ["Are AI-generated designs portfolio-worthy?", "Only if you show the judgement behind them: brief, constraints, iterations, tradeoffs, validation, and what you changed. Raw AI output is not a case study."],
          ].map(([q, a]) => (
            <div key={q} className="p-5">
              <h3 className="font-semibold text-foreground">{q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <NewsletterSection
        source="best-ai-tools-for-ux-designers"
        title="Get the AI UX toolkit"
        description="A practical email pack with tool picks, UX prompts, and workflows for product designers adapting to AI."
      />

      <SiteFooter />
    </div>
  );
}
