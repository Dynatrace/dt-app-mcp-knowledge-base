## Enable actions menu

Use `CodeSnippet.ActionsMenu` as a child to replace the default "Copy" button with `CodeSnippet.Copy`, `CodeSnippet.Download`, or both. `CodeSnippet.ActionsMenu` is an empty wrapper. Use a single child for a single button matching that action. Configure both children to combine them into a menu instead.

> **Caution**
>
> `allowCopy`, `showCopyAction` and the top-level `onCopy` prop are deprecated and will be removed in a future major version, when the copy action becomes opt-in only through `CodeSnippet.ActionsMenu` with `CodeSnippet.Copy`. Adopting the new API now avoids a later migration. Until then, use an empty `CodeSnippet.ActionsMenu` to hide the "Copy" button. Once copy becomes opt-in only, a plain `CodeSnippet` shows no button by default, and you can remove the empty `CodeSnippet.ActionsMenu`.

### React to copying

Add `onCopy` to `CodeSnippet.Copy` to react to the user copying the code snippet. The callback fires whenever the copy action is triggered.

**OnCopy**

```tsx
import { useState } from 'react';

import { CodeSnippet } from '@dynatrace/strato-components/content';
import { Flex } from '@dynatrace/strato-components/layouts';

const OnCopy = () => {
  const [copyCounter, setCopyCounter] = useState(0);

  return (
    <Flex flexDirection="column" gap={12}>
      <CodeSnippet language="typescript">
        {`const example = function(name: string) {
  console.log("Hello " + name);
}`}
        <CodeSnippet.ActionsMenu>
          {/* highlight-next-line */}
          <CodeSnippet.Copy onCopy={() => setCopyCounter(copyCounter + 1)} />
        </CodeSnippet.ActionsMenu>
      </CodeSnippet>
      Copied {copyCounter} times.
    </Flex>
  );
};
```

### Add a download action

Add `CodeSnippet.Download` to let users download the snippet as a file.

The file name defaults to `code-snippet.<extension>`. Set `fileName` to override it. If `fileName` carries no extension of its own, the extension is derived from the `language` prop, falling back to `.txt` when `language` is unset or has no direct file extension. Characters other than letters, digits, `-`, and `_` are stripped from both the name and the extension.

Set `onDownload` to react to the download. The callback fires once the file is handed off to the browser, not once the download finishes.

**ActionsMenuDownload**

```tsx
import { useState } from 'react';

import { CodeSnippet } from '@dynatrace/strato-components/content';
import { Flex } from '@dynatrace/strato-components/layouts';

const ActionsMenuDownload = () => {
  const [downloadCounter, setDownloadCounter] = useState(0);

  return (
    <Flex flexDirection="column" gap={12}>
      <CodeSnippet language="python">
        print("Hello, world!")
        <CodeSnippet.ActionsMenu>
          {/* highlight-start */}
          <CodeSnippet.Download
            fileName="python-snippet"
            onDownload={() => setDownloadCounter(downloadCounter + 1)}
          />
          {/* highlight-end */}
        </CodeSnippet.ActionsMenu>
      </CodeSnippet>
      Downloaded {downloadCounter} times.
    </Flex>
  );
};
```

### Combine "Copy" and "Download"

Render `CodeSnippet.Copy` and `CodeSnippet.Download` together to combine both actions into a single menu.

**ActionsMenuCopyAndDownload**

```tsx
import { CodeSnippet } from '@dynatrace/strato-components/content';

const ActionsMenuCopyAndDownload = () => {
  return (
    <CodeSnippet language="python">
      print("Hello, world!")
      {/* highlight-start */}
      <CodeSnippet.ActionsMenu>
        <CodeSnippet.Copy />
        <CodeSnippet.Download />
      </CodeSnippet.ActionsMenu>
      {/* highlight-end */}
    </CodeSnippet>
  );
};
```
