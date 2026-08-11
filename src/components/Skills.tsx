import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skillGroups, certifications } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="The stack behind the specs"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.label}
              delay={i * 0.06}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-accent-2">
                {group.label}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border px-3 py-1 text-sm text-foreground/90"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-8 rounded-2xl border border-border bg-surface p-6">
          <p className="font-mono text-xs uppercase tracking-widest text-accent-2">
            Certifications
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="rounded-full bg-surface-2 px-3 py-1 text-sm text-muted"
              >
                {cert}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
