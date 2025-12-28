"use client";

import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Award, 
  FileText, 
  Download, 
  ExternalLink, 
  BookOpen,
  Trophy,
  Medal,
  Star,
  Calendar,
  MapPin,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Education Data - Update with your actual information
const education = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "East West University",
    location: "Dhaka, Bangladesh",
    period: "2021 - Present (Expected 2025)",
    gpa: "3.92/4.00",
    honors: ["Dean's Merit Scholarship", "Dean's List (All Semesters)"],
    relevantCourses: [
      "Data Structures & Algorithms",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Natural Language Processing",
      "Database Systems",
      "Software Engineering",
      "Operating Systems",
      "Computer Networks",
      "Artificial Intelligence",
    ],
    color: "cyan",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Government Science College",
    location: "Dhaka, Bangladesh",
    period: "2018 - 2020",
    gpa: "5.00/5.00",
    honors: ["Science Group - First Division"],
    relevantCourses: ["Physics", "Chemistry", "Mathematics", "Biology"],
    color: "purple",
  },
];

// Academic Awards & Honors
const awards = [
  {
    title: "Dean's Merit Scholarship",
    organization: "East West University",
    year: "2021 - Present",
    description: "Awarded for maintaining CGPA above 3.70 throughout academic career",
    icon: Trophy,
    color: "cyan",
  },
  {
    title: "Dean's List",
    organization: "East West University",
    year: "All Semesters",
    description: "Recognized for outstanding academic performance in every semester",
    icon: Star,
    color: "purple",
  },
  {
    title: "1st Place - Photography Competition",
    organization: "Cloud's Den Photography",
    year: "2019",
    description: "Won first place among 15 competing teams in national competition",
    icon: Medal,
    color: "pink",
  },
];

// Academic Documents
const documents = [
  {
    title: "Official Transcript",
    description: "Complete academic record with all course grades",
    file: "/documents/transcripts/transcript.pdf",
    icon: FileText,
    color: "cyan",
  },
  {
    title: "Grade Sheet",
    description: "Semester-wise grade breakdown",
    file: "/documents/transcripts/gradesheet.pdf",
    icon: BookOpen,
    color: "purple",
  },
];

export default function CredentialsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-primary/20 mb-6 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <GraduationCap className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm text-neon-cyan">Academic Profile</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Academic Credentials
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            My educational journey, achievements, and academic qualifications
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { label: "Current CGPA", value: "3.92/4.00", color: "cyan" },
            { label: "Semesters Completed", value: "7+", color: "purple" },
            { label: "Dean's List", value: "All", color: "pink" },
            { label: "Scholarship", value: "Merit", color: "blue" },
          ].map((stat, index) => (
            <Card key={index} className={`text-center border-primary/20 bg-card/80 backdrop-blur-sm hover-glow-${stat.color}`}>
              <CardContent className="pt-6 pb-6">
                <div className={`text-3xl font-bold text-neon-${stat.color} mb-1`}>{stat.value}</div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30">
              <GraduationCap className="w-6 h-6 text-neon-cyan" />
            </div>
            <h2 className="text-3xl font-bold">Education</h2>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className={`border-primary/20 bg-card/80 backdrop-blur-sm hover-glow-${edu.color} overflow-hidden`}>
                  <div className={`h-1 bg-gradient-to-r from-neon-${edu.color} to-transparent`} />
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl mb-2">{edu.degree}</CardTitle>
                        <p className={`text-lg font-semibold text-neon-${edu.color}`}>{edu.institution}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border border-primary/20">
                          <Calendar className="w-4 h-4 text-neon-cyan" />
                          <span className="text-sm font-medium">{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border border-primary/20">
                          <MapPin className="w-4 h-4 text-neon-purple" />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* GPA Badge */}
                    <div className="flex items-center gap-4">
                      <div className={`px-6 py-3 rounded-xl bg-neon-${edu.color}/10 border-2 border-neon-${edu.color}/30`}>
                        <span className="text-sm text-muted-foreground">CGPA</span>
                        <div className={`text-2xl font-bold text-neon-${edu.color}`}>{edu.gpa}</div>
                      </div>
                      {edu.honors.map((honor, idx) => (
                        <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-pink/10 border border-neon-pink/30">
                          <Award className="w-4 h-4 text-neon-pink" />
                          <span className="text-sm font-medium text-neon-pink">{honor}</span>
                        </div>
                      ))}
                    </div>

                    {/* Relevant Coursework */}
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                        Relevant Coursework
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevantCourses.map((course, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 text-sm rounded-lg bg-card border border-primary/20 hover:border-primary/40 transition-colors"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Awards & Honors Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-neon-purple/10 border border-neon-purple/30">
              <Trophy className="w-6 h-6 text-neon-purple" />
            </div>
            <h2 className="text-3xl font-bold">Awards & Honors</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => {
              const Icon = award.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Card className={`h-full border-primary/20 bg-card/80 backdrop-blur-sm hover-glow-${award.color} group`}>
                    <CardContent className="pt-6">
                      <div className={`w-14 h-14 mb-4 rounded-xl bg-neon-${award.color}/10 border-2 border-neon-${award.color}/30 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-7 h-7 text-neon-${award.color}`} />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                      <p className={`text-sm font-medium text-neon-${award.color} mb-1`}>{award.organization}</p>
                      <p className="text-sm text-muted-foreground mb-3">{award.year}</p>
                      <p className="text-sm text-gray-400">{award.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Academic Documents Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-neon-pink/10 border border-neon-pink/30">
              <FileText className="w-6 h-6 text-neon-pink" />
            </div>
            <h2 className="text-3xl font-bold">Academic Documents</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {documents.map((doc, index) => {
              const Icon = doc.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Card className={`border-primary/20 bg-card/80 backdrop-blur-sm hover-glow-${doc.color} group`}>
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-xl bg-neon-${doc.color}/10 border-2 border-neon-${doc.color}/30 flex items-center justify-center`}>
                            <Icon className={`w-6 h-6 text-neon-${doc.color}`} />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold mb-1">{doc.title}</h3>
                            <p className="text-sm text-muted-foreground">{doc.description}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Link href={doc.file} target="_blank">
                            <Button size="sm" variant="outline" className="gap-2">
                              <ExternalLink className="w-4 h-4" />
                              View
                            </Button>
                          </Link>
                          <Link href={doc.file} download>
                            <Button size="sm" className="gap-2">
                              <Download className="w-4 h-4" />
                              Download
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Note about documents */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 p-4 rounded-xl bg-card/50 border border-primary/20"
          >
            <p className="text-sm text-muted-foreground text-center">
              📄 Official transcripts and verified documents available upon request. 
              <Link href="/#contact" className="text-neon-cyan hover:underline ml-1">
                Contact me
              </Link> for sealed/official copies.
            </p>
          </motion.div>
        </motion.section>

        {/* Navigation Cards */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-6 text-center">Explore More</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/statement-of-purpose">
              <Card className="border-primary/20 bg-card/80 backdrop-blur-sm hover-glow-cyan group cursor-pointer">
                <CardContent className="pt-6 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-lg">Statement of Purpose</h4>
                    <p className="text-sm text-muted-foreground">My vision & goals</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-neon-cyan group-hover:translate-x-1 transition-transform" />
                </CardContent>
              </Card>
            </Link>
            <Link href="/recommendations">
              <Card className="border-primary/20 bg-card/80 backdrop-blur-sm hover-glow-purple group cursor-pointer">
                <CardContent className="pt-6 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-lg">Recommendations</h4>
                    <p className="text-sm text-muted-foreground">Letters of recommendation</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-neon-purple group-hover:translate-x-1 transition-transform" />
                </CardContent>
              </Card>
            </Link>
            <Link href="/research">
              <Card className="border-primary/20 bg-card/80 backdrop-blur-sm hover-glow-pink group cursor-pointer">
                <CardContent className="pt-6 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-lg">Research & Publications</h4>
                    <p className="text-sm text-muted-foreground">Academic work</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-neon-pink group-hover:translate-x-1 transition-transform" />
                </CardContent>
              </Card>
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
