## Use `AppHeader.ActionItems` for app-wide actions

If your app needs to have one or a maximum of two actions always visible on any page, consider using `AppHeader.ActionItems`.

**ActionItems**

```tsx
import { type SyntheticEvent } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { AppHeader, HelpMenu } from '@dynatrace/strato-components/layouts';
import { Tooltip } from '@dynatrace/strato-components/overlays';
import {
  PlusIcon,
  SettingIcon,
  ShareIcon,
  UploadIcon,
} from '@dynatrace/strato-icons';

const ActionItems = () => {
  return (
    <AppHeader>
      {/* highlight-start */}
      <AppHeader.ActionItems>
        <AppHeader.ActionButton
          prefixIcon={<PlusIcon />}
          onClick={(event: SyntheticEvent) => {
            event.preventDefault(); // prevent the overlay from closing when selecting an item
            /* you can insert custom content here */
          }}
        >
          Add data
        </AppHeader.ActionButton>
        {/* You can group ActionItems by wrapping them with `ActionItemGroup` */}
        <AppHeader.ActionItemGroup>
          <AppHeader.ActionButton
            prefixIcon={<UploadIcon />}
            onClick={() => undefined}
          >
            Upload document
          </AppHeader.ActionButton>
        </AppHeader.ActionItemGroup>
        <AppHeader.ActionButton
          prefixIcon={<ShareIcon />}
          showLabel={false}
          onClick={() => undefined}
          aria-label="Share this application"
        >
          Share
        </AppHeader.ActionButton>
      </AppHeader.ActionItems>
      {/* highlight-end */}
      <AppHeader.Menus>
        <Tooltip text="Settings">
          <Button onClick={() => undefined}>
            <Button.Prefix>
              <SettingIcon />
            </Button.Prefix>
          </Button>
        </Tooltip>
        <HelpMenu
          entries={{
            whatsNew: 'default',
            keyboardShortcuts: 'default',
            playground: 'default',
            about: 'default',
          }}
        />
      </AppHeader.Menus>
    </AppHeader>
  );
};
```
