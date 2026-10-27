import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import ShareCardButton from "@/components/ShareCardButton";
import { profile, siteHost, siteUrl } from "@/data/contact";
import { cardAlt, cardPx } from "@/lib/card";

const cardUrl = `${siteUrl}/card`;
const title = `${profile.name} — Business card`;
const description = `${profile.role} & ${profile.roleSecondary}. Tap through to the portfolio.`;

// The share link: a public page, kept out of search results.
export const metadata: Metadata = {
  title,
  description,
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    url: cardUrl,
    siteName: profile.name,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const downloads = [
  { href: "/card/emo-onerhime-card.png", label: "Download PNG" },
  { href: "/card/emo-onerhime-card.pdf", label: "Download PDF" },
];

export default function CardPage() {
  const { width, height } = cardPx(600);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-grid px-4 py-16 sm:px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/4 h-120 w-120 rounded-full bg-accent/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-accent-2/15 blur-[120px]"
      />

      <div className="relative w-full max-w-2xl">
        <a
          href={siteUrl}
          className="font-mono text-sm font-semibold tracking-tight text-foreground"
        >
          emo<span className="text-accent-2">.</span>onerhime
        </a>

        <Image
          src="/card/emo-onerhime-card.png"
          alt={cardAlt}
          width={width}
          height={height}
          unoptimized
          priority
          className="mt-6 h-auto w-full rounded-2xl border border-border shadow-2xl shadow-black/60"
        />

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={siteUrl}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
          >
            Visit {siteHost}
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          {downloads.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm text-foreground transition-colors hover:border-accent-2 hover:text-accent-2"
            >
              <Download size={16} />
              {label}
            </a>
          ))}
          <ShareCardButton url={cardUrl} title={title} />
        </div>

        <p className="mt-6 text-sm text-muted">
          85 × 55 mm, print-ready at 600 dpi.
        </p>
      </div>
    </main>
  );
}
