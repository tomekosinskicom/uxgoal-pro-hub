import { useMemo, useState } from "react";
import { Copy, Sparkles } from "lucide-react";
import { toast } from "sonner";

import { designerPrompts, promptCategories, type DesignerPrompt } from "@/data/prompts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function DesignerPrompts() {
  const [category, setCategory] = useState<DesignerPrompt["category"] | "All">("All");

  const visiblePrompts = useMemo(
    () => designerPrompts.filter((prompt) => (category === "All" ? true : prompt.category === category)),
    [category],
  );

  const copyPrompt = async (prompt: string) => {
    await navigator.clipboard.writeText(prompt);
    toast.success("Prompt copied", { description: "Paste it into ChatGPT, Claude, Gemini, v0, Cursor, or Figma Make." });
  };

  return (
    <section id="prompts" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Prompt library
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Best AI prompts for designers
          </h2>
          <p className="mt-4 text-muted-foreground">
            Practical prompts for research, product strategy, UX writing, UI critique, prototyping, and portfolio work — written for product designers, not generic AI tourists.
          </p>
        </div>
        <Badge className="w-fit gap-1 border border-accent/30 bg-accent/10 text-accent hover:bg-accent/10">
          <Sparkles className="h-3 w-3" />
          {designerPrompts.length} prompts
        </Badge>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {(["All", ...promptCategories] as const).map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`filter-chip rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              category === item
                ? "border-accent bg-accent/10 text-accent"
                : "border-border bg-surface text-surface-foreground hover:bg-surface-hover"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {visiblePrompts.map((prompt) => (
          <Card key={prompt.id} className="border-border/60 bg-card">
            <CardContent className="flex h-full flex-col p-5">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <Badge variant="secondary" className="mb-3 text-xs font-normal">
                    {prompt.category}
                  </Badge>
                  <h3 className="text-lg font-semibold text-foreground">{prompt.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{prompt.bestFor}</p>
                </div>
              </div>

              <div className="flex-1 rounded-xl border border-border/60 bg-surface p-4">
                <p className="whitespace-pre-wrap text-sm leading-relaxed text-surface-foreground">
                  {prompt.prompt}
                </p>
              </div>

              <Button className="mt-4 w-full gap-2" variant="outline" onClick={() => copyPrompt(prompt.prompt)}>
                <Copy className="h-4 w-4" />
                Copy prompt
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
