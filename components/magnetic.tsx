"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

interface MagneticProps {
  children: React.ReactNode
  /** How aggressively the element follows the cursor. 0.1 - 0.6 typical. */
  strength?: number
  className?: string
}

/**
 * Magnetic
 * --------
 * Wraps any element so it gently pulls toward the cursor on hover.
 * Used on primary CTA buttons. Inspired by reactbits.dev / Lusion style.
 */
export function Magnetic({ children, strength = 0.3, className }: MagneticProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const xs = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 })
  const ys = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 })

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    x.set(dx * strength)
    y.set(dy * strength)
  }

  function onLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: xs, y: ys }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
