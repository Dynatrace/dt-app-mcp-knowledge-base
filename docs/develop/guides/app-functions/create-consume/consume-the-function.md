## Consume the function

There are multiple places from which you can consume the app function. You can consume it in your Dynatrace App, from a Notebook, Workflow, or from outside the platform.

### In your app code

To consume the app function in your app, you can use the `useAppFunction` hook provided by the `@dynatrace-sdk/react-hooks` package. Install it with the following command:

```bash
npm install @dynatrace-sdk/react-hooks
```

Now you can use it in your component:

```tsx title="ui/app/App.tsx"
import React from 'react';
import { useAppFunction } from '@dynatrace-sdk/react-hooks';

export const App = () => {
  const response = useAppFunction<string>({
    name: 'hello-world',
    responseType: 'text',
  });

  return (
    <>
      {response.isLoading && <p>Loading...</p>}
      {response.data && <p>{response.data}</p>}
    </>
  );
};
```

### From Notebooks or Workflows

The `@dynatrace-sdk/adhoc-utils` package allows you to call app functions exposed by an app from Notebooks or Workflows.

The `call` function exposed by the `functions` namespace expects both the `appId` and the `functionName` as well as an optional `data` parameter to pass in the function payload:

```ts skip-testing
import { functions } from '@dynatrace-sdk/adhoc-utils';

const response = await functions.call('my.app.id', 'hello-world').then((res) => res.text());
```

### From outside the platform

App functions are exposed via a public API endpoint and can be called from anywhere outside the platform.
When calling your function from outside the platform, you need to consider the following points:

- You need to call the absolute API URL address
  - `$ENVIRONMENT_URL/platform/app-engine/app-functions/v1/apps/<Your-App-ID>/api/<Your-Function-Name>`
- You need to take care of authentication by yourself. App function requests are authenticated via OAuth. Read [Access platform APIs from outside](https://developer.dynatrace.com/develop/guides/access-platform-apis-from-outside.md) for more details.

After obtaining a Bearer token from the single sign-on (SSO) token endpoint, a curl request to your app function could look like this:

```bash
curl --request GET '$ENVIRONMENT_URL/platform/app-engine/app-functions/v1/apps/my.app.id/api/hello-world' \
--header 'Authorization: Bearer {your-bearer-token}'
```
