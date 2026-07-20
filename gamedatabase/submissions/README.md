# Submit game data for review

Have accurate game metadata you've gathered — genre, release year,
developer, publisher, Steam/Twitch/Kick/IGDB IDs, whatever you have? This
is the inbox for that.

**How it works:**

1. Add a plain JSON file here (not signed — you don't have the signing key,
   and that's the point). One game per file is easiest to review, but a
   plain array works too. Shape:
   ```json
   { "title": "...", "genre": "...", "release_year": "...", "developer": "...", "publisher": "..." }
   ```
   Open a pull request, or use GitHub's "Add file" button right in this
   folder if you don't want to clone the repo.
2. BearddOddity reviews it — fact-checks the details, and either merges it
   as-is or asks for a correction.
3. Once approved, it gets signed with `metadata-signer` and the signed
   output is added to `../entries/`, where it shows up on the Game
   Database page automatically.

Nothing in this folder is ever shown on the site directly — the page only
reads from `../entries/`, and only accepts what's actually signed. This
folder is just the queue.
