"use client"

interface TechMarqueeProps {
  items: string[]
}

/**
 * TechMarquee
 * -----------
 * Continuous horizontal scroll of tech name pills. Pauses on hover.
 * Uses CSS animation only — no JS loop, no react-spring.
 */
export function TechMarquee({ items }: TechMarqueeProps) {
  // Duplicate the list so the translateX(-50%) loop is seamless
  const doubled = [...items, ...items]

  return (
    <div className="marquee-mask overflow-hidden">
      <div className="marquee-track py-1">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="pill !py-1.5 !px-4 text-sm whitespace-nowrap select-none"
            aria-hidden={i >= items.length}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
