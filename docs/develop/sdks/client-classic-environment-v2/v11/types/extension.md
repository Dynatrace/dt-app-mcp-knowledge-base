### Extension

| Name                           | Type                                                        | Description                                                                                                          |
| ------------------------------ | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| author (required)              | [AuthorDto](#authordto)                                     | Extension author                                                                                                     |
| dataSources (required)         | Array\<string>                                              | Data sources that extension uses to gather data                                                                      |
| extensionName (required)       | string                                                      | Extension name                                                                                                       |
| featureSets (required)         | Array\<string>                                              | Available feature sets                                                                                               |
| featureSetsDetails (required)  | [ExtensionFeatureSetsDetails](#extensionfeaturesetsdetails) | Details of feature sets                                                                                              |
| fileHash (required)            | string                                                      | SHA-256 hash of uploaded Extension file                                                                              |
| metadata (required)            | [ExtensionMetadata](#extensionmetadata)                     | Additional non-asset information about the extension, as key-value pairs                                             |
| minDynatraceVersion (required) | string                                                      | Minimal Dynatrace version that works with the extension                                                              |
| minEECVersion (required)       | string                                                      | Minimal Extension Execution Controller version that works with the extension                                         |
| variables (required)           | Array\<string>                                              | Custom variables used in extension configuration                                                                     |
| version (required)             | string                                                      | Extension version<br /><br />**Example:** `1.2.3`<br />Pattern: `^(0\|[1-9]\d*)(\.(0\|[1-9]\d*))?(\.(0\|[1-9]\d*))?` |
