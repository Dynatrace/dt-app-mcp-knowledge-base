## Set page titles for widgets

Widgets use the same `usePageTitle` hook as apps. Call it in the widget's root component to set a descriptive title for the browser tab when the widget is displayed.

```tsx title="ui/widgets/MyWidget.tsx"
import React from 'react';
import { usePageTitle } from '../hooks/usePageTitle';

export const MyWidget = () => {
  usePageTitle('My widget');

  return <div>...</div>;
};
```
