# RPC Span Analysis

Remote procedure call spans cover gRPC, SOAP and Java RMI, and carry the framework, the service
and the method of every call between two services.

## Key attributes

- `rpc.system` — the framework, such as `grpc`, `jax_ws` or `dotnet_wcf`
- `rpc.service` — the service being called
- `rpc.method` — the method invoked on it
- `rpc.grpc.status_code` — the gRPC status of the call

> **Chunk check**
>
> - Path — `docs/docs/dql/rpc-spans/key-attributes.md`
> - Name — `RPC Span Analysis: Key attributes`
> - Description — the four list items joined with `; `
> - Covers — `RPCSpans.md` slugging to `rpc-spans`, where the acronym boundary splits before the
>   last capital rather than in the middle of `RPC`

## Working with `rpc.grpc.status_code`

Every gRPC call reports a numeric status. `0` is success, `4` is a deadline that expired, `13` an
internal error and `14` an unavailable upstream.

```dql
fetch spans
| filter rpc.system == "grpc" and rpc.grpc.status_code != 0
| summarize errors = count(), by: { rpc.service, rpc.method, rpc.grpc.status_code }
| sort errors desc
```

> **Chunk check**
>
> - Path — `docs/docs/dql/rpc-spans/working-with-rpc-grpc-status-code.md`
> - Name — `RPC Span Analysis: Working with rpc.grpc.status_code`
> - Description — the paragraph above
> - Covers — a heading whose inline code is unwrapped for both the name and the file name

## RPC call graph

```dql
fetch spans
| filter isNotNull(rpc.system) and span.kind == "client"
| fieldsAdd caller = entityName(dt.entity.service)
| summarize calls = count(), by: { caller, server.address, rpc.service }
| sort calls desc
```

> **Chunk check**
>
> - Path — `docs/docs/dql/rpc-spans/rpc-call-graph.md`
> - Name — `RPC Span Analysis: RPC call graph`
> - Description — borrowed from the page, because the section holds nothing but a code block
> - Covers — the fallback to the page description, and a weak-description report reading
>   `no text of its own`

## Related topics

- [Request Analysis](RequestAnalysis.md) covers the root spans an RPC call is measured against
- [Description Sources](../../DescriptionSources.md) covers where a description comes from

> **Chunk check**
>
> - Path — `docs/docs/dql/rpc-spans/related-topics.md`
> - Name — `RPC Span Analysis: Related topics`
> - Description — the two list items joined with `; `, with the link text kept and the targets
>   dropped
> - Covers — links unwrapped in a description, and a second generic heading for the stderr report
