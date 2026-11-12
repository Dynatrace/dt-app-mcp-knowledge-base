## Before you begin

### Installation

You can find **Dynatrace Extensions** in the Visual Studio Code [marketplace](https://marketplace.visualstudio.com/items?itemName=DynatracePlatformExtensions.dynatrace-extensions). Install it from there or via the VS Code extension search.

### Access token

Our VS Code add-on automates many operations around Extension 2.0 development by using the Dynatrace API.

To get the most out of it, create an [API Access Token](https://docs.dynatrace.com/docs/shortlink/token#create-api-token) with the following scopes:

- `WriteConfig`
- `ReadConfig`
- `credentialVault.read`
- `credentialVault.write`
- `extensions.read`
- `extensions.write`
- `extensionEnvironment.write`
- `extensionEnvironment.read`
- `extensionConfigurations.read`
- `extensionConfigurations.write`
- `metrics.read`
- `entities.read`
- `settings.read`
- `settings.write`

> **Tip**
>
> The Dynatrace UI provides a dedicated template called **Extension Development**, which applies these exact token scopes.

### Connectivity settings

This step is only required if your Dynatrace environment is accessible through a dedicated URL that uses a custom-signed or a self-signed SSL certificate.

In this situation, you need to adapt your settings before you can continue with this guide. Go to **File > Preferences > Settings**, expand on **Extensions**, and find the **Dynatrace Extensions** section. Scroll down until you see **Tenant Connectivity Settings** and select **Edit in settings.json**.

![connectivity settings](./assets/tenant_connectivity_settings.png)

Register your dedicated environment URL in the file you've opened and either provide the path to your CA file or turn off SSL verification. For example:

```json title="settings.json"
{
  "dynatraceExtensions.tenantConnectivitySettings": [
    {
      "tenantUrl": "https://my.custom.dynatrace/e/abcd-123",
      "certificatePath": "/tmp/certificates/ca.crt"
    }
  ]
}
```

> **Note**
>
> You can explore these settings in more detail [here](https://developer.dynatrace.com/develop/extensions/dynatrace-extensions-vscode/settings.md#tenant-connectivity-settings)
