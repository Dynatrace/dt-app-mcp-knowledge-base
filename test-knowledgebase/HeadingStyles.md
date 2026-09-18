# Heading Styles

Headings are read from a CommonMark parse, so both heading styles count and a hash mark that is
not a heading is never mistaken for one.

Setext sections are headings
----------------------------

A section underlined with dashes is an `h2` exactly like `## Setext sections are headings`, so it
starts a chunk of its own and reorders nothing around it.

> **Chunk check**
>
> - Path — `docs/heading-styles/setext-sections-are-headings.md`
> - Name — `Heading Styles: Setext sections are headings`
> - Description — the paragraph above
> - Covers — a setext `h2` counting as a main heading alongside the ATX ones in this document

## Hash marks that are not headings

None of the hash marks below is a heading, so this section stays whole instead of splitting into
four, and the document's main heading level is unaffected by them.

A fenced code block:

```sh
# This is a shell comment, not a heading
npm run chunk -- --source-dir ../test-knowledgebase
```

A block quote:

> # Quoted text keeps its hash mark
>
> A heading inside a block quote is a child of the quote, not of the document.

An indented code block:

    # Indented four spaces, so this is code

A list item:

- # A hash mark inside a list item belongs to the item
- Nothing above starts a new chunk

> **Chunk check**
>
> - Path — `docs/heading-styles/hash-marks-that-are-not-headings.md`
> - Name — `Heading Styles: Hash marks that are not headings`
> - Description — the paragraph above
> - Covers — hash marks in fenced code, block quotes, indented code and list items being ignored,
>   because only a heading at the top level of the document splits it

## Deeper levels stay put

A subsection is part of the section above it. Setext syntax reaches `h1` and `h2` only, so every
subsection in this document is an ATX one by necessity.

### An ATX subsection

Stays in this chunk, together with its heading.

### A second ATX subsection

Also stays in this chunk, so the section is retrieved whole.

> **Chunk check**
>
> - Path — `docs/heading-styles/deeper-levels-stay-put.md`
> - Name — `Heading Styles: Deeper levels stay put`
> - Description — the paragraph above, chosen over the two subsection headings because the
>   section has an introduction of its own
> - Covers — a subsection never becoming a chunk, and an introduction outranking subheadings
