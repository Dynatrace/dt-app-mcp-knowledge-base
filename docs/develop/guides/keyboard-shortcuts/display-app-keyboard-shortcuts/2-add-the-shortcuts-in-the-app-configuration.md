## 2. Add the shortcuts in the app configuration

Now, you need to add the shortcuts in the app configuration file. In the following example, you're adding a new config section, `uiCommands`, that defines all the shortcuts for your app:

```json testable-app-config-json
{
  "environmentUrl": "<Your-Environment-URL>",
  "app": {
    "id": "<Your-App-ID>",
    "name": "<Your-App-Name>",
    "version": "0.0.0",
    "description": "<Your-App-Description>",
    "scopes": [],
    // highlight-start
    "uiCommands": {
      "categories": [
        {
          "id": "general.category",
          "name": "General",
          "commands": [
            {
              "id": "open.search",
              "description": "Open global search dialog",
              "keyBindings": {
                "macos": ["Command+k"],
                "other": ["Control+k"]
              }
            },
            {
              "id": "open.keyboard",
              "description": "Open keyboard keyBindings dialog",
              "keyBindings": ["Shift+/"]
            }
          ]
        }
      ]
    }
    // highlight-end
  }
}
```

In the example, you have the following:

- You have created a category named **General** using the `categories` key.
- You created commands using the `commands` key and specified `id`, `description`, and `keyBindings` for each command.
- You have commands with separate key bindings for **MacOS**.

> **Note**
>
> You need to restart the development server each time you change app configuration to see the updates.
