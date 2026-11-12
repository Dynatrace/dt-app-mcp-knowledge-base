### ExtensionAssetsDto

List of assets imported with the active extension environment configuration.

| Name               | Type                                  | Description                                                                                                                    |
| ------------------ | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| assets (required)  | Array\<[AssetInfoDto](#assetinfodto)> | The list of the imported assets.                                                                                               |
| errors (required)  | Array\<string>                        | List of errors during asset import                                                                                             |
| status (required)  | string                                | The status of the assets list.                                                                                                 |
| version (required) | string                                | Version of the active extension environment configuration. <br />Pattern: `^(0\|[1-9]\d*)(\.(0\|[1-9]\d*))?(\.(0\|[1-9]\d*))?` |
