export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  cover: string;
  tech: string[];
  liveUrl: string;
  githubUrl?: string;
  status?: string;
};

export const projects: Project[] = [
  {
    slug: "sportspred",
    name: "SportsPred",
    tagline: "AI-powered football predictions for African bettors",
    description:
      "A Next.js 16 prediction platform combining Poisson distribution, Elo ratings, and form/H2H models across 13 football leagues. Ships a custom accumulator builder, a betting history tracker with real payout math, 13-currency auto-detection, and Paystack subscription tiers.",
    cover: "/projects/sportspred.webp",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Paystack"],
    liveUrl: "https://sportspred.ng",
  },
  {
    slug: "hireflow-track",
    name: "HireFlow",
    tagline: "A job application tracker, built in public with specs",
    description:
      "A 6-stage Kanban pipeline for tracking job applications, contacts, and follow-up reminders — built entirely in the open. Every feature starts as a written spec before a line of code ships.",
    cover: "/projects/hireflow-track.webp",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://hireflow-track.vercel.app",
    githubUrl: "https://github.com/eonerhime/hireflow-track",
    status: "Building in public",
  },
  {
    slug: "afro-jamz",
    name: "AfroJamz",
    tagline: "A marketplace for African beat producers and buyers",
    description:
      "A full-stack beat marketplace with role-based JWT auth, Google OAuth, and a Fiverr-style escrow wallet with a 7-day withdrawal hold. Backed by 60+ API endpoints, Swagger docs, and 100+ automated tests covering every business rule.",
    cover: "/projects/afro-jamz.webp",
    tech: ["Next.js", "TypeScript", "JWT", "OAuth"],
    liveUrl: "https://afro-jamz.vercel.app",
  },
  {
    slug: "toutmessages",
    name: "toutMessages",
    tagline: "One inbox for every social channel, built for teams",
    description:
      "A multi-tenant, omni-channel support inbox unifying DMs, comments, and mentions across nine platforms — WhatsApp, Instagram, Facebook, Threads, Telegram, Email, X, TikTok, and LinkedIn. Includes AI-drafted replies, an analytics dashboard, and org-level billing via Stripe, Paystack, and Flutterwave.",
    cover: "/projects/toutmessages.webp",
    tech: ["Next.js", "TypeScript", "Stripe", "Multi-tenant"],
    liveUrl: "https://toutmessages.vercel.app",
  },
  {
    slug: "abara",
    name: "Abara",
    tagline: "WhatsApp-first inventory and business management",
    description:
      "A business tool run entirely by WhatsApp message — sales, restocks, income, and expenses logged with plain-language commands and a small set of optional shortcuts. Stock and money always reconcile: no sale posts without moving inventory, no restock posts without its real cost.",
    cover: "/projects/abara.webp",
    tech: ["Next.js", "TypeScript", "WhatsApp API"],
    liveUrl: "https://abara.vercel.app",
  },
  {
    slug: "glowreeyah",
    name: "Glowreeyah",
    tagline: "An artist & ministry digital platform with a built-in CMS",
    description:
      "A full-stack Next.js 15 site for a music artist and minister, featuring a custom-built CMS, MongoDB Atlas storage, Cloudinary media delivery, and NextAuth-gated content management.",
    cover: "/projects/glowreeyah.webp",
    tech: ["Next.js", "TypeScript", "MongoDB", "Cloudinary"],
    liveUrl: "https://glowreeyah-topaz.vercel.app",
    githubUrl: "https://github.com/eonerhime/glowreeyah",
  },
];
