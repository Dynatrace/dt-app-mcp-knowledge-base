## Enable actions menu

To display a built-in actions menu in the top-right corner of the editor, render `DQLEditor.ActionsMenu` as a child. The menu provides the following actions:

- **Copy query**: Copies the current editor content to the clipboard.
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

### Add custom actions

Pass children to `DQLEditor.ActionsMenu` to render additional content between the built-in actions (**Copy query** / **Format query**) and **Open documentation**. Only [Menu.\*](https://developer.dynatrace.com/design/components/navigation/Menu.md) components are accepted. Unsupported children are ignored.

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
