## Register page token for a route

Within your app configuration file, you can specify page tokens for your routes.
The `app` property includes an optional property called `pageTokens`. In the following example you can see an example of how such a configuration might look:

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
    "pageTokens": {
      "documentation": "/about",
      "appchangelog": "/changelog"
    }
    // highlight-end
  }
}
```

This allows you to use the `documentation` page token to link to the `/about` route from outside of your app. If you need to change the route name in the future, you only need to change the documentation `pageToken` parameter. The static link that uses the `documentation` page token will still be consistent.
