## Where to configure custom CSP rules

You can configure custom rules within the app configuration file. Within the `app` property, you can define your CSP rule exceptions.
In the following example, we add two CSP rules to allow images and fonts to load from domains outside the platform.

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
    "csp": {
      "img-src": [
        {
          "value": "https://awesome-cdn.net",
          "comment": "allows to load images from awesome CDN"
        }
      ],
      "font-src": [
        {
          "value": "https://font-paradise.com",
          "comment": "allows to load fonts from font paradise"
        }
      ]
    }
    // highlight-end
  }
}
```
