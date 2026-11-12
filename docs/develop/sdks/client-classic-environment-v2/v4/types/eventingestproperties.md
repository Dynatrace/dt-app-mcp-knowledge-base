### EventIngestProperties

A map of event properties.

- To set event properties with predefined behavior, use classic `dt.event.*` and `dt.davis.*` properties. To check which properties belong to classic API, see [Events API v2 - GET all event properties](https://dt-url.net/9622g1w).
- To attach entity information to an event, use `dt.entity.*` keys.
- To provide additional info, you can use any key outside of the `dt.*` namespace.

Values of event properties with predefined behavior must fulfill the requirements of the respective property.

A maximum of 100 properties can be specified. A property key is allowed to contain up to 100 characters. A property value is allowed to contain up to 4096 characters.

**type**: Record\<string, string | undefined>
