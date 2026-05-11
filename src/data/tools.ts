export type Category = "Research" | "Prototyping" | "Career" | "Productivity" | "AI";

export interface ToolFeatures {
  pricing: string;
  freeTier: string;
  bestUseCase: string;
  aiNative: string;
  learningCurve: string;
}

export interface Tool {
  id: string;
  name: string;
  logo: string;
  verdict: string;
  bestFor: string;
  price: string;
  priceValue: number; // monthly USD; 0 = free
  category: Category;
  tags: string[];
  affiliateUrl: string;
  whyRecommend: string;
  /** 1–2 sentence editorial note in the voice of "why this matters for AI-era designers" */
  editorialNote: string;
  /** ISO date — last time we reviewed this tool */
  lastReviewed: string;
  /** Whether this link is an affiliate link (shows inline tag on card) */
  affiliate?: boolean;
  featured?: boolean;
  sponsored?: boolean;
  /** Manual feature data for the comparison view */
  features: ToolFeatures;
}

export interface ExpertStack {
  id: string;
  name: string;
  tagline: string;
  emoji: string;
  whyItWorks: string;
  estimatedCost: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  bestFor: string;
  badge?: "Editor's Pick" | "Featured";
  tools: { name: string; reason: string }[];
}

const TODAY = "2026-05-01";

export const tools: Tool[] = [
  {
    id: "figma",
    name: "Figma",
    logo: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg",
    verdict: "The industry standard for collaborative interface design.",
    bestFor: "Best for collaborative interface design",
    price: "Free",
    priceValue: 0,
    category: "Prototyping",
    tags: ["Design", "Collaboration", "Prototyping"],
    affiliateUrl: "https://figma.com",
    whyRecommend: "Real-time collaboration, deep plugin ecosystem, and the de-facto handoff standard for engineering teams.",
    editorialNote: "If you're 1–5 years in, Figma fluency is table stakes — but it's the AI plugins built on top of it that now separate fast designers from average ones.",
    lastReviewed: TODAY,
    featured: true,
    features: { pricing: "Free / $15 per editor", freeTier: "Generous free tier", bestUseCase: "Production UI design", aiNative: "Via plugins (Make, Magician)", learningCurve: "Low" },
  },
  {
    id: "cursor",
    name: "Cursor",
    logo: "https://www.google.com/s2/favicons?domain=cursor.com&sz=128",
    verdict: "AI-first code editor that lets designers ship real prototypes.",
    bestFor: "Best for designers who code with AI",
    price: "$20/mo",
    priceValue: 20,
    category: "AI",
    tags: ["AI", "Coding", "Prototyping"],
    affiliateUrl: "https://cursor.com",
    whyRecommend: "Lets a designer turn a Figma idea into a working interactive prototype in an afternoon — without learning a framework.",
    editorialNote: "If you can prompt Cursor to build a working component, you're already operating one rung above designers stuck in static mockups.",
    lastReviewed: TODAY,
    affiliate: true,
    featured: true,
    features: { pricing: "Free / $20 / $40 pro", freeTier: "Limited completions", bestUseCase: "Designer-built prototypes", aiNative: "Yes — core product", learningCurve: "Medium" },
  },
  {
    id: "v0",
    name: "v0 by Vercel",
    logo: "https://www.google.com/s2/favicons?domain=v0.dev&sz=128",
    verdict: "Generate production-ready React UI from a single prompt or screenshot.",
    bestFor: "Best for prompt-to-UI prototyping",
    price: "$20/mo",
    priceValue: 20,
    category: "AI",
    tags: ["AI", "React", "Generative UI"],
    affiliateUrl: "https://v0.dev",
    whyRecommend: "The fastest path from idea to a working, copy-pasteable React component built on shadcn/Tailwind.",
    editorialNote: "Prompt-to-UI is becoming the new wireframe — designers who can iterate in v0 review their own work the way engineers do.",
    lastReviewed: TODAY,
    affiliate: true,
    features: { pricing: "Free / $20 premium", freeTier: "Daily generation credits", bestUseCase: "AI-native UI iteration", aiNative: "Yes — core product", learningCurve: "Low" },
  },
  {
    id: "figma-make",
    name: "Figma Make",
    logo: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg",
    verdict: "Figma's native AI tool for generating prototypes from prompts inside the canvas.",
    bestFor: "Best AI prototyping inside Figma",
    price: "Included",
    priceValue: 15,
    category: "AI",
    tags: ["AI", "Figma", "Prototyping"],
    affiliateUrl: "https://www.figma.com/make/",
    whyRecommend: "Generative AI that lives where you already work — no context-switching, no export/import dance.",
    editorialNote: "Make is Figma's signal that AI prototyping is core, not optional — get fluent with it now while it's still a differentiator.",
    lastReviewed: TODAY,
    features: { pricing: "Bundled with Figma plans", freeTier: "Limited prompts on free", bestUseCase: "Native Figma AI flows", aiNative: "Yes", learningCurve: "Low" },
  },
  {
    id: "magic-patterns",
    name: "Magic Patterns",
    logo: "https://www.google.com/s2/favicons?domain=magicpatterns.com&sz=128",
    verdict: "AI design system playground — generate, refine, and ship UI patterns from prompts.",
    bestFor: "Best for AI-generated design system pieces",
    price: "$24/mo",
    priceValue: 24,
    category: "AI",
    tags: ["AI", "Design system", "Components"],
    affiliateUrl: "https://magicpatterns.com",
    whyRecommend: "Bridges generated UI and your existing component library — better than starting from a blank canvas every time.",
    editorialNote: "Useful for the boring 80%: dashboards, settings pages, empty states. Ship the pattern, save your craft for what matters.",
    lastReviewed: TODAY,
    affiliate: true,
    features: { pricing: "Free / $24 pro", freeTier: "Limited generations", bestUseCase: "Pattern-level AI design", aiNative: "Yes", learningCurve: "Low" },
  },
  {
    id: "relume",
    name: "Relume",
    logo: "https://www.google.com/s2/favicons?domain=relume.io&sz=128",
    verdict: "AI sitemap and wireframe generator built on a huge component library.",
    bestFor: "Best for marketing site wireframes",
    price: "$30/mo",
    priceValue: 30,
    category: "AI",
    tags: ["AI", "Wireframes", "Sitemap"],
    affiliateUrl: "https://relume.io",
    whyRecommend: "From brief to full sitemap and wireframes in minutes — perfect for client work and side projects.",
    editorialNote: "Relume turns a slow planning week into a one-hour kickoff. Use it to free up time for higher-craft work.",
    lastReviewed: TODAY,
    affiliate: true,
    features: { pricing: "$30 starter / $48 pro", freeTier: "No (trial only)", bestUseCase: "Marketing site IA", aiNative: "Yes", learningCurve: "Low" },
  },
  {
    id: "framer-ai",
    name: "Framer AI",
    logo: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
    verdict: "AI-assisted website building with production-quality output.",
    bestFor: "Best for AI-built production sites",
    price: "$15/mo",
    priceValue: 15,
    category: "AI",
    tags: ["AI", "No-code", "Web"],
    affiliateUrl: "https://framer.com",
    whyRecommend: "Closest no-code tool to real production output, now with AI generation and editing baked in.",
    editorialNote: "If your portfolio still lives on Notion, Framer + AI is the fastest credible upgrade.",
    lastReviewed: TODAY,
    affiliate: true,
    features: { pricing: "Free / $15+ paid", freeTier: "Yes (with Framer branding)", bestUseCase: "Portfolio + marketing sites", aiNative: "Yes", learningCurve: "Low" },
  },
  {
    id: "galileo",
    name: "Galileo AI",
    logo: "https://www.google.com/s2/favicons?domain=usegalileo.ai&sz=128",
    verdict: "Text-to-UI generator that produces editable, high-fidelity Figma designs.",
    bestFor: "Best for AI high-fidelity mockups",
    price: "$19/mo",
    priceValue: 19,
    category: "AI",
    tags: ["AI", "Figma", "High-fidelity"],
    affiliateUrl: "https://usegalileo.ai",
    whyRecommend: "On-brand high-fidelity UI from a single prompt — saves hours on first drafts.",
    editorialNote: "Best for kicking off a new project. Generate, then ruthlessly edit — the prompt is the easy part.",
    lastReviewed: TODAY,
    features: { pricing: "$19/mo", freeTier: "Limited free", bestUseCase: "First-draft hi-fi mockups", aiNative: "Yes", learningCurve: "Low" },
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    logo: "https://cdn.worldvectorlogo.com/logos/chatgpt-6.svg",
    verdict: "Brainstorm IA, draft microcopy, and synthesize research in minutes.",
    bestFor: "Best for synthesis & microcopy",
    price: "Free",
    priceValue: 0,
    category: "AI",
    tags: ["AI", "Writing", "Synthesis"],
    affiliateUrl: "https://chat.openai.com",
    whyRecommend: "The most flexible AI thinking partner for IA, microcopy, research synthesis, and prep.",
    editorialNote: "Your prompting skill in ChatGPT is now a portfolio-grade skill. Don't underestimate it just because everyone has access.",
    lastReviewed: TODAY,
    features: { pricing: "Free / $20 plus", freeTier: "Yes", bestUseCase: "Synthesis & writing", aiNative: "Yes", learningCurve: "Low" },
  },
  {
    id: "uizard",
    name: "Uizard",
    logo: "https://uizard.io/favicon.ico",
    verdict: "Generate wireframes and UI mockups from text prompts in seconds.",
    bestFor: "Best for AI wireframing",
    price: "$12/mo",
    priceValue: 12,
    category: "AI",
    tags: ["AI", "Wireframes", "Text-to-UI"],
    affiliateUrl: "https://uizard.io",
    whyRecommend: "Goes from a prompt or screenshot to editable wireframes in seconds — perfect for early ideation.",
    editorialNote: "A solid backup when v0 or Galileo aren't quite right — Uizard's screenshot-to-wireframe is its sneaky superpower.",
    lastReviewed: TODAY,
    affiliate: true,
    features: { pricing: "Free / $12 pro", freeTier: "Yes", bestUseCase: "Wireframe ideation", aiNative: "Yes", learningCurve: "Low" },
  },
  {
    id: "magician",
    name: "Magician for Figma",
    logo: "https://www.google.com/s2/favicons?domain=magician.design&sz=128",
    verdict: "AI-powered Figma plugin for icons, copywriting, and image generation.",
    bestFor: "Best AI plugin for Figma",
    price: "$8/mo",
    priceValue: 8,
    category: "AI",
    tags: ["AI", "Figma plugin", "Icons"],
    affiliateUrl: "https://magician.design",
    whyRecommend: "One plugin for icons, copy, and imagery — stays in your Figma flow.",
    editorialNote: "Cheap, fast, and lives inside Figma. The kind of small-tool fluency hiring managers notice.",
    lastReviewed: TODAY,
    features: { pricing: "$8/mo", freeTier: "Limited", bestUseCase: "In-canvas content gen", aiNative: "Yes", learningCurve: "Low" },
  },
  {
    id: "maze",
    name: "Maze",
    logo: "https://www.google.com/s2/favicons?domain=maze.co&sz=128",
    verdict: "Rapid unmoderated testing with AI synthesis built in.",
    bestFor: "Best for quick usability testing",
    price: "$99/mo",
    priceValue: 99,
    category: "Research",
    tags: ["Usability", "Testing", "AI synthesis"],
    affiliateUrl: "https://maze.co",
    whyRecommend: "Fastest way to validate a Figma prototype with real users — no recruiting headache.",
    editorialNote: "Mid-level designers who run their own quick studies stop being the 'design resource' and start being the decision-maker.",
    lastReviewed: TODAY,
    features: { pricing: "Free / $99+", freeTier: "Yes", bestUseCase: "Unmoderated usability", aiNative: "Yes (synthesis)", learningCurve: "Low" },
  },
  {
    id: "notion",
    name: "Notion",
    logo: "https://cdn.worldvectorlogo.com/logos/notion-2.svg",
    verdict: "All-in-one workspace for docs, wikis, project management, and AI writing.",
    bestFor: "Best for portfolios, case studies & docs",
    price: "Free",
    priceValue: 0,
    category: "Productivity",
    tags: ["Docs", "Wiki", "AI writing"],
    affiliateUrl: "https://notion.so",
    whyRecommend: "Flexible enough to be your case study repo, project tracker, and thinking surface.",
    editorialNote: "Notion AI now drafts decent case studies — pair it with your real artifacts and you have a portfolio in a weekend.",
    lastReviewed: TODAY,
    features: { pricing: "Free / $10+ paid", freeTier: "Generous", bestUseCase: "Case studies & docs", aiNative: "Yes (Notion AI)", learningCurve: "Low" },
  },
  {
    id: "linear",
    name: "Linear",
    logo: "https://www.google.com/s2/favicons?domain=linear.app&sz=128",
    verdict: "Streamlined issue tracking built for modern product teams.",
    bestFor: "Best for product team workflow",
    price: "Free",
    priceValue: 0,
    category: "Productivity",
    tags: ["Issues", "Roadmap", "Teams"],
    affiliateUrl: "https://linear.app",
    whyRecommend: "Speed-first issue tracker that designers actually enjoy using alongside engineers.",
    editorialNote: "Speaking Linear fluently is shorthand for 'I work like a senior designer who ships.'",
    lastReviewed: TODAY,
    features: { pricing: "Free / $8+", freeTier: "Yes", bestUseCase: "Product issue tracking", aiNative: "Partially", learningCurve: "Low" },
  },
  {
    id: "raycast",
    name: "Raycast",
    logo: "https://www.google.com/s2/favicons?domain=raycast.com&sz=128",
    verdict: "Supercharged launcher with built-in AI commands and clipboard memory.",
    bestFor: "Best for Mac power users",
    price: "Free",
    priceValue: 0,
    category: "Productivity",
    tags: ["Launcher", "Mac", "AI commands"],
    affiliateUrl: "https://raycast.com",
    whyRecommend: "Cuts dozens of micro-frictions out of your day — clipboard, snippets, AI, and window management.",
    editorialNote: "Custom AI commands in Raycast are a quiet productivity edge. Build one for your weekly status update and stop dreading Mondays.",
    lastReviewed: TODAY,
    features: { pricing: "Free / $10 pro", freeTier: "Generous", bestUseCase: "Daily Mac workflow", aiNative: "Yes (AI commands)", learningCurve: "Low" },
  },
  {
    id: "adplist",
    name: "ADPList",
    logo: "https://adplist.org/favicon.ico",
    verdict: "Connect with mentors and accelerate your design career.",
    bestFor: "Best for free 1:1 mentorship",
    price: "Free",
    priceValue: 0,
    category: "Career",
    tags: ["Mentorship", "Community", "Free"],
    affiliateUrl: "https://adplist.org",
    whyRecommend: "Thousands of senior mentors offering free sessions — unbeatable for career switchers and juniors.",
    editorialNote: "Pick mentors who are actually shipping AI-augmented work, not the ones giving the same 2018 portfolio review.",
    lastReviewed: TODAY,
    features: { pricing: "Free", freeTier: "Yes", bestUseCase: "1:1 mentor sessions", aiNative: "N/A", learningCurve: "Low" },
  },
  {
    id: "uxcel",
    name: "Uxcel",
    logo: "https://www.google.com/s2/favicons?domain=uxcel.com&sz=128",
    verdict: "Gamified UX skill assessments and learning for working designers.",
    bestFor: "Best for skill assessments",
    price: "$16/mo",
    priceValue: 16,
    category: "Career",
    tags: ["Learning", "Assessments", "Gamified"],
    affiliateUrl: "https://uxcel.com",
    whyRecommend: "Bite-sized lessons paired with assessments that benchmark you against the industry.",
    editorialNote: "Use the assessments as a forcing function — the score is less important than the gap it exposes in your workflow.",
    lastReviewed: TODAY,
    affiliate: true,
    features: { pricing: "Free / $16 pro", freeTier: "Yes", bestUseCase: "Skill benchmarking", aiNative: "Partially", learningCurve: "Low" },
  },
  {
    id: "designlab",
    name: "Designlab",
    logo: "https://www.google.com/s2/favicons?domain=designlab.com&sz=128",
    verdict: "Structured UX bootcamp with 1-on-1 mentorship and portfolio projects.",
    bestFor: "Best for structured career switching",
    price: "$399/mo",
    priceValue: 399,
    category: "Career",
    tags: ["Bootcamp", "Mentorship", "Portfolio"],
    affiliateUrl: "https://designlab.com",
    whyRecommend: "Structured curriculum + mentor accountability — the closest thing to a UX degree, online.",
    editorialNote: "Worth it if you need accountability. If you can self-direct, the AI-Native Stack will get you further for less.",
    lastReviewed: TODAY,
    affiliate: true,
    features: { pricing: "$399/mo cohorts", freeTier: "No", bestUseCase: "Career switching", aiNative: "Partially", learningCurve: "Medium" },
  },
  {
    id: "attention-insight",
    name: "Attention Insight",
    logo: "https://attentioninsight.com/favicon.ico",
    verdict: "Predict where users will look before launch with AI heatmaps.",
    bestFor: "Best for pre-launch attention testing",
    price: "$53/mo",
    priceValue: 53,
    category: "AI",
    tags: ["AI", "Heatmaps", "Pre-launch"],
    affiliateUrl: "https://attentioninsight.com",
    whyRecommend: "AI-predicted heatmaps let you validate visual hierarchy before you ship a user test.",
    editorialNote: "A nice 'show your work' tool — drop a predicted heatmap into a critique and watch the conversation level up.",
    lastReviewed: TODAY,
    sponsored: true,
    features: { pricing: "$53/mo", freeTier: "Limited trial", bestUseCase: "Pre-launch heatmaps", aiNative: "Yes", learningCurve: "Low" },
  },
];

export const expertStacks: ExpertStack[] = [
  {
    id: "ai-native-designer",
    name: "AI-Native Designer Stack",
    tagline: "The stack designers use when AI is part of every project.",
    emoji: "🤖",
    whyItWorks: "Each tool covers a stage AI now dominates — generation, prototyping, code, and synthesis. Together they let you ship in days what used to take weeks, without faking craft.",
    estimatedCost: "~$95/mo",
    difficulty: "Intermediate",
    bestFor: "Product designers, 1–5 yrs, going AI-first",
    badge: "Editor's Pick",
    tools: [
      { name: "Cursor", reason: "Designer-friendly AI code editor for real prototypes" },
      { name: "v0 by Vercel", reason: "Prompt-to-React UI in minutes" },
      { name: "Figma Make", reason: "AI prototyping native to your canvas" },
      { name: "Magic Patterns", reason: "Generate design-system-aware pattern variations" },
      { name: "Relume", reason: "AI sitemap + wireframes for kickoff" },
      { name: "Galileo AI", reason: "On-brand hi-fi mockups from a prompt" },
      { name: "Framer AI", reason: "Ship a portfolio or marketing site in a day" },
      { name: "ChatGPT", reason: "Synthesis, microcopy, and structured thinking" },
    ],
  },
  {
    id: "mid-level-promotion",
    name: "Mid-Level Promotion Stack",
    tagline: "Look like a senior. Ship like one.",
    emoji: "📈",
    whyItWorks: "Pairs AI-assisted research and prototyping with the workflow tools senior designers actually rely on. Less time on busywork, more on the artifacts that get you promoted.",
    estimatedCost: "~$45/mo",
    difficulty: "Intermediate",
    bestFor: "2–5 yr designers ready for the next level",
    tools: [
      { name: "Maze", reason: "Run your own studies with AI synthesis" },
      { name: "v0 by Vercel", reason: "Faster, more credible prototypes" },
      { name: "Notion", reason: "Polished case studies with Notion AI" },
      { name: "Linear", reason: "Speak fluent product team workflow" },
      { name: "Raycast", reason: "Custom AI commands for the boring stuff" },
      { name: "ChatGPT", reason: "Async critique partner that's always on" },
    ],
  },
  {
    id: "career-switcher",
    name: "Career Switcher Stack",
    tagline: "From zero to AI-ready in 90 days.",
    emoji: "🚀",
    whyItWorks: "Structured learning + free mentorship + the tools every modern team uses, sequenced so you build an AI-era portfolio, not a 2019 one.",
    estimatedCost: "~$16/mo (excl. bootcamp)",
    difficulty: "Beginner",
    bestFor: "Career switchers & juniors",
    tools: [
      { name: "Uxcel", reason: "Build foundational skills with assessments" },
      { name: "Designlab", reason: "Structured bootcamp with mentorship" },
      { name: "ADPList", reason: "Free 1:1 mentorship from senior designers" },
      { name: "Figma", reason: "The tool every team uses" },
      { name: "v0 by Vercel", reason: "Ship interactive portfolio pieces, not just JPGs" },
    ],
  },
];

export const categories: Category[] = ["AI", "Prototyping", "Research", "Career", "Productivity"];

// ---------------- Find My Stack quiz ----------------
export type QuizRole = "Junior Designer" | "Senior Designer" | "UX Researcher" | "Freelancer" | "Career Switcher" | "Design Lead";
export type QuizGoal = "Learn UX" | "Build portfolio" | "Run research" | "Prototype faster" | "Improve workflow" | "Use AI in design";
export type QuizBudget = "Free" | "Under $20/mo" | "Team budget" | "Enterprise";

export const quizRoles: QuizRole[] = ["Junior Designer", "Senior Designer", "UX Researcher", "Freelancer", "Career Switcher", "Design Lead"];
export const quizGoals: QuizGoal[] = ["Learn UX", "Build portfolio", "Run research", "Prototype faster", "Improve workflow", "Use AI in design"];
export const quizBudgets: QuizBudget[] = ["Free", "Under $20/mo", "Team budget", "Enterprise"];

export interface RecommendedStack {
  title: string;
  explanation: string;
  toolIds: string[];
}

export function recommendStack(role: QuizRole, goal: QuizGoal, budget: QuizBudget): RecommendedStack {
  const maxPrice =
    budget === "Free" ? 0 :
    budget === "Under $20/mo" ? 20 :
    budget === "Team budget" ? 100 : Infinity;

  let preferredCategories: Category[] = ["AI", "Prototyping", "Productivity"];
  if (goal === "Run research" || role === "UX Researcher") preferredCategories = ["Research", "AI", "Productivity"];
  else if (goal === "Use AI in design") preferredCategories = ["AI", "Prototyping", "Productivity"];
  else if (goal === "Learn UX" || role === "Career Switcher") preferredCategories = ["Career", "AI", "Prototyping"];
  else if (goal === "Build portfolio") preferredCategories = ["AI", "Prototyping", "Career"];

  const eligible = tools.filter((t) => t.priceValue <= maxPrice);
  const picked: Tool[] = [];
  for (const cat of preferredCategories) {
    const inCat = eligible.filter((t) => t.category === cat && !picked.find((p) => p.id === t.id));
    picked.push(...inCat.slice(0, 2));
    if (picked.length >= 5) break;
  }
  for (const t of eligible) {
    if (picked.length >= 5) break;
    if (!picked.find((p) => p.id === t.id)) picked.push(t);
  }
  const finalPicks = picked.slice(0, 5);

  return {
    title: `Recommended stack for a ${role.toLowerCase()} who wants to ${goal.toLowerCase()}`,
    explanation: `Built around your ${budget.toLowerCase()} budget and your goal to ${goal.toLowerCase()}. These ${finalPicks.length} tools cover the workflow end-to-end without overlap.`,
    toolIds: finalPicks.map((t) => t.id),
  };
}

// ---------------- Changelog entries ----------------
export interface ChangelogEntry {
  id: string;
  date: string; // ISO
  title: string;
  body: string;
}

export const changelog: ChangelogEntry[] = [
  {
    id: "may-2026",
    date: "2026-05-01",
    title: "Added Figma Make, refreshed Cursor pricing, launched the AI-Native Stack",
    body: "Three new AI tools added to the directory, the AI-Native Designer Stack is now our flagship recommendation, and we re-reviewed every tool's pricing as of May 1.",
  },
  {
    id: "apr-2026",
    date: "2026-04-12",
    title: "New diagnostic: AI Readiness Check",
    body: "A 2-minute self-assessment that scores you and recommends a starting stack — replacing the older 3-question quiz as our default entry point.",
  },
  {
    id: "mar-2026",
    date: "2026-03-08",
    title: "Editorial notes added to every tool card",
    body: "Each tool now ships with a short editorial take in the voice of an AI-era designer, so you know why it matters — not just what it does.",
  },
  {
    id: "feb-2026",
    date: "2026-02-02",
    title: "Mid-Level Promotion Stack added",
    body: "A new curated stack for designers with 2–5 years of experience who want to operate one rung higher.",
  },
];

// ---------------- Testimonials ----------------
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Maya Chen",
    role: "Product Designer, 3 yrs",
    quote: "I stopped doom-scrolling AI hot takes and just installed the AI-Native Stack. Six weeks later I prototyped a feature in two days that used to take a sprint.",
  },
  {
    id: "t2",
    name: "Jordan Reyes",
    role: "Product Designer, 2 yrs",
    quote: "The readiness check told me exactly where I was behind — and gave me three tools to fix it. No fluff, no overwhelm.",
  },
  {
    id: "t3",
    name: "Priya Iyer",
    role: "Product Designer, 4 yrs",
    quote: "UXGoal is the only place that talks to mid-level designers like adults. Most resources either condescend or assume you're a director.",
  },
];

// ---------------- AI Readiness check ----------------
export interface ReadinessQuestion {
  id: string;
  prompt: string;
  options: { label: string; score: number }[];
}

export const readinessQuestions: ReadinessQuestion[] = [
  {
    id: "ai-usage",
    prompt: "How often do you use AI tools in your day-to-day design work?",
    options: [
      { label: "Almost never", score: 0 },
      { label: "Occasionally — for writing or brainstorming", score: 4 },
      { label: "Regularly — at least weekly across multiple tools", score: 8 },
      { label: "Constantly — AI is in nearly every workflow", score: 10 },
    ],
  },
  {
    id: "prompting",
    prompt: "How confident are you writing prompts that get usable design output?",
    options: [
      { label: "I mostly take the first answer", score: 0 },
      { label: "I iterate but it feels like guessing", score: 4 },
      { label: "I have go-to patterns that work", score: 8 },
      { label: "I write structured prompts and chain them", score: 10 },
    ],
  },
  {
    id: "ai-research",
    prompt: "Have you used AI to synthesize research (interviews, transcripts, surveys)?",
    options: [
      { label: "Never tried", score: 0 },
      { label: "Once or twice, mixed results", score: 4 },
      { label: "Regularly — it saves me hours", score: 8 },
      { label: "It's how I do all my synthesis now", score: 10 },
    ],
  },
  {
    id: "ai-prototyping",
    prompt: "How do you currently make interactive prototypes?",
    options: [
      { label: "Static Figma frames only", score: 0 },
      { label: "Figma prototype mode", score: 3 },
      { label: "Figma Make, v0, or similar AI tools", score: 8 },
      { label: "I prompt working code in Cursor or v0", score: 10 },
    ],
  },
  {
    id: "portfolio",
    prompt: "Does your portfolio show AI-augmented work?",
    options: [
      { label: "No — and I'm not sure how to talk about it", score: 0 },
      { label: "Mentioned briefly", score: 4 },
      { label: "One case study explicitly covers AI workflow", score: 8 },
      { label: "Multiple pieces show AI as a core part of my process", score: 10 },
    ],
  },
  {
    id: "willingness",
    prompt: "How willing are you to rebuild your workflow around AI tools?",
    options: [
      { label: "Skeptical — I'd rather wait it out", score: 0 },
      { label: "Curious but cautious", score: 4 },
      { label: "Actively experimenting", score: 8 },
      { label: "Already mid-rebuild", score: 10 },
    ],
  },
  {
    id: "role",
    prompt: "What's your current role?",
    options: [
      { label: "Career switcher / pre-first-role", score: 0 },
      { label: "Junior Product Designer (0–2 yrs)", score: 3 },
      { label: "Mid-level Product Designer (2–5 yrs)", score: 6 },
      { label: "Senior+ Product Designer (5+ yrs)", score: 10 },
    ],
  },
  {
    id: "experience",
    prompt: "How many years have you been working in design?",
    options: [
      { label: "Under 1", score: 0 },
      { label: "1–2", score: 4 },
      { label: "3–5", score: 8 },
      { label: "5+", score: 10 },
    ],
  },
  {
    id: "code",
    prompt: "How comfortable are you reading or tweaking code (HTML, CSS, JSX)?",
    options: [
      { label: "Not at all", score: 0 },
      { label: "Can read it, can't edit it", score: 4 },
      { label: "Can edit it with AI help", score: 8 },
      { label: "Confident — I ship small features myself", score: 10 },
    ],
  },
  {
    id: "critique",
    prompt: "Do you use AI as a critique or sparring partner on your work?",
    options: [
      { label: "Never", score: 0 },
      { label: "Sometimes for writing", score: 4 },
      { label: "Regularly for design feedback", score: 8 },
      { label: "Daily — it's part of my design loop", score: 10 },
    ],
  },
];

export interface ReadinessResult {
  score: number;
  label: "AI-Curious" | "AI-Adopter" | "AI-Native";
  blurb: string;
  recommendedToolIds: string[];
  recommendedStackId: string;
}

export function scoreReadiness(answers: Record<string, number>): ReadinessResult {
  const totalRaw = Object.values(answers).reduce((a, b) => a + b, 0);
  const max = readinessQuestions.length * 10;
  const score = Math.round((totalRaw / max) * 100);

  let label: ReadinessResult["label"];
  let blurb: string;
  let recommendedStackId: string;
  let recommendedToolIds: string[];

  if (score < 40) {
    label = "AI-Curious";
    blurb = "You're aware of the shift but not yet operating in it. The next 90 days matter — start with foundational AI workflows and one production tool you can show on your portfolio.";
    recommendedStackId = "career-switcher";
    recommendedToolIds = ["chatgpt", "v0", "notion"];
  } else if (score < 75) {
    label = "AI-Adopter";
    blurb = "You're using AI but in scattered places. Time to consolidate: pick a small stack you commit to, and start showing AI-augmented work in your portfolio.";
    recommendedStackId = "mid-level-promotion";
    recommendedToolIds = ["v0", "maze", "raycast"];
  } else {
    label = "AI-Native";
    blurb = "You're already operating in the AI era. Your edge is depth: pick the highest-leverage tools, ship more, and write about your process — that's what hiring managers want to see.";
    recommendedStackId = "ai-native-designer";
    recommendedToolIds = ["cursor", "figma-make", "magic-patterns"];
  }

  return { score, label, blurb, recommendedToolIds, recommendedStackId };
}
