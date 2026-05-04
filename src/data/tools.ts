export type Category = "Research" | "Prototyping" | "Career" | "Productivity" | "AI";

export interface Tool {
  id: string;
  name: string;
  logo: string;
  verdict: string;
  price: string;
  category: Category;
  affiliateUrl: string;
}

export interface ExpertStack {
  id: string;
  name: string;
  description: string;
  emoji: string;
  tools: { name: string; reason: string }[];
}

export const tools: Tool[] = [
  {
    id: "figma",
    name: "Figma",
    logo: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg",
    verdict: "The industry standard for collaborative interface design.",
    price: "Free",
    category: "Prototyping",
    affiliateUrl: "#",
  },
  {
    id: "maze",
    name: "Maze",
    logo: "https://cdn.worldvectorlogo.com/logos/maze-1.svg",
    verdict: "Rapid unmoderated testing that integrates directly with your prototypes.",
    price: "$99/mo",
    category: "Research",
    affiliateUrl: "#",
  },
  {
    id: "notion",
    name: "Notion",
    logo: "https://cdn.worldvectorlogo.com/logos/notion-2.svg",
    verdict: "All-in-one workspace for docs, wikis, and project management.",
    price: "Free",
    category: "Productivity",
    affiliateUrl: "#",
  },
  {
    id: "framer",
    name: "Framer",
    logo: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
    verdict: "Ship production-quality sites with advanced interactions, no code.",
    price: "$5/mo",
    category: "Prototyping",
    affiliateUrl: "#",
  },
  {
    id: "hotjar",
    name: "Hotjar",
    logo: "https://cdn.worldvectorlogo.com/logos/hotjar.svg",
    verdict: "Heatmaps and session recordings to understand real user behavior.",
    price: "Free",
    category: "Research",
    affiliateUrl: "#",
  },
  {
    id: "linear",
    name: "Linear",
    logo: "https://cdn.worldvectorlogo.com/logos/linear-2.svg",
    verdict: "Streamlined issue tracking built for modern product teams.",
    price: "Free",
    category: "Productivity",
    affiliateUrl: "#",
  },
  {
    id: "adplist",
    name: "ADPList",
    logo: "https://adplist.org/favicon.ico",
    verdict: "Connect with mentors and accelerate your UX career growth.",
    price: "Free",
    category: "Career",
    affiliateUrl: "#",
  },
  {
    id: "uxcel",
    name: "Uxcel",
    logo: "https://app.uxcel.com/favicon.ico",
    verdict: "Gamified UX skill assessments and learning for professionals.",
    price: "$16/mo",
    category: "Career",
    affiliateUrl: "#",
  },
  {
    id: "dovetail",
    name: "Dovetail",
    logo: "https://dovetail.com/favicon.ico",
    verdict: "Centralize qualitative research data with powerful analysis tools.",
    price: "$29/mo",
    category: "Research",
    affiliateUrl: "#",
  },
  {
    id: "whimsical",
    name: "Whimsical",
    logo: "https://whimsical.com/favicon.ico",
    verdict: "Beautiful flowcharts, wireframes, and mind maps in seconds.",
    price: "Free",
    category: "Prototyping",
    affiliateUrl: "#",
  },
  {
    id: "raycast",
    name: "Raycast",
    logo: "https://raycast.com/favicon.ico",
    verdict: "Supercharged launcher that replaces half your productivity stack.",
    price: "Free",
    category: "Productivity",
    affiliateUrl: "#",
  },
  {
    id: "designlab",
    name: "Designlab",
    logo: "https://designlab.com/favicon.ico",
    verdict: "Structured UX bootcamp with 1-on-1 mentorship and portfolio projects.",
    price: "$399/mo",
    category: "Career",
    affiliateUrl: "#",
  },
  {
    id: "uizard",
    name: "Uizard",
    logo: "https://uizard.io/favicon.ico",
    verdict: "Generate wireframes and UI mockups from text prompts in seconds.",
    price: "$12/mo",
    category: "AI",
    affiliateUrl: "#",
  },
  {
    id: "galileo",
    name: "Galileo AI",
    logo: "https://www.usegalileo.ai/favicon.ico",
    verdict: "Text-to-UI generator that produces editable, high-fidelity Figma designs.",
    price: "$19/mo",
    category: "AI",
    affiliateUrl: "#",
  },
  {
    id: "magician",
    name: "Magician for Figma",
    logo: "https://magician.design/favicon.ico",
    verdict: "AI-powered Figma plugin for icons, copywriting, and image generation.",
    price: "$8/mo",
    category: "AI",
    affiliateUrl: "#",
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    logo: "https://cdn.worldvectorlogo.com/logos/chatgpt-6.svg",
    verdict: "Brainstorm IA, draft microcopy, and synthesize research in minutes.",
    price: "Free",
    category: "AI",
    affiliateUrl: "#",
  },
  {
    id: "attention-insight",
    name: "Attention Insight",
    logo: "https://attentioninsight.com/favicon.ico",
    verdict: "Predict where users will look before launch with AI heatmaps.",
    price: "$53/mo",
    category: "AI",
    affiliateUrl: "#",
  },

export const expertStacks: ExpertStack[] = [
  {
    id: "solo-freelancer",
    name: "The Solo Freelancer Stack",
    description: "Everything you need to run a one-person UX studio.",
    emoji: "🎯",
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
    tools: [
      { name: "Uxcel", reason: "Build foundational skills with assessments" },
      { name: "Designlab", reason: "Structured bootcamp with mentorship" },
      { name: "ADPList", reason: "Free mentorship from industry experts" },
      { name: "Figma", reason: "Learn the tool every team uses" },
    ],
  },
];

export const categories: Category[] = ["Research", "Prototyping", "Career", "Productivity"];
