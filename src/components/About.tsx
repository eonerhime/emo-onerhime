import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title="Spec-first, by discipline — not by accident"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              I build with a process before I build with code. Every feature
              starts as a <span className="text-foreground">product document</span> (the
              why), a <span className="text-foreground">feature spec</span> (the what),
              and <span className="text-foreground">acceptance criteria</span> (the how) —
              because the most expensive mistake in software isn&apos;t a bug,
              it&apos;s building the wrong thing correctly.
            </p>
            <p>
              I&apos;m also passionate about Generative AI and agentic
              systems — integrating AI-assisted features into the platforms I
              build to support decision-making and automation. Most recently,
              I coordinated the DevOps/QA workstream for a Church Management
              System capstone, leading a 20-developer backend team through
              GitHub-based CI/CD, API quality assurance, and release
              processes across 141 endpoints.
            </p>
            <p>
              That discipline isn&apos;t theoretical. Before I wrote production
              code, I spent two decades leading business process
              optimization, Scrum ceremonies, and operations across telecom,
              wellness, and consulting — Mobitel, Shell, FutureShock,
              GoWellness. That background is why my engineering reads as
              documentation-first: ADRs for architecture decisions, specs for
              every feature, and backlog thinking that comes from actually
              running one.
            </p>
            <p>
              I&apos;m currently building{" "}
              <a
                href="https://hireflow-track.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-2 underline decoration-accent-2/40 underline-offset-4 hover:decoration-accent-2"
              >
                HireFlow
              </a>{" "}
              in public — every feature, spec, and architectural decision
              published as it happens.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-2xl border border-border bg-surface p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-accent-2">
                How I work
              </p>
              <ol className="mt-6 space-y-5">
                {[
                  ["01", "Why", "Product document — the problem and who it's for"],
                  ["02", "What", "Feature spec — scope, edge cases, out-of-scope"],
                  ["03", "How", "Acceptance criteria, then implementation"],
                  ["04", "Proof", "Tests (RTL/Jest) and ADRs for the decisions that matter"],
                ].map(([step, title, desc]) => (
                  <li key={step} className="flex gap-4">
                    <span className="font-mono text-sm text-muted">{step}</span>
                    <div>
                      <p className="font-medium text-foreground">{title}</p>
                      <p className="text-sm text-muted">{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
