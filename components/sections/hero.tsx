"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Phone, Sparkles, GraduationCap, FileText, Users, BookOpen, Award, MapPin, Calendar, Zap } from "lucide-react"
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

// Key highlights for quick scanning
const keyHighlights = [
  { label: "CGPA", value: "3.92", icon: GraduationCap, color: "cyan" },
  { label: "TOEFL", value: "93", icon: BookOpen, color: "purple" },
  { label: "Projects", value: "5+", icon: Zap, color: "pink" },
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
      {/* Enhanced Background Effects */}
      <ParticleBackground className="opacity-40" />
      
      {/* Floating Orbs */}
      <div className="orb-cyan top-20 -left-20 animate-float" />
      <div className="orb-purple bottom-20 -right-20 animate-float-delayed" />
      <div className="orb-pink top-1/2 left-1/3 animate-float-slow" />
      
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50 pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Main content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Status Badge */}
                <motion.div
                  className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-card/60 border border-primary/30 mb-6 backdrop-blur-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-green"></span>
                  </span>
                  <span className="text-sm font-medium">Open to Opportunities</span>
                  <span className="text-muted-foreground">|</span>
                  <Sparkles className="w-4 h-4 text-neon-cyan" />
                  <span className="text-sm text-neon-cyan font-semibold">AI/ML Engineer</span>
                </motion.div>

                {/* Name with enhanced styling */}
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Hi, I&apos;m{" "}
                  <span className="text-gradient-animate fancy-underline">
                    Shahriar Khan
                  </span>
                </motion.h1>

                {/* Location */}
                <motion.div
                  className="flex items-center justify-center lg:justify-start gap-2 mb-6 text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  <MapPin className="w-4 h-4 text-neon-pink" />
                  <span className="text-sm">Dhaka, Bangladesh</span>
                  <span className="text-muted-foreground/50">•</span>
                  <Calendar className="w-4 h-4 text-neon-cyan" />
                  <span className="text-sm">East West University</span>
                </motion.div>

                {/* Tagline */}
                <motion.p
                  className="text-xl sm:text-2xl text-muted-foreground mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Building <span className="text-neon-cyan font-semibold highlight-cyan">production-ready</span> AI systems
                  with <span className="text-neon-purple font-semibold highlight-purple">real-world impact</span>
                </motion.p>

                {/* Key Highlights - Quick Stats */}
                <motion.div
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                >
                  {keyHighlights.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <motion.div
                        key={item.label}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-card/60 border border-neon-${item.color}/30 backdrop-blur-sm`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <Icon className={`w-4 h-4 text-neon-${item.color}`} />
                        <span className={`text-lg font-bold text-neon-${item.color}`}>{item.value}</span>
                        <span className="text-xs text-muted-foreground">{item.label}</span>
                      </motion.div>
                    )
                  })}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Link href="#contact">
                    <Button size="lg" className="gap-2 hover-glow-cyan border-glow-cyan group">
                      <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      Let&apos;s Work Together
                    </Button>
                  </Link>
                  <Link href="/resume/Shahriar_Khan_Resume.pdf" target="_blank">
                    <Button size="lg" variant="outline" className="gap-2 hover-glow-purple border-glow-purple group">
                      <ArrowDown className="w-4 h-4 group-hover:animate-bounce" />
                      Download CV
                    </Button>
                  </Link>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  className="flex items-center justify-center lg:justify-start gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.55 }}
                >
                  <span className="text-xs text-muted-foreground mr-2">Connect:</span>
                  <Link href="https://github.com/turjo410" target="_blank">
                    <Button variant="ghost" size="icon" className="rounded-full hover-glow-cyan h-10 w-10">
                      <Github className="w-5 h-5" />
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com/in/shahriar-khan-08770b289" target="_blank">
                    <Button variant="ghost" size="icon" className="rounded-full hover-glow-cyan h-10 w-10">
                      <Linkedin className="w-5 h-5" />
                    </Button>
                  </Link>
                  <Link href="mailto:turjo410@gmail.com">
                    <Button variant="ghost" size="icon" className="rounded-full hover-glow-purple h-10 w-10">
                      <Mail className="w-5 h-5" />
                    </Button>
                  </Link>
                  <Link href="tel:+8801975759760">
                    <Button variant="ghost" size="icon" className="rounded-full hover-glow-pink h-10 w-10">
                      <Phone className="w-5 h-5" />
                    </Button>
                  </Link>
                </motion.div>

                {/* Academic Quick Links */}
                <motion.div
                  className="mt-8 pt-6 border-t border-primary/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                    <GraduationCap className="w-4 h-4 text-neon-pink" />
                    <p className="text-sm font-medium text-muted-foreground">
                      Academic Portfolio
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                    {academicQuickLinks.map((link, index) => {
                      const Icon = link.icon
                      return (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.7 + index * 0.08 }}
                        >
                          <Link href={link.href}>
                            <Button
                              variant="outline"
                              size="sm"
                              className={`group gap-2 hover-glow-${link.color} bg-card/50 border-primary/20 hover:border-neon-${link.color}/50 transition-all duration-300`}
                            >
                              <Icon className={`w-3.5 h-3.5 text-neon-${link.color} group-hover:scale-110 transition-transform`} />
                              <span className="text-xs">{link.label}</span>
                            </Button>
                          </Link>
                        </motion.div>
                      )
                    })}
                  </div>
                  <p className="text-xs text-muted-foreground/60 mt-3 text-center lg:text-left italic">
                    * Some documents will be provided upon request
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Right side - Terminal Effect with Enhanced Design */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative">
                {/* Glow effect behind card */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 via-neon-purple/20 to-neon-pink/20 blur-3xl rounded-3xl animate-pulse" />
                
                {/* Main terminal card */}
                <div className="relative glass-strong rounded-2xl p-6 shadow-2xl border border-primary/20 card-shine">
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-primary/10">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-xs text-muted-foreground ml-2 font-mono">shahriar@ml-workstation</span>
                  </div>
                  
                  <TerminalEffect commands={commands} />
                  
                  {/* Stats section */}
                  <div className="mt-6 pt-6 border-t border-primary/10">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 rounded-xl bg-neon-green/5 border border-neon-green/20">
                        <div className="text-2xl font-bold text-neon-green font-mono">97.5%</div>
                        <div className="text-xs text-muted-foreground mt-1">Model Accuracy</div>
                      </div>
                      <div className="text-center p-3 rounded-xl bg-neon-cyan/5 border border-neon-cyan/20">
                        <div className="text-2xl font-bold text-neon-cyan font-mono">45</div>
                        <div className="text-xs text-muted-foreground mt-1">FPS Speed</div>
                      </div>
                      <div className="text-center p-3 rounded-xl bg-neon-pink/5 border border-neon-pink/20">
                        <div className="text-2xl font-bold text-neon-pink font-mono">5+</div>
                        <div className="text-xs text-muted-foreground mt-1">Deployed</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tech stack badges */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["PyTorch", "TensorFlow", "YOLO", "FastAPI", "Next.js"].map((tech, i) => (
                      <span 
                        key={tech} 
                        className={`px-2 py-1 text-xs rounded-md bg-neon-${['cyan', 'purple', 'pink', 'cyan', 'purple'][i]}/10 text-neon-${['cyan', 'purple', 'pink', 'cyan', 'purple'][i]} border border-neon-${['cyan', 'purple', 'pink', 'cyan', 'purple'][i]}/20`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-neon-cyan" />
        </motion.div>
      </motion.div>
    </section>
  )
}
