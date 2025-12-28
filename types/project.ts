export interface Technology {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "ai" | "database" | "devops" | "tool";
}

export interface ProjectMetric {
  label: string;
  value: string;
  description?: string;
}

export interface Challenge {
  title: string;
  description: string;
  solution: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: "AI/ML" | "Web" | "Mobile" | "Research";
  featured: boolean;
  
  // Visual
  thumbnail: string;
  images: ProjectImage[];
  video?: string;
  
  // Links
  demo?: string;
  github?: string;
  paper?: string;
  
  // Technical
  technologies: Technology[];
  techStack: string[];
  
  // Case Study
  challenges: Challenge[];
  approach: string;
  outcome: string;
  
  // Metrics
  metrics: ProjectMetric[];
  
  // Timeline
  startDate: string;
  endDate?: string;
  duration: string;
  
  // Additional
  team?: string[];
  role: string;
  status: "completed" | "in-progress" | "archived";
  highlights: string[];
}
