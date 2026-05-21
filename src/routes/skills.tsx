import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, RotateCcw, Sparkles } from "lucide-react";
import { toast } from "sonner";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";
import { skillAreas, type SkillArea, type SkillId } from "@/data/skills";


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
      { property: "og:url", content: "https://uxgoal.com/skills" },
    ],
    links: [{ rel: "canonical", href: "https://uxgoal.com/skills" }],
  }),
  component: SkillsPage,
});




interface SkillResult {
  score: number;
  label: string;
  blurb: string;
  weakest: SkillArea[];
}

function scoreSkills(answers: Record<SkillId, number>): SkillResult {
  const raw = Object.values(answers).reduce((sum, value) => sum + value, 0);
  const score = Math.round((raw / (skillAreas.length * 4)) * 100);
  const level =
    score < 38
      ? { label: "Foundation builder", blurb: "You have useful pieces, but your next growth comes from making the basics repeatable and visible." }
      : score < 68
        ? { label: "Growing product designer", blurb: "You can contribute across the product process. Now sharpen the weakest two skills and show stronger decision-making." }
        : score < 86
          ? { label: "Senior-track designer", blurb: "You are operating beyond screens. Your next edge is stronger evidence, sharper facilitation, and clearer strategic artefacts." }
          : { label: "AI-era design lead", blurb: "You have a broad, modern skill profile. Focus on publishing your process and turning judgement into reusable systems." };
  const weakest = skillAreas
    .filter((area) => answers[area.id] !== undefined)
    .sort((a, b) => answers[a.id] - answers[b.id])
    .slice(0, 3);
  return { score, label: level.label, blurb: level.blurb, weakest };
}

function SkillsPage() {
  const [answers, setAnswers] = useState<Record<SkillId, number>>({} as Record<SkillId, number>);
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<SkillResult | null>(null);
  const [email, setEmail] = useState("");
  const [savingEmail, setSavingEmail] = useState(false);
  const [emailSaved, setEmailSaved] = useState(false);

  const total = skillAreas.length;
  const isResults = result !== null;
  const current = skillAreas[step];
  const progress = isResults ? 100 : Math.round((step / total) * 100);

  const pick = (score: number) => {
    const next = { ...answers, [current.id]: score };
    setAnswers(next);
    if (step + 1 >= total) {
      setResult(scoreSkills(next));
    } else {
      setStep(step + 1);
    }
  };

  const reset = () => {
    setAnswers({} as Record<SkillId, number>);
    setStep(0);
    setResult(null);
    setEmail("");
    setEmailSaved(false);
  };

  const onEmailSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!/^\S+@\S+\.\S+$/.test(trimmed)) {
      toast.error("Please enter a valid email");
      return;
    }
    setSavingEmail(true);
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email: trimmed, source: "ux-skill-assessment" });
    setSavingEmail(false);
    if (error && error.code !== "23505") {
      toast.error("Couldn't save email", { description: "Please try again in a moment." });
      return;
    }
    setEmailSaved(true);
    toast.success("Roadmap incoming", { description: "We'll send your UX skill roadmap shortly." });
  };

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="hero-glow pb-10 pt-20 md:pt-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            3-minute assessment
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            UX skill assessment for product designers
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            8 quick questions across research, product thinking, UI craft, systems, facilitation, data, and AI literacy. We'll score you and pinpoint the skills to grow next.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <Card className="border-border/60 bg-card">
          <CardContent className="p-6 md:p-10">
            <div className="mb-6 flex items-center justify-between gap-4">
              <Progress value={progress} className="h-1.5 flex-1" />
              <span className="text-xs font-medium text-muted-foreground">
                {isResults ? "Done" : `${step + 1} / ${total}`}
              </span>
            </div>

            {!isResults && current && (
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">{current.label}</p>
                <h2 className="text-xl font-semibold text-foreground md:text-2xl">{current.prompt}</h2>
                <div className="mt-6 grid gap-2.5">
                  {current.options.map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => pick(opt.score)}
                      className="filter-chip rounded-xl border border-border bg-surface px-4 py-3 text-left text-sm font-medium text-surface-foreground hover:bg-surface-hover"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                {step > 0 && (
                  <div className="mt-6">
                    <Button variant="ghost" size="sm" onClick={() => setStep(step - 1)}>← Back</Button>
                  </div>
                )}
              </div>
            )}

            {isResults && result && (
              <ResultsView
                result={result}
                onReset={reset}
                email={email}
                setEmail={setEmail}
                onEmailSubmit={onEmailSubmit}
                savingEmail={savingEmail}
                emailSaved={emailSaved}
              />
            )}
          </CardContent>
        </Card>
      </section>

      <SiteFooter />
    </div>
  );
}

function ResultsView({
  result,
  onReset,
  email,
  setEmail,
  onEmailSubmit,
  savingEmail,
  emailSaved,
}: {
  result: SkillResult;
  onReset: () => void;
  email: string;
  setEmail: (v: string) => void;
  onEmailSubmit: (e: FormEvent) => void;
  savingEmail: boolean;
  emailSaved: boolean;
}) {
  const weakest = useMemo(() => result.weakest, [result]);

  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <Badge className="mb-3 gap-1 bg-accent/15 text-accent border border-accent/30 hover:bg-accent/15">
            <Sparkles className="h-3 w-3" />
            Your result
          </Badge>
          <div className="flex items-baseline gap-3">
            <span className="text-5xl font-bold text-foreground">{result.score}</span>
            <span className="text-sm text-muted-foreground">/ 100</span>
          </div>
          <h2 className="mt-2 text-2xl font-semibold text-foreground">{result.label}</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">{result.blurb}</p>
        </div>
        <Button variant="ghost" size="sm" className="gap-1.5" onClick={onReset}>
          <RotateCcw className="h-3.5 w-3.5" />
          Restart
        </Button>
      </div>

      <div className="mt-8">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Focus on these next</h3>
        <div className="mt-3 grid gap-3">
          {weakest.map((area) => (
            <div key={area.id} className="rounded-xl border border-border/60 bg-surface p-4">
              <div className="flex items-center gap-2 font-medium text-foreground">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                {area.label}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{area.nextStep}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-border/60 bg-surface/60 p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Recommended next step</p>
        <h3 className="mt-1 text-lg font-semibold text-foreground">Pair this with the AI readiness check</h3>
        <p className="mt-1 text-sm text-muted-foreground">See how your AI workflow stacks up and get three tools to start with.</p>
        <div className="mt-4">
          <Button asChild size="sm">
            <Link to="/ai-readiness">
              Take the AI readiness check
              <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-accent/30 bg-accent/5 p-5">
        {emailSaved ? (
          <div className="flex items-center gap-2 text-sm text-foreground">
            <CheckCircle2 className="h-4 w-4 text-accent" />
            You're in. Your UX skill roadmap is on its way.
          </div>
        ) : (
          <>
            <p className="text-sm font-semibold text-foreground">Get your full UX skill roadmap</p>
            <p className="mt-1 text-xs text-muted-foreground">
              A 6-week sequence of exercises and checkpoints tailored to where you scored lowest — sent to your inbox.
            </p>
            <form onSubmit={onEmailSubmit} className="mt-3 flex flex-col gap-2 sm:flex-row">
              <Input
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-10 bg-card"
                required
              />
              <Button type="submit" disabled={savingEmail}>
                {savingEmail ? "Saving…" : "Send me the roadmap"}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
