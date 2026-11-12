## Set modal titles for add-ons

Add-on titles appear in the modal header where the add-on is displayed. They don't affect the browser tab title. You can set an add-on title in two ways:

- **Declaration**: Set `addonConfig.title` in the intent declaration within your app configuration.

  ```json title="app.config.json"
  {
    "app": {
      "intents": {
        "my-intent": {
          "addonMode": "overlay",
          "addonConfig": {
            "title": "My overlay",
            "size": { "width": "large", "height": 500 }
          }
        }
      }
    }
  }
  ```

- **Runtime**: Call `usePageTitle` inside the app that renders as an add-on. The SDK runtime detects the `document.title` change and updates the modal title accordingly.

  ```tsx title="ui/addons/MyAddon.tsx"
  import React from 'react';
  import { usePageTitle } from '../hooks/usePageTitle';

  export const MyAddon = () => {
    usePageTitle('My addon title');

    return <div>...</div>;
  };
  ```
