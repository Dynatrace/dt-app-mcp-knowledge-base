## Folding

The `DQLEditor` supports folding of multi-line block comments (`/*…*/`) and subqueries (`[…]`). Folding can be triggered via the gutter icons or keyboard shortcuts:

- Fold the current block: `Ctrl+Shift+[` (Windows/Linux) / `Cmd+Option+[` (macOS).
- Unfold the current block: `Ctrl+Shift+]` (Windows/Linux) / `Cmd+Option+]` (macOS).
- Fold all: `Ctrl+Alt+[` (Windows/Linux) / `Control+Option+[` (macOS).
- Unfold all: `Ctrl+Alt+]` (Windows/Linux) / `Control+Option+]` (macOS).

### Controlled

To control which blocks are folded from outside the `DQLEditor`, pass an array of character start positions to the `folding` prop.

**Folding**

```tsx
import { useState } from 'react';

import { DQLEditor } from '@dynatrace/strato-components/editors';

const Folding = () => {
  const query = `/*
 * Fetches error logs and groups by host
 */
fetch logs
| filter loglevel == "ERROR"
| filter dt.entity.host in [
    fetch dt.entity.host
    | fields id
]
| summarize count(), by:{dt.entity.host}`;
  // highlight-next-line
  const [foldingPositions, setFoldingPositions] = useState<number[]>([0]);

  return (
    <DQLEditor
      defaultValue={query}
      // highlight-start
      folding={foldingPositions}
      onFoldingChange={setFoldingPositions}
      // highlight-end
    />
  );
};
```

The `onFoldingChange` callback is called whenever the folding state changes — for example, when the user folds or unfolds a block via the gutter or keyboard shortcut. It receives the updated array of folded character positions and is typically paired with the `folding` prop to keep the external state in sync.

### Uncontrolled

For uncontrolled scenarios where the parent doesn't need to track fold positions, use `defaultFolding` to set the initial folds without managing state externally.

**DefaultFolding**

```tsx
import { DQLEditor } from '@dynatrace/strato-components/editors';

const DefaultFolding = () => {
  const query = `/*
 * Fetches error logs and groups by host
 */
fetch logs
| filter loglevel == "ERROR"
| filter dt.entity.host in [
    fetch dt.entity.host
    | fields id
]
| summarize count(), by:{dt.entity.host}`;

  return (
    <DQLEditor
      defaultValue={query}
      // highlight-next-line
      defaultFolding={[88]}
    />
  );
};
```
