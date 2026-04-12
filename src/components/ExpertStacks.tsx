import { Card, CardContent } from "@/components/ui/card";
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
          <Card key={stack.id} className="border-border/60 bg-card">
            <CardContent className="p-6">
              <div className="mb-4 text-3xl">{stack.emoji}</div>
              <h3 className="text-lg font-semibold text-foreground">{stack.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{stack.description}</p>

              <ul className="mt-6 space-y-3">
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
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
