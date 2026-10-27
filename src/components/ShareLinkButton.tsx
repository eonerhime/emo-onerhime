"use client";

import { useState } from "react";
import { Check, Share2 } from "lucide-react";

export default function ShareLinkButton({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const [copied, setCopied] = useState(false);

  async function share() {
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch (error) {
        // Closing the share sheet is not a failure; anything else falls back to copying.
        if (error instanceof DOMException && error.name === "AbortError") return;
      }
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={share}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm text-foreground transition-colors hover:border-accent-2 hover:text-accent-2"
    >
      {copied ? <Check size={16} /> : <Share2 size={16} />}
      <span aria-live="polite">{copied ? "Link copied" : "Share link"}</span>
    </button>
  );
}
