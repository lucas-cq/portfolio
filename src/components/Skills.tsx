"use client";

import { motion } from "framer-motion";
import Reveal, { SectionHeading } from "./Reveal";
import { skills, profile } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading index="01" kicker="// the stack" title="Skills, written in CSS" />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left — summary */}
        <Reveal>
          <p className="text-lg leading-relaxed text-muted">{profile.summary}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {["Node.js", "TypeScript", "Next.js", "React", "Firebase", "GCP"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-surface px-3.5 py-1.5 font-mono text-xs text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Right — CSS-styled skill block */}
        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-2xl border border-border bg-background-soft shadow-2xl shadow-black/40">
            {/* Window chrome */}
            <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-2 font-mono text-xs text-muted-soft">skills.css</span>
            </div>

            <div className="overflow-x-auto p-5 font-mono text-sm leading-relaxed">
              <div className="text-muted-soft">
                <span className="text-accent">.lucasCummings</span> {"{"}
              </div>
              {skills.map((group, gi) => (
                <motion.div
                  key={group.key}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease, delay: gi * 0.06 }}
                  className="group pl-5"
                >
                  <span className="text-[#7ee787]">--{group.key}</span>
                  <span className="text-muted-soft">: </span>
                  <span className="text-foreground/90">
                    {group.items.map((item, i) => (
                      <span key={item}>
                        <span className="rounded px-0.5 transition-colors group-hover:bg-accent/10 group-hover:text-accent">
                          {item}
                        </span>
                        {i < group.items.length - 1 && (
                          <span className="text-muted-soft">, </span>
                        )}
                      </span>
                    ))}
                  </span>
                  <span className="text-muted-soft">;</span>
                </motion.div>
              ))}
              <div className="text-muted-soft">{"}"}</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
