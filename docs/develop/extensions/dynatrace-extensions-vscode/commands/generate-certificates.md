## Generate certificates

This command generates all the credentials needed for signing and validating Extensions 2.0.

### Command prerequisites

- A workspace or folder needs to be opened in the VS Code window.

### Workflow steps

1. An RSA key pair is generated to generate your CA certificate.
2. Another RSA key pair is generated, then used to generate your developer certificate, adding your CA certificate as the issuing authority on this credential.
3. The developer certificate is generated from the RSA key pair, and the CA certificate is added as the issuing authority on this certificate.
   - **Note:** You can customize all details used for generating these certificates through the settings.
4. All intermediary files are stored in the VS Code workspace storage, and the [credential settings](https://developer.dynatrace.com/develop/extensions/dynatrace-extensions-vscode/settings.md#credentials) for this workspace are updated with the paths to the generated files. And this is done in the `./vscode/settings.json` file.
5. Invoke workflow from [Distribute certificate](#distribute-certficate)
