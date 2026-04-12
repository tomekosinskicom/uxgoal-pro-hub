export function HeroSection() {
  return (
    <section className="hero-glow relative pb-16 pt-24 md:pb-24 md:pt-32">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Curated for UX Professionals
        </p>
        <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl md:leading-tight">
          Tools to reach your{" "}
          <span className="gradient-text">UX Goals.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          A hand-picked directory of the best tools for research, prototyping,
          productivity, and career growth — reviewed by experts.
        </p>
      </div>
    </section>
  );
}
