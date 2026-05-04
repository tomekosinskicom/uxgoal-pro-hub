import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkles, Info } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import type { Tool } from "@/data/tools";

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
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
            <Badge variant="outline" className="text-[10px] uppercase tracking-wider text-muted-foreground">
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
          <Badge variant="secondary" className="text-xs font-normal">
            {tool.category}
          </Badge>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground">{tool.name}</h3>
          <p className="mt-1 text-xs font-medium text-accent">{tool.bestFor}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {tool.verdict}
          </p>

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
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-sm font-medium text-foreground">
            {tool.price === "Free" ? "Free" : `From ${tool.price}`}
          </span>
          <Button asChild size="sm" variant="secondary" className="gap-1.5">
            <a href={tool.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored">
              View Tool
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </Button>
        </div>

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
      </CardContent>
    </Card>
  );
}
