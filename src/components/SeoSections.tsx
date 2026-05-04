import { tools, type Category } from "@/data/tools";
import { ToolCard } from "@/components/ToolCard";

interface Block {
  id: string;
  h2: string;
  copy: string;
  category: Category;
}

const blocks: Block[] = [
  {
    id: "best-ai-ux",
    h2: "Best AI tools for UX designers",
    copy: "AI is reshaping how UX teams ideate, wireframe, and synthesize research. These picks help you generate first drafts, predict user attention, and stay in your design flow without trading craft for speed.",
    category: "AI",
  },
  {
    id: "best-research",
    h2: "Best UX research tools",
    copy: "From unmoderated usability tests to centralized repositories, these tools cover qualitative and quantitative research at any scale — so insights stop getting lost in Slack threads.",
    category: "Research",
  },
  {
    id: "best-career",
    h2: "Best tools for UX career switchers",
    copy: "Breaking into UX is a portfolio game. These tools combine structured learning, real mentorship, and the design environment hiring managers expect to see in your work.",
    category: "Career",
  },
];

export function SeoSections() {
  return (
    <div className="border-t border-border/50 bg-background">
      {blocks.map((block) => {
        const picks = tools.filter((t) => t.category === block.category).slice(0, 3);
        return (
          <section key={block.id} id={block.id} className="mx-auto max-w-6xl px-6 py-20">
            <div className="mb-8 max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                {block.h2}
              </h2>
              <p className="mt-3 text-muted-foreground">{block.copy}</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {picks.map((t) => (
                <ToolCard key={t.id} tool={t} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
