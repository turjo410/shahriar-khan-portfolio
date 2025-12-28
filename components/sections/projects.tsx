"use client"

import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Target, Rocket, Zap, TrendingUp } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import CountUp from "react-countup"

interface Project {
  title: string
  tagline: string
  problem: string
  approach: string[]
  technologies: string[]
  models?: string[]
  metrics: {
    label: string
    value: number
    suffix: string
    icon: "target" | "rocket" | "zap" | "trending"
  }[]
  impact: string
  status: "Deployed" | "In Production" | "Research"
  links: {
    github?: string
    demo?: string
    colab?: string
  }
}

const projects: Project[] = [
  {
    title: "Real-Time Object Detection System using YOLO",
    tagline: "Production-ready detection achieving 97.5% mAP with edge optimization",
    problem: "Need for real-time object detection on resource-constrained edge devices (Jetson Nano) with high accuracy for surveillance applications.",
    approach: [
      "Fine-tuned YOLOv8 on custom 10K+ annotated image dataset with data augmentation",
      "Applied TensorRT optimization for 40% FPS improvement (15→21 FPS) on Jetson Nano",
      "Integrated DeepSORT tracking for persistent object IDs across 1000+ video hours",
    ],
    technologies: ["Python", "PyTorch", "Ultralytics YOLOv8", "TensorRT", "OpenCV", "CUDA"],
    models: ["YOLOv8n", "YOLOv8s", "DeepSORT", "ByteTrack"],
    metrics: [
      { label: "mAP Accuracy", value: 97.5, suffix: "%", icon: "target" },
      { label: "FPS (Edge)", value: 21, suffix: " FPS", icon: "zap" },
      { label: "Tracking Accuracy", value: 85, suffix: "%", icon: "trending" },
    ],
    impact: "Deployed in 3 live surveillance systems processing 5000+ daily detections with 99.2% uptime",
    status: "In Production",
    links: {
      github: "https://github.com/turjo410",
      demo: "#",
    },
  },
  {
    title: "Bengali License Plate Recognition (ANPR)",
    tagline: "End-to-end ANPR pipeline with 92% accuracy on 5K+ Bengali plates",
    problem: "Bengali characters pose unique OCR challenges due to complex script structure. No robust open-source solution existed for Bengali ANPR.",
    approach: [
      "Built ensemble OCR system combining EasyOCR, Tesseract, and PaddleOCR with voting mechanism",
      "Created custom dataset of 3000+ annotated Bengali plates with augmentation pipeline",
      "Developed Flask RESTful API with async processing for real-time vehicle recognition",
    ],
    technologies: ["Python", "TensorFlow", "EasyOCR", "Tesseract", "Flask", "OpenCV", "MongoDB"],
    models: ["EasyOCR", "Tesseract 4.0", "PaddleOCR", "WPOD-NET (Plate Detection)"],
    metrics: [
      { label: "Character Accuracy", value: 92, suffix: "%", icon: "target" },
      { label: "Processing Speed", value: 30, suffix: " vehicles/min", icon: "rocket" },
      { label: "Dataset Size", value: 3000, suffix: "+ plates", icon: "trending" },
    ],
    impact: "Reduced parking lot entry time by 60% with automated vehicle entry logging for 200+ daily vehicles",
    status: "Deployed",
    links: {
      github: "https://github.com/turjo410",
    },
  },
  {
    title: "Autonomous UAV Navigation & Aerial Analysis",
    tagline: "GPS-guided drone control with real-time aerial object detection",
    problem: "Manual drone operation is time-intensive for surveillance. Need autonomous waypoint navigation with real-time aerial analysis.",
    approach: [
      "Implemented MAVLink-based flight control with DroneKit for autonomous missions",
      "Developed real-time aerial detection pipeline optimized for high-altitude (50m+) imagery",
      "Created mission planning UI supporting 20+ waypoint routes with geofencing",
    ],
    technologies: ["Python", "DroneKit", "MAVLink", "OpenCV", "QGroundControl", "DJI SDK", "YOLO"],
    models: ["YOLOv5 (Aerial-tuned)", "Custom CNN for altitude compensation"],
    metrics: [
      { label: "Detection Accuracy", value: 78, suffix: "%", icon: "target" },
      { label: "Flight Missions", value: 20, suffix: "+", icon: "rocket" },
      { label: "Altitude Range", value: 50, suffix: "+ meters", icon: "zap" },
    ],
    impact: "Automated 80% of surveillance tasks with 15-hour total flight time across outdoor terrains",
    status: "Research",
    links: {
      github: "https://github.com/turjo410",
      colab: "#",
    },
  },
  {
    title: "IoT Monitoring Dashboard (Full-Stack)",
    tagline: "Real-time sensor dashboard handling 10K+ readings/hour",
    problem: "Industrial IoT deployment lacked centralized monitoring with role-based access and real-time alerts.",
    approach: [
      "Built React dashboard with WebSocket-based live updates and Chart.js visualizations",
      "Implemented JWT auth with role-based access control (RBAC) for 50+ users",
      "Deployed on AWS EC2 with MongoDB Atlas achieving 99.5% uptime over 6 months",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "WebSocket", "JWT", "AWS EC2"],
    metrics: [
      { label: "Uptime", value: 99.5, suffix: "%", icon: "trending" },
      { label: "Sensor Readings", value: 10000, suffix: "+/hour", icon: "zap" },
      { label: "Active Users", value: 50, suffix: "+", icon: "rocket" },
    ],
    impact: "Reduced system downtime by 40% through predictive alerts and remote device control capabilities",
    status: "In Production",
    links: {
      github: "https://github.com/turjo410",
      demo: "#",
    },
  },
  {
    title: "Android ML App (On-Device Inference)",
    tagline: "60ms inference time with TFLite optimization on mobile",
    problem: "Cloud-based ML inference has latency and privacy concerns. Need on-device solution with <100ms latency.",
    approach: [
      "Optimized TensorFlow models for mobile with post-training quantization (75% size reduction)",
      "Implemented Camera2 API pipeline with 30 FPS processing and real-time preview",
      "Designed modern Jetpack Compose UI with Material3 achieving 4.2/5.0 user rating",
    ],
    technologies: ["Kotlin", "Android SDK", "TensorFlow Lite", "Camera2 API", "Jetpack Compose", "Hilt"],
    models: ["MobileNetV3 (Quantized)", "EfficientNet-Lite"],
    metrics: [
      { label: "Inference Time", value: 60, suffix: "ms", icon: "zap" },
      { label: "Model Size", value: 3, suffix: "MB", icon: "rocket" },
      { label: "User Rating", value: 4.2, suffix: "/5.0", icon: "trending" },
    ],
    impact: "Enabled offline ML inference for 500+ test users with 95% positive feedback on speed and accuracy",
    status: "Deployed",
    links: {
      github: "https://github.com/turjo410",
    },
  },
]

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "target":
      return Target
    case "rocket":
      return Rocket
    case "zap":
      return Zap
    case "trending":
      return TrendingUp
    default:
      return Target
  }
}

function MetricCard({ metric, inView }: { metric: Project["metrics"][0]; inView: boolean }) {
  const Icon = getIcon(metric.icon)
  
  return (
    <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-4 hover-glow-cyan">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-4 h-4 text-neon-cyan" />
        <span className="text-xs text-muted-foreground uppercase tracking-wider">{metric.label}</span>
      </div>
      <div className="text-2xl font-bold text-neon-cyan font-mono">
        {inView ? (
          <CountUp
            start={0}
            end={metric.value}
            duration={2.5}
            decimals={metric.value % 1 !== 0 ? 1 : 0}
            suffix={metric.suffix}
            useEasing
            enableScrollSpy
            scrollSpyOnce
          />
        ) : (
          "0" + metric.suffix
        )}
      </div>
    </div>
  )
}

export function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20 bg-gradient-cyber relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      
      <div className="container px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              className="inline-block px-4 py-2 rounded-full bg-card/50 border border-primary/20 mb-4 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-sm text-neon-purple">Featured Work</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              AI/ML <span className="text-gradient-animate">Case Studies</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Production-ready deep learning systems with measurable business impact
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Card className="overflow-hidden border-primary/20 bg-card/80 backdrop-blur-sm hover-glow-cyan transition-all duration-300">
                  <CardHeader className="border-b border-primary/10">
                    <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-xl sm:text-2xl">{project.title}</CardTitle>
                          <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                            project.status === "In Production" 
                              ? "bg-neon-green/20 text-neon-green border border-neon-green/30" 
                              : project.status === "Deployed"
                              ? "bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30"
                              : "bg-neon-purple/20 text-neon-purple border border-neon-purple/30"
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        <CardDescription className="text-base">{project.tagline}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-6">
                    <div className="grid lg:grid-cols-3 gap-6">
                      {/* Left column - Problem & Approach */}
                      <div className="lg:col-span-2 space-y-6">
                        {/* Problem */}
                        <div>
                          <h4 className="text-sm font-semibold text-neon-cyan uppercase tracking-wider mb-2 flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-neon-cyan/20 flex items-center justify-center text-xs">1</span>
                            Problem
                          </h4>
                          <p className="text-sm text-muted-foreground">{project.problem}</p>
                        </div>

                        {/* Approach */}
                        <div>
                          <h4 className="text-sm font-semibold text-neon-purple uppercase tracking-wider mb-2 flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-neon-purple/20 flex items-center justify-center text-xs">2</span>
                            Approach
                          </h4>
                          <ul className="space-y-2">
                            {project.approach.map((step, idx) => (
                              <li key={idx} className="flex gap-2 text-sm">
                                <span className="text-neon-purple mt-1">▸</span>
                                <span className="text-muted-foreground">{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech Stack */}
                        <div>
                          <h4 className="text-sm font-semibold text-neon-pink uppercase tracking-wider mb-3">Tech Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="text-xs px-3 py-1 bg-card border border-primary/20 rounded-full hover:border-neon-cyan transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          {project.models && (
                            <>
                              <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 mt-3">Models</h5>
                              <div className="flex flex-wrap gap-2">
                                {project.models.map((model, idx) => (
                                  <span
                                    key={idx}
                                    className="text-xs px-3 py-1 bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 rounded-full"
                                  >
                                    {model}
                                  </span>
                                ))}
                              </div>
                            </>
                          )}
                        </div>

                        {/* Impact */}
                        <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
                          <h4 className="text-sm font-semibold text-neon-green uppercase tracking-wider mb-2 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" />
                            Impact
                          </h4>
                          <p className="text-sm text-foreground">{project.impact}</p>
                        </div>
                      </div>

                      {/* Right column - Metrics & Links */}
                      <div className="space-y-4">
                        {/* Metrics */}
                        <div>
                          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Key Metrics</h4>
                          <div className="space-y-3">
                            {project.metrics.map((metric, idx) => (
                              <MetricCard key={idx} metric={metric} inView={inView} />
                            ))}
                          </div>
                        </div>

                        {/* Links */}
                        <div className="pt-4 border-t border-primary/10">
                          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Resources</h4>
                          <div className="flex flex-col gap-2">
                            {project.links.github && (
                              <Link href={project.links.github} target="_blank" className="w-full">
                                <Button variant="outline" size="sm" className="w-full gap-2 border-glow-cyan hover-glow-cyan">
                                  <Github className="w-4 h-4" />
                                  View Code
                                </Button>
                              </Link>
                            )}
                            {project.links.demo && (
                              <Link href={project.links.demo} target="_blank" className="w-full">
                                <Button variant="outline" size="sm" className="w-full gap-2 border-glow-purple hover-glow-purple">
                                  <ExternalLink className="w-4 h-4" />
                                  Live Demo
                                </Button>
                              </Link>
                            )}
                            {project.links.colab && (
                              <Link href={project.links.colab} target="_blank" className="w-full">
                                <Button variant="outline" size="sm" className="w-full gap-2 border-glow-pink hover-glow-pink">
                                  <ExternalLink className="w-4 h-4" />
                                  Colab Notebook
                                </Button>
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
