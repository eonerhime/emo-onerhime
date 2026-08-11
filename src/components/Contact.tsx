import Reveal from "./Reveal";
import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const links = [
  {
    href: "mailto:emo.onerhime@gmail.com",
    label: "emo.onerhime@gmail.com",
    icon: Mail,
  },
  {
    href: "tel:+2348026581200",
    label: "+234 802 658 1200",
    icon: Phone,
  },
  {
    href: "https://linkedin.com/in/emoonerhime",
    label: "linkedin.com/in/emoonerhime",
    icon: LinkedinIcon,
    external: true,
  },
  {
    href: "https://github.com/eonerhime",
    label: "github.com/eonerhime",
    icon: GithubIcon,
    external: true,
  },
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
      </div>
    </section>
  );
}
