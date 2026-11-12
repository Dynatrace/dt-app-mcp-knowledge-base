## Programmatic width control

Pass a `width` prop to `PageLayout.Details` to take ownership of the panel width. The panel follows the controlled value on every render; omitting `width` keeps the panel self-managing via `defaultWidth`.

Use `onResize` to receive drag commits and keep the controlled value in sync.

### Mode-aware clamp

Controlled widths are clamped to the same bounds that apply to dragging:

- **`overlay`**: the panel can grow to fill the container, so passing `'100%'` expands the panel to the full available width.
- **`split`**: the panel is capped by the `Content` panel's `minWidth` (default `'50%'`), and by its own `maxWidth` when you set one, so the content area stays usable.

This keeps a programmatic width consistent with what a user can reach by dragging.

### Maximize / restore button

Track a `restoreWidth` value to remember the pre-maximize state. A defined `restoreWidth` is what counts as "maximized":

```tsx
import { useState } from 'react';
import { Button } from '@dynatrace/strato-components/buttons';
import {
  PageLayout,
  type PanelWidth,
} from '@dynatrace/strato-components/layouts';

const DEFAULT_WIDTH: PanelWidth = '30%';

const MaximizeExample = () => {
  const [width, setWidth] = useState<PanelWidth>(DEFAULT_WIDTH);
  const [restoreWidth, setRestoreWidth] = useState<PanelWidth>();

  const isMaximized = restoreWidth !== undefined;
  const maximize = () => {
    setRestoreWidth(width);
    setWidth('100%');
  };
  const restore = () => {
    setWidth(restoreWidth ?? DEFAULT_WIDTH);
    setRestoreWidth(undefined);
  };

  return (
    <PageLayout.Details
      defaultLayout="overlay"
      width={width}
      onResize={(px) => {
        setRestoreWidth(undefined);
        setWidth(px);
      }}
    >
      <PageLayout.Details.ControlBar>
        <Button onClick={() => (isMaximized ? restore() : maximize())}>
          {isMaximized ? 'Restore' : 'Maximize'}
        </Button>
      </PageLayout.Details.ControlBar>
    </PageLayout.Details>
  );
};
```
