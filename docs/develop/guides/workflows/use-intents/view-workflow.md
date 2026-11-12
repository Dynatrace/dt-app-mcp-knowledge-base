## View workflow

An intent that opens an existing workflow in the editor by a given ID.

### Define the intent

```json
{
  "dynatrace.workflows.id": "00000000-0000-0000-0000-000000000000"
}
```

### Intent payload details

You need to provide only one property, either `dynatrace.workflows.id` or `workflow.id`.

- `dynatrace.workflows.id`: the UUID of the workflow
- `workflow.id`: the UUID of the workflow
