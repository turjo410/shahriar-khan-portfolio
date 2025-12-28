"use client";

import { Calendar, Book, Code, Coffee, Target, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function NowPage() {
  const lastUpdated = "November 16, 2025";

  return (
    <div className="min-h-screen py-20">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            What I&apos;m Doing Now
          </h1>
          <p className="text-xl text-gray-400">
            A snapshot of my current focus and activities
          </p>
          <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
            <Calendar className="w-4 h-4" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </motion.div>

        {/* Current Work */}
        <Section icon={<Code />} title="Current Work" color="cyan">
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-cyan-400">→</span>
              <span className="text-gray-300">
                Building production-ready MLOps pipelines at <strong>Eastern Washington University</strong>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-400">→</span>
              <span className="text-gray-300">
                Teaching Assistant for <strong>CSCD 211 (Object-Oriented Programming)</strong> - helping students master Java and OOP concepts
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-400">→</span>
              <span className="text-gray-300">
                Contributing to open-source AI/ML projects on GitHub
              </span>
            </li>
          </ul>
        </Section>

        {/* Learning */}
        <Section icon={<Book />} title="Learning" color="purple">
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-purple-400">→</span>
              <span className="text-gray-300">
                <strong>Advanced MLOps</strong> - Kubernetes, model monitoring, and distributed training
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-400">→</span>
              <span className="text-gray-300">
                <strong>LLM Fine-tuning</strong> - Exploring LoRA, QLoRA, and PEFT techniques
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-400">→</span>
              <span className="text-gray-300">
                <strong>System Design</strong> - Building scalable distributed systems
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-400">→</span>
              <span className="text-gray-300">
                <strong>Rust</strong> - For high-performance systems programming
              </span>
            </li>
          </ul>
        </Section>

        {/* Side Projects */}
        <Section icon={<Target />} title="Side Projects" color="pink">
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-pink-400">→</span>
              <span className="text-gray-300">
                <strong>Research Paper Summarizer</strong> - AI tool to extract key insights from academic papers
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-pink-400">→</span>
              <span className="text-gray-300">
                <strong>Developer Portfolio</strong> - This website! Building with Next.js 14, Framer Motion, and Tailwind CSS
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-pink-400">→</span>
              <span className="text-gray-300">
                <strong>AI Code Reviewer</strong> - Automated PR review system using LLMs
              </span>
            </li>
          </ul>
        </Section>

        {/* Reading */}
        <Section icon={<Book />} title="Currently Reading" color="cyan">
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-cyan-400">📖</span>
              <div>
                <strong className="text-gray-200">Designing Data-Intensive Applications</strong>
                <span className="text-gray-400"> by Martin Kleppmann</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-400">📖</span>
              <div>
                <strong className="text-gray-200">The Hundred-Page Machine Learning Book</strong>
                <span className="text-gray-400"> by Andriy Burkov</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-400">📄</span>
              <div>
                <strong className="text-gray-200">Attention Is All You Need</strong>
                <span className="text-gray-400"> - Re-reading the Transformer paper</span>
              </div>
            </li>
          </ul>
        </Section>

        {/* Goals */}
        <Section icon={<TrendingUp />} title="2025 Goals" color="purple">
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-purple-400">🎯</span>
              <span className="text-gray-300">
                Publish research paper at top-tier ML conference (NeurIPS, ICML, or ICLR)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-400">🎯</span>
              <span className="text-gray-300">
                Contribute to 3+ major open-source ML projects
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-400">🎯</span>
              <span className="text-gray-300">
                Land ML Engineer internship at top tech company
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-400">🎯</span>
              <span className="text-gray-300">
                Master Kubernetes and cloud-native ML deployment
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-400">🎯</span>
              <span className="text-gray-300">
                Build and deploy 5 production ML systems
              </span>
            </li>
          </ul>
        </Section>

        {/* Personal */}
        <Section icon={<Coffee />} title="Life & Hobbies" color="pink">
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-pink-400">☕</span>
              <span className="text-gray-300">
                Exploring coffee shops in Cheney and trying different brewing methods
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-pink-400">📸</span>
              <span className="text-gray-300">
                Photography - capturing moments at university events as VP of Photography Club
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-pink-400">🎮</span>
              <span className="text-gray-300">
                Playing strategy games and competitive programming challenges
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-pink-400">🏃</span>
              <span className="text-gray-300">
                Staying active with evening runs around campus
              </span>
            </li>
          </ul>
        </Section>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-6 rounded-xl bg-gradient-to-r from-gray-900/50 to-gray-800/30 border border-gray-700/50"
        >
          <p className="text-gray-400 text-sm">
            <strong>What is a /now page?</strong> It&apos;s a regularly updated page that tells you what I&apos;m focused on right now. 
            Inspired by <a href="https://nownownow.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Derek Sivers</a>.
          </p>
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-2 rounded-lg border ${colorClasses[color]}`}>
          {icon}
        </div>
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      <div className="pl-6 md:pl-12">{children}</div>
    </motion.div>
  );
}
