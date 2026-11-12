## Add the required scopes

Once you have figured out the needed scopes, add them to your app configuration file:

```json testable-app-config-json
{
  "environmentUrl": "<Your-Environment-URL>",
  "app": {
    "id": "<Your-App-ID>",
    "name": "<Your-App-Name>",
    "version": "0.0.0",
    "description": "<Your-App-Description>",
    // highlight-start
    "scopes": [
      {
        "name": "storage:events:read",
        "comment": "allows to query events from Grail"
      },
      {
        "name": "state:app-states:read",
        "comment": "allows to read app state"
      }
    ]
    // highlight-end
  }
}
```

> **Caution**
>
> After changing the scopes in the app configuration file, you must restart the local development server to apply the changes.
