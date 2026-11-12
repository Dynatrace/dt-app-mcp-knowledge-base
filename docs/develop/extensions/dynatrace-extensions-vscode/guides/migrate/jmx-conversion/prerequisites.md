## Prerequisites

1. Complete the first-time setup for your editor

   For simplicity, this guide will assume you have already configured your editor for first-time use. If you haven't used Dynatrace Extensions for VS Code before, follow our [Getting started guide](https://developer.dynatrace.com/develop/extensions/dynatrace-extensions-vscode/getting-started.md) to complete your first-time setup.

   > **Note**
   >
   > This guide will assume you have access to developer credentials. If you followed the "Getting started" guide, store the generated credentials in VS Code's global settings - an example is shown [here](https://developer.dynatrace.com/develop/extensions/dynatrace-extensions-vscode/settings.md#when-using-your-credentials)

2. Enable JMX 2.0 extensions in your environment

   Go to **Settings > Preferences > OneAgent features** and enable **Java Metric Extensions 2.0 (JMX)**, then restart your monitored Java processes.

   ![oneagent feature](https://developer.dynatrace.com/assets/images/jmx_feature-3150ca8984c5adc2473bb10b06146f9c.png)
