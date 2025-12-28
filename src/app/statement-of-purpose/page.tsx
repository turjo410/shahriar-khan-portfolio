"use client";

import { motion } from "framer-motion";
import { 
  Compass, 
  Target, 
  Lightbulb, 
  Rocket, 
  Heart, 
  Globe,
  BookOpen,
  Code2,
  Brain,
  ArrowRight,
  Quote,
  Calendar
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function StatementOfPurposePage() {
  const lastUpdated = "December 2024";

  return (
    <div className="min-h-screen py-20">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-primary/20 mb-6 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Compass className="w-4 h-4 text-neon-purple" />
            <span className="text-sm text-neon-purple">Personal Statement</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Statement of Purpose
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">
            My journey, aspirations, and vision for the future in AI/ML research and engineering
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </motion.div>

        {/* Opening Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <Card className="border-primary/20 bg-gradient-to-br from-neon-cyan/5 via-neon-purple/5 to-neon-pink/5 backdrop-blur-sm overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink" />
            <CardContent className="pt-8 pb-8">
              <Quote className="w-12 h-12 text-neon-purple/30 mb-4 mx-auto" />
              <p className="text-xl md:text-2xl text-center italic text-gray-300 leading-relaxed">
                &ldquo;The best way to predict the future is to create it—through intelligent systems 
                that augment human capabilities and solve real-world problems at scale.&rdquo;
              </p>
              <p className="text-center text-neon-purple mt-4 font-semibold">— Shahriar Khan</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Statement Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg prose-invert max-w-none"
        >
          {/* Section 1: Introduction & Background */}
          <Section 
            icon={<Lightbulb />} 
            title="The Spark: Where It All Began" 
            color="cyan"
          >
            <p className="text-gray-300 leading-relaxed mb-4">
              My fascination with artificial intelligence began during my sophomore year at East West University 
              when I encountered my first neural network. What struck me wasn&apos;t just the mathematical elegance 
              of backpropagation—it was the profound realization that we could create systems that learn and 
              adapt, much like the human mind. This moment of clarity set me on a path that would define my 
              academic and professional journey.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Growing up in Dhaka, Bangladesh, I witnessed firsthand the challenges that arise in densely 
              populated urban environments—from traffic management to healthcare accessibility. These observations 
              planted the seeds of my belief that technology, specifically AI, could be a powerful force for 
              addressing real-world challenges in developing nations and beyond.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Maintaining a <span className="text-neon-cyan font-semibold">3.92 CGPA</span> while actively 
              contributing to research projects has taught me the discipline required to excel in both 
              theoretical understanding and practical implementation. As a Dean&apos;s Merit Scholar, I&apos;ve been 
              fortunate to have the resources and support to pursue ambitious projects that bridge the gap 
              between academic research and real-world applications.
            </p>
          </Section>

          {/* Section 2: Research Experience */}
          <Section 
            icon={<Brain />} 
            title="Research Journey: From Theory to Impact" 
            color="purple"
          >
            <p className="text-gray-300 leading-relaxed mb-4">
              My research experience has been focused on developing production-ready deep learning systems 
              that solve tangible problems. My work on <span className="text-neon-purple font-semibold">
              Real-Time Object Detection for Edge Devices</span> exemplifies this approach—achieving 97.5% 
              mAP while optimizing for deployment on resource-constrained devices like the Jetson Nano.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              One of my most impactful projects has been developing a <span className="text-neon-purple font-semibold">
              Bengali Automatic Number Plate Recognition (ANPR) system</span> that processes 30+ vehicles 
              per minute. This project required not just deep learning expertise, but also understanding 
              of the unique challenges posed by Bengali script recognition, varying lighting conditions, 
              and real-time processing requirements.
            </p>
            <p className="text-gray-300 leading-relaxed">
              These experiences have reinforced my conviction that the most valuable research is that which 
              can be deployed and used by real people. I believe that AI research should not exist in 
              isolation but should actively seek pathways to implementation and impact.
            </p>
          </Section>

          {/* Section 3: Academic Goals */}
          <Section 
            icon={<Target />} 
            title="Academic Aspirations" 
            color="pink"
          >
            <p className="text-gray-300 leading-relaxed mb-4">
              Looking ahead, I am driven by the desire to pursue graduate studies in Machine Learning and 
              Computer Vision at a leading research institution. My goal is to contribute to advancing the 
              state-of-the-art in efficient deep learning models that can be deployed in resource-constrained 
              environments.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <Card className="border-primary/20 bg-card/50">
                <CardContent className="pt-4">
                  <h4 className="font-bold text-neon-cyan mb-2">Short-term Goals</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-neon-cyan mt-1 flex-shrink-0" />
                      <span>Complete BS with distinction (CGPA 3.9+)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-neon-cyan mt-1 flex-shrink-0" />
                      <span>Publish research at top-tier venues (NeurIPS, ICML, CVPR)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-neon-cyan mt-1 flex-shrink-0" />
                      <span>Secure admission to a leading ML graduate program</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-card/50">
                <CardContent className="pt-4">
                  <h4 className="font-bold text-neon-purple mb-2">Long-term Vision</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-neon-purple mt-1 flex-shrink-0" />
                      <span>Earn Ph.D. in Machine Learning/Computer Vision</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-neon-purple mt-1 flex-shrink-0" />
                      <span>Lead research in efficient AI for developing regions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-neon-purple mt-1 flex-shrink-0" />
                      <span>Bridge academia and industry through applied research</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </Section>

          {/* Section 4: Research Interests */}
          <Section 
            icon={<Code2 />} 
            title="Research Interests" 
            color="cyan"
          >
            <p className="text-gray-300 leading-relaxed mb-4">
              My research interests lie at the intersection of computer vision, efficient deep learning, 
              and real-world deployment:
            </p>
            <div className="grid md:grid-cols-3 gap-4 my-6">
              {[
                { title: "Efficient Vision Models", desc: "Model compression, pruning, and knowledge distillation for edge deployment" },
                { title: "Real-Time Object Detection", desc: "Low-latency inference for autonomous systems and surveillance" },
                { title: "MLOps & Deployment", desc: "Bridging research and production with robust ML pipelines" },
              ].map((interest, idx) => (
                <Card key={idx} className="border-primary/20 bg-card/50">
                  <CardContent className="pt-4">
                    <h4 className="font-bold text-sm text-neon-cyan mb-2">{interest.title}</h4>
                    <p className="text-xs text-gray-400">{interest.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Section>

          {/* Section 5: Why Graduate Studies */}
          <Section 
            icon={<Rocket />} 
            title="Why Graduate Studies" 
            color="purple"
          >
            <p className="text-gray-300 leading-relaxed mb-4">
              Graduate studies represent the natural next step in my journey. While my undergraduate 
              experience has provided a strong foundation, I recognize that addressing the challenges 
              I&apos;m passionate about requires deeper expertise, access to cutting-edge resources, and 
              mentorship from leading researchers in the field.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I am particularly drawn to programs that emphasize both theoretical rigor and practical 
              application, where I can collaborate with faculty and peers who share my vision of 
              developing AI systems that make a tangible difference in people&apos;s lives.
            </p>
          </Section>

          {/* Section 6: Global Impact */}
          <Section 
            icon={<Globe />} 
            title="Vision for Global Impact" 
            color="pink"
          >
            <p className="text-gray-300 leading-relaxed mb-4">
              Coming from Bangladesh, I have a unique perspective on the challenges facing developing 
              nations—and the transformative potential of AI to address them. From improving traffic 
              management in congested cities to enabling better healthcare diagnostics in underserved 
              communities, I believe AI can be a great equalizer.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My ultimate goal is to contribute to making AI accessible and beneficial for all, 
              regardless of geographic or economic circumstances. This means developing efficient 
              models that can run on affordable hardware, creating solutions that address local 
              needs while being globally scalable, and training the next generation of AI 
              practitioners in developing regions.
            </p>
          </Section>

          {/* Closing */}
          <Section 
            icon={<Heart />} 
            title="In Conclusion" 
            color="cyan"
          >
            <p className="text-gray-300 leading-relaxed mb-4">
              As I stand at this pivotal moment in my academic journey, I am filled with both 
              gratitude for the opportunities I&apos;ve had and excitement for what lies ahead. My 
              experiences have prepared me well for the rigors of graduate study, and my passion 
              for AI research continues to grow with each project I undertake.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I am committed to contributing meaningfully to the field of machine learning, 
              to collaborating with fellow researchers who share my vision, and to developing 
              AI systems that have a lasting positive impact on society. I look forward to the 
              opportunity to continue my education and research at an institution that will 
              challenge me to reach my full potential.
            </p>
          </Section>
        </motion.article>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-bold mb-4">Interested in Collaborating?</h3>
              <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                I&apos;m always open to discussing research opportunities, collaborations, 
                or just connecting with fellow AI enthusiasts.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/#contact">
                  <Button className="gap-2">
                    <Target className="w-4 h-4" />
                    Get in Touch
                  </Button>
                </Link>
                <Link href="/credentials">
                  <Button variant="outline" className="gap-2">
                    <BookOpen className="w-4 h-4" />
                    View Credentials
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

// Section Component
function Section({ 
  icon, 
  title, 
  color, 
  children 
}: { 
  icon: React.ReactNode; 
  title: string; 
  color: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-2 rounded-lg bg-neon-${color}/10 border border-neon-${color}/30`}>
          <span className={`text-neon-${color}`}>{icon}</span>
        </div>
        <h2 className={`text-2xl font-bold text-neon-${color}`}>{title}</h2>
      </div>
      <div className="pl-0 md:pl-12">
        {children}
      </div>
    </motion.section>
  );
}
