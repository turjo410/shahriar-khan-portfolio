"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface GlassLensProps {
  /** The headline this lens magnifies. */
  text: string
  className?: string
  /** Additional eyebrow line shown below the giant text. */
  subline?: string
}

/**
 * GlassLens
 * ---------
 * Inspired by reactbits.dev FluidGlass (lens mode) but built without
 * three.js / .glb assets. Renders a giant headline behind a circular
 * backdrop-filter "lens" that follows the cursor on hover. The lens
 * magnifies and tints the text underneath without needing WebGL.
 *
 * On touch devices it gracefully falls back to a static (non-following)
 * lens centered on the headline.
 */
export function GlassLens({ text, subline, className }: GlassLensProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const lensRef = React.useRef<HTMLDivElement>(null)
  const [active, setActive] = React.useState(false)

  const onMove = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const wrap = ref.current
    const lens = lensRef.current
    if (!wrap || !lens) return
    const rect = wrap.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    lens.style.transform = `translate3d(${x - 110}px, ${y - 110}px, 0)`
  }, [])

  return (
    <section
      ref={ref}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onMouseMove={onMove}
      className={cn(
        "relative w-full overflow-hidden py-10 sm:py-14 select-none",
        className
      )}
    >
      <div className="container relative">
        {/* The headline — single line on desktop */}
        <h2
          aria-label={text}
          className="display-text font-bold tracking-tight text-center sm:whitespace-nowrap"
          style={{
            fontSize: "clamp(2.25rem, 7vw, 6rem)",
            lineHeight: 1.05,
          }}
        >
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, hsl(var(--text-primary)) 0%, hsl(var(--accent-blue) / 0.9) 55%, hsl(var(--accent-indigo) / 0.75) 100%)",
            }}
          >
            {text}
          </span>
        </h2>

        {subline && (
          <p className="mt-4 text-center text-sm sm:text-base text-tertiary max-w-xl mx-auto pretty">
            {subline}
          </p>
        )}

        {/* The roaming lens */}
        <div
          ref={lensRef}
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 transition-opacity duration-300"
          style={{
            opacity: active ? 1 : 0,
            width: 220,
            height: 220,
            willChange: "transform",
          }}
        >
          {/* Outer ring */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              boxShadow:
                "0 0 0 1px hsl(var(--accent-blue) / 0.35), 0 30px 60px -10px hsl(var(--accent-blue) / 0.35)",
              backdropFilter: "blur(2px) saturate(140%) contrast(110%)",
              WebkitBackdropFilter:
                "blur(2px) saturate(140%) contrast(110%)",
              background:
                "radial-gradient(circle at 30% 30%, hsl(var(--accent-blue) / 0.18) 0%, transparent 65%), radial-gradient(circle at 70% 70%, hsl(var(--accent-indigo) / 0.22) 0%, transparent 65%)",
            }}
          />
          {/* Glass highlight */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 28% 22%, hsl(0 0% 100% / 0.35) 0%, hsl(0 0% 100% / 0) 35%), radial-gradient(circle at 70% 80%, hsl(0 0% 100% / 0.06) 0%, hsl(0 0% 100% / 0) 30%)",
              mixBlendMode: "screen",
            }}
          />
          {/* Inner thin border for the glass edge */}
          <div
            className="absolute inset-1 rounded-full"
            style={{
              boxShadow:
                "inset 0 0 0 1px hsl(0 0% 100% / 0.18), inset 0 -8px 16px -8px hsl(var(--accent-indigo) / 0.4)",
            }}
          />
        </div>
      </div>
    </section>
  )
}
