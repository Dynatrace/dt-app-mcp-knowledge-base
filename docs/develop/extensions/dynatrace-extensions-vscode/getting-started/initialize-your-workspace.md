## Initialize your workspace

It's time to create your first project. If you need to open a different workspace folder, select **Open folder**. Otherwise, select the **Initialize workspace** button to start.

![workspaces_view_empty](https://developer.dynatrace.com/assets/images/workspaces_view_empty-74f60729d3d81d8da644434a98335a05.png)

To learn how to use the Workspaces view, visit [Extension 2.0 workspaces](https://developer.dynatrace.com/develop/extensions/dynatrace-extensions-vscode/specialized_views.md#extension-20-workspaces).

### 1. Schema validation

The workflow starts with your target schema version. Choose any from the list. It ensures that we can validate your extension manifest while you're writing it, allowing you to spot any issues early on.

### 2. Developer certificates

Extensions 2.0 use developer certificates for signing and packaging extensions. Choose **Generate new ones** to generate a new set of certificates kept in VS Code's storage.

> **Tip**
>
> Check the extension's [settings](https://developer.dynatrace.com/develop/extensions/dynatrace-extensions-vscode/settings.md) to get the exact path to where your credentials are stored.

The workflow offers some additional convenience steps:

- Whether to use these certificates as defaults for all workspaces:

  ![convenience step 1](./assets/setup_convenience_1.png)

  - This will update your global settings for Dynatrace Extensions to reflect this choice.
  - As part of this guide, choose **Yes**.

- Whether to upload the new CA certificate to the Dynatrace Credentials Vault.

  ![convenience step 2](./assets/setup_convenience_2.png)

  - You need to provide a name and, optionally, a description.
  - As part of this guide, choose **Yes** and provide the additional details.

- Whether to upload the new CA certificate to locally installed OneAgents and ActiveGates.

  ![convenience step 3](https://developer.dynatrace.com/assets/images/setup_convenience_3-933e05007356129afdb2ea12df97c96e.png)

  - This step only appears if a local OneAgent or ActiveGate installation is detected.
  - This step requires running VS Code with Administrator privileges.
  - As part of this guide, choose **No**.

To learn how to use your existing developer certificates, visit [Credentials](https://developer.dynatrace.com/develop/extensions/dynatrace-extensions-vscode/settings.md#credentials).

### 3. Project template

The final step of the workflow is to choose the type of project you want to start. It allows the extension to generate relevant files.

![project_templates](https://developer.dynatrace.com/assets/images/project_templates-d402d734dfb92b5e30f4720208652c4c.png)

Since this is your first extension, choose **Extension 2.0 ⭐** at this step.

This option is the default choice for new projects and will create the following starting setup:

- `extension` - the folder where all extension assets are placed.
- `extension/extension.yaml` - this is your extension's manifest file.

> **Note**
>
> To learn more about the other types of projects, visit [Project templates](https://developer.dynatrace.com/develop/extensions/dynatrace-extensions-vscode/commands.md#project-templates).

In addition, all templates also create the following folders and files:

- `.vscode` - a folder for storing workspace-specific VS Code settings.
- `dist` - a folder for storing all extension packages.
- `config` - a folder for storing your monitoring configuration files.
- `.gitignore` - a file containing useful rules for ignoring unnecessary items from your git repository.
