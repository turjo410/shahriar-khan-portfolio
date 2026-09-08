import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Projects } from "@/components/sections/projects"
import { Skills } from "@/components/sections/skills"
import { Experience } from "@/components/sections/experience"
import { Publications } from "@/components/sections/publications"
import { Achievements } from "@/components/sections/achievements"
import { Contact } from "@/components/sections/contact"
import { ScrollVelocity } from "@/components/scroll-velocity"
import TrueFocus from "@/components/true-focus"

export default function Home() {
  return (
    <>
      <Hero />

      <ScrollVelocity
        words={[
          "Computer Vision",
          "Production AI",
          "Full-Stack",
          "Data Science",
          "Edge Deployment",
          "Explainable AI",
        ]}
        size="lg"
      />

      <About />
      <Publications />
      <Projects />

      {/* TrueFocus interstitial — replaces GlassLens */}
      <section className="relative py-14 sm:py-20 overflow-hidden">
        <div className="container">
          <TrueFocus
            sentence="Ready to Work"
            manualMode={false}
            blurAmount={6}
            borderColor="hsl(var(--accent-blue))"
            glowColor="hsl(var(--accent-blue) / 0.45)"
            animationDuration={0.6}
            pauseBetweenAnimations={1.2}
            className="text-[clamp(3rem,9vw,8rem)] text-[hsl(var(--text-primary))]"
          />
          <p className="mt-8 text-center text-sm sm:text-base text-tertiary max-w-lg mx-auto pretty">
            CSE graduate · open to full-time roles &amp; fully funded PhD
            opportunities in AI and Computer Vision.
          </p>
        </div>
      </section>

      <Experience />
      <Skills />
      <Achievements />
      <Contact />
    </>
  )
}
