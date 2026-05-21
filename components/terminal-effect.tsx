"use client"

import { useEffect, useState } from "react"

interface TerminalEffectProps {
  commands: string[]
  className?: string
}

export function TerminalEffect({ commands, className = "" }: TerminalEffectProps) {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const command = commands[currentCommandIndex]
    const typingSpeed = isDeleting ? 35 : 70
    const pauseTime = isDeleting ? 1200 : 2200

    if (!isDeleting && currentText === command) {
      const t = setTimeout(() => setIsDeleting(true), pauseTime)
      return () => clearTimeout(t)
    }

    if (isDeleting && currentText === "") {
      setIsDeleting(false)
      setCurrentCommandIndex((prev) => (prev + 1) % commands.length)
      return
    }

    const timeout = setTimeout(() => {
      setCurrentText((prev) =>
        isDeleting ? prev.slice(0, -1) : command.slice(0, prev.length + 1)
      )
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, currentCommandIndex, isDeleting, commands])

  return (
    <div className={`font-mono text-[13px] sm:text-sm ${className}`}>
      <div className="flex items-center gap-2">
        <span className="text-accent-blue">$</span>
        <span className="text-[hsl(var(--text-primary))]">{currentText}</span>
        <span
          className="inline-block w-[7px] h-[14px] bg-accent-blue ml-0.5"
          style={{ animation: "blink 1s step-end infinite" }}
        />
      </div>
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}
