## Load schemas

This command downloads schema files of a specific version from your connected Dynatrace environment and sets up validation for the extension manifest. If your project already has an extension manifest, this is updated with the chosen version.

### Command prerequisites

- You need to be connected to a Dynatrace environment.

### Workflow steps

1. Your Dynatrace environment is queried for the list of available schema versions. And you'll be prompted to select which version to use.
2. The files associated with the selected schema version are downloaded and stored in the global Visual Studio Code storage.
   - If you have downloaded the files before, you'll be prompted and can skip this step.
3. Workspace settings are updated to enable validation of your extension manifest with the selected schema.
   - If a manifest file is present in the workspace, it will be updated with the selected minimum version.
