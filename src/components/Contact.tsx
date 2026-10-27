import Reveal from "./Reveal";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { contact } from "@/data/contact";

const links = [
  { ...contact.email, icon: Mail, external: false },
  { ...contact.phone, icon: Phone, external: false },
  { ...contact.linkedin, icon: LinkedinIcon, external: true },
  { ...contact.github, icon: GithubIcon, external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="text-sm font-medium tracking-widest text-accent-2 uppercase">
            Get in touch
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
            Let&apos;s build something worth documenting.
          </h2>
          <p className="mt-4 text-muted">
            Open to remote and hybrid full-stack roles, and to conversations
            about product, process, or both.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 grid gap-3 sm:grid-cols-2">
          {links.map(({ href, label, icon: Icon, external }) => (
            <a
              key={href}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm text-foreground transition-colors hover:border-accent-2 hover:text-accent-2"
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
        </Reveal>

        <Reveal delay={0.2} className="mt-8">
          <a
            href="/card"
            className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent-2"
          >
            Save or share my e-business card
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
