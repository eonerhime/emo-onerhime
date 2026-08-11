import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="work" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Selected work"
          title="Six products, shipped end to end"
          description="Each link opens the live product in a new tab. Private repos are noted — the code stays closed, the product doesn't."
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <li key={project.slug}>
              <ProjectCard project={project} delay={(i % 3) * 0.08} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
