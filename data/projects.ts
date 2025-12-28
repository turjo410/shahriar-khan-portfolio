import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "mlops-face-recognition",
    title: "MLOps Face Recognition System",
    tagline: "Production-ready face recognition with 99.2% accuracy",
    description: "Built an end-to-end MLOps pipeline for real-time face recognition using PyTorch, FastAPI, and Docker. Deployed on AWS with CI/CD automation.",
    longDescription: "Developed a complete MLOps pipeline for face recognition that handles everything from data ingestion to model serving. The system uses a custom-trained ResNet model with triplet loss, achieving 99.2% accuracy on LFW dataset. Implemented comprehensive monitoring, automated retraining, and A/B testing capabilities.",
    category: "AI/ML",
    featured: true,
    
    thumbnail: "/projects/face-recognition/thumbnail.jpg",
    images: [
      { src: "/projects/face-recognition/architecture.jpg", alt: "System Architecture", caption: "End-to-end MLOps pipeline architecture" },
      { src: "/projects/face-recognition/dashboard.jpg", alt: "Monitoring Dashboard", caption: "Real-time monitoring with Grafana" },
      { src: "/projects/face-recognition/results.jpg", alt: "Model Results", caption: "99.2% accuracy on LFW dataset" },
    ],
    
    demo: "https://face-recognition-demo.vercel.app",
    github: "https://github.com/yourusername/mlops-face-recognition",
    
    technologies: [
      { name: "PyTorch", icon: "🔥", category: "ai" },
      { name: "FastAPI", icon: "⚡", category: "backend" },
      { name: "Docker", icon: "🐳", category: "devops" },
      { name: "AWS", icon: "☁️", category: "devops" },
      { name: "PostgreSQL", icon: "🐘", category: "database" },
      { name: "Redis", icon: "🔴", category: "database" },
    ],
    techStack: ["PyTorch", "FastAPI", "Docker", "Kubernetes", "AWS ECS", "PostgreSQL", "Redis", "Grafana", "Prometheus"],
    
    challenges: [
      {
        title: "Real-time Performance",
        description: "Initial model inference took 800ms, too slow for real-time applications requiring <200ms response.",
        solution: "Implemented model quantization (INT8), batch processing with Redis queue, and TensorRT optimization, reducing latency to 150ms while maintaining 99%+ accuracy.",
      },
      {
        title: "Data Drift Detection",
        description: "Model performance degraded over time as user demographics shifted, but no automated detection existed.",
        solution: "Built custom monitoring system tracking prediction confidence distributions, embedding space drift using KL divergence, and automated retraining triggers when drift exceeds threshold.",
      },
      {
        title: "Scalability Under Load",
        description: "System crashed at 100+ concurrent users due to memory issues and GPU bottlenecks.",
        solution: "Implemented horizontal auto-scaling with Kubernetes, GPU sharing with CUDA streams, and Redis-based request batching. System now handles 1000+ concurrent users.",
      },
    ],
    
    approach: "Started with research on state-of-the-art face recognition architectures (ArcFace, CosFace). Built data pipeline processing 500K+ face images with augmentation. Trained custom ResNet-50 with triplet loss and online hard mining. Containerized with Docker and deployed on AWS ECS with auto-scaling. Implemented monitoring with Prometheus/Grafana and automated CI/CD with GitHub Actions.",
    
    outcome: "Successfully deployed to production serving 10K+ daily users. Achieved 99.2% accuracy on LFW benchmark. Reduced operational costs by 40% through auto-scaling and GPU optimization. System processes 500+ requests/minute with 150ms p95 latency. Gained hands-on experience with production ML systems and MLOps best practices.",
    
    metrics: [
      { label: "Accuracy", value: "99.2%", description: "On LFW dataset" },
      { label: "Latency", value: "150ms", description: "p95 response time" },
      { label: "Throughput", value: "500/min", description: "Requests per minute" },
      { label: "Uptime", value: "99.9%", description: "6 months running" },
      { label: "Users", value: "10K+", description: "Daily active users" },
      { label: "Cost Reduction", value: "40%", description: "Through optimization" },
    ],
    
    startDate: "2024-06",
    endDate: "2024-10",
    duration: "4 months",
    
    role: "Lead ML Engineer",
    status: "completed",
    highlights: [
      "Achieved 99.2% accuracy on LFW benchmark, exceeding industry standard",
      "Reduced inference latency from 800ms to 150ms through optimization",
      "Built complete MLOps pipeline with automated monitoring and retraining",
      "Deployed on AWS with auto-scaling, handling 1000+ concurrent users",
      "Reduced operational costs by 40% through GPU optimization",
    ],
  },
  
  {
    slug: "ai-code-reviewer",
    title: "AI-Powered Code Review Assistant",
    tagline: "Automated code review with LLMs, reducing review time by 60%",
    description: "Built an AI assistant that automatically reviews pull requests, detects bugs, suggests improvements, and ensures code quality standards using GPT-4 and custom fine-tuned models.",
    longDescription: "Developed an intelligent code review system that integrates with GitHub to automatically analyze pull requests. Uses a combination of static analysis, GPT-4 for contextual understanding, and custom fine-tuned models for project-specific patterns. The system provides actionable feedback on code quality, potential bugs, security vulnerabilities, and best practices.",
    category: "AI/ML",
    featured: true,
    
    thumbnail: "/projects/ai-reviewer/thumbnail.jpg",
    images: [
      { src: "/projects/ai-reviewer/interface.jpg", alt: "Review Interface", caption: "AI-generated code review comments" },
      { src: "/projects/ai-reviewer/metrics.jpg", alt: "Performance Metrics", caption: "60% reduction in review time" },
      { src: "/projects/ai-reviewer/architecture.jpg", alt: "System Design", caption: "Multi-stage review pipeline" },
    ],
    
    demo: "https://ai-code-reviewer.vercel.app",
    github: "https://github.com/yourusername/ai-code-reviewer",
    
    technologies: [
      { name: "GPT-4", icon: "🤖", category: "ai" },
      { name: "LangChain", icon: "⛓️", category: "ai" },
      { name: "Next.js", icon: "▲", category: "frontend" },
      { name: "Python", icon: "🐍", category: "backend" },
      { name: "GitHub API", icon: "🐙", category: "tool" },
    ],
    techStack: ["GPT-4", "LangChain", "Next.js 14", "Python", "FastAPI", "GitHub API", "Pinecone", "Tailwind CSS"],
    
    challenges: [
      {
        title: "Context Length Limitations",
        description: "Large PRs with 1000+ lines exceeded GPT-4's context window, causing incomplete reviews.",
        solution: "Implemented intelligent chunking strategy using AST parsing to split by logical code blocks. Built RAG system with Pinecone to retrieve relevant context from codebase history and documentation.",
      },
      {
        title: "False Positive Reduction",
        description: "Initial version flagged 40% false positives, creating noise and reducing developer trust.",
        solution: "Fine-tuned CodeLlama on 10K labeled PR reviews from team's history. Implemented confidence scoring and only surface high-confidence issues. Added feedback loop for continuous improvement.",
      },
      {
        title: "Real-time Performance",
        description: "Reviews took 2-3 minutes for medium PRs, too slow for developer workflow integration.",
        solution: "Implemented streaming responses, parallel processing of multiple files, and caching of common patterns. Reduced review time to <30 seconds for typical PRs.",
      },
    ],
    
    approach: "Researched existing code review tools and LLM capabilities. Built multi-stage pipeline: static analysis with ESLint/Pylint, semantic understanding with GPT-4, and custom fine-tuned models for project patterns. Integrated with GitHub webhooks for automatic triggering. Implemented RAG system for codebase context. Added confidence scoring and feedback mechanism.",
    
    outcome: "Successfully deployed across 3 development teams. Reduced average code review time by 60% (from 2 hours to 45 minutes). Caught 85% of common bugs before human review. Improved code quality metrics by 30%. Received positive feedback from developers for actionable suggestions. System now reviewing 100+ PRs daily.",
    
    metrics: [
      { label: "Review Time", value: "-60%", description: "Reduction in human review time" },
      { label: "Bug Detection", value: "85%", description: "Caught before deployment" },
      { label: "Accuracy", value: "92%", description: "Relevant suggestions" },
      { label: "PRs Reviewed", value: "100+", description: "Per day across teams" },
      { label: "Code Quality", value: "+30%", description: "Improvement in metrics" },
      { label: "Developer Satisfaction", value: "4.5/5", description: "Average rating" },
    ],
    
    startDate: "2024-08",
    endDate: "2024-11",
    duration: "3 months",
    
    role: "Full-Stack AI Engineer",
    status: "completed",
    highlights: [
      "Reduced code review time by 60% across 3 development teams",
      "Achieved 92% accuracy in generating relevant code suggestions",
      "Built RAG system handling 50K+ lines of codebase context",
      "Processing 100+ pull requests daily with <30s review time",
      "Implemented feedback loop improving model accuracy over time",
    ],
  },
  
  {
    slug: "neural-style-transfer-app",
    title: "Real-Time Neural Style Transfer",
    tagline: "Transform photos into artwork in real-time using AI",
    description: "Mobile app that applies artistic styles to photos and videos in real-time using optimized neural style transfer models running on-device.",
    longDescription: "Created a mobile application that brings AI-powered artistic style transfer to users' fingertips. Implemented optimized neural networks that run entirely on-device for privacy and speed. Users can transform their photos into various artistic styles inspired by famous paintings or create custom styles from their own images.",
    category: "Mobile",
    featured: true,
    
    thumbnail: "/projects/style-transfer/thumbnail.jpg",
    images: [
      { src: "/projects/style-transfer/demo.jpg", alt: "App Demo", caption: "Real-time style transfer in action" },
      { src: "/projects/style-transfer/styles.jpg", alt: "Style Gallery", caption: "20+ pre-trained artistic styles" },
      { src: "/projects/style-transfer/performance.jpg", alt: "Performance", caption: "30fps on mobile devices" },
    ],
    
    demo: "https://apps.apple.com/style-transfer",
    github: "https://github.com/yourusername/neural-style-transfer",
    
    technologies: [
      { name: "TensorFlow Lite", icon: "🔥", category: "ai" },
      { name: "React Native", icon: "⚛️", category: "frontend" },
      { name: "Swift", icon: "🍎", category: "frontend" },
      { name: "CoreML", icon: "📱", category: "ai" },
    ],
    techStack: ["TensorFlow Lite", "React Native", "Swift", "CoreML", "Metal", "Expo"],
    
    challenges: [
      {
        title: "On-Device Performance",
        description: "Original models were too large (50MB+) and slow (5s per image) for mobile devices.",
        solution: "Implemented model pruning and quantization, reducing size to 3MB. Used Metal GPU acceleration achieving 30fps real-time processing. Applied knowledge distillation from larger models.",
      },
      {
        title: "Quality vs Speed Tradeoff",
        description: "Fast models produced low-quality results with artifacts, while high-quality models were too slow.",
        solution: "Designed hybrid approach: fast preview model (30fps) for real-time feedback, high-quality model for final render. Implemented progressive enhancement showing improving quality.",
      },
      {
        title: "Battery Consumption",
        description: "Continuous AI processing drained battery quickly, limiting app usage to <10 minutes.",
        solution: "Optimized inference pipeline with frame skipping, adaptive resolution, and thermal throttling. Implemented efficient caching and lazy loading. Increased usage time to 60+ minutes.",
      },
    ],
    
    approach: "Researched mobile AI optimization techniques and benchmarked existing apps. Trained custom style transfer models using TensorFlow and converted to TensorFlow Lite/CoreML. Implemented efficient rendering pipeline with Metal. Built React Native UI with native modules for AI processing. Optimized for battery life and thermal management.",
    
    outcome: "Published to App Store with 50K+ downloads in first 3 months. Achieved 4.7/5 rating with users praising speed and quality. Featured in 'App of the Day' on App Store. Real-time processing at 30fps on iPhone 12+. Models run entirely on-device ensuring user privacy. Learned mobile AI optimization and cross-platform development.",
    
    metrics: [
      { label: "Downloads", value: "50K+", description: "In first 3 months" },
      { label: "Rating", value: "4.7/5", description: "App Store average" },
      { label: "FPS", value: "30", description: "Real-time processing" },
      { label: "Model Size", value: "3MB", description: "94% reduction" },
      { label: "Battery Life", value: "60+ min", description: "Continuous usage" },
      { label: "Styles", value: "20+", description: "Pre-trained options" },
    ],
    
    startDate: "2024-03",
    endDate: "2024-07",
    duration: "4 months",
    
    role: "Mobile AI Developer",
    status: "completed",
    highlights: [
      "50K+ downloads with 4.7/5 rating on App Store",
      "Achieved 30fps real-time style transfer on mobile devices",
      "Reduced model size by 94% (50MB → 3MB) through optimization",
      "Featured as 'App of the Day' on Apple App Store",
      "100% on-device processing ensuring user privacy",
    ],
  },
  
  {
    slug: "research-paper-summarizer",
    title: "Research Paper Summarizer",
    tagline: "AI tool to summarize academic papers and extract key insights",
    description: "Built an AI-powered tool that reads academic papers, extracts key findings, generates summaries, and creates knowledge graphs of relationships between papers.",
    longDescription: "Developed a comprehensive research assistant that helps academics and students quickly understand complex research papers. Uses advanced NLP techniques to extract methodology, results, and conclusions. Generates citation networks and knowledge graphs showing relationships between papers and concepts.",
    category: "AI/ML",
    featured: false,
    
    thumbnail: "/projects/paper-summarizer/thumbnail.jpg",
    images: [
      { src: "/projects/paper-summarizer/interface.jpg", alt: "Web Interface" },
      { src: "/projects/paper-summarizer/knowledge-graph.jpg", alt: "Knowledge Graph" },
      { src: "/projects/paper-summarizer/summary.jpg", alt: "Generated Summary" },
    ],
    
    demo: "https://paper-summarizer.vercel.app",
    github: "https://github.com/yourusername/paper-summarizer",
    
    technologies: [
      { name: "GPT-4", icon: "🤖", category: "ai" },
      { name: "SciBERT", icon: "📚", category: "ai" },
      { name: "Neo4j", icon: "🔗", category: "database" },
      { name: "Next.js", icon: "▲", category: "frontend" },
    ],
    techStack: ["GPT-4", "SciBERT", "LangChain", "Neo4j", "Next.js", "Python", "FastAPI"],
    
    challenges: [
      {
        title: "PDF Parsing Accuracy",
        description: "Complex paper layouts with multi-column text, equations, and figures caused parsing errors.",
        solution: "Implemented custom PDF parser using PyMuPDF with layout analysis. Built specialized extractors for equations (LaTeX), tables, and figures. Achieved 95% extraction accuracy.",
      },
      {
        title: "Domain-Specific Understanding",
        description: "General LLMs struggled with technical terminology and domain-specific context in papers.",
        solution: "Fine-tuned SciBERT on 100K research abstracts. Implemented domain-aware prompting with examples. Built terminology database for context injection.",
      },
      {
        title: "Citation Network Scalability",
        description: "Building knowledge graphs for 1000+ papers overwhelmed memory and took hours to process.",
        solution: "Migrated to Neo4j graph database. Implemented incremental processing with caching. Added parallel processing for citation extraction. Reduced processing time from hours to minutes.",
      },
    ],
    
    approach: "Analyzed challenges in reading research papers (time, complexity, jargon). Built PDF parsing pipeline handling various layouts. Implemented multi-stage summarization: extraction, abstractive summary, key insights. Added citation network analysis with Neo4j. Created interactive visualization for knowledge graphs.",
    
    outcome: "Used by 500+ researchers and students. Successfully summarizes papers in <2 minutes. Generates accurate summaries with 90%+ relevance score. Built knowledge graphs connecting 10K+ papers. Helped users save average 30 minutes per paper. Featured in university newsletter.",
    
    metrics: [
      { label: "Users", value: "500+", description: "Active researchers" },
      { label: "Papers", value: "10K+", description: "In knowledge graph" },
      { label: "Time Saved", value: "30 min", description: "Per paper average" },
      { label: "Accuracy", value: "90%+", description: "Summary relevance" },
      { label: "Processing", value: "<2 min", description: "Per paper" },
      { label: "Satisfaction", value: "4.6/5", description: "User rating" },
    ],
    
    startDate: "2024-09",
    duration: "2 months",
    
    role: "AI Research Engineer",
    status: "in-progress",
    highlights: [
      "500+ active users from academic community",
      "Built knowledge graph connecting 10K+ research papers",
      "Achieved 90%+ accuracy in extracting key findings",
      "Reduced paper reading time from 60 to 30 minutes",
      "Featured in university's technology showcase",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectsByCategory(category: Project["category"]): Project[] {
  return projects.filter((project) => project.category === category);
}
