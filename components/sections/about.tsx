"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import CountUp from "react-countup"

const STATS = [
  { value: 3.92,  suffix: " GPA",   decimals: 2, label: "On a 100% scholarship" },
  { value: 9,     suffix: "+",      decimals: 0, label: "Projects shipped to production" },
  { value: 200,   suffix: "+",      decimals: 0, label: "Paying SaaS members" },
  { value: 93,    suffix: "/120",   decimals: 0, label: "TOEFL iBT Score" },
]

/* A marquee phrase like nevo's "I CAN'T STOP CONFIGURING MY CODE EDITOR" */
const MARQUEE_PHRASE =
  "AI/ML Engineer · Computer Vision · Full-Stack · Open to full-time & PhD · "

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden" ref={ref}>
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
            className="font-bold leading-[1.08] tracking-tight text-[hsl(var(--text-primary))] balance"
            style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)" }}
          >
            I believe the best systems are ones
            that{" "}
            <span className="text-secondary italic font-light">actually run</span> —
            built on real data,{" "}
            <span className="text-secondary italic font-light">deployed to real people</span>,
            and maintained with the same care they were shipped with.
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
              Also known as <span className="text-[hsl(var(--text-primary))] font-medium">Turjo</span>,
              a CSE graduate from East West University, Dhaka —
              focused on building AI and full-stack systems
              with clean code and real impact.
            </p>

            {/* Stats column */}
            <div className="mt-8 space-y-4">
              {STATS.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
                  className="flex items-baseline gap-3"
                >
                  <span className="font-black font-mono text-accent-blue text-2xl sm:text-3xl leading-none tabular-nums">
                    {inView ? (
                      <CountUp
                        end={s.value}
                        duration={2}
                        decimals={s.decimals}
                        suffix={s.suffix}
                      />
                    ) : (
                      `0${s.suffix}`
                    )}
                  </span>
                  <span className="text-xs text-tertiary leading-tight">{s.label}</span>
                </motion.div>
              ))}
            </div>
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
                I spent my university years building things that run in production,
                not just in a dev environment. From{" "}
                <span className="text-[hsl(var(--text-primary))] font-medium">
                  real-time YOLOv11 traffic enforcement
                </span>{" "}
                deployed for Dhaka officers, to an{" "}
                <span className="text-[hsl(var(--text-primary))] font-medium">
                  election analytics dashboard
                </span>{" "}
                that modelled 297 constituencies with 84.78% accuracy, to a{" "}
                <span className="text-[hsl(var(--text-primary))] font-medium">
                  SaaS platform
                </span>{" "}
                with 200+ paying users — every project had real stakes.
              </p>
              <p>
                My approach is straightforward: understand the problem deeply,
                pick the right tools, ship fast, and iterate. I care about the
                parts that usually get skipped — edge optimization, reproducible
                pipelines, clean APIs that stay clean six months later.
              </p>
              <p>
                Right now I&apos;m looking for a team building something that matters.
                Full-time ML/SWE roles, research collaborations, or a fully funded
                PhD in AI and Computer Vision — any of those sound right to me.
              </p>
            </div>

            {/* Education + role strip */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-[hsl(var(--border))]">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-tertiary mb-1.5 font-mono">
                  Education
                </p>
                <p className="text-sm font-semibold text-[hsl(var(--text-primary))]">
                  B.Sc. CSE — East West University
                </p>
                <p className="text-xs text-tertiary mt-0.5">Dhaka, Bangladesh · Class of 2026</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-tertiary mb-1.5 font-mono">
                  Teaching Role
                </p>
                <p className="text-sm font-semibold text-[hsl(var(--text-primary))]">
                  Undergraduate Teaching Assistant
                </p>
                <p className="text-xs text-tertiary mt-0.5">Dept. of CSE, EWU · Nov 2024 — Present</p>
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
