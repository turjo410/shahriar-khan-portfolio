"use client"

import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, Database, Wrench, Smartphone, Globe, Camera } from "lucide-react"
import { useRef } from "react"

interface SkillCategory {
  name: string
  icon: typeof Brain
  color: "cyan" | "purple" | "pink" | "blue" | "green"
  skills: { name: string; level: number }[]
}

const skillCategories: SkillCategory[] = [
  {
    name: "AI/ML & Deep Learning",
    icon: Brain,
    color: "cyan",
    skills: [
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow", level: 85 },
      { name: "YOLOv8/Computer Vision", level: 95 },
      { name: "TensorRT Optimization", level: 80 },
      { name: "scikit-learn", level: 85 },
      { name: "Transfer Learning", level: 88 },
    ],
  },
  {
    name: "Programming Languages",
    icon: Code,
    color: "purple",
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript/TypeScript", level: 85 },
      { name: "Kotlin", level: 80 },
      { name: "Java", level: 75 },
      { name: "C++", level: 70 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    name: "Web Development",
    icon: Globe,
    color: "pink",
    skills: [
      { name: "React.js/Next.js", level: 88 },
      { name: "Node.js/Express", level: 82 },
      { name: "RESTful APIs", level: 85 },
      { name: "MongoDB", level: 78 },
      { name: "Firebase", level: 80 },
    ],
  },
  {
    name: "Mobile Development",
    icon: Smartphone,
    color: "blue",
    skills: [
      { name: "Android SDK", level: 85 },
      { name: "Jetpack Compose", level: 80 },
      { name: "TensorFlow Lite", level: 82 },
      { name: "Camera2 API", level: 78 },
    ],
  },
  {
    name: "Computer Vision & Robotics",
    icon: Camera,
    color: "green",
    skills: [
      { name: "OpenCV", level: 92 },
      { name: "Object Detection", level: 95 },
      { name: "Image Processing", level: 88 },
      { name: "DroneKit/MAVLink", level: 75 },
    ],
  },
  {
    name: "DevOps & Tools",
    icon: Wrench,
    color: "cyan",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "Jupyter/Colab", level: 92 },
      { name: "VS Code", level: 95 },
    ],
  },
]

const getColorClass = (color: string, type: "text" | "bg" | "border") => {
  const colorMap = {
    cyan: type === "text" ? "text-neon-cyan" : type === "bg" ? "bg-neon-cyan" : "border-neon-cyan",
    purple: type === "text" ? "text-neon-purple" : type === "bg" ? "bg-neon-purple" : "border-neon-purple",
    pink: type === "text" ? "text-neon-pink" : type === "bg" ? "bg-neon-pink" : "border-neon-pink",
    blue: type === "text" ? "text-neon-blue" : type === "bg" ? "bg-neon-blue" : "border-neon-blue",
    green: type === "text" ? "text-neon-green" : type === "bg" ? "bg-neon-green" : "border-neon-green",
  }
  return colorMap[color as keyof typeof colorMap]
}

function SkillBar({ skill, inView, color }: { skill: { name: string; level: number }; inView: boolean; color: string }) {
  const colorClass = getColorClass(color, "bg")
  
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-sm font-mono text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-3 bg-gray-800 border border-gray-700 rounded-full overflow-hidden shadow-inner">
        <motion.div
          className={`h-full ${colorClass} rounded-full relative`}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          style={{
            boxShadow: inView ? `0 0 15px hsl(var(--neon-${color})), 0 0 5px hsl(var(--neon-${color})) inset` : "none",
            opacity: 0.95,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </motion.div>
      </div>
    </div>
  )
}

export function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  return (
    <section id="skills" className="py-20 bg-gradient-cyber relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      
      <div className="container px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              className="inline-block px-4 py-2 rounded-full bg-card/50 border border-primary/20 mb-4 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-sm text-neon-blue">Tech Stack</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="text-gradient-animate">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proficiency levels across AI/ML, development, and deployment technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              const textColor = getColorClass(category.color, "text")
              const borderColor = getColorClass(category.color, "border")
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <Card className={`overflow-hidden border-primary/20 bg-card/80 backdrop-blur-sm hover-glow-${category.color} transition-all duration-300`}>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`p-2 rounded-lg bg-${category.color}/10 border ${borderColor}/30`}>
                          <Icon className={`w-5 h-5 ${textColor}`} />
                        </div>
                        <h3 className={`font-semibold text-lg ${textColor}`}>{category.name}</h3>
                      </div>
                      <div>
                        {category.skills.map((skill, idx) => (
                          <SkillBar key={idx} skill={skill} inView={inView} color={category.color} />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Additional Technologies */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-muted-foreground">Also Experienced With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["MATLAB", "R", "LaTeX", "Blender", "DaVinci Resolve", "Photoshop", "After Effects", "QGroundControl"].map((tech, idx) => (
                <span
                  key={idx}
                  className="text-sm px-4 py-2 bg-card/50 border border-primary/20 rounded-full hover:border-neon-cyan hover:text-neon-cyan transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
