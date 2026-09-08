"use client"

import { motion } from "framer-motion"
import { Building2, Code2, Camera, Calendar, MapPin } from "lucide-react"
import BorderGlow from "@/components/border-glow"

interface ExperienceItem {
  title: string
  company: string
  department?: string
  location: string
  period: string
  type: "Academic" | "Technical" | "Leadership"
  icon: typeof Building2
  responsibilities: string[]
}

const EXPERIENCES: ExperienceItem[] = [
  {
    title: "Undergraduate Teaching Assistant",
    company: "East West University",
    department: "Department of Computer Science & Engineering",
    location: "Dhaka, Bangladesh",
    period: "Nov 2024 - Apr 2026",
    type: "Academic",
    icon: Building2,
    responsibilities: [
      "Assisted an Associate Professor with course delivery and academic support across the undergraduate programs",
      "Mentored students through programming labs, code reviews, and debugging in Python, C++, and Java",
      "Prepared academic resources and streamlined course material management to reduce administrative overhead",
      "Graded assignments and kept the channels between faculty and students running smoothly",
    ],
  },
  {
    title: "Member & Event Volunteer",
    company: "East West University Programming Club",
    location: "Dhaka, Bangladesh",
    period: "Dec 2023 - Jun 2026",
    type: "Technical",
    icon: Code2,
    responsibilities: [
      "Volunteered at inter-university programming contests and technical coding events",
      "Participated in ICPC-style competitions representing the university",
      "Helped organize coding workshops and technical sessions for the student community",
      "Worked with teammates to grow a healthy competitive programming culture on campus",
    ],
  },
  {
    title: "Vice President",
    company: "Government Science College Photography Club",
    location: "Dhaka, Bangladesh",
    period: "May 2018 - Nov 2020",
    type: "Leadership",
    icon: Camera,
    responsibilities: [
      "Led the National Photography Festival and coordinated its events and participants",
      "Managed the club executive team and organized volunteer activities for college festivals",
      "Won the Cloud's Den Photography Competition and showcased work at national exhibitions",
      "Represented the club in inter-college contests and public exhibitions",
    ],
  },
]

const typeAccent = {
  Academic: {
    tint: "bg-tint-blue",
    border: "border-accent-blue/40",
    text: "text-accent-blue",
    solid: "bg-accent-blue",
    glowColor: "222 90 64",
    colors: ["#4F8EF7", "#6C6EF5", "#60a5fa"],
  },
  Technical: {
    tint: "bg-tint-indigo",
    border: "border-accent-indigo/40",
    text: "text-accent-indigo",
    solid: "bg-accent-indigo",
    glowColor: "240 84 67",
    colors: ["#6C6EF5", "#818cf8", "#4F8EF7"],
  },
  Leadership: {
    tint: "bg-tint-amber",
    border: "border-accent-amber/40",
    text: "text-accent-amber",
    solid: "bg-accent-amber",
    glowColor: "43 96 56",
    colors: ["#FBBF24", "#f59e0b", "#fcd34d"],
  },
} as const

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-3xl"
        >
          <span className="section-label">Experience</span>
          <h2 className="mt-5 text-display font-bold tracking-tight balance display-text">
            Academic, technical, and leadership roles.
          </h2>
        </motion.div>

        <div className="relative max-w-4xl">
          {/* Timeline line */}
          <div className="absolute left-5 sm:left-7 top-2 bottom-2 w-px bg-[hsl(var(--border))]" />

          <div className="space-y-8">
            {EXPERIENCES.map((exp, idx) => {
              const Icon = exp.icon
              const accent = typeAccent[exp.type]
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: idx * 0.1 }}
                  className="relative pl-16 sm:pl-20"
                >
                  {/* Timeline dot — larger */}
                  <div
                    className={`absolute left-2.5 sm:left-4 top-6 w-6 h-6 rounded-full ${accent.tint} border-2 ${accent.border} grid place-items-center shadow-lg`}
                  >
                    <span className={`w-2.5 h-2.5 rounded-full ${accent.solid}`} />
                  </div>

                  {/* BorderGlow wrapping the card */}
                  <BorderGlow
                    edgeSensitivity={20}
                    glowColor={accent.glowColor}
                    colors={[...accent.colors]}
                    borderRadius={16}
                    glowRadius={50}
                    glowIntensity={1.2}
                    coneSpread={30}
                    animated={false}
                    className="w-full"
                  >
                    <div className="p-7 sm:p-9">
                      {/* Header */}
                      <div className="flex flex-wrap items-start gap-4 mb-6">
                        <div
                          className={`w-12 h-12 rounded-xl ${accent.tint} border-2 ${accent.border} grid place-items-center flex-shrink-0`}
                        >
                          <Icon className={`w-6 h-6 ${accent.text}`} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-1.5">
                            <h3 className="text-xl sm:text-2xl font-bold text-[hsl(var(--text-primary))] tracking-tight">
                              {exp.title}
                            </h3>
                            <span
                              className={`text-[11px] uppercase tracking-widest font-bold px-3 py-1 rounded-full ${accent.tint} ${accent.text}`}
                            >
                              {exp.type}
                            </span>
                          </div>
                          <p className={`text-base font-semibold ${accent.text}`}>
                            {exp.company}
                          </p>
                          {exp.department && (
                            <p className="text-sm text-tertiary italic mt-0.5">
                              {exp.department}
                            </p>
                          )}
                          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-tertiary">
                            <span className="inline-flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5" />
                              {exp.period}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5" />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-[hsl(var(--border))] mb-6" />

                      {/* Responsibilities — bigger text */}
                      <ul className="space-y-3">
                        {exp.responsibilities.map((r) => (
                          <li
                            key={r}
                            className="flex gap-3 text-base text-secondary leading-relaxed"
                          >
                            <span
                              className={`mt-2.5 w-1.5 h-1.5 rounded-full ${accent.solid} flex-shrink-0`}
                            />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </BorderGlow>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
