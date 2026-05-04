import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero.png";

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="hero-glow relative pb-16 pt-24 md:pb-24 md:pt-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="text-center md:text-left">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Curated for UX Professionals
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl md:leading-tight">
            Find the right UX tools for your{" "}
            <span className="gradient-text">next goal.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:mx-0 mx-auto">
            Curated tools, expert stacks, and practical recommendations for UX
            designers, researchers, freelancers, and career switchers.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row md:justify-start">
            <Button size="lg" className="gap-2" onClick={() => scrollTo("directory")}>
              Browse UX Tools
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="secondary" className="gap-2" onClick={() => scrollTo("quiz")}>
              <Sparkles className="h-4 w-4" />
              Get a Recommended Stack
            </Button>
          </div>
        </div>
        <div className="relative">
          <img
            src={heroImage}
            alt="UX professional analyzing performance dashboards and analytics"
            className="w-full rounded-2xl shadow-2xl"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
