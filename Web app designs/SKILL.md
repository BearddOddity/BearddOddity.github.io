---
name: bearddoddity-design
description: Use this skill to generate well-branded interfaces and assets for BearddOddity — the studio behind StreamerSuite, StatusForge.io and PanelForge. Dark glassmorphism, Twitch-purple accent, high-density streamer/reader desktop tools. For production or throwaway prototypes/mocks. Contains design guidelines, colors, type, fonts, assets, and UI kit components.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Fast orientation
- **One accent, dark canvas, everywhere.** `#050505` bg, `#9146ff` accent, shared by StreamerSuite, StatusForge and PanelForge alike — no per-product theme scope. PanelForge keeps Inter for body type; app chrome elsewhere uses the native system font.
- **Glass, not grey.** Surfaces are `rgba(0,0,0,.45)` + backdrop-blur + 1px white hairline + inset top-highlight.
- **Dense + small.** 10–13px chrome, uppercase 10px micro-labels, JetBrains Mono for all data/URLs/counts.
- **StatusForge is the flagship** — when in doubt, match its Status Room dashboard.

## Files
- `styles.css` — link this one file; it `@import`s all tokens + glass utility classes.
- `tokens/` — colors, typography, spacing, effects, components (`.bd-*` classes).
- `components/` — React primitives (Button, Card, Badge, Input, Select, NavItem, Toast, CoverImage, …).
- `guidelines/` — foundation specimen cards.
- `ui_kits/` — full-screen interactive recreations (statusforge, streamersuite, panelforge).
- `assets/logos/` — Twitch / Kick / Joystick.tv / Streamer.bot + PanelForge / StatusRoom marks.

There is no unified studio logo — set the brand name in type.
