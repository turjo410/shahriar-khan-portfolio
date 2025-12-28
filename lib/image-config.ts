/**
 * Image Configuration and Paths
 * 
 * This file centralizes all image paths used throughout the portfolio.
 * Replace placeholder paths with actual image paths once you add your images.
 */

export const images = {
  // Profile Images
  profile: {
    portrait: "/images/profile/portrait.jpg",
    casual: "/images/profile/casual.jpg",
    working: "/images/profile/working.jpg",
  },

  // Hero Section
  hero: {
    background: "/images/hero/background.jpg",
    workspace: "/images/hero/workspace.jpg",
  },

  // Projects
  projects: {
    mlops: {
      hero: "/images/projects/mlops-face-recognition/hero.jpg",
      architecture: "/images/projects/mlops-face-recognition/architecture.jpg",
      screenshots: [
        "/images/projects/mlops-face-recognition/screenshot-1.jpg",
        "/images/projects/mlops-face-recognition/screenshot-2.jpg",
        "/images/projects/mlops-face-recognition/screenshot-3.jpg",
        "/images/projects/mlops-face-recognition/screenshot-4.jpg",
        "/images/projects/mlops-face-recognition/screenshot-5.jpg",
        "/images/projects/mlops-face-recognition/screenshot-6.jpg",
      ],
      before: "/images/projects/mlops-face-recognition/before.jpg",
      after: "/images/projects/mlops-face-recognition/after.jpg",
    },
    aiCodeReviewer: {
      hero: "/images/projects/ai-code-reviewer/hero.jpg",
      architecture: "/images/projects/ai-code-reviewer/architecture.jpg",
      screenshots: [
        "/images/projects/ai-code-reviewer/screenshot-1.jpg",
        "/images/projects/ai-code-reviewer/screenshot-2.jpg",
        "/images/projects/ai-code-reviewer/screenshot-3.jpg",
        "/images/projects/ai-code-reviewer/screenshot-4.jpg",
        "/images/projects/ai-code-reviewer/screenshot-5.jpg",
        "/images/projects/ai-code-reviewer/screenshot-6.jpg",
      ],
      before: "/images/projects/ai-code-reviewer/before.jpg",
      after: "/images/projects/ai-code-reviewer/after.jpg",
    },
    neuralStyle: {
      hero: "/images/projects/neural-style-transfer/hero.jpg",
      architecture: "/images/projects/neural-style-transfer/architecture.jpg",
      screenshots: [
        "/images/projects/neural-style-transfer/screenshot-1.jpg",
        "/images/projects/neural-style-transfer/screenshot-2.jpg",
        "/images/projects/neural-style-transfer/screenshot-3.jpg",
        "/images/projects/neural-style-transfer/screenshot-4.jpg",
        "/images/projects/neural-style-transfer/screenshot-5.jpg",
        "/images/projects/neural-style-transfer/screenshot-6.jpg",
      ],
      before: "/images/projects/neural-style-transfer/before.jpg",
      after: "/images/projects/neural-style-transfer/after.jpg",
    },
    paperSummarizer: {
      hero: "/images/projects/research-paper-summarizer/hero.jpg",
      architecture: "/images/projects/research-paper-summarizer/architecture.jpg",
      screenshots: [
        "/images/projects/research-paper-summarizer/screenshot-1.jpg",
        "/images/projects/research-paper-summarizer/screenshot-2.jpg",
        "/images/projects/research-paper-summarizer/screenshot-3.jpg",
        "/images/projects/research-paper-summarizer/screenshot-4.jpg",
        "/images/projects/research-paper-summarizer/screenshot-5.jpg",
        "/images/projects/research-paper-summarizer/screenshot-6.jpg",
      ],
      before: "/images/projects/research-paper-summarizer/before.jpg",
      after: "/images/projects/research-paper-summarizer/after.jpg",
    },
  },

  // About Page
  about: {
    lifestyle: [
      "/images/about/coffee-coding.jpg",
      "/images/about/camera-setup.jpg",
      "/images/about/hiking.jpg",
      "/images/about/workspace.jpg",
    ],
  },

  // Now Page
  now: {
    activities: "/images/now/current-activities.jpg",
    learning: "/images/now/learning.jpg",
    reading: "/images/now/reading.jpg",
  },

  // Uses Page
  uses: {
    hardware: "/images/uses/hardware-setup.jpg",
    desk: "/images/uses/desk-setup.jpg",
    macbook: "/images/uses/macbook.jpg",
    pc: "/images/uses/pc-build.jpg",
  },
};

/**
 * Image optimization settings
 */
export const imageConfig = {
  quality: 90,
  formats: ["image/webp", "image/avif"],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  domains: ["placehold.co"], // Add your CDN domains here
};

/**
 * Placeholder image generator
 * Use this for images you haven't uploaded yet
 */
export function getPlaceholder(
  width: number,
  height: number,
  text: string,
  bgColor: string = "1a1a1a",
  textColor: string = "22d3ee"
): string {
  return `https://placehold.co/${width}x${height}/${bgColor}/${textColor}?text=${encodeURIComponent(text)}`;
}

/**
 * Image path resolver
 * Checks if image exists, falls back to placeholder
 */
export function resolveImagePath(
  path: string,
  _fallbackText: string,
  _width: number = 1200,
  _height: number = 675
): string {
  // In production, you'd check if the file exists
  // For now, return the path (OptimizedImage component handles placeholders)
  return path;
}
