import { createContext, useContext, useState, type ReactNode } from "react";

interface CompareCtx {
  selected: string[];
  toggle: (id: string) => void;
  clear: () => void;
  isSelected: (id: string) => boolean;
}

const Ctx = createContext<CompareCtx | null>(null);

export function CompareProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<string[]>([]);
  const toggle = (id: string) =>
    setSelected((cur) =>
      cur.includes(id) ? cur.filter((x) => x !== id) : cur.length >= 4 ? cur : [...cur, id]
    );
  const clear = () => setSelected([]);
  const isSelected = (id: string) => selected.includes(id);
  return <Ctx.Provider value={{ selected, toggle, clear, isSelected }}>{children}</Ctx.Provider>;
}

export function useCompare() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCompare must be used inside CompareProvider");
  return ctx;
}
