"use client"

import { motion } from "framer-motion"
import { useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"

/* =========================================================================
   Project data — all real projects, ordered by impact
   ========================================================================= */

interface Project {
  num: string          // "_01.", "_02." etc.
  id: string
  title: string
  logline: string      // one sentence — the whole description
  facts: string        // 3 facts separated by " · "
  tags: string[]       // max 3 plain-text technology tags
  year: string
  status: "Live" | "Deployed" | "Research"
  image?: string
  links: {
    github?: string
    demo?: string
  }
}

const PROJECTS: Project[] = [
  {
    num: "_01.",
    id: "trafficguard-ai",
    title: "TrafficGuard AI",
    logline: "Real-time YOLOv11 enforcement platform for Dhaka traffic officers — 16 vehicle classes, ANPR, and a Gemini AI inspector assistant.",
    facts: "Flutter + Python + Flask · 16 vehicle classes · Biometric case filing",
    tags: ["AI/ML", "Mobile", "Flutter"],
    year: "2025",
    status: "Research",
    image: "/projects/trafficguard-architecture.jpg",
    links: { github: "https://github.com/turjo410/trafficguard-ai" },
  },
  {
    num: "_02.",
    id: "election-analytics",
    title: "Bangladesh Election Analytics 2026",
    logline: "PySpark + Next.js dashboard that modelled the 13th Parliamentary election — 84.78% Random Forest accuracy across 297 constituencies.",
    facts: "PySpark · MLlib · React Native · 84.78% RF accuracy",
    tags: ["Data Science", "Next.js", "PySpark"],
    year: "2026",
    status: "Live",
    image: "/projects/election-parliament-arc.jpg",
    links: {
      github: "https://github.com/turjo410/bangladesh-election-analytics-2026",
      demo: "https://dashboard-cse488-lab.vercel.app/",
    },
  },
  {
    num: "_03.",
    id: "promptmaster-pro",
    title: "PromptMaster Pro",
    logline: "Production EdTech SaaS for AI prompt engineering — 200+ paying members, 59 structured lessons, gamified badges, Supabase auth.",
    facts: "React · Supabase · Lemon Squeezy · 200+ members",
    tags: ["SaaS", "React", "EdTech"],
    year: "2025",
    status: "Live",
    image: "/projects/promptmaster-dashboard.jpg",
    links: { demo: "https://promptmasterpro.tech" },
  },
  {
    num: "_04.",
    id: "banana-xai",
    title: "Banana XAI Classification",
    logline: "Streamlit research app classifying 4 Bangladeshi banana varieties with 12 deep learning models and 5 explainable AI methods.",
    facts: "PyTorch · Grad-CAM · LIME · ViT · 12 models",
    tags: ["AI Research", "Python", "XAI"],
    year: "2025",
    status: "Live",
    image: "/projects/banana-xai-grid.jpg",
    links: {
      github: "https://github.com/turjo410/banana-xai-classification",
      demo: "https://bananaapp.streamlit.app",
    },
  },
  {
    num: "_05.",
    id: "neofocus",
    title: "NeoFocus",
    logline: "Gamified Flutter + Supabase productivity app with a custom Pomodoro arc timer, habit rings, and XP progression system.",
    facts: "Flutter · Supabase · Riverpod",
    tags: ["Mobile", "Flutter", "Productivity"],
    year: "2025",
    status: "Deployed",
    image: "/projects/neofocus-screens.jpg",
    links: { github: "https://github.com/turjo410/NeoFocus" },
  },
  {
    num: "_06.",
    id: "energyiq",
    title: "EnergyIQ — IoT Energy Dashboard",
    logline: "Scroll-driven Next.js dashboard visualising real IoT energy data from a TOMZN smart meter on a Sharp refrigerator.",
    facts: "Next.js · Recharts · Tuya IoT · Real hardware",
    tags: ["Full-Stack", "IoT", "Next.js"],
    year: "2025",
    status: "Live",
    image: "/projects/energyiq-dashboard.jpg",
    links: {
      github: "https://github.com/turjo410/iot-energy-dashboard",
      demo: "https://turjo410.github.io/iot-energy-dashboard/",
    },
  },
  {
    num: "_07.",
    id: "jetstream",
    title: "JetStream Music Player",
    logline: "Hybrid streaming platform — glassmorphism React web client, Expo mobile app, and a Node.js server that resolves YouTube audio streams.",
    facts: "React · Expo · Express · Web Audio API",
    tags: ["Full-Stack", "Mobile", "React"],
    year: "2026",
    status: "Deployed",
    image: "/projects/jetstream-web.jpg",
    links: { github: "https://github.com/turjo410/jetstream-music-player" },
  },
  {
    num: "_08.",
    id: "expense-tracker",
    title: "Student Expense Tracker",
    logline: "Offline-first Flutter finance app with OCR receipt scanning, savings goals, budget alerts, and 17 student-specific categories.",
    facts: "Flutter · SQLite · Google ML Kit · Firebase",
    tags: ["Mobile", "Flutter", "Finance"],
    year: "2024",
    status: "Deployed",
    image: "/projects/expense-tracker-screens.jpg",
    links: { github: "https://github.com/turjo410/student-expense-tracker" },
  },
  {
    num: "_09.",
    id: "saiful-portfolio",
    title: "Saiful Islam Portfolio",
    logline: "Client-commissioned portfolio with Three.js 3D backgrounds, Framer Motion transitions, and an EmailJS contact form.",
    facts: "Next.js 14 · Three.js · Framer Motion · Client work",
    tags: ["Full-Stack", "Three.js", "Client"],
    year: "2024",
    status: "Deployed",
    links: {},
  },
]

/* =========================================================================
   Single project row — numbered list item
   ========================================================================= */

function ProjectRow({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const [hovered, setHovered] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [imgLoaded, setImgLoaded] = useState(false)

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }, [])

  const primaryLink = project.links.demo ?? project.links.github ?? "#"
  const isExternal = primaryLink.startsWith("http")

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="group relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={onMouseMove}
      >
        {/* Hover image — fixed, smooth fade, no mount/unmount flicker */}
        {project.image && (
          <div
            aria-hidden="true"
            className="pointer-events-none fixed z-[9999] w-72 h-44 rounded-2xl overflow-hidden shadow-2xl"
            style={{
              left: mousePos.x + 28,
              top: mousePos.y - 88,
              opacity: hovered && imgLoaded ? 1 : 0,
              transform: hovered ? "scale(1) translateY(0)" : "scale(0.96) translateY(6px)",
              transition: "opacity 200ms ease, transform 220ms cubic-bezier(0.22,1,0.36,1)",
              border: "1px solid hsl(var(--border-accent))",
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="288px"
              className="object-cover"
              onLoad={() => setImgLoaded(true)}
            />
          </div>
        )}

        {/* Row */}
        <Link
          href={primaryLink}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="flex items-start sm:items-center justify-between gap-4 sm:gap-8
                     py-7 sm:py-8
                     border-b border-[hsl(var(--border))]
                     group-hover:border-[hsl(var(--border-accent))]
                     transition-all duration-300"
        >
          {/* Left: number + title + meta */}
          <div className="flex items-start sm:items-center gap-5 sm:gap-8 min-w-0 flex-1">
            {/* Number */}
            <span
              className="flex-shrink-0 font-mono text-tertiary select-none
                         text-xs w-9 mt-1.5 sm:mt-0"
              aria-hidden="true"
            >
              {project.num}
            </span>

            <div className="min-w-0">
              {/* Title — large */}
              <h3
                className="font-bold text-[hsl(var(--text-primary))] leading-tight tracking-tight
                           group-hover:text-accent-blue
                           transition-colors duration-300
                           text-2xl sm:text-3xl lg:text-4xl"
              >
                {project.title}
              </h3>

              {/* Logline */}
              <p className="hidden sm:block mt-2 text-sm sm:text-base text-secondary leading-relaxed pretty max-w-2xl">
                {project.logline}
              </p>

              {/* Facts */}
              <p className="mt-2 sm:mt-2.5 text-[11px] sm:text-xs text-tertiary font-mono tracking-wide">
                {project.facts}
              </p>
            </div>
          </div>

          {/* Right: year + status + links */}
          <div className="flex-shrink-0 flex flex-col items-end gap-2.5 sm:flex-row sm:items-center sm:gap-5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-tertiary">{project.year}</span>
              <span
                className={`text-[10px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded-full hidden sm:inline
                  ${project.status === "Live" ? "text-accent-emerald bg-tint-emerald" : ""}
                  ${project.status === "Deployed" ? "text-accent-blue bg-tint-blue" : ""}
                  ${project.status === "Research" ? "text-accent-amber bg-tint-amber" : ""}
                `}
              >
                {project.status}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              {project.links.github && (
                <span
                  onClick={(e) => {
                    e.preventDefault()
                    window.open(project.links.github, "_blank", "noopener,noreferrer")
                  }}
                  className="w-9 h-9 rounded-xl border border-soft-accent grid place-items-center
                             text-tertiary hover:text-accent-blue hover:border-accent-blue/60
                             transition-all duration-200 cursor-pointer"
                  role="button"
                  aria-label="Source on GitHub"
                >
                  <Github className="w-4 h-4" />
                </span>
              )}
              {project.links.demo && (
                <span
                  onClick={(e) => {
                    e.preventDefault()
                    window.open(project.links.demo, "_blank", "noopener,noreferrer")
                  }}
                  className="w-9 h-9 rounded-xl border border-soft-accent grid place-items-center
                             text-tertiary hover:text-accent-blue hover:border-accent-blue/60
                             transition-all duration-200 cursor-pointer"
                  role="button"
                  aria-label="Live demo"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              )}
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  )
}

/* =========================================================================
   Section
   ========================================================================= */

export function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="container relative">

        {/* Section header — big, confident, minimal */}
        <div className="mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">Work</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.07 }}
            className="mt-5 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
          >
            <h2 className="text-display font-bold tracking-tight balance display-text">
              9 projects.{" "}
              <span className="text-gradient-pro">All shipped.</span>
            </h2>

            <p className="text-sm text-tertiary font-mono sm:text-right sm:max-w-xs leading-relaxed">
              Every project below is deployed, live with paying users, or
              in active research iteration.
            </p>
          </motion.div>
        </div>

        {/* Top divider */}
        <div className="h-px bg-[hsl(var(--border))] mb-0" />

        {/* Numbered project list */}
        <div>
          {PROJECTS.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
