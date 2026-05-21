"use client"

/**
 * PillNav — from reactbits.dev
 * Adapted for Next.js:
 *   - Uses next/link instead of react-router-dom Link
 *   - Uses next/navigation usePathname for activeHref auto-detection
 *   - Defaults pre-tuned for the dark portfolio theme
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
  baseColor?: string
  pillColor?: string
  hoveredPillTextColor?: string
  pillTextColor?: string
  onMobileMenuClick?: () => void
  initialLoadAnimation?: boolean
}

const PillNav: React.FC<PillNavProps> = ({
  items,
  activeHref: activeHrefProp,
  className = "",
  ease = "power3.easeOut",
  baseColor = "hsl(var(--surface) / 0.85)",
  pillColor = "hsl(var(--surface-elevated))",
  hoveredPillTextColor = "hsl(var(--text-primary))",
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = false,
}) => {
  const pathname = usePathname()
  const activeHref = activeHrefProp ?? pathname
  const resolvedPillTextColor =
    pillTextColor ?? "hsl(var(--text-secondary))"

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const circleRefs = useRef<Array<HTMLSpanElement | null>>([])
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([])
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([])
  const hamburgerRef = useRef<HTMLButtonElement | null>(null)
  const mobileMenuRef = useRef<HTMLDivElement | null>(null)
  const navItemsRef = useRef<HTMLDivElement | null>(null)
  const logoRef = useRef<HTMLAnchorElement | null>(null)

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
        const white = pill.querySelector<HTMLElement>(".pill-label-hover")
        if (label) gsap.set(label, { y: 0 })
        if (white) gsap.set(white, { y: h + 12, opacity: 0 })
        const index = circleRefs.current.indexOf(circle)
        if (index === -1) return
        tlRefs.current[index]?.kill()
        const tl = gsap.timeline({ paused: true })
        tl.to(
          circle,
          { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: "auto" },
          0
        )
        if (label) {
          tl.to(
            label,
            { y: -(h + 8), duration: 2, ease, overwrite: "auto" },
            0
          )
        }
        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 })
          tl.to(
            white,
            { y: 0, opacity: 1, duration: 2, ease, overwrite: "auto" },
            0
          )
        }
        tlRefs.current[index] = tl
      })
    }

    layout()
    window.addEventListener("resize", layout)
    if (document.fonts) {
      document.fonts.ready.then(layout).catch(() => {})
    }

    const menu = mobileMenuRef.current
    if (menu) {
      gsap.set(menu, { visibility: "hidden", opacity: 0, scaleY: 1, y: 0 })
    }

    if (initialLoadAnimation) {
      if (logoRef.current) {
        gsap.set(logoRef.current, { scale: 0 })
        gsap.to(logoRef.current, { scale: 1, duration: 0.6, ease })
      }
      if (navItemsRef.current) {
        gsap.set(navItemsRef.current, { width: 0, overflow: "hidden" })
        gsap.to(navItemsRef.current, { width: "auto", duration: 0.6, ease })
      }
    }

    return () => window.removeEventListener("resize", layout)
  }, [items, ease, initialLoadAnimation])

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i]
    if (!tl) return
    activeTweenRefs.current[i]?.kill()
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: "auto",
    })
  }

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i]
    if (!tl) return
    activeTweenRefs.current[i]?.kill()
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: "auto",
    })
  }

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen
    setIsMobileMenuOpen(newState)
    const hamburger = hamburgerRef.current
    const menu = mobileMenuRef.current

    if (hamburger) {
      const lines = hamburger.querySelectorAll(".hamburger-line")
      if (newState) {
        gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3, ease })
        gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease })
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease })
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease })
      }
    }
    if (menu) {
      if (newState) {
        gsap.set(menu, { visibility: "visible" })
        gsap.fromTo(
          menu,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.3, ease }
        )
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: 10,
          duration: 0.2,
          ease,
          onComplete: () => {
            gsap.set(menu, { visibility: "hidden" })
          },
        })
      }
    }
    onMobileMenuClick?.()
  }

  const cssVars = {
    ["--base"]: baseColor,
    ["--pill-bg"]: pillColor,
    ["--hover-text"]: hoveredPillTextColor,
    ["--pill-text"]: resolvedPillTextColor,
    ["--nav-h"]: "42px",
    ["--pill-pad-x"]: "18px",
    ["--pill-gap"]: "3px",
  } as React.CSSProperties

  return (
    /* Outer wrapper: centered at the top of the page */
    <div className="absolute top-3 md:top-5 left-1/2 -translate-x-1/2 w-[92%] max-w-[860px] z-50">
      <nav
        className={`w-full flex items-center justify-between box-border px-3 md:px-0 md:justify-center gap-2 ${className}`}
        aria-label="Primary navigation"
        style={cssVars}
      >
        {/* SK Logo pill */}
        <NextLink
          href="/#home"
          ref={logoRef}
          aria-label="Home"
          className="rounded-full inline-flex items-center justify-center flex-shrink-0 gap-2 px-3"
          style={{
            height: "var(--nav-h)",
            background: "var(--base)",
            backdropFilter: "saturate(180%) blur(16px)",
            WebkitBackdropFilter: "saturate(180%) blur(16px)",
            border: "1px solid hsl(var(--border-accent))",
            boxShadow: "0 4px 20px hsl(var(--background) / 0.4)",
          }}
        >
          <span className="w-7 h-7 rounded-md bg-tint-blue border border-accent-blue/40 text-accent-blue font-bold text-xs grid place-items-center flex-shrink-0">
            SK
          </span>
          <span className="hidden sm:flex flex-col leading-tight mr-1">
            <span className="text-xs font-semibold text-[hsl(var(--text-primary))]">
              Shahriar Khan
            </span>
            <span className="text-[9px] text-tertiary font-mono">
              CSE · AI/ML
            </span>
          </span>
        </NextLink>

        {/* Desktop pill list */}
        <div
          ref={navItemsRef}
          className="relative items-center rounded-full hidden md:flex"
          style={{
            height: "var(--nav-h)",
            background: "var(--base)",
            backdropFilter: "saturate(180%) blur(16px)",
            WebkitBackdropFilter: "saturate(180%) blur(16px)",
            border: "1px solid hsl(var(--border-accent))",
            boxShadow: "0 4px 20px hsl(var(--background) / 0.4)",
          }}
        >
          <ul
            role="menubar"
            className="list-none flex items-stretch m-0 p-[3px] h-full"
            style={{ gap: "var(--pill-gap)" }}
          >
            {items.map((item, i) => {
              const isActive = activeHref === item.href
              const pillStyle: React.CSSProperties = {
                background: "var(--pill-bg)",
                color: isActive
                  ? "hsl(var(--accent-blue))"
                  : "var(--pill-text)",
                paddingLeft: "var(--pill-pad-x)",
                paddingRight: "var(--pill-pad-x)",
              }
              const isExternal =
                item.href.startsWith("http") ||
                item.href.startsWith("mailto:")

              return (
                <li key={item.href} role="none" className="flex h-full">
                  <NextLink
                    role="menuitem"
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="relative overflow-hidden inline-flex items-center justify-center h-full no-underline rounded-full font-semibold text-[14px] leading-[0] uppercase tracking-[0.3px] whitespace-nowrap cursor-pointer"
                    style={pillStyle}
                    aria-label={item.ariaLabel ?? item.label}
                    aria-current={isActive ? "page" : undefined}
                    onMouseEnter={() => handleEnter(i)}
                    onMouseLeave={() => handleLeave(i)}
                  >
                    <span
                      className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none"
                      style={{
                        background: "hsl(var(--accent-blue) / 0.15)",
                        willChange: "transform",
                      }}
                      aria-hidden="true"
                      ref={(el) => {
                        circleRefs.current[i] = el
                      }}
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

        {/* Hire Me CTA */}
        <NextLink
          href="/#contact"
          className="hidden md:inline-flex items-center gap-1.5 h-9 px-4 rounded-full text-sm font-semibold text-white transition-all btn-lift flex-shrink-0"
          style={{
            background: "hsl(var(--accent-blue))",
            backdropFilter: "saturate(180%) blur(16px)",
          }}
        >
          Hire Me
        </NextLink>

        {/* Mobile hamburger */}
        <button
          ref={hamburgerRef}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          className="md:hidden rounded-full border-0 flex flex-col items-center justify-center gap-[5px] cursor-pointer p-0"
          style={{
            width: "var(--nav-h)",
            height: "var(--nav-h)",
            background: "var(--base)",
            backdropFilter: "saturate(180%) blur(16px)",
            border: "1px solid hsl(var(--border-accent))",
          }}
        >
          <span
            className="hamburger-line w-[20px] h-0.5 rounded origin-center"
            style={{ background: "hsl(var(--text-secondary))" }}
          />
          <span
            className="hamburger-line w-[20px] h-0.5 rounded origin-center"
            style={{ background: "hsl(var(--text-secondary))" }}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        ref={mobileMenuRef}
        className="md:hidden absolute top-[3.2em] left-0 right-0 rounded-2xl shadow-2xl z-[998] origin-top"
        style={{
          ...cssVars,
          background: "hsl(var(--surface) / 0.95)",
          backdropFilter: "saturate(180%) blur(20px)",
          border: "1px solid hsl(var(--border-accent))",
        }}
      >
        <ul className="list-none m-0 p-2 flex flex-col gap-1">
          {items.map((item) => {
            const isActive = activeHref === item.href
            return (
              <li key={item.href}>
                <NextLink
                  href={item.href}
                  className="block py-2.5 px-4 text-sm font-medium rounded-xl transition-all duration-200"
                  style={{
                    color: isActive
                      ? "hsl(var(--accent-blue))"
                      : "hsl(var(--text-secondary))",
                    background: isActive
                      ? "hsl(var(--accent-blue) / 0.1)"
                      : "transparent",
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </NextLink>
              </li>
            )
          })}
          <li className="pt-1 border-t border-soft">
            <NextLink
              href="/#contact"
              className="block py-2.5 px-4 text-sm font-semibold rounded-xl text-white text-center"
              style={{ background: "hsl(var(--accent-blue))" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Me
            </NextLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PillNav
