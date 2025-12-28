"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Real-Time Object Detection System using YOLO",
    description: "Developed real-time object detection system achieving 92% mAP on custom dataset using YOLOv8 architecture",
    technologies: ["Python", "PyTorch", "Ultralytics YOLOv8", "OpenCV", "TensorRT"],
    highlights: [
      "Optimized model for edge deployment on Jetson Nano, achieving 40% FPS improvement (15→21 FPS) via TensorRT",
      "Integrated multi-object tracking algorithms (DeepSORT, ByteTrack) with 85% tracking accuracy",
      "Processed 1000+ hours of video data for training and validation across diverse lighting conditions",
    ],
    status: "Ongoing",
    github: "https://github.com/turjo410",
  },
  {
    title: "Bengali License Plate Recognition System (ANPR)",
    description: "Designed end-to-end ANPR pipeline achieving 92% character recognition accuracy on 5000+ Bengali plates",
    technologies: ["Python", "TensorFlow", "EasyOCR", "Tesseract", "OpenCV", "Flask"],
    highlights: [
      "Integrated ensemble of OCR engines (EasyOCR, Tesseract, PaddleOCR) for robust text extraction",
      "Developed RESTful API using Flask processing 30+ vehicles per minute in real-world deployment",
      "Created custom dataset of 3000+ annotated Bengali license plates for model training",
    ],
    status: "Completed",
    github: "https://github.com/turjo410",
  },
  {
    title: "Autonomous UAV Control and Aerial Image Analysis",
    description: "Developed autonomous drone control system using MAVLink protocol for GPS-guided navigation",
    technologies: ["Python", "DroneKit", "MAVLink", "OpenCV", "QGroundControl", "DJI SDK"],
    highlights: [
      "Implemented real-time aerial image analysis pipeline detecting objects from 50+ meter altitude",
      "Created mission planning interface supporting waypoint navigation for 20+ flight missions",
      "Integrated computer vision algorithms for object detection achieving 78% accuracy on aerial imagery",
    ],
    status: "Ongoing",
    github: "https://github.com/turjo410",
  },
  {
    title: "Full-Stack IoT Monitoring Dashboard",
    description: "Built complete IoT dashboard with real-time data logging handling 10,000+ sensor readings per hour",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "JWT"],
    highlights: [
      "Developed responsive React dashboard with real-time WebSocket updates and data visualization charts",
      "Implemented secure JWT authentication system and role-based access control for 50+ users",
      "Deployed on cloud platform with 99.5% uptime and integrated remote device control capabilities",
    ],
    status: "Completed",
    github: "https://github.com/turjo410",
  },
  {
    title: "Android Machine Learning Application",
    description: "Created Android app with on-device ML achieving 60ms inference time on mobile processors",
    technologies: ["Kotlin", "Android SDK", "TensorFlow Lite", "Camera2 API", "Jetpack Compose"],
    highlights: [
      "Implemented real-time camera processing pipeline using Camera2 API with 30 FPS processing",
      "Optimized TensorFlow Lite models reducing size by 75% (12MB→3MB) for mobile deployment",
      "Designed modern UI using Jetpack Compose with 4.2/5.0 user rating on internal testing (20+ users)",
    ],
    status: "Completed",
    github: "https://github.com/turjo410",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Technical Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-lg">{project.title}</CardTitle>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            project.status === "Ongoing" 
                              ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" 
                              : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        <CardDescription>{project.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span className="text-primary mt-1">◦</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex gap-2 pt-2">
                        <Link href={project.github} target="_blank">
                          <Button variant="outline" size="sm" className="gap-2">
                            <Github className="w-4 h-4" />
                            View Code
                          </Button>
                        </Link>
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
