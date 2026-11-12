## Code completions

Code completions or suggestions happen at key points within the extension manifest. Either automatically or on-demand (using Ctrl + Space), these offer known values that can be inserted at the location of your cursor.

### Implemented triggers

| Keyword trigger                                                                       | Effects                                                                                                                                                |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| On `fromType:` or `toType:` inside `topology.relationships` list items                | Browse built-in and custom entity types                                                                                                                |
| On `sourceAttribute:` inside `mappingRules` list items of topology relationships      | Browse entity attributes (entity needs to be present in the `fromType` attribute)                                                                      |
| On `destinationAttribute:` inside `mappingRules` list items of topology relationships | Browse entity attributes (entity needs to be present in `toType` attribute)                                                                            |
| On `entityType:` and `entityTypes:`                                                   | Browse relevant entity types                                                                                                                           |
| On `key:` (of attributes inside screen properties)                                    | Attributes are suggested from topology and built-in values                                                                                             |
| On `entitySelectorTemplate:`                                                          | Use Ctrl + Space to trigger completions as you build your selector or choose one of the pre-built selectors (from relationships seen in your manifest) |
| On `iconPattern:` (within topology rules) or `icon:` (within staticContent header)    | Browse available Barista icon codes                                                                                                                    |
| On `key:` (of cards in `screens`, either in layout or individual lists)               | Browse keys of cards defined but not yet utilized                                                                                                      |
| On `value:`, for metrics and dimensions of a Prometheus extension                     | Browse metrics and dimensions scraped using the Prometheus code lens                                                                                   |
| On `description:` (in the `metrics` section of the manifest)                          | For those metrics that have been scraped using the Prometheus code lens, add the description from the scraped data                                     |
