"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const stats = [
  { value: "6", label: "Products shipped" },
  { value: "5+", label: "Years engineering" },
  { value: "20+", label: "Years process leadership" },
  { value: "PSM I", label: "Certified Scrum Master" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid pt-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-140 w-140 -translate-x-1/2 rounded-full bg-accent/25 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 h-105 w-105 rounded-full bg-accent-2/20 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-20">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-sm text-accent-2"
        >
          Hi, I&apos;m Emo Onerhime —
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          I build software the way I write{" "}
          <span className="text-gradient">specs</span> — deliberately.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-muted"
        >
          Full-stack engineer specializing in Spec-Driven Development —
          Next.js, TypeScript, and PostgreSQL, with the why, what, and how
          documented before a single line of implementation ships.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
          >
            View my work
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent-2 hover:text-accent-2"
          >
            Get in touch
          </a>

          <div className="ml-1 flex items-center gap-3 text-muted">
            <a
              href="https://github.com/eonerhime"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-foreground"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://linkedin.com/in/emoonerhime"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-foreground"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-8 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-2xl font-semibold text-foreground sm:text-3xl">
                {stat.value}
              </dd>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
