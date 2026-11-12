## Error handling

> **Note**
>
> Before implementing error handling, consider if it's necessary. To learn more, visit [best practices](#best-practices).

You should use the `try...catch` block to properly handle errors that may occur using clients. Within the try block, wrap the awaited function call, which might throw an error to catch any exceptions.

```tsx
import { activeGatesClient } from '@dynatrace-sdk/client-classic-environment-v2';

export default async function () {
  // highlight-start
  try {
    const activeGates = await activeGatesClient.getAllActiveGates({
      networkZone: 'lab',
    });
  } catch (error: unknown) {
    // Perform additional error-handling tasks
    // Or: Rethrow the error to propagate it further up the call stack
    // throw error;
  }
  // highlight-end
  // …
}
```

### Type guards

For every error a client can throw, clients export the type guard functions that help narrow down the type of error within a specific code block, allowing for more accurate and reliable type inference.

To check which errors a client function can throw, consult the client's reference docs.

Additionally, there is a set of errors and their type guards that are common for every client that's also exported:

- `ClientRequestError` - This is a base class for all HTTP errors and is also thrown when an unexpected response code is received.
- `ApiGatewayError` - This error can occur for various reasons, such as incorrect configurations, authentication issues, or problems with the backend integration.
- `InvalidResponseError` - This may occur when the response received from the service doesn't match the client schema.
- `ApiClientError` - A base error class in the client SDKs. All other error classes derive from it.

```tsx
import { directSharesClient, isShareNotFound, isClientRequestError } from '@dynatrace-sdk/client-document';

try {
  const activeGates = await directSharesClient.getDirectShare({
    shareId: '...',
  });
} catch (error: unknown) {
  if (isShareNotFound(error)) {
    /* error: ShareNotFound */
    return;
  }
  if (isClientRequestError(error)) {
    /* error: ClientRequestError */
  }
  throw error;
}
```

### Best practices

- Decide whether to handle - apps should only handle errors that they can provide a meaningful error state for or errors that the user can potentially self-resolve. If the app can provide a clear error message or state that guides the user towards resolving the issue on their own, it can enhance the user experience. However, we advise rethrowing unhandled errors if the error is beyond the app's scope or the user's ability to resolve it. Striking a balance between empowering users to address certain errors independently and acknowledging self-resolution limitations can contribute to a smoother and more user-friendly app experience.
- All unhandled errors should be rethrown to be detected by a real user monitoring agent.
- Treat all errors as unknown. `unknown` enforces type checking and requires explicit type assertions or type narrowing before using the value. It's recommended to use unknown over any when dealing with values of unknown types to maintain type safety in your TypeScript code.
