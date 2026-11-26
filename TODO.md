# TODO — PayFlow MENA Landing Page

See PLAN.md for full context.

## 1. Scaffold
- [x] Create Next.js (App Router) + TypeScript + Tailwind project in this directory
- [x] Initial commit
- [x] Link project to Vercel, deploy skeleton for a live preview URL
      (<https://payflowmena.vercel.app> — fixed a framework-detection issue
      that caused a 404 on the root route)

## 2. Design System
- [ ] Set up Tailwind theme: white background, navy/slate text, teal/emerald accent
- [ ] Base typography scale, container/section spacing
- [ ] Shared Button, Card, Section components

## 3. Sections (static content)
- [ ] Hero — eyebrow, headline, subheadline, primary + secondary CTA
- [ ] Social proof bar — 4 grayscale placeholder logos + trust line
- [ ] Problem vs. Solution — 3-column grid (Manual Follow-Ups, Cross-Border
      Friction, Zero Cash-Flow Blindspots)
- [ ] Bottom CTA banner — headline + "Schedule Your Custom Walkthrough"

## 4. ROI Calculator (centerpiece)
- [ ] Build calculator component shell (title, two sliders, output box)
- [ ] Implement formula: `monthlyRevenue × (daysToGetPaid − 15) / 30 × 0.6`
- [ ] Live update on slider drag (debounced)
- [ ] Animated count-up on output figure (Framer Motion)
- [ ] Currency formatting
- [ ] "Unlock This Cash Flow" CTA wired to same demo-booking target as hero CTA

## 5. CTA Targets
- [ ] Decide dummy target for CTAs (Calendly embed placeholder vs. mailto vs. anchor)
- [ ] Wire all CTA buttons consistently

## 6. Polish Pass
- [ ] Responsive check: mobile, tablet, desktop
- [ ] Lighthouse: performance, accessibility, SEO
- [ ] Favicon, meta title/description, OG image

## 7. Deploy & Present
- [ ] Deploy to production Vercel URL
- [ ] Write case-study copy for portfolio (problem → rationale → calculator →
      why it converts)
- [ ] Add disclosure note that PayFlow MENA is a fictional concept piece
