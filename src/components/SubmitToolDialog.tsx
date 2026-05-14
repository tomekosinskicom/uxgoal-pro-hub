import { useState, type ReactNode } from "react";
import { z } from "zod";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { stages, type Stage } from "@/data/tools";
import { supabase } from "@/integrations/supabase/client";

const submitSchema = z.object({
  name: z.string().trim().min(1, "Tool name is required").max(80, "Max 80 characters"),
  url: z.string().trim().url("Enter a valid URL").max(300, "Max 300 characters"),
  stage: z.enum(["Research", "Design", "Prototype", "Test", "Ship", "Career"] as const, {
    errorMap: () => ({ message: "Pick a stage" }),
  }),
  aiNative: z.boolean().default(false),
  description: z
    .string()
    .trim()
    .min(20, "At least 20 characters")
    .max(500, "Max 500 characters"),
  email: z
    .string()
    .trim()
    .email("Enter a valid email")
    .max(255)
    .optional()
    .or(z.literal("")),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof submitSchema>, string>>;

interface SubmitToolDialogProps {
  trigger: ReactNode;
}

export function SubmitToolDialog({ trigger }: SubmitToolDialogProps) {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [form, setForm] = useState({
    name: "",
    url: "",
    stage: "" as Stage | "",
    aiNative: false,
    description: "",
    email: "",
  });

  const reset = () => {
    setForm({ name: "", url: "", stage: "", aiNative: false, description: "", email: "" });
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = submitSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    const payload = result.data;
    const { error } = await supabase.from("tool_submissions").insert({
      name: payload.name,
      url: payload.url,
      category: payload.aiNative ? `${payload.stage} · AI-native` : payload.stage,
      description: payload.description,
      email: payload.email ? payload.email : null,
    });
    setSubmitting(false);

    if (error) {
      toast.error("Couldn't submit", {
        description: "Something went wrong on our side. Please try again in a moment.",
      });
      return;
    }

    toast.success("Tool submitted!", {
      description: "Thanks — we'll review it and add it to the directory soon.",
    });
    reset();
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) reset();
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle>Submit a Tool</DialogTitle>
          <DialogDescription>
            Recommend a tool for the UXGoal directory. We review every submission.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="tool-name">Tool name</Label>
            <Input
              id="tool-name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Figma"
              maxLength={80}
            />
            {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="tool-url">Website URL</Label>
            <Input
              id="tool-url"
              type="url"
              value={form.url}
              onChange={(e) => setForm({ ...form, url: e.target.value })}
              placeholder="https://example.com"
              maxLength={300}
            />
            {errors.url && <p className="text-xs text-destructive">{errors.url}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="tool-stage">Stage</Label>
            <Select
              value={form.stage}
              onValueChange={(value) => setForm({ ...form, stage: value as Stage })}
            >
              <SelectTrigger id="tool-stage">
                <SelectValue placeholder="Pick a stage" />
              </SelectTrigger>
              <SelectContent>
                {stages.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.stage && <p className="text-xs text-destructive">{errors.stage}</p>}
          </div>

          <label className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground">
            <input
              type="checkbox"
              checked={form.aiNative}
              onChange={(e) => setForm({ ...form, aiNative: e.target.checked })}
              className="h-4 w-4"
            />
            AI-native (the tool's core value depends on AI)
          </label>

          <div className="space-y-2">
            <Label htmlFor="tool-description">Why it's worth including</Label>
            <Textarea
              id="tool-description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder="What does it do well? Who is it for?"
              rows={4}
              maxLength={500}
            />
            {errors.description && (
              <p className="text-xs text-destructive">{errors.description}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="tool-email">Your email (optional)</Label>
            <Input
              id="tool-email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@domain.com"
              maxLength={255}
            />
            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
          </div>

          <DialogFooter>
            <Button type="submit" disabled={submitting} className="w-full sm:w-auto">
              {submitting ? "Submitting…" : "Submit tool"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
