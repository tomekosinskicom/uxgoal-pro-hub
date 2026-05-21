import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pb-24 pt-20 md:pb-32 md:pt-28">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/3 top-1/4 h-[300px] w-[300px] rounded-full bg-indigo-600/10 blur-[100px]" />

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"
        style={{
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
        }}
      />

      {/* Floating chips */}
      <div className="pointer-events-none absolute left-6 top-10 hidden animate-bounce opacity-80 md:left-[18%] md:top-28 md:block [animation-duration:6s]">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
          Figma AI
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-40 right-6 hidden animate-bounce opacity-80 md:right-[18%] md:bottom-48 md:block [animation-duration:8s]">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          Midjourney
        </div>
      </div>
      <div className="pointer-events-none absolute right-10 top-32 hidden animate-bounce opacity-70 lg:right-[20%] lg:top-40 lg:block [animation-duration:7s] [animation-delay:1s]">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]" />
          Framer AI
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-56 left-10 hidden animate-bounce opacity-70 lg:left-[20%] lg:bottom-64 lg:block [animation-duration:9s] [animation-delay:2s]">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
          Galileo AI
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-blue-400 md:text-xs">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
          </span>
          The AI toolkit for product designers
        </div>

        {/* Headline */}
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-7xl">
          Best AI tools for{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-500 bg-clip-text text-transparent">
              UX designers
            </span>
            <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
          </span>{" "}
          in 2026
        </h1>

        {/* Subhead */}
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          A curated directory of AI design tools, prompts, and a skill roadmap —{" "}
          <span className="text-foreground/90">so you stay hireable as the field shifts.</span>{" "}
          Free, no signup.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="group gap-2 bg-blue-600 px-8 py-6 text-base font-bold text-white shadow-[0_0_0_rgba(37,99,235,0)] transition-all hover:scale-105 hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
          >
            <Link to="/ai-readiness">
              Take the 2-min AI Readiness check
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <a
            href="#prompts"
            className="px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Browse designer prompts <span className="opacity-60">→</span>
          </a>
        </div>

        {/* Stat / trust strip */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-70 transition-all duration-500 hover:opacity-100 md:gap-12">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground">500+</span>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Curated AI tools
            </span>
          </div>
          <div className="hidden h-8 w-px bg-white/10 md:block" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground">12k+</span>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Designers joined
            </span>
          </div>
          <div className="hidden h-8 w-px bg-white/10 md:block" />
          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Featured:
            </span>
            <div className="flex gap-3 text-sm font-medium text-foreground">
              <span>Claude</span>
              <span>Relume</span>
              <span>Uizard</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative mt-20 w-full overflow-hidden whitespace-nowrap border-y border-white/5 bg-white/[0.02] py-4">
        <div className="inline-block animate-[uxgoal-marquee_30s_linear_infinite] px-4">
          <span className="mx-8 text-[10px] font-bold uppercase tracking-[0.3em] text-white/15">
            Generative UI • Prompt Engineering • AI Prototyping • Spatial Computing • Synthetic Users • Automated Research • Vibe Coding • Multimodal Design
          </span>
          <span className="mx-8 text-[10px] font-bold uppercase tracking-[0.3em] text-white/15">
            Generative UI • Prompt Engineering • AI Prototyping • Spatial Computing • Synthetic Users • Automated Research • Vibe Coding • Multimodal Design
          </span>
        </div>
      </div>

      <style>{`
        @keyframes uxgoal-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
