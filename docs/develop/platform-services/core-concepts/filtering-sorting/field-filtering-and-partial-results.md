## Field filtering and partial results

Some services may return only a subset of all available fields of a resource by default, also known as a partial result. This can be beneficial in certain scenarios to avoid expensive background operations and unnecessary network bandwidth usage.

If an API supports partial results, it accepts a query parameter `add-fields` to include missing fields in the default response.

Field filtering is only supported in the APIs that list or get a resource.

### Things to remember

- `add-fields` accept a comma-separated list of field names that are added to the default set of fields.
- Duplicate fields in the list result in an error.
- Adding fields already in the default response is considered redundant and ignored.
- Referencing unknown fields results in an error.
- A dot separates nested field names.

### Example

In the following example, you're fetching a list of entities. The result includes default fields.

```text
GET /entities
```

```json
{
  "totalCount": 72,
  "nextPageKey": "…",
  "entities": [
    {
      "entityId": "HOST-0004DD30F142D18C"
    }
  ]
}
```

In the following example, you're using `add-fields` to add `lastSeenTms` and `properties.bitness` in addition to the default result, which you can see in the result below:

```text
GET /entities?add-fields=lastSeenTms,properties.bitness
```

```json
{
  "totalCount": 72,
  "nextPageKey": "…",
  "entities": [
    {
      "entityId": "HOST-0004DD30F142D18C",
      "lastSeenTms": 1615991063257,
      "properties": {
        "bitness": "64"
      }
    }
  ]
}
```
