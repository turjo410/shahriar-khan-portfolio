"use client"

import { motion } from "framer-motion"

const ABOUT_FACTS = [
  { term: "Degree", detail: "B.Sc. in CSE, East West University" },
  { term: "Focus", detail: "Computer vision, deep learning, full-stack" },
  { term: "Currently", detail: "Open to full-time roles and funded PhDs" },
]

/* A marquee phrase like nevo's "I CAN'T STOP CONFIGURING MY CODE EDITOR" */
const MARQUEE_PHRASE =
  "AI/ML Engineer · Computer Vision · Full-Stack · Open to full-time & PhD · "

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="container relative">

        {/* ── 1. Giant editorial statement ──────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 sm:mb-28"
        >
          <p
            className="text-center font-bold leading-[0.95] tracking-tight text-[hsl(var(--text-primary))] balance"
            style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
          >
            &ldquo;Learn to live, live to learn.&rdquo;
          </p>
        </motion.div>

        {/* ── 2. Two-column split ───────────────────────────────────── */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-20 sm:mb-28">

          {/* Left — name + short identity */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4"
          >
            {/* "This is me." label */}
            <p className="text-xs uppercase tracking-[0.2em] text-tertiary mb-5 font-mono">
              This is me.
            </p>

            <div className="mb-6 h-px bg-[hsl(var(--border))]" />

            <h2
              className="font-black leading-none mb-4 text-[hsl(var(--text-primary))]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              I&apos;m Shahriar.
            </h2>

            <p className="text-sm sm:text-base text-secondary leading-relaxed">
              I go by{" "}
              <span className="text-[hsl(var(--text-primary))] font-medium">Turjo</span>{" "}
              to most people. I recently graduated with a B.Sc. in Computer
              Science and Engineering from East West University, Dhaka, where I
              focused on building AI and full-stack systems with clean code and
              real impact.
            </p>

            {/* Fast facts */}
            <dl className="mt-8 space-y-4">
              {ABOUT_FACTS.map((f, i) => (
                <motion.div
                  key={f.term}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.15 + i * 0.08 }}
                  className="flex flex-col gap-0.5 border-l-2 border-[hsl(var(--border-accent))] pl-3"
                >
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-tertiary font-mono">
                    {f.term}
                  </dt>
                  <dd className="text-sm text-secondary font-medium">
                    {f.detail}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>

          {/* Right — longer description */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 flex flex-col justify-between gap-8"
          >
            <div className="space-y-5 text-base sm:text-lg leading-relaxed text-secondary pretty">
              <p>
                I spent my university years building things meant to run in
                production, not just in a dev environment. From{" "}
                <span className="text-[hsl(var(--text-primary))] font-medium">
                  a real-time traffic surveillance platform
                </span>{" "}
                built in collaboration with the Dhaka Metropolitan Police, to
                an{" "}
                <span className="text-[hsl(var(--text-primary))] font-medium">
                  election analytics dashboard
                </span>{" "}
                that modelled the national parliamentary election, to{" "}
                <span className="text-[hsl(var(--text-primary))] font-medium">
                  an AI learning platform
                </span>{" "}
                with real users, every project had real stakes.
              </p>
              <p>
                My approach is straightforward: understand the problem deeply,
                pick the right tools, ship fast, and iterate. I care about the
                parts that usually get skipped, edge optimization, reproducible
                pipelines, and clean APIs that still make sense months later.
              </p>
              <p>
                Right now I&apos;m looking for a team building something that
                matters. Full-time ML and software roles, research
                collaborations, or a fully funded PhD in AI and computer
                vision, any of those would be a great fit for me.
              </p>
            </div>

            {/* Education + role strip */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-[hsl(var(--border))]">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-tertiary mb-1.5 font-mono">
                  Education
                </p>
                <p className="text-sm font-semibold text-[hsl(var(--text-primary))]">
                  B.Sc. CSE, East West University
                </p>
                <p className="text-xs text-tertiary mt-0.5">Dhaka, Bangladesh · 2022 - 2026</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-tertiary mb-1.5 font-mono">
                  Teaching Role
                </p>
                <p className="text-sm font-semibold text-[hsl(var(--text-primary))]">
                  Undergraduate Teaching Assistant
                </p>
                <p className="text-xs text-tertiary mt-0.5">Dept. of CSE, EWU · Nov 2024 - Apr 2026</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── 3. Bottom marquee — full width, breaks out of container ── */}
      </div>

      {/* Full-width marquee — outside container */}
      <div className="overflow-hidden border-t border-b border-[hsl(var(--border))] py-4 mt-0 w-full">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...Array(2)].map((_, i) => (
            <span
              key={i}
              className="text-sm sm:text-base uppercase tracking-[0.18em] font-mono
                         text-accent-blue flex-shrink-0"
            >
              {MARQUEE_PHRASE}&nbsp;&nbsp;&nbsp;
              {MARQUEE_PHRASE}&nbsp;&nbsp;&nbsp;
              {MARQUEE_PHRASE}&nbsp;&nbsp;&nbsp;
              {MARQUEE_PHRASE}&nbsp;&nbsp;&nbsp;
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
