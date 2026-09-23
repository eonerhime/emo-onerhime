import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { shippedCountWord, shippedProjects } from "@/data/projects";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://emo-onerhime.vercel.app";

const shippedNames = shippedProjects.map((project) => project.name);
const shippedNameList =
  shippedNames.length > 1
    ? `${shippedNames.slice(0, -1).join(", ")} & ${shippedNames.at(-1)}`
    : shippedNames.join("");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Emo Onerhime — Full-Stack Product Engineer",
  description: `Full-Stack Product Engineer & AI Agent Developer specializing in Spec-Driven Development — React, Next.js, Node.js & PostgreSQL. Portfolio of shipped products including ${shippedNameList}.`,
  openGraph: {
    title: "Emo Onerhime — Full-Stack Product Engineer",
    description:
      `AI Agent Developer & Spec-Driven Development across React, Next.js, Node.js & PostgreSQL. ${shippedCountWord} shipped products, from spec to production.`,
    url: siteUrl,
    siteName: "Emo Onerhime",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
