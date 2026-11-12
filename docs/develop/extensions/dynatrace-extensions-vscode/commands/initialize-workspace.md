## Initialize workspace

This command initializes a new or existing workspace for Extension 2.0 development and registers it with our VS Code add-on. As part of initialization, a starting folder structure and some template extension files are created to help any project start correctly.

You can explore this command in detail by visiting our [Getting started guide](https://developer.dynatrace.com/develop/extensions/dynatrace-extensions-vscode/getting-started.md).

### Command prerequisites

- A workspace or folder needs to be opened in the VS Code window.
- You need to be connected to a Dynatrace environment.

### Workflow steps

1. Provisions internal storage for this project.
2. Invoke the workflow from [Load schemas](#load-schemas). You can skip this step if you have already registered your workspace with Dynatrace Extensions.
3. Associate certificates with the workspace. Allow choice:
   - **Use existing**: Checks settings for developer certificate and key.
   - **Generate new ones**: Invokes workflow from [Generate certificates](#generate-certificates).
4. Register the workspace with Dynatrace Extensions.
5. Create a project folder and files based on the chosen template.

### Project templates

#### Extension 2.0

It's the default choice. Whether you already have all the contents and want to register the workspace with our add-on or start a new extension from scratch. It'll generate the extension folder and a manifest with the minimum mandatory details required for any extension.

#### Python extension 2.0

This option creates a new extension that uses the Python data source. As part of the setup, we'll also download and install the [Dynatrace Extensions SDK](https://github.com/dynatrace-extensions/dt-extensions-python-sdk) module for Python.

#### JMX 1.0 conversion

The JMX data source is now available with Extensions 2.0, meaning it's time to convert your JMX extensions from the 1.0 framework. This type of project will guide you to provide a 1.0 JMX Extension (either from a local file or your tenant), and it will convert it to the new framework and create your manifest.

#### Existing 2.0 extension

Need to edit an already deployed extension? Are you curious about what the content of a Dynatrace-built extension looks like? This option downloads an extension 2.0 package from your tenant and unpacks it into your workspace.
