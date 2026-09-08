"use client"

import { motion } from "framer-motion"
import { FileText, ArrowUpRight } from "lucide-react"

interface Publication {
  title: string
  authors?: string[]
  venue: string
  year: string
  status: "Published" | "Under review"
  href?: string
  linkLabel?: string
}

const PUBLICATIONS: Publication[] = [
  {
    title:
      "Supervised, Semi-Supervised, and Self-Supervised Learning for Brain MRI Pathology Detection: Benchmarking YOLO with SimCLR and DINOv3",
    venue: "Engineering Reports, Wiley",
    year: "2026",
    status: "Under review",
  },
  {
    title: "Dust Cloud Detection: A Machine Learning Approach",
    authors: [
      "Fatiha Mahbub Mim",
      "Mossammat Ishrat",
      "Md Tanvir Chowdhury",
      "Md Tanzid Mollah",
      "Shahriar Khan",
      "K. M. Safin Kamal",
      "Ahmed Wasif Reza",
    ],
    venue:
      "Data Mining and Information Security, Lecture Notes in Networks and Systems, Springer",
    year: "2026",
    status: "Published",
    href: "https://doi.org/10.1007/978-3-032-21901-5_6",
    linkLabel: "DOI",
  },
  {
    title:
      "Data Transmission in Internet of Things Networks with Minimal Energy Consumption",
    authors: [
      "Md Tanzid Mollah",
      "Md Tanvir Chowdhury",
      "Ahamed Jaman Jehad",
      "Shahriar Khan",
      "Md Fokrul Akon",
    ],
    venue:
      "International Journal of Engineering Research & Technology (IJERT)",
    year: "2026",
    status: "Published",
    href: "https://www.ijert.org/data-transmission-in-internet-of-things-networks-with-minimal-energy-consumption",
    linkLabel: "Article",
  },
]

const statusStyle = {
  Published: "text-accent-emerald bg-tint-emerald",
  "Under review": "text-accent-amber bg-tint-amber",
} as const

export function Publications() {
  return (
    <section id="publications" className="relative py-14 sm:py-20">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-3xl"
        >
          <span className="section-label">Publications</span>
          <h2 className="mt-5 text-display font-bold tracking-tight balance display-text">
            Research &amp;{" "}
            <span className="text-gradient-pro">publications.</span>
          </h2>
          <p className="mt-4 text-lg text-secondary pretty">
            My research sits at the intersection of computer vision, explainable
            AI, and efficient deep learning. Here is the work that is published,
            and a manuscript currently under review.
          </p>
        </motion.div>

        <div className="space-y-4 max-w-4xl">
          {PUBLICATIONS.map((pub, idx) => (
            <motion.article
              key={pub.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="card-pro card-pro-lift p-5 sm:p-6 flex items-start gap-5"
            >
              {/* Icon block */}
              <div className="flex-shrink-0 flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-xl bg-tint-indigo border border-accent-indigo/30 grid place-items-center text-accent-indigo">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="font-mono text-[10px] text-tertiary">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span
                    className={`text-[10px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded ${
                      statusStyle[pub.status]
                    }`}
                  >
                    {pub.status}
                  </span>
                  <span className="text-[11px] text-tertiary font-mono">
                    {pub.year}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-[hsl(var(--text-primary))] leading-snug">
                  {pub.title}
                </h3>

                {pub.authors && (
                  <p className="text-sm text-secondary mt-2 leading-relaxed">
                    {pub.authors.map((name, i) => (
                      <span key={name}>
                        {i > 0 && <span className="text-tertiary">, </span>}
                        {name === "Shahriar Khan" ? (
                          <strong className="text-[hsl(var(--text-primary))] font-semibold">
                            {name}
                          </strong>
                        ) : (
                          name
                        )}
                      </span>
                    ))}
                  </p>
                )}

                <p className="text-sm italic text-tertiary mt-1.5">
                  {pub.venue}
                </p>

                {pub.href && (
                  <a
                    href={pub.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-accent-blue hover:text-accent-blue/80 transition-colors"
                  >
                    {pub.linkLabel}
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
