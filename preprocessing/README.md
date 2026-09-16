# Preprocessing

Turns the [Dynatrace Developer](https://developer.dynatrace.com) documentation into the knowledge base
that `dt-app-mcp` consumes. The pipeline runs in stages; this package implements **document discovery**
and **chunking**. The download stage between them is still missing, so chunking reads its input from a
local directory for now.

## Discover documents

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

## Chunk documents

Loading a whole page into the agent context wastes space when only one section is relevant, so every
document is split at its main headings into one markdown file per section, each with a name and a
description an agent can retrieve it by:

```sh
npm run chunk -- --source-dir ../../tmp-knowledge-base
```

`--source-dir` is **temporary**. The portal sitemap does not serve markdown yet, so there is nothing for the
download stage to fetch and the documents to split have to come from a local directory. Once the download
stage supplies them, the option goes away and chunking reads whatever that stage wrote.

| Option                | Default     | Description                                                  |
| --------------------- | ----------- | ------------------------------------------------------------ |
| `--source-dir <path>` | —           | Documents to split. Required, and temporary — see above.     |
| `--out <path>`        | `meta.json` | `meta.json` to update, relative to the repository root.      |
| `--chunk-dir <path>`  | `docs`      | Chunk output directory, relative to the repository root.     |
| `--dry-run`           | off         | Report what would be produced without writing anything.      |
| `--json`              | off         | Print the produced chunks as JSON.                           |

Every `.md` file below `--source-dir` is one document, and its location is its page path: `docs/dql/spans.md`
is the page `docs/dql/spans`. Chunk paths are recorded on the matching `meta.json` source entry; documents no
source entry claims are still chunked, and reported on stderr.

### Where a document is split

The split happens at the document's **main heading level**, which is the shallowest heading level that holds
more than the page title. A page with one `#` title and several `##` sections is split at `##`, and the `###`
subsections stay with the section they belong to, so a chunk never loses the context above it. Content above
the first main heading — the title and its introduction — becomes the page name and description rather than a
chunk, and a chunk of its own as soon as it holds more than those two.

Headings are read from a CommonMark parse of the document, so both heading styles count — `## Section` and
a `Section` underlined with `---` are the same thing — while `#` inside a fenced code block or a block quote
is not a heading at all. Documents are plain markdown: a page carrying frontmatter would have its closing
`---` read as a setext heading, so the portal must not serve one.

### How a chunk is named

A chunk file is named after the page path and the heading slug alone, never its position, so it keeps its
name when neighbouring sections are added, removed or reordered:

| Chunk                                    | Path                                        |
| ---------------------------------------- | ------------------------------------------- |
| `## Request Attributes`                  | `docs/docs/dql/spans/request-attributes.md` |
| A preamble beyond title and introduction | `docs/docs/dql/spans/index.md`              |

Coding agents locate docs by name and stop at the first plausible hit, so a heading that does not name its
feature makes a chunk hard to find. The chunk name therefore carries the page context as well:
`RPC Span Analysis: Key Attributes`, from the page title and the heading. A heading that already says what
the page says is not repeated. Where the document has no title heading, the file name stands in for it.

Headings that name a kind of content instead of a feature — `Overview`, `Usage`, `Example` — are reported
on stderr to be fixed at the source.

That report is a stopgap: it matches a fixed word list exactly, so it catches `Usage` but not `Common usage`.
Once every document is chunked it should give way to a corpus-derived check, where a slug recurring across
many pages is generic by definition. The report is advisory only and never changes what is written.

### How a chunk is described

The description is the only text an agent sees before it decides to load a chunk, so it has to say what the
chunk covers. It is derived from the chunk itself, deterministically and without a model call:

1. the paragraph or list below the heading, with list items kept apart so each stays a term to match on
2. the subsection headings, where the section opens straight into subsections and has no introduction
3. the page description, where the section holds nothing but code

Descriptions are cut to 200 characters on a word boundary. Inline markup is unwrapped, but the underscores of
an attribute name are kept — `request.is_root_span` is exactly what an agent searches for.

A chunk whose description carries no text of its own, only repeats its heading or stays under 30 characters is
reported on stderr. Like the generic-heading report it is advisory: the chunk is still written, because a thin
description is a problem in the source document rather than in this run.

### The page title and introduction are not a chunk

The content above the first main heading is the page title and its introduction, which describe the **page**,
not a section. Both are kept as the page name and description — the name of every chunk of that page starts
with the title, and a chunk with no text of its own borrows the description — so writing them out again would
only cost the agent a file to load. A preamble that holds more than title and introduction, or an
introduction longer than a description may carry, is still written to `index.md`, so nothing is lost.

Neither value reaches [`index.json`](../schemas/index.schema.json) yet. Until the download stage feeds the
pipeline, the entries the index stage would write are printed to stdout instead.

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

## Dependencies

[`.npmrc`](.npmrc) pins the registry to `registry.npmjs.org`. The `resolved` URLs in `package-lock.json` have
to stay reachable from CI and by external contributors, whatever registry a developer's own `~/.npmrc` happens
to point at. A test fails the build if the lockfile ever resolves a package from anywhere else, naming the
offending packages.

npm seeds `resolved` URLs from the installed tree, so passing `--registry` does not repair a lockfile that
already carries the wrong host. Regenerate it from scratch instead:

```sh
rm -rf node_modules package-lock.json
npm install
```
