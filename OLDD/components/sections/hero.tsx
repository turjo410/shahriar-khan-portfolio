"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Shahriar Khan
              </span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Computer Science Student
            </motion.p>

            <motion.p
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Specializing in production-ready deep learning systems with proven deployment experience.
              Building real-time AI solutions that make an impact.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link href="#contact">
                <Button size="lg" className="gap-2">
                  <Mail className="w-4 h-4" />
                  Get In Touch
                </Button>
              </Link>
              <Link href="/resume/Shahriar_Khan_Resume.pdf" target="_blank">
                <Button size="lg" variant="outline" className="gap-2">
                  <ArrowDown className="w-4 h-4" />
                  Download CV
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link href="https://github.com/turjo410" target="_blank">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Github className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/shahriar-khan-08770b289" target="_blank">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="mailto:turjo410@gmail.com">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Mail className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="tel:+8801975759760">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Phone className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7, repeat: Infinity, repeatType: "reverse" }}
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
