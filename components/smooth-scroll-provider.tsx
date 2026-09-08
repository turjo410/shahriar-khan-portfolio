"use client"

import { useEffect } from "react"
import Lenis from "lenis"

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => {
        // Cubic ease-out — fast start, gentle deceleration
        return 1 - Math.pow(1 - t, 3)
      },
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.8,
      infinite: false,
    })

    // Make Lenis handle anchor clicks so /#contact etc. work
    function onAnchorClick(e: MouseEvent) {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")
      if (!anchor) return
      const href = anchor.getAttribute("href") ?? ""
      // Handle same-page hash links like /#contact or #contact
      const hash = href.startsWith("/#")
        ? href.slice(1)          // "/#contact" → "#contact"
        : href.startsWith("#")
        ? href                   // "#contact"
        : null
      if (!hash) return
      const el = document.querySelector(hash)
      if (!el) return
      e.preventDefault()
      lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.2 })
    }

    document.addEventListener("click", onAnchorClick)

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      document.removeEventListener("click", onAnchorClick)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
