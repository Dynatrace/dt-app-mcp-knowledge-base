## Function interface

The Dynatrace JavaScript runtime expects a single default function exported from your function files. This function can contain a single `payload` parameter, which is the request body of the incoming request.

Each input to your function needs to pass through the function body. You can consume it via the `payload` parameter in your function.

Here's an example:

```ts title="api/hello-world.function.ts"
export default (payload: unknown) => {
  return 'Hello World';
};
```
