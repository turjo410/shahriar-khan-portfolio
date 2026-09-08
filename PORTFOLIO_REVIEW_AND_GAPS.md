# Shahriar Khan Portfolio — Gap, Red-Flag & Problem Review

**Date:** 2026-09-08
**Scope:** Live site (`shahriar-khan-portfolio.vercel.app` / `skp.engineer`) + repository `turjo410/shahriar-khan-portfolio`
**Method:** Full source read, live crawl of deployed pages, link/HTTP verification of every project, `npm run lint` + `npm run build`, repo hygiene check.

---

## TL;DR

The design is genuinely strong (clean, cohesive, good motion), but the portfolio currently does **more harm than good** for the goal stated on the page (full-time ML/SWE roles + funded PhD):

1. **The live page renders your About stats as `0`, `0+`, `0/120`** to anyone without JS / to crawlers / in the static HTML snapshot — the numbers only appear after a scroll animation.
2. **Broken links on featured work**: Banana XAI GitHub link is a 404; the Saiful Islam project links to `#` (nothing).
3. **Contradictory positioning**: you say *"CSE graduate"* (home) and *"undergraduate student"* (/about) at the same time; you claim TrafficGuard was *"deployed for Dhaka officers"* while the same project is tagged **Research**.
4. **No credible evidence trail** for the headlining claims (200+ paying SaaS users, "deployed to real people", 84.78% election accuracy, TOEFL 93, 3.92 GPA) — recruiters can only take your word, and several claims actively invite skepticism.
5. **No industry experience and zero research output**, yet the site applies for ML engineer and PhD roles — the biggest credibility gap.
6. **Half the site is unfinished or dead**: 7 routes are "Coming soon" stubs, 1 placeholder route, an entire duplicate old codebase committed to the repo, ~10 unused components/files, stale README/docs, and a 27 MB screenshot in git.
7. **CI hygiene is red**: `npm run lint` fails (4 errors), `npm audit` reports 14 vulnerabilities (10 high).

---

## 1. Critical bugs (visible to visitors)

### 1.1 About-stats render as zeros before/without JS
`components/sections/about.tsx:7-12` defines real stats (3.92 GPA, 9+ projects, 200+ members, 93/120 TOEFL) but only renders them **after** an in-view scroll trigger:

```tsx
{inView ? <CountUp .../> : `0${s.suffix}`}
```

- Server-rendered HTML, bots, and anyone with JS disabled see **"0 GPA · On a 100% scholarship", "0+ Projects shipped to production", "0+ Paying SaaS members", "0/120 TOEFL"** — this was confirmed on the live page crawl.
- If the section never intersects (e.g., heavy page, reduced viewport, screen reader), zeros persist forever.
- Fix: render real values in SSR and let CountUp animate from them (`start` prop), never a `0` literal.

### 1.2 Banana XAI — GitHub link is a 404
`components/sections/projects.tsx:80` points to `https://github.com/turjo410/banana-xai-classification` → **HTTP 404** (verified). The actual repos are `turjo410/banana-xai-streamlit` and `turjo410/Streamlit-Banana-XAI`.

### 1.3 Saiful Islam Portfolio — dead row
`components/sections/projects.tsx:144` has `links: {}`, so the whole row falls back to `href="#"` (`projects.tsx:167`). Clicking project #9 does nothing. A repo exists (`turjo410/saiful-islam`) and can be linked.

### 1.4 `npm run lint` fails
- 4 errors, 6 warnings.
- 2 errors are in **`OLDD/`** (committed duplicate code that ESLint still scans): `OLDD/components/sections/about.tsx:83`, `OLDD/components/sections/hero.tsx:24` — unescaped entities.
- 2 runtime-rule errors in active code: `components/border-glow.tsx:136` and `components/terminal-effect.tsx:43` — synchronous `setState` inside `useEffect` (React Compiler / hooks rules).
- Warnings include `'CardNav' is defined but never used` (`src/app/layout.tsx:4`) and unused `useState` in `pill-nav.tsx:9`.

### 1.5 npm audit
`14 vulnerabilities (1 low, 3 moderate, 10 high)` in the dependency tree. Worth running `npm audit` and pinning clean versions (this also says "my-portfolio v0.1.0" is a default template package name).

---

## 2. Content contradictions (red flags recruiters notice)

| Where | Claim A | Where | Claim B |
|---|---|---|---|
| Home hero + About + page.tsx | "**CSE graduate**" / "Open to full-time roles & PhD" | `src/app/about/page.tsx:71` | "I'm an **undergraduate** Computer Science student" + "roles **after graduation in 2026**" |
| Home About (`about.tsx:119-121`) | TrafficGuard "**deployed for Dhaka officers**" | Projects list (`projects.tsx:38`) | TrafficGuard status = **Research** (not deployed) |
| Hero terminal (`hero.tsx:17-23`) | "PromptMaster: 200+ members, **$49 lifetime SaaS**" | Project row / About | "200+ **paying** members" |
| Hero metrics | "3.92 **CGPA** · Scholarship" | About stats | "3.92 GPA" + separate "100% scholarship 2022" |
| Projects header | "9 projects. **All shipped.**" | Intro paragraph + statuses | Several are **Research**, one has no link at all, some are coursework/group projects |
| GitHub profile website field | LinkedIn → `in/shahriarkhan-ai` | Portfolio (hero/footer/contact) | LinkedIn → `in/shahriar-khan-08770b289` — **two different LinkedIn handles** |
| Footer | "Built with Next.js 16" | README.md | "Next.js 14", "Next.js 14+", `clone .../portfolio.git` (wrong URL), "Dark mode toggle" feature (site is **forced dark**) |

Notes:
- If you are a Dec-2026 graduate, "CSE graduate" everywhere is premature and will be caught in a background check against your stated university years.
- "Deployed for Dhaka officers" is a serious claim. If it is a capstone/proposal, say so — an unverifiable claim of government deployment next to a "Research" tag reads as overclaiming, not as shipping.
- Pick **one LinkedIn URL** and use it in the portfolio, GitHub profile, resume, and README.

---

## 3. Credibility gaps for the stated goals

### 3.1 Experience section doesn't support the target roles
`components/sections/experience.tsx:18-62` contains only:
1. Undergraduate Teaching Assistant (Nov 2024–Present)
2. General member, university programming club
3. **High-school** photography club Vice President (2018–2020)

For "AI/ML Engineer" and "funded PhD" applications there is **no industry internship, no research assistantship, no lab, no publication, no real engineering job**. This is the single largest gap. Recruiters will filter on experience first.

### 3.2 Research-facing pages are empty
- `/research`, `/statement-of-purpose`, `/certifications`, `/credentials`, `/uses`, `/now`, `/recommendations` — **all 7 are "Coming soon" stubs** (see `src/app/*/page.tsx`, each 15 lines).
- `/projects/[slug]` is a "Detailed case studies coming soon" placeholder and is **not linked anywhere**.
- A PhD applicant with an empty research page and no papers/poster links undermines the entire application narrative.

### 3.3 Headline numbers have no evidence trail
- "200+ paying SaaS members" — no public dashboard, testimonial, revenue blog post, or linkable proof; "lifetime $49" pricing makes "200+ paying" a ~$10k claim that is easy to check and easy to doubt.
- "84.78% Random Forest accuracy / 297 constituencies" — no confusion matrix, notebook link, or write-up.
- "TOEFL 93/120" — a raw PDF of your **score report** is committed and publicly downloadable in the repo (`public/resume/English Proficieny Test (TOEFL) Report.pdf`), including (likely) your test registration details — over-sharing a document that is usually shown only to universities, plus it exposes personal data.
- "Deployed for Dhaka officers" — nothing verifiable links back.

Every one of these should point to a **live artifact**: repo README with metrics, notebook, dashboard URL, screenshot gallery, case-study page.

### 3.4 GitHub does not back the portfolio
- Repo list contains many lab/tutorial repos (`Python-Lab-*`, `turjo_firstDemo` "tutorial from Apna College", `skills-introduction-to-github`, etc.) — fine in public, but with **no pinned repos**, no per-project README polish, and a nearly empty profile bio/readme (the committed `GITHUB_PROFILE_README.md` was never deployed).
- None of the featured repos are linked from the GitHub profile, so a visitor who clicks through sees a cluttered account, not the "9 shipped projects".

### 3.5 Editing tone red flags
- Hero bio: *"Wonders are not made — they are born. You are now in the portfolio of one of them."* and marquee "AI/ML Engineer ... Open to full-time & PhD" repeated endlessly. Recruiters read this as overselling and it conflicts with the otherwise clean, mature design.
- Multiple competing descriptors on one page: "CSE Engineer", "AI/ML Engineer", "Full-Stack", "AI/ML & Computer Vision", "CSE · AI/ML", "skp.engineer" vs "shahriar-khan-portfolio". Pick one identity line and repeat it consistently.

---

## 4. Dead / unfinished / orphaned code

### 4.1 Whole duplicate old site committed: `OLDD/`
`OLDD/` is a full second copy of `components/`, `lib/`, `public/`, `src/` (old version of the site). It is scanned by ESLint/TS and currently **causes lint failures**. Delete it (git history preserves it).

### 4.2 Unused components
Never imported anywhere (verified by import-graph scan):
`components/navigation.tsx` (with its `theme-toggle.tsx`), `components/glass-lens.tsx`, `components/magnetic.tsx`, `components/shiny-text.tsx`, `components/spotlight-card.tsx`, `components/tech-marquee.tsx`, `components/section-divider.tsx`, `components/card-nav.tsx` (imported but **not rendered** in `src/app/layout.tsx:4`).

### 4.3 Unused libs / types / deps
- `lib/confetti.ts`, `lib/animations.ts`, `lib/image-config.ts` — no importers.
- `types/project.ts` — the rich `Project` interface is unused; `projects.tsx` redefines its own inline type.
- Unused npm packages: `fuse.js`, `cmdk`, `maath` (check if truly unneeded and remove).
- `components/sections/projects.tsx` hardcodes data that partly duplicates the docs in `project-md-files/` — a single data source is missing.

### 4.4 Template/documentation residue in the repo
- `public/resume/README.md` — literal template text: *"Please add your resume files…"*, *"The attached resume images from your message…"*.
- `ENVIRONMENT.md`, `QUICKSTART.md`, and 10+ root audit/plan docs (`PORTFOLIO_ANALYSIS.md`, `portfolio_audit.md`, `portfolio_deep_audit.md`, `portfolio_overhaul_plan.md`, `REDESIGN_COMPLETE.md`, `FIXES_APPLIED.md`, …) describe an AI-agent build process, not a professional repo.
- **`screencapture-skp-engineer-2026-05-21-22_38_20.png` (27 MB)** sits at the repo root; `.git` is 33 MB because of it. Remove it from history if possible.
- README is stale (Next 14, wrong clone URL `turjo410/portfolio.git`, outdated structure, claims dark-mode toggle that doesn't exist).

---

## 5. SEO / Social / Accessibility / Performance

### 5.1 Metadata is incomplete
`src/app/layout.tsx:26-51`:
- No `openGraph.image` → links shared on LinkedIn/WhatsApp/slack show a blank card. **Big one for job-hunting via DM.**
- No `twitter.card`, no `metadataBase`, no `canonical`/`alternates`, no `robots`/`sitemap`, no JSON-LD `Person` schema.
- Custom domain exists (`skp.engineer`, HTTP 200) but is never referenced anywhere in code.
- No `public/sitemap.xml`, no `robots.txt`.

### 5.2 Theme mismatch
`layout.tsx:63-66`: `enableSystem={false}` + `forcedTheme="dark"` → **the site is dark-only**. README and the dead `theme-toggle`/`navigation` components promise a light/dark toggle that does not exist. Decide and document honestly.

### 5.3 Accessibility issues
- Project rows render GitHub/demo actions as `<span role="button">` **inside** an `<a>` (`projects.tsx:209-301`), with `window.open` in onClick and no focus management → invalid nested-interactive HTML, unreachable by keyboard, announced wrongly by screen readers. Make each project row a real link and the two icon buttons real `<a>`/`<button>` siblings.
- `pill-nav.tsx:141-157` uses `role="menubar"`/`menuitem` without arrow-key support (a menubar needs roving tabindex).
- No `prefers-reduced-motion` handling anywhere (`globals.css` has none) despite Lenis smooth scroll, marquees, count-ups, and infinite animations.
- Stats content is hidden until animation (Section 1.1).
- Whole row hover-preview tooltips duplicate content but are `aria-hidden` (fine) — however preview image preloads are unmanaged.

### 5.4 Performance / assets
- ~30 tech-stack icons are hot-loaded from a CDN via `next/image` `unoptimized` + `dangerouslyAllowSVG` (needed for SVG, but icons have no cache/local copies and no `priority`; they delay logo rows on slow networks).
- `three`/`@react-three/fiber` (beams + background) and `gsap` run for decoration on every page — heavy for a text-first portfolio.
- Images (project jpgs, portrait) rely on `public/` originals without generated/srcset review; the portrait is used twice (hero + about) with duplicate downloads.

### 5.5 No measurement
No analytics/tag (GA/Plausible/Umami) anywhere → no way to know what recruiters open, click, or bounce from.

---

## 6. Gaps vs. a strong job-seeking portfolio

Missing pieces that would materially strengthen it:

- **Proof artifacts for every project** (metrics, screenshots w/ captions, repo link, live link, "what I did vs. group") — one project row currently has none.
- **Case-study detail** — implement the already-created `/projects/[slug]` route (or drop it) with real content.
- **Industry/research experience** or clearly labeled "Academic / Research" projects; remove high-school achievements & pre-2022 items from the professional timeline or move them to a hobbies section.
- **Evidence links**: Google Scholar, arXiv/papers, Kaggle (verify profile is non-empty before linking), LeetCode/Codeforces, real client site for Saiful Islam work.
- **One consistent identity**: name/role/LinkedIn/domain used identically across site, GitHub profile, resume, and PDF metadata.
- **Contact form** (many visitors won't copy an email address; also you already ship `react-hot-toast` + Radix).
- **Humans/now section** or short "About Me" page written for people, not LLM-audit vibes.
- **Light theme or explicit removal of the claim**, favicon polish, social OG image.

---

## 7. Prioritized fix list

**P0 — fix before any more applications go out**
1. Kill the `0` stat fallback → SSR real values (`about.tsx:90-99`).
2. Fix Banana XAI GitHub URL (`projects.tsx:80` → `banana-xai-streamlit`) and give Saiful Islam a link (`saiful-islam` repo or live URL) so no row is dead.
3. Decide and state one status: graduate vs. undergraduate (align `page.tsx` interstitial, `hero.tsx`, `about.tsx`, `src/app/about/page.tsx:71`, `:236`).
4. Soften/evidence "deployed for Dhaka officers" (make it match the project's "Research" tag or show the deployment).
5. Unify LinkedIn handle across portfolio + GitHub profile + resume.

**P1 — before sharing link publicly**
6. Replace 7 "Coming soon" pages with either real content or remove the routes & nav.
7. Add OG image + metadataBase + canonical + description refresh; add `robots.txt`/`sitemap.xml`.
8. Delete `OLDD/`, the 27 MB screenshot, template READMEs/docs; re-run `npm run lint` to zero errors; address the two `setState`-in-effect errors.
9. Make project rows keyboard-accessible (real links, no nested roles).
10. Add `prefers-reduced-motion` support (or accept the a11y cost).

**P2 — polish**
11. Add analytics, per-project case studies, real testimonials/metrics you can prove.
12. Prune GitHub clutter (pin top projects, archive lab repos) and make profile match portfolio.
13. Remove unused deps/components; drop TOEFL PDF from the public repo.
14. Update README to reflect Next.js 16 reality and correct clone URL; single data-source file for projects.

---

## Appendix — Verification evidence

- `curl` checks: `github.com/turjo410/banana-xai-classification` → **404**; `dashboard-cse488-lab.vercel.app` → 200; `promptmasterpro.tech` → 200; `bananaapp.streamlit.app` → 303; `iot-energy-dashboard` GitHub Pages → 301→200; all other GitHub links → 200.
- Live crawl of About section showed `0 GPA`, `0+ Projects shipped to production`, `0+ Paying SaaS members`, `0/120 TOEFL iBT Score` (bug 1.1 confirmed in production).
- `npm run lint` → 4 errors / 6 warnings; `npm run build` → passes (Next.js 16.1.1, 12 static routes); `npm audit` → 14 vulnerabilities.
- Repo: 9 commits, `.git` 33 MB (root 27 MB screenshot), `OLDD/` duplicate tree present, 15 root `.md` files + `project-md-files/` (148 KB) of build-process docs.
