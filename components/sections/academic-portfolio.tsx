"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  GraduationCap, 
  FileText, 
  Users, 
  BookOpen, 
  Award,
  ArrowRight,
  Sparkles,
  Download,
  ExternalLink
} from "lucide-react"
import Link from "next/link"

const academicLinks = [
  {
    title: "Credentials & Transcripts",
    description: "Academic qualifications, GPA, TOEFL score, and official documents",
    href: "/credentials",
    icon: GraduationCap,
    color: "cyan",
    stats: "3.92 CGPA • TOEFL 93",
    badge: "Dean's List",
  },
  {
    title: "Statement of Purpose",
    description: "My academic vision, research interests, and career goals",
    href: "/statement-of-purpose",
    icon: FileText,
    color: "purple",
    stats: "Research Focus",
    badge: "AI/ML",
  },
  {
    title: "Letters of Recommendation",
    description: "Professional endorsements from professors and mentors",
    href: "/recommendations",
    icon: Users,
    color: "pink",
    stats: "3+ LORs",
    badge: "Verified",
  },
  {
    title: "Research & Publications",
    description: "Academic papers, conference presentations, and ongoing research",
    href: "/research",
    icon: BookOpen,
    color: "cyan",
    stats: "3+ Papers",
    badge: "Published",
  },
  {
    title: "Certifications",
    description: "Professional certifications in AI/ML, cloud, and development",
    href: "/certifications",
    icon: Award,
    color: "purple",
    stats: "6+ Certs",
    badge: "Verified",
  },
]

export function AcademicPortfolio() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-primary/20 mb-4 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-4 h-4 text-neon-pink" />
              <span className="text-sm text-neon-pink">Academic Portfolio</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Complete <span className="text-gradient-animate">Professional Profile</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about my academic journey, qualifications, and achievements — all in one place
            </p>
          </div>

          {/* Quick Access Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="border-primary/20 bg-gradient-to-r from-neon-cyan/5 via-neon-purple/5 to-neon-pink/5 backdrop-blur-sm">
              <CardContent className="py-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-neon-cyan/10 border-2 border-neon-cyan/30 flex items-center justify-center">
                      <Download className="w-7 h-7 text-neon-cyan" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Quick Access Documents</h3>
                      <p className="text-sm text-muted-foreground">Download my CV or view complete academic profile</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Link href="/resume/Shahriar_Khan_Resume.pdf" target="_blank">
                      <Button size="lg" className="gap-2 hover-glow-cyan">
                        <Download className="w-4 h-4" />
                        Download CV
                      </Button>
                    </Link>
                    <Link href="/credentials">
                      <Button size="lg" variant="outline" className="gap-2 hover-glow-purple">
                        <GraduationCap className="w-4 h-4" />
                        View Transcript
                      </Button>
                    </Link>
                    <Link href="/statement-of-purpose">
                      <Button size="lg" variant="outline" className="gap-2 hover-glow-pink">
                        <FileText className="w-4 h-4" />
                        Read SOP
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Academic Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicLinks.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={item.href}>
                    <Card className={`h-full border-primary/20 bg-card/80 backdrop-blur-sm hover-glow-${item.color} transition-all group cursor-pointer overflow-hidden`}>
                      <div className={`h-1 bg-gradient-to-r from-neon-${item.color} to-transparent`} />
                      <CardContent className="pt-6 pb-6">
                        <div className="flex items-start justify-between mb-4">
                          <motion.div 
                            className={`w-14 h-14 rounded-xl bg-neon-${item.color}/10 border-2 border-neon-${item.color}/30 flex items-center justify-center group-hover:scale-110 transition-transform`}
                            whileHover={{ rotate: 5 }}
                          >
                            <Icon className={`w-7 h-7 text-neon-${item.color}`} />
                          </motion.div>
                          <div className={`px-3 py-1 rounded-full text-xs font-semibold bg-neon-${item.color}/10 text-neon-${item.color} border border-neon-${item.color}/30`}>
                            {item.badge}
                          </div>
                        </div>
                        
                        <h3 className={`text-xl font-bold mb-2 group-hover:text-neon-${item.color} transition-colors`}>
                          {item.title}
                        </h3>
                        
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                          <span className={`text-lg font-bold text-neon-${item.color}`}>
                            {item.stats}
                          </span>
                          <div className={`flex items-center gap-1 text-sm text-neon-${item.color} group-hover:translate-x-1 transition-transform`}>
                            <span>View</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-4">
              Looking for official sealed documents for applications?
            </p>
            <Link href="/#contact">
              <Button variant="outline" size="lg" className="gap-2">
                <ExternalLink className="w-4 h-4" />
                Request Official Documents
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
