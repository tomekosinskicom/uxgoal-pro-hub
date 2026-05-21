import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/affiliate-disclosure")({
  head: () => ({
    meta: [
      { title: "Affiliate Disclosure — UXGoal" },
      {
        name: "description",
        content:
          "How UXGoal uses affiliate links, sponsored placements, and editorial recommendations.",
      },
      { property: "og:title", content: "Affiliate Disclosure — UXGoal" },
      {
        property: "og:description",
        content:
          "How UXGoal uses affiliate links, sponsored placements, and editorial recommendations.",
      },
      { property: "og:url", content: "https://uxgoal.com/affiliate-disclosure" },
    ],
    links: [{ rel: "canonical", href: "https://uxgoal.com/affiliate-disclosure" }],
  }),
  component: AffiliateDisclosurePage,
});

function AffiliateDisclosurePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-3xl px-6 py-16">
        <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Transparency
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Affiliate disclosure</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          UXGoal may earn a commission when you sign up for some tools through links on the site. This never changes the price you pay.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-surface-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground">How recommendations work</h2>
            <p className="mt-3">
              Tools are included because they are useful for product designers, UX designers, career switchers, or design teams building AI-era workflows. Affiliate availability is not enough to earn a recommendation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Affiliate links</h2>
            <p className="mt-3">
              Some outbound links may be affiliate links. If you click one and later subscribe, UXGoal may receive a commission or referral fee. Where a link is affiliate-backed, we label it near the call to action.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Sponsored placements</h2>
            <p className="mt-3">
              Sponsored tools, if any, are marked clearly. Sponsorship can affect visibility, but it should not override the editorial judgement of whether a tool is useful for the audience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Our standard</h2>
            <p className="mt-3">
              UXGoal is designed to be a practical, opinionated guide — not a pay-to-rank directory. The goal is to help designers choose better tools, build stronger workflows, and avoid subscription clutter.
            </p>
          </section>
        </div>

        <div className="mt-10">
          <Button asChild>
            <Link to="/" hash="directory">Browse tools</Link>
          </Button>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
