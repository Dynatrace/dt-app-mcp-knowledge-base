# Preprocessing

Turns the [Dynatrace Developer](https://developer.dynatrace.com) documentation into the knowledge base
that `dt-app-mcp` consumes. The pipeline runs in stages — **document discovery**, **chunking** and
**indexing** — as a single command. The download stage between discovery and chunking is still missing,
so the documents to split come from a local directory for now.

## Run the pipeline

From this directory:

```sh
npm install
npm start -- --source-dir ../../tmp-knowledge-base
```

That reads `https://developer.dynatrace.com/sitemap.xml` and derives the Markdown URL of every page, splits
each document at its main headings into `docs/`, and writes `index.json` and `meta.json` in the repository
root. The run prints what each stage produced: how many pages the sitemap held, how many are new and how
many it no longer lists, which documents it split, what it changed below `docs/`, and what it left alone.

The pipeline runs nightly, so it only redoes what the portal changed — see
[Only what changed](#only-what-changed).

`--source-dir` is **temporary**. The portal sitemap does not serve markdown yet, so there is nothing for the
download stage to fetch and the documents to split have to come from a local directory. Once the download
stage supplies them, the option goes away and the pipeline splits whatever that stage wrote.

The sitemap carries no content hash either, and deciding what changed needs one. Until it does,
[`src/mock-portal.ts`](src/mock-portal.ts) stands in for it, hashing the document the source directory holds
for a page; a page it holds nothing for keeps the all-zero digest discovery writes. The comparison itself is
already the real one, so only that stand-in goes away — the download stage will hash the bytes it fetched.

### Options

Pass CLI options after `--`:

```sh
npm start -- --source-dir ../../tmp-knowledge-base --dry-run
npm start -- --source-dir ../../tmp-knowledge-base --sitemap https://developer.dynatracelabs.com/sitemap.xml
```

| Option                | Default                                       | Description                                              |
| --------------------- | --------------------------------------------- | -------------------------------------------------------- |
| `--source-dir <path>` | —                                             | Documents to split. Required, and temporary — see above. |
| `--sitemap <url>`     | `https://developer.dynatrace.com/sitemap.xml` | Sitemap to read.                                         |
| `--chunk-dir <path>`  | `docs`                                        | Chunk output directory, relative to the repository root. |
| `--index <path>`      | `index.json`                                  | `index.json` to write, relative to the repository root.  |
| `--out <path>`        | `meta.json`                                   | `meta.json` to write, relative to the repository root.   |
| `--force`             | off                                           | Split every document again, whatever the hashes say.     |
| `--dry-run`           | off                                           | Report what would be produced without writing anything.  |
| `--json`              | off                                           | Print what the run produced as JSON.                     |
| `--help`              | —                                             | Show usage.                                              |

An unreachable, empty or malformed sitemap, a source directory holding no markdown and an index that does
not satisfy its schema each fail the run with a message on stderr and exit code `1`. Bad CLI usage exits
with `2`.

## Only what changed

Rewriting every chunk each night costs a large diff even when the portal published nothing, so a run
redoes only what changed. It compares the content hash of every page against the `downloadHash` the
last run recorded for it in `meta.json`, and a page whose hash still matches keeps the chunks it
already has: its files are not read, its sections are not derived again, and nothing is written.

A page whose hash moved is split again, and the result is compared with what `docs/` holds file by
file. Only the chunks that actually differ are written, so a reworded section touches one file and
leaves its neighbours alone. A chunk nothing produces any more — because its heading disappeared, or
because the page did — is deleted from `docs/` and drops out of `index.json` and `meta.json` with it.
Directories left empty go too.

`generatedAt` therefore dates the content rather than the run: a night that changed nothing leaves
`meta.json` untouched, keeping the timestamp of the run that last changed something. `downloadedAt`
works the same way, dating each page to the run that first saw the content it holds now.

A page is split again regardless of its hash when the run cannot carry its chunks over — when a
recorded chunk file is missing, or `index.json` no longer holds an entry for it — so a half-written
knowledge base repairs itself on the next run rather than staying broken.

### Forcing a rebuild

The hash describes the **source document**, not the pipeline, so a change to how documents are split,
named or described does not reach the chunks of a page the portal left alone. `--force` splits every
document again whatever the hashes say:

```sh
npm start -- --source-dir ../../tmp-knowledge-base --force
```

Files still change only where the content differs — writing bytes a file already holds helps nobody.
What `--force` buys is that every chunk is derived from the current pipeline, and that the advisory
reports below cover the whole corpus again rather than only the pages this run happened to split.

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
description an agent can retrieve it by, and one `index.json` entry per chunk.

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

Both this report and the one below cover the documents a run split. A page whose chunks were carried over
was not looked at, so it has nothing to say about it; `--force` brings the whole corpus back into view.

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

## Output

`index.json` at the repository root is the file `dt-app-mcp` starts from, described by
[`schemas/index.schema.json`](../schemas/index.schema.json). It holds one `chunks` entry per chunk,
carrying the name, the description and the path of that chunk relative to the repository root — enough
to search the index in memory and load only the chunks a request needs. Entries follow the page path
of the document they came from, so an entry holds its place whether the run split that document or
carried its chunks over, and a re-run of an unchanged corpus produces an unchanged file.

Every run rebuilds the whole index, from the documents it split and the entries it carried over, and
validates it against the schema before anything is written, then checks that every entry points at a
chunk file that is there. A violation fails the run with exit code `1`, naming the chunk behind each
one — an index `dt-app-mcp` cannot rely on is worse than none.

`meta.json` holds build-only metadata, one `sources` entry per document, and is described by
[`schemas/meta.schema.json`](../schemas/meta.schema.json). The discovery stage fills `url` and writes
placeholders for the fields the stages behind it own, so the file always satisfies the schema:

- `downloadHash` — an all-zero digest for a page whose content nothing has hashed yet
- `downloadedAt` — the Unix epoch for as long as that digest stands in
- `chunkPaths` — empty for a page no source document matched

A page carrying the all-zero digest cannot be told apart from a changed one, so it is split on every
run. That is every page until the download stage lands, which is why the stand-in hash below exists.

Re-runs rebuild the list from the sitemap but keep whatever the later stages already recorded, so discovery
never discards their work. Documents that disappear from the sitemap are dropped.

`generatedAt` carries the build timestamp of the run that last changed something, which is how fresh the
content of the knowledge base is. It stays out of `index.json` so that the file every request searches holds nothing
but what retrieval needs.

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
