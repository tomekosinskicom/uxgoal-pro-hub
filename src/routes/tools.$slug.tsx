import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, ArrowLeft, Sparkles, Calendar, Link2 } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ToolCard } from "@/components/ToolCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getToolHref, hasApprovedAffiliate, tools, type Tool } from "@/data/tools";

export const Route = createFileRoute("/tools/$slug")({
  loader: ({ params }) => {
    const tool = tools.find((t) => t.id === params.slug);
    if (!tool) throw notFound();
    return { tool };
  },
  head: ({ loaderData, params }) => {
    const t = loaderData?.tool;
    if (!t) return { meta: [{ title: "Tool not found — UXGoal" }] };
    const url = `https://uxgoal.com/tools/${params.slug}`;
    return {
      meta: [
        { title: `${t.name} review — UXGoal` },
        { name: "description", content: `${t.verdict} ${t.editorialNote}`.slice(0, 200) },
        { property: "og:title", content: `${t.name} review — UXGoal` },
        { property: "og:description", content: t.verdict },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: t.name,
            description: t.verdict,
            image: t.logo,
            url,
            category: t.stage,
            offers: {
              "@type": "Offer",
              price: t.price === "Free" ? "0" : undefined,
              priceCurrency: "USD",
              priceSpecification: t.price !== "Free" ? { "@type": "PriceSpecification", price: t.price } : undefined,
              url: t.url,
              availability: "https://schema.org/InStock",
            },
            review: {
              "@type": "Review",
              author: { "@type": "Organization", name: "UXGoal" },
              reviewBody: t.editorialNote,
              datePublished: t.lastReviewed,
            },
          }),
        },
      ],
    };
  },
  component: ToolPage,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Tool not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">We don't have a review for that tool yet.</p>
        <div className="mt-6">
          <Button asChild>
            <Link to="/" hash="directory">Browse the directory</Link>
          </Button>
        </div>
      </div>
    </div>
  ),
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

function ToolPage() {
  const { tool } = Route.useLoaderData() as { tool: Tool };
  const href = getToolHref(tool);
  const approvedAffiliate = hasApprovedAffiliate(tool);
  const related = tools
    .filter((t) => t.id !== tool.id && t.stage === tool.stage)
    .slice(0, 3);

  const featureRows: { key: keyof typeof tool.features; label: string }[] = [
    { key: "pricing", label: "Pricing" },
    { key: "freeTier", label: "Free tier" },
    { key: "bestUseCase", label: "Best use case" },
    { key: "aiNative", label: "AI-native?" },
    { key: "learningCurve", label: "Learning curve" },
  ];

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="mx-auto max-w-4xl px-6 pb-16 pt-12">
        <Link to="/" hash="directory" className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to directory
        </Link>

        <div className="mt-6 flex items-start gap-5">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-surface p-3">
            <img src={tool.logo} alt={`${tool.name} logo`} className="h-10 w-10 object-contain" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="text-xs font-normal">{tool.stage}</Badge>
              {tool.aiNative && (
                <Badge className="gap-1 border border-accent/30 bg-accent/10 px-2 text-[10px] font-medium uppercase tracking-wider text-accent hover:bg-accent/10">
                  <Sparkles className="h-2.5 w-2.5" />
                  AI-native
                </Badge>
              )}
              {tool.featured && (
                <Badge className="gap-1 bg-accent/15 text-accent border border-accent/30 hover:bg-accent/15">
                  <Sparkles className="h-3 w-3" />
                  Featured
                </Badge>
              )}
              {tool.sponsored && (
                <Badge className="rounded-full border border-amber-400/40 bg-amber-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-300 hover:bg-amber-400/10">
                  Sponsored
                </Badge>
              )}
            </div>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">{tool.name}</h1>
            <p className="mt-2 text-sm font-medium text-accent">{tool.bestFor}</p>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{tool.verdict}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className="gap-2">
            <a href={href} target="_blank" rel={approvedAffiliate ? "noopener noreferrer sponsored" : "noopener noreferrer"}>
              Visit {tool.name}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
          <span className="text-sm text-muted-foreground">
            {tool.price === "Free" ? "Free" : `From ${tool.price}`}
          </span>
          {approvedAffiliate && (
            <span className="inline-flex items-center gap-1 rounded-md border border-border/60 bg-surface px-2 py-1 text-xs text-muted-foreground">
              <Link2 className="h-3 w-3" />
              Affiliate link — see disclosure
            </span>
          )}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Editorial note</p>
            <p className="mt-2 text-sm leading-relaxed text-surface-foreground">{tool.editorialNote}</p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Why we recommend it</p>
            <p className="mt-2 text-sm leading-relaxed text-surface-foreground">{tool.whyRecommend}</p>
          </div>
        </div>

        <div className="mt-10 overflow-x-auto rounded-xl border border-border/60 bg-card">
          <table className="w-full text-sm">
            <tbody>
              {featureRows.map((row) => (
                <tr key={row.key} className="border-b border-border/40 last:border-0">
                  <td className="w-1/3 px-4 py-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">{row.label}</td>
                  <td className="px-4 py-3 text-surface-foreground">{tool.features[row.key]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            Last reviewed: {formatDate(tool.lastReviewed)}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {tool.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border/60 bg-surface px-2 py-0.5 text-[11px] text-surface-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">More {tool.stage.toLowerCase()} tools</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((t) => (
                <ToolCard key={t.id} tool={t} />
              ))}
            </div>
          </div>
        )}
      </section>

      <SiteFooter />
    </div>
  );
}
