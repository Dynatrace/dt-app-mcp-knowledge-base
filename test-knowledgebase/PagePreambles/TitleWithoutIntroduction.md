# Trace sampling

## Head-based sampling

The decision is taken at the root of the trace and propagated to every child, so a sampled trace
is always complete.

> **Chunk check**
>
> - Path — `docs/page-preambles/title-without-introduction/head-based-sampling.md`
> - Name — `Trace sampling: Head-based sampling`
> - Description — the paragraph above
> - Covers — a preamble holding nothing but the title. It is not written out, because the page
>   name already carries all of it

## Tail-based sampling

```dql
fetch spans
| filter trace.sampling.decision == "tail"
| summarize count(), by: { dt.entity.service }
```

> **Chunk check**
>
> - Path — `docs/page-preambles/title-without-introduction/tail-based-sampling.md`
> - Name — `Trace sampling: Tail-based sampling`
> - Description — `Trace sampling`, the page title
> - Covers — the last step of the fallback chain. The section has no text of its own and the page
>   has no description either, because the preamble was a bare title, so the chunk falls all the
>   way back to the title
