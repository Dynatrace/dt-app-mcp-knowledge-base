## Build

This command builds your extension and bundles it into a signed ZIP file archive, then places it in the `dist` folder of the workspace.

### Command prerequisites

- A registered workspace needs to be open in the VS Code window.
- Developer certificates need to be associated with the workspace.
- No error/problems need to be detected with the extension manifest.

### Workflow steps

1. The extension version is picked up from the manifest. If you're connected to a Dynatrace environment, the version is checked for conflicts and automatically incremented if needed.
2. The extension manifest and assets are bundled into a ZIP file archive signed using your developer credentials. The resulting signature and the archive are added to a final ZIP file representing the extension package.
3. If you're connected to a Dynatrace environment, the package is validated against it. Any validation errors are communicated in an Output Channel (within your editor window), and the workflow terminates. Only valid packages are moved to your workspace's `dist` folder.
4. Invoke workflow from [Upload](#upload).
