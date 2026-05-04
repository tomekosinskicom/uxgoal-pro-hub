import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { expertStacks } from "@/data/tools";

export function ExpertStacks() {
  return (
    <section id="stacks" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Curated Collections
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Expert Stacks
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
          Pre-built toolkits designed for specific workflows and career stages.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {expertStacks.map((stack) => (
          <Card key={stack.id} className="flex flex-col border-border/60 bg-card">
            <CardContent className="flex flex-1 flex-col p-6">
              <div className="mb-4 text-3xl">{stack.emoji}</div>
              <h3 className="text-lg font-semibold text-foreground">{stack.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{stack.description}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                <Badge variant="secondary" className="text-xs font-normal">{stack.difficulty}</Badge>
                <Badge variant="secondary" className="text-xs font-normal">{stack.estimatedCost}</Badge>
              </div>

              <p className="mt-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Best for
              </p>
              <p className="text-sm text-surface-foreground">{stack.bestFor}</p>

              <ul className="mt-5 space-y-3">
                {stack.tools.map((t) => (
                  <li key={t.name} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <div>
                      <span className="text-sm font-medium text-foreground">{t.name}</span>
                      <span className="ml-1 text-sm text-muted-foreground">— {t.reason}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-lg border border-border/60 bg-surface p-3">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Why this stack works
                </p>
                <p className="mt-1 text-sm text-surface-foreground">{stack.whyItWorks}</p>
              </div>

              <Button
                className="mt-6 w-full"
                onClick={() => toast.success(`${stack.name} saved`, { description: "We'll guide you through setup soon." })}
              >
                Use this stack
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
