"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Briefcase, GraduationCap, Code2, Brain, Rocket } from "lucide-react"

const stats = [
  { label: "Projects Deployed", value: "5+", icon: Rocket, color: "cyan" },
  { label: "CGPA", value: "3.92", icon: GraduationCap, color: "purple" },
  { label: "Technologies", value: "20+", icon: Code2, color: "pink" },
  { label: "AI Models", value: "10+", icon: Brain, color: "blue" },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-cyber relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.div
              className="inline-block px-4 py-2 rounded-full bg-card/50 border border-primary/20 mb-4 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-sm text-neon-cyan">Introduction</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient-animate">Me</span>
            </h2>
          </div>

          {/* Introduction Text with Enhanced Styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="border-primary/20 bg-card/80 backdrop-blur-sm overflow-hidden">
              <CardContent className="pt-8 pb-8">
                <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">
                  <span className="text-neon-cyan font-semibold">Computer Science student</span> specializing in{" "}
                  <span className="text-neon-purple font-semibold">production-ready deep learning systems</span> with proven deployment
                  experience. Built real-time object detection systems achieving{" "}
                  <span className="text-neon-pink font-semibold">97.5% mAP</span> on edge devices, Bengali OCR
                  pipelines processing <span className="text-neon-cyan font-semibold">30+ vehicles/minute</span>, and autonomous UAV control systems. 
                  Combines strong theoretical foundation with hands-on expertise in{" "}
                  <span className="text-neon-purple font-semibold">PyTorch, TensorFlow, and full-stack development</span>.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`text-center border-primary/20 bg-card/80 backdrop-blur-sm hover-glow-${stat.color} transition-all`}>
                    <CardContent className="pt-6 pb-6">
                      <Icon className={`w-8 h-8 mx-auto mb-3 text-neon-${stat.color}`} />
                      <div className={`text-3xl font-bold text-neon-${stat.color} mb-1`}>{stat.value}</div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Main Cards with Enhanced Design */}
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-primary/20 bg-card/80 backdrop-blur-sm hover-glow-cyan transition-all group">
                <CardContent className="pt-8 pb-8 text-center">
                  <motion.div 
                    className="w-16 h-16 mx-auto mb-4 bg-neon-cyan/10 border-2 border-neon-cyan/30 rounded-2xl flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <GraduationCap className="w-8 h-8 text-neon-cyan" />
                  </motion.div>
                  <h3 className="font-bold text-xl mb-3 text-neon-cyan">Education</h3>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold">
                      B.Sc. in Computer Science & Engineering
                    </p>
                    <p className="text-sm text-muted-foreground">East West University</p>
                    <div className="pt-3 mt-3 border-t border-primary/10">
                      <div className="inline-block px-4 py-2 rounded-full bg-neon-cyan/10 border border-neon-cyan/30">
                        <span className="text-lg font-bold text-neon-cyan">3.92</span>
                        <span className="text-xs text-muted-foreground ml-1">/4.00</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-primary/20 bg-card/80 backdrop-blur-sm hover-glow-purple transition-all group">
                <CardContent className="pt-8 pb-8 text-center">
                  <motion.div 
                    className="w-16 h-16 mx-auto mb-4 bg-neon-purple/10 border-2 border-neon-purple/30 rounded-2xl flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Briefcase className="w-8 h-8 text-neon-purple" />
                  </motion.div>
                  <h3 className="font-bold text-xl mb-3 text-neon-purple">Experience</h3>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold">Teaching Assistant</p>
                    <p className="text-sm text-muted-foreground">East West University</p>
                    <div className="pt-3 mt-3 border-t border-primary/10">
                      <div className="inline-block px-4 py-2 rounded-full bg-neon-purple/10 border border-neon-purple/30">
                        <span className="text-sm font-semibold text-neon-purple">Nov 2024 - Present</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-primary/20 bg-card/80 backdrop-blur-sm hover-glow-pink transition-all group">
                <CardContent className="pt-8 pb-8 text-center">
                  <motion.div 
                    className="w-16 h-16 mx-auto mb-4 bg-neon-pink/10 border-2 border-neon-pink/30 rounded-2xl flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Award className="w-8 h-8 text-neon-pink" />
                  </motion.div>
                  <h3 className="font-bold text-xl mb-3 text-neon-pink">Achievements</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-neon-pink"></div>
                      <p className="text-sm">Full Merit Scholarship (100%)</p>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-neon-pink"></div>
                      <p className="text-sm">Dean&apos;s Merit Scholarship</p>
                    </div>
                    <div className="pt-3 mt-3 border-t border-primary/10">
                      <div className="inline-block px-4 py-2 rounded-full bg-neon-pink/10 border border-neon-pink/30">
                        <span className="text-sm font-semibold text-neon-pink">Multiple Awards</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
