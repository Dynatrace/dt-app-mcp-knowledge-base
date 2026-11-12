## Connect to Dynatrace

Begin by connecting with your Dynatrace environment. To connect, you need to do the following:

- Go to the Dynatrace Extensions view in the VS Code UI, then select the **Add environment** button as shown.

  ![add_environment](https://developer.dynatrace.com/assets/images/add_environment-a438b5d678b6e54660009c7592482f7c.png)

  You'll need to provide the base URL to access Dynatrace. It should follow one of these patterns:

  - `https://<Id>.live.dynatrace.com` for SaaS environments.
  - `https://<Domain>/e/<Id>` for Managed environments.
  - `https://<Id>.apps.dynatrace.com` for the latest Dynatrace Platform.

  **Note**: Replace `<Id>` with your environment ID and `<Domain>` with your managed environment domain.

- Provide the **API Access Token** you prepared earlier and optionally provide a label.

- Set this as your current environment.

The add-on displays your environment in the list and will use the current environment for all API operations. Visit [Environments](https://developer.dynatrace.com/develop/extensions/dynatrace-extensions-vscode/specialized_views.md#environments) to learn more about using the Environment view.
