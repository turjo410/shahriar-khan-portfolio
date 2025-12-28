"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Github, Rocket, ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-cyber relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Hire Me CTA Block */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-neon opacity-20 blur-3xl rounded-3xl" />
              <Card className="relative overflow-hidden border-primary/30 bg-card/90 backdrop-blur-md box-glow-cyan">
                <CardContent className="pt-12 pb-12 text-center">
                  <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 mb-6"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Rocket className="w-4 h-4 text-neon-cyan" />
                    <span className="text-sm text-neon-cyan font-semibold">Available for Opportunities</span>
                  </motion.div>
                  
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                    Let&apos;s Build Something <span className="text-gradient-animate">Extraordinary</span>
                  </h2>
                  
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Looking for AI/ML opportunities, research collaborations, or consulting projects. 
                    Let&apos;s discuss how I can help bring your AI vision to reality.
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <Link href="mailto:turjo410@gmail.com">
                      <Button size="lg" className="gap-2 hover-glow-cyan border-glow-cyan text-lg px-8">
                        <Mail className="w-5 h-5" />
                        Start a Conversation
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </Link>
                    <Link href="tel:+8801975759760">
                      <Button size="lg" variant="outline" className="gap-2 hover-glow-purple border-glow-purple text-lg px-8">
                        <Phone className="w-5 h-5" />
                        Schedule a Call
                        <Calendar className="w-5 h-5" />
                      </Button>
                    </Link>
                  </div>

                  <div className="mt-8 pt-8 border-t border-primary/20">
                    <p className="text-sm text-muted-foreground mb-4">
                      ⚡ Typically respond within 24 hours • 🌍 Open to remote & relocation • 💼 Full-time, Contract, Freelance
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Contact Information */}
          <div className="text-center mb-12">
            <motion.div
              className="inline-block px-4 py-2 rounded-full bg-card/50 border border-primary/20 mb-4 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-sm text-neon-purple">Connect</span>
            </motion.div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">Get In Touch</h3>
            <p className="text-muted-foreground">
              Prefer a different channel? Reach out through any of these platforms
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Link href="mailto:turjo410@gmail.com">
                <Card className="h-full border-primary/20 bg-card/80 backdrop-blur-sm hover-glow-cyan transition-all cursor-pointer">
                  <CardContent className="pt-6 text-center">
                    <div className="w-14 h-14 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-6 h-6 text-neon-cyan" />
                    </div>
                    <h3 className="font-semibold mb-2 text-neon-cyan">Email</h3>
                    <p className="text-sm text-muted-foreground break-all">
                      turjo410@gmail.com
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link href="tel:+8801975759760">
                <Card className="h-full border-primary/20 bg-card/80 backdrop-blur-sm hover-glow-purple transition-all cursor-pointer">
                  <CardContent className="pt-6 text-center">
                    <div className="w-14 h-14 bg-neon-purple/10 border border-neon-purple/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-6 h-6 text-neon-purple" />
                    </div>
                    <h3 className="font-semibold mb-2 text-neon-purple">Phone</h3>
                    <p className="text-sm text-muted-foreground">
                      +880-1975759760
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link href="https://linkedin.com/in/shahriar-khan-08770b289" target="_blank">
                <Card className="h-full border-primary/20 bg-card/80 backdrop-blur-sm hover-glow-cyan transition-all cursor-pointer">
                  <CardContent className="pt-6 text-center">
                    <div className="w-14 h-14 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Linkedin className="w-6 h-6 text-neon-cyan" />
                    </div>
                    <h3 className="font-semibold mb-2 text-neon-cyan">LinkedIn</h3>
                    <p className="text-sm text-muted-foreground">
                      /shahriar-khan
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="https://github.com/turjo410" target="_blank">
                <Card className="h-full border-primary/20 bg-card/80 backdrop-blur-sm hover-glow-purple transition-all cursor-pointer">
                  <CardContent className="pt-6 text-center">
                    <div className="w-14 h-14 bg-neon-purple/10 border border-neon-purple/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Github className="w-6 h-6 text-neon-purple" />
                    </div>
                    <h3 className="font-semibold mb-2 text-neon-purple">GitHub</h3>
                    <p className="text-sm text-muted-foreground">
                      @turjo410
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-neon-pink" />
              <p className="text-sm">
                📍 East West University, Dhaka, Bangladesh
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
