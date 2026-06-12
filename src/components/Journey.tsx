"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./Reveal";
import { journey } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionHeading index="03" kicker="// the path so far" title="My journey" />

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-border to-transparent sm:left-[9px]" />

        <div className="space-y-10">
          {journey.map((entry, i) => (
            <motion.div
              key={entry.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease, delay: i * 0.08 }}
              className="relative pl-10 sm:pl-14"
            >
              {/* Node */}
              <div className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center sm:h-5 sm:w-5">
                <span className="absolute h-full w-full animate-ping rounded-full bg-accent/40" style={{ animationDuration: "3s" }} />
                <span className="relative h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
              </div>

              <div className="card-hover rounded-2xl border border-border bg-surface p-6 sm:p-7">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-0.5 font-mono text-xs text-accent">
                    {entry.tag}
                  </span>
                  <span className="font-mono text-xs text-muted-soft">{entry.period}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground sm:text-xl">{entry.role}</h3>
                <p className="mt-1 text-sm text-muted">
                  {entry.org} · {entry.location}
                </p>
                <ul className="mt-4 space-y-2">
                  {entry.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
