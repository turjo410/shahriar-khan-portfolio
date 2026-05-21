# Portfolio Audit — Shahriar Khan
**Date:** May 2026 | **Status:** Post-overhaul review

This document assesses the current state of `skp.engineer` (the Next.js portfolio),
identifies concrete improvements to make, and flags things that are unnecessary or
working against the design.

---

## ✅ What's Working Well

| Area | Why it works |
|------|-------------|
| **Project images** | Your own screenshots in `/assets` are wired in — no stock/placeholder imagery |
| **Project data** | All 8 real projects with accurate metrics, stack pills, GitHub and live demo links |
| **Typography hierarchy** | Display-size names/headlines create strong visual rhythm |
| **Bento About section** | Bio + CountUp stats + Education + Role is clear and information-dense |
| **Skills badge cloud** | No fake progress bars — just clean grouped pills |
| **Timeline Experience** | Accurate roles, clean vertical timeline |
| **Achievements section** | Scholarship + competition awards with correct years |
| **Contact section** | Email, LinkedIn, GitHub, Kaggle, Phone — all five channels |
| **Footer** | Copyright year is 2026, nav shortcuts, social icons all present |
| **ScrollVelocity bands** | Add motion and rhythm between sections without clutter |
| **Persistent Beams background** | Single WebGL canvas that travels behind every section seamlessly |
| **SpotlightCard on projects** | Mouse-tracking glow on hover is tasteful and modern |
| **Magnetic CTAs** | Primary buttons have subtle magnetic pull |
| **Scroll progress bar** | Thin accent-blue bar at the top — professional and useful |
| **Section scroll-spy** | Nav highlights the active section as you scroll |

---

## 🔴 High-Priority Improvements

### 1. `GlassLens` "Build to Ship." section feels disconnected
**Problem:** The big standalone `GlassLens` section between Projects and Skills feels like
an orphaned element — the copywriting ("Build to Ship.") doesn't add information, and
the lens cursor effect requires mouse hover to notice. On mobile it's just large text.

**Fix:** Replace it with a genuine value-proposition interstitial — e.g., a 3-stat row
("8+ projects deployed · 200+ SaaS users · 3.92 CGPA") or remove it entirely and let
Projects flow directly into the Skills velocity band.

---

### 2. Hero metrics are too vague
**Problem:** "8+ Real-world projects" and "84.78% ML model accuracy" in the metric
strip don't have context. A recruiter seeing "84.78% accuracy" without knowing it's
a Random Forest classifier on 297 constituencies doesn't understand the claim.

**Fix:** Make metrics context-aware — either add a tooltip or replace the third metric
with something unambiguous like "200+ SaaS users" (PromptMaster Pro) or "9 deployed projects".

---

### 3. PromptMaster Pro has no GitHub link
**Problem:** It's a proprietary SaaS so there's no public repo — but the card shows no
source link at all. Recruiters expect evidence. The card currently has only a "Live Demo"
button.

**Fix:** Add a short note inside the card like "Proprietary — live at promptmasterpro.tech"
and make sure the card image click also routes to the live demo (not `#`). Currently
CompactCard wraps in a `Link` with fallback to demo — this is already handled. Confirm
the description mentions it's a commercial product.

---

### 4. Saiful Islam Portfolio card has no links at all
**Problem:** The card shows "Client work" text but neither a GitHub repo nor a live URL.
This makes it look like filler content.

**Fix:** Either add the client's live portfolio URL (if publicly accessible), or remove
the card entirely. A card with zero clickable links harms credibility more than having
fewer projects.

---

### 5. Navigation has too many items for a single-page portfolio
**Problem:** The nav has 8 items: Home, About, Projects, Skills, Experience, Academic
(dropdown with 5 items), More About, Contact. The "Academic" dropdown points to 5
Coming Soon pages. "More About" is a separate page at `/about`.

**Fix:** 
- Collapse to: `Home | About | Projects | Skills | Contact`
- Move "More About" into the About section itself (link from the section)  
- Move "Academic" to the About page as a sub-section
- "Experience" can be accessed via scrolling — no need for a dedicated nav item

---

### 6. The `/about` (More About Me) page has outdated story content
**Problem:** The About page at `/about` still says things like "I discovered my passion
for AI and ML during my sophomore year at Eastern Washington University" — that's the
wrong university (EWU = East West University, Dhaka). The page also references a
hallucinated "EWU's Hackathon" win, a MacBook Pro, and other content that doesn't
match the actual README data.

**Fix:** Rewrite the story paragraphs to accurately reflect:
- East West University, Dhaka, Bangladesh
- The actual projects listed (TrafficGuard AI, Election Dashboard, etc.)
- The Photography Club VP role
- The TA position
- The actual scholarships won

---

### 7. Hero bio mentions "expected 2026" — this should be more specific
**Problem:** Both the Hero bio and About section say "Expected 2026". If the graduation
has happened or a specific month is known, state it. Vagueness signals a draft.

**Fix:** Update to "Expected Fall 2026" or "Expected June 2026" depending on actual date.

---

## 🟡 Medium-Priority Improvements

### 8. No testimonials or social proof beyond metrics
**Problem:** PromptMaster Pro has 200+ paying members. There are no quotes, no
testimonials, no social proof anywhere on the portfolio. The GitHub README has student
quotes (Sarah J., Marcus R., Priya K.) about PromptMaster Pro.

**Fix:** Add a small testimonial strip to the PromptMaster Pro project card. Even
1-2 short quotes significantly boost credibility.

---

### 9. No publication or research paper section
**Problem:** The Research & Publications nav item goes to a "Coming Soon" page. If
there are any preprints, working papers, or Kaggle notebooks worth showcasing,
they should be here instead of an empty page.

**Fix:** Even if there are no formal papers yet, add the 5 Kaggle notebooks for
the Banana XAI project as "research artifacts" on the research page. Link to
`kaggle.com/turjo410` which is now added to the contact section.

---

### 10. WakaTime data is not connected
**Problem:** The GitHub README has a WakaTime section showing language breakdown.
The portfolio has no live coding activity data at all.

**Fix:** Either add a WakaTime widget in the About section ("This Week's Code") or
drop the idea — but don't promise it in the README if it's not on the portfolio.

---

### 11. Hero terminal cycles generic commands — could be project-specific
**Problem:** The terminal shows `python train.py --model yolov11`, `spark-submit
election_pipeline.py`, etc. These are good but anonymous.

**Fix:** Add project-specific commit messages or outputs, e.g.:
```
✔ TrafficGuard: 16 classes, mAP 0.89
✔ Election: 84.78% Random Forest accuracy  
✔ PromptMaster: 200+ members live
```
This makes the terminal a visual summary of real achievements.

---

### 12. Mobile layout for featured project cards (Tier 1) is untested-looking
**Problem:** The `lg:sticky lg:top-24` image is only sticky on large screens.
On mobile the image column stacks above the text, which can look very tall
before any content is visible.

**Fix:** On mobile, reduce the image aspect ratio from `16/10` to `16/7` and
cap `max-h-[200px]` so it's a compact preview, not a half-screen image.

---

### 13. Light mode is essentially unusable
**Problem:** The Beams WebGL background renders black beams, and the design tokens
for light mode were never updated from the original theme. Light mode makes text
and cards hard to read.

**Fix:** Either disable light mode and remove the ThemeToggle (since the whole
visual system is built around dark), or implement proper light-mode tokens
(warm white background, dark text, blue accents that don't become invisible).

---

### 14. Achievements section has too much padding — looks empty
**Problem:** The Achievements section has `py-24 sm:py-32` top/bottom padding.
With only 5 short cards, there's enormous whitespace above and below. This creates
one of those "blank dark space" sections that looks broken.

**Fix:** Reduce padding to `py-16 sm:py-20` for this section, or add the roadmap
table from the GitHub README as additional content (milestone checklist).

---

## 🟠 Things That Are Unnecessary (Remove or Simplify)

### R1. Double ScrollVelocity bands are too much
Two marquee bands (one between Hero→About and one between Projects→Skills) both
scrolling technology terms feel repetitive. Keep one — the first one with "Computer
Vision · Production AI · Full-Stack" is the stronger one since it's a mission
statement. The second one scrolling "PyTorch · YOLOv11 · Next.js" is redundant
with the entire Skills section immediately below it.

**Action:** Remove the second ScrollVelocity band.

---

### R2. `ShinyText` component was created but never used
The `components/shiny-text.tsx` file exists but is imported nowhere.

**Action:** Delete it.

---

### R3. `section-divider.tsx` was created but never used
`components/section-divider.tsx` was built for section rhythm but is not rendered
anywhere in `page.tsx`.

**Action:** Either use it between every section (consistently), or delete it.

---

### R4. The Magnetic button effect is not worth its bundle weight
`framer-motion` spring-based Magnetic wrapper adds ~0 functional value to users
who don't notice micro-cursor effects. The two primary CTA buttons (View Projects,
Download CV) are already large and obvious.

**Action:** Remove the `<Magnetic>` wrappers. Keep the component file in case it's
needed for a future interactive element.

---

### R5. `portfolio_overhaul_plan.md` is in the project root
This is an internal planning document. It will be visible in the public repo,
clutter the file tree, and is irrelevant to visitors or reviewers of the code.

**Action:** Move to `.kiro/` or delete once the overhaul is complete.

---

### R6. Multiple `.md` files in project root are internal docs
`ENVIRONMENT.md`, `FEATURES.md`, `FIXES_APPLIED.md`, `IMAGES_GUIDE.md`,
`IMAGES_IMPLEMENTATION.md`, `IMAGE_COMPLETE.md`, `IMAGE_SYSTEM.md`,
`QUICKSTART.md`, `REDESIGN_COMPLETE.md` — these are all build-time scratch notes.

**Action:** Delete all of them. They don't belong in a portfolio repo visitors will look at.

---

### R7. `OLDD/` folder is in the repo
The `OLDD/` directory contains old version source files. It's ~50 files that serve
no purpose except to confuse anyone cloning the repo.

**Action:** Delete the `OLDD/` folder entirely.

---

### R8. `beams-container` CSS class is in the component but the CSS file was never created
The original reactbits Beams component spec included a `Beams.css` file with a
`.beams-container` class. The component was adapted to use inline styles, but if
the CSS file is referenced anywhere, it would error.

**Action:** Verify no `import './Beams.css'` exists in `beams.tsx` (it doesn't — already
correct). No action needed other than confirming.

---

### R9. `types/project.ts` and `src/types/project.ts` are orphaned
Two TypeScript type definition files exist but are not imported by any component
after the projects data layer was consolidated into `projects.tsx`.

**Action:** Delete both.

---

### R10. `lib/confetti.ts` and `lib/image-config.ts` are unused
These files were part of the old project. `confetti.ts` referenced canvas-confetti
for interactions that no longer exist. `image-config.ts` defined placeholder image
configs for the old image system.

**Action:** Delete both.

---

## 📌 Priority Queue (What to Do First)

| Priority | Task |
|----------|------|
| 🔴 1 | Fix `/about` page — remove hallucinated content (Eastern Washington Univ, MacBook, etc.) |
| 🔴 2 | Remove GlassLens section — replace with a stats interstitial or nothing |
| 🔴 3 | Fix Saiful Islam card — add live URL or remove the project |
| 🟡 4 | Simplify navigation — too many items for a single-page scroll site |
| 🟡 5 | Fix light mode (or disable it entirely) |
| 🟡 6 | Remove second ScrollVelocity band |
| 🟠 7 | Delete all the internal `.md` files from root and the `OLDD/` folder |
| 🟠 8 | Delete orphaned files: `types/project.ts`, `lib/confetti.ts`, `lib/image-config.ts`, `shiny-text.tsx`, `section-divider.tsx` |
| ⚪ 9 | Add PromptMaster Pro testimonials to the project card |
| ⚪ 10 | Add Kaggle notebooks as research artifacts on the `/research` page |

---

## 📋 Current GitHub Links Status (After Latest Code Fix)

| Project | Card clicks to | Image clicks to | Direct button |
|---------|---------------|-----------------|---------------|
| TrafficGuard AI | Image → GitHub | ✅ GitHub | Source button |
| Election Analytics | Image → GitHub | ✅ GitHub | Source + Demo |
| Banana XAI | Image → GitHub | ✅ GitHub | Source + Demo |
| PromptMaster Pro | Image → Demo (no GitHub) | ✅ Demo | Demo button |
| NeoFocus | Card click → GitHub | ✅ GitHub | Source link |
| EnergyIQ | Card click → GitHub | ✅ GitHub | Source + Live |
| JetStream | Card click → GitHub | ✅ GitHub | Source link |
| Student Expense Tracker | Card click → GitHub | ✅ GitHub | Source link |
| Saiful Islam Portfolio | Card click → `#` (no links) | ✅ `#` | "Client work" |

---

*Generated May 2026 — based on actual source code reading, not speculation.*
