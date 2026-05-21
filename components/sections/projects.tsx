"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import CountUp from "react-countup"
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  Target,
  Rocket,
  Zap,
  TrendingUp,
  Database,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { SpotlightCard } from "@/components/spotlight-card"

/* =========================================================================
   Project type + data — sourced exclusively from /project-md-files
   ========================================================================= */

type Category = "AI/ML" | "Mobile" | "Full-Stack" | "Data Science"

type MetricIcon = "target" | "rocket" | "zap" | "trending" | "database"

interface Metric {
  label: string
  value: number
  suffix?: string
  decimals?: number
  icon: MetricIcon
}

interface Project {
  id: string
  tier: 1 | 2
  title: string
  tagline: string
  description: string
  categories: Category[]
  accent: "blue" | "indigo" | "emerald" | "amber" | "rose"
  status: "Live" | "Deployed" | "Research" | "In Production"
  year: string
  image?: string
  imageAlt?: string
  metrics: Metric[]
  highlights?: string[]
  stack: string[]
  links: {
    github?: string
    demo?: string
    case?: string
  }
}

const PROJECTS: Project[] = [
  /* -------------------- TIER 1 — FEATURED -------------------- */
  {
    id: "trafficguard-ai",
    tier: 1,
    title: "TrafficGuard AI",
    tagline:
      "Bangladesh's most advanced AI-powered traffic law enforcement platform.",
    description:
      "A full-stack mobile platform for traffic officers in Dhaka, combining real-time YOLOv11 vehicle detection across 16 Bangladesh-specific classes, biometric-secured case management, adaptive signal control, ANPR for license plates, and a Gemini-powered AI inspector assistant.",
    categories: ["AI/ML", "Mobile", "Full-Stack"],
    accent: "blue",
    status: "Research",
    year: "2025",
    image: "/projects/trafficguard-architecture.jpg",
    imageAlt: "TrafficGuard AI system architecture",
    metrics: [
      { label: "Vehicle classes", value: 16, icon: "target" },
      { label: "Feature screens", value: 29, suffix: "+", icon: "rocket" },
      { label: "AI servers", value: 2, icon: "zap" },
    ],
    highlights: [
      "YOLOv11 + DeepSORT pipeline streaming MJPEG to Flutter clients",
      "Two-server architecture: traffic management API + AI detection server",
      "Biometric-gated case filing with auto-populated CCTV evidence",
      "Adaptive signal control with emergency-vehicle override",
    ],
    stack: [
      "Flutter",
      "Dart",
      "Python",
      "Flask",
      "YOLOv11",
      "PyTorch",
      "OpenCV",
      "Google Gemini",
      "ML Kit",
      "Google Maps",
      "SQLite",
    ],
    links: {
      github: "https://github.com/turjo410/trafficguard-ai",
    },
  },
  {
    id: "election-analytics",
    tier: 1,
    title: "Bangladesh Election Analytics 2026",
    tagline:
      "End-to-end PySpark + Next.js platform modeling the 13th Parliamentary verdict.",
    description:
      "An interactive analytics dashboard for the historic February 2026 election. Combines official seat data with division-level socioeconomic indices (literacy, internet penetration, urbanization) using PySpark and MLlib, then surfaces predictions through a Next.js 15 dashboard, a Streamlit sandbox, and a React Native companion app.",
    categories: ["Data Science", "AI/ML", "Full-Stack"],
    accent: "indigo",
    status: "Live",
    year: "2026",
    image: "/projects/election-parliament-arc.jpg",
    imageAlt: "Parliament dot arc visualization for the 13th election",
    metrics: [
      { label: "RF accuracy", value: 84.78, suffix: "%", decimals: 2, icon: "target" },
      { label: "Constituencies", value: 297, icon: "database" },
      { label: "Voter turnout", value: 59.88, suffix: "%", decimals: 2, icon: "trending" },
    ],
    highlights: [
      "Random Forest seat classifier — 84.78% accuracy, F1 = 0.8293",
      "Ridge Regression turnout model — R² = 0.3611",
      "K-Means clustering surfaces two distinct voter phenotypes (silhouette 0.61)",
      "Live dashboard, Streamlit sandbox, and Expo mobile companion",
    ],
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "PySpark",
      "MLlib",
      "scikit-learn",
      "React Leaflet",
      "Recharts",
      "React Native",
      "Expo",
      "Streamlit",
    ],
    links: {
      github: "https://github.com/turjo410/bangladesh-election-analytics-2026",
      demo: "https://dashboard-cse488-lab.vercel.app/",
    },
  },
  {
    id: "banana-xai",
    tier: 1,
    title: "Banana XAI Classification",
    tagline:
      "Twelve deep models · five XAI methods · one interactive Streamlit app.",
    description:
      "A research-grade Streamlit application that classifies Bangladeshi banana varieties (Sagor, Champa, Bangla, Sabri) and ripeness levels across twelve pre-trained models — including Vision Transformers — and explains every prediction with Grad-CAM, Grad-CAM++, Eigen-CAM, Ablation-CAM, and LIME.",
    categories: ["AI/ML", "Data Science"],
    accent: "amber",
    status: "Live",
    year: "2025",
    image: "/projects/banana-xai-grid.jpg",
    imageAlt: "Side-by-side XAI heatmaps for banana classification",
    metrics: [
      { label: "Models supported", value: 12, icon: "database" },
      { label: "XAI methods", value: 5, icon: "target" },
      { label: "Variety classes", value: 4, icon: "zap" },
    ],
    highlights: [
      "Custom CNN, EfficientNet-B0, DenseNet121, VGG16, ViT-B16, DeiT-S16",
      "Top-3 predictions surfaced with confidence scores and ZIP export",
      "Side-by-side Grad-CAM vs LIME explanations in the same UI",
      "Five Kaggle notebooks documenting the full training journey",
    ],
    stack: [
      "Python",
      "PyTorch",
      "Streamlit",
      "torchvision",
      "timm",
      "transformers",
      "pytorch-grad-cam",
      "LIME",
      "scikit-image",
      "Plotly",
    ],
    links: {
      github: "https://github.com/turjo410/banana-xai-classification",
      demo: "https://bananaapp.streamlit.app",
    },
  },
  {
    id: "promptmaster-pro",
    tier: 1,
    title: "PromptMaster Pro",
    tagline:
      "Production SaaS platform for AI prompt engineering and automation mastery.",
    description:
      "A complete EdTech SaaS shipped to a paying audience. Five learning tracks (Prompt Engineering, Vibe Coding, MCP Servers, AI Automation, Bolt/OpenClaw), 59+ structured lessons, gamified progress with 12 unlockable badges, and PDF certificate generation — built on React, Supabase, and Lemon Squeezy.",
    categories: ["Full-Stack", "AI/ML"],
    accent: "rose",
    status: "Live",
    year: "2025",
    image: "/projects/promptmaster-dashboard.jpg",
    imageAlt: "PromptMaster Pro dashboard with progress tracking",
    metrics: [
      { label: "Members", value: 200, suffix: "+", icon: "rocket" },
      { label: "Lessons", value: 59, suffix: "+", icon: "database" },
      { label: "Tracks", value: 5, icon: "target" },
    ],
    highlights: [
      "Supabase Auth (Google OAuth + email) with persistent progress",
      "Lemon Squeezy integration for one-time lifetime payments",
      "WebGL Threads background + GSAP scroll reveals + spotlight cards",
      "PDF certificate generation via jsPDF + html2canvas",
    ],
    stack: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "GSAP",
      "OGL (WebGL)",
      "Supabase",
      "Lemon Squeezy",
      "TanStack Query",
    ],
    links: {
      demo: "https://promptmasterpro.tech",
    },
  },

  /* -------------------- TIER 2 — ADDITIONAL -------------------- */
  {
    id: "neofocus",
    tier: 2,
    title: "NeoFocus",
    tagline: "Calm, gamified productivity OS for focused minds.",
    description:
      "A Flutter + Supabase productivity app blending the focus ritual of Forest, the density of Notion, and the elegance of Apple. Custom-painted Pomodoro arc timer, animated habit rings, 7-day history strips, XP/Gold/Streak gamification, and 12-achievement progression — all under a unified \"Luminous Clarity\" design system.",
    categories: ["Mobile", "Full-Stack"],
    accent: "emerald",
    status: "Deployed",
    year: "2025",
    image: "/projects/neofocus-screens.jpg",
    imageAlt: "NeoFocus dashboard and Pomodoro screens",
    metrics: [
      { label: "Screens", value: 14, icon: "rocket" },
      { label: "XP achievements", value: 6, icon: "target" },
    ],
    stack: [
      "Flutter",
      "Dart",
      "Supabase",
      "Riverpod",
      "GoRouter",
      "Freezed",
      "fl_chart",
      "table_calendar",
    ],
    links: {
      github: "https://github.com/turjo410/NeoFocus",
    },
  },
  {
    id: "energyiq",
    tier: 2,
    title: "EnergyIQ — IoT Energy Dashboard",
    tagline:
      "Real-time energy monitoring for a real refrigerator, on real Wi-Fi hardware.",
    description:
      "Built for CSE407 Green Computing. A cinematic, scroll-driven Next.js dashboard that visualizes high-resolution power data from a TOMZN Wi-Fi smart meter monitoring a Sharp inverter refrigerator — with compressor cycles, duty cycle analysis, Bangladesh-tariff cost breakdowns, and SWOT/PESTLE strategy reports.",
    categories: ["Full-Stack", "Data Science"],
    accent: "emerald",
    status: "Live",
    year: "2025",
    image: "/projects/energyiq-dashboard.jpg",
    imageAlt: "EnergyIQ real-time IoT energy monitoring dashboard",
    metrics: [
      { label: "Power metrics", value: 6, icon: "database" },
      { label: "Live IoT device", value: 1, icon: "zap" },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "Framer Motion",
      "PapaParse",
      "Tuya IoT",
    ],
    links: {
      github: "https://github.com/turjo410/iot-energy-dashboard",
      demo: "https://turjo410.github.io/iot-energy-dashboard/",
    },
  },
  {
    id: "jetstream",
    tier: 2,
    title: "JetStream Music Player",
    tagline:
      "Hybrid music platform — glassmorphism web, Expo mobile, custom audio backend.",
    description:
      "A premium music streaming experience. Discovery via Deezer's metadata, audio resolved server-side with @distube/ytdl-core to bypass CORS, and a real-time Web Audio API frequency visualizer. Glassmorphism React web client + Expo mobile app + TypeScript Express backend.",
    categories: ["Full-Stack", "Mobile"],
    accent: "indigo",
    status: "Deployed",
    year: "2026",
    image: "/projects/jetstream-web.jpg",
    imageAlt: "JetStream glassmorphism web music player UI",
    metrics: [
      { label: "Workspaces", value: 3, icon: "rocket" },
      { label: "Audio APIs integrated", value: 4, icon: "database" },
    ],
    stack: [
      "React 18",
      "TypeScript",
      "Vite",
      "Expo",
      "React Native",
      "Express",
      "Redux Toolkit",
      "Web Audio API",
      "Deezer API",
    ],
    links: {
      github: "https://github.com/turjo410/jetstream-music-player",
    },
  },
  {
    id: "expense-tracker",
    tier: 2,
    title: "Student Expense Tracker",
    tagline:
      "Apple-inspired finance app built around how students actually spend.",
    description:
      "A polished Flutter app with offline-first SQLite, optional Firebase sync, Google ML Kit OCR receipt scanning, recurring transactions, savings goals, calendar view, CSV/PDF export, and 8 accent themes — designed around 17 student-specific spending categories.",
    categories: ["Mobile"],
    accent: "amber",
    status: "Deployed",
    year: "2024",
    image: "/projects/expense-tracker-screens.jpg",
    imageAlt: "Student Expense Tracker analytics and budget screens",
    metrics: [
      { label: "Default categories", value: 17, icon: "database" },
      { label: "Theme colors", value: 8, icon: "target" },
    ],
    stack: [
      "Flutter",
      "Dart",
      "Provider",
      "SQLite (sqflite)",
      "Firebase Auth",
      "Cloud Firestore",
      "Google ML Kit",
      "FL Chart",
    ],
    links: {
      github: "https://github.com/turjo410/student-expense-tracker",
    },
  },
  {
    id: "saiful-portfolio",
    tier: 2,
    title: "Saiful Islam Portfolio (Client)",
    tagline:
      "3D-animated client portfolio with Three.js, Framer Motion, and Recharts.",
    description:
      "A custom-built portfolio website delivered for a client. Next.js 14 App Router, Three.js + React Three Fiber 3D backgrounds, Framer Motion transitions, animated skill bars, Recharts data visualizations, and an EmailJS-powered contact form — fully responsive, dark-themed, SEO-optimized.",
    categories: ["Full-Stack"],
    accent: "rose",
    status: "Deployed",
    year: "2024",
    metrics: [
      { label: "Sections", value: 8, icon: "rocket" },
      { label: "Custom 3D scenes", value: 2, icon: "zap" },
    ],
    stack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Three.js",
      "React Three Fiber",
      "Framer Motion",
      "Recharts",
      "EmailJS",
    ],
    links: {},
  },
]

/* =========================================================================
   Helpers
   ========================================================================= */

const FILTERS: ("All" | Category)[] = [
  "All",
  "AI/ML",
  "Mobile",
  "Full-Stack",
  "Data Science",
]

const accentMap = {
  blue: { text: "text-accent-blue", bg: "bg-tint-blue", border: "border-accent-blue/30", solid: "bg-accent-blue" },
  indigo: { text: "text-accent-indigo", bg: "bg-tint-indigo", border: "border-accent-indigo/30", solid: "bg-accent-indigo" },
  emerald: { text: "text-accent-emerald", bg: "bg-tint-emerald", border: "border-accent-emerald/30", solid: "bg-accent-emerald" },
  amber: { text: "text-accent-amber", bg: "bg-tint-amber", border: "border-accent-amber/30", solid: "bg-accent-amber" },
  rose: { text: "text-accent-rose", bg: "bg-tint-rose", border: "border-accent-rose/30", solid: "bg-accent-rose" },
} as const

const statusMap = {
  Live: { text: "text-accent-emerald", bg: "bg-tint-emerald", border: "border-accent-emerald/40" },
  Deployed: { text: "text-accent-blue", bg: "bg-tint-blue", border: "border-accent-blue/40" },
  "In Production": { text: "text-accent-emerald", bg: "bg-tint-emerald", border: "border-accent-emerald/40" },
  Research: { text: "text-accent-amber", bg: "bg-tint-amber", border: "border-accent-amber/40" },
} as const

function getMetricIcon(icon: MetricIcon) {
  switch (icon) {
    case "target": return Target
    case "rocket": return Rocket
    case "zap": return Zap
    case "trending": return TrendingUp
    case "database": return Database
    default: return Target
  }
}

/* =========================================================================
   Image with graceful fallback
   ========================================================================= */

function ProjectImage({
  src,
  alt,
  accent,
  title,
}: {
  src?: string
  alt?: string
  accent: keyof typeof accentMap
  title: string
}) {
  const [errored, setErrored] = useState(false)
  const tone = accentMap[accent]
  const showFallback = !src || errored

  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl border border-soft bg-[hsl(var(--surface-elevated))]">
      {showFallback ? (
        <div className={`absolute inset-0 ${tone.bg}`}>
          <div className="absolute inset-0 bg-dot-grid opacity-60" />
          <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
            <div className={`text-xs uppercase tracking-widest ${tone.text} font-mono mb-2`}>
              Asset coming
            </div>
            <div className="text-sm text-tertiary max-w-[80%]">
              {title}
            </div>
          </div>
        </div>
      ) : (
        <>
          <Image
            src={src!}
            alt={alt ?? title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            onError={() => setErrored(true)}
          />
          {/* Subtle gradient mask for legibility on hover label */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[hsl(var(--background))]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </>
      )}
    </div>
  )
}

/* =========================================================================
   Featured (Tier 1) Card
   ========================================================================= */

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const tone = accentMap[project.accent]
  const status = statusMap[project.status]
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
    >
    <SpotlightCard
      className="p-5 sm:p-7 lg:p-8 relative"
    >
      {/* Left accent bar */}
      <div
        className={`absolute left-0 top-6 bottom-6 w-1 rounded-r ${tone.solid} opacity-70`}
      />

      <div className="grid lg:grid-cols-12 gap-7 lg:gap-9">
        {/* Image — sticky so it tracks scroll for tall cards */}
        <div className="lg:col-span-5">
          <div className="relative aspect-[16/7] sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[420px] lg:sticky lg:top-24 max-h-[220px] lg:max-h-none">
            {/* Image links to GitHub repo on click */}
            <Link
              href={project.links.github ?? project.links.demo ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="block h-full w-full"
            >
            <ProjectImage
              src={project.image}
              alt={project.imageAlt}
              accent={project.accent}
              title={project.title}
            />
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Header row */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span
              className={`text-[11px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full ${status.bg} ${status.text} border ${status.border}`}
            >
              {project.status}
            </span>
            <span className="text-[11px] text-tertiary font-mono">
              {project.year}
            </span>
            <span className="text-tertiary">·</span>
            <div className="flex flex-wrap gap-1.5">
              {project.categories.map((c) => (
                <span
                  key={c}
                  className={`text-[11px] px-2 py-0.5 rounded ${tone.bg} ${tone.text} font-medium`}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Title + tagline */}
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[hsl(var(--text-primary))] leading-tight">
            {project.links.github || project.links.demo ? (
              <Link
                href={project.links.github ?? project.links.demo ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-blue transition-colors"
              >
                {project.title}
              </Link>
            ) : (
              project.title
            )}
          </h3>
          <p className={`mt-2 text-sm sm:text-base font-medium ${tone.text}`}>
            {project.tagline}
          </p>

          {/* Description */}
          <p className="mt-4 text-sm sm:text-[15px] text-secondary leading-relaxed pretty">
            {project.description}
          </p>

          {/* Highlights */}
          {project.highlights && (
            <ul className="mt-5 space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-2.5 text-sm text-secondary">
                  <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${tone.solid}`} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-2 mt-6">
            {project.metrics.map((m) => {
              const Icon = getMetricIcon(m.icon)
              return (
                <div
                  key={m.label}
                  className="rounded-lg bg-[hsl(var(--surface-elevated))] border border-soft px-3 py-3"
                >
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Icon className={`w-3.5 h-3.5 ${tone.text}`} />
                    <span className="text-[10px] uppercase tracking-widest text-tertiary">
                      {m.label}
                    </span>
                  </div>
                  <div className={`font-mono font-bold text-lg sm:text-xl ${tone.text} leading-none`}>
                    {inView ? (
                      <CountUp
                        end={m.value}
                        duration={2}
                        decimals={m.decimals ?? 0}
                        suffix={m.suffix ?? ""}
                      />
                    ) : (
                      `0${m.suffix ?? ""}`
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Stack */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span key={s} className="pill !py-1 !px-2.5 text-xs">
                {s}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-2 mt-6">
            {project.links.github && (
              <Link
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  variant="outline"
                  className="btn-lift gap-2 border-soft-accent bg-[hsl(var(--surface))] hover:bg-[hsl(var(--surface-elevated))]"
                >
                  <Github className="w-3.5 h-3.5" />
                  Source
                </Button>
              </Link>
            )}
            {project.links.demo && (
              <Link
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  className="btn-lift gap-2 bg-accent-blue text-white hover:bg-accent-blue/90"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live Demo
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </SpotlightCard>
    </motion.article>
  )
}

/* =========================================================================
   Compact (Tier 2) Card
   ========================================================================= */

function CompactCard({ project, index }: { project: Project; index: number }) {
  const tone = accentMap[project.accent]
  const status = statusMap[project.status]

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="h-full"
    >
    {/* Clicking anywhere on a compact card opens the GitHub repo (or demo as fallback) */}
    <Link
      href={project.links.github ?? project.links.demo ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${project.title} on GitHub`}
      className="block h-full group/card"
    >
    <SpotlightCard className="card-pro-lift p-5 flex flex-col h-full cursor-pointer">
      {/* Image */}
      <div className="relative aspect-[16/10] mb-4">
        <ProjectImage
          src={project.image}
          alt={project.imageAlt}
          accent={project.accent}
          title={project.title}
        />
      </div>

      {/* Status */}
      <div className="flex items-center gap-2 mb-3">
        <span
          className={`text-[10px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded ${status.bg} ${status.text}`}
        >
          {project.status}
        </span>
        <span className="text-[10px] text-tertiary font-mono">
          {project.year}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold tracking-tight text-[hsl(var(--text-primary))] leading-tight">
        {project.title}
      </h3>
      <p className={`mt-1 text-xs font-medium ${tone.text}`}>
        {project.tagline}
      </p>

      {/* Description */}
      <p className="mt-3 text-[13px] text-secondary leading-relaxed pretty line-clamp-4">
        {project.description}
      </p>

      {/* Stack — top 4 */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 4).map((s) => (
          <span key={s} className="pill !py-0.5 !px-2 text-[11px]">
            {s}
          </span>
        ))}
        {project.stack.length > 4 && (
          <span className="pill !py-0.5 !px-2 text-[11px] text-tertiary">
            +{project.stack.length - 4}
          </span>
        )}
      </div>

      {/* Footer links */}
      <div className="mt-auto pt-4 flex items-center gap-3 text-xs">
        {project.links.github && (
          <Link
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
          >
            <Github className="w-3.5 h-3.5" />
            Source
          </Link>
        )}
        {project.links.demo && (
          <Link
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
          >
            <ArrowUpRight className="w-3.5 h-3.5" />
            Live
          </Link>
        )}
        {!project.links.github && !project.links.demo && (
          <span className="text-tertiary text-xs italic">Client work</span>
        )}
      </div>
    </SpotlightCard>
    </Link>
    </motion.article>
  )
}

/* =========================================================================
   Section
   ========================================================================= */

export function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All")

  const tier1 = useMemo(
    () =>
      PROJECTS.filter(
        (p) => p.tier === 1 && (filter === "All" || p.categories.includes(filter as Category))
      ),
    [filter]
  )
  const tier2 = useMemo(
    () =>
      PROJECTS.filter(
        (p) => p.tier === 2 && (filter === "All" || p.categories.includes(filter as Category))
      ),
    [filter]
  )

  return (
    <section
      id="projects"
      className="section-canvas relative py-24 sm:py-32"
    >
      <div className="container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-3xl"
        >
          <span className="section-label">Projects</span>
          <h2 className="mt-5 text-display font-bold tracking-tight balance display-text">
            Selected <span className="text-gradient-pro">case studies</span>{" "}
            from production work.
          </h2>
          <p className="mt-4 text-lg text-secondary pretty">
            Real builds, real users, real metrics. Every project below is
            either deployed, in research-stage iteration, or live with paying
            users — no placeholder demos.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {FILTERS.map((f) => {
            const active = filter === f
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-sm px-4 h-9 rounded-full border transition-all ${
                  active
                    ? "bg-accent-blue text-white border-accent-blue"
                    : "bg-[hsl(var(--surface))] text-secondary border-soft-accent hover:border-accent-blue/50 hover:text-[hsl(var(--text-primary))]"
                }`}
                aria-pressed={active}
              >
                {f}
              </button>
            )
          })}
          <span className="ml-auto text-xs text-tertiary font-mono hidden sm:inline">
            {tier1.length + tier2.length} project
            {tier1.length + tier2.length === 1 ? "" : "s"}
          </span>
        </div>

        {/* Tier 1 — Featured */}
        {tier1.length > 0 && (
          <div className="space-y-6 mb-14">
            {tier1.map((p, i) => (
              <FeaturedCard key={p.id} project={p} index={i} />
            ))}
          </div>
        )}

        {/* Tier 2 — Compact grid */}
        {tier2.length > 0 && (
          <>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs uppercase tracking-widest text-tertiary font-mono">
                More work
              </span>
              <span className="flex-1 h-px bg-[hsl(var(--border))]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
              {tier2.map((p, i) => (
                <CompactCard key={p.id} project={p} index={i} />
              ))}
            </div>
          </>
        )}

        {tier1.length + tier2.length === 0 && (
          <div className="text-center py-16 text-tertiary">
            No projects in this category yet.
          </div>
        )}
      </div>
    </section>
  )
}
