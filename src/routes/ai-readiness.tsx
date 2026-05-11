import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { z } from "zod";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, RotateCcw, Sparkles, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import {
  readinessQuestions,
  scoreReadiness,
  tools,
  expertStacks,
  type ReadinessResult,
} from "@/data/tools";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/ai-readiness")({
  head: () => ({
    meta: [
      { title: "AI Readiness Check — UXGoal" },
      { name: "description", content: "A 2-minute diagnostic for product designers (1–5 yrs) to score how AI-ready your workflow is — and what to upgrade next." },
      { property: "og:title", content: "AI Readiness Check — UXGoal" },
      { property: "og:description", content: "Score your AI readiness as a product designer in 2 minutes." },
    ],
  }),
  component: AiReadinessPage,
});

function AiReadinessPage() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [step, setStep] = useState(0); // 0..n-1 then results
  const [result, setResult] = useState<ReadinessResult | null>(null);
  const [resultId, setResultId] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [savingEmail, setSavingEmail] = useState(false);
  const [emailSaved, setEmailSaved] = useState(false);

  const total = readinessQuestions.length;
  const isResults = result !== null;
  const current = readinessQuestions[step];
  const progress = isResults ? 100 : Math.round((step / total) * 100);

  const pick = async (score: number) => {
    const next = { ...answers, [current.id]: score };
    setAnswers(next);
    if (step + 1 >= total) {
      const r = scoreReadiness(next);
      setResult(r);
      // persist anonymously
      const { data, error } = await supabase
        .from("ai_readiness_results")
        .insert({
          score: r.score,
          label: r.label,
          answers: next,
          recommended_tool_ids: r.recommendedToolIds,
          recommended_stack_id: r.recommendedStackId,
        })
        .select("id")
        .single();
      if (!error && data) setResultId(data.id);
    } else {
      setStep(step + 1);
    }
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
    setResult(null);
    setResultId(null);
    setEmail("");
    setEmailSaved(false);
  };

  const onEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!/^\S+@\S+\.\S+$/.test(trimmed)) {
      toast.error("Please enter a valid email");
      return;
    }
    setSavingEmail(true);
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email: trimmed, source: "ai-readiness" });
    if (resultId) {
      // Best-effort: not strictly necessary; results table has no public update.
      // (Skipping update — no RLS policy exists for that.)
    }
    setSavingEmail(false);
    if (error && error.code !== "23505") {
      toast.error("Couldn't save email", { description: "Please try again in a moment." });
      return;
    }
    setEmailSaved(true);
    toast.success("Roadmap incoming", { description: "We'll send your AI-era skill roadmap shortly." });
  };

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="hero-glow pb-10 pt-20 md:pt-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            2-minute diagnostic
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            How AI-ready is your design workflow?
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            10 quick questions. We'll score you and recommend three tools and a stack to close the gap.
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
  result: ReadinessResult;
  onReset: () => void;
  email: string;
  setEmail: (v: string) => void;
  onEmailSubmit: (e: React.FormEvent) => void;
  savingEmail: boolean;
  emailSaved: boolean;
}) {
  const recommendedTools = useMemo(
    () => result.recommendedToolIds.map((id) => tools.find((t) => t.id === id)).filter(Boolean),
    [result.recommendedToolIds]
  );
  const stack = expertStacks.find((s) => s.id === result.recommendedStackId);

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
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Three tools to start with</h3>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {recommendedTools.map((t) =>
            t ? (
              <a
                key={t.id}
                href={t.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="tool-card flex items-center gap-3 rounded-xl border border-border/60 bg-surface p-3"
              >
                <img src={t.logo} alt="" className="h-8 w-8 object-contain" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{t.bestFor}</p>
                </div>
              </a>
            ) : null
          )}
        </div>
      </div>

      {stack && (
        <div className="mt-8 rounded-xl border border-border/60 bg-surface/60 p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Recommended stack</p>
          <h3 className="mt-1 text-lg font-semibold text-foreground">{stack.name}</h3>
          <p className="mt-1 text-sm italic text-muted-foreground">"{stack.tagline}"</p>
          <div className="mt-4">
            <Button asChild size="sm">
              <Link to="/" hash="stacks">
                See full stack
                <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      )}

      <div className="mt-8 rounded-xl border border-accent/30 bg-accent/5 p-5">
        {emailSaved ? (
          <div className="flex items-center gap-2 text-sm text-foreground">
            <CheckCircle2 className="h-4 w-4 text-accent" />
            You're in. The full AI-era skill roadmap is on its way.
          </div>
        ) : (
          <>
            <p className="text-sm font-semibold text-foreground">Get your full AI-era skill roadmap</p>
            <p className="mt-1 text-xs text-muted-foreground">
              A 6-week sequence of tools, exercises, and weekly checkpoints — sent to your inbox.
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
