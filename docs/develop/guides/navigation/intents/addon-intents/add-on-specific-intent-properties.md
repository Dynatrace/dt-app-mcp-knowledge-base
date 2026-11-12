## Add-on-specific intent properties

For general intent properties, see the [Receive intents guide](https://developer.dynatrace.com/develop/guides/navigation/intents/receive-intents.md).

| Property               | Type                                                | Required                                                                                                                  | Description                                                                                                    |
| ---------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `addonMode`            | `"overlay"`                                         | Optional for regular intents. Required to make the intent an add-on.                                                      | "overlay" renders the target app in an overlay on top of the source app.                                       |
| `addonConfig`          | object                                              | Optional. Only valid when `addonMode` is `"overlay"`.                                                                     | Visual configuration for the overlay. See sub-fields below.                                                    |
| `addonConfig.size`     | `"small"`\| `"medium"`\| `"large"` \| `"maximized"` | Optional. Defaults to `{ width:"medium", height: "auto" }`                                                                | Controls the overlay size. Recommended preset size. To set custom size, see the `Custom sizing` section below. |
| `addonConfig.title`    | string                                              | Optional. Defaults to the add-on app's name. Cannot be combined with `addonConfig.headless: true`.                        | Label shown in the overlay header.                                                                             |
| `addonConfig.headless` | boolean                                             | Optional. Defaults to `false`. Cannot be combined with `addonConfig.title`.                                               | When `true`, the overlay renders without a title bar.                                                          |
| `responseProperties`   | object                                              | Optional in general. Required for intents-with-response (the add-on hands a value back via `resolveAddonWithResponse()`). | Schema for data the add-on returns to the source app. Same shape as `properties`.                              |

:::note Custom sizing
We recommend using the preset sizes (`"small"`, `"medium"`, `"large"`, `"maximized"`) for `addonConfig.size`.

However, if you need more control, you can use the detailed object form to mix preset widths with flexible heights - including a **pixel value** for exact dimensions or **`"auto"`** to let the overlay adapt to its content:

```json
{
  "addonConfig": {
    "size": {
      "width": "small" | "medium" | "large",
      "height": "small" | "medium" | "large" | "auto" | number
    }
  }
}
```

:::

**Example combining the fields:**

```json
{
  "intents": {
    "pick-dashboard": {
      "description": "Select existing dashboard or create a new one",
      "addonMode": "overlay",
      "properties": {},
      "responseProperties": {
        "dt.document.id": {
          "required": true,
          "schema": { "type": "string" }
        }
      }
    }
  }
}
```
