## Upload

This command uploads the most recent package from your workspace's `dist` folder to your connected environment.

### Command prerequisites

- A registered workspace needs to be open in the VS Code window.
- You need to be connected to a Dynatrace environment.
- A ZIP file archive needs to be in the workspace's `dist` folder.

### Workflow steps

1. We check if an upload is possible by querying the number of versions already deployed for this extension.
   - If too many versions exist, you'll be prompted to remove the oldest one.
   - The add-on attempts to remove the oldest version; however, if this fails (for example, monitoring configurations may be linked to it), you'll be prompted to choose a different version to remove.
2. When it's possible, the extension is uploaded.
3. Invoke workflow from [Activate](#activate) to activate this version.
