import { cn } from "@/lib/utils"

interface ShinyTextProps {
  children: React.ReactNode
  className?: string
}

/**
 * ShinyText
 * ---------
 * Inline shimmer text. Use sparingly — for the hero name or the SECTION
 * LABELS only. Driven by the `.text-shine` utility in globals.css.
 */
export function ShinyText({ children, className }: ShinyTextProps) {
  return (
    <span className={cn("text-shine display-text", className)}>{children}</span>
  )
}
