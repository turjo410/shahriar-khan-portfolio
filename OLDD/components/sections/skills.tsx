"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const skills = {
  "Programming Languages": [
    "Python",
    "Java",
    "Kotlin",
    "JavaScript",
    "TypeScript",
    "C++",
    "SQL",
    "LaTeX",
    "MATLAB",
    "Shell",
  ],
  "Deep Learning & ML": [
    "PyTorch",
    "TensorFlow",
    "Keras",
    "Ultralytics YOLOv8",
    "TensorRT",
    "scikit-learn",
    "Transfer Learning",
  ],
  "DevOps & Tools": [
    "Git",
    "GitHub",
    "GitLab",
    "Docker",
    "VS Code",
    "PyCharm",
    "Android Studio",
    "Jupyter",
    "Google Colab",
  ],
  "Creative Tools": [
    "DaVinci Resolve",
    "Premiere Pro",
    "Adobe Illustrator",
    "Photoshop",
    "After Effects",
    "Blender",
  ],
  "Mobile Development": [
    "Android SDK",
    "Kotlin",
    "Jetpack Compose",
    "TensorFlow Lite",
    "Camera2 API",
    "Firebase",
  ],
  "Web Development": [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firebase",
    "REST APIs",
  ],
  "Computer Vision & Robotics": [
    "OpenCV",
    "DroneKit",
    "MAVLink",
    "QGroundControl",
    "Object Detection",
    "Image Processing",
  ],
}

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Technical Skills</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-4 text-primary">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-sm px-3 py-1 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
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
