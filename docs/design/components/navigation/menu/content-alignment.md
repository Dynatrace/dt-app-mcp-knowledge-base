## Content alignment

The `alignment` prop lets you position the menu content relative to the trigger.

**Alignment**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { Menu } from '@dynatrace/strato-components/navigation';
import { Text } from '@dynatrace/strato-components/typography';
import { CopyIcon, DeleteIcon, DownloadIcon } from '@dynatrace/strato-icons';

const Alignment = () => {
  return (
    <div
      style={{
        width: '100%',
        paddingTop: '240px',
        height: '240px',
        textAlign: 'center',
      }}
    >
      <Menu>
        <Menu.Trigger>
          <Button variant="accent" color="primary">
            Edit Document
          </Button>
        </Menu.Trigger>
        <Menu.Content
          // highlight-next-line
          alignment="end"
        >
          <Menu.Item
            onSelect={() => {
              /* Trigger logic goes here */
            }}
          >
            <Menu.Prefix>
              <CopyIcon />
            </Menu.Prefix>
            Copy
            <Menu.ItemTooltip>
              <Text as="p">Copy document</Text>
            </Menu.ItemTooltip>
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
            <Menu.ItemTooltip>
              <Text as="p">Download document</Text>
            </Menu.ItemTooltip>
          </Menu.Item>
          <Menu.Item
            onSelect={() => {
              /* Trigger logic goes here */
            }}
          >
            <Menu.Prefix>
              <DeleteIcon />
            </Menu.Prefix>
            Delete
            <Menu.ItemTooltip>
              <Text as="p">Delete document</Text>
            </Menu.ItemTooltip>
          </Menu.Item>
        </Menu.Content>
      </Menu>
    </div>
  );
};
```
