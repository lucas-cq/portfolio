"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Logo from "./Logo";
import { profile, stats } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 120, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid"
    >
      {/* Ambient glow */}
      <div className="glow-radial pointer-events-none absolute -right-40 top-1/4 h-[600px] w-[600px] opacity-70" />
      <div className="glow-radial pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] opacity-40" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 pt-32 pb-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:pt-24">
        {/* Left — code identity */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3.5 py-1.5 text-xs text-muted backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.availability}
          </motion.div>

          <div className="font-mono">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.05 }}
              className="text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl"
            >
              {profile.handle}
              <span className="text-accent">()</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.15 }}
              className="mt-3 text-xl font-semibold sm:text-2xl"
            >
              <span className="text-muted-soft">{"// "}</span>
              <span className="text-foreground/85">{profile.role.toLowerCase()}</span>
              <span className="text-muted-soft"> · {profile.subRole.toLowerCase()}</span>
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(251,78,99,0.7)] transition-all hover:bg-accent-bright hover:shadow-[0_12px_50px_-8px_rgba(251,78,99,0.9)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-border-strong bg-surface/40 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-accent/50 hover:text-accent"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.5 }}
            className="mt-12 flex max-w-md gap-8"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-mono text-2xl font-bold text-foreground sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs leading-tight text-muted">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — interactive monogram */}
        <motion.div
          ref={ref}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
          className="relative hidden items-center justify-center lg:flex"
          style={{ perspective: 1000 }}
        >
          <motion.div
            style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
            className="relative"
          >
            <div className="glow-radial absolute inset-0 -z-10 scale-150 blur-2xl" />
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Logo size={360} className="drop-shadow-[0_30px_60px_rgba(251,78,99,0.25)]" />
            </motion.div>
          </motion.div>

          {/* Floating code chips */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-2 top-6 rounded-xl border border-border bg-surface/80 px-3 py-2 font-mono text-xs text-muted backdrop-blur-xl"
          >
            <span className="text-accent">const</span> role ={" "}
            <span className="text-foreground">&quot;fullstack&quot;</span>
          </motion.div>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-1 bottom-10 rounded-xl border border-border bg-surface/80 px-3 py-2 font-mono text-xs text-muted backdrop-blur-xl"
          >
            <span className="text-accent">deploy</span>(iOS, Android, web)
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-border-strong p-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
