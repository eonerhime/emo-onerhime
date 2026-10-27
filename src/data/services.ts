import { projects } from "./projects";

export type ServiceIcon =
  | "layers"
  | "sparkles"
  | "wallet"
  | "message"
  | "layout"
  | "chart";

export type Service = {
  title: string;
  blurb: string;
  icon: ServiceIcon;
  examples: string[];
};

// The kinds of project shown on the product card. Examples are project slugs,
// resolved to names below so the card follows renames in projects.ts.
const serviceDefs: (Omit<Service, "examples"> & { slugs: string[] })[] = [
  {
    title: "SaaS platforms",
    blurb: "Multi-tenant apps with roles, billing and a CMS.",
    icon: "layers",
    slugs: ["memories-r-us", "toutmessages"],
  },
  {
    title: "AI-powered products",
    blurb: "Prediction models, trading agents, AI replies.",
    icon: "sparkles",
    slugs: ["sportspred", "alphadeck"],
  },
  {
    title: "Marketplaces & payments",
    blurb: "Escrow wallets, subscriptions, Paystack & Stripe.",
    icon: "wallet",
    slugs: ["afro-jamz", "sportspred"],
  },
  {
    title: "WhatsApp & messaging",
    blurb: "Run a business by chat; one inbox for every channel.",
    icon: "message",
    slugs: ["abara", "toutmessages"],
  },
  {
    title: "Business sites + CMS",
    blurb: "Catalogs, quote requests, owner-edited content.",
    icon: "layout",
    slugs: ["epenal", "glowreeyah"],
  },
  {
    title: "Dashboards & trackers",
    blurb: "Pipelines, charts and insights from logged data.",
    icon: "chart",
    slugs: ["hireflow-track", "sleep-tracker"],
  },
];

export const services: Service[] = serviceDefs.map(({ slugs, ...service }) => ({
  ...service,
  examples: slugs.map((slug) => {
    const project = projects.find((p) => p.slug === slug);
    if (!project) throw new Error(`services.ts: unknown project slug "${slug}"`);
    return project.name;
  }),
}));
