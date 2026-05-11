import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { X, GitCompare } from "lucide-react";
import { useCompare } from "@/lib/compare-context";
import { tools } from "@/data/tools";

export function CompareBar() {
  const { selected, clear, toggle } = useCompare();
  if (selected.length === 0) return null;

  const picks = selected.map((id) => tools.find((t) => t.id === id)).filter(Boolean);
  const compareUrl = `/compare?ids=${selected.join(",")}`;

  return (
    <div className="fixed inset-x-0 bottom-4 z-40 px-4">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 rounded-xl border border-border/60 bg-card/95 px-4 py-3 shadow-2xl backdrop-blur">
        <div className="flex flex-1 items-center gap-3 overflow-x-auto">
          <GitCompare className="h-4 w-4 flex-shrink-0 text-accent" />
          <div className="flex items-center gap-2">
            {picks.map((t) =>
              t ? (
                <button
                  key={t.id}
                  onClick={() => toggle(t.id)}
                  className="group inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-surface px-2.5 py-1 text-xs"
                >
                  <img src={t.logo} alt="" className="h-3.5 w-3.5 object-contain" />
                  <span className="text-foreground">{t.name}</span>
                  <X className="h-3 w-3 text-muted-foreground group-hover:text-foreground" />
                </button>
              ) : null
            )}
          </div>
          <span className="hidden text-xs text-muted-foreground sm:inline">
            {selected.length}/4 selected
          </span>
        </div>
        <div className="flex flex-shrink-0 items-center gap-2">
          <Button variant="ghost" size="sm" onClick={clear}>Clear</Button>
          <Button asChild size="sm" disabled={selected.length < 2}>
            <Link to="/compare" search={{ ids: selected.join(",") }} disabled={selected.length < 2}>
              Compare ({selected.length})
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
