"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ChevronDown, GraduationCap, Briefcase, FileDown } from "lucide-react"

const CVS = [
  {
    label: "Academic CV",
    hint: "For PhD and research applications",
    href: "/cv/Shahriar_Khan_CV_PhD.pdf",
    icon: GraduationCap,
  },
  {
    label: "Industry CV",
    hint: "For full-time engineering roles",
    href: "/cv/ShahriarKhan_CV.pdf",
    icon: Briefcase,
  },
] as const

export function CvDropdown({
  align = "left",
}: {
  align?: "left" | "right"
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("mousedown", onPointerDown)
    document.addEventListener("touchstart", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("mousedown", onPointerDown)
      document.removeEventListener("touchstart", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  return (
    <div className="relative inline-flex" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="btn-lift inline-flex items-center gap-2 border border-soft-accent bg-[hsl(var(--surface))] hover:bg-[hsl(var(--surface-elevated))] text-[hsl(var(--text-primary))] px-6 h-12 rounded-xl text-base font-medium transition-colors"
      >
        <FileDown className="w-4 h-4" />
        Download CV
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          role="menu"
          className={`absolute z-50 mt-2 w-72 rounded-xl border border-soft-accent bg-[hsl(var(--surface-elevated))] shadow-2xl overflow-hidden ${
            align === "right" ? "right-0" : "left-0"
          }`}
        >
          {CVS.map(({ label, hint, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex items-start gap-3 px-4 py-3 transition-colors hover:bg-[hsl(var(--surface))]"
            >
              <span className="mt-0.5 w-9 h-9 rounded-lg bg-tint-blue border border-accent-blue/30 text-accent-blue grid place-items-center flex-shrink-0">
                <Icon className="w-4 h-4" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-[hsl(var(--text-primary))]">
                  {label}
                </span>
                <span className="block text-xs text-tertiary mt-0.5">
                  {hint}
                </span>
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
