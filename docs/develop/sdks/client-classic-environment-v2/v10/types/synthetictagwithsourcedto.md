### SyntheticTagWithSourceDto

The tag with source of a monitored entity.

| Name           | Type                                      | Description                                                                                   |
| -------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------- |
| context        | null \| string                            | The origin of the tag, such as AWS or Cloud Foundry. Custom tags use the `CONTEXTLESS` value. |
| key (required) | string                                    | The key of the tag.                                                                           |
| source         | null \| "AUTO" \| "USER" \| "RULE_BASED" | The source of the tag, such as USER, RULE_BASED or AUTO.                                     |
| value          | null \| string                            | The value of the tag.                                                                         |
