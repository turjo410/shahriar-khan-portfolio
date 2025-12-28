"use client";

import { motion } from "framer-motion";
import { Heart, Zap, Target, Users, Coffee, Camera, Brain, Sparkles, MapPin } from "lucide-react";
import Link from "next/link";
import { OptimizedImage } from "@/components/optimized-image";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            More About Me
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Beyond the resume - my story, values, and what makes me tick
          </p>
        </motion.div>

        {/* Profile Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="max-w-md mx-auto">
            <OptimizedImage
              src="/images/profile/portrait.jpg"
              alt="Shahriar Khan - Software Engineer"
              width={600}
              height={600}
              priority
              className="rounded-2xl"
              zoomable={false}
            />
          </div>
        </motion.div>

        {/* Story Section */}
        <Section icon={<Sparkles />} title="My Story" color="cyan">
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              I discovered my passion for AI and machine learning during my sophomore year at Eastern Washington University. 
              What started as curiosity about how Netflix recommendations work turned into a deep obsession with building 
              intelligent systems that solve real problems.
            </p>
            <p>
              My journey hasn&apos;t been linear. I spent countless late nights debugging neural networks, reading research papers 
              I barely understood, and building projects that sometimes failed spectacularly. But each failure taught me something 
              valuable about perseverance, problem-solving, and the importance of asking the right questions.
            </p>
            <p>
              Today, I&apos;m focused on bridging the gap between research and production. I believe the most impactful AI systems 
              are those that actually get deployed and used by real people. That&apos;s why I&apos;m passionate about MLOps, system 
              design, and building robust, scalable solutions.
            </p>
          </div>
        </Section>

        {/* Values */}
        <Section icon={<Heart />} title="Core Values" color="pink">
          <div className="grid md:grid-cols-2 gap-6">
            <ValueCard
              title="Continuous Learning"
              description="Technology evolves rapidly. I commit to learning something new every day, whether it's a research paper, new framework, or better coding practice."
              icon="📚"
            />
            <ValueCard
              title="Impact Over Hype"
              description="I focus on building solutions that solve real problems rather than chasing trending tech. Value creation > buzzwords."
              icon="🎯"
            />
            <ValueCard
              title="Open Collaboration"
              description="Best ideas come from diverse perspectives. I believe in open-source contribution, knowledge sharing, and lifting others up."
              icon="🤝"
            />
            <ValueCard
              title="Quality & Craftsmanship"
              description="Code is read more than written. I take pride in writing clean, maintainable, well-tested code with thoughtful architecture."
              icon="✨"
            />
          </div>
        </Section>

        {/* Working Style */}
        <Section icon={<Zap />} title="How I Work" color="purple">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-purple-400">My Approach</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span><strong>Deep Work:</strong> I block out 3-4 hour chunks for focused, uninterrupted coding</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span><strong>Research First:</strong> I spend time understanding the problem before jumping into code</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span><strong>Iterative Development:</strong> Ship fast, get feedback, iterate quickly</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span><strong>Documentation:</strong> I document as I code - future me always thanks present me</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Best Environment</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-cyan-400">→</span>
                  <span><strong>Early Mornings:</strong> 6 AM - 10 AM is my peak productivity window</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400">→</span>
                  <span><strong>Coffee Shops:</strong> Background noise helps me focus on complex problems</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400">→</span>
                  <span><strong>Music:</strong> Lo-fi beats or instrumental music during coding sessions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400">→</span>
                  <span><strong>Collaboration:</strong> Love pair programming and whiteboard sessions</span>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Interests & Hobbies */}
        <Section icon={<Coffee />} title="Beyond Code" color="cyan">
          <div className="grid md:grid-cols-3 gap-6">
            <HobbyCard
              icon={<Camera className="w-8 h-8" />}
              title="Photography"
              description="VP of Photography Club at EWU. I love capturing moments and storytelling through images."
              color="pink"
            />
            <HobbyCard
              icon={<Coffee className="w-8 h-8" />}
              title="Coffee Enthusiast"
              description="Exploring different brewing methods and roasts. Currently perfecting my Aeropress technique."
              color="cyan"
            />
            <HobbyCard
              icon={<Brain className="w-8 h-8" />}
              title="Competitive Programming"
              description="Love solving algorithmic puzzles on LeetCode and participating in coding competitions."
              color="purple"
            />
          </div>
        </Section>

        {/* Fun Facts */}
        <Section icon={<Sparkles />} title="Fun Facts" color="pink">
          <div className="grid md:grid-cols-2 gap-4">
            <FunFact emoji="🎮" fact="Built my first computer at age 14 - a gaming PC that barely ran Minecraft" />
            <FunFact emoji="📚" fact="Read 24 research papers in a single week during a deep learning course" />
            <FunFact emoji="☕" fact="Once coded for 36 hours straight fueled by coffee and determination" />
            <FunFact emoji="🏆" fact="Won 1st place at EWU's Hackathon with an AI-powered study assistant" />
            <FunFact emoji="🌍" fact="Taught myself 3 programming languages by building projects" />
            <FunFact emoji="🎨" fact="Designed all my own portfolio iterations - this is version 7!" />
          </div>
        </Section>

        {/* Location & Contact Preference */}
        <Section icon={<MapPin />} title="Location & Availability" color="purple">
          <div className="space-y-4 text-gray-300">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
              <div>
                <strong>Currently Based:</strong> Cheney, Washington (Eastern Washington University)
                <br />
                <span className="text-sm text-gray-400">Open to remote opportunities and relocation for the right role</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
              <div>
                <strong>Looking For:</strong> ML Engineer internships and full-time roles starting Summer 2025
                <br />
                <span className="text-sm text-gray-400">Particularly interested in MLOps, AI infrastructure, and production ML systems</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Target className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
              <div>
                <strong>Ideal Projects:</strong> Building AI systems that solve real-world problems at scale
                <br />
                <span className="text-sm text-gray-400">Especially excited about healthcare, education, and climate tech applications</span>
              </div>
            </div>
          </div>
        </Section>

        {/* What I'm Looking For */}
        <Section icon={<Target />} title="What I&apos;m Looking For" color="cyan">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-gray-700/50">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I&apos;m seeking opportunities where I can work with talented teams on challenging ML problems. 
              I thrive in environments that value learning, experimentation, and pushing boundaries. If you&apos;re 
              building something that requires a passionate engineer who loves both the research and production 
              sides of ML, let&apos;s talk!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-medium transition-all duration-300 hover-glow inline-flex items-center gap-2"
              >
                <span>Get in Touch</span>
                <span>→</span>
              </Link>
              <Link
                href="/now"
                className="px-6 py-3 rounded-lg border border-gray-700 hover:border-cyan-500 text-gray-300 hover:text-cyan-400 font-medium transition-all duration-300 inline-flex items-center gap-2"
              >
                <span>See What I&apos;m Doing Now</span>
              </Link>
            </div>
          </div>
        </Section>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-medium text-gray-300 italic">
            &quot;The best way to predict the future is to build it.&quot;
          </blockquote>
          <p className="mt-4 text-gray-500">— Alan Kay</p>
        </motion.div>
      </div>
    </div>
  );
}

function Section({
  icon,
  title,
  color,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  color: "cyan" | "purple" | "pink";
  children: React.ReactNode;
}) {
  const colorClasses = {
    cyan: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
    purple: "text-purple-400 border-purple-500/30 bg-purple-500/10",
    pink: "text-pink-400 border-pink-500/30 bg-pink-500/10",
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-20"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className={`p-2 rounded-lg border ${colorClasses[color]}`}>
          {icon}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}

function ValueCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300"
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-200">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}

function HobbyCard({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: "cyan" | "purple" | "pink";
}) {
  const colorClasses = {
    cyan: "text-cyan-400 border-cyan-500/30",
    purple: "text-purple-400 border-purple-500/30",
    pink: "text-pink-400 border-pink-500/30",
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
    >
      <div className={`mb-4 ${colorClasses[color]}`}>{icon}</div>
      <h3 className="text-lg font-bold mb-2 text-gray-200">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </motion.div>
  );
}

function FunFact({ emoji, fact }: { emoji: string; fact: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-br from-gray-900/30 to-gray-800/20 border border-gray-700/30"
    >
      <span className="text-2xl flex-shrink-0">{emoji}</span>
      <p className="text-sm text-gray-300">{fact}</p>
    </motion.div>
  );
}
