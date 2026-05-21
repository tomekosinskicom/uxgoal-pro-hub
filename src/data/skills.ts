export type SkillId =
  | "research"
  | "product"
  | "interaction"
  | "ui"
  | "systems"
  | "facilitation"
  | "data"
  | "ai";

export interface SkillArea {
  id: SkillId;
  slug: string;
  label: string;
  prompt: string;
  shortDescription: string;
  options: { label: string; score: number }[];
  nextStep: string;
  aiImpact: {
    summary: string;
    shifts: { title: string; body: string }[];
    whatToDo: string[];
    toolsToTry: string[];
  };
}

export const skillAreas: SkillArea[] = [
  {
    id: "research",
    slug: "research",
    label: "Research",
    prompt: "When a team needs user insight, what can you confidently run yourself?",
    shortDescription: "Planning, running, and synthesizing user research that changes product decisions.",
    options: [
      { label: "I mostly rely on other people to plan and run research", score: 1 },
      { label: "I can support interviews or usability tests with guidance", score: 2 },
      { label: "I can plan, run, synthesize, and present a focused study", score: 3 },
      { label: "I can shape research strategy and influence product direction", score: 4 },
    ],
    nextStep: "Run one small study end-to-end and publish the decision it changed.",
    aiImpact: {
      summary:
        "AI is collapsing the cost of synthesis and note-taking. The bottleneck moves from 'who has time to run the study' to 'who can ask the right questions and judge the output'.",
      shifts: [
        { title: "Synthesis is near-instant", body: "Transcripts, themes, and quote clusters can be generated in minutes — the differentiator is the framing and the follow-up questions you bring." },
        { title: "More studies, smaller scope", body: "Teams are running more, smaller research loops because the analysis tax dropped. Designers who can scope a tight study win." },
        { title: "Synthetic users are noise without judgement", body: "AI persona panels are useful for stress-testing copy and flows, but they don't replace real evidence on real problems." },
      ],
      whatToDo: [
        "Bring sharper hypotheses — AI is bad at deciding what's worth learning.",
        "Get fluent with one research repository or AI-assisted synthesis tool.",
        "Always pair AI-generated themes with at least 2 verbatim quotes before sharing.",
      ],
      toolsToTry: ["Dovetail", "Notably", "User Interviews + ChatGPT/Claude for synthesis"],
    },
  },
  {
    id: "product",
    slug: "product-thinking",
    label: "Product thinking",
    prompt: "How do you usually frame design work?",
    shortDescription: "Framing design as problems, hypotheses, tradeoffs, and outcomes — not screens.",
    options: [
      { label: "As screens or UI tasks", score: 1 },
      { label: "As user problems with some product context", score: 2 },
      { label: "As hypotheses, constraints, tradeoffs, and outcomes", score: 3 },
      { label: "As product strategy: opportunity, risk, metric, and sequencing", score: 4 },
    ],
    nextStep: "Rewrite one case study around the product decision, not the interface deliverables.",
    aiImpact: {
      summary:
        "When anyone can generate a screen in seconds, the value of design shifts upstream — to deciding what to build and why. Product thinking is the most defensible designer skill of the next 5 years.",
      shifts: [
        { title: "Screens are cheap, decisions are expensive", body: "Stakeholders can now produce mockups themselves. Designers who only push pixels get squeezed out; those who frame the problem get pulled in earlier." },
        { title: "PMs use AI to write specs", body: "You'll receive AI-drafted PRDs more often. Your job is to interrogate them, not execute them blindly." },
        { title: "Outcomes over outputs becomes literal", body: "Leaders track shipped features less and outcomes more, because AI inflates output. Designers need to talk in metrics." },
      ],
      whatToDo: [
        "Practice writing a one-page opportunity brief before opening Figma.",
        "Learn to map a flow to a business or behavioural metric.",
        "Get comfortable saying 'this isn't worth building' with evidence.",
      ],
      toolsToTry: ["Linear / Productboard for problem framing", "Claude or GPT-5 for brief critique", "Maze or PostHog for outcome tracking"],
    },
  },
  {
    id: "interaction",
    slug: "interaction-design",
    label: "Interaction design",
    prompt: "How strong are your flows before they become polished UI?",
    shortDescription: "Designing states, edge cases, and clear interaction models — not just happy paths.",
    options: [
      { label: "I jump into visual design early", score: 1 },
      { label: "I map happy paths but edge cases are light", score: 2 },
      { label: "I design states, errors, empty states, and key edge cases", score: 3 },
      { label: "I can simplify complex systems into clear interaction models", score: 4 },
    ],
    nextStep: "Take one product flow and document states, edge cases, and recovery paths.",
    aiImpact: {
      summary:
        "AI-generated UIs almost always nail the happy path and miss the messy reality — empty states, errors, permissions, offline, loading. That gap is where interaction designers earn their keep.",
      shifts: [
        { title: "Generative UI handles the obvious 80%", body: "Tools like v0 and Lovable produce solid first-pass screens. The remaining 20% — edge cases — still needs a human." },
        { title: "AI agents introduce new interaction patterns", body: "Designing for AI features (streaming output, undo, trust, citations) is a whole new interaction vocabulary." },
        { title: "Flows shift from linear to conversational", body: "More products mix forms with chat. Designers need patterns for both modes." },
      ],
      whatToDo: [
        "Build a personal library of empty/error/loading states.",
        "Study chat + form hybrid patterns (Linear AI, Notion AI, Raycast).",
        "Practice critiquing AI-generated screens for missing states.",
      ],
      toolsToTry: ["v0 / Lovable for first drafts", "Figma + state variants", "Origami or ProtoPie for advanced interactions"],
    },
  },
  {
    id: "ui",
    slug: "ui-craft",
    label: "UI craft",
    prompt: "How would you describe your visual/UI execution?",
    shortDescription: "Consistent, accessible, production-aware visual execution with a strong eye for craft.",
    options: [
      { label: "Functional, but inconsistent", score: 1 },
      { label: "Clean enough, usually based on references", score: 2 },
      { label: "Consistent, accessible, responsive, and production-aware", score: 3 },
      { label: "High-craft, systematic, and adaptable across brands/platforms", score: 4 },
    ],
    nextStep: "Redesign one old screen with a tighter spacing/type/color system and compare before/after.",
    aiImpact: {
      summary:
        "AI makes 'acceptable UI' a commodity. High craft — the kind that signals a product is trustworthy — becomes more valuable, not less, because the baseline got louder and more generic.",
      shifts: [
        { title: "Generic AI aesthetics flood the market", body: "Most AI-generated UI converges on the same shadcn/Tailwind look. Distinctive craft stands out more." },
        { title: "Designers who can taste-direct AI win", body: "Knowing what 'good' looks like and steering AI toward it is now a core skill." },
        { title: "Motion and detail are the new differentiators", body: "Micro-interactions, typography rhythm, and density choices are still hard for AI." },
      ],
      whatToDo: [
        "Build one reference library per surface type (dashboard, marketing, mobile).",
        "Learn motion fundamentals — easing, duration, choreography.",
        "Practice rebuilding generic AI output into something with a point of view.",
      ],
      toolsToTry: ["Figma", "Framer / Rive for motion", "Mobbin / Sitesee for references"],
    },
  },
  {
    id: "systems",
    slug: "design-systems",
    label: "Design systems",
    prompt: "How comfortable are you with design systems?",
    shortDescription: "Designing reusable components, tokens, and the governance that keeps a system alive.",
    options: [
      { label: "I mainly consume existing components", score: 1 },
      { label: "I can use variants and follow documentation", score: 2 },
      { label: "I can design reusable components with states and guidance", score: 3 },
      { label: "I can shape system architecture, governance, and adoption", score: 4 },
    ],
    nextStep: "Create one component spec with anatomy, variants, usage rules, and accessibility notes.",
    aiImpact: {
      summary:
        "Design systems are now the connective tissue between designers, AI generators, and engineers. A clean token system means AI tools can produce on-brand output; a messy one means they can't.",
      shifts: [
        { title: "Tokens are now the AI's contract", body: "AI codegen tools rely on token names and component primitives. Systems with clean semantic tokens scale; ad-hoc ones don't." },
        { title: "Components are written in code-first more often", body: "Tools like shadcn/ui and Radix mean the system lives in the codebase, not Figma. Designers need to read it." },
        { title: "Governance still requires humans", body: "Deciding what becomes a primitive vs. a pattern vs. a one-off is still judgement work." },
      ],
      whatToDo: [
        "Learn semantic vs. primitive tokens (background vs. gray-100).",
        "Read your team's component code, not just the Figma library.",
        "Document one component end-to-end: anatomy, states, code, do/don't.",
      ],
      toolsToTry: ["Figma variables + modes", "Tokens Studio", "Storybook"],
    },
  },
  {
    id: "facilitation",
    slug: "facilitation",
    label: "Facilitation",
    prompt: "What happens when a workshop or critique needs structure?",
    shortDescription: "Running productive workshops, critiques, and stakeholder sessions that produce decisions.",
    options: [
      { label: "I mostly participate", score: 1 },
      { label: "I can run simple feedback sessions", score: 2 },
      { label: "I can facilitate discovery, critique, and prioritisation", score: 3 },
      { label: "I can handle messy stakeholder rooms and drive decisions", score: 4 },
    ],
    nextStep: "Prepare a 45-minute decision workshop with inputs, activities, and a clear output.",
    aiImpact: {
      summary:
        "Facilitation is one of the least AI-replaceable skills in design. As teams shrink and decisions speed up, the designer who can run the room becomes the designer who shapes the product.",
      shifts: [
        { title: "Decisions need to land faster", body: "AI shortens build cycles, so the cost of slow decision-making is more visible. Good facilitation directly accelerates shipping." },
        { title: "AI helps with prep, not the room", body: "Use AI to draft agendas, recaps, and stakeholder maps — but the live skill is fully human." },
        { title: "Async + sync hybrids dominate", body: "Workshops are increasingly partly async (Miro + Loom) before a tight sync session. Designers who can choreograph both win." },
      ],
      whatToDo: [
        "Run 3 small workshops with a tight structure: input, activity, output.",
        "Build a personal kit of 5 go-to activities (Crazy 8s, dot voting, etc.).",
        "Use AI to draft your agenda, then ruthlessly cut it in half.",
      ],
      toolsToTry: ["FigJam / Miro", "Loom for async pre-reads", "Notion AI for recaps"],
    },
  },
  {
    id: "data",
    slug: "data-and-experimentation",
    label: "Data & experimentation",
    prompt: "How do metrics and experiments show up in your process?",
    shortDescription: "Defining success metrics and using behavioural data to validate design decisions.",
    options: [
      { label: "Rarely — I mainly rely on qualitative feedback", score: 1 },
      { label: "I can read basic analytics when someone shares them", score: 2 },
      { label: "I define success metrics and use data to refine designs", score: 3 },
      { label: "I design experiments and connect behaviour data to roadmap decisions", score: 4 },
    ],
    nextStep: "Add success metrics and a validation plan to one current design problem.",
    aiImpact: {
      summary:
        "AI is making analytics tools conversational — you can now ask 'why did funnel step 3 drop last week?' in plain English. Designers who get fluent here close the gap with PMs and data folks.",
      shifts: [
        { title: "Querying data no longer requires SQL", body: "Tools like PostHog Max, Amplitude Ask, and Hex agents let designers self-serve answers." },
        { title: "Experimentation cycles are shortening", body: "AI reduces the design + build cost of variants, so teams test more. Designers need to write good hypotheses." },
        { title: "Outcome literacy is the new baseline", body: "Designers who can't talk about activation, retention, or conversion will be seen as decorators." },
      ],
      whatToDo: [
        "Learn one analytics tool well enough to self-serve.",
        "Write a hypothesis (we believe X → because Y → measured by Z) for every project.",
        "Pair every redesign with a metric you expect to move.",
      ],
      toolsToTry: ["PostHog", "Amplitude", "Maze for unmoderated tests"],
    },
  },
  {
    id: "ai",
    slug: "ai-workflow-literacy",
    label: "AI workflow literacy",
    prompt: "How embedded is AI in your design workflow?",
    shortDescription: "Building repeatable AI workflows that produce portfolio-grade design output.",
    options: [
      { label: "I barely use it", score: 1 },
      { label: "I use it for brainstorming, copy, or summaries", score: 2 },
      { label: "I use AI for research synthesis, prototyping, critique, or code", score: 3 },
      { label: "I have repeatable AI workflows that produce portfolio-grade outputs", score: 4 },
    ],
    nextStep: "Build one repeatable AI workflow and document prompts, inputs, outputs, and judgement calls.",
    aiImpact: {
      summary:
        "This isn't a skill you can opt out of. Within 2 years, every job description for a product designer will assume baseline AI fluency the way they assume Figma fluency today.",
      shifts: [
        { title: "Prompting is becoming a craft", body: "Good designers maintain personal prompt libraries — for critique, synthesis, copywriting, codegen." },
        { title: "Designers ship code more often", body: "Lovable, v0, Cursor make designer-built prototypes shippable. The lines between design and front-end are blurring." },
        { title: "Judgement is the moat", body: "Anyone can generate; few can judge. The defensible skill is knowing what to keep, cut, or push further." },
      ],
      whatToDo: [
        "Build one end-to-end AI workflow (e.g. brief → flows → screens → prototype).",
        "Keep a personal prompt library, organised by task.",
        "Ship one designer-coded prototype this quarter.",
      ],
      toolsToTry: ["Lovable", "Cursor", "v0", "Claude / GPT-5 for critique"],
    },
  },
];
