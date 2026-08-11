import Image from "next/image";
import { ArrowUpRight, Lock } from "lucide-react";
import type { Project } from "@/data/projects";
import Reveal from "./Reveal";
import { GithubIcon } from "./icons";

export default function ProjectCard({
  project,
  delay = 0,
}: {
  project: Project;
  delay?: number;
}) {
  return (
    <Reveal
      delay={delay}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent-2/50"
    >
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-16/10 w-full overflow-hidden bg-surface-2"
        aria-label={`Open ${project.name} live demo in a new tab`}
      >
        <Image
          src={project.cover}
          alt={`${project.name} preview`}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </span>
      </a>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-foreground">
            {project.name}
          </h3>
          {project.status ? (
            <span className="flex items-center gap-1.5 rounded-full bg-accent-2/10 px-2.5 py-1 text-xs text-accent-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-2 animate-pulse" />
              {project.status}
            </span>
          ) : !project.githubUrl ? (
            <span className="flex items-center gap-1 text-xs text-muted" title="Private repository">
              <Lock size={12} />
              Private
            </span>
          ) : null}
        </div>

        <p className="mt-1 text-sm text-accent-2">{project.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-2.5 py-1 text-xs text-foreground/80"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 pt-2 text-sm">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-accent-2"
          >
            Live demo
            <ArrowUpRight size={14} />
          </a>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-foreground"
            >
              <GithubIcon size={14} />
              Code
            </a>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}
