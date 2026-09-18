## Ingest limits

A document that opens directly with a section heading has no preamble at all, so there is no page
description for its chunks to borrow and no `index.md` to write.

> **Chunk check**
>
> - Path — `docs/page-preambles/starts-with-a-section/ingest-limits.md`
> - Name — `Starts With A Section: Ingest limits`
> - Description — the paragraph above
> - Covers — the page title falling back to the humanised file name, because no heading precedes
>   the sections and none of them is a title

## Retention periods

```dql
fetch dt.system.buckets
| fields name, retentionDays
| sort retentionDays desc
```

> **Chunk check**
>
> - Path — `docs/page-preambles/starts-with-a-section/retention-periods.md`
> - Name — `Starts With A Section: Retention periods`
> - Description — `Starts With A Section`, the page title
> - Covers — the fallback reaching the title where there is no page description to borrow,
>   because the document never had a preamble
