"use client";

import { motion } from "framer-motion";
import { 
  BookOpen, 
  FileText, 
  ExternalLink, 
  Download,
  Users,
  Calendar,
  Tag,
  Award,
  Microscope,
  Presentation,
  Github,
  Link as LinkIcon,
  Search,
  Filter
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Research Publications Data - Update with your actual publications
const publications = [
  {
    type: "conference" as const,
    title: "Real-Time Object Detection Optimization for Edge Devices Using TensorRT",
    authors: ["Shahriar Khan", "Dr. Professor Name"],
    venue: "University Research Conference",
    year: 2024,
    abstract: "This paper presents novel optimization techniques for deploying YOLOv8 models on resource-constrained edge devices like NVIDIA Jetson Nano. We achieved 40% FPS improvement while maintaining 97.5% mAP through strategic model pruning, quantization, and TensorRT optimization.",
    tags: ["Deep Learning", "Edge Computing", "Computer Vision", "TensorRT"],
    pdfLink: "/documents/research/object_detection_edge.pdf",
    codeLink: "https://github.com/turjo410/edge-yolo-optimization",
    status: "Published",
    color: "cyan",
  },
  {
    type: "paper" as const,
    title: "Ensemble OCR Approach for Bengali Character Recognition in License Plates",
    authors: ["Shahriar Khan"],
    venue: "Student Research Symposium",
    year: 2023,
    abstract: "A comprehensive study on combining multiple OCR engines (EasyOCR, Tesseract, PaddleOCR) with a voting mechanism for improved Bengali text recognition accuracy. The ensemble approach achieved 15% higher accuracy than individual models on the Bengali license plate dataset.",
    tags: ["OCR", "Bengali NLP", "Ensemble Learning", "ANPR"],
    pdfLink: "/documents/research/bengali_ocr_ensemble.pdf",
    codeLink: "https://github.com/turjo410/bengali-anpr",
    status: "Published",
    color: "purple",
  },
  {
    type: "ongoing" as const,
    title: "Efficient Vision Transformers for Low-Resource Deployment",
    authors: ["Shahriar Khan", "Research Team"],
    venue: "In Preparation",
    year: 2025,
    abstract: "Investigating novel architectures for efficient vision transformers that can achieve state-of-the-art performance on image classification tasks while being deployable on mobile and edge devices with limited computational resources.",
    tags: ["Vision Transformers", "Model Efficiency", "Mobile AI"],
    pdfLink: null,
    codeLink: null,
    status: "Ongoing",
    color: "pink",
  },
];

// Research Presentations & Talks
const talks = [
  {
    title: "Building Production-Ready AI Systems",
    event: "EWU Programming Club Workshop",
    date: "November 2023",
    description: "Workshop on best practices for deploying machine learning models in production environments with focus on monitoring, MLOps, and system reliability.",
    slides: "/documents/research/slides_prod_ai.pdf",
    type: "workshop",
  },
  {
    title: "Computer Vision Applications in Bangladesh",
    event: "Tech Conference Dhaka",
    date: "August 2023",
    description: "Talk on practical applications of computer vision for Bengali language processing, including ANPR systems and document OCR.",
    slides: "/documents/research/slides_cv_bangladesh.pdf",
    type: "talk",
  },
  {
    title: "Introduction to Deep Learning with PyTorch",
    event: "EWU AI/ML Study Group",
    date: "May 2023",
    description: "Introductory session on neural network fundamentals and hands-on implementation with PyTorch for beginners.",
    slides: null,
    type: "workshop",
  },
];

// Research Areas of Interest
const researchAreas = [
  {
    title: "Efficient Deep Learning",
    description: "Model compression, pruning, knowledge distillation, and quantization for edge deployment",
    icon: "⚡",
    papers: 2,
  },
  {
    title: "Computer Vision",
    description: "Object detection, image classification, OCR, and real-time video processing",
    icon: "👁️",
    papers: 3,
  },
  {
    title: "Natural Language Processing",
    description: "Bengali NLP, text recognition, and language understanding",
    icon: "📝",
    papers: 1,
  },
  {
    title: "MLOps & Deployment",
    description: "Production ML systems, model serving, monitoring, and CI/CD for ML",
    icon: "🚀",
    papers: 1,
  },
];

const typeLabels = {
  conference: "Conference Paper",
  paper: "Research Paper",
  ongoing: "Ongoing Research",
};

export default function ResearchPage() {
  const [filter, setFilter] = useState<"all" | "conference" | "paper" | "ongoing">("all");

  const filteredPublications = filter === "all" 
    ? publications 
    : publications.filter(p => p.type === filter);

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
            <Microscope className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm text-neon-cyan">Academic Research</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Research & Publications
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            My academic contributions to AI/ML, computer vision, and efficient deep learning
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
            { label: "Publications", value: "3+", color: "cyan", icon: BookOpen },
            { label: "Research Areas", value: "4", color: "purple", icon: Microscope },
            { label: "Presentations", value: "5+", color: "pink", icon: Presentation },
            { label: "Ongoing Projects", value: "2", color: "blue", icon: Search },
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

        {/* Research Areas */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-neon-purple/10 border border-neon-purple/30">
              <Microscope className="w-6 h-6 text-neon-purple" />
            </div>
            <h2 className="text-3xl font-bold">Research Interests</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="h-full border-primary/20 bg-card/80 backdrop-blur-sm hover:bg-card/90 transition-colors group">
                  <CardContent className="pt-6">
                    <div className="text-4xl mb-4">{area.icon}</div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-neon-cyan transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{area.description}</p>
                    <div className="text-xs text-neon-purple">
                      {area.papers} publication{area.papers !== 1 ? "s" : ""}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Publications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30">
                <BookOpen className="w-6 h-6 text-neon-cyan" />
              </div>
              <h2 className="text-3xl font-bold">Publications</h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {(["all", "conference", "paper", "ongoing"] as const).map((type) => (
                <Button
                  key={type}
                  size="sm"
                  variant={filter === type ? "default" : "outline"}
                  onClick={() => setFilter(type)}
                  className="gap-2"
                >
                  <Filter className="w-3 h-3" />
                  {type === "all" ? "All" : typeLabels[type]}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {filteredPublications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                layout
              >
                <Card className={`border-primary/20 bg-card/80 backdrop-blur-sm hover-glow-${pub.color} overflow-hidden`}>
                  <div className={`h-1 bg-gradient-to-r from-neon-${pub.color} to-transparent`} />
                  <CardContent className="pt-6 pb-6">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Main Content */}
                      <div className="flex-1">
                        {/* Type Badge & Status */}
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className={`px-3 py-1 text-xs rounded-full bg-neon-${pub.color}/10 text-neon-${pub.color} border border-neon-${pub.color}/30 font-semibold`}>
                            {typeLabels[pub.type]}
                          </span>
                          <span className={`px-3 py-1 text-xs rounded-full ${
                            pub.status === "Published" 
                              ? "bg-green-500/10 text-green-400 border border-green-500/30"
                              : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/30"
                          }`}>
                            {pub.status}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold mb-2">{pub.title}</h3>

                        {/* Authors */}
                        <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                          <Users className="w-4 h-4" />
                          <span>{pub.authors.join(", ")}</span>
                        </div>

                        {/* Venue & Year */}
                        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Award className={`w-4 h-4 text-neon-${pub.color}`} />
                            <span className="font-medium">{pub.venue}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{pub.year}</span>
                          </div>
                        </div>

                        {/* Abstract */}
                        <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                          {pub.abstract}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {pub.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="flex items-center gap-1 px-2 py-1 text-xs rounded-md bg-card border border-primary/20"
                            >
                              <Tag className="w-3 h-3" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col gap-2 lg:w-48">
                        {pub.pdfLink && (
                          <>
                            <Link href={pub.pdfLink} target="_blank">
                              <Button size="sm" className="w-full gap-2">
                                <FileText className="w-4 h-4" />
                                Read Paper
                              </Button>
                            </Link>
                            <Link href={pub.pdfLink} download>
                              <Button size="sm" variant="outline" className="w-full gap-2">
                                <Download className="w-4 h-4" />
                                Download PDF
                              </Button>
                            </Link>
                          </>
                        )}
                        {pub.codeLink && (
                          <Link href={pub.codeLink} target="_blank">
                            <Button size="sm" variant="outline" className="w-full gap-2">
                              <Github className="w-4 h-4" />
                              View Code
                            </Button>
                          </Link>
                        )}
                        {!pub.pdfLink && !pub.codeLink && (
                          <div className="text-center p-4 rounded-lg bg-card/50 border border-primary/20">
                            <p className="text-sm text-muted-foreground">Coming Soon</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Talks & Presentations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-neon-pink/10 border border-neon-pink/30">
              <Presentation className="w-6 h-6 text-neon-pink" />
            </div>
            <h2 className="text-3xl font-bold">Talks & Workshops</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {talks.map((talk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="h-full border-primary/20 bg-card/80 backdrop-blur-sm hover-glow-pink group">
                  <CardContent className="pt-6 flex flex-col h-full">
                    <div className={`inline-block px-3 py-1 text-xs rounded-full mb-4 w-fit ${
                      talk.type === "workshop" 
                        ? "bg-neon-purple/10 text-neon-purple border border-neon-purple/30"
                        : "bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30"
                    }`}>
                      {talk.type === "workshop" ? "Workshop" : "Talk"}
                    </div>
                    
                    <h3 className="font-bold text-lg mb-2 group-hover:text-neon-pink transition-colors">
                      {talk.title}
                    </h3>
                    
                    <p className="text-sm text-neon-pink font-medium mb-1">{talk.event}</p>
                    <p className="text-xs text-muted-foreground mb-4">{talk.date}</p>
                    
                    <p className="text-sm text-gray-400 mb-4 flex-1">{talk.description}</p>

                    {talk.slides && (
                      <Link href={talk.slides} target="_blank">
                        <Button size="sm" variant="outline" className="w-full gap-2">
                          <ExternalLink className="w-4 h-4" />
                          View Slides
                        </Button>
                      </Link>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="border-primary/20 bg-gradient-to-br from-neon-cyan/5 via-card to-neon-purple/5 backdrop-blur-sm">
            <CardContent className="pt-8 pb-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Interested in Collaboration?</h3>
              <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                I&apos;m always looking for research collaborations, especially in efficient deep learning, 
                computer vision, and applied AI. Let&apos;s create something impactful together.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/#contact">
                  <Button size="lg" className="gap-2">
                    <LinkIcon className="w-4 h-4" />
                    Get in Touch
                  </Button>
                </Link>
                <Link href="https://scholar.google.com" target="_blank">
                  <Button size="lg" variant="outline" className="gap-2">
                    <BookOpen className="w-4 h-4" />
                    Google Scholar
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
