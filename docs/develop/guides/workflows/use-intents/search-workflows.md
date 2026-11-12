## Search workflows

An intent to search for workflows, thus opening the list of workflows for given filter criteria.

### Define the intent

```json
{
  "dt.searchQuery": {
    "search": "My workflow",
    "owner": "00000000-0000-0000-0000-000000000000",
    "triggerType": "Manual"
  }
}
```

### Intent payload details

- `dt.searchQuery`: object (required)
  - `search`: filter by a search string
  - `owner`: filter by the owner of the workflow
  - `triggerType`: filter by the trigger type. Available options are `Manual`, `Schedule`, and `Event`.
