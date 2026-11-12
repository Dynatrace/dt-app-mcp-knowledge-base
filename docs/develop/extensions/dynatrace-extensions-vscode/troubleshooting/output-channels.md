## Output channels

Most features in the extension are designed to use UI notifications or VS Code's output channels to give feedback when operations go wrong or can't continue.

You can access output channels from the bottom part of your editor. Simply select the **Output** tab and use the dropdown to the right. Two main channels are available for communicating error details:

- **Dynatrace**: A JSON formatted channel, which most features will use for sharing error details payloads.
- **Dynatrace Fast Mode**: This JSON formatted channel communicates build-related errors when [Fast Development Mode](https://developer.dynatrace.com/develop/extensions/dynatrace-extensions-vscode/development_assistance.md#fast-development-mode) is enabled.

Here's an example of the **build** command failing due to an invalid extension name:

![command failure](https://developer.dynatrace.com/assets/images/command_failure-1243b852a1e5a2a82811b60a2736d7a4.png)
