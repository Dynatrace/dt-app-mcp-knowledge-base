## Optimistic locking

You can use [optimistic locking](https://en.wikipedia.org/wiki/Optimistic_concurrency_control) strategy as an alternative to the default.

Optimistic Locking assigns a version to the protected resource as a field named `version`. The format of the version depends on the service and can be a simple ever-increasing counter, a hash, or a decimal or hash encoding.

When a resource is protected by **optimistic locking**, all writing operations accept an `optimistic-locking-version` query parameter which contains the numeric representation of the original version from which the written content was taken. That allows the API to check if the current version of the resource is still the one on which the write operation is based and reject the request if it's not.

In the case of a conflict, the API will respond with a **409 - Conflict** status code. The only situation where a missing `optimistic-locking-version` parameter is accepted on a writing operation is when no conflict can occur, such as when creating a new resource or deleting a resource.

### Example

This example shows how you can update a document protected by **optimistic locking**.
You first need to retrieve the current version by calling the `/documents/<DocumentID>` endpoint.

```text
GET /documents/6239bf48-ce6d-4e06-8694-bd3c2b235d63
```

```json
{
  "id": "6239bf48-ce6d-4e06-8694-bd3c2b235d63",
  "name": "document name",
  "type": "notebook",
  "version": "2e9565ea",
  "owner": "441664f0-23c9-40ef-b344-18c02c23d789"
}
```

To update the document you have to pass the `version` returned by the request above as the `optimistic-locking-version` query parameter:

```text
PUT /documents/6239bf48-ce6d-4e06-8694-bd3c2b235d63?optimistic-locking-version=2e9565ea
```

A subsequent call to the `/documents/<DocumentID>` endpoint returns a new `version` value:

```text
GET /documents/6239bf48-ce6d-4e06-8694-bd3c2b235d63
```

```json
{
  "id": "6239bf48-ce6d-4e06-8694-bd3c2b235d63",
  "name": "updated document name",
  "type": "notebook",
  // highlight-next-line
  "version": "456efa90",
  "owner": "441664f0-23c9-40ef-b344-18c02c23d789"
}
```
