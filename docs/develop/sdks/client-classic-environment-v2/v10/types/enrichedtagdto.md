### EnrichedTagDto

| Name                 | Type           | Description                                                                                                   |
| -------------------- | -------------- | ------------------------------------------------------------------------------------------------------------- |
| context              | null \| string | The origin of the tag, such as AWS or Cloud Foundry. Custom tags use the `CONTEXTLESS` value.                 |
| key                  | string         | The key of the tag.                                                                                           |
| source               | null \| string | The source where the tag comes from. Possible values are: * Auto tags
* Environment tags
* User provided tags |
| sourceSetting        | null \| string | The path to the settings object in the Settings API. Only available for tags with the Auto tags source.       |
| stringRepresentation | string         | The string representation of the tag.                                                                         |
| value                | null \| string | The value of the tag.                                                                                         |
