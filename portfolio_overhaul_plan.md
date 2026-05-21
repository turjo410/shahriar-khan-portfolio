# 📋 Portfolio Overhaul Plan — Shahriar Khan
### Version 1.0 | Status: AWAITING APPROVAL

---

## 📌 Executive Summary

A complete, ground-up redesign of `my-portfolio` — replacing the current cyberpunk neon aesthetic with a
**sharp, academic-professional dark theme** built around a bento-grid layout, purposeful micro-animations,
and real project case studies drawn exclusively from the `/project-md-files` directory.
The goal is to impress technical recruiters and research-lab hiring managers at first glance.

**No GitHub commits. Localhost only. No implementation until explicitly approved.**

---

## 🔍 Phase 1: Audit Findings

### 1.1 Current Strengths (Preserve & Polish)
- Framer Motion animation infrastructure is solid — reuse, do not rebuild
- Component architecture is clean (sections-based, data-driven)
- Good use of `CountUp`, `react-intersection-observer`, and `scroll-progress`
- Personal data (name, email, GitHub, LinkedIn, CGPA) is accurate — keep all of it
- Terminal hero widget is clever — modernize, keep the concept
- `react-countup`, `lenis`, `gsap`, `cmdk` are all available — leverage them

### 1.2 Critical Problems (Fix in Overhaul)
| # | Problem | Severity |
|---|---------|----------|
| 1 | **Neon cyber-punk palette** (cyan/purple/pink on dark) reads as gaming site, not engineering portfolio | 🔴 Critical |
| 2 | **Projects section shows PLACEHOLDER data** — none of these are real projects | 🔴 Critical |
| 3 | **Achievements section** has no styling polish — plain cards, no visual hierarchy | 🟡 High |
| 4 | **Skills section** uses neon progress bars — looks childish, not professional | 🟡 High |
| 5 | **Hero section** is visually cluttered — too many orbs, meshes, grids, gradients stacked | 🟡 High |
| 6 | **Footer** has `© 2024` (year is wrong — now 2026) and is bare-minimum | 🟠 Medium |
| 7 | **About section** stat cards repeat info visible elsewhere | 🟠 Medium |
| 8 | **No visual differentiation** between projects — all look identical | 🟡 High |
| 9 | **Particle background** is distracting and performance-heavy | 🟠 Medium |
| 10 | **Navigation** has broken routes (`/credentials`, `/statement-of-purpose`, etc.) | 🟠 Medium |

---

## 🎨 Phase 2: Design Strategy

### 2.1 New Design System

**Philosophy:** "Precision Engineering Meets Academic Credibility"
Think: Linear, Vercel, Stripe Docs — not a gaming portfolio.

#### Color Palette (Replace all neon)
| Token | Hex | Usage |
|-------|-----|-------|
| `--background` | `#0A0A0F` | Page base |
| `--surface` | `#111118` | Card base |
| `--surface-elevated` | `#16161E` | Hovered/focused cards |
| `--border` | `#1E1E2E` | Subtle dividers |
| `--border-accent` | `#2A2A3E` | Active borders |
| `--text-primary` | `#F0F0FF` | Headlines |
| `--text-secondary` | `#8B8BA8` | Body text |
| `--accent-blue` | `#4F8EF7` | Primary CTA, links |
| `--accent-indigo` | `#6C6EF5` | Secondary accent |
| `--accent-emerald` | `#34D399` | Success, "deployed" badges |
| `--accent-amber` | `#FBBF24` | Highlights, awards |

#### Typography
- **Display / H1:** `Inter` or `Geist` — 700 weight, tight tracking
- **Body:** `Inter` — 400/500 weight, relaxed line-height
- **Code / Monospace:** `Geist Mono` — for metrics, terminal, numbers
- All fonts already served via Next.js font optimization — no new deps

#### Layout Grid
- Max content width: `1280px`
- Bento grid: CSS Grid with named areas, `gap-4` (16px)
- Mobile-first breakpoints: `sm: 640`, `md: 768`, `lg: 1024`, `xl: 1280`

### 2.2 Animation Strategy (Purposeful, Not Decorative)
- **Entry animations:** `opacity: 0 → 1` + `y: 20 → 0` staggered at `0.1s` intervals — keep existing Framer Motion
- **Hover states:** Subtle `y: -2` lift + border color shift — no glow explosions
- **Scroll progress bar:** Keep existing component, restyle to match new palette
- **Remove:** particle background, floating orbs, mesh gradients, shimmer animations on text
- **Add:** Smooth GSAP scroll-triggered counter animations for metrics

---

## 🏗️ Phase 3: Section-by-Section Redesign Plan

### Section 0: Global CSS / Tokens (`src/app/globals.css`)
**Changes:**
- Replace entire neon token set with the new professional palette above
- Remove: `bg-gradient-cyber`, `bg-gradient-mesh`, `bg-grid-pattern`, `orb-cyan`, `orb-purple`,
  `text-neon-*`, `hover-glow-*`, `border-glow-*`, `animate-float`, `animate-float-delayed`
- Add: clean semantic tokens (`--surface`, `--border-accent`, `--accent-blue`, etc.)
- Simplify `body` background to flat dark — no noise/mesh overlay

---

### Section 1: Navigation (`components/navigation.tsx`)
**Changes:**
- Remove broken dropdown routes (`/credentials`, `/statement-of-purpose`, etc.)
- New nav items: `Home | About | Projects | Skills | Experience | Contact`
- Style: frosted-glass bar on scroll (existing behavior), but use new palette tokens
- Logo: Keep `SK` monogram, restyle with `--accent-blue` instead of neon gradient
- Active section highlighting via `IntersectionObserver` scroll spy

---

### Section 2: Hero (`components/sections/hero.tsx`)
**Changes:**
- **Remove:** `ParticleBackground`, floating orbs, mesh gradient, grid pattern
- **Keep:** Terminal widget concept (right column), `Available for Opportunities` badge, social icons
- **New left-column layout:**
  - Small badge: `Available for Opportunities` (green dot + text)
  - H1: `Shahriar Khan` — large, clean, `--text-primary`
  - Subtitle row: `AI/ML Engineer · Computer Vision · Full-Stack`
  - 2-line bio (concise): _"Building production-ready AI systems — from edge-deployed object detection to election analytics dashboards."_
  - Two CTAs: `View Projects` (primary filled) + `Download CV` (ghost)
  - Social icon row: GitHub, LinkedIn, Email
- **New right-column:** Redesigned terminal widget with cleaner styling
  - Metric pills: `3.92 CGPA`, `6+ Projects Deployed`, `84.78% ML Accuracy`
- **Background:** Subtle radial gradient bloom (single, centered, low opacity) — no particles

---

### Section 3: About (`components/sections/about.tsx`)
**Changes:**
- **Remove:** Triple-card layout (Education / Experience / Achievements) — too fragmented
- **New layout:** Single bento-style row
  - **Left (2/3 width):** Paragraph bio — expanded, confident, professional
  - **Right (1/3 width):** 4-metric stat grid:
    - `3.92` CGPA
    - `6+` Projects
    - `200+` Platform Members (from PromptMaster Pro)
    - `84.78%` ML Model Accuracy
- Below: Education card + current role timeline in a 2-col grid
- Clean divider lines, no card borders that glow

---

### Section 4: Skills (`components/sections/skills.tsx`)
**Changes:**
- **Remove entirely:** Neon progress bars — they are the most visually unprofessional element
- **Replace with:** Technology icon-badge cloud in grouped rows
  - Group 1 — `AI/ML Core:` PyTorch · TensorFlow · YOLOv8/v11 · scikit-learn · OpenCV
  - Group 2 — `Languages:` Python · TypeScript · Kotlin · Dart · SQL
  - Group 3 — `Web & Mobile:` Next.js · React · Flutter · Node.js · Expo
  - Group 4 — `MLOps & Tools:` TensorRT · Docker · Supabase · Firebase · Git
  - Group 5 — `Data & Analytics:` PySpark · MLlib · Recharts · Pandas · Jupyter
- Each badge: rounded pill, `--surface-elevated` bg, `--border-accent` border, icon + name
- Hover: subtle `--accent-blue` border tint
- No percentage numbers — percentages on skill bars are arbitrary and invite scrutiny

---

### Section 5: Projects (FULL REPLACEMENT — `components/sections/projects.tsx`)

**THIS IS THE MOST CRITICAL SECTION.**

All current placeholder projects are removed. Exclusively replacing with the 8 real projects found
in `/project-md-files`. Projects are categorized into two tiers:

#### Tier 1 — Featured (Large cards, detailed case study view)
These get full case-study treatment with visualizations:

**P1: TrafficGuard AI** (`Traffic-Integrated-System.md`)
- Flutter + YOLOv11 + Flask + Gemini AI traffic enforcement system
- Category badge: `AI · Mobile · Full-Stack`
- Key metrics (displayed as animated counters):
  - 16 vehicle classes detected
  - 29 feature screens
  - YOLOv11 real-time CCTV detection
  - Gemini AI assistant integrated
- Visual: System architecture diagram (described in asset prompt below)
- Tech stack pills: Flutter, YOLOv11, Python Flask, Google Gemini, ML Kit, SQLite

**P2: Bangladesh Election Analytics Dashboard** (`bangladesh-election-analytics-2026.md`)
- Next.js + PySpark + MLlib + React Native political data platform
- Category badge: `Data Science · ML · Full-Stack`
- Key metrics:
  - 84.78% Random Forest classification accuracy
  - 297 constituencies mapped
  - 59.88% voter turnout modeled
  - R² = 0.3611 Ridge Regression
- Visual: Parliament dot arc diagram + choropleth map preview
- Tech stack pills: Next.js 15, PySpark, MLlib, React Native, Recharts, React Leaflet

**P3: Banana XAI Classification App** (`banana-xai-streamlit.md`)
- Streamlit + PyTorch + 5 XAI methods (Grad-CAM, LIME, etc.)
- Category badge: `AI Research · Explainable AI`
- Key metrics:
  - 12 pre-trained models supported
  - 5 XAI visualization methods
  - 4 banana varieties classified
  - Live demo at `bananaapp.streamlit.app`
- Visual: Side-by-side Grad-CAM heatmap visualization mockup
- Tech stack pills: PyTorch, Streamlit, Grad-CAM, LIME, EfficientNet, ViT, DeiT

**P4: PromptMaster Pro** (`PromptMaster-Pro.md`)
- React + Supabase SaaS platform for AI prompt engineering education
- Category badge: `SaaS · EdTech · Full-Stack`
- Key metrics:
  - 200+ members
  - 59+ lessons across 5 tracks
  - $49 lifetime pricing, live at `promptmasterpro.tech`
  - 18+ MCP servers covered
- Visual: Dashboard screenshot with progress tracking
- Tech stack pills: React 18, TypeScript, Vite, GSAP, Supabase, Lemon Squeezy, WebGL/OGL

#### Tier 2 — Additional Projects (Smaller bento cards, key stats only)

**P5: NeoFocus** (`NeoFocus.md`)
- Flutter + Supabase gamified productivity app
- Riverpod, GoRouter, Freezed, fl_chart, Pomodoro timer, XP/leveling system
- Badges: Flutter · Supabase · Riverpod

**P6: EnergyIQ — IoT Energy Dashboard** (`iot-energy-dashboard.md`)
- Next.js + Recharts + PapaParse real-time energy monitoring
- Real TOMZN IoT device, Sharp refrigerator data, live GitHub Pages deployment
- Badges: Next.js · Recharts · IoT · Green Computing

**P7: JetStream Music Player** (`jetstream-music-player.md`)
- React + Expo + Express hybrid music streaming platform
- Glassmorphism Web UI + React Native mobile + YouTube audio extraction backend
- Badges: React · Expo · Express · WebAudio API

**P8: Student Expense Tracker** (`student-expense-tracker.md`)
- Flutter + Firebase + SQLite offline-first finance app
- Google ML Kit OCR receipt scanner, fl_chart analytics, budget system
- Badges: Flutter · Firebase · ML Kit

#### Project Card Layout
- Tier 1: Full-width card with `grid lg:grid-cols-5` — 3 cols for case study text, 2 cols for metrics panel
- Tier 2: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4` bento grid — compact highlight cards
- Filter bar at the top: `All | AI/ML | Mobile | Full-Stack | Data Science`
- Each Tier 1 card has a subtle left border accent in category-specific color

---

### Section 6: Experience (`components/sections/experience.tsx`)
**Changes:**
- **Keep data** (TA at EWU, EWU Programming Club, Photography Club VP) — it's accurate
- **Redesign:** Replace animated glow-dot timeline with a clean vertical timeline
  - Left: thin `1px` line in `--border-accent`
  - Milestone dots: `8px` circle in `--accent-blue` (no pulsing animation)
  - Cards: flat `--surface` background, `--border` border, no glow
  - Typography hierarchy: Role title → Company → Period → Bullets

---

### Section 7: Achievements (`components/sections/achievements.tsx`)
**Changes:**
- **Completely rebuild** — current version has zero visual identity
- **New layout:** Alternating "award spotlight" rows
  - Each award: icon glyph (🏆/🥈/🎓) + large title + org + year badge
  - Scholarship awards: Amber/gold accent
  - Competition awards: Indigo accent
- Add subtle entry animation — stagger fade-up

---

### Section 8: Contact (`components/sections/contact.tsx`)
**Changes:**
- **Remove:** Double CTA block (redundant — large hero CTA + cards below)
- **Simplify to:** Single centered block
  - H2: `Let's Work Together`
  - One-paragraph invitation
  - 4-column contact grid (Email, Phone, LinkedIn, GitHub) — keep existing, restyle
  - Location footer line
  - Response time tag
- Fix footer copyright year to `© 2026`

---

### Section 9: Footer (`components/footer.tsx`)
**Changes:**
- Add nav links shortcut row
- Update year to `© 2026`
- Add subtle separator line above

---

---

## 🖼️ Phase 4: Asset Generation Prompts

No placeholder images from the web. Below are the exact, detailed prompts you will use to generate
all required visuals. After generating, place them in `public/projects/`.

### P1 — TrafficGuard AI

**Image 1: System Architecture Diagram**
```
Prompt: "A clean, dark-mode technical system architecture diagram for a mobile traffic enforcement AI app.
Three vertically-stacked boxes connected by arrows: [MOBILE CLIENT - Flutter/Dart icon, Android logo]
in the center, connected left to [TRAFFIC MANAGEMENT SERVER - Python Flask, database icon, REST API]
and right to [AI DETECTION SERVER - YOLOv11 logo, camera icon, MJPEG stream]. Below both servers:
[EXTERNAL INTEGRATIONS: Google Gemini, Google Maps, ML Kit, SQLite icons in a row].
Background: #0A0A0F. Box borders: subtle blue (#4F8EF7). Font: Inter. Arrows: animated dashed lines in blue.
Professional engineering diagram style, minimal, no gradients."
Filename: public/projects/trafficguard-architecture.png (1200x600)
```

**Image 2: CCTV Detection Preview**
```
Prompt: "A dark-mode screenshot mockup of a mobile app CCTV screen. Shows a live camera feed of a Dhaka
street with overlaid YOLOv11 bounding boxes in different colors: green box labeled 'Rickshaw 0.94', red
box labeled 'VIOLATION: Speed 87km/h 0.89', blue box labeled 'CNG 0.91'. Small speed indicator in top-right
corner. Bottom bar shows: 'Camera: Badda Junction | Objects: 14 | FPS: 28'. Dark UI frame around the screen.
Realistic traffic scene, Bangladesh road context."
Filename: public/projects/trafficguard-cctv.png (800x500)
```

---

### P2 — Bangladesh Election Analytics Dashboard

**Image 1: Parliament Dot Arc (Seat Visualization)**
```
Prompt: "A data visualization of Bangladesh's 13th parliamentary election results. A semicircular parliament
seating chart (dot arc) showing 297 dots arranged in concentric arcs. Color coding:
- 209 dots in deep green (#006A4E, BNP majority) filling most of the arc
- 52 dots in orange (#F97316, opposition/Jamaat)
- 36 dots in slate (#64748B, Independents)
A dashed vertical threshold line at the 149-seat majority mark, labeled '149 seats for majority'.
Below the arc: legend with party names and seat counts. Dark background #0A0A0F, white labels Inter font.
Clean, minimalist election data viz style like the FT or NY Times election maps."
Filename: public/projects/election-parliament-arc.png (900x500)
```

**Image 2: ML Model Results Chart**
```
Prompt: "A professional dark-mode data science chart showing two panels side by side.
Left panel: A confusion matrix heatmap for a Random Forest classifier with 84.78% accuracy.
4x4 matrix with party labels: BNP, Jamaat, Independent, NCP. High-accuracy cells in bright indigo,
low in dark. Title: 'Seat Classification — Random Forest'.
Right panel: A scatter plot showing voter turnout (y-axis 40-80%) vs Internet Penetration (x-axis 0-60%).
Blue dots per constituency, red dashed trend line sloping downward. Title: 'Internet vs Turnout (R²=0.36)'.
Dark background #0A0A0F, Inter font, professional academic chart style."
Filename: public/projects/election-ml-results.png (1100x500)
```

---

### P3 — Banana XAI Classification

**Image 1: XAI Comparison Grid**
```
Prompt: "A professional dark-mode UI mockup of a Streamlit web app showing explainable AI results.
A 2x3 grid of images, all showing the same banana photograph but with different overlays:
1. Original photo (clear banana)
2. Grad-CAM heatmap (red-yellow gradient on the banana skin regions)
3. Grad-CAM++ (more precise red hotspot on the peel)
4. Eigen-CAM (green gradient overlay)
5. Ablation-CAM (blue overlay)
6. LIME (green/red superpixel segmentation)
Each cell labeled with method name and confidence score. Top bar: model selector dropdown showing
'EfficientNet-B0 — Variety: Sagor Kola (94.2%)'. Dark UI, professional data science aesthetic."
Filename: public/projects/banana-xai-grid.png (1000x600)
```

---

### P4 — PromptMaster Pro

**Image 1: Dashboard with Progress Tracking**
```
Prompt: "A premium dark SaaS web app dashboard screenshot. Left sidebar with navigation icons and
'PromptMaster Pro' logo in cyber cyan. Main panel shows: a large progress card '60% Complete — Day 6 of 10',
below it a horizontal grid of 10 module cards with checkmarks on completed ones (Days 1-6 checked, 7-10
locked). Right panel: achievement badges section showing unlocked badges like 'Chain Master', 'Vision Pro',
'Full Stack Hero' with gold medal icons. Bottom: stats row '59 Lessons | 20 Challenges | 12 Badges'.
Dark background, cyan/purple accents, premium SaaS aesthetic like Linear or Notion."
Filename: public/projects/promptmaster-dashboard.png (1200x650)
```

---

### P5 — NeoFocus

**Image 1: App Dashboard + Pomodoro Screen**
```
Prompt: "Two side-by-side Android phone mockups in dark mode. Left phone: NeoFocus productivity app
dashboard showing a large circular momentum ring (75% filled), 'Today: 8/12 tasks' text, horizontal habit
capsules with streak numbers, and a Pomodoro quick-launch button. Right phone: Pomodoro timer screen with
a large animated arc timer showing '18:42 remaining', glowing mint-to-violet gradient arc, pulsing play button,
'Session 3 of 4', XP counter '+25 XP'. Deep space black (#0A0E27) background, cyan and violet accents.
Premium Flutter app mockup style."
Filename: public/projects/neofocus-screens.png (800x600)
```

---

### P6 — EnergyIQ

**Image 1: Energy Dashboard + Charts**
```
Prompt: "A dark-mode Next.js web dashboard for IoT energy monitoring. Top row: 4 metric cards showing
'Current Power: 142W', 'Total Energy: 18.7 kWh', 'Cumulative Cost: ৳185', 'Power Factor: 0.94' with
sparkline trend indicators. Middle: a large line chart showing 24-hour power consumption with a distinct
cyclical sawtooth pattern (refrigerator compressor on/off cycles). Bottom left: a pie chart showing power
type distribution (Active/Reactive/Apparent). Bottom right: a cost breakdown card with Bangladesh tariff
tiers. Dark background, Recharts-style visualizations, professional green computing aesthetic."
Filename: public/projects/energyiq-dashboard.png (1100x600)
```

---

### P7 — JetStream Music Player

**Image 1: Web UI Glassmorphism Player**
```
Prompt: "A premium glassmorphism web UI music player. Deep space black background with subtle purple-blue
gradient blob. Left: frosted glass sidebar with navigation icons. Center: album grid with glowing cover arts
for current playing track — large frosted card with album art, track name, artist. Integrated bottom player
bar with waveform visualizer (frequency bars in cyan), seek bar, play/pause, volume. Right panel: queue list
in a glass panel. Colors: #0A0E27 bg, #00D9FF cyan accent, #9D4EDD purple accent, frosted glass panels
with 10% white opacity. Premium, modern music app aesthetic."
Filename: public/projects/jetstream-web.png (1200x650)
```

---

### P8 — Student Expense Tracker

**Image 1: Analytics + Budget Screens**
```
Prompt: "Two side-by-side dark-mode Android app mockups for a student finance app.
Left phone: Analytics screen with a donut/pie chart showing expense categories (Food 35%, Transport 20%,
Books 15%, Entertainment 15%, Other 15%) in distinct colors. Below: a 6-month bar chart trend in blue.
Summary cards at top: 'Net: +৳6,200', 'Income: ৳18,000', 'Expenses: ৳11,800'.
Right phone: Budget screen with 5 budget progress cards. Each card: category emoji, name, color progress
bar (green/yellow/red), '৳3,200 / ৳5,000 spent'. One card in red 'Over Budget'. Clean, Apple-inspired
dark minimal UI."
Filename: public/projects/expense-tracker-screens.png (800x600)
```

---

## 📁 Phase 5: File Change Inventory

### Files to MODIFY (no new files needed beyond assets)
```
src/app/globals.css              — Replace color tokens, remove neon/cyber classes
components/navigation.tsx        — Simplify nav items, restyle
components/footer.tsx            — Fix year, add nav links
components/sections/hero.tsx     — Remove particle/orb bloat, clean layout
components/sections/about.tsx    — New bento layout, remove triple card
components/sections/skills.tsx   — Remove progress bars, add badge cloud
components/sections/projects.tsx — FULL REPLACEMENT with 8 real projects
components/sections/experience.tsx — Restyle timeline
components/sections/achievements.tsx — Complete visual rebuild
components/sections/contact.tsx  — Simplify, remove redundant block
```

### Files to CREATE
```
public/projects/trafficguard-architecture.png    — Asset (you generate)
public/projects/trafficguard-cctv.png            — Asset (you generate)
public/projects/election-parliament-arc.png      — Asset (you generate)
public/projects/election-ml-results.png          — Asset (you generate)
public/projects/banana-xai-grid.png              — Asset (you generate)
public/projects/promptmaster-dashboard.png       — Asset (you generate)
public/projects/neofocus-screens.png             — Asset (you generate)
public/projects/energyiq-dashboard.png           — Asset (you generate)
public/projects/jetstream-web.png                — Asset (you generate)
public/projects/expense-tracker-screens.png      — Asset (you generate)
```

### Files to LEAVE UNTOUCHED
```
components/scroll-progress.tsx    — Keep as-is, just recolor
components/smooth-scroll-provider.tsx — Keep Lenis setup
components/terminal-effect.tsx    — Keep, restyle output
components/tilt-card.tsx          — Keep for project cards
components/command-palette.tsx    — Keep
lib/animations.ts                 — Keep
lib/utils.ts                      — Keep
next.config.ts                    — Keep
```

### Files to REMOVE / DISABLE
```
components/particle-background.tsx  — No longer used after hero cleanup
```

---

## 🚦 Phase 6: Execution Order

Steps are ordered to minimize broken states during implementation:

```
Step 1  → Update globals.css (design tokens + remove neon classes)
Step 2  → Update navigation.tsx (clean nav items)
Step 3  → Update footer.tsx (year + links)
Step 4  → Rebuild hero.tsx (new clean layout, remove particles)
Step 5  → Rebuild about.tsx (bento layout)
Step 6  → Rebuild skills.tsx (badge cloud)
Step 7  → FULL replacement of projects.tsx (8 real projects, 2-tier layout)
         ↳ [BLOCKER: Asset images must be ready before this step looks complete]
         ↳ Use placeholder colored blocks if assets not yet generated
Step 8  → Restyle experience.tsx (clean timeline)
Step 9  → Rebuild achievements.tsx (award spotlights)
Step 10 → Simplify contact.tsx
Step 11 → Final QA: mobile responsiveness, dark/light toggle, scroll animations
```

---

## ❓ Phase 7: Open Questions (Need Your Input)

Before implementation begins, I need confirmation on the following. Do NOT start coding
until these are resolved (unless you tell me to proceed with reasonable defaults):

| # | Question | Default if Unanswered |
|---|----------|-----------------------|
| Q1 | **Resume PDF location:** Is `public/resume/Shahriar_Khan_Resume.pdf` the current, up-to-date resume to link in the hero? | Assume yes, keep existing link |
| Q2 | **Live URLs:** PromptMaster Pro links to `promptmasterpro.tech`. Should I display this as a live demo link on the project card? | Yes, show it |
| Q3 | **Banana XAI Live Link:** The app is live at `bananaapp.streamlit.app`. Display it? | Yes |
| Q4 | **EnergyIQ Live Link:** Deployed at `turjo410.github.io/iot-energy-dashboard`. Display it? | Yes |
| Q5 | **GitHub repos:** All projects point to `github.com/turjo410`. Are individual repo URLs available (e.g. `/trafficguard-ai`, `/election-dashboard`)? Or keep generic profile link? | Use profile link as fallback |
| Q6 | **saiful-islam-portfolio.md** is in the project-md-files folder — this appears to be someone else's portfolio. Should I include it as a project you built (client work)? | **NEED YOUR ANSWER** — do not include unless confirmed |
| Q7 | **Light mode:** The current site has a light/dark toggle. Keep it? | Yes |
| Q8 | **Academic subpages** (`/credentials`, `/research`, etc.) appear to not exist. Should the nav link to them (with coming-soon state) or should they be removed entirely? | Remove from nav |
| Q9 | **Profile photo:** No profile photo is used anywhere. Do you want one added to the Hero section? If yes, provide a photo. | No photo — text-only hero |

---

## ✅ Approval Checkpoint

**This plan is complete. Here is a summary of what will change:**

| Section | Change Level |
|---------|-------------|
| Design Tokens / CSS | 🔴 Full replacement |
| Navigation | 🟡 Simplified |
| Hero | 🟡 Major cleanup |
| About | 🟡 Layout rebuilt |
| Skills | 🔴 Full replacement (no more progress bars) |
| Projects | 🔴 Full replacement (8 real projects replacing 5 fake ones) |
| Experience | 🟠 Visual restyle |
| Achievements | 🟡 Visual rebuild |
| Contact | 🟠 Simplified |
| Footer | 🟢 Minor fix |

**No code changes will be made until you explicitly reply: "Approved — proceed."**

If you want to modify anything in this plan first, tell me which section to change and how.

---
*Plan authored: May 2026 | Target: localhost:3000 only | No git commits*
