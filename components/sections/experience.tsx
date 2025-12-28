"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Building2, TrendingUp } from "lucide-react"

const experiences = [
  {
    title: "Undergraduate Teaching Assistant",
    company: "East West University",
    department: "Department of Computer Science and Engineering",
    location: "Dhaka, Bangladesh",
    period: "November 2024 - Present",
    type: "Academic",
    color: "cyan",
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
    type: "Technical",
    color: "purple",
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
    type: "Leadership",
    color: "pink",
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
    <section id="experience" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              className="inline-block px-4 py-2 rounded-full bg-card/50 border border-primary/20 mb-4 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-sm text-neon-purple">Professional Journey</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Work <span className="text-gradient-animate">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Academic, technical, and leadership roles shaping my professional development
            </p>
          </div>

          {/* Timeline with Enhanced Cards */}
          <div className="relative space-y-8">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink opacity-30"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className={`hidden md:block absolute left-8 top-8 w-4 h-4 rounded-full bg-neon-${exp.color} transform -translate-x-1/2 z-10 animate-pulse`}></div>
                
                <Card className={`md:ml-20 border-primary/20 bg-card/80 backdrop-blur-sm hover-glow-${exp.color} transition-all group`}>
                  <CardHeader className="border-b border-primary/10">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <motion.div 
                            className={`p-2 rounded-lg bg-neon-${exp.color}/10 border border-neon-${exp.color}/30`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {exp.type === "Academic" && <Building2 className={`w-5 h-5 text-neon-${exp.color}`} />}
                            {exp.type === "Technical" && <TrendingUp className={`w-5 h-5 text-neon-${exp.color}`} />}
                            {exp.type === "Leadership" && <Building2 className={`w-5 h-5 text-neon-${exp.color}`} />}
                          </motion.div>
                          <div>
                            <CardTitle className="text-xl sm:text-2xl">{exp.title}</CardTitle>
                            <span className={`inline-block mt-1 text-xs px-3 py-1 rounded-full bg-neon-${exp.color}/10 text-neon-${exp.color} border border-neon-${exp.color}/30 font-semibold`}>
                              {exp.type}
                            </span>
                          </div>
                        </div>
                        <p className={`text-base font-semibold text-neon-${exp.color} mb-1`}>{exp.company}</p>
                        {exp.department && (
                          <p className="text-sm text-muted-foreground italic">{exp.department}</p>
                        )}
                      </div>
                      <div className="flex flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border border-primary/20">
                          <Calendar className="w-4 h-4 text-neon-cyan" />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border border-primary/20">
                          <MapPin className="w-4 h-4 text-neon-purple" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex gap-3 text-sm leading-relaxed group/item"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <span className={`mt-1 text-neon-${exp.color} font-bold group-hover/item:scale-125 transition-transform`}>▸</span>
                          <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">{resp}</span>
                        </motion.li>
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
