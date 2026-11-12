## Activate

This command activates a version of your workspace's extension.

### Command prerequisites

- A registered workspace needs to be open in the VS Code window.
- You need to be connected to a Dynatrace environment.

### Workflow steps

1. The extension name is read from the manifest in your workspace.
2. Your Dynatrace environment is queried for the available versions of the extension, and you'll be prompted to choose which one to activate.
   - This step is skipped when the command is invoked from another workflow. For example, [Upload](#upload)
3. The chosen version is activated in your Dynatrace environment.
