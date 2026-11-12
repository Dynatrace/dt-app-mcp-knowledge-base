## Tooltips

This example shows how to add tooltips to menu items.

**WithTooltip**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { Menu } from '@dynatrace/strato-components/navigation';
import { Text } from '@dynatrace/strato-components/typography';
import { CopyIcon, DeleteIcon, DownloadIcon } from '@dynatrace/strato-icons';

const WithTooltip = () => {
  return (
    <Menu>
      <Menu.Trigger>
        <Button variant="accent" color="primary">
          Edit Document
        </Button>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Item
          onSelect={() => {
            /* Trigger logic goes here */
          }}
        >
          <Menu.Prefix>
            <CopyIcon />
          </Menu.Prefix>
          Copy
          {/* highlight-start */}
          <Menu.ItemTooltip>
            <Text as="p">Copy document</Text>
          </Menu.ItemTooltip>
          {/* highlight-end */}
        </Menu.Item>
        <Menu.Item
          onSelect={() => {
            /* Trigger logic goes here */
          }}
        >
          <Menu.Prefix>
            <DownloadIcon />
          </Menu.Prefix>
          Download
          {/* highlight-start */}
          <Menu.ItemTooltip>
            <Text as="p">Download document</Text>
          </Menu.ItemTooltip>
          {/* highlight-end */}
        </Menu.Item>
        <Menu.Item
          disabled
          onSelect={() => {
            /* Trigger logic goes here */
          }}
        >
          <Menu.Prefix>
            <DeleteIcon />
          </Menu.Prefix>
          Delete
          {/* highlight-start */}
          <Menu.ItemTooltip>
            <Text as="p">Delete document</Text>
          </Menu.ItemTooltip>
          {/* highlight-end */}
        </Menu.Item>
      </Menu.Content>
    </Menu>
  );
};
```
