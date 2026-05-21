"use client"

import { motion } from "framer-motion"
import { Award, Trophy, GraduationCap, Medal } from "lucide-react"

interface Achievement {
  title: string
  organization: string
  description?: string
  year: string
  type: "Scholarship" | "Competition"
  icon: typeof Award
  rank?: string
}

const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Full Tuition-Free Merit Scholarship",
    organization: "East West University",
    description: "100% tuition waiver awarded for academic excellence",
    year: "2022",
    type: "Scholarship",
    icon: GraduationCap,
    rank: "100%",
  },
  {
    title: "Dean's Merit Scholarship",
    organization: "East West University",
    description: "Awarded for top academic standing in the Spring 2025 semester",
    year: "Spring 2025",
    type: "Scholarship",
    icon: Award,
  },
  {
    title: "Merit Scholarship & Dean's List",
    organization: "East West University",
    description: "Recognized for outstanding academic performance in Fall 2024",
    year: "Fall 2024",
    type: "Scholarship",
    icon: Award,
  },
  {
    title: "Champion — Cloud's Den Photography Competition",
    organization: "Cloud's Den",
    description: "Secured 1st place among 15 competing teams",
    year: "2022",
    type: "Competition",
    icon: Trophy,
    rank: "1st",
  },
  {
    title: "Runner-Up — Short Film Making Contest",
    organization: "Scholastica Photography Festival",
    description: "Placed 2nd in the inter-college short film competition",
    year: "2022",
    type: "Competition",
    icon: Medal,
    rank: "2nd",
  },
]

const typeStyle = {
  Scholarship: {
    tint: "bg-tint-amber",
    border: "border-accent-amber/40",
    text: "text-accent-amber",
    solid: "bg-accent-amber",
    label: "Scholarship",
  },
  Competition: {
    tint: "bg-tint-indigo",
    border: "border-accent-indigo/40",
    text: "text-accent-indigo",
    solid: "bg-accent-indigo",
    label: "Competition",
  },
} as const

export function Achievements() {
  return (
    <section id="achievements" className="section-canvas relative py-14 sm:py-20">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-3xl"
        >
          <span className="section-label">Achievements</span>
          <h2 className="mt-5 text-display font-bold tracking-tight balance display-text">
            Scholarships &amp; competition wins.
          </h2>
          <p className="mt-4 text-lg text-secondary pretty">
            A track record of academic merit and creative competition results
            spanning university and pre-university work.
          </p>
        </motion.div>

        <div className="grid gap-4 max-w-4xl">
          {ACHIEVEMENTS.map((a, idx) => {
            const style = typeStyle[a.type]
            const Icon = a.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="card-pro card-pro-lift p-5 sm:p-6 flex flex-col sm:flex-row items-start gap-5"
              >
                {/* Icon block */}
                <div className="flex-shrink-0 flex items-center gap-4 sm:flex-col sm:gap-2">
                  <div
                    className={`w-14 h-14 rounded-xl ${style.tint} border ${style.border} grid place-items-center`}
                  >
                    <Icon className={`w-6 h-6 ${style.text}`} />
                  </div>
                  {a.rank && (
                    <div
                      className={`hidden sm:flex items-center justify-center px-2 py-0.5 rounded ${style.tint} ${style.text} text-[11px] font-bold font-mono uppercase tracking-wider`}
                    >
                      {a.rank}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span
                      className={`text-[10px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded ${style.tint} ${style.text}`}
                    >
                      {style.label}
                    </span>
                    {a.rank && (
                      <span className="sm:hidden text-[11px] font-mono font-bold text-secondary">
                        {a.rank}
                      </span>
                    )}
                    <span className="text-[11px] text-tertiary font-mono">
                      {a.year}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-[hsl(var(--text-primary))] leading-tight">
                    {a.title}
                  </h3>
                  <p className={`text-sm font-medium mt-1 ${style.text}`}>
                    {a.organization}
                  </p>
                  {a.description && (
                    <p className="text-sm text-secondary mt-2 leading-relaxed">
                      {a.description}
                    </p>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
