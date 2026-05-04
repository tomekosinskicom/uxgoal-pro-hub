import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { SubmitToolDialog } from "@/components/SubmitToolDialog";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-foreground">
            UX<span className="text-accent">Goal</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#directory" className="transition-colors hover:text-foreground">Tools</a>
          <a href="#quiz" className="transition-colors hover:text-foreground">Find My Stack</a>
          <a href="#stacks" className="transition-colors hover:text-foreground">Expert Stacks</a>
          <a href="#sponsor" className="transition-colors hover:text-foreground">Sponsor</a>
        </nav>

        <SubmitToolDialog
          trigger={
            <Button size="sm" className="gap-2">
              <Send className="h-3.5 w-3.5" />
              Submit a Tool
            </Button>
          }
        />
      </div>
    </header>
  );
}

