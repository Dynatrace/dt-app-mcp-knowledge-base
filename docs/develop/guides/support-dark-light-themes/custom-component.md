## Custom component

You can use [Strato design tokens](https://developer.dynatrace.com/contents/docs/design/index.md/) to support theming when you create custom components. Instead of writing hard-coded CSS values like colors, or radius, you can import design tokens from `@dynatrace/strato-design-tokens` and use them instead of hard-coded values. It will ensure that when a user switches the theme, colors will adapt accordingly. Look at a custom card component and see the styling of the `div` element.

```tsx title="ui/app/Card.tsx"
import React from 'react';
//highlight-next-line
import Colors from '@dynatrace/strato-design-tokens/colors';

export const Card = ({ href, name }: { href: string; name: string }) => {
  return (
    <div
      style={{
        //highlight-next-line
        background: Colors.Background.Surface.Default,
      }}
    >
      <a href={href}>{name}</a>
    </div>
  );
};
```
