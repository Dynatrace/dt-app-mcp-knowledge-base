## Build the extension

If you haven't done it yet, you can generate developer certificates using the
Visual Studio Code command
`Dynatrace extensions: Generate certificates`. For more information about this command,
visit the [Generate certificates documentation](https://developer.dynatrace.com/develop/extensions/dynatrace-extensions-vscode/commands.md#generate-certificates).

To create the extension package, run the `Dynatrace extensions: Build` command.

This command will run the `dt-sdk build` command,
which will create the `custom_rabbitmq-extension-0.0.1.zip` file in the `dist` folder,
a signed extension file.
Dynatrace will only run extensions [signed by a trusted certificate](https://docs.dynatrace.com/docs/shortlink/extensions-concepts#digital-signature).

The Visual Studio Code extension will also prompt you to upload the extension
to your Dynatrace environment, a nice quality of life feature.
