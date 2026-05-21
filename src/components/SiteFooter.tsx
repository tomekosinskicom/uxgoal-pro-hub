import { Link } from "@tanstack/react-router";
import { stages } from "@/data/tools";
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
              Curated notes on AI-era design workflows for product designers.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Explore</h3>
            <ul className="space-y-2 text-sm text-surface-foreground">
              <li><Link to="/" hash="directory" className="transition-colors hover:text-foreground">Tools</Link></li>
              <li><Link to="/" hash="prompts" className="transition-colors hover:text-foreground">Prompts</Link></li>
              <li><Link to="/skills" className="transition-colors hover:text-foreground">UX Skill Assessment</Link></li>
              <li><Link to="/ai-readiness" className="transition-colors hover:text-foreground">AI Readiness</Link></li>
              <li><Link to="/learn" className="transition-colors hover:text-foreground">Learn</Link></li>
              <li><Link to="/changelog" className="transition-colors hover:text-foreground">Changelog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">SEO Guides</h3>
            <ul className="space-y-2 text-sm text-surface-foreground">
              <li><Link to="/best/ai-tools-for-ux-designers" className="transition-colors hover:text-foreground">Best AI Tools for UX Designers</Link></li>
              <li><Link to="/best/ai-prototyping-tools-for-ux-designers" className="transition-colors hover:text-foreground">Best AI Prototyping Tools</Link></li>
              <li><Link to="/best/portfolio-website-builders-for-ux-designers" className="transition-colors hover:text-foreground">Best Portfolio Builders</Link></li>
              <li className="pt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tool stages</li>
              {stages.map((stage) => (
                <li key={stage}>
                  <Link to="/" hash="directory" className="transition-colors hover:text-foreground">
                    {stage} Tools
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
              <li><Link to="/affiliate-disclosure" className="transition-colors hover:text-foreground">Affiliate disclosure</Link></li>
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
