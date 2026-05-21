import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ToolCard } from "@/components/ToolCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { tools } from "@/data/tools";

export const Route = createFileRoute("/best/portfolio-website-builders-for-ux-designers")({
  head: () => ({
    meta: [
      { title: "Best Portfolio Website Builders for UX Designers — UXGoal" },
      {
        name: "description",
        content:
          "A practical guide to portfolio website builders for UX and product designers — Framer, Webflow, Notion, Read.cv, and AI-assisted site tools.",
      },
      { property: "og:title", content: "Best Portfolio Website Builders for UX Designers — UXGoal" },
      {
        property: "og:description",
        content:
          "Choose the right portfolio builder for UX case studies, personal positioning, and AI-era designer credibility.",
      },
      { property: "og:url", content: "https://uxgoal.com/best/portfolio-website-builders-for-ux-designers" },
    ],
    links: [{ rel: "canonical", href: "https://uxgoal.com/best/portfolio-website-builders-for-ux-designers" }],
  }),
  component: PortfolioBuildersPage,
});

const toolIds = ["framer-ai", "webflow", "readcv", "notion", "relume", "lovable"];
const picks = toolIds.map((id) => tools.find((tool) => tool.id === id)).filter(Boolean);

const criteria = [
  "Can you publish polished case studies without fighting the tool?",
  "Can you control SEO, page structure, and visual polish enough to look credible?",
  "Can you show process artefacts: prompts, decisions, iterations, and product outcomes?",
  "Can you maintain it quickly when your work changes?",
];

function PortfolioBuildersPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="hero-glow pb-12 pt-24 md:pt-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Badge className="mb-4 gap-1 border border-accent/30 bg-accent/10 text-accent hover:bg-accent/10">
            <Sparkles className="h-3 w-3" />
            Portfolio builders
          </Badge>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Best portfolio website builders for UX designers
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A practical shortlist for designers who need a credible portfolio, stronger case studies, and a faster way to publish AI-era design work.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <Link to="/skills">
                Assess your UX skills
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/" hash="prompts">Use portfolio prompts</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Shortlist</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">Pick based on how you want to show your work</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Framer is the fastest polished option, Webflow has the most production depth, and simpler tools can still work if your case-study thinking is strong.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {picks.map((tool) => tool && <ToolCard key={tool.id} tool={tool} />)}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="rounded-2xl border border-border/60 bg-card p-6 md:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Portfolio builder criteria</h2>
          <div className="mt-5 grid gap-3">
            {criteria.map((item) => (
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
