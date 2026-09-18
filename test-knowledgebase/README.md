# Chunking Test Corpus

Deliberately shaped markdown documents that drive every branch of the chunking stage, each one
annotated with the chunk it is expected to produce.

## How to run the corpus

Split the corpus from `preprocessing/` and read the index entries the run prints to stdout:

```sh
npm run chunk -- --source-dir ../test-knowledgebase --dry-run --json
```

`--dry-run` leaves `docs/` and `meta.json` untouched. Drop it to write the chunk files and compare
them on disk. No document here is listed in `meta.json`, so every one of them is reported as
unmatched on stderr, which is the expected outcome and not a failure.

> **Chunk check**
>
> - Path — `docs/readme/how-to-run-the-corpus.md`
> - Name — `Chunking Test Corpus: How to run the corpus`
> - Description — the paragraph above, with its trailing colon dropped
> - Covers — the happy path, and a description that introduces a code block

## How to read an annotation

Every section carries a `Chunk check` block quote naming the file the chunker should write, the
index name and description it should derive, and the branch that outcome exercises. A block quote
is neither a paragraph nor a list, so the annotation is invisible to description derivation and
never changes the result it documents.

> **Chunk check**
>
> - Path — `docs/readme/how-to-read-an-annotation.md`
> - Name — `Chunking Test Corpus: How to read an annotation`
> - Description — the paragraph above, clamped to 200 characters on a word boundary and closed
>   with an ellipsis
> - Covers — clamping, and the annotation being inert

## What an agent should be able to do with this corpus

Ask an agent to find a chunk by name, load only that file, and answer from it alone. Each document
below names one behaviour, so a wrong retrieval is obvious from the file that comes back:

- `docs/dql/RequestAnalysis.md` — a realistic page: title, introduction, sections with subsections
- `docs/dql/RPCSpans.md` — an acronym file name, a section holding nothing but code
- `HeadingStyles.md` — setext headings, and hash marks that are not headings
- `SkippedHeadingLevels.md` — a page that jumps from `#` straight to `###`
- `LoneHeading.md` — a document whose only heading has to start a section
- `MultipleTopLevelHeadings.md` — several `#` headings, so none of them is a page title
- `NamingCollisions.md` — repeated headings, reserved slugs, headings that slug to nothing
- `DescriptionSources.md` — every source a description can be derived from
- `ThinDescriptions.md` — descriptions too thin to decide on
- `GenericHeadings.md` — headings that name a kind of content instead of a feature
- `NoHeadingsAtAll.md` — a document with no heading anywhere
- `PagePreambles/` — the five shapes the content above the first main heading can take

> **Chunk check**
>
> - Path — `docs/readme/what-an-agent-should-be-able-to-do-with-this-corpus.md`
> - Name — `Chunking Test Corpus: What an agent should be able to do with this corpus`
> - Description — the paragraph above the list, without its trailing colon
> - Covers — a paragraph outranking the list that follows it, and a long heading slugging to a
>   long file name. For a list standing in as the description, see `DescriptionSources.md`

## What this corpus deliberately leaves out

Two behaviours cannot be pinned down by a committed file. Carriage returns are normalised by git on
checkout, so a CRLF document would not survive as one, and frontmatter is excluded by contract —
a closing `---` parses as a setext heading, so the portal must not serve any.

> **Chunk check**
>
> - Path — `docs/readme/what-this-corpus-deliberately-leaves-out.md`
> - Name — `Chunking Test Corpus: What this corpus deliberately leaves out`
> - Description — the paragraph above, clamped
> - Covers — nothing on its own; it records the two gaps so they are not mistaken for oversights

## Where the same heading appears twice

`Best practices` is a heading in both `docs/dql/RequestAnalysis.md` and `GenericHeadings.md`, in
two different capitalisations. Chunk paths start from the page path, so the two never collide, and
the `-2` suffix is only ever needed inside a single page.

> **Chunk check**
>
> - Path — `docs/readme/where-the-same-heading-appears-twice.md`
> - Name — `Chunking Test Corpus: Where the same heading appears twice`
> - Description — the paragraph above
> - Covers — disambiguation being scoped to one document
