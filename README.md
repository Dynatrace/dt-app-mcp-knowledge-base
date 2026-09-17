# dt-app-mcp-knowledge-base

Knowledge base for `dt-app-mcp`, built from the
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

```text
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

| Path | Contents |
| --- | --- |
| `preprocessing/` | The pipeline and its CLI. See [preprocessing/README.md](preprocessing/README.md). |
| `schemas/` | JSON schemas for the generated `index.json` and `meta.json`. |
| `docs/` | The knowledge base chunks, one markdown file per section. Generated — never edit by hand. |
| `index.json` | One entry per chunk, the file `dt-app-mcp` starts from. Generated — never edit by hand. |
| `meta.json` | Build-only metadata. Generated — never edit by hand. |

## The CLI

The pipeline ships as a single command, run from `preprocessing/`. Node 24 or newer is required;
sources run on Node's built-in type stripping, so there is no build step.

```sh
cd preprocessing
npm install
npm start -- --source-dir <path>
```

That reads the portal sitemap and derives the Markdown URL of every page, splits each document at
its main headings into one markdown file per section under `docs/`, and writes one entry per chunk
in `index.json` along with the build metadata in `meta.json`. The index is validated against its
schema before anything is written, so a run either produces an index `dt-app-mcp` can rely on or
fails naming the chunks at fault.

`--source-dir` stands in for the download stage, which does not exist yet — the documents to split
come from a local directory until it does.

Pass options after `--`:

```sh
npm start -- --source-dir <path> --dry-run
npm start -- --source-dir <path> --sitemap https://developer.dynatracelabs.com/sitemap.xml
```

| Option                | Default                                       | Description                                              |
| --------------------- | --------------------------------------------- | -------------------------------------------------------- |
| `--source-dir <path>` | —                                             | Documents to split. Required, and temporary — see above. |
| `--sitemap <url>`     | `https://developer.dynatrace.com/sitemap.xml` | Sitemap to read.                                         |
| `--chunk-dir <path>`  | `docs`                                        | Chunk output directory, relative to the repository root. |
| `--index <path>`      | `index.json`                                  | `index.json` to write, relative to the repository root.  |
| `--out <path>`        | `meta.json`                                   | `meta.json` to write, relative to the repository root.   |
| `--dry-run`           | off                                           | Report what would be produced without writing anything.  |
| `--json`              | off                                           | Print what the run produced as JSON.                     |
| `--help`              | —                                             | Show usage.                                              |

An unreachable, empty or malformed sitemap, and an index that does not satisfy its schema, each fail
the run with exit code `1`. Bad CLI usage exits with `2`. See
[preprocessing/README.md](preprocessing/README.md) for how chunks are split, named and described.

## Status

Document discovery, heading-based chunking and `index.json` generation are implemented. Downloading
is still to come — the documents to split come from a local directory for now — as is the nightly
CI run that refreshes the knowledge base and opens a pull request with the result.

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
