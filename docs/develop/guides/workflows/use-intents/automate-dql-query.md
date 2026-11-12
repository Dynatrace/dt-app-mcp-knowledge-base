## Automate DQL Query

Using `dt.query` in the intent payload, you can create a new workflow with a single **Execute DQL Query** task that will execute the passed query.

### Define the intent

```json
{
  "dt.query": "fetch logs\n| limit 100"
}
```

### Intent payload details

- `dt.query`: the DQL query (required)
