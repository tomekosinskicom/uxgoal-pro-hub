export type Category = "Research" | "Prototyping" | "Career" | "Productivity" | "AI";

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
  featured?: boolean;
  sponsored?: boolean;
}

export interface ExpertStack {
  id: string;
  name: string;
  description: string;
  emoji: string;
  whyItWorks: string;
  estimatedCost: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  bestFor: string;
  tools: { name: string; reason: string }[];
}

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
    whyRecommend: "Real-time collaboration, a deep plugin ecosystem, and the de-facto standard handoff for engineering teams.",
    featured: true,
  },
  {
    id: "maze",
    name: "Maze",
    logo: "https://cdn.worldvectorlogo.com/logos/maze-1.svg",
    verdict: "Rapid unmoderated testing that integrates directly with your prototypes.",
    bestFor: "Best for quick usability testing",
    price: "$99/mo",
    priceValue: 99,
    category: "Research",
    tags: ["Usability", "Testing", "Unmoderated"],
    affiliateUrl: "https://maze.co",
    whyRecommend: "Fastest way to validate a Figma prototype with real users — no recruiting headache, structured insights out of the box.",
  },
  {
    id: "notion",
    name: "Notion",
    logo: "https://cdn.worldvectorlogo.com/logos/notion-2.svg",
    verdict: "All-in-one workspace for docs, wikis, and project management.",
    bestFor: "Best for research repositories & docs",
    price: "Free",
    priceValue: 0,
    category: "Productivity",
    tags: ["Docs", "Wiki", "Workspace"],
    affiliateUrl: "https://notion.so",
    whyRecommend: "Flexible enough to be your research repo, project tracker, and client portal all in one.",
  },
  {
    id: "framer",
    name: "Framer",
    logo: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
    verdict: "Ship production-quality sites with advanced interactions, no code.",
    bestFor: "Best for shipping production sites no-code",
    price: "$5/mo",
    priceValue: 5,
    category: "Prototyping",
    tags: ["No-code", "Web", "Animation"],
    affiliateUrl: "https://framer.com",
    whyRecommend: "The closest no-code tool to real production output, with motion and CMS built in.",
  },
  {
    id: "hotjar",
    name: "Hotjar",
    logo: "https://cdn.worldvectorlogo.com/logos/hotjar.svg",
    verdict: "Heatmaps and session recordings to understand real user behavior.",
    bestFor: "Best for behavioral analytics",
    price: "Free",
    priceValue: 0,
    category: "Research",
    tags: ["Heatmaps", "Recordings", "Analytics"],
    affiliateUrl: "https://hotjar.com",
    whyRecommend: "Generous free tier and the easiest way to see exactly how users interact with a live product.",
  },
  {
    id: "linear",
    name: "Linear",
    logo: "https://cdn.worldvectorlogo.com/logos/linear-2.svg",
    verdict: "Streamlined issue tracking built for modern product teams.",
    bestFor: "Best for product team workflow",
    price: "Free",
    priceValue: 0,
    category: "Productivity",
    tags: ["Issues", "Roadmap", "Teams"],
    affiliateUrl: "https://linear.app",
    whyRecommend: "Speed-first issue tracker that designers actually enjoy using alongside engineers.",
  },
  {
    id: "adplist",
    name: "ADPList",
    logo: "https://adplist.org/favicon.ico",
    verdict: "Connect with mentors and accelerate your UX career growth.",
    bestFor: "Best for free 1:1 mentorship",
    price: "Free",
    priceValue: 0,
    category: "Career",
    tags: ["Mentorship", "Community", "Free"],
    affiliateUrl: "https://adplist.org",
    whyRecommend: "Thousands of senior mentors offering free sessions — unbeatable for career switchers and juniors.",
  },
  {
    id: "uxcel",
    name: "Uxcel",
    logo: "https://app.uxcel.com/favicon.ico",
    verdict: "Gamified UX skill assessments and learning for professionals.",
    bestFor: "Best for skill assessments",
    price: "$16/mo",
    priceValue: 16,
    category: "Career",
    tags: ["Learning", "Assessments", "Gamified"],
    affiliateUrl: "https://uxcel.com",
    whyRecommend: "Bite-sized lessons paired with assessments that benchmark you against the industry.",
  },
  {
    id: "dovetail",
    name: "Dovetail",
    logo: "https://dovetail.com/favicon.ico",
    verdict: "Centralize qualitative research data with powerful analysis tools.",
    bestFor: "Best for research repositories at scale",
    price: "$29/mo",
    priceValue: 29,
    category: "Research",
    tags: ["Repository", "Qualitative", "Analysis"],
    affiliateUrl: "https://dovetail.com",
    whyRecommend: "Purpose-built for research ops — tagging, themes, and AI synthesis across every study.",
  },
  {
    id: "whimsical",
    name: "Whimsical",
    logo: "https://whimsical.com/favicon.ico",
    verdict: "Beautiful flowcharts, wireframes, and mind maps in seconds.",
    bestFor: "Best for fast wireframes & flows",
    price: "Free",
    priceValue: 0,
    category: "Prototyping",
    tags: ["Wireframes", "Flowcharts", "Mind maps"],
    affiliateUrl: "https://whimsical.com",
    whyRecommend: "Lightning-fast for IA work and user flows when Figma is overkill.",
  },
  {
    id: "raycast",
    name: "Raycast",
    logo: "https://raycast.com/favicon.ico",
    verdict: "Supercharged launcher that replaces half your productivity stack.",
    bestFor: "Best for Mac power users",
    price: "Free",
    priceValue: 0,
    category: "Productivity",
    tags: ["Launcher", "Mac", "Automation"],
    affiliateUrl: "https://raycast.com",
    whyRecommend: "Cuts dozens of micro-frictions out of your day — clipboard, snippets, AI, and window management.",
  },
  {
    id: "designlab",
    name: "Designlab",
    logo: "https://designlab.com/favicon.ico",
    verdict: "Structured UX bootcamp with 1-on-1 mentorship and portfolio projects.",
    bestFor: "Best for structured career switching",
    price: "$399/mo",
    priceValue: 399,
    category: "Career",
    tags: ["Bootcamp", "Mentorship", "Portfolio"],
    affiliateUrl: "https://designlab.com",
    whyRecommend: "Structured curriculum + mentor accountability — the closest thing to a UX degree, online.",
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
    featured: true,
  },
  {
    id: "galileo",
    name: "Galileo AI",
    logo: "https://www.usegalileo.ai/favicon.ico",
    verdict: "Text-to-UI generator that produces editable, high-fidelity Figma designs.",
    bestFor: "Best for AI high-fidelity mockups",
    price: "$19/mo",
    priceValue: 19,
    category: "AI",
    tags: ["AI", "Figma", "High-fidelity"],
    affiliateUrl: "https://usegalileo.ai",
    whyRecommend: "High-fidelity, on-brand UI from a single prompt — saves hours on first drafts.",
  },
  {
    id: "magician",
    name: "Magician for Figma",
    logo: "https://magician.design/favicon.ico",
    verdict: "AI-powered Figma plugin for icons, copywriting, and image generation.",
    bestFor: "Best AI plugin for Figma",
    price: "$8/mo",
    priceValue: 8,
    category: "AI",
    tags: ["AI", "Figma plugin", "Icons"],
    affiliateUrl: "https://magician.design",
    whyRecommend: "One plugin for icons, copy, and imagery — stays in your Figma flow.",
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
    whyRecommend: "AI-predicted heatmaps let you validate visual hierarchy before you ship a single user test.",
    sponsored: true,
  },
];

export const expertStacks: ExpertStack[] = [
  {
    id: "solo-freelancer",
    name: "The Solo Freelancer Stack",
    description: "Everything you need to run a one-person UX studio.",
    emoji: "🎯",
    whyItWorks: "Combines design, ops, and validation in four tools — no overhead, no team licenses.",
    estimatedCost: "~$5/mo",
    difficulty: "Beginner",
    bestFor: "Freelancers & solo consultants",
    tools: [
      { name: "Figma", reason: "Design and prototype in one tool" },
      { name: "Notion", reason: "Client docs, invoices, and project tracking" },
      { name: "Maze", reason: "Quick usability tests to validate decisions" },
      { name: "Raycast", reason: "Speed up every workflow on your Mac" },
    ],
  },
  {
    id: "enterprise-research",
    name: "The Enterprise Research Stack",
    description: "For research teams running complex, multi-study programs.",
    emoji: "🔬",
    whyItWorks: "Pairs a central repository with both qualitative and quantitative coverage at team scale.",
    estimatedCost: "~$130/mo per seat",
    difficulty: "Advanced",
    bestFor: "Research teams & ResearchOps leads",
    tools: [
      { name: "Dovetail", reason: "Central repository for all research insights" },
      { name: "Maze", reason: "Scale unmoderated testing across teams" },
      { name: "Hotjar", reason: "Quantitative behavior data at scale" },
      { name: "Notion", reason: "Collaborative research ops documentation" },
    ],
  },
  {
    id: "career-switcher",
    name: "The Career Switcher Stack",
    description: "Break into UX design with the right learning tools.",
    emoji: "🚀",
    whyItWorks: "Structured learning + free mentorship + the tool every team uses, sequenced for fastest portfolio output.",
    estimatedCost: "~$16/mo (excl. bootcamp)",
    difficulty: "Beginner",
    bestFor: "Career switchers & juniors",
    tools: [
      { name: "Uxcel", reason: "Build foundational skills with assessments" },
      { name: "Designlab", reason: "Structured bootcamp with mentorship" },
      { name: "ADPList", reason: "Free mentorship from industry experts" },
      { name: "Figma", reason: "Learn the tool every team uses" },
    ],
  },
];

export const categories: Category[] = ["Research", "Prototyping", "AI", "Career", "Productivity"];

// Quiz options
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

  let preferredCategories: Category[] = ["Prototyping", "Productivity"];
  if (goal === "Run research" || role === "UX Researcher") preferredCategories = ["Research", "AI", "Productivity"];
  else if (goal === "Use AI in design") preferredCategories = ["AI", "Prototyping", "Productivity"];
  else if (goal === "Learn UX" || role === "Career Switcher") preferredCategories = ["Career", "Prototyping", "Productivity"];
  else if (goal === "Build portfolio") preferredCategories = ["Prototyping", "Career", "AI"];
  else if (goal === "Prototype faster") preferredCategories = ["Prototyping", "AI", "Productivity"];
  else if (goal === "Improve workflow") preferredCategories = ["Productivity", "AI", "Prototyping"];

  const eligible = tools.filter((t) => t.priceValue <= maxPrice);
  const picked: Tool[] = [];
  for (const cat of preferredCategories) {
    const inCat = eligible.filter((t) => t.category === cat && !picked.find((p) => p.id === t.id));
    picked.push(...inCat.slice(0, 2));
    if (picked.length >= 5) break;
  }
  // pad
  for (const t of eligible) {
    if (picked.length >= 5) break;
    if (!picked.find((p) => p.id === t.id)) picked.push(t);
  }
  const finalPicks = picked.slice(0, 5);

  return {
    title: `Recommended stack for a ${role.toLowerCase()} who wants to ${goal.toLowerCase()}`,
    explanation: `Built around your ${budget.toLowerCase()} budget and your goal to ${goal.toLowerCase()}. These ${finalPicks.length} tools cover the workflow end-to-end without redundant overlap.`,
    toolIds: finalPicks.map((t) => t.id),
  };
}
