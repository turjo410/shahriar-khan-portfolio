"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Phone, Sparkles, GraduationCap, FileText, Users, BookOpen, Award } from "lucide-react"
import Link from "next/link"
import { TerminalEffect } from "@/components/terminal-effect"
import { ParticleBackground } from "@/components/particle-background"

// Academic quick links for hero section
const academicQuickLinks = [
  { href: "/credentials", icon: GraduationCap, label: "Credentials", color: "cyan" },
  { href: "/statement-of-purpose", icon: FileText, label: "SOP", color: "purple" },
  { href: "/recommendations", icon: Users, label: "LORs", color: "pink" },
  { href: "/research", icon: BookOpen, label: "Research", color: "cyan" },
  { href: "/certifications", icon: Award, label: "Certs", color: "purple" },
]

export function Hero() {
  const commands = [
    "python train_yolo.py --accuracy 97.5%",
    "tensorboard --logdir=./runs",
    "git commit -m 'Deployed real-time ANPR system'",
    "python deploy_model.py --platform=cloud",
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground className="opacity-30" />
      
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40 pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Main content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-primary/20 mb-6 backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Sparkles className="w-4 h-4 text-neon-cyan" />
                  <span className="text-sm text-neon-cyan">AI/ML Engineer</span>
                </motion.div>

                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Hi, I&apos;m{" "}
                  <span className="text-gradient-animate">
                    Shahriar Khan
                  </span>
                </motion.h1>

                <motion.p
                  className="text-xl sm:text-2xl text-muted-foreground mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Building <span className="text-neon-cyan font-semibold">production-ready</span> AI systems
                  with <span className="text-neon-purple font-semibold">real-world impact</span>
                </motion.p>

                <motion.div
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Link href="#contact">
                    <Button size="lg" className="gap-2 hover-glow-cyan border-glow-cyan">
                      <Mail className="w-4 h-4" />
                      Let&apos;s Work Together
                    </Button>
                  </Link>
                  <Link href="/resume/Shahriar_Khan_Resume.pdf" target="_blank">
                    <Button size="lg" variant="outline" className="gap-2 hover-glow-purple border-glow-purple">
                      <ArrowDown className="w-4 h-4" />
                      Download CV
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  className="flex items-center justify-center lg:justify-start gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Link href="https://github.com/turjo410" target="_blank">
                    <Button variant="ghost" size="icon" className="rounded-full hover-glow-cyan">
                      <Github className="w-5 h-5" />
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com/in/shahriar-khan-08770b289" target="_blank">
                    <Button variant="ghost" size="icon" className="rounded-full hover-glow-cyan">
                      <Linkedin className="w-5 h-5" />
                    </Button>
                  </Link>
                  <Link href="mailto:turjo410@gmail.com">
                    <Button variant="ghost" size="icon" className="rounded-full hover-glow-purple">
                      <Mail className="w-5 h-5" />
                    </Button>
                  </Link>
                  <Link href="tel:+8801975759760">
                    <Button variant="ghost" size="icon" className="rounded-full hover-glow-purple">
                      <Phone className="w-5 h-5" />
                    </Button>
                  </Link>
                </motion.div>

                {/* Academic Quick Links */}
                <motion.div
                  className="mt-8 pt-6 border-t border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <p className="text-sm text-muted-foreground mb-4 text-center lg:text-left">
                    📚 Academic Portfolio
                  </p>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                    {academicQuickLinks.map((link, index) => {
                      const Icon = link.icon
                      return (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                        >
                          <Link href={link.href}>
                            <Button
                              variant="outline"
                              size="sm"
                              className={`group gap-2 border-glow-${link.color} hover-glow-${link.color} bg-neon-${link.color}/5 transition-all duration-300`}
                            >
                              <Icon className={`w-4 h-4 text-neon-${link.color} group-hover:scale-110 transition-transform`} />
                              <span className="text-xs font-medium">{link.label}</span>
                            </Button>
                          </Link>
                        </motion.div>
                      )
                    })}
                  </div>
                  <p className="text-xs text-muted-foreground/70 mt-3 text-center lg:text-left italic">
                    * Some documents will be provided upon request
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Right side - Terminal Effect */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-neon opacity-20 blur-3xl rounded-3xl" />
                <div className="relative bg-card/80 backdrop-blur-md border border-primary/30 rounded-2xl p-6 shadow-2xl box-glow-cyan">
                  <TerminalEffect commands={commands} />
                  
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Model Accuracy</span>
                        <span className="text-neon-green font-mono font-semibold">97.5%</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Inference Speed</span>
                        <span className="text-neon-cyan font-mono font-semibold">45 FPS</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Projects Deployed</span>
                        <span className="text-neon-pink font-mono font-semibold">5+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7, repeat: Infinity, repeatType: "reverse" }}
      >
        <ArrowDown className="w-6 h-6 text-neon-cyan" />
      </motion.div>
    </section>
  )
}
