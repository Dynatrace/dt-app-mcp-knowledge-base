# Trace context propagation

Context propagation is what turns a set of unrelated spans into a trace, by carrying the trace
identifier and the sampling decision across every process boundary a request crosses, and it is
the one piece of instrumentation that has to be present at every hop, because a single service
that drops the header breaks the trace from that point downward.

## Header formats

W3C Trace Context is the default, and the legacy formats are accepted alongside it so a partially
migrated fleet still produces connected traces.

> **Chunk check**
>
> - Path — `docs/page-preambles/introduction-over-the-limit/header-formats.md`
> - Name — `Trace context propagation: Header formats`
> - Description — the paragraph above
> - Covers — an ordinary section on a page whose introduction is too long to fit a description

> **Chunk check for the preamble**
>
> - Path — `docs/page-preambles/introduction-over-the-limit/index.md`
> - Name — `Trace context propagation`
> - Description — the introduction at the top of this file, clamped to 200 characters and closed
>   with `…`
> - Covers — an introduction longer than a description may carry. The page description keeps only
>   the clamped head, so the preamble is written out as a chunk and the tail survives in the file
