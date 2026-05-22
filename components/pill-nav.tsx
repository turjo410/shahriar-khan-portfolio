"use client"

/**
 * PillNav — from reactbits.dev, adapted for Next.js.
 * Desktop: single unified pill bar (logo + nav + CTA all in one container).
 * Mobile: hidden — replaced by MobileDock at the bottom of the screen.
 */

import React, { useEffect, useRef, useState } from "react"
import NextLink from "next/link"
import { usePathname } from "next/navigation"
import { gsap } from "gsap"

export type PillNavItem = {
  label: string
  href: string
  ariaLabel?: string
}

export interface PillNavProps {
  items: PillNavItem[]
  activeHref?: string
  className?: string
  ease?: string
}

const PillNav: React.FC<PillNavProps> = ({
  items,
  activeHref: activeHrefProp,
  className = "",
  ease = "power3.easeOut",
}) => {
  const pathname = usePathname()
  const activeHref = activeHrefProp ?? pathname

  const circleRefs = useRef<Array<HTMLSpanElement | null>>([])
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([])
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([])
  const logoRef = useRef<HTMLAnchorElement | null>(null)

  const NAV_H = 44

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle) => {
        if (!circle?.parentElement) return
        const pill = circle.parentElement as HTMLElement
        const rect = pill.getBoundingClientRect()
        const { width: w, height: h } = rect
        const R = ((w * w) / 4 + h * h) / (2 * h)
        const D = Math.ceil(2 * R) + 2
        const delta =
          Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1
        const originY = D - delta
        circle.style.width = `${D}px`
        circle.style.height = `${D}px`
        circle.style.bottom = `-${delta}px`
        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        })
        const label = pill.querySelector<HTMLElement>(".pill-label")
        const hover = pill.querySelector<HTMLElement>(".pill-label-hover")
        if (label) gsap.set(label, { y: 0 })
        if (hover) gsap.set(hover, { y: h + 12, opacity: 0 })
        const index = circleRefs.current.indexOf(circle)
        if (index === -1) return
        tlRefs.current[index]?.kill()
        const tl = gsap.timeline({ paused: true })
        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: "auto" }, 0)
        if (label) tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: "auto" }, 0)
        if (hover) {
          gsap.set(hover, { y: Math.ceil(h + 100), opacity: 0 })
          tl.to(hover, { y: 0, opacity: 1, duration: 2, ease, overwrite: "auto" }, 0)
        }
        tlRefs.current[index] = tl
      })
    }
    layout()
    window.addEventListener("resize", layout)
    if (document.fonts) document.fonts.ready.then(layout).catch(() => {})
    return () => window.removeEventListener("resize", layout)
  }, [items, ease])

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i]
    if (!tl) return
    activeTweenRefs.current[i]?.kill()
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), { duration: 0.3, ease, overwrite: "auto" })
  }
  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i]
    if (!tl) return
    activeTweenRefs.current[i]?.kill()
    activeTweenRefs.current[i] = tl.tweenTo(0, { duration: 0.2, ease, overwrite: "auto" })
  }

  const pillBase: React.CSSProperties = {
    height: `${NAV_H}px`,
    background: "hsl(var(--surface) / 0.8)",
    backdropFilter: "saturate(180%) blur(18px)",
    WebkitBackdropFilter: "saturate(180%) blur(18px)",
    border: "1px solid hsl(var(--border-accent))",
    boxShadow: "0 4px 24px hsl(var(--background) / 0.45)",
  }

  return (
    /* Only visible on desktop — mobile uses MobileDock */
    <div
      className={`hidden md:flex absolute top-4 left-1/2 -translate-x-1/2 z-50 items-center gap-2 ${className}`}
    >
      {/* ── Logo + brand — left pill ─────────────────────── */}
      <NextLink
        href="/#home"
        ref={logoRef}
        aria-label="Home"
        className="flex items-center gap-2.5 px-3 rounded-full flex-shrink-0 transition-opacity hover:opacity-80"
        style={pillBase}
      >
        <span
          className="w-7 h-7 rounded-md bg-tint-blue border border-accent-blue/40 text-accent-blue
                     font-bold text-xs grid place-items-center flex-shrink-0"
        >
          SK
        </span>
        <span className="flex flex-col leading-tight pr-1">
          <span className="text-[13px] font-semibold text-[hsl(var(--text-primary))]">
            Shahriar Khan
          </span>
          <span className="text-[9px] text-tertiary font-mono">CSE · AI/ML</span>
        </span>
      </NextLink>

      {/* ── Nav pills — centre pill ───────────────────────── */}
      <div
        className="flex items-stretch rounded-full"
        style={pillBase}
      >
        <ul
          role="menubar"
          className="list-none flex items-stretch m-0 p-[3px]"
          style={{ gap: "3px" }}
        >
          {items.map((item, i) => {
            const isActive = activeHref === item.href
            const isExternal = item.href.startsWith("http") || item.href.startsWith("mailto:")

            return (
              <li key={item.href} role="none" className="flex h-full">
                <NextLink
                  role="menuitem"
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  aria-label={item.ariaLabel ?? item.label}
                  aria-current={isActive ? "page" : undefined}
                  onMouseEnter={() => handleEnter(i)}
                  onMouseLeave={() => handleLeave(i)}
                  className="relative overflow-hidden inline-flex items-center justify-center h-full
                             no-underline rounded-full font-medium text-[13px] leading-[0]
                             whitespace-nowrap cursor-pointer px-[16px]"
                  style={{
                    background: "hsl(var(--surface-elevated))",
                    color: isActive
                      ? "hsl(var(--accent-blue))"
                      : "hsl(var(--text-secondary))",
                  }}
                >
                  {/* GSAP ripple circle */}
                  <span
                    className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none"
                    style={{ background: "hsl(var(--accent-blue) / 0.12)", willChange: "transform" }}
                    aria-hidden="true"
                    ref={(el) => { circleRefs.current[i] = el }}
                  />
                  <span className="label-stack relative inline-block leading-[1] z-[2]">
                    <span
                      className="pill-label relative z-[2] inline-block leading-[1]"
                      style={{ willChange: "transform" }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="pill-label-hover absolute left-0 top-0 z-[3] inline-block text-accent-blue"
                      style={{ willChange: "transform, opacity" }}
                      aria-hidden="true"
                    >
                      {item.label}
                    </span>
                  </span>
                </NextLink>
              </li>
            )
          })}
        </ul>
      </div>

      {/* ── Hire Me CTA — right pill ──────────────────────── */}
      <NextLink
        href="/#contact"
        className="inline-flex items-center px-5 rounded-full text-[13px] font-semibold text-white
                   transition-all btn-lift flex-shrink-0"
        style={{
          height: `${NAV_H}px`,
          background: "hsl(var(--accent-blue))",
          backdropFilter: "saturate(180%) blur(16px)",
          boxShadow: "0 4px 16px hsl(var(--accent-blue) / 0.35)",
        }}
      >
        Hire Me
      </NextLink>
    </div>
  )
}

export default PillNav
