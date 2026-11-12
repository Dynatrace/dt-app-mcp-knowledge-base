## Convert JMX

This command converts an existing JMX extension to Extension 2.0.

### Workflow steps

1. You're prompted on how the JMX extension should be loaded in:
   - **Locally** - browse your filesystem and select a JSON or ZIP file containing the JMX extension.
   - **Remotely** - browse JMX extensions available on your connected tenant.
2. You're prompted to select a process technology if one can't be detected automatically.
3. You're asked whether to include the data on your host's details page.
4. The workflow processes the JMX extension JSON file and converts it to an equivalent extension 2.0 manifest.
5. The workflow saves the generated manifest at `extension/extension.yaml` or prompts you for a save destination if this folder doesn't exist in your workspace.

> **Tip**
>
> You can explore this workflow as part of our [JMX 1.0 Conversion guide](https://developer.dynatrace.com/develop/extensions/dynatrace-extensions-vscode/guides/migrate/jmx-conversion.md).
