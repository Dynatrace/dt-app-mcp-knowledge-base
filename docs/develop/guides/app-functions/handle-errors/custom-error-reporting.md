## Custom error reporting

If you want to report a different kind of error information back to your consumer based on the type of error you are facing, you can also include all kinds of error information in your return object.

The following example demonstrates how you could return a different response object with error information from the external API.

```ts title="api/fetch-user-custom-error-reporting.function.ts"
interface Result {
  data: unknown;
  error?: string;
}

export default async function (): Promise<Result> {
  const apiResponse = await fetch('https://dummyjson.com/users/1');
  if (!apiResponse.ok) {
    const responseText = await apiResponse.text();
    return {
      data: null,
      error: 'External API failed to handle the request: ' + responseText,
    };
  }

  const data = (await apiResponse.json()) as unknown;
  return {
    data,
  };
}
```
