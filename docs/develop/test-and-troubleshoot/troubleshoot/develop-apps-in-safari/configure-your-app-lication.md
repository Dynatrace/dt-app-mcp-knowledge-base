## Configure your app​lication

Now you have to update your app configuration to start using the certificate:

```json testable-app-config-json
{
  "environmentUrl": "<Your-Environment-URL>",
  "app": {
    "id": "<Your-App-ID>",
    "name": "<Your-App-Name>",
    "version": "0.0.0",
    "description": "<Your-App-Description>",
    "scopes": []
  },
  // highlight-start
  "server": {
    "https": {
      "key": "<Your-Key-File>",
      "cert": "<Your-Cert-File>"
    }
  }
  // highlight-end
}
```

Replace the following key-values from your JSON configuration file:

- `<Your-Key-File>` with the path to the `key` file.
- `<Your-Cert-File>` with the path to the `cert` file.

> **Caution**
>
> You should refrain from committing `key` and `cert` files to your code repository, therefore don't put them in your project directory.
