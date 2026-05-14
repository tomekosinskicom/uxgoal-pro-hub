import { Sparkles } from "lucide-react";
import { stages, type Stage } from "@/data/tools";

interface StageFilterProps {
  selected: Stage | "All";
  onSelect: (stage: Stage | "All") => void;
  aiOnly: boolean;
  onToggleAiOnly: () => void;
}

export function StageFilter({ selected, onSelect, aiOnly, onToggleAiOnly }: StageFilterProps) {
  const all: (Stage | "All")[] = ["All", ...stages];

  return (
    <div className="flex flex-wrap items-center gap-2">
      {all.map((stage) => (
        <button
          key={stage}
          onClick={() => onSelect(stage)}
          className={`filter-chip rounded-lg border px-4 py-2 text-sm font-medium ${
            selected === stage
              ? "border-accent bg-accent/10 text-accent"
              : "border-border bg-surface text-surface-foreground hover:bg-surface-hover"
          }`}
        >
          {stage}
        </button>
      ))}
      <button
        onClick={onToggleAiOnly}
        aria-pressed={aiOnly}
        className={`filter-chip ml-1 inline-flex items-center gap-1.5 rounded-lg border px-4 py-2 text-sm font-medium ${
          aiOnly
            ? "border-accent bg-accent/10 text-accent"
            : "border-border bg-surface text-surface-foreground hover:bg-surface-hover"
        }`}
      >
        <Sparkles className="h-3.5 w-3.5" />
        AI-native only
      </button>
    </div>
  );
}
