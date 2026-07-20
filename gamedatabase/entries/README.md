# Game database entries — verified only

Everything in this folder is checked against BearddOddity's public signing
key **client-side, in the browser**, before it's ever rendered on the Game
Database page. Repo-push access to this folder is not enough on its own —
a file has to actually carry a valid Ed25519 signature from the matching
private key (see `tools/metadata-signer` in the StatusForge.io repo) or the
page silently skips it. That's what stops someone from pushing false
"fact-checked" data in here; it isn't an honor system.

Only files shaped like a `metadata-signer` output are accepted:

```json
{
  "entry_json": "{...}",
  "signature": "...",
  "signed_by": "BearddOddity"
}
```

`entry_json` (after signature verification) can be a single game entry, an
array of entries, or a `{title: entry, ...}` map (a full database dump) —
same shapes the app's bulk import accepts.

**Have game data to contribute?** Don't put it here directly — see
`../submissions/README.md`. Files land in this folder only after
BearddOddity has reviewed and signed them.
