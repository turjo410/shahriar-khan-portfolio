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
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 1000 : 2000

    if (!isDeleting && currentText === command) {
      setTimeout(() => setIsDeleting(true), pauseTime)
      return
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
    <div className={`font-mono text-sm sm:text-base ${className}`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-neon-green">●</span>
        <span className="text-neon-cyan">●</span>
        <span className="text-neon-pink">●</span>
        <span className="text-muted-foreground ml-2">~/portfolio</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-neon-cyan">$</span>
        <span className="text-foreground">{currentText}</span>
        <span className="inline-block w-2 h-5 bg-neon-cyan animate-pulse ml-1"></span>
      </div>
    </div>
  )
}
