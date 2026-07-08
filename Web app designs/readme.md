# BearddOddity Design System

Design system for **BearddOddity** — a solo-developer studio that builds dark, glassy, high-density desktop tools for streamers and readers. Every product is a Tauri + React app that treats the screen like a piece of gear: near-black canvases, glassmorphism panels, a Twitch-purple accent, and tiny mono readouts everywhere.

This project is the reusable brand surface behind those apps: tokens, fonts, reusable React primitives, foundation specimen cards, and full-screen UI-kit recreations.

---

## Products represented

Five source repositories, three of them with real UI:

| Product | Repo | What it is | Visual world |
|---|---|---|---|
| **StreamerSuite** | `BearddOddity/StreamerSuite` | Flagship "ultimate streaming companion" — a plugin-registry shell launching chat, OBS scene switching, sound board, alerts, timers, stats | Forge (near-black + purple) |
| **StatusForge.io** | `BearddOddity/StatusForge.io` | Rich-presence engine — detects your game/activity and pushes it to Twitch/Kick/Streamer.bot via generated overlays. **The most developed, best-loved surface.** | Forge |
| **PanelForge** | `BearddOddity/Comic-Reader` | Cross-platform comic reader (desktop/tablet/phone) | Forge (shared palette) |
| **oauth-callback** | `BearddOddity/oauth-callback` | Cloudflare Worker: one branded OAuth login/callback page for Kick/Twitch/Joystick.tv. Backend only (styled login page). | — |
| **comic-scraper-api** | `BearddOddity/comic-scraper-api` | Backend catalog/scraper that feeds PanelForge's Browse. No UI. | — |

> **Explore the sources.** These repos are the ground truth for anything you build. If you have access, read them directly — the token values, glass recipes, and screen layouts here were lifted from their real CSS and components, not reconstructed from memory:
> - https://github.com/BearddOddity/StreamerSuite
> - https://github.com/BearddOddity/StatusForge.io
> - https://github.com/BearddOddity/Comic-Reader
> - https://github.com/BearddOddity/oauth-callback
> - https://github.com/BearddOddity/comic-scraper-api

Every product shares **one** color palette — no per-app re-skin. `#050505` canvas, Twitch-purple `#9146ff` accent, everywhere: StreamerSuite, StatusForge, and PanelForge alike. PanelForge keeps its own type voice (Inter body font vs. the streamer tools' native system stack) but draws every color from the same tokens as everything else.

---

## CONTENT FUNDAMENTALS

How the products talk. Copy is **functional, lowercase-leaning, and terse** — this is software for people who already know streaming, not marketing.

- **Voice:** confident, plain, a little playful. Product taglines are short and declarative: *"Ultimate Streaming Companion"*, *"All the tools a streamer needs, in one place"*. No exclamation-mark hype.
- **Person:** addresses the tool's state, not the user. Labels are nouns and imperatives — *Start Engine*, *Browse Overlays*, *Add channel*, *Multi-Chat* — rarely "you".
- **Casing:** **UPPERCASE micro-labels** for data/state (`LIVE`, `POLLING`, `SYNCED`, `STANDBY`, `CPU`, `GENRE`) at wide letter-spacing; Title Case for buttons and nav; sentence case for descriptions.
- **Density over prose:** a card says *"12 pads · hotkeys on"*, not a sentence. Middot `·` separates inline facts. Counts are explicit — *"3 channels"*, *"12 / 40"*.
- **Status language is a fixed vocabulary:** `LIVE` / `OFFLINE`, `Connected` / `Offline`, `Engine Online` / `Engine Offline`, `ON` / `OFF`, `SYNCED` / `STANDBY`, `ongoing` / `completed` / `hiatus`.
- **Playful moments are earned:** an easter-egg dev unlock toasts *"🔓 Dev Tools unlocked"*; empty states are gentle (*"No channels yet. Click + Add to connect."*). Product/feature names lean on a **"Forge"** motif (StatusForge, PanelForge) and portmanteaus (ChatConfluence, StreamerSuite).
- **Emoji** are used deliberately as compact glyphs in app icons, nav items and section heads (⏳ 📚 ⚙️ 💬 🎛️ ✨ 🔀 📋) — never as decorative filler in body copy.
- **Mono for machine text:** URLs, tokens, counts, timestamps, and percentages render in JetBrains Mono / system mono.

---

## VISUAL FOUNDATIONS

The look is **dark glassmorphism with a neon-purple pulse.** Everything is layered black-alpha glass over a near-black canvas, edged with 1px white hairlines and lit by a single accent.

- **Canvas & mood:** `#050505` everywhere. Very dark, cool, high-contrast. A faint accent radial-glow sometimes bleeds from a corner; PanelForge additionally floats a soft page background layer.
- **Color:** monochrome white-on-black foundation + **one** dominant accent, Twitch purple `#9146ff`, shared by every product. Semantic hues are reserved for state only — green success/`on`, red error/danger, amber warn/`hiatus`, cyan info/`completed`. Platform brand colors (Twitch purple, Kick green `#53fc18`) appear as small accents on chips and chat.
- **Surfaces / cards:** never solid grey. Cards are `rgba(0,0,0,0.45)` + `backdrop-filter: blur(10–16px)` + `1px solid rgba(255,255,255,0.08)` border + a **white top-inset highlight** (`inset 0 1px 0 rgba(255,255,255,0.04)`) that sells the glass edge. Elevation is a 3-tier alpha ladder (surface-1/2/3) plus a stronger glass tier.
- **Typography:** system UI stack for app chrome (deliberate "native app" feel); Inter for PanelForge; JetBrains Mono for all data. Runs **small and dense** — 10–13px chrome, uppercase 10px micro-labels — with a big jump to bold display sizes (28–56px) for headings.
- **Corner radii:** generous. 12px controls, 16px cards/modals, up to 24–32px for PanelForge panels, full pills for badges and status chips.
- **Borders:** hairline white-alpha (`.05`–`.15`). Focus/active promotes the border to an accent-tinted `color-mix` plus a soft glow.
- **Shadows:** two systems — **elevation** (soft, large, black: `0 8px 32px rgba(0,0,0,.3)`, modals `0 24px 64px`) and **glow** (accent-colored: `0 0 20px rgba(145,70,255,.15)`, focus ring `0 0 0 3px rgba(145,70,255,.1)`). The inset top-highlight is on almost every glass element.
- **Transparency & blur:** heavy and intentional. Sidebars, toolbars, modals, selects, toasts and menus all use backdrop-blur so the canvas glow shows through. Backdrops dim to `rgba(0,0,0,.6)` + `blur(6px)`.
- **Backgrounds:** solid near-black + optional accent radial glow; no stock photos, no busy gradients. PanelForge covers carry animated **shimmer / sparkle / sun-glare** overlays; StatusForge game covers **breathe** (slow scale) and **glint** (a light sweep) while active.
- **Animation:** quick and eased (`0.2s`), `cubic-bezier(0.16,1,0.3,1)` for card entrances. Toasts **slide in** from the right; modals slide/scale in; status dots **pulse**; covers breathe/glint on infinite loops. Everything respects `prefers-reduced-motion`.
- **Hover states:** buttons lift `translateY(-1px/-2px)` and gain a shadow; glass cards raise border-alpha + shadow; nav items fill to white-6%; the accent gradient lightens.
- **Press states:** return to `translateY(0)` (the lift collapses); active nav/toggle gets the accent-tinted fill + glow + a slightly scaled icon tile.
- **Layout:** fixed app chrome — a left sidebar (240px, collapsible to a 68px icon rail) or a 48px top bar; scrollable main; slim 6px custom scrollbars. Content is card-based and dense, often multi-column grids with vertical hairline dividers.

---

## ICONOGRAPHY

BearddOddity has **no single icon library**; it mixes three approaches, and this system follows the source exactly rather than inventing a set:

1. **Inline stroke SVGs** for functional UI glyphs (search, settings gear, hamburger, chevrons, copy, close). Consistent style: `stroke="currentColor"`, `stroke-width` ~1.5–2, round caps/joins, `viewBox 0 0 24 24` — i.e. **Heroicons-style outline**. When you need an icon not present in the source, match that spec; if you pull from a CDN, **Lucide** or **Heroicons (outline)** are the closest and should be flagged as a substitution.
2. **Emoji as compact category glyphs** — app icons and nav/section tiles (⏳ 📚 ⚙️ 💬 🎛️ ✨ 🔀 📋 📊 ⏱️ 📝). This is intentional brand texture, not filler. Reuse the same emoji for the same concept.
3. **Brand/platform logos** as SVG, kept as first-class assets — Twitch, Kick, Joystick.tv, Streamer.bot, in multiple colorways.

**Assets copied into `assets/logos/`:**
- Platform marks (third-party): `{twitch,kick}-mark.svg` (single-path, `currentColor` — recolor via CSS `color`) plus fixed-color variants `twitch-{black,white,purple,ice}.svg` / `kick-{black,white,green}.svg`; `joystick-mark.svg` (full-color) and `joysticktv-{dark,light}.svg`; `streamerbot.svg` (gradient).
- First-party marks: `panelforge-mark.svg` (the comic-reader favicon — kept in its own indigo gradient as a standalone logo mark, distinct from the shared UI accent) + `panelforge-icon.png`; `statusroom-{white,black}.svg` (StatusForge's line-art "scan room" glyph).
- **BearddOddity studio mark (added):** `bearddoddity-mascot-head.png` (400×400 angry-bear head-and-shoulders icon, capped ballcap with "B" patch — use as favicon/avatar/app-icon-sized studio mark), `bearddoddity-mascot-full.webp` (full mascot, arms crossed, neon rim-light — raster fallback), `bearddoddity-mascot.svg` (vector full mascot, arms crossed, cyan/magenta neon rim glow, transparent bg, 4000×4000 viewBox — preferred over the .webp for hero/about use since it scales cleanly), `bearddoddity-wordmark-b.png` (minimal gradient "B" beard-glyph mark, purple→blue — use where a compact single-color-adjacent brand mark is needed, e.g. nav/footer, in place of plain type).

**A real studio mark now exists** (added by the user, July 2026) — the three files above. Use `bearddoddity-wordmark-b.png` for compact brand placement (nav, footer, favicon-adjacent) and `bearddoddity-mascot-head.png` / `-full.webp` for the mascot proper (hero art, about page, merch-style moments). The earlier "render the name in plain type" guidance is superseded; keep plain-type wordmarks only where no mark fits (dense app chrome titles, etc).

---

## Foundation & specimens

Foundation specimen cards live in `guidelines/` and populate the Design System tab (groups **Colors**, **Type**, **Spacing**, **Brand**): accent, semantic, surfaces, text ladder and platform swatches; font families, type scale; spacing scale and radii; integration logos and product marks; a **Motion** card (breathe/glint/shimmer/pulse loops + interaction timing) and an **Iconography** card (stroke-icon spec, emoji set, logo pointer).

---

## Components

Reusable React primitives (grouped under `components/`), each with a `.d.ts` contract, `.prompt.md`, and a `@dsCard` demo. Import from `window.BearddOddityDesignSystem_726917`.

- **core/** — `Button`, `Card`, `Badge`, `Chip`, `StatusDot`, `SectionHead`, `Divider`, `Avatar`, `AvatarGroup`, `StatCard`, `PricingCard`
- **forms/** — `Input`, `Select`, `RangeSlider`, `FieldSection`, `Checkbox`, `RadioGroup`, `Switch`
- **feedback/** — `Toast`, `ProgressBar`, `Alert`, `Skeleton`, `EmptyState`, `ToastManager`
- **navigation/** — `NavItem`, `Sidebar`, `Toolbar`, `Breadcrumbs`, `Pagination`
- **media/** — `CoverImage`
- **layout/** — `Container`, `Header`, `Footer`, `Hero` *(web/marketing page structure)*
- **overlay/** — `Modal`, `Drawer`, `Tooltip`, `Menu`
- **disclosure/** — `Tabs`, `Accordion`
- **data/** — `Table`

These map 1:1 to the source apps' shared primitives (`ui.tsx`, `primitives.tsx`, and the unified glass utility classes in each app's `index.css`). Consumers should compose these rather than re-implementing glass panels by hand.

### Intentional additions
- `CoverImage`, `RangeSlider`, `Divider`, `SectionHead` are promoted to named primitives here because the source repeats them as inline markup/utility classes across screens; naming them keeps consumer kits consistent.
- `layout/`, `overlay/`, `disclosure/`, `data/`, `Avatar`, `Breadcrumbs`, `Pagination`, `Alert` were added to extend the same dark-glass/purple language (kept as-is, unmodified) to general websites and web apps — landing pages, docs, dashboards — beyond the three source products. They reuse existing tokens; no new colors were introduced. `--font-heading` (Montserrat) was added alongside the existing `--font-ui`/`--font-sans` as an additive display-type option for these surfaces; app chrome is untouched.
- `Checkbox`, `RadioGroup`, `Switch` (form controls), `Skeleton`, `EmptyState`, `ToastManager` (feedback/loading/zero-state patterns), and `StatCard`/`PricingCard` (promoted from inline markup in the Landing/Dashboard templates) round out what a general web app needs day-to-day. `Header` gained a responsive hamburger/mobile-panel mode below 720px.
- `Chip` (core), `Sidebar` (navigation) and `Menu` (overlay) were promoted from markup every UI kit/redesign was hand-rolling inline (`.chip` filter pills, a 240px/68px nav rail, a kebab dropdown) — same tokens, now reusable primitives with `.d.ts`/cards.

---

## UI kits

Full-screen, interactive recreations in `ui_kits/` (each a self-contained `index.html`):

- **`ui_kits/statusforge/`** — Status Room dashboard (the showcase). Start/Stop engine, browse overlays, expand metadata.
- **`ui_kits/streamersuite/`** — app launcher → ChatConfluence multi-platform chat. *(ChatConfluence is legacy — see `templates/multi-chat-viewer` below.)*
- **`ui_kits/panelforge/`** — comic-reader library → detail → fullscreen reader, same palette as the rest.

**`templates/multi-chat-viewer/`** is the design system's new, modern multi-platform chat surface and is meant to fully replace ChatConfluence (the outdated chat panel inside `ui_kits/streamersuite`). It unifies Twitch, Kick, YouTube, TikTok, Joystick.tv and Rumble into one live feed with split-column and focus views, pinning, moderation actions, cross-platform send, sub/emote-only mode badges, TTS, theme presets, and overlay-style display settings — all on shared design-system tokens/components. New multi-chat work should build on this template, not on ChatConfluence.

---

## Root manifest / index

- `styles.css` — **the one file consumers link.** `@import` manifest only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `components.css` (glass utility classes lifted from source).
- `components/{core,forms,feedback,navigation,media,layout,overlay,disclosure,data}/` — primitives + `.d.ts` + `.prompt.md` + `@dsCard` demos.
- `templates/` — full-page starting points (`landing-page`, `app-dashboard`, `docs-page`, `login`, `error-404`, `multi-chat-viewer`) built from the components above.
- `guidelines/` — foundation specimen cards.
- `ui_kits/{statusforge,streamersuite,panelforge}/` — screen recreations.
- `assets/logos/` — platform + product marks.
- `SKILL.md` — Agent-Skills-compatible entry point.

---

## Caveats & substitutions

- **Fonts** (Inter, JetBrains Mono) load from **Google Fonts**, not self-hosted binaries — none were present in the source. Swap in licensed copies under `assets/fonts/` if you have them.
- The streamer apps intentionally use the **native system font** for chrome; that's a design choice, not a missing font.
- Icons are mixed inline-SVG + emoji + brand logos (see ICONOGRAPHY). No monolithic icon set is shipped; CDN Lucide/Heroicons-outline is the sanctioned fallback.
- **Studio logo:** `assets/logos/bearddoddity-mascot-head.png` (icon), `-mascot-full.webp` / `-mascot.svg` (full mascot, SVG preferred), `-wordmark-b.png` (minimal mark). Added July 2026 — supersedes the earlier "no logo, plain type only" rule below.
