import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import type { Tool } from "@/data/tools";

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Card className="tool-card flex flex-col border-border/60 bg-card">
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
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            {tool.verdict}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-sm font-medium text-accent">
            {tool.price === "Free" ? "Free" : `Starting at ${tool.price}`}
          </span>
          <Button asChild size="sm" variant="secondary" className="gap-1.5">
            <a href={tool.affiliateUrl} target="_blank" rel="noopener noreferrer">
              View Tool
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
