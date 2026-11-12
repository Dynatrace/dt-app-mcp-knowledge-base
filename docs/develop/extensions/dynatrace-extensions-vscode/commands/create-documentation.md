## Create documentation

This command automatically generates rich documentation in a `README.md` file by analyzing the extension package and its contents.

### Command prerequisites

- A registered workspace needs to be open in the VS Code window.

### Workflow steps

1. The command reads through the extension manifest, extracting all generic topology entities.
2. Next, metrics are extracted from the manifest.
3. Next, dashboards are extracted from the manifest.
4. After that, alerts are processed into human-readable summaries.
5. Metrics are mapped to feature sets and linked to the defined entities.
6. The readme file is created, with missing information skipped as needed.
