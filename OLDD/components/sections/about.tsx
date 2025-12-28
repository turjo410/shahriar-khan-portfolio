"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Briefcase, GraduationCap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">About Me</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-muted-foreground text-center mb-8">
              Computer Science student specializing in production-ready deep learning systems with proven deployment
              experience. Built real-time object detection systems achieving 92% accuracy on edge devices, Bengali OCR
              pipelines processing 30+ vehicles/minute, and autonomous UAV control systems. Combines strong theoretical
              foundation (3.92 CGPA, Full Merit Scholarship) with hands-on expertise in PyTorch, TensorFlow, and
              full-stack development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Education</h3>
                  <p className="text-sm text-muted-foreground">
                    B.Sc. in Computer Science & Engineering
                  </p>
                  <p className="text-sm text-muted-foreground">East West University</p>
                  <p className="text-sm font-medium mt-2">CGPA: 3.92/4.00</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Experience</h3>
                  <p className="text-sm text-muted-foreground">Teaching Assistant</p>
                  <p className="text-sm text-muted-foreground">East West University</p>
                  <p className="text-sm text-muted-foreground mt-2">Nov 2024 - Present</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Achievements</h3>
                  <p className="text-sm text-muted-foreground">Full Merit Scholarship (100%)</p>
                  <p className="text-sm text-muted-foreground">Dean's Merit Scholarship</p>
                  <p className="text-sm text-muted-foreground mt-2">Multiple Awards</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
