"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectSlugPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container max-w-3xl text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Detailed case studies coming soon
        </h1>
        <p className="text-lg text-secondary mb-8 pretty">
          Per-project case study pages with images, metrics, and architecture
          breakdowns are next on the roadmap. For now, all featured projects
          have full summaries and live links on the home page.
        </p>
        <Link href="/#projects">
          <Button
            size="lg"
            className="btn-lift bg-accent-blue text-white hover:bg-accent-blue/90 gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            View projects
          </Button>
        </Link>
      </div>
    </div>
  )
}
