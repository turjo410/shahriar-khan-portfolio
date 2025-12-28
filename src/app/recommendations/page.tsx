"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  FileText, 
  ExternalLink, 
  Download, 
  Mail,
  Building2,
  GraduationCap,
  Briefcase,
  Quote,
  Lock,
  Shield,
  Star,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Recommender Data - Update with your actual recommenders
const recommenders = [
  {
    name: "Dr. [Professor Name]",
    title: "Associate Professor",
    department: "Department of Computer Science & Engineering",
    institution: "East West University",
    relationship: "Research Supervisor & Course Instructor",
    duration: "2 years",
    email: "professor@ewubd.edu",
    photo: "/images/recommenders/professor1.jpg", // Add photo if available
    areas: ["Machine Learning", "Computer Vision", "Deep Learning"],
    letterAvailable: true,
    letterFile: "/documents/lor/lor_professor1.pdf",
    testimonial: "Shahriar has demonstrated exceptional aptitude in machine learning and has consistently exceeded expectations in both coursework and research projects.",
    color: "cyan",
  },
  {
    name: "Dr. [Professor Name 2]",
    title: "Professor",
    department: "Department of Computer Science & Engineering",
    institution: "East West University",
    relationship: "Academic Advisor & Mentor",
    duration: "3 years",
    email: "professor2@ewubd.edu",
    photo: "/images/recommenders/professor2.jpg",
    areas: ["Software Engineering", "Algorithm Design", "Data Structures"],
    letterAvailable: true,
    letterFile: "/documents/lor/lor_professor2.pdf",
    testimonial: "One of the most dedicated students I have mentored. His ability to grasp complex concepts and apply them practically is remarkable.",
    color: "purple",
  },
  {
    name: "[Industry Professional]",
    title: "Senior Machine Learning Engineer",
    department: "AI Research Team",
    institution: "[Company Name]",
    relationship: "Project Mentor",
    duration: "6 months",
    email: "professional@company.com",
    photo: "/images/recommenders/professional.jpg",
    areas: ["MLOps", "Production Systems", "AI Deployment"],
    letterAvailable: false,
    letterFile: null,
    testimonial: "Shahriar brings a unique combination of theoretical knowledge and practical skills that is rare in students at his level.",
    color: "pink",
  },
];

export default function RecommendationsPage() {
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
            <Users className="w-4 h-4 text-neon-purple" />
            <span className="text-sm text-neon-purple">Professional Endorsements</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Recommendations
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Letters of recommendation from professors and industry professionals
          </p>
        </motion.div>

        {/* Privacy Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <Card className="border-neon-purple/30 bg-neon-purple/5 backdrop-blur-sm">
            <CardContent className="pt-6 pb-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-neon-purple/10 border border-neon-purple/30">
                  <Shield className="w-6 h-6 text-neon-purple" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Privacy & Confidentiality</h3>
                  <p className="text-sm text-gray-400">
                    Some letters of recommendation are shared with explicit permission from the recommenders. 
                    For official/sealed letters required for applications, please{" "}
                    <Link href="/#contact" className="text-neon-purple hover:underline">
                      contact me directly
                    </Link>, and I can arrange for direct submission from the recommenders.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recommenders Grid */}
        <div className="space-y-8 mb-16">
          {recommenders.map((recommender, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <Card className={`border-primary/20 bg-card/80 backdrop-blur-sm hover-glow-${recommender.color} overflow-hidden`}>
                <div className={`h-1 bg-gradient-to-r from-neon-${recommender.color} to-transparent`} />
                <CardContent className="pt-8 pb-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Recommender Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-4 mb-6">
                        {/* Avatar Placeholder */}
                        <div className={`w-16 h-16 rounded-xl bg-neon-${recommender.color}/10 border-2 border-neon-${recommender.color}/30 flex items-center justify-center text-2xl font-bold text-neon-${recommender.color}`}>
                          {recommender.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-1">{recommender.name}</h3>
                          <p className={`text-neon-${recommender.color} font-medium`}>{recommender.title}</p>
                          <p className="text-sm text-muted-foreground">{recommender.department}</p>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-card border border-primary/20">
                          <Building2 className="w-5 h-5 text-neon-cyan" />
                          <div>
                            <p className="text-xs text-muted-foreground">Institution</p>
                            <p className="text-sm font-medium">{recommender.institution}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-card border border-primary/20">
                          <Briefcase className="w-5 h-5 text-neon-purple" />
                          <div>
                            <p className="text-xs text-muted-foreground">Relationship</p>
                            <p className="text-sm font-medium">{recommender.relationship}</p>
                          </div>
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="mb-6">
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-card/50 border border-primary/10">
                          <Quote className={`w-8 h-8 text-neon-${recommender.color}/30 flex-shrink-0`} />
                          <p className="text-gray-300 italic leading-relaxed">
                            &ldquo;{recommender.testimonial}&rdquo;
                          </p>
                        </div>
                      </div>

                      {/* Areas of Expertise */}
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Areas Covered in Letter</p>
                        <div className="flex flex-wrap gap-2">
                          {recommender.areas.map((area, idx) => (
                            <span
                              key={idx}
                              className={`px-3 py-1 text-xs rounded-full bg-neon-${recommender.color}/10 text-neon-${recommender.color} border border-neon-${recommender.color}/30`}
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="p-4 rounded-xl bg-card border border-primary/20">
                          <div className="flex items-center gap-2 mb-3">
                            <FileText className={`w-5 h-5 text-neon-${recommender.color}`} />
                            <span className="font-medium">Letter of Recommendation</span>
                          </div>
                          
                          {recommender.letterAvailable ? (
                            <div className="space-y-2">
                              <Link href={recommender.letterFile || "#"} target="_blank">
                                <Button className="w-full gap-2" size="sm">
                                  <ExternalLink className="w-4 h-4" />
                                  View Letter
                                </Button>
                              </Link>
                              <Link href={recommender.letterFile || "#"} download>
                                <Button variant="outline" className="w-full gap-2" size="sm">
                                  <Download className="w-4 h-4" />
                                  Download PDF
                                </Button>
                              </Link>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 text-sm text-muted-foreground">
                              <Lock className="w-4 h-4" />
                              <span>Available upon request</span>
                            </div>
                          )}
                        </div>

                        <div className="p-4 rounded-xl bg-card border border-primary/20">
                          <div className="flex items-center gap-2 mb-2">
                            <Mail className={`w-4 h-4 text-neon-${recommender.color}`} />
                            <span className="text-sm text-muted-foreground">Duration of Association</span>
                          </div>
                          <p className="font-medium">{recommender.duration}</p>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className={`w-4 h-4 text-neon-${recommender.color} fill-current`} />
                        ))}
                        <span className="text-xs text-muted-foreground ml-2">Strong Recommendation</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Request Official Letters Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <Card className="border-primary/20 bg-gradient-to-br from-neon-cyan/5 via-card to-neon-purple/5 backdrop-blur-sm">
            <CardContent className="pt-8 pb-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-neon-cyan/10 border-2 border-neon-cyan/30 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-neon-cyan" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Need Official Letters?</h3>
              <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                For graduate school applications, scholarships, or employment verification, 
                I can arrange for sealed/official letters to be sent directly from my recommenders 
                to your institution.
              </p>
              <Link href="/#contact">
                <Button size="lg" className="gap-2">
                  <Mail className="w-4 h-4" />
                  Request Official Letters
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>

        {/* Navigation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-6 text-center">Explore More</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/credentials">
              <Card className="border-primary/20 bg-card/80 backdrop-blur-sm hover-glow-cyan group cursor-pointer">
                <CardContent className="pt-6 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-lg">Credentials</h4>
                    <p className="text-sm text-muted-foreground">Academic qualifications</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-neon-cyan group-hover:translate-x-1 transition-transform" />
                </CardContent>
              </Card>
            </Link>
            <Link href="/statement-of-purpose">
              <Card className="border-primary/20 bg-card/80 backdrop-blur-sm hover-glow-purple group cursor-pointer">
                <CardContent className="pt-6 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-lg">Statement of Purpose</h4>
                    <p className="text-sm text-muted-foreground">My vision & goals</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-neon-purple group-hover:translate-x-1 transition-transform" />
                </CardContent>
              </Card>
            </Link>
            <Link href="/research">
              <Card className="border-primary/20 bg-card/80 backdrop-blur-sm hover-glow-pink group cursor-pointer">
                <CardContent className="pt-6 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-lg">Research</h4>
                    <p className="text-sm text-muted-foreground">Publications & papers</p>
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
