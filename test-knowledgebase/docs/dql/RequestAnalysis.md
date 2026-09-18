# Request Analysis

Requests are the spans a service handles as a root, and the starting point for every
endpoint-level question about response time and failure rate.

## Request Root Spans

A request root span carries the endpoint, the response time and the failure flag of the whole
request, so most endpoint questions are answered without joining anything to it.

### List request roots

```dql
fetch spans
| filter request.is_root_span == true
| fields trace.id, span.id, start_time, response_time = duration, endpoint.name
| limit 100
```

### Failed requests over time

```dql
fetch spans, from: now() - 7d
| filter request.is_root_span == true
| makeTimeseries failed = countIf(request.is_failed == true), by: { endpoint.name }
```

#### Narrowing to one endpoint

```dql
fetch spans
| filter request.is_root_span == true and endpoint.name == "/api/v1/payment"
| filter request.is_failed == true
| fields trace.id, endpoint.name, duration, start_time
```

> **Chunk check**
>
> - Path — `docs/docs/dql/request-analysis/request-root-spans.md`
> - Name — `Request Analysis: Request Root Spans`
> - Description — the paragraph above
> - Covers — the page path composing into a nested chunk directory, and `###` and `####`
>   subsections staying with the `##` section they belong to, so a chunk never loses its context

## Request Attributes

Request attributes appear on request root spans under `request_attribute.<name>`, and
`request.is_root_span` stays the filter that selects the spans carrying them.

```dql
fetch spans
| filter request.is_root_span == true
| filter isNotNull(request_attribute.PaidAmount)
| makeTimeseries sum(request_attribute.PaidAmount)
```

> **Chunk check**
>
> - Path — `docs/docs/dql/request-analysis/request-attributes.md`
> - Name — `Request Analysis: Request Attributes`
> - Description — the paragraph above, with `request_attribute` and `request.is_root_span`
>   surviving intact: the underscore inside an attribute name is exactly what an agent searches on
> - Covers — inline code unwrapped in a description without losing the underscores

## Best Practices

- Filter for request roots with `request.is_root_span == true`
- Check `request.is_failed` to separate failed requests from slow ones
- Aggregate spans of one request with `request.id`, available for OneAgent traces only
- Report failure rate as a percentage rather than a count, so endpoints stay comparable

> **Chunk check**
>
> - Path — `docs/docs/dql/request-analysis/best-practices.md`
> - Name — `Request Analysis: Best Practices`
> - Description — the four list items joined with `; `, clamped to 200 characters
> - Covers — a list as the description source, each item kept apart as a term of its own, and a
>   generic heading reported on stderr from a document that is otherwise well formed
