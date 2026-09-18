# Span attributes

Attributes are the key-value pairs a span carries, and they are the fields most queries filter and
group by.

- Semantic attributes are defined by OpenTelemetry
- Request attributes are configured in Dynatrace
- Captured attributes come from method parameters

## Semantic attributes

The conventions OpenTelemetry defines for HTTP, database and RPC calls, so a query written against
one instrumentation works against another.

> **Chunk check**
>
> - Path — `docs/page-preambles/preamble-beyond-introduction/semantic-attributes.md`
> - Name — `Span attributes: Semantic attributes`
> - Description — the paragraph above
> - Covers — an ordinary section on a page whose preamble is written out

> **Chunk check for the preamble**
>
> - Path — `docs/page-preambles/preamble-beyond-introduction/index.md`
> - Name — `Span attributes`
> - Description — the introduction paragraph at the top of this file
> - Covers — a preamble holding more than a title and an introduction. The list would be lost if
>   the preamble were dropped, so it is written to `index.md`, named after the page with nothing
>   appended
