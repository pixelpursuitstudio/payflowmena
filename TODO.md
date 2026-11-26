# TODO — PayFlow MENA Landing Page

See PLAN.md for full context.

## 1. Scaffold
- [x] Create Next.js (App Router) + TypeScript + Tailwind project in this directory
- [x] Initial commit
- [x] Link project to Vercel, deploy skeleton for a live preview URL
      (<https://payflowmena.vercel.app> — fixed a framework-detection issue
      that caused a 404 on the root route)

## 2. Design System

- [x] Built in Figma first: <https://www.figma.com/design/qHJuNNm8CLXplYMq4rGNhY>
      ("PayFlow MENA — Design System"). Foundations page has color/spacing/
      radius variables + 9 Geist text styles; Components page has a Button
      variant set (Style=Primary/Secondary x Size=Medium/Large, pill shape)
      and a Card component (Title/Body text properties) — all bound to
      tokens with WEB code syntax (--color-*, --spacing-*, --radius-*).
- [x] Ported tokens into Tailwind v4 `@theme` in `src/app/globals.css` —
      variable names match the Figma WEB code syntax exactly (`--color-*`,
      `--spacing-*`, `--radius-*`); removed the default dark-mode media
      query since the brief calls for a white background only.
- [x] `src/components/Button.tsx` — Primary/Secondary x Medium/Large,
      `rounded-full`, href-or-onClick polymorphic (Link vs button).
- [x] `src/components/Card.tsx` — Title + children, matches the Figma
      Card's padding/radius/border bindings.
- [x] `src/components/Section.tsx` — max-w-6xl container + generous
      vertical padding (`py-4xl`), for consistent section spacing.
- [x] Smoke-tested all three in a throwaway `/preview` route: confirmed
      in the compiled CSS that `py-sm`→8px, `px-lg`→24px, `rounded-lg`→16px,
      `bg-accent-default`→`var(--color-accent-default)`, matching Figma
      exactly. Route removed after verification.

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
