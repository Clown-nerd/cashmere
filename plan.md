# Cashmere Events — implementation & design plan

## Product scope
A single-page responsive marketing website for Cashmere Events, a Nairobi luxury wedding and event styling studio. The experience introduces the brand, highlights 2026 bookings, showcases selected work, explains the client journey, builds trust with testimonials, and drives WhatsApp conversations and consultation requests.

## Confirmed design direction
- **Design movement:** Gilded Terracotta Editorial — a fashion-editorial direction with sun-warmed terracotta, muted antique gold, generous whitespace, oversized photography, and graceful cinematic transitions.
- **Core principles:** editorial restraint, tactile warmth, confident whitespace, and human-scale conversion moments.
- **Color philosophy:** parchment and bone create a soft gallery-like canvas; terracotta is the ownable signature color for warmth and Kenyan earth; antique gold is used sparingly as a polished accent; ink provides legible contrast.
- **Layout paradigm:** asymmetrical editorial composition with overlapping image crops, split text/photo bands, vertical timeline rhythm, and full-bleed color interruptions instead of a centered card grid.
- **Signature elements:** hairline gold rules, oversized italic serif display type, and small terracotta index labels with kinetic reveal lines.
- **Interaction philosophy:** interactions feel like turning pages in an art book — hover reveals, gentle image scale, visible focus rings, and anchor navigation that never fights the content.
- **Animation:** hero text and imagery enter with slow, staggered fades; section reveals use a short upward ease; gallery images lift 2–3% on hover; decorative rules draw in; reduced-motion users receive instant states with no parallax or looping motion.
- **Typography system:** Cormorant Garamond for display headlines and wordmark-like moments, Manrope for navigation, labels, body copy, and controls. Display type is oversized and low-density; UI copy remains compact and high contrast.
- **Brand essence:** Nairobi-rooted luxury styling for couples and teams who want their celebration to feel intentional, textural, and unmistakably theirs. Personality: warm, discerning, quietly bold.
- **Brand voice:** assured, intimate, specific. Example lines: “A softer way to celebrate.” / “Your story, styled in full colour.”
- **Wordmark & logo:** a typographic CASHMERE lockup with a slim custom crossbar on the A and a small four-petal botanical mark, used as a compact header signature.
- **Signature brand color:** Sun-baked Terracotta `#A65A3A`.

## Implementation approach
- Use the existing React/Vite starter with a single `Home` route and semantic section anchors.
- Keep the site static: no server or database needed. Contact actions are direct `tel:` and WhatsApp links; the consultation form is an accessible mailto-style handoff with a success state rather than a fake backend.
- Use generated image assets for a hero image and gallery images, stored in project storage and referenced through stable project-relative paths.
- Use `framer-motion` for viewport-aware entrances and `lucide-react` for small UI icons.
- Use CSS custom properties in `index.css` for the editorial palette, spacing, grain, focus styles, responsive layout, and reduced-motion behavior.
- Set `app.config.ts` with local logo assets.

## Project structure
- `client/src/pages/Home.tsx` — complete page composition, content model, interactions, and responsive navigation.
- `client/src/index.css` — global palette, typography, editorial layout utilities, motion helpers, and responsive rules.
- `client/public/assets/` — generated hero/gallery visuals and route manifest.
- `client/index.html` — title, font loading, and metadata.
- `app.config.ts` — project logo metadata.
- `plan.md` and `TODO.md` — implementation record and acceptance outcomes.
