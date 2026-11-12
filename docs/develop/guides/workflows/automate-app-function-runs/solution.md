## Solution

In the Workflows app, create a workflow with the trigger of your choice and a task of type `Run Javascript` to call the function:

```ts title="api/workflow-example.function.ts"
export default async function () {
  const response = await fetch('/apps/my.demo.app/api/query-external-data');
  if (!response.ok) {
    const responseText = await response.text();
    throw new Error(`Request failed with status ${response.status}. Response text: ${responseText}`);
  }
}
```

The URL follows the same pattern as for calls from the app UI. In this example, `my.demo.app` is the ID of the app and `query-external-data` is the name of the function.
