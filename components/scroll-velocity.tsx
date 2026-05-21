"use client"

import { cn } from "@/lib/utils"

interface ScrollVelocityProps {
  /** Words rendered in the scrolling row. They will be duplicated for a seamless loop. */
  words: string[]
  /** Reverse direction (right-to-left flips). Default = left scrolling. */
  reverse?: boolean
  /** Visual size: "sm" | "md" | "lg" */
  size?: "sm" | "md" | "lg"
  className?: string
}

/**
 * ScrollVelocity
 * --------------
 * Giant horizontal marquee row used as a section divider / signature
 * statement. Inspired by reactbits.dev "scroll-velocity" but simplified
 * to pure CSS so it doesn't introduce scroll listeners. Uses our
 * --accent-blue tokens.
 *
 * Typically rendered between Hero and About, and between Projects and Skills,
 * to give the page rhythm and replace the "section break" feeling.
 */
export function ScrollVelocity({
  words,
  reverse = false,
  size = "lg",
  className,
}: ScrollVelocityProps) {
  const doubled = [...words, ...words]
  const sizeClass = {
    sm: "text-3xl sm:text-5xl",
    md: "text-5xl sm:text-7xl",
    lg: "text-6xl sm:text-8xl lg:text-9xl",
  }[size]

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden py-6 select-none pointer-events-none",
        className
      )}
      aria-hidden="true"
    >
      <div
        className={cn(
          "velocity-track",
          reverse && "velocity-track-reverse"
        )}
      >
        {doubled.map((w, i) => (
          <span
            key={`${w}-${i}`}
            className={cn(
              "font-bold tracking-tight whitespace-nowrap",
              sizeClass
            )}
          >
            {/* Alternate filled / outlined word for visual rhythm */}
            {i % 2 === 0 ? (
              <span className="text-[hsl(var(--text-primary))]">{w}</span>
            ) : (
              <span
                className="text-transparent"
                style={{
                  WebkitTextStroke: "1px hsl(var(--border-accent))",
                }}
              >
                {w}
              </span>
            )}
            <span className="text-accent-blue mx-6">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
