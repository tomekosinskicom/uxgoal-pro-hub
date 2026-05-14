import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    title: "Score your current workflow",
    copy: "Start with the AI readiness check or UX skill assessment so the site feels like a roadmap, not a random directory.",
  },
  {
    title: "Pick one workflow to upgrade",
    copy: "Choose a practical job: research synthesis, prompt-to-UI prototyping, portfolio writing, usability testing, or shipping a small site.",
  },
  {
    title: "Use tools with a clear output",
    copy: "Every recommendation should help you create something visible: a prototype, case study, prompt library, research summary, or shipped page.",
  },
];

export function RoadmapSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Card className="border-border/60 bg-card">
        <CardContent className="grid gap-8 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-8">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              <Sparkles className="h-3.5 w-3.5" />
              AI-era UX roadmap
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Don&apos;t collect tools. Build a stronger design workflow.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              UXGoal is being shaped around a simple path: diagnose where you are, choose the skill gap that matters, then use the right AI tools and prompts to produce better design artefacts.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="gap-2">
                <Link to="/ai-readiness">
                  Start AI readiness check
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/skills">Assess UX skills</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-3">
            {steps.map((step) => (
              <div key={step.title} className="flex gap-3 rounded-xl border border-border/50 bg-surface p-4">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
