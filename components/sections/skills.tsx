"use client"

import { motion } from "framer-motion"
import { Brain, Code2, Globe, Wrench, BarChart3, Smartphone } from "lucide-react"
import { TechMarquee } from "@/components/tech-marquee"

interface SkillGroup {
  title: string
  icon: typeof Brain
  accent: "blue" | "indigo" | "emerald" | "amber" | "rose"
  skills: string[]
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "AI / ML Core",
    icon: Brain,
    accent: "blue",
    skills: [
      "PyTorch",
      "TensorFlow",
      "YOLOv8 / YOLOv11",
      "Ultralytics",
      "scikit-learn",
      "OpenCV",
      "Transfer Learning",
      "TensorRT",
      "Vision Transformers (ViT, DeiT)",
      "Grad-CAM / LIME (XAI)",
    ],
  },
  {
    title: "Data Science & Analytics",
    icon: BarChart3,
    accent: "indigo",
    skills: [
      "Apache Spark (PySpark)",
      "MLlib",
      "Pandas",
      "NumPy",
      "SciPy",
      "Recharts",
      "FL Chart",
      "Jupyter / Colab",
      "Streamlit",
    ],
  },
  {
    title: "Languages",
    icon: Code2,
    accent: "emerald",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "Dart",
      "Kotlin",
      "Java",
      "C++",
      "SQL",
    ],
  },
  {
    title: "Web & Backend",
    icon: Globe,
    accent: "rose",
    skills: [
      "Next.js 15",
      "React 19",
      "Node.js",
      "Express",
      "Flask",
      "REST APIs",
      "WebSocket",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    accent: "amber",
    skills: [
      "Flutter / Dart",
      "Riverpod",
      "Provider",
      "GoRouter",
      "Firebase",
      "Supabase",
      "Expo (React Native)",
      "Android SDK",
      "Jetpack Compose",
      "TensorFlow Lite",
      "ML Kit",
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    accent: "blue",
    skills: [
      "Git / GitHub",
      "Docker",
      "Vercel",
      "AWS EC2",
      "MongoDB",
      "PostgreSQL",
      "SQLite",
      "VS Code",
      "Linux",
    ],
  },
]

const ALSO_USED = [
  "MATLAB",
  "R",
  "LaTeX",
  "DroneKit / MAVLink",
  "QGroundControl",
  "Photoshop",
  "After Effects",
  "DaVinci Resolve",
  "Blender",
  "Figma",
  "Notion",
  "Linear",
  "PostgreSQL",
  "Redis",
  "WebSocket",
  "GSAP",
  "Three.js",
  "Lemon Squeezy",
  "Tuya IoT",
  "Vercel",
  "Cloudflare",
]

const accentMap = {
  blue: { text: "text-accent-blue", bg: "bg-tint-blue", border: "border-accent-blue/30" },
  indigo: { text: "text-accent-indigo", bg: "bg-tint-indigo", border: "border-accent-indigo/30" },
  emerald: { text: "text-accent-emerald", bg: "bg-tint-emerald", border: "border-accent-emerald/30" },
  amber: { text: "text-accent-amber", bg: "bg-tint-amber", border: "border-accent-amber/30" },
  rose: { text: "text-accent-rose", bg: "bg-tint-rose", border: "border-accent-rose/30" },
} as const

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-3xl"
        >
          <span className="section-label">Skills</span>
          <h2 className="mt-5 text-display font-bold tracking-tight balance display-text">
            The toolkit behind every shipped feature.
          </h2>
          <p className="mt-4 text-lg text-secondary pretty">
            Tools, frameworks, and languages I reach for when turning ML
            research and product ideas into production systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {SKILL_GROUPS.map((group, gi) => {
            const Icon = group.icon
            const accent = accentMap[group.accent]
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: gi * 0.06 }}
                className="card-pro p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-10 h-10 rounded-lg ${accent.bg} border ${accent.border} grid place-items-center`}
                  >
                    <Icon className={`w-5 h-5 ${accent.text}`} />
                  </div>
                  <h3 className="font-semibold text-[hsl(var(--text-primary))]">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Marquee — full toolkit at a glance */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <h3 className="text-xs uppercase tracking-widest text-tertiary mb-4 text-center">
            Also experienced with
          </h3>
          <TechMarquee items={ALSO_USED} />
        </motion.div>
      </div>
    </section>
  )
}
