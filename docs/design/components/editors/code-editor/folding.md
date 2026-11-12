## Folding

The `CodeEditor` supports folding of code blocks such as functions, objects, and comments. Blocks are detected automatically based on the syntax of the selected language. Folding can be triggered via the gutter icons or keyboard shortcuts:

- Fold the current code block: `Ctrl+Shift+[` (Windows/Linux) / `Cmd+Option+[` (macOS).
- Unfold the current code block: `Ctrl+Shift+]` (Windows/Linux) / `Cmd+Option+]` (macOS).
- Fold all: `Ctrl+Alt+[` (Windows/Linux) / `Control+Option+[` (macOS).
- Unfold all: `Ctrl+Alt+]` (Windows/Linux) / `Control+Option+]` (macOS).

### Controlled

To control which blocks are folded from outside the `CodeEditor`, pass an array of character start positions to the `folding` prop.

**Folding**

```tsx
import { useState } from 'react';

import { CodeEditor } from '@dynatrace/strato-components/editors';

const Folding = () => {
  const code = `/**
 * Example
 */
function helloWorld() {
  const message = 'hello world';
  return message + '!';
}

const hello = helloWorld();
console.log(hello);`;

  // highlight-next-line
  const [foldingPositions, setFoldingPositions] = useState<number[]>([0]);

  return (
    <CodeEditor
      language="js"
      defaultValue={code}
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
import { CodeEditor } from '@dynatrace/strato-components/editors';

const DefaultFolding = () => {
  const code = `/**
 * Example
 */
function helloWorld() {
  const message = 'hello world';
  return message + '!';
}

const hello = helloWorld();
console.log(hello);`;

  return (
    <CodeEditor
      language="js"
      defaultValue={code}
      // highlight-next-line
      defaultFolding={[22]}
    />
  );
};
```
