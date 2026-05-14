import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowUpRight, Sparkles, Info, Calendar, Link2 } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getToolHref, hasApprovedAffiliate, type Tool } from "@/data/tools";
import { useCompare } from "@/lib/compare-context";

interface ToolCardProps {
  tool: Tool;
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function ToolCard({ tool }: ToolCardProps) {
  const { isSelected, toggle } = useCompare();
  const checked = isSelected(tool.id);
  const href = getToolHref(tool);
  const approvedAffiliate = hasApprovedAffiliate(tool);

  return (
    <Card className="tool-card relative flex flex-col border-border/60 bg-card">
      {(tool.featured || tool.sponsored) && (
        <div className="absolute right-3 top-3 flex gap-1.5">
          {tool.featured && (
            <Badge className="gap-1 bg-accent/15 text-accent border border-accent/30 hover:bg-accent/15">
              <Sparkles className="h-3 w-3" />
              Featured
            </Badge>
          )}
          {tool.sponsored && (
            <Badge className="rounded-full border border-amber-400/40 bg-amber-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-300 hover:bg-amber-400/10">
              Sponsored
            </Badge>
          )}
        </div>
      )}

      <CardContent className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface p-2">
            <img
              src={tool.logo}
              alt={`${tool.name} logo`}
              className="h-8 w-8 object-contain"
              loading="lazy"
            />
          </div>
          <div className="flex items-center gap-1.5">
            <Badge variant="secondary" className="text-xs font-normal">
              {tool.stage}
            </Badge>
            {tool.aiNative && (
              <Badge className="gap-1 border border-accent/30 bg-accent/10 px-2 text-[10px] font-medium uppercase tracking-wider text-accent hover:bg-accent/10">
                <Sparkles className="h-2.5 w-2.5" />
                AI-native
              </Badge>
            )}
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground">{tool.name}</h3>
          <p className="mt-1 text-xs font-medium text-accent">{tool.bestFor}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {tool.verdict}
          </p>

          <div className="mt-3 rounded-md border border-border/50 bg-surface/60 p-3">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Editorial note
            </p>
            <p className="mt-1 text-sm leading-relaxed text-surface-foreground">
              {tool.editorialNote}
            </p>
          </div>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {tool.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border/60 bg-surface px-2 py-0.5 text-[11px] text-surface-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              Last reviewed: {formatDate(tool.lastReviewed)}
            </span>
            {approvedAffiliate && (
              <span className="inline-flex items-center gap-1 rounded-sm bg-surface px-1.5 py-0.5 font-medium">
                <Link2 className="h-3 w-3" />
                Affiliate link
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-sm font-medium text-foreground">
            {tool.price === "Free" ? "Free" : `From ${tool.price}`}
          </span>
          <Button asChild size="sm" variant="secondary" className="gap-1.5">
            <a href={href} target="_blank" rel={approvedAffiliate ? "noopener noreferrer sponsored" : "noopener noreferrer"}>
              View Tool
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-between border-t border-border/40 pt-3">
          <label className="inline-flex cursor-pointer items-center gap-2 text-xs text-muted-foreground">
            <Checkbox
              checked={checked}
              onCheckedChange={() => toggle(tool.id)}
              aria-label={`Select ${tool.name} to compare`}
            />
            Compare
          </label>

          <Popover>
            <PopoverTrigger asChild>
              <button className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground">
                <Info className="h-3 w-3" />
                Why we recommend it
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-72 text-sm leading-relaxed text-surface-foreground">
              {tool.whyRecommend}
            </PopoverContent>
          </Popover>
        </div>
      </CardContent>
    </Card>
  );
}
