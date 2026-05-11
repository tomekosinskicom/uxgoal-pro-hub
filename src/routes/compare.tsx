import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { tools, type Tool } from "@/data/tools";

const searchSchema = z.object({
  ids: z.string().optional().default(""),
});

export const Route = createFileRoute("/compare")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Compare UX tools — UXGoal" },
      { name: "description", content: "Side-by-side comparison of UX and AI design tools — features, pricing, and editorial notes." },
      { property: "og:title", content: "Compare UX tools — UXGoal" },
      { property: "og:description", content: "Side-by-side comparison of UX and AI design tools." },
    ],
  }),
  component: ComparePage,
});

const featureRows: { key: keyof import("@/data/tools").ToolFeatures; label: string }[] = [
  { key: "pricing", label: "Pricing" },
  { key: "freeTier", label: "Free tier" },
  { key: "bestUseCase", label: "Best use case" },
  { key: "aiNative", label: "AI-native?" },
  { key: "learningCurve", label: "Learning curve" },
];

function ComparePage() {
  const { ids } = Route.useSearch();
  const idList: string[] = (ids || "").split(",").filter(Boolean);
  const picked: Tool[] = idList
    .map((id: string) => tools.find((t) => t.id === id))
    .filter((t): t is Tool => Boolean(t));

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16">
        <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">Side-by-side</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Compare tools</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Pick 2–4 tools from the directory to see features, pricing, and our editorial notes side-by-side.
        </p>

        {picked.length < 2 ? (
          <div className="mt-10 rounded-xl border border-dashed border-border/60 bg-card p-10 text-center">
            <p className="text-sm text-muted-foreground">
              No tools selected yet. Head to the directory and tick the "Compare" checkbox on at least two tools.
            </p>
            <Button asChild className="mt-5">
              <Link to="/" hash="directory">Browse the directory</Link>
            </Button>
          </div>
        ) : (
          <div className="mt-10 overflow-x-auto rounded-xl border border-border/60 bg-card">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-border/60">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tool</th>
                  {picked.map((t) => (
                    <th key={t.id} className="px-4 py-3 text-left">
                      <div className="flex items-center gap-2">
                        <img src={t.logo} alt="" className="h-6 w-6 object-contain" />
                        <span className="font-semibold text-foreground">{t.name}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/40">
                  <td className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">Category</td>
                  {picked.map((t) => (
                    <td key={t.id} className="px-4 py-3 text-surface-foreground">{t.category}</td>
                  ))}
                </tr>
                {featureRows.map((row) => (
                  <tr key={row.key} className="border-b border-border/40">
                    <td className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">{row.label}</td>
                    {picked.map((t) => (
                      <td key={t.id} className="px-4 py-3 text-surface-foreground">{t.features[row.key]}</td>
                    ))}
                  </tr>
                ))}
                <tr className="border-b border-border/40">
                  <td className="px-4 py-3 align-top text-xs font-medium uppercase tracking-wider text-muted-foreground">Editorial note</td>
                  {picked.map((t) => (
                    <td key={t.id} className="px-4 py-3 text-sm leading-relaxed text-surface-foreground">{t.editorialNote}</td>
                  ))}
                </tr>
                <tr>
                  <td className="px-4 py-3" />
                  {picked.map((t) => (
                    <td key={t.id} className="px-4 py-3">
                      <Button asChild size="sm" variant="secondary" className="gap-1.5">
                        <a href={t.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored">
                          Visit {t.name}
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      </Button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </section>
      <SiteFooter />
    </div>
  );
}
