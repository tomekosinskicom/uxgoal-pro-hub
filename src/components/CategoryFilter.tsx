import { categories, type Category } from "@/data/tools";

interface CategoryFilterProps {
  selected: Category | "All";
  onSelect: (category: Category | "All") => void;
}

export function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  const all: (Category | "All")[] = ["All", ...categories];

  return (
    <div className="flex flex-wrap gap-2">
      {all.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`filter-chip rounded-lg border px-4 py-2 text-sm font-medium ${
            selected === cat
              ? "border-accent bg-accent/10 text-accent"
              : "border-border bg-surface text-surface-foreground hover:bg-surface-hover"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
