import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="hero-glow relative pb-16 pt-24 md:pb-24 md:pt-32">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          For product designers, 1–5 years in.
        </p>
        <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl md:leading-tight">
          Become the designer{" "}
          <span className="gradient-text">AI can't replace.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Curated tools, expert stacks, and a skill roadmap for product designers
          with 1–5 years of experience adapting to the AI era.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="gap-2">
            <Link to="/ai-readiness">
              Take the 2-min AI Readiness check
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <a
            href="#stacks"
            className="text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            Browse the AI-Native Stack →
          </a>
        </div>
      </div>
    </section>
  );
}
