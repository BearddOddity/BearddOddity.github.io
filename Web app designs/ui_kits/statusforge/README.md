# StatusForge — UI Kit

**The most developed, best-loved surface in the system.** A rich-presence engine (Tauri desktop app) that detects the game/activity you're in and pushes it to Twitch, Kick and Streamer.bot via generated browser-source overlays.

## Screens in `index.html`
- **Sidebar** — wordmark, nav (Status Room / Library / Settings), live engine status dot at the foot.
- **Status Room** (the showcase dashboard):
  - **Now Playing** — 140×180 game cover with a breathe + glint animation while playing, title, Start/Stop Engine, Exile-to-Apps.
  - **Status row** (5-column grid with vertical dividers): Platform Connections (+ SPARK pulse), System Performance (CPU/Mem/GPU gradient bars), and the Overlay Generator (masked URLs, copy/remove, "Browse Overlays").
  - **Metadata** — collapsible `FieldSection` of key/value tiles.
  - **Overlay picker modal** — carousel with dots + "Use <layout>".

## Interactions
Start/Stop Engine flips every live indicator (dots, LIVE/POLLING, SPARK, perf bars, metadata) and fires a toast. Browse Overlays → pick in the carousel → adds a generated overlay URL. Expand Metadata.

## Source
`BearddOddity/StatusForge.io` — `src/App.tsx`, `src/views/DashboardView.tsx`, `src/components/ui.tsx`. Accent `#9146ff` on `#050505`, glass surfaces throughout.
