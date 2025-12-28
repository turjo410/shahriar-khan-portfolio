"use client";

import { motion } from "framer-motion";
import { 
  Award, 
  ExternalLink, 
  Download,
  Calendar,
  Building2,
  BadgeCheck,
  Shield,
  Code2,
  Cloud,
  Brain,
  Database,
  ChevronRight,
  Star
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Certifications Data - Update with your actual certifications
const certifications = [
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI / Coursera",
    date: "2024",
    credentialId: "XXXXXXXX",
    skills: ["Neural Networks", "CNNs", "RNNs", "TensorFlow"],
    verifyLink: "https://coursera.org/verify/",
    certificateFile: "/documents/certificates/deep_learning_spec.pdf",
    logo: "🧠",
    color: "cyan",
    featured: true,
  },
  {
    title: "Machine Learning by Stanford University",
    issuer: "Stanford Online / Coursera",
    date: "2023",
    credentialId: "XXXXXXXX",
    skills: ["Supervised Learning", "Unsupervised Learning", "ML Algorithms"],
    verifyLink: "https://coursera.org/verify/",
    certificateFile: "/documents/certificates/ml_stanford.pdf",
    logo: "📊",
    color: "purple",
    featured: true,
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google / TensorFlow",
    date: "2024",
    credentialId: "XXXXXXXX",
    skills: ["TensorFlow", "Keras", "Model Deployment", "Computer Vision"],
    verifyLink: "https://www.credential.net/",
    certificateFile: "/documents/certificates/tensorflow_dev.pdf",
    logo: "🔧",
    color: "pink",
    featured: true,
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "XXXXXXXX",
    skills: ["AWS Services", "Cloud Computing", "Security", "Pricing"],
    verifyLink: "https://aws.amazon.com/verification/",
    certificateFile: "/documents/certificates/aws_cloud.pdf",
    logo: "☁️",
    color: "cyan",
    featured: false,
  },
  {
    title: "Python for Data Science",
    issuer: "IBM / Coursera",
    date: "2022",
    credentialId: "XXXXXXXX",
    skills: ["Python", "Pandas", "NumPy", "Data Visualization"],
    verifyLink: "https://coursera.org/verify/",
    certificateFile: "/documents/certificates/python_ds.pdf",
    logo: "🐍",
    color: "purple",
    featured: false,
  },
  {
    title: "SQL for Data Science",
    issuer: "UC Davis / Coursera",
    date: "2022",
    credentialId: "XXXXXXXX",
    skills: ["SQL", "Database Management", "Data Analysis"],
    verifyLink: "https://coursera.org/verify/",
    certificateFile: "/documents/certificates/sql_ds.pdf",
    logo: "🗃️",
    color: "pink",
    featured: false,
  },
];

// Skill categories for the badges
const skillCategories = [
  {
    name: "Machine Learning",
    icon: Brain,
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Keras"],
    color: "cyan",
  },
  {
    name: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    color: "purple",
  },
  {
    name: "Programming",
    icon: Code2,
    skills: ["Python", "JavaScript", "Java", "C++"],
    color: "pink",
  },
  {
    name: "Data & Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "SQL"],
    color: "blue",
  },
];

export default function CertificationsPage() {
  const featuredCerts = certifications.filter(c => c.featured);
  const otherCerts = certifications.filter(c => !c.featured);

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
            <BadgeCheck className="w-4 h-4 text-neon-pink" />
            <span className="text-sm text-neon-pink">Verified Skills</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Certifications
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Professional certifications and verified credentials in AI/ML, cloud computing, and software development
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { label: "Certifications", value: `${certifications.length}+`, color: "cyan", icon: Award },
            { label: "Skill Areas", value: "10+", color: "purple", icon: Code2 },
            { label: "Verified", value: "100%", color: "pink", icon: BadgeCheck },
            { label: "Active", value: "All", color: "blue", icon: Shield },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className={`text-center border-primary/20 bg-card/80 backdrop-blur-sm hover-glow-${stat.color}`}>
                <CardContent className="pt-6 pb-6">
                  <Icon className={`w-6 h-6 mx-auto mb-2 text-neon-${stat.color}`} />
                  <div className={`text-3xl font-bold text-neon-${stat.color} mb-1`}>{stat.value}</div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>

        {/* Featured Certifications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30">
              <Star className="w-6 h-6 text-neon-cyan" />
            </div>
            <h2 className="text-3xl font-bold">Featured Certifications</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredCerts.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className={`h-full border-primary/20 bg-card/80 backdrop-blur-sm hover-glow-${cert.color} group overflow-hidden`}>
                  <div className={`h-1 bg-gradient-to-r from-neon-${cert.color} to-transparent`} />
                  <CardContent className="pt-6 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{cert.logo}</div>
                      <div className={`px-3 py-1 text-xs rounded-full bg-neon-${cert.color}/10 text-neon-${cert.color} border border-neon-${cert.color}/30 font-semibold`}>
                        Featured
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-lg mb-2 group-hover:text-neon-cyan transition-colors">
                      {cert.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="w-4 h-4 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">{cert.date}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.slice(0, 3).map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs rounded-md bg-card border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="px-2 py-1 text-xs rounded-md bg-card border border-primary/20">
                          +{cert.skills.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="mt-auto pt-4 flex gap-2">
                      <Link href={cert.verifyLink} target="_blank" className="flex-1">
                        <Button size="sm" variant="outline" className="w-full gap-2">
                          <ExternalLink className="w-3 h-3" />
                          Verify
                        </Button>
                      </Link>
                      <Link href={cert.certificateFile} target="_blank" className="flex-1">
                        <Button size="sm" className="w-full gap-2">
                          <Download className="w-3 h-3" />
                          View
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* All Certifications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-neon-purple/10 border border-neon-purple/30">
              <Award className="w-6 h-6 text-neon-purple" />
            </div>
            <h2 className="text-3xl font-bold">Other Certifications</h2>
          </div>

          <div className="space-y-4">
            {otherCerts.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className={`border-primary/20 bg-card/80 backdrop-blur-sm hover-glow-${cert.color}`}>
                  <CardContent className="pt-6 pb-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="text-3xl">{cert.logo}</div>
                        <div>
                          <h3 className="font-bold text-lg">{cert.title}</h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Building2 className="w-4 h-4" />
                              {cert.issuer}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {cert.date}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 ml-auto">
                        <Link href={cert.verifyLink} target="_blank">
                          <Button size="sm" variant="outline" className="gap-2">
                            <ExternalLink className="w-3 h-3" />
                            Verify
                          </Button>
                        </Link>
                        <Link href={cert.certificateFile} target="_blank">
                          <Button size="sm" className="gap-2">
                            <Download className="w-3 h-3" />
                            View
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-neon-pink/10 border border-neon-pink/30">
              <Code2 className="w-6 h-6 text-neon-pink" />
            </div>
            <h2 className="text-3xl font-bold">Skills Covered</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Card className={`h-full border-primary/20 bg-card/80 backdrop-blur-sm hover-glow-${category.color}`}>
                    <CardContent className="pt-6">
                      <div className={`w-12 h-12 mb-4 rounded-xl bg-neon-${category.color}/10 border-2 border-neon-${category.color}/30 flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 text-neon-${category.color}`} />
                      </div>
                      <h3 className="font-bold text-lg mb-4">{category.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className={`px-2 py-1 text-xs rounded-md bg-neon-${category.color}/10 text-neon-${category.color} border border-neon-${category.color}/20`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

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
            <Link href="/research">
              <Card className="border-primary/20 bg-card/80 backdrop-blur-sm hover-glow-purple group cursor-pointer">
                <CardContent className="pt-6 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-lg">Research</h4>
                    <p className="text-sm text-muted-foreground">Publications & papers</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-neon-purple group-hover:translate-x-1 transition-transform" />
                </CardContent>
              </Card>
            </Link>
            <Link href="/#projects">
              <Card className="border-primary/20 bg-card/80 backdrop-blur-sm hover-glow-pink group cursor-pointer">
                <CardContent className="pt-6 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-lg">Projects</h4>
                    <p className="text-sm text-muted-foreground">View my work</p>
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
