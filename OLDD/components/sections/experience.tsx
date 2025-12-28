"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Undergraduate Teaching Assistant",
    company: "East West University",
    department: "Department of Computer Science and Engineering",
    location: "Dhaka, Bangladesh",
    period: "November 2024 - Present",
    responsibilities: [
      "Assisted Associate Professor in course delivery and academic support for 80+ undergraduate students",
      "Streamlined course material management system, reducing administrative workload by 30%",
      "Graded assignments and provided technical mentorship on programming concepts and algorithms",
      "Managed digital resources, documentation, and communication between faculty and students",
    ],
  },
  {
    title: "General Member",
    company: "East West University Programming Club",
    location: "Dhaka, Bangladesh",
    period: "December 2023 - Present",
    responsibilities: [
      "Volunteered at 5+ programming contests including inter-university competitive coding events",
      "Participated in multiple ICPC-style programming competitions representing the university",
      "Co-organized coding workshops and technical sessions reaching 100+ students",
      "Collaborated with team members to foster competitive programming culture on campus",
    ],
  },
  {
    title: "Vice President",
    company: "Government Science College Photography Club",
    location: "Dhaka, Bangladesh",
    period: "May 2018 - November 2020",
    responsibilities: [
      "Led and coordinated National Photography Festival with 200+ participants and 15+ events",
      "Managed 20-member executive committee and organized volunteer activities for college festivals",
      "Secured 1st place in Cloud's Den Photography Competition among 15 teams",
      "Participated in AIUB Science Festival Poster Competition and showcased work at Drik's Gallery Exhibition",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Work Experience</h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                        <p className="text-primary font-medium">{exp.company}</p>
                        {exp.department && (
                          <p className="text-sm text-muted-foreground italic">{exp.department}</p>
                        )}
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">◦</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
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
