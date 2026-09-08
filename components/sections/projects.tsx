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
    logline: "Undergraduate thesis that grew into a working deployment, a real-time traffic surveillance and enforcement platform built in collaboration with the Dhaka Metropolitan Police.",
    facts: "Flutter · Python · Flask · YOLOv11",
    tags: ["AI/ML", "Research", "Full-Stack"],
    year: "2025",
    status: "Deployed",
    image: "/projects/trafficguard-architecture.jpg",
    links: { github: "https://github.com/turjo410/trafficguard-ai" },
  },
  {
    num: "_02.",
    id: "election-analytics",
    title: "Bangladesh Election Analytics",
    logline: "An ML-powered dashboard that modelled the national parliamentary election with seat-level predictions and interactive visualizations.",
    facts: "PySpark · MLlib · React Native",
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
    logline: "A production AI learning platform with structured courses, interactive lessons, and gamified progression for prompt engineering.",
    facts: "React · Supabase · Lemon Squeezy",
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
    logline: "An interactive research dashboard for explainable image classification, comparing modern CNN and vision transformer models across several explanation techniques.",
    facts: "PyTorch · Streamlit · Grad-CAM · LIME",
    tags: ["AI Research", "Python", "XAI"],
    year: "2025",
    status: "Live",
    image: "/projects/banana-xai-grid.jpg",
    links: {
      github: "https://github.com/turjo410/banana-xai-streamlit",
      demo: "https://bananaapp.streamlit.app",
    },
  },
  {
    num: "_05.",
    id: "neofocus",
    title: "NeoFocus",
    logline: "A gamified productivity app with a custom Pomodoro arc timer, habit rings, and an XP progression system to keep focus rewarding.",
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
    title: "EnergyIQ - IoT Energy Dashboard",
    logline: "A scroll-driven dashboard visualising real IoT energy data streamed from smart meter hardware in a real household.",
    facts: "Next.js · Recharts · Tuya IoT",
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
    logline: "A hybrid streaming platform with a glassmorphism React web client, a cross-platform Expo mobile app, and a Node.js server that resolves audio streams.",
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
    logline: "An offline-first finance app for students with OCR receipt scanning, savings goals, and smart budget alerts.",
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
    logline: "A client-commissioned portfolio with Three.js 3D backgrounds, Framer Motion transitions, and an integrated contact form.",
    facts: "Next.js · Three.js · Framer Motion · Client work",
    tags: ["Full-Stack", "Three.js", "Client"],
    year: "2024",
    status: "Deployed",
    links: { github: "https://github.com/turjo410/saiful-islam" },
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
              Selected{" "}
              <span className="text-gradient-pro">work.</span>
            </h2>

            <p className="text-sm text-tertiary font-mono sm:text-right sm:max-w-xs leading-relaxed">
              A snapshot of research, product, and client projects, each built
              to run in the real world.
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
