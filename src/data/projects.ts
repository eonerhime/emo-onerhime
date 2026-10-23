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
    slug: "epenal",
    name: "Epenal Group",
    tagline:
      "Marine engineering, boat building and vessel leasing, rebuilt from WordPress",
    description:
      "A corporate and catalog site for an indigenous Nigerian marine engineering company, rebuilt from a broken WordPress setup. Buyers filter boats and leasing equipment by specification, read the HSE policies and certificates, and request a quote for a specific vessel — saved to the database before any email is sent.",
    cover: "/projects/epenal.webp",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Cloudinary"],
    liveUrl: "https://epenal.vercel.app",
  },
  {
    slug: "memories-r-us",
    name: "Memories R Us",
    tagline: "A multi-tenant platform for a digital space for every life event",
    description:
      "A SaaS platform for building a dedicated online space for a memorial, birthday, naming ceremony, wedding, or festival — each with its own address, a template matched to the event's tone, and a QR-code guest-contribution flow that needs no visitor account. Ships a built-in CMS, a moderation queue, role-based memberships, agency portfolio pages, and Paystack billing on a shared database with strict tenant isolation.",
    cover: "/projects/memories-r-us.webp",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Vercel Blob", "Paystack"],
    liveUrl: "https://memories-r-us.vercel.app",
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
    slug: "glowreeyah",
    name: "Glowreeyah",
    tagline: "An artist & ministry digital platform with a built-in CMS",
    description:
      "A full-stack Next.js 15 site for a music artist and minister, featuring a custom-built CMS, MongoDB Atlas storage, Cloudinary media delivery, and NextAuth-gated content management.",
    cover: "/projects/glowreeyah.webp",
    tech: ["Next.js", "TypeScript", "MongoDB", "Cloudinary"],
    liveUrl: "https://glowreeyah-braimah.vercel.app",
    githubUrl: "https://github.com/eonerhime/glowreeyah",
  },
  {
    slug: "afro-jamz",
    name: "AfroJamz",
    tagline: "A marketplace for African beat producers and buyers",
    description:
      "A full-stack beat marketplace with role-based JWT auth, Google OAuth, and a Fiverr-style escrow wallet with a 7-day withdrawal hold. Backed by 60+ API endpoints, Swagger docs, and 100+ automated tests covering every business rule.",
    cover: "/projects/afrojamz.png",
    tech: ["Next.js", "TypeScript", "JWT", "OAuth"],
    liveUrl: "https://afro-jamz.vercel.app",
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
    slug: "alphadeck",
    name: "AlphaDeck",
    tagline: "An algorithmic trading agent platform with paper-run validation",
    description:
      "A Next.js trading agent platform with real-time multi-timeframe price charting, a paper-trading mode for validating strategies before risking capital, live position tracking, and a detailed agent log documenting every trading decision with timestamps and reasoning.",
    cover: "/projects/alphadeck-dashboard.webp",
    tech: ["Next.js", "TypeScript", "REST API"],
    liveUrl: "https://alphadeck-ai.vercel.app",
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
    slug: "sleep-tracker",
    name: "SleepTracker",
    tagline: "Track your sleep, improve your health, and wake up refreshed",
    description:
      "A Next.js sleep-monitoring app that logs sleep patterns and turns them into personalized insights via Chart.js visualizations, with Clerk authentication and a Prisma-backed free/premium subscription model.",
    cover: "/projects/sleep-tracker.png",
    tech: ["Next.js", "TypeScript", "Prisma", "Clerk", "Chart.js"],
    liveUrl: "https://sleep-tracker-next-steel.vercel.app",
    githubUrl: "https://github.com/eonerhime/sleep-tracker-next",
  },
];

export const shippedProjects = projects.filter((project) => project.liveUrl);

export const shippedCount = shippedProjects.length;

const numberWords = [
  "Zero",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
];

export const shippedCountWord =
  numberWords[shippedCount] ?? String(shippedCount);
