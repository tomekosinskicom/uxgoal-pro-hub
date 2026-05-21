import { useMemo, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { tools } from "@/data/tools";
import logoUrl from "@/assets/logo.png";

const navLinks = [
  { to: "/", hash: "directory", label: "Tools" },
  { to: "/", hash: "prompts", label: "Prompts" },
  { to: "/skills", label: "Skills" },
  { to: "/ai-readiness", label: "AI Readiness" },
  { to: "/learn", label: "Learn" },
  { to: "/", hash: "newsletter", label: "Newsletter" },
] as const;

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return { tools: [] };
    return {
      tools: tools
        .filter((t) =>
          [t.name, t.bestFor, t.stage, ...t.tags, t.aiNative ? "AI-native" : ""].join(" ").toLowerCase().includes(s)
        )
        .slice(0, 6),
    };
  }, [q]);

  const goToTool = (slug: string) => {
    setOpen(false);
    setQ("");
    navigate({ to: "/tools/$slug", params: { slug } });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoUrl} alt="UXGoal logo" width={28} height={28} className="h-7 w-7" />
          <span className="text-xl font-bold tracking-tight text-foreground">
            UX<span className="text-accent">Goal</span>
          </span>
        </Link>


        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={"hash" in l ? l.hash : undefined}
              className="transition-colors hover:text-foreground"
              activeProps={!("hash" in l) ? { className: "text-foreground" } : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>


        <Popover open={open && !!q.trim()} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <div className="relative w-40 sm:w-56">
              <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={q}
                onChange={(e) => { setQ(e.target.value); setOpen(true); }}
                onFocus={() => setOpen(true)}
                placeholder="Search tools…"
                className="h-9 pl-8 text-sm"
              />
            </div>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-[320px] p-2">
            {results.tools.length === 0 ? (
              <p className="px-2 py-3 text-sm text-muted-foreground">No matches.</p>
            ) : (
              <div className="space-y-2">
                {results.tools.length > 0 && (
                  <div>
                    <p className="px-2 pb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Tools</p>
                    {results.tools.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => goToTool(t.id)}
                        className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-surface"
                      >
                        <img src={t.logo} alt="" className="h-4 w-4 object-contain" />
                        <span className="font-medium text-foreground">{t.name}</span>
                        <span className="ml-auto text-xs text-muted-foreground">{t.stage}</span>
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
