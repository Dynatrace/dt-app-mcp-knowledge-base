# Preprocessing

Turns the [Dynatrace Developer](https://developer.dynatrace.com) documentation into the knowledge base
that `dt-app-mcp` consumes. The pipeline runs in stages; this package currently implements the first one,
**document discovery**.

## Run it

From this directory:

```sh
npm install
npm start
```

That reads `https://developer.dynatrace.com/sitemap.xml`, derives the Markdown URL of every page and writes
the result to `meta.json` in the repository root. The run prints how many pages were found, how many are new
and how many the sitemap no longer lists.

### Options

Pass CLI options after `--`:

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

An unreachable, empty or malformed sitemap fails the run with a message on stderr and exit code `1`.
Bad CLI usage exits with `2`.

## Document URLs

A document is addressed by the URL of its Markdown source, which the portal serves at `<page-url>.md`.
Sitemap `<loc>` values carry a trailing slash, so the slash is dropped before the suffix is appended and
the bare site root maps to `/index.md`:

| Sitemap `<loc>`                               | Document URL                                    |
| --------------------------------------------- | ----------------------------------------------- |
| `https://developer.dynatrace.com/docs/intro/` | `https://developer.dynatrace.com/docs/intro.md` |
| `https://developer.dynatrace.com/`            | `https://developer.dynatrace.com/index.md`      |

## Output

`meta.json` holds build-only metadata, one `sources` entry per document, and is described by
[`schemas/meta.schema.json`](../schemas/meta.schema.json). Discovery fills `url` and writes placeholders for
the fields later stages own, so the file always satisfies the schema:

- `downloadHash` — an all-zero digest until the download stage hashes the document
- `downloadedAt` — the Unix epoch until the document is first downloaded
- `chunkPaths` — empty until the chunking stage splits the document

Re-runs rebuild the list from the sitemap but keep whatever later stages already recorded, so discovery never
discards their work. Documents that disappear from the sitemap are dropped.

## Develop

```sh
npm test        # node:test suite
npm run typecheck
```

Sources are TypeScript and run directly on Node's built-in type stripping, so there is no build step.
Node 24 or newer is required.
