"use client";

import { motion } from "framer-motion";
import Reveal, { SectionHeading } from "./Reveal";
import { projects, type Project } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

function StackTags({ stack }: { stack: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {stack.map((s) => (
        <span
          key={s}
          className="rounded-md border border-border bg-background/50 px-2 py-0.5 font-mono text-[11px] text-muted"
        >
          {s}
        </span>
      ))}
    </div>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <Reveal className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-px">
      <div className="glow-radial pointer-events-none absolute -right-20 -top-20 h-72 w-72 opacity-50 transition-opacity duration-500 group-hover:opacity-90" />
      <div className="relative rounded-[calc(1.5rem-1px)] bg-background-soft p-7 sm:p-9">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
            ★ Featured
          </span>
          <span className="font-mono text-xs text-muted-soft">{project.year}</span>
        </div>

        <p className="font-mono text-sm text-accent">{project.category}</p>
        <h3 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">{project.name}</h3>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-7">
          <StackTags stack={project.stack} />
        </div>
      </div>
    </Reveal>
  );
}

function ProjectCard({ project, i }: { project: Project; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease, delay: i * 0.08 }}
      className="card-hover group flex flex-col rounded-2xl border border-border bg-surface p-6"
    >
      <div className="mb-4 flex items-center justify-between">
        <p className="font-mono text-xs text-accent">{project.category}</p>
        <span className="font-mono text-xs text-muted-soft">{project.year}</span>
      </div>
      <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-accent">
        {project.name}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
      <div className="mt-5">
        <StackTags stack={project.stack} />
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionHeading index="02" kicker="// selected work" title="Things I've built" />

      <div className="space-y-6">
        {featured && <FeaturedCard project={featured} />}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {rest.map((p, i) => (
            <ProjectCard key={p.name} project={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
