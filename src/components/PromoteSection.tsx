import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Megaphone } from "lucide-react";
import { SubmitToolDialog } from "@/components/SubmitToolDialog";

export function PromoteSection() {
  return (
    <section id="sponsor" className="mx-auto max-w-6xl px-6 py-20">
      <Card className="overflow-hidden border-border/60 bg-card">
        <CardContent className="relative p-8 md:p-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(ellipse 50% 60% at 80% 0%, oklch(0.65 0.18 250 / 0.18), transparent)",
            }}
          />
          <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface px-3 py-1 text-xs font-medium text-surface-foreground">
                <Megaphone className="h-3.5 w-3.5 text-accent" />
                For tool makers
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Promote your UX tool
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Reach UX designers, researchers, freelancers, and design leads
                actively looking for better tools.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <SubmitToolDialog
                trigger={<Button size="lg" className="w-full md:w-auto">Submit or Sponsor a Tool</Button>}
              />
              <p className="text-xs text-muted-foreground">
                Featured placements & sponsored cards available.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
