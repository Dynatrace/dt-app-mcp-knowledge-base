## Set page titles for apps

The app shell composes the final browser tab title in the following format:

```text
<page title> - <app name> - <tenant ID> - Dynatrace
```

To set the page title from any page in your app, add the `usePageTitle` hook to your project:

```tsx title="ui/hooks/usePageTitle.ts" testable
import { useEffect } from 'react';

export function usePageTitle(title: string | undefined): void {
  useEffect(() => {
    if (title !== undefined) {
      document.title = title;
    }
  }, [title]);
}
```

Then call the hook in your page components:

```tsx title="ui/app/pages/Overview.tsx" untestable
import React from 'react';
import { usePageTitle } from '../hooks/usePageTitle';

export const Overview = () => {
  usePageTitle('Overview');

  return <div>...</div>;
};
```

The `usePageTitle` hook doesn't reset `document.title` on unmount. If a page doesn't call `usePageTitle`, the previous title remains in the browser tab.
