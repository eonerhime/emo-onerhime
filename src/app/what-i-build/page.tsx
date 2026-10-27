import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Download, MessageCircle } from "lucide-react";
import ShareLinkButton from "@/components/ShareLinkButton";
import { profile, siteUrl } from "@/data/contact";
import { services } from "@/data/services";
import { productCardAlt, productCardSize } from "@/lib/product-card";

const pageUrl = `${siteUrl}/what-i-build`;
const title = `What ${profile.name} builds`;
const description = `${services.map((service) => service.title).join(" · ")}. See the work.`;
const whatsappText = `Here's what I build: ${services
  .map((service) => service.title)
  .join(", ")}. See the work: ${pageUrl}`;

// The share link: a public page, kept out of search results.
export const metadata: Metadata = {
  title,
  description,
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: profile.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const downloads = [
  { href: "/what-i-build/emo-onerhime-what-i-build.png", label: "Image for chats" },
  {
    href: "/what-i-build/emo-onerhime-what-i-build-status.png",
    label: "Image for Status",
  },
];

const secondary =
  "inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm text-foreground transition-colors hover:border-accent-2 hover:text-accent-2";

export default function WhatIBuildPage() {
  const { width, height } = productCardSize("square");

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

      <div className="relative w-full max-w-xl">
        <a
          href={siteUrl}
          className="font-mono text-sm font-semibold tracking-tight text-foreground"
        >
          emo<span className="text-accent-2">.</span>onerhime
        </a>

        <Image
          src="/what-i-build/emo-onerhime-what-i-build.png"
          alt={productCardAlt}
          width={width}
          height={height}
          unoptimized
          priority
          className="mt-6 h-auto w-full rounded-2xl border border-border shadow-2xl shadow-black/60"
        />

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={`${siteUrl}/#work`}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
          >
            See the work
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(whatsappText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={secondary}
          >
            <MessageCircle size={16} />
            Share on WhatsApp
          </a>
          <ShareLinkButton url={pageUrl} title={title} />
        </div>

        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {downloads.map(({ href, label }) => (
            <a key={href} href={href} download className={secondary}>
              <Download size={16} />
              {label}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
