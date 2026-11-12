## Actions menu

`DQLEditor` now ships with a built-in `<DQLEditor.ActionsMenu />` subcomponent. When added, it renders a menu with three built-in actions — **Copy query**, **Format query**, and **Open documentation**. Format query is also available as a keyboard shortcut (Cmd+Shift+F on Mac, Ctrl+Shift+F on Windows) whenever the editor is focused.

> **Note:** The **Format query** action requires [`@dynatrace-sdk/dqlint`](https://www.npmjs.com/package/@dynatrace-sdk/dqlint) as a peer dependency. The option is only present when this package is installed.

![DQLEditor actions menu showing Copy query, Format query, and Open documentation items — light mode](https://developer.dynatrace.com/assets/images/2026-10-01-editor-improvements-actions-menu-light-21dd1b44b52541638728dfbb43ab6a59.webp)

### Add custom actions

You can add your own menu items between the two built-in groups. Pass custom action items as children to `<DQLEditor.ActionsMenu />`:

```tsx
import { DQLEditor } from '@dynatrace/strato-components/editors';
import { Menu } from '@dynatrace/strato-components/navigation';
import { AiIcon, PlayIcon } from '@dynatrace/strato-icons';

<DQLEditor defaultValue="fetch logs | limit 10">
  <DQLEditor.ActionsMenu>
    <Menu.Item
      onSelect={() => {
        /* your logic */
      }}
    >
      <Menu.Prefix>
        <AiIcon />
      </Menu.Prefix>
      Explain query
    </Menu.Item>
    <Menu.Item
      onSelect={() => {
        /* your logic */
      }}
    >
      <Menu.Prefix>
        <PlayIcon />
      </Menu.Prefix>
      Execute query
    </Menu.Item>
  </DQLEditor.ActionsMenu>
</DQLEditor>;
```
