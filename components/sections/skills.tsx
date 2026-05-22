"use client"

import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

/* =========================================================================
   Logo sources — devicons CDN
   ========================================================================= */
const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons"

const LOGO: Record<string, string> = {
  pytorch:     `${CDN}/pytorch/pytorch-original.svg`,
  tensorflow:  `${CDN}/tensorflow/tensorflow-original.svg`,
  sklearn:     `${CDN}/scikitlearn/scikitlearn-original.svg`,
  opencv:      `${CDN}/opencv/opencv-original.svg`,
  python:      `${CDN}/python/python-original.svg`,
  typescript:  `${CDN}/typescript/typescript-original.svg`,
  javascript:  `${CDN}/javascript/javascript-original.svg`,
  dart:        `${CDN}/dart/dart-original.svg`,
  kotlin:      `${CDN}/kotlin/kotlin-original.svg`,
  nextjs:      `${CDN}/nextjs/nextjs-original.svg`,
  react:       `${CDN}/react/react-original.svg`,
  nodejs:      `${CDN}/nodejs/nodejs-original.svg`,
  express:     `${CDN}/express/express-original.svg`,
  flask:       `${CDN}/flask/flask-original.svg`,
  tailwind:    `${CDN}/tailwindcss/tailwindcss-original.svg`,
  flutter:     `${CDN}/flutter/flutter-original.svg`,
  firebase:    `${CDN}/firebase/firebase-original.svg`,
  supabase:    `${CDN}/supabase/supabase-original.svg`,
  expo:        `${CDN}/expo/expo-original.svg`,
  android:     `${CDN}/android/android-original.svg`,
  git:         `${CDN}/git/git-original.svg`,
  github:      `${CDN}/github/github-original.svg`,
  docker:      `${CDN}/docker/docker-original.svg`,
  vercel:      `${CDN}/vercel/vercel-original.svg`,
  postgresql:  `${CDN}/postgresql/postgresql-original.svg`,
  mongodb:     `${CDN}/mongodb/mongodb-original.svg`,
  vscode:      `${CDN}/vscode/vscode-original.svg`,
  linux:       `${CDN}/linux/linux-original.svg`,
  apachespark: `${CDN}/apachespark/apachespark-original.svg`,
  pandas:      `${CDN}/pandas/pandas-original.svg`,
  numpy:       `${CDN}/numpy/numpy-original.svg`,
  streamlit:   `${CDN}/streamlit/streamlit-original.svg`,
}

interface SkillItem {
  name: string
  logo?: string
}
interface SkillCategory {
  category: string
  items: SkillItem[]
}

const STACK: SkillCategory[] = [
  {
    category: "AI / ML",
    items: [
      { name: "PyTorch",      logo: "pytorch"     },
      { name: "TensorFlow",   logo: "tensorflow"  },
      { name: "scikit-learn", logo: "sklearn"     },
      { name: "OpenCV",       logo: "opencv"      },
      { name: "YOLOv8/v11"                        },
      { name: "TensorRT"                           },
      { name: "PySpark",      logo: "apachespark" },
      { name: "Streamlit",    logo: "streamlit"   },
      { name: "Pandas",       logo: "pandas"      },
      { name: "NumPy",        logo: "numpy"       },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "Python",       logo: "python"      },
      { name: "TypeScript",   logo: "typescript"  },
      { name: "JavaScript",   logo: "javascript"  },
      { name: "Dart",         logo: "dart"        },
      { name: "Kotlin",       logo: "kotlin"      },
      { name: "SQL"                                },
    ],
  },
  {
    category: "Web",
    items: [
      { name: "Next.js",      logo: "nextjs"      },
      { name: "React",        logo: "react"       },
      { name: "Node.js",      logo: "nodejs"      },
      { name: "Express",      logo: "express"     },
      { name: "Flask",        logo: "flask"       },
      { name: "Tailwind CSS", logo: "tailwind"    },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "Flutter",      logo: "flutter"     },
      { name: "Firebase",     logo: "firebase"    },
      { name: "Supabase",     logo: "supabase"    },
      { name: "Expo",         logo: "expo"        },
      { name: "Android SDK",  logo: "android"     },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git",          logo: "git"         },
      { name: "GitHub",       logo: "github"      },
      { name: "Docker",       logo: "docker"      },
      { name: "Vercel",       logo: "vercel"      },
      { name: "PostgreSQL",   logo: "postgresql"  },
      { name: "MongoDB",      logo: "mongodb"     },
      { name: "VS Code",      logo: "vscode"      },
      { name: "Linux",        logo: "linux"       },
    ],
  },
]

/* ── Logo + name — NO background box, pure logo + text ─── */
function LogoTile({ item, delay }: { item: SkillItem; delay: number }) {
  const src = item.logo ? LOGO[item.logo] : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center gap-3 group/item cursor-default"
    >
      {/* Logo — no box, just the image floating */}
      <div className="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 grid place-items-center">
        {src ? (
          <Image
            src={src}
            alt={item.name}
            width={36}
            height={36}
            className="object-contain transition-transform duration-200
                       group-hover/item:scale-110"
            unoptimized
          />
        ) : (
          <span
            className="text-[11px] font-bold font-mono text-tertiary select-none
                       group-hover/item:text-secondary transition-colors"
          >
            {item.name.slice(0, 3).toUpperCase()}
          </span>
        )}
      </div>

      {/* Tech name */}
      <span
        className="text-base sm:text-lg lg:text-xl font-medium text-secondary whitespace-nowrap
                   group-hover/item:text-[hsl(var(--text-primary))]
                   transition-colors duration-200"
      >
        {item.name}
      </span>
    </motion.div>
  )
}

/* ── Category row ──────────────────────────────────────── */
function CategoryRow({ cat, ci }: { cat: SkillCategory; ci: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <div ref={ref}>
      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: ci * 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="h-px bg-[hsl(var(--border))] origin-left mb-6 sm:mb-8"
      />

      {/* CSS Grid: fixed label col (280px) | 1px separator | logos */}
      <div
        className="pb-8 sm:pb-10 px-6 sm:px-8 lg:px-16"
        style={{
          display: "grid",
          gridTemplateColumns: "280px 1px 1fr",
          gap: "0 2.5rem",
          alignItems: "start",
        }}
      >
        {/* Col 1 — Category label — always fits in 280px at this font size */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, delay: ci * 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="py-2 pr-4 overflow-hidden"
        >
          <h3
            className="font-black uppercase leading-none tracking-tight
                       text-[hsl(var(--text-primary))] select-none w-full"
            style={{
              /* Scales between 1.75rem–2.75rem so "LANGUAGES" (9 chars) 
                 always stays within the 280px column                     */
              fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
            }}
          >
            {cat.category}
          </h3>
        </motion.div>

        {/* Col 2 — Vertical separator */}
        <div
          className="hidden lg:block"
          style={{
            alignSelf: "stretch",
            background: "hsl(var(--border-accent))",
            minHeight: "100%",
          }}
        />

        {/* Col 3 — Logos — always start at the same x */}
        <div className="flex flex-wrap gap-x-6 gap-y-4 py-1.5 lg:pl-4 min-w-0">
          {cat.items.map((item, ii) => (
            <LogoTile
              key={item.name}
              item={item}
              delay={ci * 0.04 + ii * 0.04}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Section ───────────────────────────────────────────── */
export function Skills() {
  return (
    /* Full-width — no container wrapper, padding applied per row */
    <section id="skills" className="relative py-16 sm:py-20 w-full overflow-hidden">

      {/* Eyebrow — inside padding */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-3 mb-12 px-6 sm:px-8 lg:px-16"
      >
        <span className="text-accent-blue">✦</span>
        <span className="text-xs uppercase tracking-[0.22em] text-tertiary font-mono">
          My Stack
        </span>
      </motion.div>

      {/* Rows — full viewport width */}
      <div className="w-full">
        {STACK.map((cat, ci) => (
          <CategoryRow key={cat.category} cat={cat} ci={ci} />
        ))}
        {/* Final divider — full width */}
        <div className="h-px bg-[hsl(var(--border))] mx-6 sm:mx-8 lg:mx-16" />
      </div>

    </section>
  )
}
