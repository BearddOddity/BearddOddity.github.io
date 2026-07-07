# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

"The Oddity Forge" — the GitHub Pages marketing/docs site for BearddOddity's
streamer tools (StatusForge, StreamerSuite, GameDatabase) and streaming
content. Plain static HTML/CSS/vanilla-JS — no build step, no bundler, no
framework, no package.json. Edit the `.html`/`.css`/`.js` files directly and
open them (or serve the directory) to preview.

## Structure

- `index.html` — landing page (hero, projects grid, quick links).
- `about.html`, `disclosure.html` — site-level pages. `disclosure.html`
  states that Claude (Anthropic) is used as a development assistant across
  the author's projects, with all shipping decisions human-reviewed — this
  is a disclosure statement, not an indication that any project integrates
  the Claude/Anthropic API at runtime.
- `guides/` — setup guides (`overlay-setup.html`, `spark-dual-pc.html`) plus
  `guides/index.html` listing them.
- `blog/index.html` — blog listing.
- `statusforge/` — product subpage + `download.html` for the StatusForge app
  (see the separate `StatusForge.io` repo).
- `gamedatabase/` — product subpage for the GameDatabase project.
- `assets/nav.js` — the one piece of shared JS: toggles the mobile nav panel
  (`.bd-header-burger` / `.bd-header-mobile-panel`) on pages that include it.
- `assets/logos/`, `assets/statusforge-icon.png` — image assets.

## Design system (`tokens/` + `styles.css`)

`styles.css` (repo root) is an `@import`-only manifest — it has no
declarations of its own. It pulls in, in order: `fonts`, `colors`,
`typography`, `spacing`, `effects`, `components`, `web-components` from
`tokens/`. All real CSS lives in those token files; consumers link only the
root `styles.css`.

`tokens/colors.css` defines **two dark themes sharing one token surface**:
- **Forge** (default) — near-black + Twitch purple, used for the streamer-tool
  pages (StatusForge, StreamerSuite).
- **PanelForge** (a comic reader project) — indigo-black + periwinkle indigo,
  opted into via `[data-theme="panelforge"]`.

When editing styles, prefer adding/adjusting tokens in the relevant
`tokens/*.css` file over writing new inline `<style>` blocks in a page (the
existing pages do mix in page-specific inline `<style>` for one-off layout,
but shared design values — color, spacing, type — belong in tokens).

## Conventions

- Every page repeats the same header/nav markup (`.bd-header`,
  `.bd-header-inner`, `.bd-logo`, `.bd-header-links`, `.bd-header-mobile-panel`)
  and includes `assets/nav.js` for the mobile toggle — copy an existing
  page's header exactly when adding a new one, and keep nav links in sync
  across all pages if you add/remove one.
- Relative paths to `styles.css`/`assets/` change depth per page (e.g.
  `guides/*.html` and `statusforge/*.html` use `../styles.css`) — check the
  existing sibling file's paths when adding a page to a subdirectory.
