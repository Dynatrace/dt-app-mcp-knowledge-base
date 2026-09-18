# Description Sources

A description is the only text an agent sees before it decides to load a chunk, and this page
holds one section per source it can be derived from.

## Paragraph introduction

The paragraph directly below the heading is the first choice, because a section that opens with
prose has already said what it is about in the words its author chose.

```dql
fetch spans | filter isNotNull(span.events)
```

> **Chunk check**
>
> - Path — `docs/description-sources/paragraph-introduction.md`
> - Name — `Description Sources: Paragraph introduction`
> - Description — the paragraph above
> - Covers — the primary source, and later blocks in the section being ignored

## Attribute list

- `span.kind` — whether the span is a client, server or internal one
- `span.status_code` — the status the instrumentation reported
- `span.events` — the events attached to the span, exceptions among them

> **Chunk check**
>
> - Path — `docs/description-sources/attribute-list.md`
> - Name — `Description Sources: Attribute list`
> - Description — the three list items joined with `; `
> - Covers — a list standing in for an introduction, with items kept apart so each stays a term to
>   match on rather than dissolving into one sentence

## Subsections only

### Client spans

Outgoing calls a service makes.

### Server spans

Incoming calls a service handles.

### Internal spans

Work a service does without crossing a process boundary.

> **Chunk check**
>
> - Path — `docs/description-sources/subsections-only.md`
> - Name — `Description Sources: Subsections only`
> - Description — `Client spans; Server spans; Internal spans`
> - Covers — a section that opens straight into subsections, where the subsection headings name
>   the parts an agent is looking for. The paragraphs below each subsection are not used, because
>   they sit after the first heading

## Introduction before the subsections

This section has both an introduction and subsections, and the introduction wins, because it
describes the section as a whole rather than one part of it.

### First part

Not part of the description.

### Second part

Also not part of the description.

> **Chunk check**
>
> - Path — `docs/description-sources/introduction-before-the-subsections.md`
> - Name — `Description Sources: Introduction before the subsections`
> - Description — the paragraph above
> - Covers — the boundary rule: only blocks before the first subheading are searched for an
>   introduction, and subheadings are the fallback rather than an addition

## Code only

```dql
fetch spans
| filter span.kind == "server"
| summarize count(), by: { dt.entity.service }
```

> **Chunk check**
>
> - Path — `docs/description-sources/code-only.md`
> - Name — `Description Sources: Code only`
> - Description — borrowed from the page, since the section has nothing of its own to say
> - Covers — the fallback chain step where a chunk takes the page description, and a
>   weak-description report reading `no text of its own`

## Paragraph after a code block

```dql
fetch spans | filter request.is_root_span == true
```

The query above is the shape of the thing, and this paragraph explains it. It is still the first
paragraph of the section, so it becomes the description even though a code block precedes it.

> **Chunk check**
>
> - Path — `docs/description-sources/paragraph-after-a-code-block.md`
> - Name — `Description Sources: Paragraph after a code block`
> - Description — the paragraph above
> - Covers — the first paragraph being found wherever it sits, as long as no subheading comes
>   first

## Introduction longer than the limit

Descriptions are cut to two hundred characters so they stay skimmable in an index, and this
paragraph is deliberately longer than that, which means the cut has to land on a word boundary
rather than in the middle of a term an agent might be searching for, and the remainder is replaced
by a single ellipsis character.

> **Chunk check**
>
> - Path — `docs/description-sources/introduction-longer-than-the-limit.md`
> - Name — `Description Sources: Introduction longer than the limit`
> - Description — the paragraph above, cut on a word boundary and closed with `…`
> - Covers — clamping, and the cut never splitting a word

## Trailing colon

Run the following query to list the slowest server spans of the last hour:

```dql
fetch spans, from: now() - 1h
| filter span.kind == "server"
| sort duration desc
| limit 20
```

> **Chunk check**
>
> - Path — `docs/description-sources/trailing-colon.md`
> - Name — `Description Sources: Trailing colon`
> - Description — the paragraph above without its final colon, because the colon introduces a code
>   block the description cannot show
> - Covers — the trailing colon being dropped

## Table first

| Attribute | Type | Meaning |
| --------- | ---- | ------- |
| `duration` | duration | Wall clock time the span took |
| `span.kind` | string | Client, server or internal |

> **Chunk check**
>
> - Path — `docs/description-sources/table-first.md`
> - Name — `Description Sources: Table first`
> - Description — the raw pipe-delimited rows, because tables are a GFM extension and the parser
>   is plain CommonMark, so a table is read as an ordinary paragraph
> - Covers — the known rough edge of table-led sections. A portal page that opens a section with a
>   table gets a description no agent can match on, which is worth seeing rather than hiding
