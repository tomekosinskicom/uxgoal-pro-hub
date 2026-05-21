import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { NewsletterSection } from "@/components/NewsletterSection";

export const Route = createFileRoute("/learn")({
  head: () => ({
    meta: [
      { title: "Learn — UXGoal" },
      { name: "description", content: "An AI-era skill roadmap for product designers (1–5 yrs). Coming soon — get early access." },
      { property: "og:title", content: "Learn — UXGoal" },
      { property: "og:description", content: "AI-era skill roadmap for product designers. Coming soon." },
      { property: "og:url", content: "https://uxgoal.com/learn" },
    ],
    links: [{ rel: "canonical", href: "https://uxgoal.com/learn" }],
  }),
  component: LearnPage,
});

function LearnPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="hero-glow pb-10 pt-24 md:pt-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Coming soon
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Track your skills.{" "}
            <span className="gradient-text">Hit your UX goals.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            We're building a structured, AI-era skill roadmap for product designers — designed around how the role is changing, not how it used to be.
          </p>
        </div>
      </section>

      <NewsletterSection
        source="learn-waitlist"
        title="Get early access to the AI-era designer roadmap"
        description="Join the waitlist and we'll email you the moment Learn opens — plus an early preview of the curriculum."
      />

      <SiteFooter />
    </div>
  );
}
