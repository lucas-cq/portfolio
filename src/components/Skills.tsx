"use client";

import { motion } from "framer-motion";
import Reveal, { SectionHeading } from "./Reveal";
import { skills, profile } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24"
    >
      <SectionHeading index="01" kicker="// skills" title="The stack" />

      <Reveal>
        <p className="max-w-3xl text-lg leading-relaxed text-muted">{profile.summary}</p>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <motion.div
            key={group.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease, delay: (i % 3) * 0.06 }}
            className="card-hover rounded-2xl border border-border bg-surface p-6"
          >
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                {group.label}
              </h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-border bg-background/50 px-2.5 py-1 font-mono text-xs text-muted transition-colors hover:border-accent/40 hover:text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
