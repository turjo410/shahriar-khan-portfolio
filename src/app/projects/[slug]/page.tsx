"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Zap, Target, Lightbulb, TrendingUp, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { getProjectBySlug } from "../../../data/projects";
import { useInView } from "react-intersection-observer";
import type { ProjectMetric, Technology, Challenge } from "../../../../types/project";
import { OptimizedImage, ImageGrid, ArchitectureDiagram, BeforeAfterSlider } from "@/components/optimized-image";

export default function ProjectPage() {
  const params = useParams();
  const project = getProjectBySlug(params.slug as string);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/#projects" className="text-neon-cyan hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-cyber-grid opacity-20" />
        
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <Link 
            href="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-neon-cyan transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-sm font-mono mb-4">
              {project.category}
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-neon-cyan to-neon-purple bg-clip-text text-transparent">
              {project.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              {project.tagline}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-neon-cyan text-black font-semibold rounded-lg hover:shadow-glow-cyan transition-all hover:-translate-y-0.5"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg hover-glow-cyan transition-all hover:-translate-y-0.5"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              )}
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-neon-cyan" />
                <span>{project.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-neon-purple" />
                <span>{project.role}</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-neon-pink" />
                <span className="capitalize">{project.status}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-12">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.metrics.map((metric, index) => (
              <MetricCard key={index} metric={metric} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-12">
        <div className="container max-w-6xl mx-auto px-6">
          <OptimizedImage
            src={`/images/projects/${project.slug}/hero.jpg`}
            alt={`${project.title} - Main Interface`}
            width={1400}
            height={800}
            priority
            caption={`${project.title} - Main Dashboard`}
            className="mb-8"
          />
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12">
        <div className="container max-w-6xl mx-auto px-6">
          <SectionTitle icon={<Target />} title="Overview" />
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-12">
        <div className="container max-w-6xl mx-auto px-6">
          <ArchitectureDiagram
            src={`/images/projects/${project.slug}/architecture.jpg`}
            title="System Architecture"
            description="High-level overview of the system design, data flow, and component interactions."
          />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-12">
        <div className="container max-w-6xl mx-auto px-6">
          <SectionTitle icon={<Zap />} title="Tech Stack" />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {project.technologies.map((tech, index) => (
              <TechCard key={index} tech={tech} delay={index * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      {project.challenges.length > 0 && (
        <section className="py-12">
          <div className="container max-w-6xl mx-auto px-6">
            <SectionTitle icon={<Lightbulb />} title="Challenges & Solutions" />
            <div className="space-y-6">
              {project.challenges.map((challenge, index) => (
                <ChallengeCard key={index} challenge={challenge} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Approach & Outcome */}
      <section className="py-12">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <SectionTitle icon={<Target />} title="Approach" />
              <p className="text-muted-foreground leading-relaxed">{project.approach}</p>
            </div>
            <div>
              <SectionTitle icon={<TrendingUp />} title="Outcome" />
              <p className="text-muted-foreground leading-relaxed">{project.outcome}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12">
        <div className="container max-w-6xl mx-auto px-6">
          <SectionTitle icon={<CheckCircle2 />} title="Key Highlights" />
          <div className="grid md:grid-cols-2 gap-4">
            {project.highlights.map((highlight, index) => (
              <HighlightCard key={index} text={highlight} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-12">
        <div className="container max-w-6xl mx-auto px-6">
          <SectionTitle icon={<ExternalLink />} title="Project Gallery" />
          <ImageGrid
            images={[
              {
                src: `/images/projects/${project.slug}/screenshot-1.jpg`,
                alt: `${project.title} - Interface View 1`,
                caption: "Main Dashboard Interface"
              },
              {
                src: `/images/projects/${project.slug}/screenshot-2.jpg`,
                alt: `${project.title} - Interface View 2`,
                caption: "Feature Management Panel"
              },
              {
                src: `/images/projects/${project.slug}/screenshot-3.jpg`,
                alt: `${project.title} - Interface View 3`,
                caption: "Analytics & Reporting"
              },
              {
                src: `/images/projects/${project.slug}/screenshot-4.jpg`,
                alt: `${project.title} - Interface View 4`,
                caption: "Settings & Configuration"
              },
              {
                src: `/images/projects/${project.slug}/screenshot-5.jpg`,
                alt: `${project.title} - Interface View 5`,
                caption: "Mobile Responsive View"
              },
              {
                src: `/images/projects/${project.slug}/screenshot-6.jpg`,
                alt: `${project.title} - Interface View 6`,
                caption: "Dark Mode Interface"
              }
            ]}
            columns={3}
            gap={6}
          />
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-12">
        <div className="container max-w-6xl mx-auto px-6">
          <SectionTitle icon={<TrendingUp />} title="Performance Improvement" />
          <BeforeAfterSlider
            before={`/images/projects/${project.slug}/before.jpg`}
            after={`/images/projects/${project.slug}/after.jpg`}
            alt={`${project.title} Performance Comparison`}
          />
          <p className="text-center text-muted-foreground mt-4 text-sm">
            Drag the slider to compare performance metrics before and after optimization
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-neon-cyan/10 via-neon-purple/10 to-neon-pink/10 border border-primary/20 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
            <p className="text-muted-foreground mb-8">
              Let&apos;s discuss how I can help bring your ideas to life
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-neon-cyan text-black font-semibold rounded-lg hover:shadow-glow-cyan transition-all hover:-translate-y-0.5"
              >
                Get in Touch
              </Link>
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 px-8 py-3 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg hover-glow-cyan transition-all hover:-translate-y-0.5"
              >
                View More Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Component: MetricCard
function MetricCard({ metric, delay }: { metric: ProjectMetric; delay: number }) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover-glow-cyan"
    >
      <div className="text-3xl font-bold text-neon-cyan mb-2 font-mono">
        {metric.value}
      </div>
      <div className="text-sm font-semibold mb-1">{metric.label}</div>
      {metric.description && (
        <div className="text-xs text-muted-foreground">{metric.description}</div>
      )}
    </motion.div>
  );
}

// Component: TechCard
function TechCard({ tech, delay }: { tech: Technology; delay: number }) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.3, delay }}
      className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-lg p-4 hover-glow-cyan text-center group"
    >
      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{tech.icon}</div>
      <div className="text-sm font-medium">{tech.name}</div>
    </motion.div>
  );
}

// Component: ChallengeCard
function ChallengeCard({ challenge, index }: { challenge: Challenge; index: number }) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover-glow-purple"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neon-purple/20 border border-neon-purple/50 flex items-center justify-center text-neon-purple font-bold">
          {index + 1}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-2 text-neon-purple">{challenge.title}</h3>
          <p className="text-muted-foreground mb-4">{challenge.description}</p>
          <div className="pl-4 border-l-2 border-neon-cyan/50">
            <div className="text-sm font-semibold text-neon-cyan mb-1">Solution:</div>
            <p className="text-sm text-muted-foreground">{challenge.solution}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Component: HighlightCard
function HighlightCard({ text, delay }: { text: string; delay: number }) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3, delay }}
      className="flex items-start gap-3 bg-card/20 backdrop-blur-sm border border-primary/20 rounded-lg p-4 hover-glow-pink"
    >
      <CheckCircle2 className="w-5 h-5 text-neon-pink flex-shrink-0 mt-0.5" />
      <span className="text-sm text-muted-foreground">{text}</span>
    </motion.div>
  );
}

// Component: SectionTitle
function SectionTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="p-2 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan">
        {icon}
      </div>
      <h2 className="text-3xl font-bold">{title}</h2>
    </div>
  );
}
