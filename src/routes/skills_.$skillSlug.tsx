import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, CheckCircle2, Sparkles, Wrench } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getSkillBySlug, skillDetails } from "@/data/skills";

export const Route = createFileRoute("/skills_/$skillSlug")({
  loader: ({ params }): { skill: import("@/data/skills").SkillDetail } => {
    const skill = getSkillBySlug(params.skillSlug);
    if (!skill) throw notFound();
    return { skill };
  },
  head: ({ loaderData }) => {
    const skill = loaderData?.skill;
    const title = skill
      ? `${skill.label} in the AI era — UXGoal`
      : "Skill — UXGoal";
    const description = skill?.aiImpact.summary ?? "How AI is reshaping UX skills.";
    const url = skill
      ? `https://uxgoal.com/skills/${skill.slug}`
      : "https://uxgoal.com/skills";
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
  component: SkillDetailPage,
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <div className="flex min-h-screen items-center justify-center px-6 text-center">
        <div>
          <p className="text-sm text-muted-foreground">{error.message}</p>
          <Button
            className="mt-4"
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Retry
          </Button>
        </div>
      </div>
    );
  },
  notFoundComponent: () => {
    const { skillSlug } = Route.useParams();
    return (
      <div className="min-h-screen">
        <SiteHeader />
        <section className="mx-auto max-w-2xl px-6 py-32 text-center">
          <h1 className="text-3xl font-bold text-foreground">Skill not found</h1>
          <p className="mt-2 text-muted-foreground">
            We couldn't find a skill called "{skillSlug}".
          </p>
          <Button asChild className="mt-6">
            <Link to="/skills">Back to skills</Link>
          </Button>
        </section>
        <SiteFooter />
      </div>
    );
  },
});

function SkillDetailPage() {
  const { skill } = Route.useLoaderData();

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="hero-glow pb-10 pt-20 md:pt-28">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            to="/skills"
            className="mb-6 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All skills
          </Link>
          <Badge className="mb-3 gap-1 bg-accent/15 text-accent border border-accent/30 hover:bg-accent/15">
            <Sparkles className="h-3 w-3" />
            UX skill in the AI era
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {skill.label}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {skill.tagline}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-16">
        <Card className="border-border/60 bg-card">
          <CardContent className="p-6 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              How AI is impacting this skill
            </p>
            <p className="mt-3 text-base leading-relaxed text-foreground">
              {skill.aiImpact.summary}
            </p>

            <div className="mt-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                The shifts that matter
              </h2>
              <ul className="mt-3 grid gap-2.5">
                {skill.aiImpact.shifts.map((shift: string) => (
                  <li
                    key={shift}
                    className="flex gap-2.5 rounded-xl border border-border/60 bg-surface p-4 text-sm text-surface-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                    <span>{shift}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                What to do about it
              </h2>
              <ul className="mt-3 grid gap-2.5">
                {skill.aiImpact.actions.map((action: string) => (
                  <li
                    key={action}
                    className="flex gap-2.5 rounded-xl border border-border/60 bg-surface p-4 text-sm text-surface-foreground"
                  >
                    <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Tools to try
              </h2>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {skill.toolsToTry.map((tool: { name: string; why: string }) => (
                  <div
                    key={tool.name}
                    className="rounded-xl border border-border/60 bg-surface p-4"
                  >
                    <div className="flex items-center gap-2 font-medium text-foreground">
                      <Wrench className="h-4 w-4 text-accent" />
                      {tool.name}
                    </div>
                    <p className="mt-1.5 text-sm text-muted-foreground">{tool.why}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-xl border border-accent/30 bg-accent/5 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Next move
              </p>
              <h3 className="mt-1 text-lg font-semibold text-foreground">
                See how the rest of your skills stack up
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Take the 3-minute UX skill assessment and get a focused roadmap.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button asChild size="sm">
                  <Link to="/skills">
                    Take the assessment
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <Link to="/ai-readiness">AI readiness check</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Other skills
        </h2>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {skillDetails
            .filter((s) => s.slug !== skill.slug)
            .map((s) => (
              <Link
                key={s.slug}
                to="/skills/$skillSlug"
                params={{ skillSlug: s.slug }}
                className="filter-chip group rounded-xl border border-border bg-surface p-4 hover:bg-surface-hover"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-medium text-foreground">{s.label}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                </div>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{s.tagline}</p>
              </Link>
            ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
