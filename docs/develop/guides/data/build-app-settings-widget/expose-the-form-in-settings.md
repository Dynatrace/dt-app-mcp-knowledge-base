## Expose the form in Settings

Register the form as a settings widget so you can find it in **Settings**. The widget reuses the same component from the previous steps.

Add a `settings` block to the `app.config.json` file. The key is the widget ID, and `schemaIds` lists the plain schema IDs it edits. The scopes are the same ones declared earlier in this guide. Merge the highlighted `settings` block into the existing config rather than pasting the whole sample over it, to keep the other fields and scopes.

```json testable-app-config-json
{
  "environmentUrl": "<Your-Environment-URL>",
  "app": {
    "id": "<Your-App-ID>",
    "name": "<Your-App-Name>",
    "version": "0.0.0",
    "description": "<Your-App-Description>",
    "scopes": [
      { "name": "app-settings:objects:read", "comment": "Read app settings" },
      { "name": "app-settings:objects:write", "comment": "Write app settings" }
    ],
    // highlight-start
    "settings": {
      "my-example": {
        "name": "Messaging service",
        "description": "Configure the connection to your messaging service",
        "schemaIds": ["my-example"]
      }
    }
    // highlight-end
  }
}
```

Add a widget entry point in the root-level `settings` folder, named after the widget ID. The widget entry point renders the form component.

```tsx title="settings/my-example.widget.tsx" untestable
import { AppRoot } from '@dynatrace/strato-components/core';
import React from 'react';
import * as ReactDom from 'react-dom/client';
import { SettingsForm } from '../ui/app/SettingsForm';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDom.createRoot(rootElement);

  root.render(
    <AppRoot>
      <SettingsForm />
    </AppRoot>,
  );
} else {
  console.error('The root element is not defined');
}
```

Run `npx dt-app dev` and confirm when the CLI offers to create the `tsconfig.widget.json` file.

Run `npx dt-app deploy`. The widget is detected on the filesystem and shipped with the app artifact.

Open **Settings**, select **Apps**, and select your widget.

Every registered widget appears under the top-level **Apps** category in **Settings** automatically. No additional placement configuration is needed.
