## Create alert

This command creates a [metric event](https://docs.dynatrace.com/docs/shortlink/metric-events) based on metrics defined in your extension's manifest.

### Command prerequisites

- A registered workspace needs to be open in the VS Code window.
- The extension manifest needs to contain metrics metadata.

### Workflow steps

1. The command parses your extension manifest and presents a selection box with all available metrics. Select one to continue.
2. You are then prompted for a title for this alert.
3. You need to choose whether your threshold breach happens when the metric goes **above** or **below** a given level.
4. Finally, provide the actual value the alert threshold relates to.
5. The command completes by writing your alert JSON file in the `./extension/alerts` folder and updating your extension manifest to include the newly generated alert.
