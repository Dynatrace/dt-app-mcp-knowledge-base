# Generic Headings

Agents locate docs by name and stop at the first plausible hit, so a heading that names a kind of
content instead of a feature makes a chunk hard to find.

## Overview

Every heading on this page except the last is on the fixed word list, so each is reported on
stderr to be fixed at the source. The report is advisory and changes nothing about what is
written.

> **Chunk check**
>
> - Path — `docs/generic-headings/overview.md`
> - Name — `Generic Headings: Overview`
> - Description — the paragraph above
> - Covers — the word list matching a single-word heading

## Prerequisites

A chunk named `Generic Headings: Prerequisites` says what kind of text it holds but not which
feature it holds it for, which is the whole problem the report exists to surface.

> **Chunk check**
>
> - Path — `docs/generic-headings/prerequisites.md`
> - Name — `Generic Headings: Prerequisites`
> - Description — the paragraph above
> - Covers — a second word-list hit, so the report is seen to collect rather than stop at one

## Best practices

The list matches on the slug, so `Best practices` and `Best Practices` are the same entry however
the source capitalises it.

> **Chunk check**
>
> - Path — `docs/generic-headings/best-practices.md`
> - Name — `Generic Headings: Best practices`
> - Description — the paragraph above
> - Covers — a two-word entry matched through its slug, independent of capitalisation

## Common usage

This heading is not reported. The check matches the word list exactly, so it catches `Usage` and
misses anything wrapped around it, which is the documented limitation of the stopgap until a
corpus-derived check replaces it.

> **Chunk check**
>
> - Path — `docs/generic-headings/common-usage.md`
> - Name — `Generic Headings: Common usage`
> - Description — the paragraph above
> - Covers — the gap in the word list. Nothing is reported for this heading, and that absence is
>   the assertion
