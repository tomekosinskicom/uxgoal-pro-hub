import { useMemo, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { tools, expertStacks } from "@/data/tools";

export function SiteHeader() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return { tools: [], stacks: [] };
    return {
      tools: tools
        .filter((t) =>
          [t.name, t.bestFor, t.category, ...t.tags].join(" ").toLowerCase().includes(s)
        )
        .slice(0, 6),
      stacks: expertStacks.filter((st) => (st.name + " " + st.tagline).toLowerCase().includes(s)).slice(0, 3),
    };
  }, [q]);

  const goTo = (hash: string) => {
    setOpen(false);
    setQ("");
    navigate({ to: "/", hash: hash.replace("#", "") });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-foreground">
            UX<span className="text-accent">Goal</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <Link to="/" hash="stacks" className="transition-colors hover:text-foreground">Stacks</Link>
          <Link to="/" hash="directory" className="transition-colors hover:text-foreground">Tools</Link>
          <Link to="/ai-readiness" className="transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>AI Readiness</Link>
          <Link to="/learn" className="transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>Learn</Link>
          <Link to="/" hash="newsletter" className="transition-colors hover:text-foreground">Newsletter</Link>
        </nav>

        <Popover open={open && !!q.trim()} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <div className="relative w-40 sm:w-56">
              <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={q}
                onChange={(e) => { setQ(e.target.value); setOpen(true); }}
                onFocus={() => setOpen(true)}
                placeholder="Search tools, stacks…"
                className="h-9 pl-8 text-sm"
              />
            </div>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-[320px] p-2">
            {results.tools.length === 0 && results.stacks.length === 0 ? (
              <p className="px-2 py-3 text-sm text-muted-foreground">No matches.</p>
            ) : (
              <div className="space-y-2">
                {results.stacks.length > 0 && (
                  <div>
                    <p className="px-2 pb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Stacks</p>
                    {results.stacks.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => goTo("stacks")}
                        className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left text-sm hover:bg-surface"
                      >
                        <span className="font-medium text-foreground">{s.name}</span>
                        <span className="text-xs text-muted-foreground">{s.estimatedCost}</span>
                      </button>
                    ))}
                  </div>
                )}
                {results.tools.length > 0 && (
                  <div>
                    <p className="px-2 pb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Tools</p>
                    {results.tools.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => goTo("directory")}
                        className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-surface"
                      >
                        <img src={t.logo} alt="" className="h-4 w-4 object-contain" />
                        <span className="font-medium text-foreground">{t.name}</span>
                        <span className="ml-auto text-xs text-muted-foreground">{t.category}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}
