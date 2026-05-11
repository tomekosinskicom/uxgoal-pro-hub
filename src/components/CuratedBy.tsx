export function CuratedBy() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-2xl border border-border/60 bg-card p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 text-2xl font-bold text-accent">
            UX
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Curated by</p>
            <h3 className="mt-1 text-lg font-semibold text-foreground">[Your name] — Product Designer</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              I've spent the last several years shipping product as a designer through every major AI shift —
              prompting, generative UI, AI-assisted research, and designer-built prototypes. UXGoal is where I
              recommend the tools I'd hand a junior or mid-level designer asking "what should I actually learn?"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
