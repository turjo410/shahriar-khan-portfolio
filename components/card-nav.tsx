"use client"

import React, { useLayoutEffect, useRef, useState, useCallback } from "react"
import { gsap } from "gsap"
import { GoArrowUpRight } from "react-icons/go"
import Link from "next/link"

/**
 * CardNav — adapted from reactbits.dev CardNav component.
 * Full GSAP-animated expanding navigation with card sub-menus.
 * Adapted for the Shahriar Khan portfolio:
 *   - Uses SK text logo instead of an image
 *   - Uses portfolio-specific color tokens
 *   - Items wire directly to portfolio sections and external links
 *   - "Hire Me" CTA button routes to /#contact
 */

type CardNavLink = {
  label: string
  href: string
  ariaLabel: string
}

type CardNavItem = {
  label: string
  bgColor: string
  textColor: string
  links: CardNavLink[]
}

const NAV_ITEMS: CardNavItem[] = [
  {
    label: "About",
    bgColor: "#13131F",
    textColor: "#E8E8FF",
    links: [
      { label: "About Me", href: "/#about", ariaLabel: "About Shahriar Khan" },
      { label: "Skills", href: "/#skills", ariaLabel: "Technical skills" },
      { label: "Experience", href: "/#experience", ariaLabel: "Work and academic experience" },
      { label: "Achievements", href: "/#achievements", ariaLabel: "Scholarships and awards" },
    ],
  },
  {
    label: "Projects",
    bgColor: "#0F1629",
    textColor: "#E8E8FF",
    links: [
      { label: "TrafficGuard AI", href: "https://github.com/turjo410/trafficguard-ai", ariaLabel: "TrafficGuard AI on GitHub" },
      { label: "Election Analytics", href: "https://dashboard-cse488-lab.vercel.app/", ariaLabel: "Election Analytics live dashboard" },
      { label: "Banana XAI", href: "https://bananaapp.streamlit.app", ariaLabel: "Banana XAI Streamlit app" },
      { label: "PromptMaster Pro", href: "https://promptmasterpro.tech", ariaLabel: "PromptMaster Pro platform" },
      { label: "View All →", href: "/#projects", ariaLabel: "View all projects" },
    ],
  },
  {
    label: "Connect",
    bgColor: "#160F29",
    textColor: "#E8E8FF",
    links: [
      { label: "GitHub", href: "https://github.com/turjo410", ariaLabel: "GitHub profile" },
      { label: "LinkedIn", href: "https://linkedin.com/in/shahriar-khan-08770b289", ariaLabel: "LinkedIn profile" },
      { label: "Kaggle", href: "https://www.kaggle.com/turjo410", ariaLabel: "Kaggle profile" },
      { label: "Email", href: "mailto:turjo410@gmail.com", ariaLabel: "Send email" },
    ],
  },
]

export function CardNav() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const navRef = useRef<HTMLDivElement | null>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const tlRef = useRef<gsap.core.Timeline | null>(null)

  const calculateHeight = useCallback(() => {
    const navEl = navRef.current
    if (!navEl) return 260
    const isMobile = window.matchMedia("(max-width: 768px)").matches
    if (isMobile) {
      const contentEl = navEl.querySelector(".card-nav-content") as HTMLElement
      if (contentEl) {
        const wasVisibility = contentEl.style.visibility
        const wasPointerEvents = contentEl.style.pointerEvents
        const wasPosition = contentEl.style.position
        const wasHeight = contentEl.style.height
        contentEl.style.visibility = "visible"
        contentEl.style.pointerEvents = "auto"
        contentEl.style.position = "static"
        contentEl.style.height = "auto"
        contentEl.offsetHeight
        const topBar = 60
        const padding = 16
        const contentHeight = contentEl.scrollHeight
        contentEl.style.visibility = wasVisibility
        contentEl.style.pointerEvents = wasPointerEvents
        contentEl.style.position = wasPosition
        contentEl.style.height = wasHeight
        return topBar + contentHeight + padding
      }
    }
    return 260
  }, [])

  const createTimeline = useCallback(() => {
    const navEl = navRef.current
    if (!navEl) return null
    gsap.set(navEl, { height: 60, overflow: "hidden" })
    gsap.set(cardsRef.current, { y: 50, opacity: 0 })
    const tl = gsap.timeline({ paused: true })
    tl.to(navEl, { height: calculateHeight, duration: 0.4, ease: "power3.out" })
    tl.to(
      cardsRef.current,
      { y: 0, opacity: 1, duration: 0.4, ease: "power3.out", stagger: 0.08 },
      "-=0.1"
    )
    return tl
  }, [calculateHeight])

  useLayoutEffect(() => {
    const tl = createTimeline()
    tlRef.current = tl
    return () => {
      tl?.kill()
      tlRef.current = null
    }
  }, [createTimeline])

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return
      if (isExpanded) {
        const newHeight = calculateHeight()
        gsap.set(navRef.current, { height: newHeight })
        tlRef.current.kill()
        const newTl = createTimeline()
        if (newTl) {
          newTl.progress(1)
          tlRef.current = newTl
        }
      } else {
        tlRef.current.kill()
        const newTl = createTimeline()
        if (newTl) tlRef.current = newTl
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isExpanded, calculateHeight, createTimeline])

  const toggleMenu = () => {
    const tl = tlRef.current
    if (!tl) return
    if (!isExpanded) {
      setIsHamburgerOpen(true)
      setIsExpanded(true)
      tl.play(0)
    } else {
      setIsHamburgerOpen(false)
      tl.eventCallback("onReverseComplete", () => setIsExpanded(false))
      tl.reverse()
    }
  }

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el
  }

  const isExternal = (href: string) =>
    href.startsWith("http") || href.startsWith("mailto:")

  return (
    <div className="absolute left-1/2 -translate-x-1/2 w-[92%] max-w-[860px] z-50 top-3 md:top-5">
      <div
        ref={navRef}
        className={`block h-[60px] p-0 rounded-2xl shadow-2xl relative overflow-hidden will-change-[height]`}
        style={{
          background: "hsl(var(--background) / 0.88)",
          backdropFilter: "saturate(180%) blur(20px)",
          WebkitBackdropFilter: "saturate(180%) blur(20px)",
          border: "1px solid hsl(var(--border-accent))",
        }}
      >
        {/* Top bar */}
        <div className="absolute inset-x-0 top-0 h-[60px] flex items-center justify-between px-4 z-[2]">
          {/* SK Logo */}
          <Link
            href="/#home"
            className="flex items-center gap-2.5 order-1 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:order-none"
            aria-label="Shahriar Khan — Home"
          >
            <span className="w-8 h-8 rounded-lg bg-tint-blue border border-accent-blue/40 text-accent-blue font-bold text-sm grid place-items-center">
              SK
            </span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="text-xs font-semibold text-[hsl(var(--text-primary))]">
                Shahriar Khan
              </span>
              <span className="text-[10px] text-tertiary font-mono">
                CSE Engineer · AI/ML
              </span>
            </span>
          </Link>

          {/* Hamburger */}
          <button
            className="order-2 md:order-none h-10 w-10 flex flex-col items-center justify-center gap-[5px] cursor-pointer group rounded-lg hover:bg-[hsl(var(--surface-elevated))] transition-colors"
            onClick={toggleMenu}
            aria-label={isExpanded ? "Close navigation" : "Open navigation"}
            aria-expanded={isExpanded}
          >
            <div
              className={`w-[22px] h-[2px] rounded-full transition-all duration-300 ${
                isHamburgerOpen
                  ? "translate-y-[7px] rotate-45 bg-accent-blue"
                  : "bg-[hsl(var(--text-secondary))]"
              }`}
            />
            <div
              className={`w-[22px] h-[2px] rounded-full transition-all duration-300 ${
                isHamburgerOpen
                  ? "-translate-y-0 opacity-0"
                  : "bg-[hsl(var(--text-secondary))]"
              }`}
            />
            <div
              className={`w-[22px] h-[2px] rounded-full transition-all duration-300 ${
                isHamburgerOpen
                  ? "-translate-y-[7px] -rotate-45 bg-accent-blue"
                  : "bg-[hsl(var(--text-secondary))]"
              }`}
            />
          </button>

          {/* CTA button */}
          <Link
            href="/#contact"
            className="hidden md:inline-flex items-center gap-1.5 h-9 px-4 rounded-xl text-sm font-medium text-white transition-all btn-lift"
            style={{ background: "hsl(var(--accent-blue))" }}
          >
            Hire Me
            <GoArrowUpRight className="w-3.5 h-3.5" aria-hidden />
          </Link>
        </div>

        {/* Expanded card grid */}
        <div
          className={`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-2 flex flex-col items-stretch gap-2 justify-start z-[1] ${
            isExpanded ? "visible pointer-events-auto" : "invisible pointer-events-none"
          } md:flex-row md:items-end md:gap-3`}
          aria-hidden={!isExpanded}
        >
          {NAV_ITEMS.map((item, idx) => (
            <div
              key={item.label}
              ref={setCardRef(idx)}
              className="select-none relative flex flex-col gap-2 p-3 sm:p-4 rounded-xl min-w-0 flex-[1_1_auto] h-auto min-h-[60px] md:h-full md:min-h-0 md:flex-[1_1_0%]"
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="font-medium tracking-tight text-lg sm:text-xl opacity-90">
                {item.label}
              </div>
              <div className="mt-auto flex flex-col gap-1">
                {item.links.map((lnk) => (
                  <Link
                    key={lnk.label}
                    href={lnk.href}
                    target={isExternal(lnk.href) ? "_blank" : undefined}
                    rel={isExternal(lnk.href) ? "noopener noreferrer" : undefined}
                    aria-label={lnk.ariaLabel}
                    onClick={() => {
                      setIsHamburgerOpen(false)
                      tlRef.current?.reverse()
                      setTimeout(() => setIsExpanded(false), 400)
                    }}
                    className="inline-flex items-center gap-1.5 text-sm sm:text-base no-underline cursor-pointer transition-opacity duration-200 hover:opacity-70"
                    style={{ color: item.textColor }}
                  >
                    <GoArrowUpRight
                      className="w-3.5 h-3.5 opacity-60 flex-shrink-0"
                      aria-hidden
                    />
                    {lnk.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
