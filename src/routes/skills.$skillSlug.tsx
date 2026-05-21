import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Wrench } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { skillAreas } from "@/data/skills";

export const Route = createFileRoute("/skills/$skillSlug")({
  head: ({ params }) => {
    const area = skillAreas.find((a) => a.slug === params.skillSlug);
    const title = area ? `${area.label} for UX designers in the AI era — UXGoal` : "Skill — UXGoal";
    const description = area?.aiImpact.summary ?? "How AI is impacting UX design skills.";
    const url = `https://uxgoal.com/skills/${params.skillSlug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  loader: ({ params }) => {
    const area = skillAreas.find((a) => a.slug === params.skillSlug);
    if (!area) throw notFound();
    return { area };
  },
  notFoundComponent: () => (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto max-w-2xl px-6 py-32 text-center">
        <h1 className="text-3xl font-bold text-foreground">Skill not found</h1>
        <p className="mt-3 text-muted-foreground">That skill page doesn't exist.</p>
        <Button asChild className="mt-6">
          <Link to="/skills">Back to skills</Link>
        </Button>
      </section>
      <SiteFooter />
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto max-w-2xl px-6 py-32 text-center">
        <h1 className="text-3xl font-bold text-foreground">Something went wrong</h1>
        <p className="mt-3 text-muted-foreground">{error.message}</p>
      </section>
      <SiteFooter />
    </div>
  ),
  component: SkillPage,
});

function SkillPage() {
  const { area } = Route.useLoaderData() as { area: (typeof skillAreas)[number] };

  const others = skillAreas.filter((a) => a.id !== area.id).slice(0, 4);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="hero-glow pb-10 pt-20 md:pt-28">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            to="/skills"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            All skills
          </Link>
          <Badge className="mt-6 gap-1 border border-accent/30 bg-accent/15 text-accent hover:bg-accent/15">
            <Sparkles className="h-3 w-3" />
            Skill in the AI era
          </Badge>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">{area.label}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{area.shortDescription}</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12">
        <div className="rounded-2xl border border-border/60 bg-card p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">How AI is impacting this skill</p>
          <p className="mt-3 text-base leading-relaxed text-foreground">{area.aiImpact.summary}</p>
        </div>

        <h2 className="mt-12 text-2xl font-bold tracking-tight text-foreground">The shifts that matter</h2>
        <div className="mt-5 grid gap-4">
          {area.aiImpact.shifts.map((shift) => (
            <div key={shift.title} className="rounded-xl border border-border/60 bg-card p-5">
              <h3 className="text-base font-semibold text-foreground">{shift.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{shift.body}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold tracking-tight text-foreground">What to do about it</h2>
        <ul className="mt-5 space-y-3">
          {area.aiImpact.whatToDo.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-xl border border-border/60 bg-surface p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span className="text-sm text-foreground">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-xl border border-border/60 bg-card p-6">
          <div className="flex items-center gap-2">
            <Wrench className="h-4 w-4 text-accent" />
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tools to try</p>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {area.aiImpact.toolsToTry.map((tool) => (
              <span key={tool} className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-surface-foreground">
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-accent/30 bg-accent/5 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Your next move</p>
          <h3 className="mt-1 text-lg font-semibold text-foreground">{area.nextStep}</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/skills">
                Score yourself
                <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/ai-readiness">Take the AI readiness check</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-xl font-bold tracking-tight text-foreground">Other skills</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {others.map((a) => (
              <Link
                key={a.id}
                to="/skills/$skillSlug"
                params={{ skillSlug: a.slug }}
                className="group rounded-xl border border-border/60 bg-card p-4 transition-colors hover:border-accent/40"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-medium text-foreground">{a.label}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
