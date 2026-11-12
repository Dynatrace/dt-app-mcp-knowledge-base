## Custom resource

You use the `useCurrentTheme` hook from the `@dynatrace/strato-components` library to a custom behavior based on the user's theme. This hook returns a `string` value that is `light` or `dark` depending on the selected theme. The following example shows how to show different images based on the user's theme:

```tsx title="ui/app/App.tsx"
import React from 'react';
//highlight-next-line
import { useCurrentTheme } from '@dynatrace/strato-components/core';

export const App = () => {
  //highlight-next-line
  const theme = useCurrentTheme();
  return (
    <>
      {
        //highlight-next-line
        theme === 'light' ? (
          <img src={'./assets/background.png'}></img>
        ) : (
          <img src={'./assets/background_dark.png'}></img>
        )
      }
    </>
  );
};
```
