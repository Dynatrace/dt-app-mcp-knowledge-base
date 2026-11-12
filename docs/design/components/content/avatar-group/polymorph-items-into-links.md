## Polymorph items into links

The `AvatarGroup.Item` is polymorphic, so you can, for example, polymorph it to an anchor.

**Polymorph**

```tsx
import { type MouseEvent as ReactMouseEvent } from 'react';

import { AvatarGroup } from '@dynatrace/strato-components/content';

const Polymorph = () => {
  return (
    <AvatarGroup>
      <AvatarGroup.Item
        abbreviation="AE"
        tooltipText="Albert Einstein"
        href="#"
        // highlight-next-line
        as="a"
        onClick={(event: ReactMouseEvent) => {
          event.preventDefault();
        }}
      />
      <AvatarGroup.Item
        abbreviation="JK"
        tooltipText="Johannes Kepler"
        href="#"
        // highlight-next-line
        as="a"
        onClick={(event: ReactMouseEvent) => {
          event.preventDefault();
        }}
      />
      <AvatarGroup.Item
        abbreviation="FN"
        tooltipText="Friedrich Nietzsche"
        href="#"
        // highlight-next-line
        as="a"
        onClick={(event: ReactMouseEvent) => {
          event.preventDefault();
        }}
      />
    </AvatarGroup>
  );
};
```
