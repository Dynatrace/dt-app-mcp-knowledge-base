# Everything sits under one heading

A document whose only heading is its first one has no deeper level to fall back to, so that
heading has to start a section or the document would produce no chunk at all.

Because the heading is spent on the section, the page title comes from the file name instead, and
`LoneHeading.md` is humanised to `Lone Heading`.

```dql
fetch spans
| filter isNotNull(rpc.system)
| summarize count(), by: { rpc.system }
```

> **Chunk check**
>
> - Path — `docs/lone-heading/everything-sits-under-one-heading.md`
> - Name — `Lone Heading: Everything sits under one heading`
> - Description — the first paragraph above
> - Covers — the page title falling back to the humanised file name, and the single heading
>   starting a section rather than being treated as a title. There is no preamble and no
>   `index.md`, because nothing precedes the heading
