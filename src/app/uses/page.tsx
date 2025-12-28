"use client";

import { motion } from "framer-motion";
import { Laptop, Code, Palette, Headphones, Coffee, BookOpen, Cloud } from "lucide-react";

export default function UsesPage() {
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
            Tools & Setup
          </h1>
          <p className="text-xl text-gray-400">
            The hardware and software I use daily for development and productivity
          </p>
        </motion.div>

        {/* Hardware */}
        <Section icon={<Laptop />} title="Hardware" color="cyan">
          <Item
            name="MacBook Pro 16'' M2 Pro"
            description="Primary development machine - 32GB RAM, 1TB SSD. Perfect for ML training and development."
          />
          <Item
            name="Custom PC"
            description="AMD Ryzen 9 5900X, NVIDIA RTX 3090, 64GB RAM - For deep learning experiments and gaming."
          />
          <Item
            name="LG 34'' Ultrawide Monitor"
            description="Main display for coding. The extra screen real estate is a game-changer."
          />
          <Item
            name="iPad Pro 12.9''"
            description="Reading research papers, sketching architectures, and note-taking."
          />
        </Section>

        {/* Development Tools */}
        <Section icon={<Code />} title="Development Tools" color="purple">
          <Item
            name="VS Code"
            description="Primary editor with Vim keybindings. Extensions: Copilot, Python, Jupyter, GitLens."
          />
          <Item
            name="iTerm2 + Oh My Zsh"
            description="Terminal with Powerlevel10k theme. Integrated with tmux for session management."
          />
          <Item
            name="Git + GitHub"
            description="Version control and collaboration. Using conventional commits and semantic versioning."
          />
          <Item
            name="Docker + Kubernetes"
            description="Containerization and orchestration for reproducible ML environments."
          />
          <Item
            name="Postman"
            description="API development and testing. Essential for backend work."
          />
        </Section>

        {/* AI/ML Stack */}
        <Section icon={<Cloud />} title="AI/ML Stack" color="pink">
          <Item
            name="PyTorch"
            description="Primary deep learning framework. Love the dynamic computation graph."
          />
          <Item
            name="TensorFlow / JAX"
            description="For production deployments and research experiments."
          />
          <Item
            name="Jupyter Lab"
            description="Interactive notebooks for experimentation and visualization."
          />
          <Item
            name="Weights & Biases"
            description="Experiment tracking, model versioning, and hyperparameter tuning."
          />
          <Item
            name="MLflow"
            description="ML lifecycle management - from experimentation to production."
          />
          <Item
            name="HuggingFace Transformers"
            description="For all NLP tasks. Incredible library with pre-trained models."
          />
        </Section>

        {/* Design & Content */}
        <Section icon={<Palette />} title="Design & Content" color="cyan">
          <Item
            name="Figma"
            description="UI/UX design and prototyping. Collaborative design with developers."
          />
          <Item
            name="Excalidraw"
            description="Quick diagrams and system architecture sketches."
          />
          <Item
            name="Notion"
            description="Note-taking, documentation, and project management. My second brain."
          />
          <Item
            name="Obsidian"
            description="Personal knowledge management with bidirectional linking."
          />
        </Section>

        {/* Productivity */}
        <Section icon={<BookOpen />} title="Productivity" color="purple">
          <Item
            name="Raycast"
            description="App launcher and productivity tool. Replaced Spotlight completely."
          />
          <Item
            name="Rectangle"
            description="Window management with keyboard shortcuts. Essential on macOS."
          />
          <Item
            name="Todoist"
            description="Task management and GTD system. Keeps me organized."
          />
          <Item
            name="Spark"
            description="Email client with smart inbox and snooze features."
          />
          <Item
            name="1Password"
            description="Password manager. Security is non-negotiable."
          />
        </Section>

        {/* Accessories */}
        <Section icon={<Headphones />} title="Accessories" color="pink">
          <Item
            name="Sony WH-1000XM5"
            description="Noise-cancelling headphones for deep work sessions."
          />
          <Item
            name="Keychron K3 Pro"
            description="Low-profile mechanical keyboard with brown switches. Perfect typing feel."
          />
          <Item
            name="Logitech MX Master 3S"
            description="Best mouse for productivity with customizable buttons."
          />
          <Item
            name="Blue Yeti Microphone"
            description="For meetings, presentations, and content creation."
          />
        </Section>

        {/* Caffeine */}
        <Section icon={<Coffee />} title="Caffeine & Fuel" color="cyan">
          <Item
            name="Aeropress"
            description="Quick, delicious coffee. Perfect for coding sessions."
          />
          <Item
            name="Nespresso Vertuo"
            description="When I need caffeine fast. Espresso and lungo options."
          />
          <Item
            name="Local Coffee Shops"
            description="Change of scenery for creative work. Support local businesses!"
          />
        </Section>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-6 rounded-xl bg-gradient-to-r from-gray-900/50 to-gray-800/30 border border-gray-700/50"
        >
          <p className="text-gray-400 text-sm">
            <strong>Note:</strong> This setup has evolved over years of experimentation. 
            What matters most isn&apos;t the tools, but how you use them to solve problems and create value.
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
      <div className="space-y-6">{children}</div>
    </motion.div>
  );
}

function Item({ name, description }: { name: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="pl-6 md:pl-12"
    >
      <h3 className="text-lg font-semibold text-gray-200 mb-1">{name}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}
