"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Construction } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ComingSoonProps {
  title: string
  description: string
  expected?: string
}

export function ComingSoon({ title, description, expected }: ComingSoonProps) {
  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
      <div className="hero-bloom" />

      <div className="container relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card-pro p-8 sm:p-12 text-center"
        >
          <div className="w-14 h-14 mx-auto rounded-xl bg-tint-amber border border-accent-amber/30 grid place-items-center mb-6">
            <Construction className="w-6 h-6 text-accent-amber" />
          </div>

          <span className="section-label">Coming soon</span>

          <h1 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight balance">
            {title}
          </h1>

          <p className="mt-5 text-lg text-secondary leading-relaxed pretty">
            {description}
          </p>

          {expected && (
            <p className="mt-3 text-sm text-tertiary font-mono">
              Expected: {expected}
            </p>
          )}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="btn-lift gap-2 border-soft-accent bg-[hsl(var(--surface))] hover:bg-[hsl(var(--surface-elevated))]"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to home
              </Button>
            </Link>
            <Link href="/#contact">
              <Button
                size="lg"
                className="btn-lift bg-accent-blue text-white hover:bg-accent-blue/90"
              >
                Get in touch
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
