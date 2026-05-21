"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ArrowRight,
  Clock,
} from "lucide-react"
import Link from "next/link"

const CHANNELS = [
  {
    label: "Email",
    value: "turjo410@gmail.com",
    href: "mailto:turjo410@gmail.com",
    icon: Mail,
    accent: "blue",
  },
  {
    label: "Phone",
    value: "+880 1975-759760",
    href: "tel:+8801975759760",
    icon: Phone,
    accent: "indigo",
  },
  {
    label: "LinkedIn",
    value: "/shahriar-khan-08770b289",
    href: "https://linkedin.com/in/shahriar-khan-08770b289",
    icon: Linkedin,
    accent: "blue",
  },
  {
    label: "GitHub",
    value: "@turjo410",
    href: "https://github.com/turjo410",
    icon: Github,
    accent: "indigo",
  },
] as const

const accentMap = {
  blue: { tint: "bg-tint-blue", border: "border-accent-blue/30", text: "text-accent-blue" },
  indigo: { tint: "bg-tint-indigo", border: "border-accent-indigo/30", text: "text-accent-indigo" },
} as const

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-3xl"
        >
          <span className="section-label">Contact</span>
          <h2 className="mt-5 text-display font-bold tracking-tight balance display-text">
            Let&apos;s work together.
          </h2>
          <p className="mt-4 text-lg text-secondary pretty">
            I&apos;m open to ML engineer roles, research collaborations, and
            consulting on production AI systems. Tell me what you&apos;re
            building — I usually reply within 24 hours.
          </p>
        </motion.div>

        {/* Primary CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="card-pro p-7 sm:p-10 mb-6"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="status-dot" />
                <span className="text-sm text-accent-emerald font-medium">
                  Available for opportunities
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[hsl(var(--text-primary))]">
                Have a project or role in mind?
              </h3>
              <p className="text-secondary mt-3">
                The fastest way to reach me is email. I&apos;ll respond with a
                short note covering availability, fit, and next steps.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="mailto:turjo410@gmail.com">
                <Button
                  size="lg"
                  className="btn-lift bg-accent-blue text-white hover:bg-accent-blue/90 px-6 h-11 gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Start a conversation
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="tel:+8801975759760">
                <Button
                  size="lg"
                  variant="outline"
                  className="btn-lift border-soft-accent bg-[hsl(var(--surface))] hover:bg-[hsl(var(--surface-elevated))] px-6 h-11 gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call me
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Channels grid — 4 columns, no Kaggle */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {CHANNELS.map((c, i) => {
            const Icon = c.icon
            const accent = accentMap[c.accent]
            const external = c.href.startsWith("http")
            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: 0.05 * i }}
              >
                <Link
                  href={c.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="card-pro card-pro-lift block p-5 h-full"
                >
                  <div
                    className={`w-10 h-10 rounded-lg ${accent.tint} border ${accent.border} grid place-items-center mb-3`}
                  >
                    <Icon className={`w-4 h-4 ${accent.text}`} />
                  </div>
                  <div className="text-[11px] uppercase tracking-widest text-tertiary mb-1">
                    {c.label}
                  </div>
                  <div className="text-sm font-medium text-[hsl(var(--text-primary))] break-all">
                    {c.value}
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-tertiary"
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-3 h-3" />
            East West University · Dhaka, Bangladesh
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3 h-3" />
            Replies within 24 hours
          </span>
          <span className="inline-flex items-center gap-1.5">
            🌍 Open to remote &amp; relocation
          </span>
        </motion.div>
      </div>
    </section>
  )
}
