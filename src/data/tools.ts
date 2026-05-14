export type Stage = "Research" | "Design" | "Prototype" | "Test" | "Ship" | "Career";

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
  stage: Stage;
  aiNative: boolean;
  tags: string[];
  /** Canonical product URL. Use this until an affiliate link is approved. */
  url?: string;
  affiliateUrl: string;
  affiliateStatus?: "none" | "target" | "applied" | "approved" | "rejected";
  affiliateNetwork?: "Direct" | "Dub" | "Impact" | "PartnerStack" | "Rewardful" | "OpenAffiliate" | "Other";
  affiliateProgramUrl?: string;
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

export function getToolHref(tool: Tool) {
  return tool.affiliateStatus === "approved" && tool.affiliateUrl
    ? tool.affiliateUrl
    : tool.url ?? tool.affiliateUrl;
}

export function hasApprovedAffiliate(tool: Tool) {
  return tool.affiliateStatus === "approved";
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
    stage: "Design",
    aiNative: false,
    tags: ["Design", "Collaboration", "Prototyping"],
    url: "https://figma.com",
    affiliateUrl: "https://figma.com",
    affiliateStatus: "none",
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
    stage: "Prototype",
    aiNative: true,
    tags: ["AI", "Coding", "Prototyping"],
    url: "https://cursor.com",
    affiliateUrl: "https://cursor.com",
    affiliateStatus: "target",
    affiliateNetwork: "Direct",
    affiliateProgramUrl: "https://cursor.com/ambassadors",
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
    stage: "Prototype",
    aiNative: true,
    tags: ["AI", "React", "Generative UI"],
    url: "https://v0.dev",
    affiliateUrl: "https://v0.dev",
    affiliateStatus: "target",
    affiliateNetwork: "Dub",
    affiliateProgramUrl: "https://partners.dub.co/v0",
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
    stage: "Prototype",
    aiNative: true,
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
    stage: "Design",
    aiNative: true,
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
    stage: "Design",
    aiNative: true,
    tags: ["AI", "Wireframes", "Sitemap"],
    url: "https://relume.io",
    affiliateUrl: "https://relume.io",
    affiliateStatus: "target",
    affiliateNetwork: "OpenAffiliate",
    affiliateProgramUrl: "https://openaffiliate.dev/programs/relume",
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
    stage: "Ship",
    aiNative: true,
    tags: ["AI", "No-code", "Web"],
    url: "https://framer.com",
    affiliateUrl: "https://framer.com",
    affiliateStatus: "target",
    affiliateNetwork: "Direct",
    affiliateProgramUrl: "https://www.framer.com/creators",
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
    stage: "Design",
    aiNative: true,
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
    stage: "Research",
    aiNative: true,
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
    stage: "Design",
    aiNative: true,
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
    stage: "Design",
    aiNative: true,
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
    stage: "Test",
    aiNative: false,
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
    stage: "Career",
    aiNative: false,
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
    stage: "Ship",
    aiNative: false,
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
    stage: "Career",
    aiNative: false,
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
    stage: "Career",
    aiNative: false,
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
    stage: "Career",
    aiNative: false,
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
    stage: "Career",
    aiNative: false,
    tags: ["Bootcamp", "Mentorship", "Portfolio"],
    affiliateUrl: "https://designlab.com",
    whyRecommend: "Structured curriculum + mentor accountability — the closest thing to a UX degree, online.",
    editorialNote: "Worth it if you need accountability. If you can self-direct, the AI-native workflow will get you further for less.",
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
    stage: "Test",
    aiNative: true,
    tags: ["AI", "Heatmaps", "Pre-launch"],
    affiliateUrl: "https://attentioninsight.com",
    whyRecommend: "AI-predicted heatmaps let you validate visual hierarchy before you ship a user test.",
    editorialNote: "A nice 'show your work' tool — drop a predicted heatmap into a critique and watch the conversation level up.",
    lastReviewed: TODAY,
    sponsored: true,
    features: { pricing: "$53/mo", freeTier: "Limited trial", bestUseCase: "Pre-launch heatmaps", aiNative: "Yes", learningCurve: "Low" },
  },

  // ---------- Research ----------
  {
    id: "dovetail",
    name: "Dovetail",
    logo: "https://www.google.com/s2/favicons?domain=dovetail.com&sz=128",
    verdict: "Research repository with AI-powered tagging and synthesis.",
    bestFor: "Best for centralising user research",
    price: "From $30/seat",
    priceValue: 30,
    stage: "Research",
    aiNative: true,
    tags: ["Research", "Repository", "AI synthesis"],
    affiliateUrl: "https://dovetail.com",
    whyRecommend: "Turns scattered interview notes into a searchable, taggable knowledge base your team actually revisits.",
    editorialNote: "If you stop research from dying in Slack threads, you stop being a feature factory. Dovetail is the most opinionated tool for that job.",
    lastReviewed: TODAY,
    features: { pricing: "Free / $30+ per seat", freeTier: "Limited solo plan", bestUseCase: "Research repository", aiNative: "Yes (tagging + summaries)", learningCurve: "Medium" },
  },
  {
    id: "usertesting",
    name: "UserTesting",
    logo: "https://www.google.com/s2/favicons?domain=usertesting.com&sz=128",
    verdict: "Moderated and unmoderated testing with a recruited panel.",
    bestFor: "Best for fast access to real users",
    price: "Custom",
    priceValue: 999,
    stage: "Research",
    aiNative: false,
    tags: ["Usability", "Recruiting", "Video"],
    affiliateUrl: "https://usertesting.com",
    whyRecommend: "The fastest path to real-user feedback when you don't have a panel of your own.",
    editorialNote: "Pricey, but the recruiting alone saves a week. Worth it once a quarter even if you can't expense it monthly.",
    lastReviewed: TODAY,
    features: { pricing: "Custom (enterprise)", freeTier: "No", bestUseCase: "Recruited usability testing", aiNative: "Partially (AI insights add-on)", learningCurve: "Medium" },
  },
  {
    id: "hotjar",
    name: "Hotjar",
    logo: "https://www.google.com/s2/favicons?domain=hotjar.com&sz=128",
    verdict: "Heatmaps, session recordings, and on-site surveys for live products.",
    bestFor: "Best for behavioural insights on live sites",
    price: "From $32/mo",
    priceValue: 32,
    stage: "Research",
    aiNative: false,
    tags: ["Heatmaps", "Recordings", "Surveys"],
    affiliateUrl: "https://hotjar.com",
    whyRecommend: "Cheap enough to install on a side project, deep enough to defend a redesign at work.",
    editorialNote: "Watching ten real session recordings will change how you design. Cheaper than another usability test.",
    lastReviewed: TODAY,
    features: { pricing: "Free / $32+", freeTier: "Yes (35 sessions/day)", bestUseCase: "Live-site behaviour analysis", aiNative: "Partially", learningCurve: "Low" },
  },
  {
    id: "sprig",
    name: "Sprig",
    logo: "https://www.google.com/s2/favicons?domain=sprig.com&sz=128",
    verdict: "In-product surveys, replays, and AI-summarised feedback.",
    bestFor: "Best for in-product micro-surveys",
    price: "From $175/mo",
    priceValue: 175,
    stage: "Research",
    aiNative: true,
    tags: ["In-product", "Surveys", "AI insights"],
    affiliateUrl: "https://sprig.com",
    whyRecommend: "Targeted in-product surveys that fire on the moment you actually care about — not 'rate your experience' modals.",
    editorialNote: "Sprig's AI summarisation makes survey data feel like research, not a CSV you'll never open.",
    lastReviewed: TODAY,
    features: { pricing: "From $175/mo", freeTier: "Limited free", bestUseCase: "In-product micro-research", aiNative: "Yes (synthesis)", learningCurve: "Medium" },
  },
  {
    id: "otter",
    name: "Otter.ai",
    logo: "https://www.google.com/s2/favicons?domain=otter.ai&sz=128",
    verdict: "Real-time interview transcription and AI-generated summaries.",
    bestFor: "Best for interview transcripts and summaries",
    price: "Free / $17/mo",
    priceValue: 17,
    stage: "Research",
    aiNative: true,
    tags: ["Transcription", "Interviews", "Summaries"],
    affiliateUrl: "https://otter.ai",
    whyRecommend: "Frees you up to actually listen during user interviews instead of typing notes.",
    editorialNote: "Pair it with ChatGPT and you have a one-person research function. Don't quote the AI summary verbatim — verify before sharing.",
    lastReviewed: TODAY,
    features: { pricing: "Free / $17+", freeTier: "300 minutes/mo", bestUseCase: "Interview capture + summary", aiNative: "Yes (core)", learningCurve: "Low" },
  },

  // ---------- Design ----------
  {
    id: "sketch",
    name: "Sketch",
    logo: "https://www.google.com/s2/favicons?domain=sketch.com&sz=128",
    verdict: "Mac-native UI design tool — Figma's older, leaner sibling.",
    bestFor: "Best for solo Mac designers",
    price: "$10/mo",
    priceValue: 10,
    stage: "Design",
    aiNative: false,
    tags: ["Design", "Mac", "Vector"],
    affiliateUrl: "https://sketch.com",
    whyRecommend: "Lighter than Figma if you don't need real-time collaboration — and the file format is yours.",
    editorialNote: "Still a credible answer if your team is small, Mac-only, and tired of Figma's web latency.",
    lastReviewed: TODAY,
    features: { pricing: "$10/mo", freeTier: "Trial only", bestUseCase: "Solo / small-team Mac design", aiNative: "Partially (plugins)", learningCurve: "Low" },
  },
  {
    id: "penpot",
    name: "Penpot",
    logo: "https://www.google.com/s2/favicons?domain=penpot.app&sz=128",
    verdict: "Open-source design and prototyping that runs in the browser.",
    bestFor: "Best free Figma alternative",
    price: "Free",
    priceValue: 0,
    stage: "Design",
    aiNative: false,
    tags: ["Open source", "Design", "Free"],
    affiliateUrl: "https://penpot.app",
    whyRecommend: "Self-hostable, open standards (SVG), no vendor lock-in. Genuinely usable for solo and small-team work.",
    editorialNote: "Worth knowing exists. If a future Figma price hike pushes you out, Penpot is the only credible escape hatch.",
    lastReviewed: TODAY,
    features: { pricing: "Free (or self-host)", freeTier: "Fully free", bestUseCase: "Open-source design workflow", aiNative: "No", learningCurve: "Low" },
  },
  {
    id: "spline",
    name: "Spline",
    logo: "https://www.google.com/s2/favicons?domain=spline.design&sz=128",
    verdict: "Browser-based 3D design and interactive scenes.",
    bestFor: "Best for 3D and interactive web visuals",
    price: "Free / $9/mo",
    priceValue: 9,
    stage: "Design",
    aiNative: false,
    tags: ["3D", "Interactive", "Web"],
    affiliateUrl: "https://spline.design",
    whyRecommend: "The only 3D tool that doesn't feel like Cinema 4D dressed in marketing copy. Real designers can pick it up in a day.",
    editorialNote: "3D on portfolio sites is becoming a junior-vs-mid signal. Even one Spline scene moves you up a band.",
    lastReviewed: TODAY,
    features: { pricing: "Free / $9+", freeTier: "Yes", bestUseCase: "3D + interactive scenes", aiNative: "Partially", learningCurve: "Medium" },
  },
  {
    id: "visily",
    name: "Visily",
    logo: "https://www.google.com/s2/favicons?domain=visily.ai&sz=128",
    verdict: "AI wireframing and screenshot-to-design conversion.",
    bestFor: "Best for sketch-to-wireframe",
    price: "Free / $14/mo",
    priceValue: 14,
    stage: "Design",
    aiNative: true,
    tags: ["AI", "Wireframes", "Sketch-to-UI"],
    affiliateUrl: "https://visily.ai",
    whyRecommend: "Snap a whiteboard sketch, get a wireframe. Galileo for the napkin-and-coffee crowd.",
    editorialNote: "A useful backup to Uizard when the client emails you a sketch on a Sunday night.",
    lastReviewed: TODAY,
    features: { pricing: "Free / $14+", freeTier: "Yes", bestUseCase: "Sketch / screenshot to wireframe", aiNative: "Yes", learningCurve: "Low" },
  },
  {
    id: "mobbin",
    name: "Mobbin",
    logo: "https://www.google.com/s2/favicons?domain=mobbin.com&sz=128",
    verdict: "Massive library of real app + web UI screenshots for inspiration.",
    bestFor: "Best for design inspiration and benchmarking",
    price: "From $15/mo",
    priceValue: 15,
    stage: "Design",
    aiNative: false,
    tags: ["Inspiration", "Benchmarking", "Patterns"],
    affiliateUrl: "https://mobbin.com",
    whyRecommend: "Skip the Dribbble fantasies — Mobbin shows what shipped apps actually look like.",
    editorialNote: "Reach for Mobbin before designing any pattern from scratch. The 10-minute saved is a sharper artefact.",
    lastReviewed: TODAY,
    features: { pricing: "Free / $15+", freeTier: "Limited free", bestUseCase: "Design inspiration", aiNative: "No", learningCurve: "Low" },
  },

  // ---------- Prototype ----------
  {
    id: "lovable",
    name: "Lovable",
    logo: "https://www.google.com/s2/favicons?domain=lovable.dev&sz=128",
    verdict: "Prompt-to-app builder that ships real React + Supabase code.",
    bestFor: "Best AI builder for designer-led products",
    price: "Free / $20/mo",
    priceValue: 20,
    stage: "Prototype",
    aiNative: true,
    tags: ["AI", "Builder", "Full-stack"],
    url: "https://lovable.dev",
    affiliateUrl: "https://lovable.dev",
    affiliateStatus: "target",
    affiliateNetwork: "Direct",
    whyRecommend: "Closest thing to a designer co-founder right now — you can ship a working product in a weekend.",
    editorialNote: "If you've never owned a side project beyond a Figma file, Lovable removes the last excuse. Yes, this site is built on it.",
    lastReviewed: TODAY,
    features: { pricing: "Free / $20+", freeTier: "Daily message credits", bestUseCase: "Designer-built full apps", aiNative: "Yes (core)", learningCurve: "Low" },
  },
  {
    id: "bolt",
    name: "Bolt.new",
    logo: "https://www.google.com/s2/favicons?domain=bolt.new&sz=128",
    verdict: "AI-powered StackBlitz environment for prompt-to-app generation.",
    bestFor: "Best for instant prototype-in-browser",
    price: "Free / $20/mo",
    priceValue: 20,
    stage: "Prototype",
    aiNative: true,
    tags: ["AI", "Builder", "Browser"],
    url: "https://bolt.new",
    affiliateUrl: "https://bolt.new",
    affiliateStatus: "target",
    affiliateNetwork: "Direct",
    whyRecommend: "Generates and runs a real Node/React app in your browser — no setup, no environment headaches.",
    editorialNote: "Use Bolt when you want a throwaway prototype this hour, Lovable when you want to keep iterating.",
    lastReviewed: TODAY,
    features: { pricing: "Free / $20+", freeTier: "Limited tokens", bestUseCase: "Instant in-browser prototyping", aiNative: "Yes (core)", learningCurve: "Low" },
  },
  {
    id: "protopie",
    name: "ProtoPie",
    logo: "https://www.google.com/s2/favicons?domain=protopie.io&sz=128",
    verdict: "Advanced interactive prototyping with sensors, variables, and conditions.",
    bestFor: "Best for complex micro-interactions",
    price: "From $13/mo",
    priceValue: 13,
    stage: "Prototype",
    aiNative: false,
    tags: ["Prototyping", "Interactions", "Sensors"],
    affiliateUrl: "https://protopie.io",
    whyRecommend: "Goes where Figma's prototype mode can't — gestures, sensors, complex state, and device hand-off.",
    editorialNote: "Niche, but if you're designing native mobile or anything sensor-heavy, this is the credible tool.",
    lastReviewed: TODAY,
    features: { pricing: "From $13+", freeTier: "Limited free", bestUseCase: "Advanced interactive prototypes", aiNative: "No", learningCurve: "Medium" },
  },
  {
    id: "origami",
    name: "Origami Studio",
    logo: "https://www.google.com/s2/favicons?domain=origami.design&sz=128",
    verdict: "Meta's free advanced prototyping tool with patch-based logic.",
    bestFor: "Best free advanced prototyper",
    price: "Free",
    priceValue: 0,
    stage: "Prototype",
    aiNative: false,
    tags: ["Prototyping", "Free", "Mac"],
    affiliateUrl: "https://origami.design",
    whyRecommend: "Free, Meta-grade, and capable of prototypes that look indistinguishable from production.",
    editorialNote: "Steep learning curve, but a ProtoPie alternative if budget is zero. Used inside Meta — that's the credibility.",
    lastReviewed: TODAY,
    features: { pricing: "Free", freeTier: "Fully free", bestUseCase: "Advanced free prototyping", aiNative: "No", learningCurve: "High" },
  },

  // ---------- Test ----------
  {
    id: "lookback",
    name: "Lookback",
    logo: "https://www.google.com/s2/favicons?domain=lookback.com&sz=128",
    verdict: "Moderated user interviews with built-in note-taking and clips.",
    bestFor: "Best for moderated remote interviews",
    price: "From $25/mo",
    priceValue: 25,
    stage: "Test",
    aiNative: false,
    tags: ["Interviews", "Moderated", "Video"],
    affiliateUrl: "https://lookback.com",
    whyRecommend: "Purpose-built for user research calls — Zoom plus highlight clips and shared notes, not Zoom plus chaos.",
    editorialNote: "Lookback's highlight reels turn a 45-min interview into a 3-min stakeholder share. That's how research influences decisions.",
    lastReviewed: TODAY,
    features: { pricing: "From $25+", freeTier: "Trial only", bestUseCase: "Moderated remote interviews", aiNative: "Partially", learningCurve: "Low" },
  },
  {
    id: "optimal-workshop",
    name: "Optimal Workshop",
    logo: "https://www.google.com/s2/favicons?domain=optimalworkshop.com&sz=128",
    verdict: "Card sorting, tree testing, and IA validation in one suite.",
    bestFor: "Best for information architecture testing",
    price: "From $208/mo",
    priceValue: 208,
    stage: "Test",
    aiNative: false,
    tags: ["IA", "Card sort", "Tree test"],
    affiliateUrl: "https://optimalworkshop.com",
    whyRecommend: "The only end-to-end suite for IA work — tree tests, card sorts, and first-click testing under one login.",
    editorialNote: "Pricey for solo use, but no one credibly does IA validation any other way. Try the trial during a real project.",
    lastReviewed: TODAY,
    features: { pricing: "From $208+", freeTier: "Limited free", bestUseCase: "IA validation", aiNative: "No", learningCurve: "Medium" },
  },
  {
    id: "playbookux",
    name: "PlaybookUX",
    logo: "https://www.google.com/s2/favicons?domain=playbookux.com&sz=128",
    verdict: "Moderated and unmoderated user research with AI transcript analysis.",
    bestFor: "Best Maze alternative with recruiting",
    price: "From $99/mo",
    priceValue: 99,
    stage: "Test",
    aiNative: true,
    tags: ["Research", "Recruiting", "AI analysis"],
    affiliateUrl: "https://playbookux.com",
    whyRecommend: "Recruiting + testing + AI synthesis in one platform — fewer logins than stitching Maze + UserInterviews together.",
    editorialNote: "Compare directly with Maze on your next study. The AI analysis is closer to useful than most.",
    lastReviewed: TODAY,
    features: { pricing: "From $99+", freeTier: "Trial", bestUseCase: "End-to-end user research", aiNative: "Yes (analysis)", learningCurve: "Low" },
  },

  // ---------- Ship ----------
  {
    id: "zeplin",
    name: "Zeplin",
    logo: "https://www.google.com/s2/favicons?domain=zeplin.io&sz=128",
    verdict: "Design-to-engineering handoff with specs, tokens, and Jira links.",
    bestFor: "Best for structured design handoff",
    price: "Free / $8/mo",
    priceValue: 8,
    stage: "Ship",
    aiNative: false,
    tags: ["Handoff", "Specs", "Dev"],
    affiliateUrl: "https://zeplin.io",
    whyRecommend: "Solves the 'eng can see Figma, why do we need this?' problem when your team grows past five engineers.",
    editorialNote: "Worth installing as soon as you have two devs asking for the same thing twice. Cleaner than Figma dev mode for big design systems.",
    lastReviewed: TODAY,
    features: { pricing: "Free / $8+", freeTier: "Yes", bestUseCase: "Design-to-dev handoff", aiNative: "No", learningCurve: "Low" },
  },
  {
    id: "storybook",
    name: "Storybook",
    logo: "https://www.google.com/s2/favicons?domain=storybook.js.org&sz=128",
    verdict: "Open-source UI component workshop and documentation tool.",
    bestFor: "Best for component library docs",
    price: "Free",
    priceValue: 0,
    stage: "Ship",
    aiNative: false,
    tags: ["Components", "Docs", "Open source"],
    affiliateUrl: "https://storybook.js.org",
    whyRecommend: "Where your design system actually lives once engineers stop treating Figma as the source of truth.",
    editorialNote: "Even if you don't write components, knowing what Storybook is — and reviewing it — separates senior designers from mid-level ones.",
    lastReviewed: TODAY,
    features: { pricing: "Free (OSS)", freeTier: "Fully free", bestUseCase: "Component documentation", aiNative: "No", learningCurve: "Medium" },
  },
  {
    id: "webflow",
    name: "Webflow",
    logo: "https://www.google.com/s2/favicons?domain=webflow.com&sz=128",
    verdict: "Visual web design that outputs production-grade code and CMS.",
    bestFor: "Best for designer-built production sites",
    price: "From $14/mo",
    priceValue: 14,
    stage: "Ship",
    aiNative: false,
    tags: ["No-code", "Web", "CMS"],
    url: "https://webflow.com",
    affiliateUrl: "https://webflow.com",
    affiliateStatus: "target",
    affiliateNetwork: "Direct",
    affiliateProgramUrl: "https://webflow.com/partners",
    whyRecommend: "The most powerful no-code tool a designer can actually ship to production with — CMS, animations, SEO controls.",
    editorialNote: "Webflow fluency is becoming a 'designer who ships' signal. Less designer-friendly than Framer, more capable when you grow up.",
    lastReviewed: TODAY,
    features: { pricing: "From $14+", freeTier: "2 sites free (with branding)", bestUseCase: "Production web design", aiNative: "Partially", learningCurve: "Medium" },
  },

  // ---------- Career ----------
  {
    id: "readcv",
    name: "Read.cv",
    logo: "https://www.google.com/s2/favicons?domain=read.cv&sz=128",
    verdict: "Designer-focused profile and portfolio platform.",
    bestFor: "Best for clean designer profiles",
    price: "Free / $4/mo",
    priceValue: 4,
    stage: "Career",
    aiNative: false,
    tags: ["Portfolio", "Profile", "Community"],
    affiliateUrl: "https://read.cv",
    whyRecommend: "The designer's answer to LinkedIn — calmer, prettier, and built for portfolio work, not recruiter spam.",
    editorialNote: "Have a Read.cv profile alongside your full portfolio. It's becoming the default \"who is this designer\" landing page.",
    lastReviewed: TODAY,
    features: { pricing: "Free / $4+", freeTier: "Yes", bestUseCase: "Designer profile", aiNative: "No", learningCurve: "Low" },
  },
  {
    id: "pitch",
    name: "Pitch",
    logo: "https://www.google.com/s2/favicons?domain=pitch.com&sz=128",
    verdict: "Collaborative presentations with great defaults and templates.",
    bestFor: "Best for design-led decks and case studies",
    price: "Free / $8/mo",
    priceValue: 8,
    stage: "Career",
    aiNative: false,
    tags: ["Decks", "Case study", "Collaboration"],
    affiliateUrl: "https://pitch.com",
    whyRecommend: "Better-looking decks than Google Slides without the lock-in of Keynote — fast for portfolio case studies.",
    editorialNote: "If your case studies live in Google Slides, you're losing the interview before the call. Move to Pitch or Notion this week.",
    lastReviewed: TODAY,
    features: { pricing: "Free / $8+", freeTier: "Generous", bestUseCase: "Design-led decks", aiNative: "Partially", learningCurve: "Low" },
  },
];

export const stages: Stage[] = ["Research", "Design", "Prototype", "Test", "Ship", "Career"];

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
    title: "Added Figma Make, refreshed Cursor pricing, launched the AI-native workflow",
    body: "Three new AI tools added to the directory, the AI-native workflow is now our flagship recommendation, and we re-reviewed every tool's pricing as of May 1.",
  },
  {
    id: "apr-2026",
    date: "2026-04-12",
    title: "New diagnostic: AI Readiness Check",
    body: "A 2-minute self-assessment that scores you and recommends a starting workflow — replacing the older 3-question quiz as our default entry point.",
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
    title: "Mid-level growth workflow added",
    body: "A new curated workflow for designers with 2–5 years of experience who want to operate one rung higher.",
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
    quote: "I stopped doom-scrolling AI hot takes and just installed the AI-native workflow. Six weeks later I prototyped a feature in two days that used to take a sprint.",
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
  recommendedWorkflowId: string;
}

export function scoreReadiness(answers: Record<string, number>): ReadinessResult {
  const totalRaw = Object.values(answers).reduce((a, b) => a + b, 0);
  const max = readinessQuestions.length * 10;
  const score = Math.round((totalRaw / max) * 100);

  let label: ReadinessResult["label"];
  let blurb: string;
  let recommendedWorkflowId: string;
  let recommendedToolIds: string[];

  if (score < 40) {
    label = "AI-Curious";
    blurb = "You're aware of the shift but not yet operating in it. The next 90 days matter — start with foundational AI workflows and one production tool you can show on your portfolio.";
    recommendedWorkflowId = "career-switcher";
    recommendedToolIds = ["chatgpt", "v0", "notion"];
  } else if (score < 75) {
    label = "AI-Adopter";
    blurb = "You're using AI but in scattered places. Time to consolidate: pick a small workflow you commit to, and start showing AI-augmented work in your portfolio.";
    recommendedWorkflowId = "mid-level-promotion";
    recommendedToolIds = ["v0", "maze", "raycast"];
  } else {
    label = "AI-Native";
    blurb = "You're already operating in the AI era. Your edge is depth: pick the highest-leverage tools, ship more, and write about your process — that's what hiring managers want to see.";
    recommendedWorkflowId = "ai-native-designer";
    recommendedToolIds = ["cursor", "figma-make", "magic-patterns"];
  }

  return { score, label, blurb, recommendedToolIds, recommendedWorkflowId };
}

