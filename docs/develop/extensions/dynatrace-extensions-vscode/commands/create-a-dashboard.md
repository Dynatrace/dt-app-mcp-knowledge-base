## Create a dashboard

This command reads through the extension manifest and generates an overview dashboard which serves as a landing page for the extension.

### Command prerequisites

- A registered workspace needs to be open in the VS Code window.
- The extension manifest needs to contain at least a [topology definition](https://docs.dynatrace.com/docs/shortlink/wmi-tutorial-04).

### Workflow steps

1. The command extracts the generic entity types defined in your manifest and any metrics associated with them. The first one or two metrics are taken for each entity type.
2. Your dashboard is created from a template containing the following:
   - Single value tiles which show the count of distinct monitored entities.
   - A list of markdown links so that each entity has a quick entry point to its unified analysis screen.
   - Tables for each entity type, alongside graph charts based on associated metrics.
3. Your dashboard is saved in the `./extension/dashboards/overview_dashboard.json` file, and the extension manifest is edited to include the reference to this asset.
4. The workflow finishes with the prompt to upload this dashboard to your Dynatrace environment.
   > **Note**
   >
   > Your dashboard will automatically be uploaded as part of the extension deployment. This final step is offered if you want an early preview of the asset before your extension deployment.
