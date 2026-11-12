## Return error code

By default, app functions return HTTP status code `200` if there's no error thrown.
If something unexpected happens in your function code, you can throw an error anytime, leading to an HTTP `540` status code returned by the app function.

This could look like this in case a call to a 3rd party API is failing in your function:

```ts title="api/fetch-user.function.ts"
export default async function (): Promise<unknown> {
  const apiResponse = await fetch('https://dummyjson.com/users/1');
  if (!apiResponse.ok) {
    throw new Error();
  }

  return apiResponse.json();
}
```

> **Caution**
>
> Throwing an error in your app function leads to a generic `Execution crashed` error message. You can't create a custom error with this approach. If you want to report custom errors read the next section.
