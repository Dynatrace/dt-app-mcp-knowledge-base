A document with no heading anywhere produces exactly one chunk, holding the whole file. There is
nothing to split at, so the split never happens and nothing is lost.

Because there is no title heading either, the page title is the humanised file name, and the chunk
takes that name unchanged rather than the `Title: Heading` form every other chunk uses.

```dql
fetch spans
| filter isNotNull(trace.id)
| summarize spans = count(), by: { trace.id }
| sort spans desc
```

> **Chunk check**
>
> - Path — `docs/no-headings-at-all/index.md`
> - Name — `No Headings At All`
> - Description — the first paragraph above
> - Covers — a document with no heading at all, the single headingless section being written to
>   `index.md`, and the chunk name being the page title with nothing appended. The preamble is
>   written out here because it does not open with a heading, so it cannot be a title and an
>   introduction the page summary already carries
