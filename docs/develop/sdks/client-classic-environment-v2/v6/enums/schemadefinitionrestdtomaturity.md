### ~~SchemaDefinitionRestDtoMaturity~~

> ⚠️ **Deprecated**
> Use literal values.

The maturity of the schema.
Possible values:

- PREVIEW: Preview features are not generally available, but might be available in specific environments as part of early-access programs. These are the most likely to change in incompatible ways.
- EARLY_ADOPTER: Features marked "early adopter" are available in all environments, but are not mature enough to warrant the "general availability" designation. We don't expect incompatible changes for these, but please be aware, that these are not fully stable yet and incompatible changes may be necessary in rare cases.
- GENERAL_AVAILABILITY: Features marked "general availability" are the most stable. While the schemas will still evolve over time, care will be taken to only do so in a backward-compatible manner.

In any case, automations should make use of the `schemaVersion` field when writing settings objects.

#### Enum keys

`EarlyAdopter` | `GeneralAvailability` | `Preview`
