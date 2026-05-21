"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

// Dynamic import — Beams uses three/r3f, which must run client-side only.
// Loading is deferred so the initial paint isn't blocked by the WebGL bundle.
const Beams = dynamic(() => import("@/components/beams"), {
  ssr: false,
  loading: () => null,
})

/**
 * SiteBackground
 * --------------
 * Persistent, page-wide WebGL background. Mounted once at the root layout
 * (NOT per-section), so the beams travel continuously while you scroll —
 * no break, no seam, no per-section background.
 *
 * Performance:
 *   - Hidden on small screens via the `enabled` flag (saves battery & GPU).
 *   - DPR is capped inside Beams.
 *   - Honors `prefers-reduced-motion`.
 */
export function SiteBackground() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)")
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setEnabled(mq.matches && !reduced.matches)
    update()
    mq.addEventListener("change", update)
    reduced.addEventListener("change", update)
    return () => {
      mq.removeEventListener("change", update)
      reduced.removeEventListener("change", update)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        // Solid backdrop so we never see white during async load
        background: "hsl(var(--background))",
      }}
    >
      {enabled && (
        <div className="absolute inset-0">
          <Beams
            beamWidth={3}
            beamHeight={20}
            beamNumber={20}
            lightColor="#7aa6ff"
            speed={1.6}
            noiseIntensity={1.6}
            scale={0.18}
            rotation={32}
          />
          {/* Vignette to anchor content readability over the WebGL beams */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 40%, transparent 0%, hsl(var(--background) / 0.55) 70%, hsl(var(--background) / 0.85) 100%)",
            }}
          />
          {/* Top + bottom fade so the nav and footer always sit on solid base */}
          <div
            className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, hsl(var(--background)) 0%, transparent 100%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)",
            }}
          />
        </div>
      )}
    </div>
  )
}
