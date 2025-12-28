"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Maximize2, X } from "lucide-react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  caption?: string;
  zoomable?: boolean;
  objectFit?: "cover" | "contain" | "fill";
}

export function OptimizedImage({
  src,
  alt,
  width = 1200,
  height = 675,
  priority = false,
  className = "",
  caption,
  zoomable = true,
  objectFit = "cover",
}: OptimizedImageProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check if it's a placeholder
  const isPlaceholder = src.startsWith("/api/placeholder") || src.includes("placeholder");

  return (
    <>
      <div className={`relative group ${className}`}>
        {/* Loading skeleton */}
        {isLoading && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-lg" />
        )}

        {/* Image */}
        <div className="relative overflow-hidden rounded-lg border border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-300">
          <Image
            src={isPlaceholder ? `https://placehold.co/${width}x${height}/1a1a1a/22d3ee?text=${encodeURIComponent(alt)}` : src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className={`w-full h-auto object-${objectFit} transition-all duration-500 ${
              isLoading ? "scale-110 blur-lg" : "scale-100 blur-0"
            } ${zoomable ? "group-hover:scale-105 cursor-pointer" : ""}`}
            onLoadingComplete={() => setIsLoading(false)}
            onClick={() => zoomable && setIsZoomed(true)}
            quality={90}
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Zoom icon */}
          {zoomable && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              className="absolute top-4 right-4 w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-cyan-500/80"
              onClick={(e) => {
                e.stopPropagation();
                setIsZoomed(true);
              }}
            >
              <Maximize2 className="w-5 h-5 text-white" />
            </motion.button>
          )}
        </div>

        {/* Caption */}
        {caption && (
          <p className="mt-3 text-sm text-gray-400 text-center italic">
            {caption}
          </p>
        )}
      </div>

      {/* Fullscreen Modal */}
      {isZoomed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setIsZoomed(false)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            onClick={() => setIsZoomed(false)}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-7xl max-h-[90vh] w-full h-full"
          >
            <Image
              src={isPlaceholder ? `https://placehold.co/${width}x${height}/1a1a1a/22d3ee?text=${encodeURIComponent(alt)}` : src}
              alt={alt}
              width={width}
              height={height}
              className="w-full h-full object-contain"
              quality={100}
            />
            {caption && (
              <p className="absolute bottom-0 left-0 right-0 text-center text-white bg-black/60 backdrop-blur-sm py-4 px-6">
                {caption}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

// Image Grid Component
interface ImageGridProps {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  columns?: 2 | 3 | 4;
  gap?: number;
}

export function ImageGrid({ images, columns = 3, gap = 6 }: ImageGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]} gap-${gap}`}>
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <OptimizedImage
            src={image.src}
            alt={image.alt}
            caption={image.caption}
            width={800}
            height={600}
          />
        </motion.div>
      ))}
    </div>
  );
}

// Hero Image with Parallax
interface HeroImageProps {
  src: string;
  alt: string;
  overlay?: boolean;
  children?: React.ReactNode;
}

export function HeroImage({ src, alt, overlay = true, children }: HeroImageProps) {
  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden rounded-2xl">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover"
        quality={95}
        sizes="100vw"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      )}
      {children && (
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          {children}
        </div>
      )}
    </div>
  );
}

// Architecture Diagram Component
interface ArchitectureDiagramProps {
  src: string;
  title: string;
  description?: string;
}

export function ArchitectureDiagram({ src, title, description }: ArchitectureDiagramProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="my-12"
    >
      <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-xl p-6 md:p-8">
        <h3 className="text-2xl font-bold mb-4 text-cyan-400">{title}</h3>
        {description && (
          <p className="text-gray-400 mb-6">{description}</p>
        )}
        <OptimizedImage
          src={src}
          alt={title}
          width={1400}
          height={800}
          className="w-full"
          zoomable={true}
        />
      </div>
    </motion.div>
  );
}

// Before/After Comparison Slider
interface BeforeAfterProps {
  before: string;
  after: string;
  alt: string;
}

export function BeforeAfterSlider({ before, after, alt }: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  return (
    <div
      className="relative w-full aspect-video overflow-hidden rounded-xl border border-gray-700/50 cursor-col-resize select-none"
      onMouseMove={handleMouseMove}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
    >
      {/* Before Image */}
      <div className="absolute inset-0">
        <Image
          src={before}
          alt={`${alt} - Before`}
          fill
          className="object-cover"
          quality={90}
        />
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-white">
          Before
        </div>
      </div>

      {/* After Image with clip */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={after}
          alt={`${alt} - After`}
          fill
          className="object-cover"
          quality={90}
        />
        <div className="absolute top-4 right-4 bg-cyan-500/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-white">
          After
        </div>
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-cyan-400 shadow-lg shadow-cyan-500/50"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-cyan-400 rounded-full shadow-lg shadow-cyan-500/50 flex items-center justify-center">
          <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>
    </div>
  );
}
