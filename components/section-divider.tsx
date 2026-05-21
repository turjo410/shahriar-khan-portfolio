interface SectionDividerProps {
  /** Optional label rendered in the middle (e.g. "Projects"). */
  label?: string
}

/**
 * SectionDivider
 * --------------
 * Thin gradient line used between major sections to add visual rhythm
 * without adding heavy borders.
 */
export function SectionDivider({ label }: SectionDividerProps) {
  if (label) {
    return (
      <div className="container">
        <div className="flex items-center gap-4 py-6">
          <span className="flex-1 h-px bg-gradient-to-r from-transparent via-[hsl(var(--border-accent))] to-transparent" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-tertiary font-mono">
            {label}
          </span>
          <span className="flex-1 h-px bg-gradient-to-r from-transparent via-[hsl(var(--border-accent))] to-transparent" />
        </div>
      </div>
    )
  }
  return (
    <div className="container">
      <div className="divider-grad" />
    </div>
  )
}
