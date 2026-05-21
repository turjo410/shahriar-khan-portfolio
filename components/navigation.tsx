"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion, AnimatePresence } from "framer-motion"

type NavItem =
  | { href: string; label: string; comingSoon?: boolean }
  | { label: string; dropdown: { href: string; label: string; comingSoon?: boolean }[] }

const navItems: NavItem[] = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  {
    label: "Academic",
    dropdown: [
      { href: "/credentials", label: "Credentials & Transcripts", comingSoon: true },
      { href: "/statement-of-purpose", label: "Statement of Purpose", comingSoon: true },
      { href: "/recommendations", label: "Letters of Recommendation", comingSoon: true },
      { href: "/research", label: "Research & Publications", comingSoon: true },
      { href: "/certifications", label: "Certifications", comingSoon: true },
    ],
  },
  { href: "/about", label: "More About" },
  { href: "/#contact", label: "Contact" },
]

const SECTION_IDS = ["home", "about", "projects", "skills", "experience", "contact"] as const

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)
  const [activeSection, setActiveSection] = React.useState<string>("home")

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // ScrollSpy: highlight active section in nav
  React.useEffect(() => {
    if (typeof window === "undefined") return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    )
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <nav className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/#home"
            className="flex items-center gap-2 group"
            aria-label="Shahriar Khan — Home"
          >
            <span className="grid place-items-center w-9 h-9 rounded-lg bg-tint-blue border border-accent-blue/40 text-accent-blue font-bold text-sm tracking-tight transition-colors group-hover:border-accent-blue">
              SK
            </span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="text-sm font-semibold text-[hsl(var(--text-primary))]">
                Shahriar Khan
              </span>
              <span className="text-[11px] text-tertiary font-mono">
                AI/ML Engineer
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              if ("dropdown" in item) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Button
                      variant="ghost"
                      className="text-sm gap-1 h-9 px-3 text-secondary hover:text-[hsl(var(--text-primary))] hover:bg-[hsl(var(--surface-elevated))]"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </Button>
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-1 w-64 rounded-xl glass shadow-2xl overflow-hidden"
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="flex items-center justify-between px-4 py-2.5 text-sm text-secondary hover:bg-[hsl(var(--surface-elevated))] hover:text-[hsl(var(--text-primary))] transition-colors border-b border-soft last:border-0"
                            >
                              <span>{subItem.label}</span>
                              {subItem.comingSoon && (
                                <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-tint-amber text-accent-amber font-semibold">
                                  Soon
                                </span>
                              )}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }

              const isActive =
                item.href.startsWith("/#") &&
                activeSection === item.href.replace("/#", "")

              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant="ghost"
                    className={`text-sm h-9 px-3 transition-colors ${
                      isActive
                        ? "text-accent-blue bg-tint-blue"
                        : "text-secondary hover:text-[hsl(var(--text-primary))] hover:bg-[hsl(var(--surface-elevated))]"
                    }`}
                  >
                    {item.label}
                  </Button>
                </Link>
              )
            })}
            <div className="ml-2 border-l border-soft h-6" />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-1 lg:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1 max-h-[70vh] overflow-y-auto">
                {navItems.map((item) => {
                  if ("dropdown" in item) {
                    const open = activeDropdown === item.label
                    return (
                      <div key={item.label}>
                        <Button
                          variant="ghost"
                          className="w-full justify-between text-secondary"
                          onClick={() =>
                            setActiveDropdown(open ? null : item.label)
                          }
                        >
                          {item.label}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              open ? "rotate-180" : ""
                            }`}
                          />
                        </Button>
                        <AnimatePresence>
                          {open && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 space-y-1 overflow-hidden"
                            >
                              {item.dropdown.map((sub) => (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  onClick={() => setIsOpen(false)}
                                >
                                  <Button
                                    variant="ghost"
                                    className="w-full justify-between text-tertiary hover:text-[hsl(var(--text-primary))]"
                                  >
                                    <span>{sub.label}</span>
                                    {sub.comingSoon && (
                                      <span className="text-[10px] uppercase px-1.5 py-0.5 rounded bg-tint-amber text-accent-amber font-semibold">
                                        Soon
                                      </span>
                                    )}
                                  </Button>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  }

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                    >
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-secondary hover:text-[hsl(var(--text-primary))]"
                      >
                        {item.label}
                      </Button>
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
