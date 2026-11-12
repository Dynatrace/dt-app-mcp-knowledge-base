## Declare the intents

An app can handle multiple intents that you declare in your app configuration file inside the `app.intents` property. You define an intent using an object where the key of the object is **intentId**. It consists of the following properties:

- **description**: A short statement describing the action. It appears in the **Open with...** dialog.
- **properties**: An object where you can define every payload property and its corresponding data type. Every payload property is defined using the **key** of this object, and the corresponding data type is defined with an object with the following properties:
  - **required**: A boolean defining whether a property is mandatory.
  - **schema**: A JSON Schema object describing the shape of the property.

> **Note**
>
> If you want your intent declaration to be matched in the **Open with...** flow, you need to add one required property at least. This prevents overly broad matches.
>
> If you only use explicit intents—which target a specific app and `intentId`—you can exclusively declare optional properties to support flexible cross-app navigation with dynamic payloads.

Here is an example of an app configuration with intent declarations:

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
    "intents": {
      "view_host": {
        "description": "View the host",
        "properties": {
          "dt.entity.host": {
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        }
      },
      "view_query": {
        "description": "View query",
        "properties": {
          "dt.query": {
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        }
      }
    }
    // highlight-end
  }
}
```
