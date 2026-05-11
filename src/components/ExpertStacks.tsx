import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { expertStacks, tools } from "@/data/tools";

export function ExpertStacks() {
  const [openWhy, setOpenWhy] = useState<string | null>(null);

  return (
    <section id="stacks" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Curated Stacks
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Stacks built for the AI era
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Editorial picks for product designers (1–5 yrs) navigating the shift to AI-native workflows.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {expertStacks.map((stack) => {
          const toolEntries = stack.tools
            .map((t) => ({ ...t, tool: tools.find((x) => x.name === t.name) }))
            .slice(0, 6);

          return (
            <Card key={stack.id} className="flex flex-col border-border/60 bg-card">
              <CardContent className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-start justify-between">
                  <div className="text-3xl">{stack.emoji}</div>
                  {stack.badge && (
                    <Badge className="gap-1 bg-accent/15 text-accent border border-accent/30 hover:bg-accent/15">
                      <Sparkles className="h-3 w-3" />
                      {stack.badge}
                    </Badge>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{stack.name}</h3>
                <p className="mt-1 text-sm italic text-muted-foreground">"{stack.tagline}"</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  <Badge variant="secondary" className="text-xs font-normal">{stack.difficulty}</Badge>
                  <Badge variant="secondary" className="text-xs font-normal">{stack.estimatedCost}</Badge>
                </div>

                <p className="mt-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">Best for</p>
                <p className="text-sm text-surface-foreground">{stack.bestFor}</p>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {toolEntries.map((t) =>
                    t.tool ? (
                      <div
                        key={t.name}
                        title={t.name}
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface p-1.5"
                      >
                        <img src={t.tool.logo} alt={`${t.name} logo`} className="h-6 w-6 object-contain" loading="lazy" />
                      </div>
                    ) : (
                      <div
                        key={t.name}
                        title={`${t.name} (placeholder)`}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-dashed border-border/60 bg-surface text-[10px] font-semibold text-muted-foreground"
                      >
                        {t.name.slice(0, 2).toUpperCase()}
                      </div>
                    )
                  )}
                </div>

                <ul className="mt-5 space-y-2.5">
                  {toolEntries.map((t) => (
                    <li key={t.name} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      <div>
                        <span className="text-sm font-medium text-foreground">{t.name}</span>
                        <span className="ml-1 text-sm text-muted-foreground">— {t.reason}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setOpenWhy(openWhy === stack.id ? null : stack.id)}
                  className="mt-5 inline-flex items-center justify-between rounded-lg border border-border/60 bg-surface px-3 py-2 text-left text-sm font-medium text-surface-foreground transition-colors hover:bg-surface-hover"
                >
                  <span>Why this stack</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${openWhy === stack.id ? "rotate-180" : ""}`} />
                </button>
                {openWhy === stack.id && (
                  <p className="mt-2 rounded-md border border-border/40 bg-surface/60 p-3 text-sm leading-relaxed text-surface-foreground">
                    {stack.whyItWorks}
                  </p>
                )}

                <Button
                  className="mt-6 w-full"
                  onClick={() => toast.success(`${stack.name} saved`, { description: "We'll guide you through setup soon." })}
                >
                  Use this stack
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
