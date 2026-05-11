import { Link } from "@tanstack/react-router";
import { categories } from "@/data/tools";
import { SubmitToolDialog } from "@/components/SubmitToolDialog";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-background py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <span className="text-lg font-bold text-foreground">
              UX<span className="text-accent">Goal</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Become the designer AI can't replace.
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              Curated by <span className="text-foreground">[Your name]</span> — a product designer writing about AI-era design workflows.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Explore</h3>
            <ul className="space-y-2 text-sm text-surface-foreground">
              <li><Link to="/" hash="stacks" className="transition-colors hover:text-foreground">Stacks</Link></li>
              <li><Link to="/" hash="directory" className="transition-colors hover:text-foreground">Tools</Link></li>
              <li><Link to="/ai-readiness" className="transition-colors hover:text-foreground">AI Readiness</Link></li>
              <li><Link to="/learn" className="transition-colors hover:text-foreground">Learn</Link></li>
              <li><Link to="/changelog" className="transition-colors hover:text-foreground">Changelog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Categories</h3>
            <ul className="space-y-2 text-sm text-surface-foreground">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link to="/" hash="directory" className="transition-colors hover:text-foreground">
                    {cat} Tools
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">More</h3>
            <ul className="space-y-2 text-sm text-surface-foreground">
              <li>
                <SubmitToolDialog
                  trigger={<button className="transition-colors hover:text-foreground">Submit or Sponsor a Tool</button>}
                />
              </li>
              <li><Link to="/" hash="newsletter" className="transition-colors hover:text-foreground">Newsletter</Link></li>
              <li><Link to="/compare" className="transition-colors hover:text-foreground">Compare tools</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 space-y-2 border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
          <p>
            Affiliate disclosure: some links on UXGoal are affiliate links — if you sign up through one, we may earn a small commission at no extra cost to you.
          </p>
          <p>© {new Date().getFullYear()} UXGoal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
