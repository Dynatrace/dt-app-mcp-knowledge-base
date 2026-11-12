### ExtensionInfo

A list of extensions with additional metadata.

| Name                     | Type           | Description                                                                                                                    |
| ------------------------ | -------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| activeVersion            | null \| string | Active version in the environment (null if none is active) <br />Pattern: `^(0\|[1-9]\d*)(\.(0\|[1-9]\d*))?(\.(0\|[1-9]\d*))?` |
| extensionName (required) | string         | Extension name                                                                                                                 |
| keywords (required)      | Array\<string> | Extension keywords for the highest version                                                                                     |
| version (required)       | string         | Highest installed version <br />Pattern: `^(0\|[1-9]\d*)(\.(0\|[1-9]\d*))?(\.(0\|[1-9]\d*))?`                                  |
