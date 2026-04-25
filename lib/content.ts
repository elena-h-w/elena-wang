// Typed port of reference/data.js — single source of truth for all copy and URLs.

export type Project = {
  name: string;
  tag: string;
  links: { label: string; href: string }[];
  bullets: string[];
  reflection: string;
  stack: string[];
};

export type StrategyGroup = {
  title: string;
  items: string[];
};

export const nav = ["About", "Product", "Strategy", "Writing", "Contact"] as const;

export const name = "Elena Wang";

export const role = "Product Marketing & GTM Leader";
export const role2 = "AI Product Builder";

export const heroHeadline =
  "I build AI-powered products and translate them into adoption and growth.";

export const heroSub =
  "Product marketing & GTM leader building and shipping AI-powered workflows to understand how technical capability translates into adoption, usage, and revenue growth. I focus on structured systems, iteration, and the real-world tradeoffs that shape AI product success.";

export const socials: { label: string; href: string }[] = [
  { label: "Email",     href: "mailto:elenawong1031@gmail.com" },
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/elenawang/" },
  { label: "X",         href: "https://x.com/Elena_H_W" },
  { label: "GitHub",    href: "https://github.com/elena-h-w/" },
  { label: "Instagram", href: "https://www.instagram.com/elena.h.w/" },
];

export const about: string[] = [
  "I'm Elena Wang, a product marketing and GTM leader focused on driving adoption and revenue growth for technology platforms. I've partnered closely with Product and Engineering to shape positioning, rollout strategy, and lifecycle programs that translate customer insight into measurable usage and revenue impact.",
  "As AI reshapes how products are built and distributed, I've been prototyping AI-powered workflows end-to-end using AI-assisted development (“vibe coding”) and deploying them to production. This hands-on experience taught me what it takes to build usable AI products: structured inputs, iteration loops, and tradeoffs around latency and inference cost.",
  "My goal is to help AI companies bridge technical capability with clear positioning, combining hands-on product understanding with distribution strategy that drives sustained adoption and growth.",
  "Outside of work, I’m an avid traveler who has visited over 50 countries across all seven continents — an experience that deepens my curiosity about how different cultures approach and solve problems, shaping how I think about marketing and building products for diverse users. I also enjoy staying active, challenging myself, and hitting goals — including finishing the NYC Marathon a few years ago.",
];

export const projects: Project[] = [
  {
    name: "Waylena",
    tag: "Mobile networking tracker app for professionals to log career conversations and follow up",
    links: [
      { label: "Live site",   href: "https://waylena.com/" },
      { label: "App Store",   href: "https://apps.apple.com/us/app/waylena-networking-tracker/id6760172380" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.elenahw.Waylena" },
    ],
    bullets: [
      "Designed conversation-centric UX with multi-select topic tagging, follow-up reminders, and networking insights",
      "Launched on the App Store and Google Play",
    ],
    reflection:
      "This project pushed me into mobile product development — navigating app build pipelines, native UX conventions, and the end-to-end process of shipping to real users on device.",
    stack: ["Expo", "React Native", "Supabase", "PostHog", "Vercel", "GitHub"],
  },
  {
    name: "Impact Logger",
    tag: "AI-powered web app for professionals to track their impact and generate narratives for performance reviews, promotions, role changes, and resumes",
    links: [
      { label: "Live site", href: "https://impactlogger.vercel.app/" },
    ],
    bullets: [
      "Rebuilt from Lovable prototype using React, TypeScript, and Supabase for persistent data and auth",
      "Integrated Claude API for improved output control and multi-step narrative generation",
      "Key insight: single-pass LLM prompts fail without multi-step abstraction",
      "Constraint discovered: inference cost makes naive LLM usage unsustainable at scale",
    ],
    reflection:
      "This project deepened my thinking around AI product architecture, cost tradeoffs, and stateful system design.",
    stack: ["Claude API", "React", "TypeScript", "Supabase", "PostHog", "Vercel", "GitHub"],
  },
  {
    name: "Back on Track",
    tag: "Return-to-running web app combining a PT strength routine with a structured walk/jog progression program",
    links: [
      { label: "Live site",   href: "https://return-to-running.vercel.app" },
      { label: "GitHub repo", href: "https://github.com/elena-h-w/return-to-running" },
    ],
    bullets: [
      "Built a mobile-friendly PWA using React, Vite, and localStorage — no backend, no auth, no data collection",
      "Implemented a pain-check protocol before every run log, with automatic advancement blocks for serious pain",
    ],
    reflection:
      "This project taught me how to scope and ship a focused, single-purpose tool as well as how much product thinking goes into something that feels simple on the surface. Built during recovery from a ski injury and released as MIT-licensed open source.",
    stack: ["React", "Vite", "CSS Modules", "PWA", "Vercel", "GitHub"],
  },
];

export const strategy: { groups: StrategyGroup[]; closing: string } = {
  groups: [
    {
      title: "Mobile & Networking",
      items: [
        "Networking utility is built on the follow-up, not the connection.",
        "Mobile friction is the enemy of data quality and user habit.",
        "Beta testing validates the “aha moment,” not just the code.",
        "Successful products focus on retention loops over vanity metrics.",
      ],
    },
    {
      title: "AI & Systems",
      items: [
        "AI features fail without structured input systems.",
        "Inference cost is a product constraint, not an afterthought.",
        "Stateful systems outperform one-shot prompts.",
        "AI is most powerful when embedded in real workflows.",
      ],
    },
  ],
  closing:
    "Ultimately, I believe product mechanics and distribution strategy must evolve together — technical capability only matters if the distribution model is built into the product’s DNA.",
};

export const writing = {
  date: "March 19, 2026",
  title: "When a Ski Trip Injury Led Me to Build Two Products in Eight Weeks",
  dek: "I don’t usually share personal stories. But if you’ve been thinking about starting something and keep putting it off, this might be the push you need.",
  slug: "build-two-products-in-eight-weeks",
};

export const contact = {
  line1:
    "I’m exploring senior roles in AI product marketing and product-led growth where I can combine GTM strategy with hands-on product building.",
  line2:
    "If you’re hiring at an AI company and value marketers who understand how AI products work from the inside, I’d love to connect.",
};

export const year = "2026";
