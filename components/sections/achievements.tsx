"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Trophy } from "lucide-react"

const achievements = [
  {
    title: "Full Tuition-Free Merit Scholarship",
    organization: "East West University",
    description: "100% tuition waiver",
    year: "2022",
  },
  {
    title: "Deans Merit Scholarship",
    organization: "East West University",
    year: "Spring 2025",
  },
  {
    title: "Merit Scholarship and Dean's List",
    organization: "East West University",
    year: "Fall 2024",
  },
  {
    title: "Champion - 1st Rank",
    organization: "Cloud's Den Photography Competition",
    description: "Secured 1st place among 15 teams",
    year: "2022",
  },
  {
    title: "Runners Up - 2nd Place",
    organization: "Short Film Making Contest, Scholastica Photography Festival",
    year: "2022",
  },
]

export function Achievements() {
  return (
    <section className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Achievements & Scholarships</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        {index < 3 ? (
                          <Award className="w-5 h-5 text-primary" />
                        ) : (
                          <Trophy className="w-5 h-5 text-primary" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-sm">{achievement.title}</h3>
                          <span className="text-xs text-muted-foreground">{achievement.year}</span>
                        </div>
                        <p className="text-sm text-primary mb-1">{achievement.organization}</p>
                        {achievement.description && (
                          <p className="text-xs text-muted-foreground">{achievement.description}</p>
                        )}
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
