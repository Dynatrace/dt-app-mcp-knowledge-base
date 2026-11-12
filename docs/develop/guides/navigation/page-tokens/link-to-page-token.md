## Link to page token

There are two primary options for creating a link to a page token. You can either use the `AppLink` component or one of two functions from the `@dynatrace-sdk/navigation` package.

### AppLink component

The `@dynatrace/strato-components` package provides the `AppLink` component to create page token links.
You only have to provide the `appId` and the corresponding `pageToken` as properties to have a link rendered in your UI:

```tsx title="ui/app/Component.tsx"
import React from 'react';
import { AppLink } from '@dynatrace/strato-components/navigation';

export const Component = () => {
  return (
    <AppLink appId="app.id" pageToken="documentation">
      Documentation
    </AppLink>
  );
};
```

### @dynatrace-sdk/navigation functions

Another option is to use the `@dynatrace-sdk/navigation` package directly. It provides two convenient functions that make use of page token links:

- `openApp()`
- `getAppLink()`

Both of these functions accept an app id (required) and a page token (optional) as parameters.

The `openApp()` function opens a specific page token. You can, for example, use this as an onClickHandler function:

```tsx skip-testing
<Button onClick={() => openApp('app.id', 'documentation')}>Open Documentation</Button>
```

The `getAppLink()` function returns a static link, which you can copy, share, bookmark or open in a new tab:

```ts skip-testing
getAppLink('app.id', 'documentation');
```

For the provided example, the function would return the following link:

```text
$ENVIRONMENT_URL/ui/openApp/app.id?pageToken=documentation
```
