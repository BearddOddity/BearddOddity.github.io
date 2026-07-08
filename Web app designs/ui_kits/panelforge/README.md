# PanelForge — UI Kit

A cross-platform comic reader (Tauri, desktop/tablet/phone). Shares the same black canvas + Twitch-purple accent as every other product — Inter + JetBrains Mono for type only, no separate color world.

## Screens in `index.html`
- **NavBar** — `PanelForge` wordmark (mono), Library / Browse & Download links.
- **Library** — responsive grid of `glass-card` covers with a sun-glare sweep, format badge, status badge (ongoing/completed/hiatus), star rating, and a reading-progress bar. Search + sort.
- **Detail** — big cover, Volume/Issue/Pages number tiles, a glass metadata panel, and a `Read` button.
- **Fullscreen Reader** — page view with prev/next, page counter, and a progress bar.

## Interactions
Click a cover → Detail. `Read` → Fullscreen Reader (page through with ‹ ›). Search/sort the library. Browse is a labelled placeholder.

## Source
`BearddOddity/Comic-Reader` (product name **PanelForge**) — `src/App.tsx`, `src/pages/{Library,ComicDetail}.tsx`, `src/components/ComicCard.tsx`, `src/index.css`. Backend catalog: `BearddOddity/comic-scraper-api`.
