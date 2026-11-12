## Validate expression values

For actions with an input that's some sort of syntax for a third party system (for example, a Kubernetes manifest, an SQL query, or similar), you want to protect your action from injection attacks. You can, therefore, control the values against which to evaluate an [expression](https://dt-url.net/workflows-expression-reference). To prevent any unwanted input, specify an `expressionValidation` in your action manifest to validate the expression value against a pattern.

For example, the app evaluates any expression in the `name` field against uppercase letters.

```json
// Excerpt of app.config.json
{
  ...
  "actions": [
    {
      "name": "greeter",
      "title": "Greeter",
      "expressionValidation": {"name": {"pattern": "[A-Z]+"}}
   }
  ]
}
```

A violation such a validation at runtime shall fail the task.
