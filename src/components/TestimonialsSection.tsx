import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/tools";

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Designers using UXGoal
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Built for designers like you
        </h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={t.id} className="border-border/60 bg-card">
            <CardContent className="p-6">
              <Quote className="h-5 w-5 text-accent" />
              <p className="mt-3 text-sm leading-relaxed text-surface-foreground">"{t.quote}"</p>
              <div className="mt-5">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
