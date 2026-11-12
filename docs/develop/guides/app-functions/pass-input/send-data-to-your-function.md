## Send data to your function

Sending data to your app function is straightforward. To send the data, you can use the `useAppFunction` hook provided by the `@dynatrace-sdk/react-hooks` package.

In the following example, we're sharing types between app function and the function call for end-to-end type safety and then calling the app function:

```ts title="shared/types.ts" testable
export type Input = {
  id: string;
  name: string;
  age: number;
};
```

```tsx title="ui/app/App.tsx" untestable
import React from 'react';
import { Input } from '../shared/types';
import { useAppFunction } from '@dynatrace-sdk/react-hooks';

export const App = () => {
  const input: Input = {
    id: 'john-doe',
    name: 'John Doe',
    age: 38,
  };

  // highlight-next-line
  const response = useAppFunction({ name: 'hello-world', data: input });

  return <>{JSON.stringify(response.data)}</>;
};
```

> **Tip**
>
> Query string parameters and HTTP headers aren't passed to your function. Use the body of the HTTP request for any input of your function.
