import { useState, type FormEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface NewsletterSectionProps {
  source?: string;
  title?: string;
  description?: string;
}

export function NewsletterSection({
  source = "homepage",
  title = "The AI-era designer roadmap, in your inbox",
  description = "One short editorial email a week: new tools worth your time, AI workflows that actually work, and the skills mid-level designers need next.",
}: NewsletterSectionProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!/^\S+@\S+\.\S+$/.test(trimmed)) {
      toast.error("Please enter a valid email");
      return;
    }
    setLoading(true);
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email: trimmed, source });
    setLoading(false);

    if (error) {
      if (error.code === "23505") {
        setEmail("");
        toast.success("You're already on the list!", { description: "We'll keep you posted." });
        return;
      }
      toast.error("Couldn't subscribe", { description: "Please try again in a moment." });
      return;
    }

    setEmail("");
    toast.success("You're in!", { description: "Check your inbox for a confirmation soon." });
  };

  return (
    <section id="newsletter" className="mx-auto max-w-6xl px-6 py-20">
      <Card className="border-border/60 bg-card">
        <CardContent className="grid gap-8 p-8 md:grid-cols-[1.2fr_1fr] md:items-center md:p-12">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface px-3 py-1 text-xs font-medium text-surface-foreground">
              <Mail className="h-3.5 w-3.5 text-accent" />
              Newsletter
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">{title}</h2>
            <p className="mt-3 text-muted-foreground">{description}</p>
          </div>
          <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 bg-surface"
              required
            />
            <Button type="submit" size="lg" disabled={loading}>
              {loading ? "Joining…" : "Join free"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
