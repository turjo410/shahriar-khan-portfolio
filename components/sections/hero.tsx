"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CvDropdown } from "@/components/cv-dropdown"
import { Github, Linkedin, Mail, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TerminalEffect } from "@/components/terminal-effect"

const COMMANDS = [
  "✔ TrafficGuard: real-time traffic surveillance for Dhaka",
  "✔ Brain MRI: self-supervised benchmarking, under review",
  "✔ Banana XAI: explainable image classification",
  "✔ Election: machine learning seat prediction dashboard",
  "✔ PromptMaster: AI learning platform in production",
]

const HERO_FACTS = [
  { value: "Computer Vision", label: "Research focus" },
  { value: "B.Sc. in CSE", label: "East West University" },
  { value: "Bangladesh", label: "Based in Dhaka" },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16"
    >
      <div className="container relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: identity */}
          <div className="lg:col-span-7">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 pl-3 pr-4 py-1.5 rounded-full bg-[hsl(var(--surface-elevated))] border border-soft-accent mb-7"
            >
              <span className="status-dot" />
              <span className="text-[13px] font-medium text-secondary">
                Open to full-time &amp; research roles
              </span>
            </motion.div>

            {/* Name — original display-xl size */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-display-xl font-bold tracking-tight leading-[0.95] balance display-text"
            >
              <span className="text-gradient-pro">Shahriar Khan</span>
            </motion.h1>

            {/* Role line */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-5 text-base sm:text-lg text-secondary"
            >
              <span className="inline-flex items-center gap-2 text-accent-blue font-semibold">
                <Sparkles className="w-4 h-4" />
                CSE Engineer
              </span>
              <span className="text-tertiary">·</span>
              <span>AI/ML &amp; Computer Vision</span>
              <span className="text-tertiary">·</span>
              <span>Full-Stack</span>
              <span className="text-tertiary">·</span>
              <span>East West University</span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-6 text-base sm:text-lg text-secondary max-w-xl leading-relaxed pretty"
            >
              I am a CSE graduate from East West University who works at the
              intersection of{" "}
              <span className="text-[hsl(var(--text-primary))] font-medium">
                AI, computer vision, and full-stack development
              </span>
              . I care about systems that do not stop at a demo. I build on
              real data, for real users, and I keep maintaining my work long
              after it ships. I am currently open to{" "}
              <span className="text-[hsl(var(--text-primary))] font-medium">
                full-time roles
              </span>{" "}
              and{" "}
              <span className="text-[hsl(var(--text-primary))] font-medium">
                fully funded PhD opportunities
              </span>
              .
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center gap-3 mt-8"
            >
              <Link href="/#projects">
                <Button
                  size="lg"
                  className="btn-lift bg-accent-blue text-white hover:bg-accent-blue/90 px-7 h-12 gap-2 text-base"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <CvDropdown />
            </motion.div>

            {/* Social row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex items-center gap-2 mt-7 flex-wrap"
            >
              <Link
                href="https://github.com/turjo410"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-lg border border-soft-accent bg-[hsl(var(--surface))] grid place-items-center text-secondary hover:text-accent-blue hover:border-accent-blue/60 transition-all"
              >
                <Github className="w-4 h-4" />
              </Link>
              <Link
                href="https://linkedin.com/in/shahriar-khan-08770b289"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg border border-soft-accent bg-[hsl(var(--surface))] grid place-items-center text-secondary hover:text-accent-blue hover:border-accent-blue/60 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link
                href="mailto:turjo410@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-lg border border-soft-accent bg-[hsl(var(--surface))] grid place-items-center text-secondary hover:text-accent-blue hover:border-accent-blue/60 transition-all"
              >
                <Mail className="w-4 h-4" />
              </Link>
              {/* Kaggle removed — hero social row */}
              <span className="ml-1 text-xs text-tertiary font-mono hidden sm:inline">
                turjo410@gmail.com
              </span>
            </motion.div>
          </div>

          {/* Right: portrait + terminal + metrics */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Portrait card */}
              <div className="relative card-pro overflow-hidden">
                <div className="aspect-[4/5] relative">
                  <Image
                    src="/images/profile/portrait.jpg"
                    alt="Shahriar Khan"
                    fill
                    priority
                    sizes="(max-width: 1024px) 80vw, 40vw"
                    className="object-cover"
                  />
                  {/* Gradient overlay — lighter so the photo isn't swallowed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))]/60 via-[hsl(var(--background))]/5 to-transparent" />

                  {/* Bottom overlay: terminal */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <div className="rounded-lg border border-soft-accent bg-[hsl(var(--background))]/85 backdrop-blur-md p-3 sm:p-4">
                      <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-soft">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                        <span className="ml-2 text-[10px] text-tertiary font-mono">
                          ml-workstation ~ shahriar
                        </span>
                      </div>
                      <TerminalEffect commands={COMMANDS} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Fact strip */}
              <div className="grid grid-cols-3 gap-2 mt-3">
                {HERO_FACTS.map((m) => (
                  <div
                    key={m.label}
                    className="card-pro p-2.5 sm:p-3 text-center"
                  >
                    <div className="text-[13px] sm:text-sm font-semibold font-mono text-accent-blue leading-tight truncate">
                      {m.value}
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-tertiary mt-1 leading-snug">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Subtle scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-tertiary"
        >
          <span className="text-[10px] uppercase tracking-widest font-mono">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="block w-px h-8 bg-gradient-to-b from-accent-blue to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
