import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, RotateCcw, Sparkles } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "UX Skill Assessment — UXGoal" },
      {
        name: "description",
        content:
          "A practical UX skill assessment for product designers. Score your research, product thinking, UI craft, facilitation, design systems, and AI workflow literacy.",
      },
      { property: "og:title", content: "UX Skill Assessment — UXGoal" },
      {
        property: "og:description",
        content:
          "Find your strongest UX skills, spot the gaps, and get a focused next-step roadmap for the AI era.",
      },
    ],
  }),
  component: SkillsPage,
});

type SkillId =
  | "research"
  | "product"
  | "interaction"
  | "ui"
  | "systems"
  | "facilitation"
  | "data"
  | "ai";

interface SkillArea {
  id: SkillId;
  label: string;
  short: string;
  prompt: string;
  options: { label: string; score: number }[];
  nextStep: string;
}

const skillAreas: SkillArea[] = [
  {
    id: "research",
    label: "Research",
    short: "Can you turn user evidence into decisions?",
    prompt: "When a team needs user insight, what can you confidently run yourself?",
    options: [
      { label: "I mostly rely on other people to plan and run research", score: 1 },
      { label: "I can support interviews or usability tests with guidance", score: 2 },
      { label: "I can plan, run, synthesize, and present a focused study", score: 3 },
      { label: "I can shape research strategy and influence product direction", score: 4 },
    ],
    nextStep: "Run one small study end-to-end and publish the decision it changed.",
  },
  {
    id: "product",
    label: "Product thinking",
    short: "Can you connect design choices to business and user outcomes?",
    prompt: "How do you usually frame design work?",
    options: [
      { label: "As screens or UI tasks", score: 1 },
      { label: "As user problems with some product context", score: 2 },
      { label: "As hypotheses, constraints, tradeoffs, and outcomes", score: 3 },
      { label: "As product strategy: opportunity, risk, metric, and sequencing", score: 4 },
    ],
    nextStep: "Rewrite one case study around the product decision, not the interface deliverables.",
  },
  {
    id: "interaction",
    label: "Interaction design",
    short: "Can you make flows simple, resilient, and understandable?",
    prompt: "How strong are your flows before they become polished UI?",
    options: [
      { label: "I jump into visual design early", score: 1 },
      { label: "I map happy paths but edge cases are light", score: 2 },
      { label: "I design states, errors, empty states, and key edge cases", score: 3 },
      { label: "I can simplify complex systems into clear interaction models", score: 4 },
    ],
    nextStep: "Take one product flow and document states, edge cases, and recovery paths.",
  },
  {
    id: "ui",
    label: "UI craft",
    short: "Can you produce interfaces that feel credible and intentional?",
    prompt: "How would you describe your visual/UI execution?",
    options: [
      { label: "Functional, but inconsistent", score: 1 },
      { label: "Clean enough, usually based on references", score: 2 },
      { label: "Consistent, accessible, responsive, and production-aware", score: 3 },
      { label: "High-craft, systematic, and adaptable across brands/platforms", score: 4 },
    ],
    nextStep: "Redesign one old screen with a tighter spacing/type/color system and compare before/after.",
  },
  {
    id: "systems",
    label: "Design systems",
    short: "Can you work beyond single screens?",
    prompt: "How comfortable are you with design systems?",
    options: [
      { label: "I mainly consume existing components", score: 1 },
      { label: "I can use variants and follow documentation", score: 2 },
      { label: "I can design reusable components with states and guidance", score: 3 },
      { label: "I can shape system architecture, governance, and adoption", score: 4 },
    ],
    nextStep: "Create one component spec with anatomy, variants, usage rules, and accessibility notes.",
  },
  {
    id: "facilitation",
    label: "Facilitation",
    short: "Can you move groups from ambiguity to alignment?",
    prompt: "What happens when a workshop or critique needs structure?",
    options: [
      { label: "I mostly participate", score: 1 },
      { label: "I can run simple feedback sessions", score: 2 },
      { label: "I can facilitate discovery, critique, and prioritisation", score: 3 },
      { label: "I can handle messy stakeholder rooms and drive decisions", score: 4 },
    ],
    nextStep: "Prepare a 45-minute decision workshop with inputs, activities, and a clear output.",
  },
  {
    id: "data",
    label: "Data & experimentation",
    short: "Can you use evidence after launch?",
    prompt: "How do metrics and experiments show up in your process?",
    options: [
      { label: "Rarely — I mainly rely on qualitative feedback", score: 1 },
      { label: "I can read basic analytics when someone shares them", score: 2 },
      { label: "I define success metrics and use data to refine designs", score: 3 },
      { label: "I design experiments and connect behaviour data to roadmap decisions", score: 4 },
    ],
    nextStep: "Add success metrics and a validation plan to one current design problem.",
  },
  {
    id: "ai",
    label: "AI workflow literacy",
    short: "Can you use AI to increase quality, not just speed?",
    prompt: "How embedded is AI in your design workflow?",
    options: [
      { label: "I barely use it", score: 1 },
      { label: "I use it for brainstorming, copy, or summaries", score: 2 },
      { label: "I use AI for research synthesis, prototyping, critique, or code", score: 3 },
      { label: "I have repeatable AI workflows that produce portfolio-grade outputs", score: 4 },
    ],
    nextStep: "Build one repeatable AI workflow and document prompts, inputs, outputs, and judgement calls.",
  },
];

function levelFor(score: number) {
  if (score < 38) return { label: "Foundation builder", copy: "You have useful pieces, but your next growth comes from making the basics repeatable and visible." };
  if (score < 68) return { label: "Growing product designer", copy: "You can contribute across the product process. Now sharpen the weakest two skills and show stronger decision-making." };
  if (score < 86) return { label: "Senior-track designer", copy: "You are operating beyond screens. Your next edge is stronger evidence, sharper facilitation, and clearer strategic artefacts." };
  return { label: "AI-era design lead", copy: "You have a broad, modern skill profile. Focus on publishing your process and turning judgement into reusable systems." };
}

function SkillsPage() {
  const [answers, setAnswers] = useState<Record<SkillId, number>>({} as Record<SkillId, number>);
  const answered = Object.keys(answers).length;
  const complete = answered === skillAreas.length;

  const score = useMemo(() => {
    const raw = Object.values(answers).reduce((sum, value) => sum + value, 0);
    return Math.round((raw / (skillAreas.length * 4)) * 100);
  }, [answers]);

  const weakest = useMemo(() => {
    return skillAreas
      .filter((area) => answers[area.id])
      .sort((a, b) => answers[a.id] - answers[b.id])
      .slice(0, 2);
  }, [answers]);

  const level = levelFor(score);

  const setAnswer = (id: SkillId, value: number) => {
    setAnswers((current) => ({ ...current, [id]: value }));
  };

  const reset = () => setAnswers({} as Record<SkillId, number>);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="hero-glow pb-10 pt-24 md:pt-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Badge className="mb-4 gap-1 border border-accent/30 bg-accent/10 text-accent hover:bg-accent/10">
            <Sparkles className="h-3 w-3" />
            UX skill roadmap
          </Badge>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            UX skill assessment for product designers
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Score the skills that actually matter: research, product thinking, interaction design, UI craft, systems, facilitation, data, and AI workflow literacy.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <a href="#assessment">
                Start assessment
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/ai-readiness">Try AI readiness check</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="assessment" className="mx-auto grid max-w-6xl gap-6 px-6 py-14 lg:grid-cols-[1fr_360px]">
        <div className="space-y-5">
          {skillAreas.map((area, index) => (
            <Card key={area.id} className="border-border/60 bg-card">
              <CardContent className="p-5 md:p-6">
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-semibold text-accent">
                    {index + 1}
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">{area.label}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">{area.short}</p>
                  </div>
                </div>

                <p className="mb-3 text-sm font-medium text-foreground">{area.prompt}</p>
                <div className="grid gap-2">
                  {area.options.map((option) => {
                    const selected = answers[area.id] === option.score;
                    return (
                      <button
                        key={option.label}
                        onClick={() => setAnswer(area.id, option.score)}
                        className={`rounded-xl border px-4 py-3 text-left text-sm transition-colors ${
                          selected
                            ? "border-accent bg-accent/10 text-foreground"
                            : "border-border bg-surface text-surface-foreground hover:bg-surface-hover"
                        }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <Card className="border-border/60 bg-card">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Your score</p>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-foreground">{score || 0}</span>
                    <span className="text-sm text-muted-foreground">/ 100</span>
                  </div>
                </div>
                {answered > 0 && (
                  <Button variant="ghost" size="sm" onClick={reset} className="gap-1.5">
                    <RotateCcw className="h-3.5 w-3.5" />
                    Reset
                  </Button>
                )}
              </div>

              <Progress value={Math.round((answered / skillAreas.length) * 100)} className="h-1.5" />
              <p className="mt-2 text-xs text-muted-foreground">{answered} of {skillAreas.length} areas scored</p>

              <div className="mt-6 rounded-2xl border border-border/60 bg-surface p-4">
                <h3 className="font-semibold text-foreground">{answered ? level.label : "Start scoring"}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {answered ? level.copy : "Answer each skill area to generate a focused UX growth roadmap."}
                </p>
              </div>

              {complete && (
                <div className="mt-6 space-y-3">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Focus next</h3>
                  {weakest.map((area) => (
                    <div key={area.id} className="rounded-xl border border-border/60 bg-background p-3">
                      <div className="flex items-center gap-2 font-medium text-foreground">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                        {area.label}
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{area.nextStep}</p>
                    </div>
                  ))}
                  <Button asChild className="w-full gap-2">
                    <Link to="/learn">
                      Get the skill roadmap
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </aside>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="rounded-2xl border border-border/60 bg-card p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Why this matters</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">UX careers are becoming skill portfolios.</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Hiring managers do not just want polished screens. They want evidence that you can understand users, frame product problems, make tradeoffs, collaborate with teams, use data, and adapt to AI-assisted workflows. This assessment gives designers a clearer language for those strengths and gaps.
          </p>
        </div>
      </section>

      <NewsletterSection
        source="ux-skill-assessment"
        title="Get the UX skill roadmap"
        description="Join the UXGoal list for practical prompts, templates, and learning paths for product designers building AI-era careers."
      />

      <SiteFooter />
    </div>
  );
}
