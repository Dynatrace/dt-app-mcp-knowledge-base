## Code

Let's assume you have a function like the following, calling the API of an external system:

```ts title="api/external-call.function.ts"
export default async function (): Promise<unknown> {
  const apiResponse = await fetch('https://dummyjson.com/users/1');
  if (!apiResponse.ok) {
    throw new Error();
  }
  return apiResponse.json();
}
```

> **Tip**
>
> If the response contains user-specific or sensitive information, use user app state to persist information.

You can call the function from your UI using the package `@dynatrace-sdk/app-utils`.
If you want to cache the response, store the function's response using the app state via the package `@dynatrace-sdk/client-state`.

To install both packages, run the following command:

```bash
npm install @dynatrace-sdk/app-utils @dynatrace-sdk/client-state
```

The following snippet combines the app state with the app function. We also use the `validUntilTime` property since, typically, the app state should cache the data only for a limited time.

```ts title="ui/call-cachable-function.ts"
import { functions } from '@dynatrace-sdk/app-utils';
import { stateClient } from '@dynatrace-sdk/client-state';

export const callCachableFunction = async (functionName: string, appStateKey: string, validUntilTime: string) =>
  stateClient
    .getAppState({
      key: appStateKey,
    })
    .then((appState) => {
      // Saved app state found. Return the saved value as a JSON object
      return JSON.parse(appState.value);
    })
    .catch(async (e) => {
      // No app state found. Trigger the function, then store the response in the app state
      const response = await functions.call(functionName);
      const json = await response.json();

      await stateClient.setAppState({
        key: appStateKey,
        body: {
          validUntilTime,
          value: JSON.stringify(json),
        },
      });

      return json;
    });
```

This operation requires the following scopes:

- `state:app-states:read`
- `state:app-states:write`

[guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).

You can then use this helper with e.g. `callCachableFunction("external-call", "users", "now+30d")`.
