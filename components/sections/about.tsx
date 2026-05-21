"use client"

import { motion, useInView } from "framer-motion"
import { GraduationCap, Briefcase, MapPin, Calendar } from "lucide-react"
import CountUp from "react-countup"
import { useRef } from "react"

const STATS = [
  { value: 3.92, suffix: "/4.00", decimals: 2, label: "CGPA" },
  { value: 9, suffix: "+", decimals: 0, label: "Projects shipped" },
  { value: 200, suffix: "+", decimals: 0, label: "SaaS members" },
  { value: 93, suffix: "", decimals: 0, label: "TOEFL score" },
]

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32"
      ref={ref}
    >
      <div className="container relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="section-label">About</span>
          <h2 className="mt-5 text-display font-bold tracking-tight balance display-text">
            Engineering AI systems that{" "}
            <span className="text-gradient-pro">ship</span> and{" "}
            <span className="text-gradient-pro">scale</span>.
          </h2>
        </motion.div>

        {/* Bento: bio + stats */}
        <div className="grid lg:grid-cols-3 gap-5 mb-10">
          {/* Bio (2/3) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-2 card-pro p-7 sm:p-9"
          >
            <div className="space-y-5 text-lg sm:text-xl leading-relaxed text-secondary pretty">
              <p>
                Hey — I&apos;m Shahriar, a CSE grad from{" "}
                <span className="text-[hsl(var(--text-primary))] font-medium">
                  East West University, Dhaka
                </span>
                . I graduated with a 3.92 CGPA on a full merit scholarship, and
                I&apos;ve spent most of my university years building things
                that actually run in production.
              </p>
              <p>
                Some of that work:{" "}
                <span className="text-accent-blue">
                  an AI-powered traffic enforcement app
                </span>{" "}
                for Dhaka officers using YOLOv11,{" "}
                <span className="text-accent-blue">
                  an election analytics dashboard
                </span>{" "}
                predicting seat outcomes across Bangladesh, and{" "}
                <span className="text-accent-blue">
                  a SaaS platform with 200+ paying users
                </span>
                . I like projects where real people depend on the output.
              </p>
              <p>
                Right now I&apos;m looking for a team that wants to build
                something that matters — full-time roles, research
                collaborations, or just a good conversation about AI.
              </p>
            </div>
          </motion.div>

          {/* Stats (1/3) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="grid grid-cols-2 gap-3"
          >
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="card-pro p-5 flex flex-col justify-between min-h-[120px]"
              >
                <div className="text-3xl sm:text-4xl font-bold font-mono text-accent-blue leading-none">
                  {inView ? (
                    <CountUp
                      end={stat.value}
                      duration={2}
                      decimals={stat.decimals}
                      suffix={stat.suffix}
                    />
                  ) : (
                    <>0{stat.suffix}</>
                  )}
                </div>
                <div className="text-xs uppercase tracking-wider text-tertiary mt-3">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Education + Current role */}
        <div className="grid md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="card-pro card-pro-lift p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-tint-blue border border-accent-blue/30 grid place-items-center flex-shrink-0">
                <GraduationCap className="w-5 h-5 text-accent-blue" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] uppercase tracking-widest text-tertiary mb-1">
                  Education
                </div>
                <h3 className="font-semibold text-[hsl(var(--text-primary))]">
                  B.Sc. in Computer Science &amp; Engineering
                </h3>
                <p className="text-sm text-secondary mt-1">
                  East West University · Dhaka, Bangladesh
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <span className="inline-flex items-center gap-1.5 text-xs text-tertiary">
                    <Calendar className="w-3.5 h-3.5" />
                    Class of 2026
                  </span>
                  <span className="pill text-accent-emerald border-accent-emerald">
                    CGPA 3.92 / 4.00
                  </span>
                  <span className="pill">Full Merit Scholarship</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="card-pro card-pro-lift p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-tint-indigo border border-accent-indigo/30 grid place-items-center flex-shrink-0">
                <Briefcase className="w-5 h-5 text-accent-indigo" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] uppercase tracking-widest text-tertiary mb-1">
                  Current Role
                </div>
                <h3 className="font-semibold text-[hsl(var(--text-primary))]">
                  Undergraduate Teaching Assistant
                </h3>
                <p className="text-sm text-secondary mt-1">
                  Dept. of Computer Science &amp; Engineering, EWU
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <span className="inline-flex items-center gap-1.5 text-xs text-tertiary">
                    <Calendar className="w-3.5 h-3.5" />
                    Nov 2024 — Present
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-tertiary">
                    <MapPin className="w-3.5 h-3.5" />
                    Dhaka, Bangladesh
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
