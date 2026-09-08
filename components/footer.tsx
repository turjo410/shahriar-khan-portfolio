"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import {
  SiGithub,
  SiKaggle,
  SiGmail,
} from "react-icons/si"
import { FaLinkedinIn } from "react-icons/fa"

const SOCIALS = [
  { label: "GitHub",   href: "https://github.com/turjo410",                         icon: SiGithub      },
  { label: "LinkedIn", href: "https://linkedin.com/in/shahriar-khan-08770b289",     icon: FaLinkedinIn  },
  { label: "Kaggle",   href: "https://www.kaggle.com/turjo410",                     icon: SiKaggle      },
  { label: "Email",    href: "mailto:turjo410@gmail.com",                           icon: SiGmail       },
]

export function Footer() {
  return (
    <footer
      className="relative border-t border-[hsl(var(--border))] overflow-hidden"
      style={{ background: "hsl(var(--background))" }}
    >
      {/* ── Left vertical icon strip ─────────────────────────────────── */}
      <div
        className="hidden lg:flex fixed left-0 bottom-0 flex-col items-center gap-5 pb-8 pt-6 z-40"
        style={{ width: "3.5rem" }}
      >
        <div
          className="flex flex-col items-center gap-4 px-3 py-5 rounded-2xl"
          style={{
            background: "hsl(var(--surface) / 0.6)",
            backdropFilter: "blur(12px)",
            border: "1px solid hsl(var(--border-accent))",
          }}
        >
          {SOCIALS.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="text-tertiary hover:text-[hsl(var(--text-primary))] transition-colors duration-200"
            >
              <Icon size={18} />
            </Link>
          ))}
        </div>
        {/* Thin vertical line below icons */}
        <div
          className="w-px flex-1 min-h-[40px] max-h-[80px]"
          style={{ background: "hsl(var(--border-accent))" }}
        />
      </div>

      {/* ── Main footer content ──────────────────────────────────────── */}
      <div className="container pt-16 pb-8 lg:pl-16">

        {/* Giant name */}
        <h2
          className="font-black uppercase tracking-tight leading-[0.9]
                     text-[hsl(var(--text-primary))] mb-14 select-none"
          style={{ fontSize: "clamp(3rem, 10vw, 8.5rem)" }}
        >
          Shahriar<br className="sm:hidden" /> Khan
        </h2>

        {/* Info grid — 2 col on mobile, 4 col desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Contact */}
          <div className="space-y-7">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-tertiary mb-2.5">
                Email
              </p>
              <Link
                href="mailto:turjo410@gmail.com"
                className="text-sm text-secondary hover:text-[hsl(var(--text-primary))]
                           transition-colors duration-200"
              >
                turjo410@gmail.com
              </Link>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-tertiary mb-2.5">
                Location
              </p>
              <p className="text-sm text-secondary">Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Status */}
          <div className="space-y-7">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-tertiary mb-2.5">
                Status
              </p>
              <span className="inline-flex items-center gap-2 text-sm text-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse flex-shrink-0" />
                Open to work
              </span>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-tertiary mb-2.5">
                Looking for
              </p>
              <p className="text-sm text-secondary">Full-time · Funded PhD</p>
            </div>
          </div>

          {/* Social links */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-tertiary mb-4">
              Social
            </p>
            <ul className="space-y-3">
              {SOCIALS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-center gap-1.5 text-sm text-secondary
                               hover:text-[hsl(var(--text-primary))] transition-all duration-200
                               pb-px border-b border-[hsl(var(--border))]
                               hover:border-[hsl(var(--text-secondary))]"
                  >
                    {label}
                    <ArrowUpRight
                      className="w-3 h-3 opacity-0 -translate-x-1 translate-y-1
                                 group-hover:opacity-100 group-hover:translate-x-0
                                 group-hover:translate-y-0 transition-all duration-200"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Credit */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-tertiary mb-4">
                Made by
              </p>
              <p className="text-sm text-secondary leading-relaxed">
                Designed &amp; Developed
                <br />
                by{" "}
                <span className="text-accent-blue font-medium">
                  Shahriar Khan
                </span>
              </p>
            </div>
            <p className="text-xs text-tertiary mt-8">© 2026</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center
                     justify-between gap-4 pt-6 border-t border-[hsl(var(--border))]"
        >
          <p className="text-xs text-tertiary font-mono">
            Built with Next.js 16 · Tailwind CSS v4 · Three.js · Framer Motion
          </p>

          <Link
            href="/cv/ShahriarKhan_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[11px] font-mono
                       uppercase tracking-widest text-secondary
                       hover:text-[hsl(var(--text-primary))] transition-colors duration-200
                       border border-[hsl(var(--border))] hover:border-[hsl(var(--border-accent))]
                       px-4 py-2 rounded-lg"
          >
            Resume
            <ArrowUpRight
              className="w-3 h-3 opacity-50 group-hover:opacity-100
                         group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                         transition-all duration-200"
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}
