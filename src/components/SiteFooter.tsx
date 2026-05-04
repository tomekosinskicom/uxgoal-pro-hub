import { categories } from "@/data/tools";

export function SiteFooter() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="border-t border-border/50 bg-background py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <span className="text-lg font-bold text-foreground">
              UX<span className="text-accent">Goal</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              The curated directory of premium tools for UX professionals.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-surface-foreground">
              <li><button onClick={() => scrollTo("directory")} className="transition-colors hover:text-foreground">Tools</button></li>
              <li><button onClick={() => scrollTo("best-ai-ux")} className="transition-colors hover:text-foreground">AI Tools</button></li>
              <li><button onClick={() => scrollTo("best-research")} className="transition-colors hover:text-foreground">Research Tools</button></li>
              <li><button onClick={() => scrollTo("best-career")} className="transition-colors hover:text-foreground">Career Tools</button></li>
              <li><button onClick={() => scrollTo("stacks")} className="transition-colors hover:text-foreground">Expert Stacks</button></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Categories
            </h3>
            <ul className="space-y-2 text-sm text-surface-foreground">
              {categories.map((cat) => (
                <li key={cat}>
                  <button onClick={() => scrollTo("directory")} className="transition-colors hover:text-foreground">
                    {cat} Tools
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-surface-foreground">
              <li><button onClick={() => scrollTo("sponsor")} className="transition-colors hover:text-foreground">Submit a Tool</button></li>
              <li><button onClick={() => scrollTo("sponsor")} className="transition-colors hover:text-foreground">Sponsor UXGoal</button></li>
              <li><button onClick={() => scrollTo("newsletter")} className="transition-colors hover:text-foreground">Newsletter</button></li>
              <li><span className="cursor-pointer transition-colors hover:text-foreground">About</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} UXGoal. All rights reserved. Some links are affiliate links — they help us keep the directory free.
        </div>
      </div>
    </footer>
  );
}
