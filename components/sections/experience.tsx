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
    period: "Nov 2024 — Present",
    type: "Academic",
    icon: Building2,
    responsibilities: [
      "Assist Associate Professor in course delivery and academic support for 80+ undergraduate students",
      "Streamlined course material management, reducing administrative workload by 30%",
      "Grade assignments and provide technical mentorship on programming concepts and algorithms",
      "Manage digital resources and faculty-student communication channels",
    ],
  },
  {
    title: "General Member",
    company: "East West University Programming Club",
    location: "Dhaka, Bangladesh",
    period: "Dec 2023 — Present",
    type: "Technical",
    icon: Code2,
    responsibilities: [
      "Volunteered at 5+ programming contests including inter-university competitive coding events",
      "Participated in multiple ICPC-style programming competitions representing the university",
      "Co-organized coding workshops and technical sessions reaching 100+ students",
      "Collaborated with team members to grow competitive programming culture on campus",
    ],
  },
  {
    title: "Vice President",
    company: "Government Science College Photography Club",
    location: "Dhaka, Bangladesh",
    period: "May 2018 — Nov 2020",
    type: "Leadership",
    icon: Camera,
    responsibilities: [
      "Led the National Photography Festival with 200+ participants across 15+ events",
      "Managed a 20-member executive committee and organized volunteer activities for college festivals",
      "Secured 1st place in Cloud's Den Photography Competition among 15 teams",
      "Showcased work at Drik's Gallery Exhibition and AIUB Science Festival Poster Competition",
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
