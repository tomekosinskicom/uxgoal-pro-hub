export type SkillId =
  | "research"
  | "product"
  | "interaction"
  | "ui"
  | "systems"
  | "facilitation"
  | "data"
  | "ai";

export interface SkillDetail {
  id: SkillId;
  slug: string;
  label: string;
  tagline: string;
  aiImpact: {
    summary: string;
    shifts: string[];
    actions: string[];
  };
  toolsToTry: { name: string; why: string }[];
}

export const skillDetails: SkillDetail[] = [
  {
    id: "research",
    slug: "research",
    label: "Research",
    tagline: "Synthesis is cheap. Good questions and good evidence aren't.",
    aiImpact: {
      summary:
        "AI compresses synthesis, transcription, and pattern-matching from days into minutes. The premium shifts to question design, recruiting quality, and judgement about what to act on.",
      shifts: [
        "Transcription, tagging, and theme clustering are now near-free.",
        "LLMs can draft discussion guides, screener questions, and synthesis frameworks in seconds.",
        "Stakeholders expect insight turnaround in hours, not weeks.",
        "The risk is confident-sounding synthesis from thin or biased data.",
      ],
      actions: [
        "Get sharper at framing the research question and the decision it informs.",
        "Use AI for first-pass clustering, but verify quotes against raw transcripts.",
        "Build a lightweight evidence library so insights compound across studies.",
        "Practice writing the decision memo, not just the readout.",
      ],
    },
    toolsToTry: [
      { name: "Dovetail AI", why: "Automated tagging and theme suggestions on interview transcripts." },
      { name: "Notably", why: "AI-assisted synthesis across multiple sessions." },
      { name: "ChatGPT / Claude", why: "Drafting guides, screeners, and synthesis prompts." },
    ],
  },
  {
    id: "product",
    slug: "product-thinking",
    label: "Product thinking",
    tagline: "Framing the right problem matters more than ever.",
    aiImpact: {
      summary:
        "AI can generate ten plausible solutions in a minute. What it can't do is pick the right problem, weigh tradeoffs against business reality, or commit to a sequence.",
      shifts: [
        "Solution space exploration is essentially free.",
        "Design briefs and PRDs can be drafted in seconds.",
        "Teams need designers who can interrogate the problem, not just produce screens.",
        "Outcome thinking and metric literacy become baseline expectations.",
      ],
      actions: [
        "Frame every project as: problem, user, constraint, hypothesis, success metric.",
        "Use AI to pressure-test your framing — ask it to argue against your approach.",
        "Pair every solution with the tradeoff and the risk you're accepting.",
        "Write the one-pager before the Figma file.",
      ],
    },
    toolsToTry: [
      { name: "Claude / GPT-5", why: "Pressure-test problem framings and surface tradeoffs." },
      { name: "Linear / Productboard", why: "Tie design work to outcomes and sequencing." },
      { name: "Maze", why: "Validate a framing with users before investing in design." },
    ],
  },
  {
    id: "interaction",
    slug: "interaction-design",
    label: "Interaction design",
    tagline: "AI surfaces happy paths fast. Edge cases are still on you.",
    aiImpact: {
      summary:
        "Generative tools can spit out happy-path flows in minutes. The real work — error states, recovery, empty states, ambiguous inputs, agentic uncertainty — still needs a human who understands systems.",
      shifts: [
        "AI-generated UI handles 80% scenarios but misses the messy 20%.",
        "Designing for AI features (uncertainty, hallucination, undo) is a new core skill.",
        "Flows now include agent actions, not just user actions.",
        "Permission, transparency, and trust are first-class interaction concerns.",
      ],
      actions: [
        "Document states, errors, and recovery for every flow you ship.",
        "Practice designing AI-touched flows: confidence, citations, undo, escalation.",
        "Audit one existing flow for failure modes and propose fixes.",
        "Build a personal checklist of edge cases you always cover.",
      ],
    },
    toolsToTry: [
      { name: "Figma Make", why: "Quickly explore interaction variants and states." },
      { name: "Origami / ProtoPie", why: "Prototype conditional and AI-driven logic." },
      { name: "v0 / Lovable", why: "Pressure-test flows with working code, not just visuals." },
    ],
  },
  {
    id: "ui",
    slug: "ui-craft",
    label: "UI craft",
    tagline: "Taste and systems thinking are the durable edge.",
    aiImpact: {
      summary:
        "AI can produce competent UI in seconds, which raises the floor for everyone. What stays scarce is taste, restraint, accessibility rigour, and the ability to fit visuals into a coherent system.",
      shifts: [
        "Generic 'good-looking' UI is commoditised.",
        "Production-ready details — spacing, motion, accessibility, responsive behaviour — are the new differentiator.",
        "Designers who can direct AI output with strong references win.",
        "Visual quality is judged against shipped code, not static mockups.",
      ],
      actions: [
        "Curate a tight reference library and learn to articulate what makes each example work.",
        "Audit one of your screens against WCAG, typographic scale, and spacing system.",
        "Practice editing AI-generated UI down, not just generating more.",
        "Ship one screen end-to-end including motion and responsive states.",
      ],
    },
    toolsToTry: [
      { name: "Figma", why: "Still the canvas for serious UI work and systems." },
      { name: "Galileo / Magic Patterns", why: "AI UI generation as a starting point, not a deliverable." },
      { name: "Stark / Polypane", why: "Accessibility and responsive QA at production quality." },
    ],
  },
  {
    id: "systems",
    slug: "design-systems",
    label: "Design systems",
    tagline: "Systems are the bridge between AI output and shipped product.",
    aiImpact: {
      summary:
        "AI thrives when paired with strong primitives. A clean component library, tokens, and patterns turn AI from a novelty into reliable production leverage. Weak systems multiply mess.",
      shifts: [
        "AI tools can consume tokens and components directly to generate on-brand UI.",
        "Documentation quality determines AI output quality.",
        "Governance and adoption become more important as generation gets cheaper.",
        "Systems teams are increasingly responsible for AI tool enablement.",
      ],
      actions: [
        "Audit your tokens — colour, spacing, type, radius — and document usage rules.",
        "Write one component spec with anatomy, variants, states, and accessibility.",
        "Connect your design system to an AI tool and observe where it fails.",
        "Define adoption metrics and one ritual for keeping the system current.",
      ],
    },
    toolsToTry: [
      { name: "Figma Variables / Tokens Studio", why: "Tokenised foundations AI tools can consume." },
      { name: "Storybook", why: "Source of truth for component behaviour." },
      { name: "Zeroheight / Supernova", why: "Living documentation that scales with the system." },
    ],
  },
  {
    id: "facilitation",
    slug: "facilitation",
    label: "Facilitation",
    tagline: "Decisions move faster. Alignment is the bottleneck.",
    aiImpact: {
      summary:
        "When anyone can generate a prototype, the constraint shifts to alignment, prioritisation, and decision-making. Facilitators who can run sharp workshops and drive outcomes become disproportionately valuable.",
      shifts: [
        "AI can summarise meetings and surface action items, but not drive consensus.",
        "Async-first work is now default; facilitation skills extend to written collaboration.",
        "Stakeholder rooms are messier — more options, more opinions, more urgency.",
        "Designers are increasingly expected to facilitate cross-functional decisions.",
      ],
      actions: [
        "Plan one decision workshop with inputs, activities, and a clear output.",
        "Practice writing tight pre-reads that replace 30-minute status meetings.",
        "Use AI to draft agendas and capture notes, not to run the room.",
        "Build a personal facilitation toolkit you can pull from under pressure.",
      ],
    },
    toolsToTry: [
      { name: "FigJam / Miro", why: "Run discovery, critique, and prioritisation sessions." },
      { name: "Loom", why: "Async walkthroughs that replace status meetings." },
      { name: "Granola / Fireflies", why: "AI note-taking so you can focus on the room." },
    ],
  },
  {
    id: "data",
    slug: "data-and-experimentation",
    label: "Data & experimentation",
    tagline: "Design intuition is necessary but no longer sufficient.",
    aiImpact: {
      summary:
        "AI makes querying data and reading analytics dramatically more accessible. Designers who pair qualitative insight with quantitative evidence move from contributors to decision-owners.",
      shifts: [
        "Natural-language interfaces to analytics remove the SQL barrier.",
        "Experimentation infrastructure is increasingly self-serve.",
        "Designers are expected to define and own success metrics.",
        "AI features specifically require new metrics: trust, accuracy, escalation rate.",
      ],
      actions: [
        "Define success metrics on the next design problem you take on.",
        "Use AI to write SQL or analytics queries against your product data.",
        "Run one small A/B test end-to-end and document what you learned.",
        "Build a habit of pairing every shipped change with a metric to watch.",
      ],
    },
    toolsToTry: [
      { name: "Amplitude / Mixpanel", why: "Behavioural analytics with AI-assisted querying." },
      { name: "Hex / Mode", why: "AI-assisted SQL and notebooks for deeper analysis." },
      { name: "Statsig / GrowthBook", why: "Self-serve experimentation infrastructure." },
    ],
  },
  {
    id: "ai",
    slug: "ai-workflow-literacy",
    label: "AI workflow literacy",
    tagline: "The skill that compounds everything else.",
    aiImpact: {
      summary:
        "Every other UX skill gets multiplied by AI literacy. Designers who can build repeatable AI workflows — prompts, evals, hand-offs — ship more, faster, and with better judgement than peers who treat AI as a novelty.",
      shifts: [
        "Prompting is now part of the craft, like keyboard shortcuts used to be.",
        "Workflow design — what AI does, what you do, where you check — is a deliverable.",
        "Quality bar rises faster than tool capability; judgement is the moat.",
        "Designers fluent in code, prompts, and AI tools operate at a new tier.",
      ],
      actions: [
        "Pick one repetitive task and build a documented AI workflow for it.",
        "Maintain a personal prompt library with inputs, outputs, and judgement notes.",
        "Learn the failure modes of the models you use, not just the wins.",
        "Ship one portfolio piece that explains your AI workflow, not just the output.",
      ],
    },
    toolsToTry: [
      { name: "Claude / GPT-5", why: "General-purpose reasoning, writing, and synthesis." },
      { name: "Cursor / Lovable", why: "Designing in code with AI as a pair programmer." },
      { name: "Figma Make / v0", why: "Generative UI tied to real design systems." },
    ],
  },
];

export function getSkillBySlug(slug: string): SkillDetail | undefined {
  return skillDetails.find((s) => s.slug === slug);
}
