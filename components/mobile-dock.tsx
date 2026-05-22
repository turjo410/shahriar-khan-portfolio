"use client"

/**
 * MobileDock — bottom-of-screen floating dock for mobile nav.
 * Visible only on screens < md breakpoint.
 * Icons: Home, User (About), Grid (Projects), Code (Skills), Briefcase (Experience), Mail (Contact)
 */

import NextLink from "next/link"
import { Home, User, LayoutGrid, Code2, Briefcase, Mail } from "lucide-react"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

const DOCK_ITEMS = [
  { icon: Home, label: "Home", href: "/#home" },
  { icon: User, label: "About", href: "/#about" },
  { icon: LayoutGrid, label: "Projects", href: "/#projects" },
  { icon: Code2, label: "Skills", href: "/#skills" },
  { icon: Briefcase, label: "Experience", href: "/#experience" },
  { icon: Mail, label: "Contact", href: "/#contact" },
]

export function MobileDock() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const ids = ["home", "about", "projects", "skills", "experience", "contact"]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [pathname])

  return (
    <nav
      aria-label="Mobile navigation dock"
      className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
    >
      <div
        className="flex items-center gap-1 px-3 py-2 rounded-2xl"
        style={{
          background: "hsl(var(--surface) / 0.88)",
          backdropFilter: "saturate(180%) blur(20px)",
          WebkitBackdropFilter: "saturate(180%) blur(20px)",
          border: "1px solid hsl(var(--border-accent))",
          boxShadow:
            "0 8px 32px hsl(var(--background) / 0.5), 0 2px 8px hsl(var(--background) / 0.3)",
        }}
      >
        {DOCK_ITEMS.map(({ icon: Icon, label, href }) => {
          const sectionId = href.replace("/#", "")
          const isActive = activeSection === sectionId

          return (
            <NextLink
              key={href}
              href={href}
              aria-label={label}
              className="relative flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all duration-200 group"
              style={{
                background: isActive
                  ? "hsl(var(--accent-blue) / 0.15)"
                  : "transparent",
              }}
            >
              <Icon
                className="w-5 h-5 transition-colors duration-200"
                style={{
                  color: isActive
                    ? "hsl(var(--accent-blue))"
                    : "hsl(var(--text-secondary))",
                }}
              />
              {/* Active dot indicator */}
              {isActive && (
                <span
                  className="absolute bottom-1.5 w-1 h-1 rounded-full"
                  style={{ background: "hsl(var(--accent-blue))" }}
                />
              )}
              {/* Tooltip label on hover */}
              <span
                className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md text-[10px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none"
                style={{
                  background: "hsl(var(--surface-elevated))",
                  color: "hsl(var(--text-primary))",
                  border: "1px solid hsl(var(--border-accent))",
                }}
              >
                {label}
              </span>
            </NextLink>
          )
        })}
      </div>
    </nav>
  )
}
