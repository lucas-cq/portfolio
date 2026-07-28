"use client";

import Reveal from "./Reveal";
import Logo from "./Logo";
import { profile, socials, navLinks } from "@/lib/data";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative scroll-mt-24 overflow-hidden border-t border-border">
      <div className="glow-radial pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 opacity-40" />

      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="text-center">
          <p className="font-mono text-sm text-accent">// let&apos;s build something</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-muted">
            I&apos;m {profile.availability.charAt(0).toLowerCase() + profile.availability.slice(1)}. Drop me a line and let&apos;s talk.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-xl bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(251,78,99,0.7)] transition-all hover:bg-accent-bright hover:shadow-[0_12px_50px_-8px_rgba(251,78,99,0.9)]"
            >
              {profile.email}
            </a>
          </div>
        </Reveal>

        {/* Footer bar */}
        <div className="mt-24 flex flex-col items-center justify-between gap-8 border-t border-border pt-10 md:flex-row">
          <div className="flex items-center gap-3">
            <Logo size={36} />
            <div>
              <p className="font-mono text-sm font-semibold text-foreground">{profile.name}</p>
              <p className="text-xs text-muted">
                {profile.role} · {profile.location}
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-sm">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-muted transition-colors hover:text-accent">
                {l.label}
              </a>
            ))}
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="text-muted transition-colors hover:text-accent"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="mt-8 text-center font-mono text-xs text-muted-soft">
          © {year} {profile.name} · Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
