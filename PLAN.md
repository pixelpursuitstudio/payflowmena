# PayFlow MENA — Landing Page + ROI Calculator (Portfolio Piece)

Fictional B2B SaaS case study (invoice automation for UAE/India SMEs), built as a
live, deployed portfolio sample to pitch seed-stage SaaS founders in Bengaluru,
Mumbai, Dubai, and Riyadh. Goal: demonstrate conversion-focused landing page
+ interactive tool build skills — not a real client/product.

## Tech Stack
- Next.js (App Router), deployed on Vercel
- Tailwind CSS
- Framer Motion (sliders, count-up animation, scroll reveals — used lightly)
- No backend/CMS: static page, dummy CTA targets (Calendly embed placeholder /
  mailto), no real data persistence needed

## Design Direction
- **Background: white throughout** all sections (hero, problem/solution grid,
  ROI calculator, bottom CTA banner) for full consistency.
- Navy/slate for text and primary UI elements.
- One accent color (teal or emerald) reserved for: CTA buttons, the
  calculator's "cash unlocked" output figure, and small highlight details.
- Cards and the calculator widget separated from the white background with
  subtle shadow / light border / very light gray fill — no color blocking.
- Numeric data (especially calculator output) treated as a focal visual
  element: large, tabular figures.
- Mobile-first layout — buyers skim on phones between meetings.

## Page Architecture
1. **Hero** — eyebrow, headline, subheadline, primary CTA ("Book a 15-Min Live
   Demo"), secondary CTA (anchor-scrolls to calculator).
2. **Social proof bar** — "Trusted by 140+ finance teams..." + 4 grayscale
   placeholder logos, subtle hover color-in.
3. **Problem vs. Solution** — 3-column grid: Manual Follow-Ups, Cross-Border
   Friction, Zero Cash-Flow Blindspots.
4. **ROI Calculator** (centerpiece) — see logic below.
5. **Bottom CTA banner** — headline + "Schedule Your Custom Walkthrough" CTA.

## ROI Calculator Logic
- Inputs: Average Monthly Revenue slider ($10k–$500k), Average Days to Get
  Paid slider (15–90 days).
- Formula:
  `workingCapitalUnlocked = monthlyRevenue × (daysToGetPaid − targetDays) / 30 × recoveryFactor`
  - `targetDays = 15` (assumed automated-collection benchmark)
  - `recoveryFactor ≈ 0.6` (conservative — not all delayed cash is recoverable)
- Output updates live on slider drag (debounced), animated count-up,
  formatted as currency.
- "Unlock This Cash Flow" button routes to the same CTA as the primary demo
  booking — ties the interactive tool directly to conversion.

## Build Phases
1. Scaffold Next.js + Tailwind project, deploy skeleton to Vercel for a live
   URL immediately.
2. Build static sections (Hero → Bottom CTA) with final copy, white
   background design system.
3. Build ROI calculator as an isolated component, wire up formula + animation.
4. Polish pass: responsiveness, Lighthouse performance/SEO, placeholder
   logos/social-proof assets.
5. Deploy to production Vercel URL.

## Portfolio Presentation (after build)
- Case-study writeup: fictional problem → section-by-section rationale →
  calculator as differentiator → "why this converts" note tying slider
  inputs to buyer psychology (founders think in revenue and days-to-pay).
- Disclose as a concept/demo piece if asked — never imply PayFlow MENA is a
  real client.
