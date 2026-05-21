"use client"

import { motion } from "framer-motion"
import {
  Heart,
  Zap,
  Target,
  Camera,
  Brain,
  Sparkles,
  MapPin,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export const dynamic = "force-static"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />

      <div className="container relative z-10 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="section-label">More About Me</span>
          <h1 className="mt-4 text-5xl sm:text-6xl font-bold tracking-tight balance">
            Beyond the resume —{" "}
            <span className="text-gradient-pro">my story</span>.
          </h1>
          <p className="mt-5 text-lg text-secondary max-w-2xl pretty">
            Where I come from, how I work, and what I&apos;m chasing next.
          </p>
        </motion.div>

        {/* Portrait + identity */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid lg:grid-cols-3 gap-6 mb-16"
        >
          <div className="card-pro overflow-hidden">
            <div className="aspect-[4/5] relative">
              <Image
                src="/images/profile/portrait.jpg"
                alt="Shahriar Khan"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-2 card-pro p-7 sm:p-9 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-sm text-tertiary mb-3">
              <MapPin className="w-4 h-4" />
              <span>East West University · Dhaka, Bangladesh</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Hi, I&apos;m Shahriar Khan.
            </h2>
            <p className="text-secondary leading-relaxed pretty">
              I&apos;m an undergraduate Computer Science &amp; Engineering student
              at East West University in Dhaka. My focus is production AI —
              the kind that survives messy real-world data, deploys to edge
              devices, and answers to actual users. I work across the stack
              because the boundary between &quot;model&quot; and &quot;product&quot; is fuzzier
              than most courses suggest.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="pill">Computer Vision</span>
              <span className="pill">Deep Learning</span>
              <span className="pill">Full-Stack</span>
              <span className="pill">Data Science</span>
            </div>
          </div>
        </motion.div>

        {/* Story */}
        <Section icon={<Sparkles />} title="My Story" accent="blue">
          <div className="space-y-4 text-secondary leading-relaxed pretty">
            <p>
              My path into AI began the way a lot of practical engineers&apos;
              paths begin: I wanted to know how the things on my screen
              actually worked. That curiosity turned into long nights
              breaking neural networks, then patching them, then breaking
              them again on slightly different data — until I started
              understanding the difference between a model that demos well
              and a model that ships.
            </p>
            <p>
              At East West University I&apos;ve built systems that I&apos;m proud of:
              an YOLOv11 traffic enforcement platform with biometric case
              filing, a PySpark + MLlib election analytics dashboard for the
              13th Parliamentary election, an explainable-AI Streamlit app
              with twelve trained models, and an EdTech SaaS used by 200+
              members. None of these were assignments. They were attempts to
              learn what real systems look like.
            </p>
            <p>
              Today I&apos;m focused on the parts hiring managers rarely see —
              robust data pipelines, reproducible training, edge
              optimization, and clean APIs. The end result is software that
              works on day one and still works on day three hundred.
            </p>
          </div>
        </Section>

        {/* Values */}
        <Section icon={<Heart />} title="What I Care About" accent="rose">
          <div className="grid md:grid-cols-2 gap-4">
            <ValueCard
              title="Continuous Learning"
              description="The field moves fast. I commit to learning something new every week — a paper, a framework, a better engineering practice."
            />
            <ValueCard
              title="Impact Over Hype"
              description="I&apos;d rather solve a real problem with a small model than chase a benchmark. Value first, buzzwords later."
            />
            <ValueCard
              title="Open Collaboration"
              description="The best ideas come from diverse perspectives. I believe in open-source contribution, mentorship, and lifting others up."
            />
            <ValueCard
              title="Quality &amp; Craftsmanship"
              description="Code is read more than written. I take pride in clean, tested, well-documented work — even when no one is grading it."
            />
          </div>
        </Section>

        {/* How I Work */}
        <Section icon={<Zap />} title="How I Work" accent="indigo">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-base font-semibold text-accent-indigo mb-3">
                Approach
              </h3>
              <ul className="space-y-3 text-secondary text-sm leading-relaxed">
                <ApproachItem>
                  <strong className="text-[hsl(var(--text-primary))]">Deep work.</strong>{" "}
                  Long uninterrupted blocks for hard problems.
                </ApproachItem>
                <ApproachItem>
                  <strong className="text-[hsl(var(--text-primary))]">
                    Research first.
                  </strong>{" "}
                  Understand the problem before touching the keyboard.
                </ApproachItem>
                <ApproachItem>
                  <strong className="text-[hsl(var(--text-primary))]">
                    Iterate fast.
                  </strong>{" "}
                  Ship a thin slice, get feedback, sharpen.
                </ApproachItem>
                <ApproachItem>
                  <strong className="text-[hsl(var(--text-primary))]">Document.</strong>{" "}
                  Future me always thanks present me.
                </ApproachItem>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold text-accent-blue mb-3">
                Best environment
              </h3>
              <ul className="space-y-3 text-secondary text-sm leading-relaxed">
                <ApproachItem>
                  <strong className="text-[hsl(var(--text-primary))]">
                    Quiet mornings.
                  </strong>{" "}
                  Most of my best code happens before noon.
                </ApproachItem>
                <ApproachItem>
                  <strong className="text-[hsl(var(--text-primary))]">
                    Lo-fi or instrumental music.
                  </strong>{" "}
                  Background that disappears.
                </ApproachItem>
                <ApproachItem>
                  <strong className="text-[hsl(var(--text-primary))]">
                    Whiteboards &amp; pair sessions.
                  </strong>{" "}
                  Architecture is a conversation.
                </ApproachItem>
                <ApproachItem>
                  <strong className="text-[hsl(var(--text-primary))]">
                    Honest review.
                  </strong>{" "}
                  Critique sharpens work faster than praise ever does.
                </ApproachItem>
              </ul>
            </div>
          </div>
        </Section>

        {/* Beyond code */}
        <Section icon={<Camera />} title="Beyond Code" accent="amber">
          <div className="grid md:grid-cols-3 gap-4">
            <HobbyCard
              icon={<Camera className="w-5 h-5" />}
              title="Photography"
              description="Former Vice President of the Government Science College Photography Club. Storytelling through frames."
            />
            <HobbyCard
              icon={<Brain className="w-5 h-5" />}
              title="Competitive Programming"
              description="General member of the EWU Programming Club. ICPC-style contests and weekly problem solving."
            />
            <HobbyCard
              icon={<Sparkles className="w-5 h-5" />}
              title="Design Tinkering"
              description="I designed every iteration of this portfolio myself — and I&apos;m never quite finished."
            />
          </div>
        </Section>

        {/* Looking for */}
        <Section icon={<Target />} title="What I&apos;m Looking For" accent="emerald">
          <div className="card-pro p-7 sm:p-9">
            <p className="text-secondary leading-relaxed pretty mb-6">
              I&apos;m seeking roles or research collaborations where I can work
              alongside thoughtful teams on hard ML problems. I thrive in
              environments that reward learning, experimentation, and
              shipping. If you&apos;re building something at the intersection of
              research and production, let&apos;s talk.
            </p>
            <div className="flex flex-wrap items-start gap-3 text-sm">
              <Highlight icon={<GraduationCap className="w-4 h-4" />}>
                Open to ML / SDE roles after graduation in 2026
              </Highlight>
              <Highlight icon={<MapPin className="w-4 h-4" />}>
                Open to remote &amp; relocation
              </Highlight>
              <Highlight icon={<Heart className="w-4 h-4" />}>
                Especially interested in healthcare, education, climate AI
              </Highlight>
            </div>
            <div className="flex flex-wrap items-center gap-3 mt-7">
              <Link href="/#contact">
                <Button
                  size="lg"
                  className="btn-lift bg-accent-blue text-white hover:bg-accent-blue/90 gap-2"
                >
                  Get in touch
                </Button>
              </Link>
              <Link href="/#projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="btn-lift border-soft-accent bg-[hsl(var(--surface))] hover:bg-[hsl(var(--surface-elevated))]"
                >
                  See my projects
                </Button>
              </Link>
            </div>
          </div>
        </Section>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <blockquote className="text-2xl sm:text-3xl font-medium text-secondary italic balance">
            &ldquo;The best way to predict the future is to build it.&rdquo;
          </blockquote>
          <p className="mt-3 text-sm text-tertiary">— Alan Kay</p>
        </motion.div>
      </div>
    </div>
  )
}

/* ---------- Helpers ---------- */

const accentMap = {
  blue: { tint: "bg-tint-blue", border: "border-accent-blue/30", text: "text-accent-blue" },
  indigo: { tint: "bg-tint-indigo", border: "border-accent-indigo/30", text: "text-accent-indigo" },
  emerald: { tint: "bg-tint-emerald", border: "border-accent-emerald/30", text: "text-accent-emerald" },
  amber: { tint: "bg-tint-amber", border: "border-accent-amber/30", text: "text-accent-amber" },
  rose: { tint: "bg-tint-rose", border: "border-accent-rose/30", text: "text-accent-rose" },
} as const

function Section({
  icon,
  title,
  accent,
  children,
}: {
  icon: React.ReactNode
  title: string
  accent: keyof typeof accentMap
  children: React.ReactNode
}) {
  const tone = accentMap[accent]
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <div className="flex items-center gap-3 mb-6">
        <div
          className={`w-10 h-10 rounded-lg ${tone.tint} border ${tone.border} grid place-items-center ${tone.text}`}
        >
          {icon}
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          {title}
        </h2>
      </div>
      {children}
    </motion.section>
  )
}

function ValueCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="card-pro card-pro-lift p-6">
      <h3 className="text-base font-semibold text-[hsl(var(--text-primary))] mb-2">
        {title}
      </h3>
      <p className="text-sm text-secondary leading-relaxed">{description}</p>
    </div>
  )
}

function HobbyCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="card-pro card-pro-lift p-6">
      <div className="w-9 h-9 rounded-lg bg-tint-amber border border-accent-amber/30 text-accent-amber grid place-items-center mb-4">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-[hsl(var(--text-primary))] mb-2">
        {title}
      </h3>
      <p className="text-sm text-secondary leading-relaxed">{description}</p>
    </div>
  )
}

function ApproachItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-1.5 w-1 h-1 rounded-full bg-accent-blue flex-shrink-0" />
      <span>{children}</span>
    </li>
  )
}

function Highlight({
  icon,
  children,
}: {
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[hsl(var(--surface-elevated))] border border-soft-accent text-secondary text-xs">
      <span className="text-accent-blue">{icon}</span>
      {children}
    </span>
  )
}
