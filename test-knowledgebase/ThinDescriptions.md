# Thin Descriptions

Three ways a description can turn out too thin to decide on. Each is reported on stderr, and each
chunk is still written, because the problem is in the source document rather than in the run.

## Deadline exceeded

Deadline exceeded.

> **Chunk check**
>
> - Path — `docs/thin-descriptions/deadline-exceeded.md`
> - Name — `Thin Descriptions: Deadline exceeded`
> - Description — `Deadline exceeded.`
> - Covers — a description that slugs to the same thing as its heading, reported as
>   `only repeats the heading`, since the trailing full stop disappears in the slug. It tells an
>   agent nothing the name did not already

## Retry budget

Budget per call.

> **Chunk check**
>
> - Path — `docs/thin-descriptions/retry-budget.md`
> - Name — `Thin Descriptions: Retry budget`
> - Description — `Budget per call.`
> - Covers — a description under thirty characters, reported as
>   `shorter than 30 characters`. Roughly five words is the floor below which there is nothing
>   to match on

## Status code reference

```dql
fetch spans
| summarize count(), by: { span.status_code }
```

> **Chunk check**
>
> - Path — `docs/thin-descriptions/status-code-reference.md`
> - Name — `Thin Descriptions: Status code reference`
> - Description — borrowed from the page description above
> - Covers — a section with no text of its own, reported as `no text of its own`. The borrowed
>   description describes the page rather than this section, which is why it is still reported
