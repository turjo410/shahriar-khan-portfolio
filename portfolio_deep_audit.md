# Portfolio Deep Audit — Shahriar Khan
**Date:** May 2026 | **Source:** Full screenshot + source code analysis  
**Purpose:** Section-by-section professional critique for recruiter-grade polish

---

## 🧭 Executive Assessment

The portfolio has a solid technical foundation and real, impressive content. The
**biggest problem is not individual components — it is the lack of visual coherence**.
Each section was designed slightly differently, in different sessions, by slightly
different design decisions. The result is a page that feels assembled rather than
designed. The Beams WebGL background is technically impressive but creates a very
dark, low-contrast environment that fights every card placed on top of it.

**Three root causes of the current unprofessional feel:**
1. Too many competing visual "moments" — TrueFocus, ScrollVelocity, Beams, BorderGlow,
   SpotlightCard, PillNav GSAP — no single thing gets to breathe.
2. The projects section is the longest by far but presents information in the least
   scannable way possible (tall stacked mega-cards with 12 tech stack pills each).
3. Typography is inconsistent — some headings use `text-display-xl` (huge), others
   use `text-display` (medium), and body text ranges from `text-sm` to `text-xl`
   with no clear rhythm.

---

## 🟡 Section 1: Navigation (PillNav)

### Current state
- Renders as three disconnected floating pills: `[SK logo] | [About Projects Skills Experience More Contact] | [Hire Me]`
- GSAP pill-hover animation is tasteful but the `font-size: 14px uppercase` pill text
  reads like a dashboard tab, not a portfolio nav
- The `More` item links to `/about` — this is confusing to a first-time visitor; they
  don't know what "More" means
- On mobile: the two-line layout stacks hamburger + logo which looks cluttered
- `Hire Me` button in accent-blue competes visually with the hero CTA which is also
  accent-blue below it

### Fixes needed
| # | Issue | Fix |
|---|-------|-----|
| 1 | `More` is vague | Rename to `About Me` or remove and link from hero |
| 2 | All-caps 14px for nav items | Use `text-sm` sentence case (like Linear.app nav) |
| 3 | Three separate pill containers look fragmented | Merge logo + nav into a single unified pill bar |
| 4 | `Hire Me` CTA clashes with hero blue | Change to outline/ghost or reduce to an icon |
| 5 | No active state indicator on scroll | ScrollSpy currently only activates on `/` route match; `/#about` doesn't match active state |

---

## 🔴 Section 2: Hero

### Current state
The hero is the most important section and has several good instincts executed
imprecisely.

#### What's good
- Profile photo at `4:5` ratio — professional, fills the right column well
- Terminal effect cycling real project achievements — clever
- Status badge with live pulsing dot — clean
- Social icon row with monospace email — nice touch

#### Critical issues

**2.1 — Name size vs screen size**  
`text-display-xl` uses `clamp(3.75rem, 10vw, 9rem)`. At 1280px, the name renders at
roughly **128px** and breaks across two lines: `Shahriar` on one line, `Khan` on the
next. This isn't bold — it's broken. On most screens the name overflows the 7-column
grid. Fix: reduce to `clamp(2.5rem, 7vw, 6.5rem)`.

**2.2 — The "Hi, I'm" eyebrow text**  
`text-2xl sm:text-3xl` in `text-secondary`. This reads as a greeting for a personal
blog, not an engineering portfolio. Experienced portfolios (Shu Ding, Bryn Locker,
Cassidy Williams) don't say "Hi, I'm" — they open with a crisp title or punchy line.
Recommendation: remove "Hi, I'm" entirely and start with the name, or replace with
a category label like `Based in Dhaka · Open to Work`.

**2.3 — Bio is too apologetic**  
Current: *"I'm a CSE graduate from East West University, Dhaka who builds AI systems
that actually get deployed. I'm actively looking for a full-time software or ML
engineering role, and I'm equally interested in a fully funded PhD in AI, Computer
Vision, or a related field."*

Problems: "who builds AI systems that actually get deployed" implies most people
*don't* deploy — which sounds defensive. "I'm actively looking" + "I'm equally
interested" uses first-person + hedge twice in the same sentence.

Suggested rewrite:
> *"CSE graduate from East West University, Dhaka. I build and ship AI systems —
> from real-time traffic enforcement on Flutter to election analytics that predicted
> 297 constituencies. Open to full-time ML/SWE roles and fully funded PhD
> opportunities in AI and Computer Vision."*

**2.4 — Metric strip values are too small**  
Three metric cards with `text-lg sm:text-xl` — on a portrait card that's `4:5`,
those numbers look like footnotes. The portrait is the dominant visual element; the
metric strip should either be removed or made card-sized (`text-3xl`).

**2.5 — Terminal text is cut off on small screens**  
`TerminalEffect` renders full strings like `"✔ PromptMaster: 200+ members, $49
lifetime SaaS"` without any truncation. On 375px screens this overflows the glass
terminal container.

**2.6 — The gradient overlay on the portrait is too aggressive**  
`from-background/85` at the bottom means roughly the bottom 30% of the portrait
photo is nearly solid dark. This makes the photo feel like it's being swallowed by
the background rather than framed by it. Reduce to `from-background/60`.

**2.7 — "Available for ML & engineering roles" badge text**  
"ML & engineering roles" is redundant — ML is a type of engineering. Say
"Open to full-time & research roles" instead.

---

## 🟡 Section 3: ScrollVelocity Band

### Current state
Giant horizontal marquee of "Computer Vision · Production AI · Full-Stack · Data
Science · Edge Deployment · Explainable AI" with outlined/filled alternating words.

### Issues
- The `✦` separators render as broken characters on some systems — use `·` or `/`
- Outlined text at `clamp(3rem, 7vw, 6rem)` with `WebkitTextStroke` does not work
  on Windows Chrome with ClearType — the outline is invisible at some zoom levels
- The band adds motion but no meaning. A recruiter scanning the page can't stop and
  read it before it scrolls away. Consider replacing with a static "specialty tags"
  row or removing this band entirely.

---

## 🔴 Section 4: About

### Current state
Bento grid: bio card (2/3) + stats grid (1/3) + education + current role cards.

#### What's good
- CountUp stats are a nice touch
- Bio card with `text-xl` is readable
- Education pill badges (CGPA 3.92 / 4.00, Full Merit Scholarship) are clear

#### Issues

**4.1 — Heading "Engineering AI systems that ship and scale." is excellent — keep it**  
This is your single best headline. Don't change it.

**4.2 — The About bio repeats the hero bio content**  
Hero bio: CSE graduate, builds AI, looking for full-time/PhD.  
About bio paragraph 3: "Right now I'm looking for a team that wants to build
something that matters — full-time roles, research collaborations..."  
This is exactly the same message said twice in two adjacent sections. The About
section bio should focus on *story and craft*, not repeat the job-seeking angle.

**4.3 — "93 TOEFL score" stat looks out of place in a 4-number bento**  
The other 3 stats (CGPA, Projects shipped, SaaS members) are about your work.
TOEFL is an administrative qualification. Replace with something impactful:
`4+ Years building AI` or `3 Live platforms` or `2026 Grad`.

**4.4 — Teaching Assistant card says "Current Role" but should be renamed to "Roles"**  
Once you graduate and are hired, this will be wrong. Say `Teaching Role` or `TA, EWU`.

**4.5 — The pills in the education card wrap awkwardly**  
`CGPA 3.92 / 4.00` and `Full Merit Scholarship` are too long as pills — they wrap
onto two lines on some viewports. Shorten to `3.92 GPA` and `100% Scholarship`.

---

## 🔴 Section 5: Projects — The Biggest Problem

### Current state
4 featured (Tier 1) mega-cards stacked vertically + 5 compact (Tier 2) cards in a grid.

### Root problem: the two-tier layout is visually exhausting

Each Tier 1 card contains:
- Category badges + year
- Title (3xl) + tagline
- 4-line description
- 4 bullet highlights
- 3 metric tiles with CountUp
- 12+ tech stack pills
- Source / Live Demo buttons

That's **8 different content blocks** in one card. Multiply by 4 and the projects
section is a 2,000px-tall wall of text. No recruiter reads this. They scan.

### What professional portfolios do instead

Reference portfolios: [paco.me](https://paco.me), [leerob.com](https://leerob.com),
[rauno.me](https://rauno.me), [bryn.dev](https://bryn.dev)

They all use one of these patterns:

**Pattern A: Card grid with hover-expand**
- 3-column grid of minimal cards showing: image, title, 1-line tagline, year
- Hover reveals a brief description and links
- Click goes to a dedicated case study page
- Clean, fast to scan, elegant

**Pattern B: Numbered list with side image**
- Left: numbered project index (01 — 09)
- Right: on hover, the relevant screenshot appears
- Title, one tagline, two tech badges, one link
- Brutalist-minimal — used by senior engineers to signal confidence

**Pattern C: Magazine layout (2-col feature + grid secondary)**
- One hero project takes 2 columns wide at the top
- 3-4 secondary projects in a compact row below
- No bullet lists — one sentence each
- Think: Linear changelog style

### Specific issues in current implementation

| # | Problem | Impact |
|---|---------|--------|
| 1 | 12 tech stack pills per card — too many to read | Cluttered, visually noisy |
| 2 | 4 highlighted bullet points per card | Same info already in description |
| 3 | CountUp metrics animate but `"16 Vehicle classes"` is not impressive to a recruiter unfamiliar with the project | Loses the non-expert audience |
| 4 | The Tier 1 image is `lg:sticky lg:top-24` but the card isn't tall enough on many screens for this to actually stick | Broken on mid-range screens |
| 5 | Tier 2 grid uses `aspect-[16/10]` which makes screenshots of mobile apps (NeoFocus, Expense Tracker) look squished | Images are distorted |
| 6 | `Saiful Islam Portfolio (Client)` has no links — appears as filler with "Client work" italic text | Looks like padding the count |
| 7 | Filter bar shows "All / AI/ML / Mobile / Full-Stack / Data Science" but 8 of 9 projects contain "Full-Stack" — the filter is effectively useless | Misleading |
| 8 | Clicking the image opens GitHub. Clicking the title also opens GitHub. Source button also opens GitHub. Three clicks to the same destination | Redundant |

### Recommended project layout redesign

**Remove the two-tier system entirely.** Instead:

```
FEATURED WORK
──────────────────────────────────────────────────────

[01] TrafficGuard AI         AI/ML · Mobile · 2025       GitHub ↗
     YOLOv11 traffic enforcement for Dhaka. 16 vehicle classes.
     Flutter · Python · Gemini

[02] Election Analytics 2026  Data Science · 2026         Live ↗ GitHub ↗
     PySpark ML dashboard, 84.78% RF accuracy, 297 constituencies.
     Next.js · PySpark · React Native

[03] PromptMaster Pro         SaaS · 2025                 Live ↗
     EdTech platform, 200+ paying members, 59 lessons, Supabase auth.
     React · Supabase · GSAP

──────────────────────────────────────────────────────

MORE PROJECTS  [NeoFocus] [EnergyIQ] [JetStream] [Expense Tracker] [Saiful]
               Each: small card, title, 1 badge, year, GitHub link

──────────────────────────────────────────────────────
```

This is scannable in 30 seconds. The current layout requires 5+ minutes.

---

## 🟠 Section 6: TrueFocus "Ready to Work" Interstitial

### Current state
Giant words "Ready to Work" with animated corner-bracket focus effect, subline below.

### Issues
- `clamp(3rem, 9vw, 8rem)` renders as two-line "Ready / to Work" on any screen under
  ~1000px wide because "Ready to Work" is three words not one
- The subline `"CSE graduate · open to full-time roles & fully funded PhD..."` repeats
  the hero bio for the **third time** in the page
- The component is placed between Projects and Skills — there is no logical reason for
  a motivational statement between these two purely informational sections
- The TrueFocus word-blur animation is clever for a landing page headline but used as
  a section divider it reads like a loading screen

**Recommendation:** Remove this section entirely. If you want a visual break between
Projects and Skills, use a single sentence quote — `"Code that ships. Problems that
matter."` — with no animation.

---

## 🟠 Section 7: Skills

### Current state
6 category cards in a 2-column grid + "Also experienced with" tech marquee.

### Issues

**7.1 — 6 cards is too many**  
AI/ML, Data Science, Languages, Web/Backend, Mobile, DevOps. These overlap heavily.
PyTorch appears in AI/ML. scikit-learn appears in AI/ML. PySpark appears in Data
Science. Recharts appears in Data Science. WebSocket appears in both Web/Backend
and "Also experienced with". This looks like padding.

**7.2 — The cards have no hierarchy**  
All 6 cards look identical. A recruiter for a CV/ML role should immediately see
"AI / ML Core" as primary. The other categories should be clearly secondary.

**7.3 — "Also experienced with" marquee contains duplicates**  
`Vercel` appears in DevOps card AND in the marquee. `WebSocket` appears in Web/Backend
AND in the marquee. `PostgreSQL` appears in DevOps card AND in the marquee **twice**.

**7.4 — Displaying "Kotlin, Java, C++" signals you haven't used them recently**  
This is common advice in CV reviews: listing a language you learned in a course and
haven't shipped production code with is worse than not listing it. Remove languages
you can't speak fluently in an interview today.

**7.5 — The ALSO_USED list has 21 items**  
Items like "Notion", "Linear", "DaVinci Resolve", "Blender" are personal productivity
tools, not technical skills. A recruiter for an AI/ML role does not care that you use
Notion.

**Recommended structure:**
```
PRIMARY  — AI / ML Core (full width, prominent)
SECONDARY — Languages · Web · Mobile · Data (2-col)
TOOLS     — Compact icon row (no card, just a horizontal strip)
```

---

## 🟠 Section 8: Experience

### Current state
BorderGlow cards with timeline, icons, responsibilities.

### What's good
- BorderGlow directional glow is the best visual feature on the entire page
- Card sizes and padding are now generous
- Timeline dots are clean

### Issues

**8.1 — "Vice President, Photography Club 2018–2020" is the weakest card**  
This is 6 years ago and pre-university. At the bottom of a technical portfolio it
reads as filler. Either move it to a separate "Early Leadership" section below the
fold, or reduce it to a single one-liner and remove the responsibilities list.

**8.2 — "General Member, EWU Programming Club" has no concrete outcomes**  
The four bullets say: volunteered at contests, participated in competitions,
co-organized workshops, collaborated with teammates. These are activities, not
achievements. Rewrite with results: "Solved X problems at ICPC regional" or
"Reached [rank] in inter-university contest."

**8.3 — The timeline line is misaligned**  
`left-5 sm:left-7` with `pl-16 sm:pl-20` means the dot and the line don't sit at the
same horizontal position on desktop — the line is at `left-7` but the dot is at
`left-4`. Visually the dot appears to float between the line and the card edge.

**8.4 — Responsibilities use present tense for the TA role correctly but the other
two roles also use present tense ("Led", "Volunteered")**  
Past roles should use simple past tense.

---

## 🟢 Section 9: Achievements

### Current state
5 award/scholarship cards in a single-column grid, `py-14 sm:py-20`.

### What's good
- Padding is now appropriate
- Gold vs Indigo color coding for Scholarship vs Competition is clear

### Issues

**9.1 — Three scholarship cards all from the same institution look repetitive**  
"Full Tuition-Free Merit Scholarship (2022)", "Dean's Merit Scholarship (Spring 2025)",
"Merit Scholarship & Dean's List (Fall 2024)" are three different awards that all say
the same thing: you are academically excellent. Merge them into a single card:

> **Academic Excellence Awards — East West University**  
> Full tuition merit scholarship · Dean's List Fall 2024 & Spring 2025

**9.2 — The Photography and Short Film awards are from 2022**  
Four years ago, pre-CS career. These are fine to keep but should be styled more
subtly — they signal creative range, not technical credibility.

**9.3 — No GitHub or Kaggle competition awards**  
If you've ever placed in a Kaggle competition or GitHub hackathon, those are far
more relevant and should replace or supplement the creative arts awards.

---

## 🟢 Section 10: Contact

### Current state
Hero CTA card + 4 contact channel cards + footer note.

### What's good
- Layout is clean
- Status dot with "Available for opportunities" is a nice professional touch
- 4-column channel grid is appropriately sized

### Issues

**10.1 — "Have a project or role in mind?" heading is generic**  
This could be on any freelancer's portfolio. Make it specific to your goals:
"Looking to hire an AI engineer or PhD candidate?" or "Building something
with AI? Let's talk."

**10.2 — Contact bio in hero CTA says "consulting on production AI systems"**  
You are a fresh graduate. Saying "consulting" may create wrong expectations.
Change to "research collaborations, internships, or full-time roles."

**10.3 — The email address in the contact CTA card is redundant**  
You have a `mailto:` link on the "Start a conversation" button AND a separate
"Email" channel card with the same address. Remove one.

**10.4 — Phone number is displayed publicly**  
`+880 1975-759760` is shown on the production website. Consider replacing with
"Available on request" or a WhatsApp business link to reduce spam.

---

## 🟢 Section 11: Footer

### Current state
3-column: brand/tagline + nav links + social icons.

### What's good  
- Clean and minimal
- Copyright 2026 is correct

### Issues

**11.1 — Footer tagline says "AI/ML Engineer building production-ready systems"**  
But the hero says "CSE Engineer" and the bio says "CSE graduate." Three different
self-descriptions in one page. Pick one and use it everywhere.

**11.2 — "Built with Next.js, TypeScript & Framer Motion" is underwhelming**  
Everyone builds with Next.js. If you want to signal technical depth, say:
"Built with Next.js 16, Tailwind CSS v4, Three.js & Framer Motion." or just
remove the stack credit from the footer entirely.

---

## 🔴 Overall Design Issues

### Color consistency problem

The design system defines:
- `--accent-blue: 222 90% 64%` (#4F8EF7)
- `--accent-indigo: 240 84% 67%` (#6C6EF5)
- `--accent-emerald: 152 61% 52%` (#34D399)
- `--accent-amber: 43 96% 56%` (#FBBF24)
- `--accent-rose: 350 89% 66%`

But in practice every section uses different combinations:
- Nav: blue
- Hero: blue
- About section label: blue, stats: blue, education card: blue, role card: indigo
- Projects: each card has different accent (blue, indigo, amber, rose)
- Skills: all 5 accents + the "also used" marquee pills use `text-secondary`
- Experience: blue (Academic), indigo (Technical), amber (Leadership)
- Achievements: amber (Scholarship), indigo (Competition)
- Contact: blue, indigo

**There is no dominant accent color.** Everything is highlighted, which means nothing
is highlighted. The blue `#4F8EF7` should be the *primary* accent used sparingly for
CTAs, links, and primary actions. Everything else should be secondary.

### Spacing inconsistency

Sections use different padding values:
- Hero: `pt-24 pb-16`
- About: `py-24 sm:py-32`
- Projects: `py-24 sm:py-32`
- Skills: `py-24 sm:py-32`
- Experience: `py-24 sm:py-32`
- Achievements: `py-14 sm:py-20`
- Contact: `py-24 sm:py-32`

Achievements at `py-14` is noticeably smaller than every other section — the sudden
reduction in spacing creates a visual glitch when scrolling. Either make all sections
`py-20 sm:py-28` or make Achievements match the others.

### Card style inconsistency

There are 6 different card treatments currently in use:
1. `.card-pro` (frosted glass, default)
2. `SpotlightCard` (mouse-tracking glow wrapper)
3. `BorderGlow` (edge-directional glow)
4. Metric tiles (plain `bg-surface-elevated` bordered box)
5. Channel cards in contact (`.card-pro card-pro-lift`)
6. PillNav pills (gsap-animated inline)

This is too many different card paradigms for one site. Pick two: one for interactive
elements (SpotlightCard) and one for static information (BorderGlow or `.card-pro`).

### The Beams background is doing too much

The `SiteBackground` WebGL Beams renders blue diagonal beams across the entire page.
Every section has `backdrop-filter: blur(14px)` to create glass cards over the beams.
The result is that every card has a subtle glow from the beams showing through, but
the beams rotate at 32° and move — so the glow pattern behind each card is
constantly shifting. This creates a restless, busy quality to the page.

**Recommendation:** Keep Beams but reduce `beamNumber` from 20 to 8, reduce `speed`
from 1.6 to 0.8, and increase `rotation` to 45°. This makes the beams feel more like
subtle ambiance rather than a competing visual layer.

---

## 📋 Project Showcase Redesign Recommendation

The current two-tier system with Tier 1 mega-cards is the single most unprofessional
aspect of the portfolio. Here is a concrete redesign plan:

### Proposed layout: "Numbered Case Studies + Project Grid"

```
SECTION HEADER
"9 projects. All shipped."

──────────────────────────────────────────────────────

01                                               [Live] [GitHub]
TRAFFICGUARD AI                                  AI/ML · Flutter · 2025
Real-time YOLOv11 enforcement for Dhaka traffic officers.
16 vehicle classes · Gemini AI assistant · ANPR

──────────────────────────────────────────────────────

02                                               [Live] [GitHub]  
ELECTION ANALYTICS 2026                          Data Science · Next.js · 2026
PySpark ML dashboard for Bangladesh's 13th Parliament.
84.78% RF accuracy · 297 constituencies · React Native companion

──────────────────────────────────────────────────────

03                                               [Live]
PROMPTMASTER PRO                                 SaaS · React · 2025
EdTech platform for AI prompt engineering mastery.
200+ paying members · 59 lessons · Supabase + Lemon Squeezy

──────────────────────────────────────────────────────

04
BANANA XAI                                       Research · Python · 2025
Explainable AI for banana variety classification.
12 models · Grad-CAM · LIME · ViT · Streamlit

──────────────────────────────────────────────────────

OTHER PROJECTS ─────────────────────────────────────

[NeoFocus]          [EnergyIQ]         [JetStream]
Flutter · 2025      Next.js · 2025     React + Expo · 2026

[Expense Tracker]   [Saiful Portfolio]
Flutter · 2024      Next.js · 2024 · Client

──────────────────────────────────────────────────────
```

### Key principles of this approach

1. **Number your projects** — Numbered lists communicate confidence and completeness.
   "01-04" says "I've done at least 4 serious things."

2. **One sentence description max** — The description should be a logline, not an abstract.
   "Real-time YOLOv11 enforcement for Dhaka traffic officers." tells a story.

3. **3 facts below the description** — Not a bullet list. Three short facts separated
   by `·`. Fast to read, easy to remember.

4. **Screenshot on hover only** — Don't show images by default. Reveal the screenshot
   on hover using a smooth fade/slide. This keeps the layout clean and rewards engagement.
   (See: paco.me, leerob.com for implementation reference)

5. **Remove Tier 1 / Tier 2 distinction** — All projects are in the same list, ordered
   by impact. TrafficGuard AI is #1. Saiful Islam Portfolio is #9. The position
   communicates importance without creating a visual hierarchy that looks cluttered.

6. **No tech stack pills in the project cards** — Move stack details to a hover tooltip
   or the case study page. 12 pills per card is information overload.

---

## 🔧 Information Accuracy Issues (Fix These Now)

These items contain information that needs to be updated or verified:

| Item | Current | Should Be |
|------|---------|-----------|
| Graduation year | "Class of 2026" | Confirm exact semester (Spring/Fall 2026) |
| Teaching Assistant role | "Current Role" label | Once hired, update to past tense |
| "Built with... Framer Motion" in footer | Listed but Beams uses three.js | Add `Three.js` to the credit |
| `trafficguard-ai` GitHub link | Points to `github.com/turjo410/trafficguard-ai` | Confirm repo is public |
| `student-expense-tracker` GitHub link | Points to `turjo410/student-expense-tracker` | Confirm repo is public |
| TOEFL score "93" in hero strip | Shows without context | Add `/120` so it reads `93/120` |
| Achievements "Champion — Cloud's Den Photography Competition — 2022" | Current | Confirm this is from Scholastica or Cloud's Den — the Experience section says TA role includes this achievement redundantly |
| `PromptMaster Pro` — "no GitHub repo" | Proprietary SaaS | Add a note in the card: "Proprietary — source not public" |

---

## 🎯 Priority Action List (Ordered by Impact)

### Immediate (fix before sharing with anyone)
1. **Rewrite the project section** as a numbered list — this single change eliminates
   the #1 complaint about the portfolio
2. **Remove TrueFocus "Ready to Work"** section — it adds nothing and repeats the bio
3. **Fix the hero bio** — remove "Hi, I'm" eyebrow, shorten bio to 2 sentences
4. **Merge the three identical scholarship awards** into one card
5. **Reduce Beams**: beamNumber 20→8, speed 1.6→0.8

### High priority (before submitting to employers)
6. **Standardize self-description** — pick one: "CSE Engineer", "AI/ML Engineer", or
   "Software Engineer" and use it everywhere (hero, footer, nav, LinkedIn)
7. **Remove ScrollVelocity band** or replace with a static phrase
8. **Remove "TOEFL 93" from hero metric strip** — replace with `9+ Shipped` or
   `4 Live Platforms`
9. **Remove "Vice President Photography Club 2018–2020"** from main experience or
   reduce to a one-liner
10. **Add TOEFL `/120`** context to wherever it appears
11. **Replace ALSO_USED list items**: remove Notion, Linear, DaVinci Resolve, Blender

### Cosmetic (polishing pass)
12. **Align timeline dot position** with the vertical line in Experience
13. **Standardize section padding** across all sections to `py-20 sm:py-28`
14. **Add `bg-accent-blue/10` on hover** to contact channel cards for consistent
    hover feedback
15. **Test the site on Windows Chrome at 100% zoom** — the WebkitTextStroke used in
    ScrollVelocity is invisible on some Windows setups

---

## 📊 Comparison with Reference Portfolios

| Feature | Your Portfolio | leerob.com | paco.me | Bryn.dev |
|---------|---------------|-----------|---------|---------|
| Project display | Long mega-cards | Simple list + dates | Numbered with hover image | Grid with tags |
| Bio length | 3 sentences | 2 sentences | 1 sentence | 1 sentence |
| Section count | 8 sections | 4 sections | 5 sections | 4 sections |
| Background animation | WebGL Beams | None | Subtle grain | None |
| Nav style | Pill nav (3 pieces) | Single sticky bar | Minimal inline | Minimal |
| Font hierarchy | 3 display sizes + body | 2 sizes + body | 2 sizes + body | 2 sizes + body |
| Skills section | 6 cards + marquee | Simple list | Not present | Tag cloud |
| Achievements | Dedicated section | Inline in about | Not present | Not present |

**Key insight:** Top developer portfolios are shorter and more confident. They show
fewer things with more context, rather than more things with less context. Your
portfolio currently has 8 sections, 9 projects, 6 skill categories, 5 achievements,
3 experience cards, and 4 contact channels. A confident senior engineer's portfolio
would show 3-4 projects in detail, one paragraph about background, and one contact
link.

---

*Audit generated: May 2026 — based on source code analysis + full-page screenshot*  
*Reference portfolios: leerob.io, paco.me, rauno.me, cassidoo.co*
