## Enable actions menu

To display a built-in actions menu in the top-right corner of the editor, render `DQLEditor.ActionsMenu` as a child. The menu provides the following actions:

- **Copy query**: Copies the current editor content to the clipboard. This action is built in and can't be removed or replaced.
- **Download**: Downloads the current editor content as a file. This action is optional and only available when `DQLEditor.Download` is used.
- **Format query**: Formats the DQL query for improved readability. Requires the optional peer dependency [`@dynatrace-sdk/dqlint`](https://www.npmjs.com/package/@dynatrace-sdk/dqlint) to be installed. If the package is absent, this action is hidden. The format can also be triggered with the keyboard shortcut `Ctrl+Shift+F` (Windows / Linux) or `Cmd+Shift+F` (macOS).
- **Open documentation**: Opens the DQL documentation in a new tab.

**ActionsMenu**

```tsx
import { DQLEditor } from '@dynatrace/strato-components/editors';

const ActionsMenu = () => {
  return (
    <DQLEditor defaultValue="fetch logs | summarize by: logLevel, count()">
      {/* highlight-next-line */}
      <DQLEditor.ActionsMenu />
    </DQLEditor>
  );
};
```

### Add download action

Add `DQLEditor.Download` to let users download the content of the editor as a file.

The file name defaults to `query.dql`. Set `fileName` to override it. If `fileName` carries no extension of its own, the extension remains `.dql`. Characters other than letters, digits, `-`, and `_` are stripped from both the name and the extension.

Set `onDownload` to react to the download. The callback fires once the file is handed off to the browser, not once the download finishes.

> **Note**
>
> Firefox and Safari may open the content in a new browser tab instead of downloading it, and ignore `fileName`. Use the browser's save option to store the file.

**ActionsMenuDownload**

```tsx
import { useState } from 'react';

import { DQLEditor } from '@dynatrace/strato-components/editors';
import { Flex } from '@dynatrace/strato-components/layouts';

const ActionsMenuDownload = () => {
  const [downloadCounter, setDownloadCounter] = useState(0);

  return (
    <Flex flexDirection="column" gap={12}>
      <DQLEditor defaultValue="fetch logs | summarize by: logLevel, count()">
        <DQLEditor.ActionsMenu>
          {/* highlight-start */}
          <DQLEditor.Download
            fileName="logs-query"
            onDownload={() => setDownloadCounter(downloadCounter + 1)}
          />
          {/* highlight-end */}
        </DQLEditor.ActionsMenu>
      </DQLEditor>
      Downloaded {downloadCounter} times.
    </Flex>
  );
};
```

### Add custom actions

To display other actions besides the built-in ones, pass children to `DQLEditor.ActionsMenu`. They render between the built-in actions ("Copy query", "Download" if present, and "Format query") and "Open documentation". Only [Menu.\*](https://public-developer.central.internal.dynatrace.com/design/components/navigation/Menu.md) components are accepted. Unsupported children are ignored.

**ActionsMenuCustomActions**

```tsx
import { DQLEditor } from '@dynatrace/strato-components/editors';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Menu } from '@dynatrace/strato-components/navigation';
import { AiIcon, PlayIcon } from '@dynatrace/strato-icons';

const ActionsMenuCustomActions = () => {
  return (
    <Flex height={200}>
      <DQLEditor defaultValue="fetch logs | limit 10" fullHeight>
        <DQLEditor.ActionsMenu>
          {/* highlight-start */}
          <Menu.Item
            onSelect={() => {
              /* Trigger logic goes here */
            }}
          >
            <Menu.Prefix>
              <AiIcon />
            </Menu.Prefix>
            Explain query
          </Menu.Item>
          <Menu.Item
            onSelect={() => {
              /* Trigger logic goes here */
            }}
          >
            <Menu.Prefix>
              <PlayIcon />
            </Menu.Prefix>
            Execute query
          </Menu.Item>
          {/* highlight-end */}
        </DQLEditor.ActionsMenu>
      </DQLEditor>
    </Flex>
  );
};
```
