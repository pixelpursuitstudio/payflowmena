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
- [x] Hero — `src/components/Hero.tsx`: eyebrow, headline, subheadline,
      primary CTA ("Book a 15-Min Live Demo") + secondary CTA (anchor-scrolls
      to `#calculator`, wired ahead of Phase 4). Copy ported from the
      approved Claude Design prototype for consistency.
- [x] Social proof bar — `src/components/SocialProof.tsx`: trust line + 4
      grayscale text-wordmark placeholder logos with hover color-in.
- [x] Problem vs. Solution — `src/components/ProblemSolution.tsx`: 3-column
      `Card` grid (Manual Follow-Ups, Cross-Border Friction, Zero Cash-Flow
      Blindspots), responsive down to 1 column on mobile.
- [x] Bottom CTA banner — `src/components/BottomCta.tsx`: headline +
      "Schedule Your Custom Walkthrough".
- [x] Assembled in `src/app/page.tsx`; `npm run build` compiles clean and
      dev-server HTML confirmed to contain all four sections' copy.
      CTA buttons use a `mailto:` placeholder for now — final target is
      Phase 5's job.

## 4. ROI Calculator (centerpiece)
- [x] `src/components/RoiCalculator.tsx` — title, two range sliders (revenue
      $10k–$500k, days 15–90), output box, `id="calculator"` (matches the
      Hero secondary CTA's anchor).
- [x] Formula: `monthlyRevenue × max(0, daysToGetPaid − 15) / 30 × 0.6`,
      rounded to the nearest $100 — verified via rendered HTML: $120,000 @
      45 days → $72,000.
- [x] Live update on slider drag; the displayed figure eases toward the new
      target over 280ms (Framer Motion `animate()` on a motion value) rather
      than jumping, which smooths rapid drags without a separate debounce.
- [x] Animated count-up via Framer Motion, skipped in favor of an instant
      jump when `prefers-reduced-motion: reduce`.
- [x] Currency formatting via `Intl.NumberFormat`.
- [x] "Unlock This Cash Flow" CTA uses the same `mailto:` demo-booking
      target as the Hero's primary CTA.
- [x] `npm run build` compiles clean; dev-server HTML confirmed correct
      copy, labels, and computed output.

## 5. CTA Targets
- [x] Decided `mailto:demo@payflowmena.com` as the dummy demo-booking
      target (no real backend/Calendly account for a portfolio piece) —
      a real client build would swap this for a Calendly embed.
- [x] Wired consistently: Hero primary and the calculator's "Unlock This
      Cash Flow" share the identical `mailto:` href + subject (per
      PLAN.md: the calculator CTA ties directly to the same conversion
      action); Bottom CTA uses the same address with a "Custom Walkthrough"
      subject; Hero's secondary CTA is the one true in-page anchor
      (`#calculator`).
- [x] `src/components/Button.tsx` — mailto:/external hrefs now render a
      plain `<a>` instead of `next/link`'s `<Link>` (which is for internal
      routes); `#anchor` and `/path` hrefs still use `Link`.

## 6. Polish Pass
- [ ] Responsive check: mobile, tablet, desktop
- [ ] Lighthouse: performance, accessibility, SEO
- [ ] Favicon, meta title/description, OG image

## 7. Deploy & Present
- [ ] Deploy to production Vercel URL
- [ ] Write case-study copy for portfolio (problem → rationale → calculator →
      why it converts)
- [ ] Add disclosure note that PayFlow MENA is a fictional concept piece
