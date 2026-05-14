import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { changelog } from "@/data/tools";

export const Route = createFileRoute("/changelog")({
  head: () => ({
    meta: [
      { title: "Changelog — UXGoal" },
      { name: "description", content: "What changed on UXGoal — new tools, refreshed reviews, and editorial updates for AI-era product designers." },
      { property: "og:title", content: "Changelog — UXGoal" },
      { property: "og:description", content: "What changed on UXGoal — new tools, refreshed reviews, and editorial updates." },
    ],
  }),
  component: ChangelogPage,
});

function fmt(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function ChangelogPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-6 pb-20 pt-20">
        <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">Editorial log</p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">Changelog</h1>
        <p className="mt-3 text-muted-foreground">Every meaningful change to the directory, prompts, and tools, in plain English.</p>

        <ol className="mt-10 space-y-6">
          {changelog.map((e) => (
            <li key={e.id} className="rounded-xl border border-border/60 bg-card p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{fmt(e.date)}</p>
              <h2 className="mt-1 text-xl font-semibold text-foreground">{e.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
            </li>
          ))}
        </ol>
      </section>
      <SiteFooter />
    </div>
  );
}
