## Instant feedback with HMR

Run the dev server with the new `--hmr` flag and you get two immediate wins: the server starts significantly faster, and edits show up in the browser instantly, **without a full-page reload**:

```bash
npx dt-app dev --hmr
```

Because the page never reloads, your app keeps its state across edits, so you stay in flow instead of clicking your way back to where you were. Fastify is gone from this path, source maps still work exactly as before, and breakpoints still hit—so debugging is unchanged. HMR works for the app UI as well as for Workflow and Settings widgets.
