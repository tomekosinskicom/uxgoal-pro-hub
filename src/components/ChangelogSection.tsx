import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { changelog } from "@/data/tools";

function fmt(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export function ChangelogSection() {
  const recent = changelog.slice(0, 3);
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">Editorial log</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">What changed this month</h2>
        </div>
        <Link
          to="/changelog"
          className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
        >
          Full changelog
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <ol className="space-y-4">
        {recent.map((e) => (
          <li key={e.id} className="rounded-xl border border-border/60 bg-card p-5">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{fmt(e.date)}</p>
            <h3 className="mt-1 text-lg font-semibold text-foreground">{e.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
