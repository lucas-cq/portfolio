"use client";

import Image from "next/image";
import Reveal, { SectionHeading } from "./Reveal";
import { profile } from "@/lib/data";

const facts = [
  { key: "based_in", value: "Calgary, AB — born & raised" },
  { key: "crew", value: "my wife & our dog, Benji" },
  { key: "focus", value: "shipping real products, end-to-end" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionHeading index="00" kicker="// who's behind the code" title="A bit about me" />

      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Photo */}
        <Reveal className="order-1">
          <div className="group relative mx-auto max-w-sm">
            <div className="glow-radial pointer-events-none absolute -inset-6 -z-10 opacity-60 blur-xl transition-opacity duration-500 group-hover:opacity-90" />
            <div className="overflow-hidden rounded-3xl border border-border bg-surface p-2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/lucas.webp"
                  alt={`${profile.name} — ${profile.role}`}
                  fill
                  sizes="(max-width: 1024px) 90vw, 360px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
            </div>

            {/* Floating tag */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-xl border border-border bg-background-soft/90 px-4 py-2 font-mono text-xs text-muted backdrop-blur-xl">
              <span className="text-accent">const</span> me ={" "}
              <span className="text-foreground">&quot;{profile.name}&quot;</span>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <Reveal delay={0.1} className="order-2">
          <p className="text-lg leading-relaxed text-muted">
            I&apos;m a full stack
            engineer who likes shipping things people actually use. Over the last
            4+ years I&apos;ve taken a regulated fintech platform from a blank repo
            all the way to the App Store — and I care just as much about the small
            details as the big systems.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            When I&apos;m not building, you&apos;ll find me somewhere around Calgary
            with my <span className="text-foreground">wife</span> and our dog,{" "}
            <span className="text-accent">Benji</span>.
          </p>

          {/* Code-style fact block */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-background-soft font-mono text-sm">
            <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 text-xs text-muted-soft">about.ts</span>
            </div>
            <div className="space-y-1 p-5">
              {facts.map((f) => (
                <div key={f.key}>
                  <span className="text-muted-soft">{"  "}</span>
                  <span className="text-[#7ee787]">{f.key}</span>
                  <span className="text-muted-soft">: </span>
                  <span className="text-foreground/90">&quot;{f.value}&quot;</span>
                  <span className="text-muted-soft">,</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
