# Game database entries

Drop files here that were produced by `metadata-signer` (`./sign.sh entry.json
signed_out.json`) — either a single-game export or a whole database dump. The
Game Database page auto-discovers everything in this folder through GitHub's
public Contents API and merges it into the catalog on load; there's no
manifest file to keep in sync by hand, just push and it shows up.

Accepted shapes, per file:

- A signed envelope: `{ "entry_json": "...", "signature": "...", "signed_by": "..." }`
  — the page reads `entry_json` (parsed as JSON) and ignores `signature`/
  `signed_by`. Verification isn't re-checked client-side; the trust boundary
  here is that only you can push to this repo, not the signature itself
  (that check matters for the app importing a random file from elsewhere,
  not for content you put in your own repo).
- A plain entry object: `{ "title": "...", "genre": "...", ... }` — used as-is.
- A plain array of entry objects (a bulk export) — each one added
  individually.

Only `.json` files are read; this README is skipped.
