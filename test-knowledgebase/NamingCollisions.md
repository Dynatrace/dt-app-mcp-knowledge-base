# Naming Collisions

A chunk file is named after the page path and the heading slug alone, so this page collects every
way two headings can end up asking for the same name.

## Naming collisions

A heading that says exactly what the page says is not repeated in the chunk name, so this chunk is
called `Naming Collisions` rather than `Naming Collisions: Naming collisions`.

> **Chunk check**
>
> - Path — `docs/naming-collisions/naming-collisions.md`
> - Name — `Naming Collisions`
> - Description — the paragraph above
> - Covers — the heading slug matching the title slug, case and all, so the title is not doubled

## Status codes

The first of three sections that slug identically. This one keeps the bare slug.

> **Chunk check**
>
> - Path — `docs/naming-collisions/status-codes.md`
> - Name — `Naming Collisions: Status codes`
> - Description — the paragraph above
> - Covers — the first claim on a slug

## Status codes

The second of the three. It is suffixed rather than overwriting the first, so no chunk is lost.

> **Chunk check**
>
> - Path — `docs/naming-collisions/status-codes-2.md`
> - Name — `Naming Collisions: Status codes`
> - Description — the paragraph above
> - Covers — the suffix starting at two, and the index name staying identical to the first chunk,
>   which is what makes a repeated heading a problem worth seeing in the output

## Status codes

The third and last. Suffixes keep counting, so a page may repeat a heading as often as it likes.

> **Chunk check**
>
> - Path — `docs/naming-collisions/status-codes-3.md`
> - Name — `Naming Collisions: Status codes`
> - Description — the paragraph above
> - Covers — the suffix incrementing past two

## Index

`index` is reserved for the content above the first main heading, whether or not this page has any,
so a section that asks for it is suffixed instead.

> **Chunk check**
>
> - Path — `docs/naming-collisions/index-2.md`
> - Name — `Naming Collisions: Index`
> - Description — the paragraph above
> - Covers — the reserved preamble slug never being handed to a section

## 🚀

A heading made up entirely of emoji slugs to nothing, so the chunk falls back to a fixed name.

> **Chunk check**
>
> - Path — `docs/naming-collisions/section.md`
> - Name — `Naming Collisions: 🚀`
> - Description — the paragraph above
> - Covers — the fallback slug for a heading with no sluggable character, while the index name
>   keeps the original heading text

## ✨

A second unsluggable heading collides with the first fallback and is suffixed like any other.

> **Chunk check**
>
> - Path — `docs/naming-collisions/section-2.md`
> - Name — `Naming Collisions: ✨`
> - Description — the paragraph above
> - Covers — the fallback slug taking part in disambiguation

## [Request Analysis](docs/dql/RequestAnalysis.md) cross-reference

A link in a heading contributes its text and nothing else, so neither the name nor the file name
carries the target.

> **Chunk check**
>
> - Path — `docs/naming-collisions/request-analysis-cross-reference.md`
> - Name — `Naming Collisions: Request Analysis cross-reference`
> - Description — the paragraph above
> - Covers — link syntax unwrapped in both the name and the slug

## **Bold**, _emphasis_ and `request_attribute.PaidAmount`

Inline markup is unwrapped, but the underscore inside an attribute name is literal and is kept, so
the attribute stays searchable in the chunk name.

> **Chunk check**
>
> - Path — `docs/naming-collisions/bold-emphasis-and-request-attribute-paidamount.md`
> - Name — `Naming Collisions: Bold, emphasis and request_attribute.PaidAmount`
> - Description — the paragraph above
> - Covers — emphasis markers dropped, an underscore that delimits emphasis dropped and an
>   underscore inside a word kept. `PaidAmount` slugs to `paidamount`, because the camel-case
>   split applies to file-name segments and not to heading text
