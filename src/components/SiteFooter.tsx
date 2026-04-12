import { categories } from "@/data/tools";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-background py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-3">
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
              Popular UX Tool Categories
            </h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <span className="text-sm text-surface-foreground transition-colors hover:text-foreground cursor-pointer">
                    {cat} Tools
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Resources
            </h3>
            <ul className="space-y-2 text-sm text-surface-foreground">
              <li className="transition-colors hover:text-foreground cursor-pointer">Submit a Tool</li>
              <li className="transition-colors hover:text-foreground cursor-pointer">Expert Stacks</li>
              <li className="transition-colors hover:text-foreground cursor-pointer">About UXGoal</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} UXGoal. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
