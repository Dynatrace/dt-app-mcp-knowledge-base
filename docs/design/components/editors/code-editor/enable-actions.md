## Enable actions

To display actions in the top-right corner of the editor, render `CodeEditor.ActionsMenu` as a child. An empty `CodeEditor.ActionsMenu` renders the built-in "Copy" button, which copies the current editor content to the clipboard. You can't remove or replace it. When you add further actions, such as `CodeEditor.Download` or custom `Menu.*` items, the button is replaced with a menu that contains all of them.

**ActionsMenu**

```tsx
import { CodeEditor } from '@dynatrace/strato-components/editors';

const ActionsMenu = () => {
  return (
    <CodeEditor defaultValue="const text = 'hello world!';" language="ts">
      {/* highlight-next-line */}
      <CodeEditor.ActionsMenu />
    </CodeEditor>
  );
};
```

### Add download action

Add `CodeEditor.Download` to let users download the content of the editor as a file. Together with the built-in copy action, it turns the button into a menu that contains both actions.

The file name defaults to `code.<extension>`. Set `fileName` to override it. If `fileName` carries no extension of its own, the extension is derived from the `language` prop, falling back to `.txt` when `language` is unset or has no direct file extension. Characters other than letters, digits, `-`, and `_` are stripped from both the name and the extension.

Set `onDownload` to react to the download. The callback fires once the file is handed off to the browser, not once the download finishes.

> **Note**
>
> Firefox and Safari may open the content in a new browser tab instead of downloading it, and ignore `fileName`. Use the browser's save option to store the file.

**ActionsMenuDownload**

```tsx
import { useState } from 'react';

import { CodeEditor } from '@dynatrace/strato-components/editors';
import { Flex } from '@dynatrace/strato-components/layouts';

const ActionsMenuDownload = () => {
  const [downloadCounter, setDownloadCounter] = useState(0);

  return (
    <Flex flexDirection="column" gap={12}>
      <CodeEditor defaultValue="const text = 'hello world!';" language="ts">
        <CodeEditor.ActionsMenu>
          {/* highlight-start */}
          <CodeEditor.Download
            fileName="editor-content"
            onDownload={() => setDownloadCounter(downloadCounter + 1)}
          />
          {/* highlight-end */}
        </CodeEditor.ActionsMenu>
      </CodeEditor>
      Downloaded {downloadCounter} times.
    </Flex>
  );
};
```

### Add custom actions

To display other actions besides the built-in copy action, pass children to `CodeEditor.ActionsMenu`. They render after "Copy" and, if present, "Download", and turn the button into a menu. Only [Menu.\*](https://public-developer.central.internal.dynatrace.com/design/components/navigation/Menu.md) components are accepted. Unsupported children are ignored.

**ActionsMenuCustomActions**

```tsx
import { CodeEditor } from '@dynatrace/strato-components/editors';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Menu } from '@dynatrace/strato-components/navigation';
import { AiIcon, PlayIcon } from '@dynatrace/strato-icons';

const ActionsMenuCustomActions = () => {
  return (
    <Flex height={200}>
      <CodeEditor
        defaultValue="const text = 'hello world!';"
        language="ts"
        fullHeight
      >
        <CodeEditor.ActionsMenu>
          {/* highlight-start */}
          <Menu.Item
            onSelect={() => {
              /* Trigger logic goes here */
            }}
          >
            <Menu.Prefix>
              <AiIcon />
            </Menu.Prefix>
            Explain code
          </Menu.Item>
          <Menu.Item
            onSelect={() => {
              /* Trigger logic goes here */
            }}
          >
            <Menu.Prefix>
              <PlayIcon />
            </Menu.Prefix>
            Run code
          </Menu.Item>
          {/* highlight-end */}
        </CodeEditor.ActionsMenu>
      </CodeEditor>
    </Flex>
  );
};
```
