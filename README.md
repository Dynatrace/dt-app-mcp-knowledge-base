# dt-app-mcp-knowledge-base

Knowledge base for [`dt-app-mcp`](https://github.com/Dynatrace/dt-app-mcp), built from the
[Dynatrace Developer](https://developer.dynatrace.com) documentation.

This repository holds two things: the **preprocessing pipeline** that turns the public developer
portal docs into small, retrievable chunks, and the **generated knowledge base** those chunks form.
`dt-app-mcp` consumes the generated output; nothing here is written by hand.

## Why this exists

`dt-app-mcp` used to bundle its Strato, SDK, DQL and app-experience knowledge manually. With no
build step deriving that content from the docs at their source, the bundled copy drifted from
`developer.dynatrace.com`.

This repository removes the manual step. Documentation is processed from the source it is published
from, so the knowledge an AI assistant sees cannot drift from the docs it came from, and doc owners
stay in control of what gets exposed.

All content originates from the public developer portal. No internal documentation enters the
pipeline.

## How it works

```
developer.dynatrace.com/sitemap.xml
        │
        ▼
  discover ──▶ download ──▶ split by heading ──▶ index
        │                                          │
        ▼                                          ▼
    meta.json                              index.json + docs/
  (build metadata)                        (what dt-app-mcp reads)
```

Each documentation page is split at its main headings into one chunk file under `docs/`, with one
entry per chunk in `index.json`. An entry carries a name, a one-sentence description and the chunk
path — enough for `dt-app-mcp` to search the index in memory and load only the chunks a request
actually needs, instead of pushing the whole documentation set into the context window.

Descriptions are derived from each chunk's heading and leading paragraph, so building the index
needs no model call.

Content hashes in `meta.json` let re-runs reprocess only what changed upstream. Because that
metadata never needs to reach the server, it is kept out of `index.json` to keep the searched index
small.

## Repository layout

| Path             | Contents                                                                       |
| ---------------- | ------------------------------------------------------------------------------ |
| `preprocessing/` | The pipeline and its CLI. See [preprocessing/README.md](preprocessing/README.md). |
| `schemas/`       | JSON schemas for the generated `index.json` and `meta.json`.                   |
| `meta.json`      | Build-only metadata. Generated — never edit by hand.                           |

`index.json` and `docs/` appear once the chunking stage lands.

## The CLI

The pipeline ships as a single command, run from `preprocessing/`. Node 24 or newer is required;
sources run on Node's built-in type stripping, so there is no build step.

```sh
cd preprocessing
npm install
npm start
```

That reads the portal sitemap, derives the Markdown URL of every page and records the result in
`meta.json`, reporting how many pages were found, how many are new and how many the sitemap no
longer lists.

Pass options after `--`:

```sh
npm start -- --dry-run
npm start -- --sitemap https://developer.dynatracelabs.com/sitemap.xml
```

| Option            | Default                                       | Description                                            |
| ----------------- | --------------------------------------------- | ------------------------------------------------------ |
| `--sitemap <url>` | `https://developer.dynatrace.com/sitemap.xml` | Sitemap to read.                                       |
| `--out <path>`    | `meta.json`                                   | Output file, relative to the repository root.          |
| `--dry-run`       | off                                           | Report what was found without writing the output file. |
| `--json`          | off                                           | Print the discovered documents as JSON.                |
| `--help`          | —                                             | Show usage.                                            |

An unreachable, empty or malformed sitemap fails the run with exit code `1`. Bad CLI usage exits
with `2`.

## Status

Document discovery is implemented. Downloading, heading-based chunking and `index.json` generation
are still to come, as is the nightly CI run that refreshes the knowledge base and opens a pull
request with the result.

## Development

`preprocessing/` is the only npm package in the repository; run its scripts from that directory.

```sh
npm test           # node:test suite
npm run typecheck
```

Content changes reach `main` through pull requests reviewed by the owners listed in
[CODEOWNERS](CODEOWNERS). See [AGENTS.md](AGENTS.md) for the conventions this repository expects.

## License

[Apache License 2.0](LICENSE).
