/**
 * Animation utilities for the portfolio website
 * Includes GSAP helpers, scroll-triggered animations, and intersection observer utilities
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Framer Motion variants for common animations
 */
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

/**
 * GSAP scroll-triggered animations
 */

// Parallax effect
export const createParallax = (element: HTMLElement, speed: number = 0.5) => {
  if (typeof window === 'undefined') return;
  
  gsap.to(element, {
    yPercent: 100 * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });
};

// Reveal animation on scroll
export const createScrollReveal = (
  element: HTMLElement,
  options: {
    delay?: number;
    duration?: number;
    y?: number;
    x?: number;
    scale?: number;
  } = {}
) => {
  if (typeof window === 'undefined') return;

  const { delay = 0, duration = 1, y = 50, x = 0, scale = 1 } = options;

  gsap.from(element, {
    y,
    x,
    scale,
    opacity: 0,
    duration,
    delay,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });
};

// Stagger reveal animation
export const createStaggerReveal = (
  elements: NodeListOf<Element> | Element[],
  options: {
    delay?: number;
    duration?: number;
    stagger?: number;
    y?: number;
  } = {}
) => {
  if (typeof window === 'undefined') return;

  const { delay = 0, duration = 0.8, stagger = 0.1, y = 50 } = options;

  gsap.from(elements, {
    y,
    opacity: 0,
    duration,
    delay,
    stagger,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: elements[0] as Element,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });
};

// Text reveal animation (character by character)
export const createTextReveal = (element: HTMLElement, options: { delay?: number } = {}) => {
  if (typeof window === 'undefined') return;

  const { delay = 0 } = options;
  const text = element.textContent || '';
  element.innerHTML = '';

  // Split text into characters
  const chars = text.split('').map((char) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.display = 'inline-block';
    span.style.opacity = '0';
    return span;
  });

  chars.forEach((char) => element.appendChild(char));

  gsap.to(chars, {
    opacity: 1,
    duration: 0.03,
    stagger: 0.03,
    delay,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });
};

// Glow pulse animation
export const createGlowPulse = (element: HTMLElement, color: string = '#00f5ff') => {
  if (typeof window === 'undefined') return;

  gsap.to(element, {
    boxShadow: `0 0 20px ${color}, 0 0 40px ${color}`,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut'
  });
};

// Counter animation utility (for use with react-countup)
export const getCounterConfig = (
  end: number,
  options: {
    duration?: number;
    decimals?: number;
    prefix?: string;
    suffix?: string;
    separator?: string;
  } = {}
) => {
  const { duration = 2.5, decimals = 0, prefix = '', suffix = '', separator = ',' } = options;

  return {
    start: 0,
    end,
    duration,
    decimals,
    prefix,
    suffix,
    separator,
    useEasing: true,
    enableScrollSpy: true,
    scrollSpyOnce: true,
    scrollSpyDelay: 100
  };
};

/**
 * Intersection Observer utility for triggering animations
 */
export const createIntersectionObserver = (
  callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = {}
) => {
  if (typeof window === 'undefined') return null;

  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -10% 0px',
    ...options
  };

  return new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry);
      }
    });
  }, defaultOptions);
};

/**
 * Easing functions for custom animations
 */
export const easings = {
  easeOutCubic: [0.22, 1, 0.36, 1],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  spring: { type: 'spring', stiffness: 100, damping: 15 }
};

/**
 * Cleanup function for GSAP ScrollTriggers
 */
export const cleanupScrollTriggers = () => {
  if (typeof window === 'undefined') return;
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};
