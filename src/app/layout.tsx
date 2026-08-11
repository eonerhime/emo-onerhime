import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://emo-onerhime.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Emo Onerhime — Full-Stack Product Engineer",
  description:
    "Full-Stack Product Engineer & AI Agent Developer specializing in Spec-Driven Development — React, Next.js, Node.js & PostgreSQL. Portfolio of shipped products including SportsPred, HireFlow, AfroJamz, toutMessages, Abara & Glowreeyah.",
  openGraph: {
    title: "Emo Onerhime — Full-Stack Product Engineer",
    description:
      "AI Agent Developer & Spec-Driven Development across React, Next.js, Node.js & PostgreSQL. Six shipped products, from spec to production.",
    url: siteUrl,
    siteName: "Emo Onerhime",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Emo Onerhime — Full-Stack Product Engineer",
    description:
      "AI Agent Developer & Spec-Driven Development across React, Next.js, Node.js & PostgreSQL.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
