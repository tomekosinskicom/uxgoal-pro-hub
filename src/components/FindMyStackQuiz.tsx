import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, RotateCcw, Sparkles } from "lucide-react";
import {
  quizRoles,
  quizGoals,
  quizBudgets,
  recommendStack,
  tools,
  type QuizRole,
  type QuizGoal,
  type QuizBudget,
  type RecommendedStack,
} from "@/data/tools";

export function FindMyStackQuiz() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [role, setRole] = useState<QuizRole | null>(null);
  const [goal, setGoal] = useState<QuizGoal | null>(null);
  const [budget, setBudget] = useState<QuizBudget | null>(null);
  const [result, setResult] = useState<RecommendedStack | null>(null);

  const reset = () => {
    setStep(1);
    setRole(null);
    setGoal(null);
    setBudget(null);
    setResult(null);
  };

  const finish = (b: QuizBudget) => {
    setBudget(b);
    if (role && goal) {
      setResult(recommendStack(role, goal, b));
      setStep(4);
    }
  };

  const renderOptions = <T extends string>(
    options: readonly T[],
    onPick: (v: T) => void,
    selected: T | null,
  ) => (
    <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onPick(opt)}
          className={`filter-chip rounded-xl border px-4 py-3 text-left text-sm font-medium ${
            selected === opt
              ? "border-accent bg-accent/10 text-accent"
              : "border-border bg-surface text-surface-foreground hover:bg-surface-hover"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );

  return (
    <section id="quiz" className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-10 text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Personalized
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Find My Stack
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
          Answer 3 quick questions and we'll recommend a UX toolkit tailored to your goal and budget.
        </p>
      </div>

      <Card className="border-border/60 bg-card">
        <CardContent className="p-6 md:p-8">
          {step !== 4 && (
            <div className="mb-6 flex items-center gap-2">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 flex-1 rounded-full ${
                    step >= s ? "bg-accent" : "bg-border"
                  }`}
                />
              ))}
            </div>
          )}

          {step === 1 && (
            <div>
              <h3 className="mb-1 text-lg font-semibold text-foreground">
                What is your role?
              </h3>
              <p className="mb-6 text-sm text-muted-foreground">Step 1 of 3</p>
              {renderOptions(quizRoles, (v) => { setRole(v); setStep(2); }, role)}
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="mb-1 text-lg font-semibold text-foreground">
                What is your current goal?
              </h3>
              <p className="mb-6 text-sm text-muted-foreground">Step 2 of 3</p>
              {renderOptions(quizGoals, (v) => { setGoal(v); setStep(3); }, goal)}
              <div className="mt-6">
                <Button variant="ghost" size="sm" onClick={() => setStep(1)}>← Back</Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="mb-1 text-lg font-semibold text-foreground">
                What is your budget?
              </h3>
              <p className="mb-6 text-sm text-muted-foreground">Step 3 of 3</p>
              {renderOptions(quizBudgets, finish, budget)}
              <div className="mt-6">
                <Button variant="ghost" size="sm" onClick={() => setStep(2)}>← Back</Button>
              </div>
            </div>
          )}

          {step === 4 && result && (
            <div>
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <Badge className="mb-3 gap-1 bg-accent/15 text-accent border border-accent/30 hover:bg-accent/15">
                    <Sparkles className="h-3 w-3" />
                    Your recommended stack
                  </Badge>
                  <h3 className="text-xl font-semibold text-foreground">
                    {result.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {result.explanation}
                  </p>
                </div>
                <Button variant="ghost" size="sm" className="gap-1.5" onClick={reset}>
                  <RotateCcw className="h-3.5 w-3.5" />
                  Restart
                </Button>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {result.toolIds.map((id) => {
                  const t = tools.find((x) => x.id === id);
                  if (!t) return null;
                  return (
                    <a
                      key={t.id}
                      href={t.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="tool-card flex items-center gap-3 rounded-xl border border-border/60 bg-surface p-4"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-card p-2">
                        <img src={t.logo} alt={`${t.name} logo`} className="h-7 w-7 object-contain" loading="lazy" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-foreground">{t.name}</span>
                          <span className="text-xs text-muted-foreground">{t.price}</span>
                        </div>
                        <p className="mt-0.5 text-xs text-muted-foreground">{t.bestFor}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
