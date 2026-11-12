## Automate code

Using `dt.code` in the intent payload, you can create a new workflow with a single **Run JavaScript** task to execute the passed code.

### Define the intent

```json
{
  "dt.code": "export default async function () {\n  return \"Hello, world!\";\n}"
}
```

### Intent payload details

- `dt.code`: the code snippet (required)
