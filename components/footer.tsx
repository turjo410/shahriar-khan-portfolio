import Link from "next/link"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"

const FOOTER_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-soft bg-[hsl(var(--surface))]/30">
      <div className="container py-12">
        {/* Top: brand + nav + socials */}
        <div className="grid gap-10 md:grid-cols-3 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="grid place-items-center w-9 h-9 rounded-lg bg-tint-blue border border-accent-blue/40 text-accent-blue font-bold text-sm">
                SK
              </span>
              <span className="font-semibold text-[hsl(var(--text-primary))]">
                Shahriar Khan
              </span>
            </div>
            <p className="text-sm text-secondary leading-relaxed max-w-xs">
              AI/ML Engineer building production-ready systems for computer
              vision, data analytics, and full-stack platforms.
            </p>
            <div className="flex items-center gap-2 mt-4 text-xs text-tertiary">
              <MapPin className="w-3.5 h-3.5" />
              <span>East West University · Dhaka, Bangladesh</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:justify-self-center">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-tertiary mb-4">
              Navigate
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary hover:text-accent-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:justify-self-end">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-tertiary mb-4">
              Connect
            </h4>
            <div className="flex items-center gap-2">
              <Link
                href="https://github.com/turjo410"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-lg border border-soft-accent grid place-items-center text-secondary hover:text-accent-blue hover:border-accent-blue/60 transition-all"
              >
                <Github className="w-4 h-4" />
              </Link>
              <Link
                href="https://linkedin.com/in/shahriar-khan-08770b289"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg border border-soft-accent grid place-items-center text-secondary hover:text-accent-blue hover:border-accent-blue/60 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link
                href="mailto:turjo410@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-lg border border-soft-accent grid place-items-center text-secondary hover:text-accent-blue hover:border-accent-blue/60 transition-all"
              >
                <Mail className="w-4 h-4" />
              </Link>
            </div>
            <p className="text-xs text-tertiary mt-4">
              Open to ML engineer roles, research collaborations, and consulting.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-soft flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-tertiary">
            © 2026 Shahriar Khan. All rights reserved.
          </p>
          <p className="text-xs text-tertiary font-mono">
            Built with Next.js, TypeScript & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  )
}
