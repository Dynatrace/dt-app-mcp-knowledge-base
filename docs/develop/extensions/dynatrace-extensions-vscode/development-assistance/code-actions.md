## Code actions

Code actions happen on key lines of your extension manifest. Your editor will automatically show a lightbulb icon
whenever actions are relevant to the clicked line. Typically these will generate and insert content into
your extension manifest or fix issues highlighted by **Dynatrace Extensions**.

### Currently implemented triggers

| Action trigger                                                                     | Effects                                                                                                                                                                             |
| ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Inside `propertiesCard` when clicking on properties                                | Automatically add properties for the entity's attributes and relations                                                                                                              |
| Inside `entitiesListCards` when clicking on columns                                | Automatically add columns for the listed entity's attributes and relations                                                                                                          |
| Inside `chartsCards` and `entitiesListCards` when clicking on charts inside a card | Automatically add charts for metrics that aren't already in the card                                                                                                                |
| Inside `graphChartConfig` when clicking on metrics                                 | Add more metrics to your chart that aren't used within the surrounding card                                                                                                         |
| Inside `screens` when clicking on `chartsCards`                                    | Automatically add chart cards for entire feature sets of metrics                                                                                                                    |
| Inside `screens` when clicking on `entitiesListCards`                              | Automatically add cards for listing this entity as well as the related ones                                                                                                         |
| When clicking on `metrics` within the Prometheus data source                       | Automatically add details from a [scraped Prometheus endpoint](https://developer.dynatrace.com/develop/extensions/dynatrace-extensions-vscode/development_assistance.md#prometheus) |
| On `screens`                                                                       | Automatically generate entire unified analysis screens for your entities                                                                                                            |
| Inside `entitiesListCards` when clicking on `filtering`                            | Insert entire filtering blocks with a default filter by name                                                                                                                        |
| Inside `entitiesListCards` and inside `filtering`, when clicking on `filters`      | Insert individual filter for the entity's attributes                                                                                                                                |
| Inside `screens` when clicking on `actions`                                        | Insert global actions to configure the extension                                                                                                                                    |
| Inside `actions` when clicking on `actions`                                        | Insert an action expression to configure the extension                                                                                                                              |
