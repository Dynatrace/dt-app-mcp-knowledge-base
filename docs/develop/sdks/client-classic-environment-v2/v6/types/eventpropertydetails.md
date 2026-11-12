### EventPropertyDetails

Configuration of an event property.

| Name        | Type    | Description                                                                                                                                                |
| ----------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| description | string  | A short description of the event property.                                                                                                                 |
| displayName | string  | The display name of the event property.                                                                                                                    |
| filterable  | boolean | The property can (`true`) or cannot (`false`) be used for filtering in the event selector. Usage in event selector: `property.<key>("value-1", "value-2")` |
| key         | string  | The key of the event property.                                                                                                                             |
| writable    | boolean | The property can (`true`) or cannot (`false`) be set during event ingestion.                                                                               |
