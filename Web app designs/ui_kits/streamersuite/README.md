# StreamerSuite — UI Kit

The flagship: an "ultimate streaming companion" desktop app (Tauri v2 + React 19). A **plugin-registry shell** launches self-contained mini-apps into a single window.

## Screens in `index.html`
- **TopBar** — launcher button, active-app title + category badge, settings.
- **Launcher** — searchable, category-filtered grid of app cards (glass, hover-lift). Featured apps get a purple badge.
- **ChatConfluence** (the built-out app) — 256px channel sidebar (Multi-Chat toggle, per-platform channel rows with status dots + platform badges) and a live chat panel with platform-tinted usernames, badges, a per-platform send selector, and the purple `Send` CTA.

## Interactions
Click an app card → launches it. ChatConfluence: toggle Multi-Chat, add a channel, type + Send (echoes your message tinted for the selected platform). Other apps show a labelled placeholder — only Chat is fully built.

## Source
`BearddOddity/StreamerSuite` — `src/shell/{AppShell,TopBar,Launcher}.tsx`, `src/apps/registry.ts`, `src/components/{ChatPanel,ChatMessage,Sidebar}.tsx`. Accent `#9146ff` on `#050505`.
