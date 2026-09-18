# Sampling decisions

Several `#` headings mean none of them is a page title, so the document is split at level one and
the title falls back to the file name.

Head-based sampling decides at the root of a trace and propagates the decision, so every span of a
sampled trace is kept and no trace is ever left partial.

> **Chunk check**
>
> - Path — `docs/multiple-top-level-headings/sampling-decisions.md`
> - Name — `Multiple Top Level Headings: Sampling decisions`
> - Description — the first paragraph above
> - Covers — the shallowest level carrying more than one heading, so it is the main level

Adaptive traffic management
===========================

A setext heading underlined with equals signs is an `h1`, indistinguishable from `# Adaptive
traffic management`, so it joins the level-one sections rather than becoming a title.

> **Chunk check**
>
> - Path — `docs/multiple-top-level-headings/adaptive-traffic-management.md`
> - Name — `Multiple Top Level Headings: Adaptive traffic management`
> - Description — the paragraph above
> - Covers — a setext `h1` counting as a level-one heading

# Span limits

A span that exceeds its attribute or event limit is truncated rather than dropped, so the trace
stays complete while the individual span loses detail.

> **Chunk check**
>
> - Path — `docs/multiple-top-level-headings/span-limits.md`
> - Name — `Multiple Top Level Headings: Span limits`
> - Description — the paragraph above
> - Covers — the third level-one section, and the whole document producing no `index.md`, because
>   nothing precedes the first heading
