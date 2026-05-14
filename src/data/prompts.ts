export interface DesignerPrompt {
  id: string;
  category: "Research" | "Strategy" | "UX Writing" | "UI Design" | "Prototyping" | "Critique" | "Portfolio";
  title: string;
  bestFor: string;
  prompt: string;
}

export const designerPrompts: DesignerPrompt[] = [
  {
    id: "research-plan",
    category: "Research",
    title: "Create a lean UX research plan",
    bestFor: "Planning interviews, usability tests, or discovery work",
    prompt:
      "Act as a senior UX researcher. Create a lean research plan for [product/problem]. Include: research goal, assumptions to test, participant criteria, 5–7 interview questions, usability tasks if relevant, success signals, risks, and a 1-week timeline. Keep it practical for a small product team.",
  },
  {
    id: "synthesis-themes",
    category: "Research",
    title: "Synthesize messy notes into themes",
    bestFor: "Turning interviews or feedback into insight",
    prompt:
      "Analyze these research notes: [paste notes]. Find the main themes, repeated pain points, surprising quotes, contradictions, and product opportunities. Separate evidence from interpretation. End with 5 recommended next decisions for the product team.",
  },
  {
    id: "opportunity-framing",
    category: "Strategy",
    title: "Frame a product opportunity",
    bestFor: "Moving from request to product problem",
    prompt:
      "Help me reframe this feature request as a product opportunity: [request/context]. Define the user problem, business goal, assumptions, risks, possible metrics, alternative solutions, and a crisp opportunity statement using 'How might we...'.",
  },
  {
    id: "tradeoff-memo",
    category: "Strategy",
    title: "Write a design tradeoff memo",
    bestFor: "Explaining decisions to PMs, engineers, or stakeholders",
    prompt:
      "Act as a product design lead. Write a concise design tradeoff memo for this decision: [decision/context]. Include options considered, pros/cons, user impact, engineering/product tradeoffs, recommendation, and what we should validate after launch.",
  },
  {
    id: "microcopy-states",
    category: "UX Writing",
    title: "Generate microcopy for product states",
    bestFor: "Empty states, errors, confirmations, onboarding",
    prompt:
      "Write UX microcopy for [screen/flow]. Include empty state, loading state, success message, error message, helper text, and CTA labels. Tone: clear, calm, human. Avoid hype. Give 3 variations for each and explain when to use them.",
  },
  {
    id: "onboarding-flow",
    category: "UX Writing",
    title: "Improve onboarding clarity",
    bestFor: "Activation, setup flows, first-run experience",
    prompt:
      "Review this onboarding flow: [steps/screens]. Identify where users may feel confused, uncertain, or overloaded. Rewrite the step titles, helper copy, and CTAs. Suggest what to remove, delay, or progressively disclose.",
  },
  {
    id: "ui-directions",
    category: "UI Design",
    title: "Generate 3 UI directions",
    bestFor: "Exploring visual routes before committing",
    prompt:
      "Create 3 distinct UI design directions for [product/screen/audience]. For each direction, define layout approach, visual style, typography feel, color mood, component patterns, strengths, risks, and when this direction would be most appropriate.",
  },
  {
    id: "screen-critique",
    category: "Critique",
    title: "Critique a screen like a senior designer",
    bestFor: "Improving hierarchy, usability, and clarity",
    prompt:
      "Critique this screen: [describe or paste screenshot notes]. Evaluate information hierarchy, clarity, interaction model, accessibility, visual consistency, user confidence, and likely friction points. Give prioritized fixes: critical, important, nice-to-have.",
  },
  {
    id: "prototype-spec",
    category: "Prototyping",
    title: "Turn an idea into a prototype spec",
    bestFor: "Prompting v0, Cursor, Lovable, or Figma Make",
    prompt:
      "Turn this idea into a prototype specification: [idea]. Include target user, core user flow, screens, components, states, sample data, interactions, validation rules, edge cases, and acceptance criteria. Write it clearly enough for an AI builder to generate a first version.",
  },
  {
    id: "figma-to-code",
    category: "Prototyping",
    title: "Prepare a design for AI-assisted build",
    bestFor: "Getting better output from AI coding tools",
    prompt:
      "Convert this design description into an implementation-ready brief: [design]. Include layout structure, responsive behavior, components, styling tokens, interaction states, empty/error/loading states, and any assumptions the developer or AI coding tool should not guess.",
  },
  {
    id: "case-study-outline",
    category: "Portfolio",
    title: "Outline a stronger UX case study",
    bestFor: "Showing judgement, not just final screens",
    prompt:
      "Help me outline a UX portfolio case study for [project]. Structure it around problem, context, constraints, my role, research/evidence, key decisions, tradeoffs, iterations, final outcome, impact, and what I would do differently. Make it credible for a product design hiring manager.",
  },
  {
    id: "portfolio-ai-process",
    category: "Portfolio",
    title: "Explain AI use in a portfolio project",
    bestFor: "Showing AI fluency without sounding gimmicky",
    prompt:
      "I used AI during this design project: [describe usage]. Help me explain it professionally in my portfolio. Separate where AI helped with speed/exploration from where I applied human judgement. Include a short 'AI workflow' section and avoid making it sound like AI did the work for me.",
  },
];

export const promptCategories = Array.from(new Set(designerPrompts.map((prompt) => prompt.category)));
