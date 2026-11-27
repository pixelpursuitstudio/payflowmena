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
- [x] ~~Decided `mailto:` as the dummy demo-booking target~~ — superseded:
      all three demo-booking CTAs (Hero primary, calculator, Bottom CTA)
      now link to a real `/demo` route instead (see below). Hero's
      secondary CTA remains the one true in-page anchor (`#calculator`).
- [x] `src/app/demo/page.tsx` — the lead-capture form + confirmation
      screen designed and approved in the Claude Design prototype
      (<https://claude.ai/artifact/M5aQHPmnyvS8XaW9PGAqZp> —
      Confirmation.dc.html), ported into the real Next.js app as a
      client-component route: Name/Work Email/Company/Country fields,
      the same validation rules (required name/company, email regex),
      and the same success state (icon, "You're all set, {firstName}!",
      3-step "what happens next" grid, two CTAs back to the homepage).
      Verified via the dev server: form renders with correct labels, all
      3 homepage CTAs now point to `/demo`, `npm run build` compiles
      clean with `/demo` as a new static route.
- [x] `src/components/Button.tsx` — `/path` hrefs use `next/link`'s
      `Link`; `#anchor` hrefs too; a true external/mailto: href (none
      currently in use) would render a plain `<a>` instead.

## 6. Polish Pass
- [x] Responsive check: mobile, tablet, desktop — code-level audit (no
      visual screenshot tool available in this sandbox; browser automation
      installs were blocked). Fixed real overflow risks found on review:
      Hero/Bottom CTA buttons stack full-width below `sm` instead of
      risking text overflow in a pill shape; calculator card padding and
      slider label text shrink below `sm`; slider value labels got
      `whitespace-nowrap` so they can't wrap awkwardly against their label.
      All grid/flex layouts (`ProblemSolution`, `SocialProof`) already
      collapse to one column / wrap naturally.
- [ ] Lighthouse: performance, accessibility, SEO — **not run**: this
      sandbox blocks installing/launching Playwright or a Lighthouse CLI
      via npx. Addressed what a manual audit covers instead: semantic
      heading order (one `h1`, `h2`s per section, `h3`s in cards), slider
      `aria-label`s, `:focus-visible` states inherited from the design
      system, `next/font` self-hosting (no render-blocking font requests),
      and fully static prerendering (confirmed via `npm run build`
      output — every route is `○ (Static)`). Recommend running Lighthouse
      from the deployed Vercel URL or local Chrome DevTools to confirm
      scores before presenting.
- [x] Favicon — `src/app/icon.svg` (teal rounded square, pill-motif mark,
      matches the design system's brand mark). Meta title/description +
      Open Graph/Twitter card metadata in `src/app/layout.tsx`.
      `src/app/opengraph-image.tsx` generates a 1200×630 OG image at
      build time, mirroring the Claude Design System's Cover design
      (teal identity slab + pill pattern + wordmark). Verified both
      `/icon.svg` and `/opengraph-image` render correctly via the dev
      server.

## 7. Deploy & Present
- [x] Deploy to production Vercel URL — Vercel's Git integration
      auto-deploys every push to `master` as production; confirmed
      <https://payflowmena.vercel.app> is live and serving the
      Phase 3–6 build (verified title, OG tags, all four sections,
      and the calculator's rendered output in the production HTML).
- [x] Write case-study copy for portfolio (problem → rationale → calculator →
      why it converts) — published as a Claude Docs case study:
      <https://claude.ai/artifact/5JG5ivvHS15iSKvJ8Jog1T> ("PayFlow MENA —
      Case Study"). Covers the brief, the design-first process (Figma →
      prototype → code), a section-by-section rationale table, the
      calculator's formula and the psychology behind it, a "why this
      converts" synthesis, and the fictional-concept disclosure with
      links to the live site and repo.
- [x] Add disclosure note that PayFlow MENA is a fictional concept piece —
      `src/components/Footer.tsx`, shown on every page load (not hidden in
      a case-study doc only), so the live demo itself is honest about
      what it is.
