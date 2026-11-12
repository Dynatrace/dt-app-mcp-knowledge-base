### Call app function

Following the API call, the app function is now available via `/api/third-party-api` in our app.

Here is how you can fetch this API:

```tsx title="ui/app/App.tsx"
import React from 'react';
import { useAppFunction } from '@dynatrace-sdk/react-hooks';

export const App = () => {
  const response = useAppFunction<string>({
    name: 'third-party-api',
    responseType: 'json',
  });

  return (
    <>
      {response.isLoading && <p>Loading...</p>}
      {response.data && <p>{JSON.stringify(response.data)}</p>}
    </>
  );
};
```

> **Note**
>
> The response from `fetch` has two methods: `json()` and `text()`. These methods return a promise which resolves with the result of parsing the body text as `json` or `text` respectively, as shown in the earlier example.
