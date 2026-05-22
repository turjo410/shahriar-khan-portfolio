"use client"

import { useEffect, useState } from "react"

interface TerminalEffectProps {
  commands: string[]
  /** Max characters before the string is truncated with "…" — default 46 */
  maxChars?: number
  className?: string
}

/**
 * TerminalEffect — types one command at a time then deletes it.
 * Long strings are truncated at maxChars to prevent overflow on
 * small screens (mobile 375px).
 */
export function TerminalEffect({
  commands,
  maxChars = 46,
  className = "",
}: TerminalEffectProps) {
  // Pre-truncate all commands so the typewriter never renders a string
  // that overflows the glass container
  const truncated = commands.map((c) =>
    c.length > maxChars ? c.slice(0, maxChars - 1) + "…" : c
  )

  const [currentCommandIndex, setCurrentCommandIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const command = truncated[currentCommandIndex]
    const typingSpeed = isDeleting ? 30 : 60
    const pauseTime = isDeleting ? 900 : 2000

    if (!isDeleting && currentText === command) {
      const t = setTimeout(() => setIsDeleting(true), pauseTime)
      return () => clearTimeout(t)
    }

    if (isDeleting && currentText === "") {
      setIsDeleting(false)
      setCurrentCommandIndex((prev) => (prev + 1) % truncated.length)
      return
    }

    const timeout = setTimeout(() => {
      setCurrentText((prev) =>
        isDeleting ? prev.slice(0, -1) : command.slice(0, prev.length + 1)
      )
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, currentCommandIndex, isDeleting, truncated])

  return (
    <div className={`font-mono text-[12px] sm:text-[13px] overflow-hidden ${className}`}>
      <div className="flex items-center gap-2 min-w-0">
        <span className="text-accent-blue flex-shrink-0">$</span>
        <span
          className="text-[hsl(var(--text-primary))] truncate"
          style={{ minWidth: 0 }}
        >
          {currentText}
        </span>
        <span
          className="inline-block w-[6px] h-[13px] bg-accent-blue flex-shrink-0"
          style={{ animation: "term-blink 1s step-end infinite" }}
        />
      </div>
      <style jsx>{`
        @keyframes term-blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}
