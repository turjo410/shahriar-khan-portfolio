"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award, Users, BookOpen, Calendar } from "lucide-react"
import Link from "next/link"

interface Publication {
  type: "paper" | "talk" | "competition"
  title: string
  venue: string
  date: string
  description: string
  link?: string
  award?: string
}

const achievements: Publication[] = [
  {
    type: "competition",
    title: "Dean's Merit Scholarship",
    venue: "East West University",
    date: "2021 - Present",
    description: "Awarded merit-based scholarship for outstanding academic performance (CGPA 3.71/4.0) in Computer Science.",
    award: "Merit Scholarship",
  },
  {
    type: "paper",
    title: "Real-Time Object Detection Optimization for Edge Devices",
    venue: "University Research Conference",
    date: "2024",
    description: "Presented research on TensorRT optimization techniques for YOLOv8 deployment on Jetson Nano, achieving 40% FPS improvement.",
    link: "#",
  },
  {
    type: "talk",
    title: "Building Production-Ready AI Systems",
    venue: "EWU Programming Club",
    date: "2023",
    description: "Workshop on best practices for deploying machine learning models in production environments with focus on monitoring and MLOps.",
  },
  {
    type: "competition",
    title: "Vice President - Programming Club",
    venue: "East West University",
    date: "2022 - 2023",
    description: "Led programming club initiatives, organized 10+ workshops on competitive programming, ML, and web development for 100+ students.",
    award: "Leadership Role",
  },
  {
    type: "talk",
    title: "Computer Vision Applications in Bangladesh",
    venue: "Tech Conference Dhaka",
    date: "2023",
    description: "Talk on practical applications of computer vision for Bengali language processing, including ANPR and OCR systems.",
    link: "#",
  },
  {
    type: "paper",
    title: "Ensemble OCR Approach for Bengali Character Recognition",
    venue: "Student Research Symposium",
    date: "2023",
    description: "Research paper on combining multiple OCR engines (EasyOCR, Tesseract, PaddleOCR) for improved Bengali text recognition accuracy.",
  },
]

const getTypeIcon = (type: Publication["type"]) => {
  switch (type) {
    case "paper":
      return BookOpen
    case "talk":
      return Users
    case "competition":
      return Award
  }
}

const getTypeColor = (type: Publication["type"]) => {
  switch (type) {
    case "paper":
      return "neon-cyan"
    case "talk":
      return "neon-purple"
    case "competition":
      return "neon-pink"
  }
}

const getTypeBadgeClass = (type: Publication["type"]) => {
  switch (type) {
    case "paper":
      return "bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30"
    case "talk":
      return "bg-neon-purple/20 text-neon-purple border-neon-purple/30"
    case "competition":
      return "bg-neon-pink/20 text-neon-pink border-neon-pink/30"
  }
}

export function Publications() {
  return (
    <section id="publications" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20 pointer-events-none" />
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              className="inline-block px-4 py-2 rounded-full bg-card/50 border border-primary/20 mb-4 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-sm text-neon-green">Achievements</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Publications & <span className="text-gradient-animate">Recognition</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Research papers, technical talks, and leadership achievements
            </p>
          </div>

          <div className="space-y-6">
            {achievements.map((item, index) => {
              const Icon = getTypeIcon(item.type)
              const typeColor = getTypeColor(item.type)
              const badgeClass = getTypeBadgeClass(item.type)
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <Card className="overflow-hidden border-primary/20 bg-card/80 backdrop-blur-sm hover-glow-cyan transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg bg-${typeColor}/10 border border-${typeColor}/30 flex-shrink-0`}>
                          <Icon className={`w-6 h-6 text-${typeColor}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <CardTitle className="text-lg sm:text-xl">{item.title}</CardTitle>
                            {item.award && (
                              <span className={`text-xs px-3 py-1 rounded-full font-semibold border ${badgeClass}`}>
                                {item.award}
                              </span>
                            )}
                          </div>
                          <CardDescription className="flex flex-wrap items-center gap-2 text-sm">
                            <span className="font-semibold">{item.venue}</span>
                            <span className="text-muted-foreground">•</span>
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <Calendar className="w-3 h-3" />
                              {item.date}
                            </span>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                      {item.link && (
                        <Link href={item.link} target="_blank">
                          <Button variant="outline" size="sm" className="gap-2 border-glow-cyan hover-glow-cyan">
                            <ExternalLink className="w-4 h-4" />
                            View {item.type === "paper" ? "Paper" : "Details"}
                          </Button>
                        </Link>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
