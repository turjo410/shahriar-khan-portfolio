import { Project } from "../../types/project";

export const projects: Project[] = [
  {
    slug: "real-time-facial-recognition",
    title: "Real-Time Facial Recognition System",
    tagline: "Production-ready deep learning system with 95%+ accuracy",
    description: "Built end-to-end facial recognition system using PyTorch, achieving 95%+ accuracy on diverse datasets with real-time inference.",
    longDescription: "Developed a comprehensive facial recognition system from scratch, handling the complete pipeline from data preprocessing to production deployment. The system processes video streams in real-time, performing face detection, alignment, and recognition with industry-grade accuracy.",
    category: "AI/ML",
    featured: true,
    thumbnail: "/projects/facial-recognition-thumb.jpg",
    images: [
      { src: "/projects/facial-recognition-1.jpg", alt: "System Architecture", caption: "End-to-end pipeline architecture" },
      { src: "/projects/facial-recognition-2.jpg", alt: "Real-time Detection", caption: "Live video stream processing" },
      { src: "/projects/facial-recognition-3.jpg", alt: "Results Dashboard", caption: "Analytics and performance metrics" },
    ],
    demo: "https://facial-recognition-demo.vercel.app",
    github: "https://github.com/yourusername/facial-recognition",
    technologies: [
      { name: "PyTorch", icon: "🔥", category: "ai" },
      { name: "OpenCV", icon: "👁️", category: "ai" },
      { name: "FastAPI", icon: "⚡", category: "backend" },
      { name: "React", icon: "⚛️", category: "frontend" },
      { name: "Docker", icon: "🐳", category: "devops" },
      { name: "PostgreSQL", icon: "🐘", category: "database" },
    ],
    techStack: ["PyTorch", "OpenCV", "FastAPI", "React", "Docker", "PostgreSQL", "Redis", "NGINX"],
    challenges: [
      {
        title: "Real-time Performance Optimization",
        description: "Initial model had 200ms+ latency, too slow for real-time applications with 30fps video streams.",
        solution: "Implemented model quantization (INT8), batch processing, and GPU optimization, reducing latency to 45ms while maintaining 94%+ accuracy."
      },
      {
        title: "Diverse Dataset Bias",
        description: "Model showed 15% accuracy drop on underrepresented demographics due to training data imbalance.",
        solution: "Applied data augmentation, balanced sampling, and fine-tuning on diverse datasets (CelebA, VGGFace2), achieving consistent 95%+ accuracy across all groups."
      },
      {
        title: "Production Deployment at Scale",
        description: "System needed to handle 100+ concurrent video streams without performance degradation.",
        solution: "Architected microservices with load balancing, implemented Redis caching, and optimized database queries, achieving 99.9% uptime with <50ms response time."
      }
    ],
    approach: "Started with MTCNN for face detection and FaceNet for embeddings. Built custom training pipeline with data augmentation, implemented triplet loss optimization, and created REST API with FastAPI. Containerized with Docker and deployed with CI/CD pipeline.",
    outcome: "Successfully deployed to production serving 500+ daily users. Achieved 95.3% accuracy on diverse test sets, 45ms average inference time, and reduced false positive rate by 40% compared to baseline models.",
    metrics: [
      { label: "Accuracy", value: "95.3%", description: "On diverse test datasets" },
      { label: "Latency", value: "45ms", description: "Average inference time" },
      { label: "Throughput", value: "100+", description: "Concurrent video streams" },
      { label: "False Positive", value: "2.1%", description: "Industry-leading rate" },
    ],
    startDate: "2024-06",
    endDate: "2024-11",
    duration: "6 months",
    role: "Lead ML Engineer",
    status: "completed",
    highlights: [
      "Reduced inference latency by 77% through optimization",
      "Achieved 95%+ accuracy across all demographic groups",
      "Deployed to production with 99.9% uptime",
      "Processed 500K+ faces in production",
    ]
  },
  {
    slug: "ai-powered-content-moderation",
    title: "AI-Powered Content Moderation",
    tagline: "Multi-modal ML system for automated content filtering",
    description: "Developed CNN-based system for real-time content moderation with 92% accuracy, processing 10K+ images/hour.",
    longDescription: "Built a comprehensive content moderation system using computer vision and NLP to automatically detect and filter inappropriate content across images, text, and videos. Integrated with existing platform to handle millions of daily uploads.",
    category: "AI/ML",
    featured: true,
    thumbnail: "/projects/content-mod-thumb.jpg",
    images: [
      { src: "/projects/content-mod-1.jpg", alt: "Detection Pipeline", caption: "Multi-modal detection system" },
      { src: "/projects/content-mod-2.jpg", alt: "Admin Dashboard", caption: "Review and analytics interface" },
    ],
    github: "https://github.com/yourusername/content-moderation",
    technologies: [
      { name: "TensorFlow", icon: "🧠", category: "ai" },
      { name: "BERT", icon: "📝", category: "ai" },
      { name: "ResNet", icon: "🖼️", category: "ai" },
      { name: "Flask", icon: "🌶️", category: "backend" },
      { name: "MongoDB", icon: "🍃", category: "database" },
    ],
    techStack: ["TensorFlow", "BERT", "ResNet-50", "Flask", "MongoDB", "RabbitMQ", "Docker"],
    challenges: [
      {
        title: "Multi-Modal Content Analysis",
        description: "Needed to analyze images, text, and videos simultaneously with consistent accuracy.",
        solution: "Implemented ensemble model combining ResNet-50 for images, BERT for text, and I3D for videos with weighted voting mechanism."
      },
      {
        title: "False Positive Management",
        description: "High false positive rate (18%) was blocking legitimate content and frustrating users.",
        solution: "Introduced confidence scoring, human-in-the-loop review for borderline cases, and continuous model retraining based on feedback."
      }
    ],
    approach: "Designed multi-modal architecture with separate models for each content type. Implemented asynchronous processing with RabbitMQ for scalability. Created admin dashboard for review queue and model performance monitoring.",
    outcome: "Reduced manual moderation workload by 75%, achieved 92% accuracy with 6% false positive rate, and processed 10K+ items per hour with <2s latency.",
    metrics: [
      { label: "Accuracy", value: "92%", description: "Overall detection rate" },
      { label: "Processing", value: "10K+/hr", description: "Items processed" },
      { label: "False Positive", value: "6%", description: "Down from 18%" },
      { label: "Workload Reduction", value: "75%", description: "Manual review time" },
    ],
    startDate: "2024-09",
    duration: "3 months",
    role: "ML Engineer",
    status: "completed",
    highlights: [
      "Processed 2M+ content items in production",
      "Reduced manual moderation by 75%",
      "Achieved 92% accuracy across all content types",
      "Decreased false positives from 18% to 6%",
    ]
  },
  {
    slug: "neural-style-transfer",
    title: "Neural Style Transfer Application",
    tagline: "Interactive web app for artistic image transformation",
    description: "Created web application for neural style transfer using VGG19, enabling users to apply artistic styles to photos in real-time.",
    longDescription: "Developed an interactive web application that allows users to transform their photos into artwork by applying styles from famous paintings. Implemented efficient neural style transfer algorithm with custom optimizations for web deployment.",
    category: "AI/ML",
    featured: false,
    thumbnail: "/projects/style-transfer-thumb.jpg",
    images: [
      { src: "/projects/style-transfer-1.jpg", alt: "Style Gallery", caption: "Pre-trained artistic styles" },
      { src: "/projects/style-transfer-2.jpg", alt: "Before/After", caption: "Transformation results" },
    ],
    demo: "https://neural-style-transfer.vercel.app",
    github: "https://github.com/yourusername/neural-style-transfer",
    technologies: [
      { name: "TensorFlow.js", icon: "🧠", category: "ai" },
      { name: "Next.js", icon: "▲", category: "frontend" },
      { name: "Tailwind", icon: "🎨", category: "frontend" },
    ],
    techStack: ["TensorFlow.js", "Next.js", "Tailwind CSS", "Vercel"],
    challenges: [
      {
        title: "Browser Performance",
        description: "Initial implementation took 30+ seconds to process images, poor UX.",
        solution: "Migrated to TensorFlow.js with WebGL backend, implemented progressive rendering, achieved <5s processing time."
      }
    ],
    approach: "Implemented VGG19-based style transfer with custom loss functions. Built progressive web app with image upload, style selection, and real-time preview.",
    outcome: "Deployed web app with 1K+ monthly users, achieving <5s processing time for 1024x1024 images with high-quality results.",
    metrics: [
      { label: "Processing", value: "<5s", description: "For 1024x1024 images" },
      { label: "Users", value: "1K+/mo", description: "Monthly active users" },
      { label: "Styles", value: "15", description: "Pre-trained models" },
    ],
    startDate: "2024-03",
    endDate: "2024-05",
    duration: "2 months",
    role: "Full-stack Developer",
    status: "completed",
    highlights: [
      "Reduced processing time from 30s to <5s",
      "Deployed to production with 1K+ users",
      "Achieved photorealistic style transfer quality",
    ]
  },
  {
    slug: "real-time-object-detection",
    title: "Real-Time Object Detection API",
    tagline: "YOLOv8-based REST API for production use",
    description: "Built scalable REST API for object detection using YOLOv8, serving 1M+ API calls with 99.5% uptime.",
    longDescription: "Developed production-grade REST API for object detection, supporting multiple YOLO models with automatic scaling, caching, and comprehensive monitoring.",
    category: "AI/ML",
    featured: false,
    thumbnail: "/projects/object-detection-thumb.jpg",
    images: [],
    demo: "https://api.objectdetection.example.com",
    github: "https://github.com/yourusername/object-detection-api",
    technologies: [
      { name: "YOLOv8", icon: "🎯", category: "ai" },
      { name: "FastAPI", icon: "⚡", category: "backend" },
      { name: "Redis", icon: "🔴", category: "database" },
      { name: "Docker", icon: "🐳", category: "devops" },
    ],
    techStack: ["YOLOv8", "FastAPI", "Redis", "Docker", "Kubernetes", "Prometheus"],
    challenges: [
      {
        title: "API Rate Limiting",
        description: "Needed to handle burst traffic without overloading GPU resources.",
        solution: "Implemented Redis-based caching, request queuing, and auto-scaling with Kubernetes."
      }
    ],
    approach: "Containerized YOLOv8 models with FastAPI, implemented caching layer, set up monitoring with Prometheus and Grafana.",
    outcome: "Deployed API serving 1M+ requests with 99.5% uptime, 150ms average latency, and automatic scaling during peak traffic.",
    metrics: [
      { label: "Requests", value: "1M+", description: "Total API calls served" },
      { label: "Uptime", value: "99.5%", description: "Production availability" },
      { label: "Latency", value: "150ms", description: "Average response time" },
    ],
    startDate: "2024-07",
    duration: "2 months",
    role: "Backend Engineer",
    status: "completed",
    highlights: [
      "Served 1M+ API requests",
      "Achieved 99.5% uptime SLA",
      "150ms average response time",
    ]
  },
  {
    slug: "predictive-maintenance-system",
    title: "Predictive Maintenance System",
    tagline: "LSTM-based anomaly detection for industrial IoT",
    description: "Developed time-series forecasting system using LSTM networks to predict equipment failures, reducing downtime by 40%.",
    longDescription: "Built predictive maintenance system for industrial equipment using LSTM neural networks to analyze sensor data and predict failures before they occur.",
    category: "AI/ML",
    featured: false,
    thumbnail: "/projects/predictive-maintenance-thumb.jpg",
    images: [],
    technologies: [
      { name: "PyTorch", icon: "🔥", category: "ai" },
      { name: "LSTM", icon: "📊", category: "ai" },
      { name: "InfluxDB", icon: "⏱️", category: "database" },
    ],
    techStack: ["PyTorch", "LSTM", "InfluxDB", "Grafana", "Python"],
    challenges: [],
    approach: "Collected sensor data from industrial equipment, trained LSTM models on historical failure patterns, deployed real-time monitoring dashboard.",
    outcome: "Reduced unplanned downtime by 40%, saved $200K+ in maintenance costs, achieved 88% accuracy in failure prediction.",
    metrics: [
      { label: "Downtime Reduction", value: "40%", description: "Unplanned outages" },
      { label: "Cost Savings", value: "$200K+", description: "Annual maintenance" },
      { label: "Accuracy", value: "88%", description: "Failure prediction" },
    ],
    startDate: "2024-04",
    endDate: "2024-06",
    duration: "3 months",
    role: "ML Engineer",
    status: "completed",
    highlights: [
      "Reduced downtime by 40%",
      "Saved $200K+ annually",
      "88% prediction accuracy",
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured);
}

export function getProjectsByCategory(category: Project["category"]): Project[] {
  return projects.filter(p => p.category === category);
}
