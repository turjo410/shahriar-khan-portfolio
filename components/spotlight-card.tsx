"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Base CSS color (use an HSL var or hex). Defaults to accent-blue. */
  color?: string
  /** Spotlight radius in px */
  radius?: number
  children: React.ReactNode
}

/**
 * SpotlightCard
 * --------------
 * Wraps any block content with a mouse-tracking radial highlight that fades
 * in on hover. Style is borrowed from reactbits.dev / Aceternity but
 * adapted to use our design tokens (--accent-blue / --surface).
 *
 * Layered:
 *   - The inner content sits on top
 *   - A pseudo-element renders the spotlight using a `radial-gradient` whose
 *     center follows mouse position via CSS variables
 */
export function SpotlightCard({
  className,
  color = "hsl(var(--accent-blue) / 0.18)",
  radius = 380,
  children,
  ...rest
}: SpotlightCardProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = React.useState(false)

  const handleMove = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`)
    el.style.setProperty("--my", `${e.clientY - rect.top}px`)
  }, [])

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "group relative rounded-2xl card-pro overflow-hidden",
        className
      )}
      style={{
        // CSS vars consumed by the spotlight pseudo-element
        // (set defaults in case the cursor is never inside)
        ["--mx" as string]: "50%",
        ["--my" as string]: "50%",
        ["--spotlight-color" as string]: color,
        ["--spotlight-radius" as string]: `${radius}px`,
      }}
      {...rest}
    >
      {/* Spotlight layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background:
            "radial-gradient(var(--spotlight-radius) circle at var(--mx) var(--my), var(--spotlight-color), transparent 60%)",
        }}
      />
      {/* Subtle border highlight on hover (matches the spotlight) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background:
            "radial-gradient(var(--spotlight-radius) circle at var(--mx) var(--my), hsl(var(--accent-blue) / 0.25), transparent 70%)",
          mask: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
          WebkitMask:
            "linear-gradient(black, black) content-box, linear-gradient(black, black)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  )
}
