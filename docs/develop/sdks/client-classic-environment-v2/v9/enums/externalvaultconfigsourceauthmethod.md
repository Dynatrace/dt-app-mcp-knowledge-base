### ~~ExternalVaultConfigSourceAuthMethod~~

> ⚠️ **Deprecated**
> Use literal values.

Defines the actual set of fields depending on the value. See one of the following objects:

- `HASHICORP_VAULT_APPROLE` -> HashicorpApproleConfig
- `HASHICORP_VAULT_CERTIFICATE` -> HashicorpCertificateConfig
- `AZURE_KEY_VAULT_CLIENT_SECRET` -> AzureClientSecretConfig
- `CYBERARK_VAULT_USERNAME_PASSWORD` -> CyberArkUsernamePasswordConfig
- `CYBERARK_VAULT_ALLOWED_LOCATION` -> CyberArkAllowedLocationConfig

#### Enum keys

`AzureKeyVaultClientSecret` | `CyberarkVaultAllowedLocation` | `CyberarkVaultUsernamePassword` | `HashicorpVaultApprole` | `HashicorpVaultCertificate`
