import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience, priorExperience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="From process leadership to production code"
        />

        <div className="mx-auto mt-14 max-w-3xl space-y-8">
          {experience.map((role, i) => (
            <Reveal
              key={role.org}
              delay={i * 0.1}
              className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {role.role} · <span className="text-accent-2">{role.org}</span>
                </h3>
                <span className="font-mono text-xs text-muted">{role.period}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {role.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          <Reveal delay={0.2}>
            <details className="group rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <summary className="cursor-pointer list-none text-sm font-medium text-foreground">
                20+ years of prior process &amp; operations leadership
                <span className="ml-2 text-muted group-open:hidden">— expand</span>
              </summary>
              <ul className="mt-5 space-y-3">
                {priorExperience.map((role) => (
                  <li
                    key={role.org}
                    className="flex flex-wrap items-baseline justify-between gap-2 border-t border-border pt-3 text-sm"
                  >
                    <span className="text-muted">
                      {role.role} · <span className="text-foreground/80">{role.org}</span>
                    </span>
                    <span className="font-mono text-xs text-muted">{role.period}</span>
                  </li>
                ))}
              </ul>
            </details>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
